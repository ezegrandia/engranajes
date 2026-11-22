/* =========================================================================
   VISUALES 3D — escenas axonométricas interactivas, sin librerías
   Recrea CADA transmisión del práctico de reductores, con dientes reales,
   flechas de sentido de giro por rueda y panel por etapa.
   Se monta solo: cualquier <div data-3d="..."> se inicializa.
   ========================================================================= */
(function () {
  "use strict";

  var activos = [];
  var reducido = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var ESCENAS = {};

  /* --------------------------------------------------------------- vectores */
  function add(a, b) { return [a[0] + b[0], a[1] + b[1], a[2] + b[2]]; }
  function sub(a, b) { return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]; }
  function mul(a, k) { return [a[0] * k, a[1] * k, a[2] * k]; }
  function dot(a, b) { return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; }
  function cross(a, b) {
    return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  }
  function norm(a) { var L = Math.sqrt(dot(a, a)) || 1; return [a[0] / L, a[1] / L, a[2] / L]; }
  function eje(v) {
    if (!v) return [0, 1, 0];
    if (typeof v === "string") return { x: [1, 0, 0], y: [0, 1, 0], z: [0, 0, 1] }[v] || [0, 1, 0];
    return norm(v);
  }

  /* base ortonormal (u,v,axis) derecha: cross(u,v) = axis */
  function baseEje(axis) {
    var t = Math.abs(axis[0]) < 0.9 ? [1, 0, 0] : [0, 0, 1];
    var u = norm(cross(t, axis));
    return { u: u, v: cross(axis, u) };
  }

  /* --------------------------------------------------------- cámara / proy */
  function camara(cam) {
    var ca = Math.cos(cam.az), sa = Math.sin(cam.az);
    var ce = Math.cos(cam.el), se = Math.sin(cam.el);
    return {
      d: [ce * sa, -ce * ca, se],       // hacia la cámara
      r: [ca, sa, 0],                   // derecha en pantalla
      u: [-se * sa, se * ca, ce],       // arriba en pantalla
      s: cam.s, cx: cam.cx, cy: cam.cy
    };
  }
  function proy(p, C) {
    return [C.cx + dot(p, C.r) * C.s, C.cy - dot(p, C.u) * C.s, dot(p, C.d)];
  }
  function aPath(pts) {
    var d = "", i;
    for (i = 0; i < pts.length; i++) d += (i ? "L" : "M") + pts[i][0].toFixed(1) + " " + pts[i][1].toFixed(1);
    return d + "Z";
  }
  function aLinea(pts) {
    var d = "", i;
    for (i = 0; i < pts.length; i++) d += (i ? "L" : "M") + pts[i][0].toFixed(1) + " " + pts[i][1].toFixed(1);
    return d;
  }

  /* envolvente convexa 2D (banda del cilindro) */
  function convexa(puntos) {
    var p = puntos.slice().sort(function (a, b) { return a[0] - b[0] || a[1] - b[1]; });
    if (p.length < 3) return p;
    var cr = function (o, a, b) { return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]); };
    var inf = [], sup = [], i;
    for (i = 0; i < p.length; i++) {
      while (inf.length >= 2 && cr(inf[inf.length - 2], inf[inf.length - 1], p[i]) <= 0) inf.pop();
      inf.push(p[i]);
    }
    for (i = p.length - 1; i >= 0; i--) {
      while (sup.length >= 2 && cr(sup[sup.length - 2], sup[sup.length - 1], p[i]) <= 0) sup.pop();
      sup.push(p[i]);
    }
    return inf.slice(0, -1).concat(sup.slice(0, -1));
  }

  /* ------------------------------------------------------ contornos de rueda */
  function aro3(c, B, r, ang, n) {
    var pts = [], i, a;
    for (i = 0; i < n; i++) {
      a = ang + i * 2 * Math.PI / n;
      pts.push([
        c[0] + B.u[0] * r * Math.cos(a) + B.v[0] * r * Math.sin(a),
        c[1] + B.u[1] * r * Math.cos(a) + B.v[1] * r * Math.sin(a),
        c[2] + B.u[2] * r * Math.cos(a) + B.v[2] * r * Math.sin(a)
      ]);
    }
    return pts;
  }

  /* contorno dentado (dibuja el frente de la rueda) */
  function contornoDientes(c, B, r, m, z, ang, interno) {
    var ro, rr, paso, wT, wR, pts = [], i, a, k, filas;
    if (!z || z < 6) return aro3(c, B, r + (m || 0), ang, 26);
    ro = interno ? r - m : r + m;
    rr = interno ? r + m * 1.3 : Math.max(r * 0.34, r - m * 1.35);
    paso = 2 * Math.PI / z;
    wT = paso * 0.18;
    wR = paso * 0.29;
    for (i = 0; i < z; i++) {
      a = ang + i * paso;
      filas = [[a - wR, rr], [a - wT, ro], [a + wT, ro], [a + wR, rr], [a + paso * 0.5, rr]];
      for (k = 0; k < filas.length; k++) {
        var ai = filas[k][0], ri = filas[k][1];
        pts.push([
          c[0] + B.u[0] * ri * Math.cos(ai) + B.v[0] * ri * Math.sin(ai),
          c[1] + B.u[1] * ri * Math.cos(ai) + B.v[1] * ri * Math.sin(ai),
          c[2] + B.u[2] * ri * Math.cos(ai) + B.v[2] * ri * Math.sin(ai)
        ]);
      }
    }
    return pts;
  }

  /* proyecta una lista de puntos 3D → [[x,y],…] */
  function proyLista(pts, C) {
    var out = [], i;
    for (i = 0; i < pts.length; i++) out.push(proy(pts[i], C));
    return out;
  }
  function xy(pts) {
    var out = [], i;
    for (i = 0; i < pts.length; i++) out.push([pts[i][0], pts[i][1]]);
    return out;
  }

  /* punto del contorno a un ángulo dado (para flechas y marcas) */
  function puntoEn(c, B, r, a, eje2, off) {
    return [
      c[0] + (B.u[0] * Math.cos(a) + B.v[0] * Math.sin(a)) * r + eje2[0] * off,
      c[1] + (B.u[1] * Math.cos(a) + B.v[1] * Math.sin(a)) * r + eje2[1] * off,
      c[2] + (B.u[2] * Math.cos(a) + B.v[2] * Math.sin(a)) * r + eje2[2] * off
    ];
  }

  /* --------------------------------------------------------------- escena */
  function Escena(host, cfg) {
    var self = this;
    this.cfg = cfg;
    this.vb = cfg.vb || [800, 470];
    this.cam = {
      az: cfg.az != null ? cfg.az : -0.64,
      el: cfg.el != null ? cfg.el : 0.46,
      s: 1, cx: 0, cy: 0
    };
    this.t = 0;
    this.corriendo = false;
    this.raf = null;
    this.ultimo = 0;
    this.etapa = -1;
    this.orden = "";
    this.visible = true;

    this.piezas = (cfg.piezas || []).map(function (p) { return self.normalizar(p); });
    if (cfg.meshes && cfg.faseAuto !== false) this.resolverFases();

    host.innerHTML =
      '<div class="v3d">' +
      '  <div class="v3d-lienzo">' +
      '    <svg viewBox="0 0 ' + this.vb[0] + " " + this.vb[1] + '" width="' + this.vb[0] + '" height="' + this.vb[1] +
      '" role="img" aria-label="' + (cfg.alt || "Transmisión en 3D") + '"></svg>' +
      '    <div class="v3d-hint no-print">arrastrá para girar la vista · rueda del mouse para acercar</div>' +
      "  </div>" +
      '  <div class="v3d-panel">' +
      '    <div class="v3d-datos"></div>' +
      '    <div class="v3d-ctrl no-print">' +
      '      <button class="btn btn-mini v3d-play">⏸ Pausar</button>' +
      '      <div class="v3d-vistas">' +
      '        <button class="chip" data-vista="tres" title="vista 3/4">3/4</button>' +
      '        <button class="chip" data-vista="frente" title="vista frontal">Frente</button>' +
      '        <button class="chip" data-vista="arriba" title="vista desde arriba">Arriba</button>' +
      "      </div>" +
      '      <label class="sl">velocidad <output></output><input type="range" min="20" max="200" step="10" value="100"></label>' +
      "    </div>" +
      "  </div>" +
      "</div>";

    this.svg = host.querySelector("svg");
    this.panel = host.querySelector(".v3d-datos");
    this.slider = host.querySelector(".sl input");
    this.zoom = 1;

    this.construir();
    this.encuadrar();
    this.kTxt = this.calcKTxt();
    this.actualizar();
    this.pintarPanel();

    /* órbita */
    var drag = null;
    this.svg.addEventListener("pointerdown", function (e) {
      drag = { x: e.clientX, y: e.clientY, az: self.cam.az, el: self.cam.el };
      try { self.svg.setPointerCapture(e.pointerId); } catch (err) {}
    });
    this.svg.addEventListener("pointermove", function (e) {
      if (!drag) return;
      self.cam.az = drag.az + (e.clientX - drag.x) * 0.009;
      self.cam.el = Math.max(-0.25, Math.min(1.35, drag.el + (e.clientY - drag.y) * 0.007));
      self.encuadrar();
      self.actualizar();
    });
    ["pointerup", "pointercancel", "pointerleave"].forEach(function (ev) {
      self.svg.addEventListener(ev, function () { drag = null; });
    });
    this.svg.addEventListener("wheel", function (e) {
      e.preventDefault();
      self.zoom = Math.max(0.55, Math.min(2.4, self.zoom * (e.deltaY > 0 ? 0.92 : 1.08)));
      self.encuadrar();
      self.actualizar();
    }, { passive: false });

    var bPlay = host.querySelector(".v3d-play");
    bPlay.addEventListener("click", function () {
      if (self.corriendo) { self.parar(); } else { self.arrancar(); }
      bPlay.innerHTML = self.corriendo ? "⏸ Pausar" : "▶ Reproducir";
    });
    var VISTAS = {
      tres: [cfg.az != null ? cfg.az : -0.64, cfg.el != null ? cfg.el : 0.46],
      frente: [0, 0.05],
      arriba: [cfg.az != null ? cfg.az : -0.64, 1.36]
    };
    var chipsV = host.querySelectorAll(".v3d-vistas .chip");
    function elegirVista(k) {
      self.cam.az = VISTAS[k][0];
      self.cam.el = VISTAS[k][1];
      self.zoom = 1;
      self.encuadrar();
      self.actualizar();
      Array.prototype.forEach.call(chipsV, function (c) {
        c.classList.toggle("activo", c.getAttribute("data-vista") === k);
      });
    }
    Array.prototype.forEach.call(chipsV, function (c) {
      c.addEventListener("click", function () { elegirVista(c.getAttribute("data-vista")); });
    });
    elegirVista("tres");
    this.slider.addEventListener("input", function () {
      this.previousElementSibling.textContent = this.value + " %";
    });
    this.slider.previousElementSibling.textContent = "100 %";

    this.observar();
    if (!reducido) this.arrancar();
    else bPlay.innerHTML = "▶ Reproducir";
    window.addEventListener("resize", function () {
      self.kTxt = self.calcKTxt();
      self.actualizar();
    });
    activos.push(this);
  }

  /* factor de tamaño de rótulos: compensa el escalado del SVG en pantallas chicas */
  Escena.prototype.calcKTxt = function () {
    var w = this.svg.clientWidth || this.vb[0];
    return Math.min(2, Math.max(1, this.vb[0] / Math.max(240, w)));
  };

  /* normaliza una pieza del config */
  Escena.prototype.normalizar = function (o) {
    var k = this.cfg.k != null ? this.cfg.k : 0.006;
    var p = {
      tipo: o.tipo || "recto",
      pos: o.pos || [0, 0, 0],
      axis: eje(o.axis),
      r: o.r,
      m: o.m || 0,
      z: o.z || 0,
      w: o.w != null ? o.w : (o.m ? 9.5 * o.m : (o.r || 20) * 0.5),
      color: o.color || "currentColor",
      et: o.et || "",
      et2: o.et2 || "",
      n: o.n || 0,
      fase: o.fase != null ? o.fase : null,
      twist: o.twist || 0,
      apex: o.apex || null,
      interno: !!o.interno,
      marcas: o.marcas != null ? o.marcas : 0,
      hub: o.hub !== false,
      rama: o.rama,
      sat: o.sat,
      noFlecha: !!o.noFlecha
    };
    p.wv = o.wv != null ? o.wv : p.n * k;
    p.ang = o.ang || null;
    p.mover = o.mover || null;
    if (p.fase == null) p.fase = 0;
    p.B = baseEje(p.axis);
    return p;
  };

  /* fases automáticas: diente contra hueco en cada engrane */
  Escena.prototype.resolverFases = function () {
    var P = this.piezas, self = this;
    (this.cfg.meshes || []).forEach(function (mm) {
      var a = P[mm[0]], b = P[mm[1]];
      if (!a || !b || !a.z || !b.z) return;
      var d = sub(b.pos, a.pos);
      var th = Math.atan2(dot(d, a.B.v), dot(d, a.B.u));
      if (mm.length > 2 && mm[2] === "rev") th += Math.PI;      // engrane interior
      self.fase = th;
      a.fase = th;
      b.fase = th + Math.PI + Math.PI / b.z;
    });
  };

  Escena.prototype.pos = function (p, t) {
    if (p.mover) return p.mover(p, t, this);
    return p.pos;
  };
  Escena.prototype.angulo = function (p, t) {
    if (p.ang) return p.ang(p, t, this);
    return p.fase + p.wv * t;
  };

  /* --------------------------------------------------------- construcción */
  Escena.prototype.construir = function () {
    var svg = this.svg, html = "";
    html += '<g class="v3d-ejes"></g>';
    html += '<g class="v3d-correa"></g>';
    this.piezas.forEach(function (p, i) {
      html += '<g class="pza" data-i="' + i + '">'
        + '<path class="pza-sombra"/>'
        + '<path class="pza-banda"/>'
        + '<path class="pza-atras"/>'
        + '<path class="pza-detalle"/>'
        + '<path class="pza-frente"/>'
        + '<path class="pza-tinte"/>'
        + '<path class="pza-rayas"/>'
        + '<path class="pza-flecha"/>'
        + '<path class="pza-punta"/>'
        + '<circle class="pza-hub" r="0"/>'
        + '<text class="pza-et"></text>'
        + "</g>";
    });
    html += '<g class="v3d-extra"></g>';
    svg.innerHTML = html;

    this.grupos = [];
    var self = this;
    Array.prototype.forEach.call(svg.querySelectorAll(".pza"), function (g) {
      var i = +g.getAttribute("data-i");
      self.grupos[i] = {
        g: g,
        sombra: g.querySelector(".pza-sombra"),
        banda: g.querySelector(".pza-banda"),
        atras: g.querySelector(".pza-atras"),
        detalle: g.querySelector(".pza-detalle"),
        frente: g.querySelector(".pza-frente"),
        tinte: g.querySelector(".pza-tinte"),
        rayas: g.querySelector(".pza-rayas"),
        flecha: g.querySelector(".pza-flecha"),
        punta: g.querySelector(".pza-punta"),
        hub: g.querySelector(".pza-hub"),
        et: g.querySelector(".pza-et")
      };
    });
    this.gEjes = svg.querySelector(".v3d-ejes");
    this.gCorrea = svg.querySelector(".v3d-correa");
    this.gExtra = svg.querySelector(".v3d-extra");
    this.poolEjes = [];
  };

  /* ------------------------------------------------------------- encuadre */
  Escena.prototype.encuadrar = function () {
    var cfg = this.cfg, W = this.vb[0], H = this.vb[1];
    var C = camara({ az: this.cam.az, el: this.cam.el, s: 1, cx: 0, cy: 0 });
    var minx = 1e9, maxx = -1e9, miny = 1e9, maxy = -1e9, self = this;
    var cuenta = function (q) {
      var pr = proy(q, C);
      if (pr[0] < minx) minx = pr[0];
      if (pr[0] > maxx) maxx = pr[0];
      if (pr[1] < miny) miny = pr[1];
      if (pr[1] > maxy) maxy = pr[1];
    };
    this.piezas.forEach(function (p) {
      var c = self.pos(p, 0), B = p.B;
      var rad = p.r + p.m + 2;
      var hw = p.w / 2;
      for (var i = 0; i < 8; i++) {
        var q = c.slice();
        q = add(q, mul(p.axis, (i & 4 ? 1 : -1) * hw));
        q = add(q, mul(B.u, (i & 1 ? 1 : -1) * rad));
        q = add(q, mul(B.v, (i & 2 ? 1 : -1) * rad));
        cuenta(q);
      }
    });
    if (cfg.borde) {
      var b = cfg.borde;
      for (var j = 0; j < 12; j++) {
        var a = j * Math.PI / 6;
        cuenta([b.r * Math.cos(a), b.r * Math.sin(a), b.z0]);
        cuenta([b.r * Math.cos(a), b.r * Math.sin(a), b.z1]);
      }
    }
    var m = 24;
    var s = Math.min((W - 2 * m) / Math.max(1, maxx - minx), (H - 2 * m) / Math.max(1, maxy - miny));
    s *= this.zoom;
    this.cam.s = s;
    this.cam.cx = W / 2 - ((minx + maxx) / 2) * s;
    this.cam.cy = H / 2 - ((miny + maxy) / 2) * s;
  };

  /* ------------------------------------------------------------- actualizar */
  Escena.prototype.actualizar = function () {
    var C = camara(this.cam), cfg = this.cfg, t = this.t, self = this;
    var lista = [], ejes = {};

    this.piezas.forEach(function (p, i) {
      var el = self.grupos[i];
      var c = self.pos(p, t);
      var ang = self.angulo(p, t);
      var B = p.B, tipo = p.tipo;
      var hw = p.w / 2;
      var rTip = p.r + (p.m || 0);
      var signo = dot(p.axis, C.d) >= 0 ? 1 : -1;
      var cFront, cBack, rF, rB, twF, twB, cono = null;

      if (tipo === "conico" && p.apex) {
        var dirAp = norm(sub(p.apex, c));
        var d0 = Math.sqrt(dot(sub(p.apex, c), sub(p.apex, c))) || 1;
        cFront = c;
        cBack = add(c, mul(dirAp, p.w));
        rF = p.r;
        rB = Math.max(p.r * 0.30, p.r * (d0 - p.w) / d0);
        twF = 0; twB = 0;
        cono = dirAp;
      } else {
        cFront = add(c, mul(p.axis, signo * hw));
        cBack = add(c, mul(p.axis, -signo * hw));
        rF = rTip;
        rB = rTip;
        twF = signo * p.twist * 0.5;
        twB = -signo * p.twist * 0.5;
      }

      if (p.interno) {
        /* corona de dentado interno: aro con relleno par-impar */
        var outF = proyLista(aro3(cFront, B, p.r + p.m * 2.6, ang, 44), C);
        var outB = proyLista(aro3(cBack, B, p.r + p.m * 2.6, ang, 44), C);
        var dent = proyLista(contornoDientes(cFront, B, p.r, p.m, p.z, ang, true), C);
        el.frente.setAttribute("d", aPath(xy(outF)) + aPath(xy(dent)));
        el.frente.setAttribute("fill-rule", "evenodd");
        el.banda.setAttribute("d", aPath(convexa(xy(outF).concat(xy(outB)))));
        el.atras.setAttribute("d", "");
        el.rayas.setAttribute("d", "");
        el.detalle.setAttribute("d", "");
      } else {
        el.frente.setAttribute("fill-rule", "nonzero");
        var dent2 = proyLista(contornoDientes(cFront, B, p.r, p.m, p.z, ang + twF, false), C);
        el.frente.setAttribute("d", aPath(xy(dent2)));
        if (cono) {
          var aF = proyLista(aro3(cFront, B, rF, ang, 24), C);
          var aB = proyLista(aro3(cBack, B, rB, ang, 24), C);
          el.banda.setAttribute("d", aPath(convexa(xy(aF).concat(xy(aB)))));
          el.atras.setAttribute("d", aPath(xy(aB)));
        } else {
          var atr = proyLista(aro3(cBack, B, rB, ang + twB, 22), C);
          el.atras.setAttribute("d", aPath(xy(atr)));
          var b1 = proyLista(aro3(cFront, B, rF, ang, 16), C);
          var b2 = proyLista(aro3(cBack, B, rB, ang, 16), C);
          el.banda.setAttribute("d", aPath(convexa(xy(b1).concat(xy(b2)))));
        }

        /* marcas radiales (se ven girar) */
        var rayas = "", nM = p.marcas || 6, kk;
        for (kk = 0; kk < nM; kk++) {
          var am = ang + kk * (2 * Math.PI / nM);
          var q1 = proy(puntoEn(cFront, B, p.r * 0.22, am, [0, 0, 0], 0), C);
          var q2 = proy(puntoEn(cFront, B, p.r * 0.94, am, [0, 0, 0], 0), C);
          rayas += "M" + q1[0].toFixed(1) + " " + q1[1].toFixed(1) + "L" + q2[0].toFixed(1) + " " + q2[1].toFixed(1);
        }
        el.rayas.setAttribute("d", rayas);

        /* detalle según tipo */
        var det = "";
        if (tipo === "polea") {
          var g1 = proyLista(aro3(cFront, B, p.r * 0.9, ang, 30), C);
          var g2 = proyLista(aro3(cFront, B, p.r * 0.78, ang, 30), C);
          det = aPath(xy(g1)) + aPath(xy(g2));
        } else if (tipo === "tornillo") {
          var ent = p.entradas || 1, paso = p.paso || p.r * 1.6;
          var largo = p.w, giros = largo / paso;
          for (var e2 = 0; e2 < ent; e2++) {
            var hl = [], m2;
            for (m2 = 0; m2 <= 26 * Math.max(2, giros); m2++) {
              var f2 = m2 / (26 * Math.max(2, giros));
              var aa = ang + e2 * 2 * Math.PI / ent + f2 * giros * 2 * Math.PI;
              var cc = add(add(c, mul(p.axis, (f2 - 0.5) * largo * 0.94)), mul(add(mul(B.u, Math.cos(aa)), mul(B.v, Math.sin(aa))), p.r * 1.02));
              hl.push(proy(cc, C));
            }
            det += aLinea(hl);
          }
        }
        el.detalle.setAttribute("d", det);
      }

      /* hub */
      var ch = proy(cFront, C);
      el.hub.setAttribute("cx", ch[0].toFixed(1));
      el.hub.setAttribute("cy", ch[1].toFixed(1));
      el.hub.setAttribute("r", Math.max(1.4, Math.min(7, p.r * 0.16 * C.s)));

      /* flecha de sentido: arco + punta en la cara visible */
      var wv = p.ang ? self.velAng(p, t) : p.wv;
      if (p.noFlecha || Math.abs(wv) < 1e-5) {
        el.flecha.setAttribute("d", "");
        el.punta.setAttribute("d", "");
      } else {
        var sg = wv > 0 ? 1 : -1;
        var a0 = Math.PI * 0.62, arco = [];
        var nA = 14, j;
        for (j = 0; j <= nA; j++) {
          arco.push(proy(puntoEn(cFront, B, p.r * 0.64, a0 + sg * (j / nA) * 1.05, p.axis, 0), C));
        }
        el.flecha.setAttribute("d", aLinea(arco));
        var fin = arco[arco.length - 1], prev = arco[arco.length - 2];
        var dx = fin[0] - prev[0], dy = fin[1] - prev[1];
        var L = Math.sqrt(dx * dx + dy * dy) || 1;
        dx /= L; dy /= L;
        var px = -dy, py = dx, Lf = 9, Wf = 4.2;
        el.punta.setAttribute("d",
          "M" + (fin[0] + dx * Lf).toFixed(1) + " " + (fin[1] + dy * Lf).toFixed(1)
          + "L" + (fin[0] + px * Wf).toFixed(1) + " " + (fin[1] + py * Wf).toFixed(1)
          + "L" + (fin[0] - px * Wf).toFixed(1) + " " + (fin[1] - py * Wf).toFixed(1) + "Z");
      }

      /* rótulo: por encima del borde superior proyectado */
      if (p.et) {
        var aro = proyLista(aro3(cFront, B, rTip + 2, ang, 22), C);
        var ymin = 1e9, q3;
        for (q3 = 0; q3 < aro.length; q3++) {
          if (aro[q3][1] < ymin) ymin = aro[q3][1];
        }
        var pc0 = proy(cFront, C);
        el.et.setAttribute("x", pc0[0].toFixed(1));
        el.et.setAttribute("y", (ymin - 5).toFixed(1));
        el.et.setAttribute("font-size", (10.5 * (self.kTxt || 1)).toFixed(1));
        el.et.textContent = p.et;
        el.et.setAttribute("display", "");
      } else {
        el.et.setAttribute("display", "none");
      }

      /* estilos */
      var col = p.color;
      var op = 1;
      if (self.etapa >= 0) {
        var enEtapa = (cfg.etapas[self.etapa].piezas || []).indexOf(i) >= 0;
        op = enEtapa ? 1 : 0.16;
      }
      el.g.setAttribute("opacity", op.toFixed(2));
      el.banda.setAttribute("fill", col);
      el.banda.setAttribute("fill-opacity", p.interno ? "0" : "0.22");
      el.banda.setAttribute("stroke", col);
      el.banda.setAttribute("stroke-opacity", "0.5");
      el.atras.setAttribute("fill", col);
      el.atras.setAttribute("fill-opacity", "0.12");
      el.atras.setAttribute("stroke", "none");
      el.frente.setAttribute("fill", "var(--sup2)");
      el.frente.setAttribute("stroke", col);
      el.tinte.setAttribute("d", el.frente.getAttribute("d"));
      el.tinte.setAttribute("fill", col);
      el.tinte.setAttribute("fill-opacity", "0.13");
      el.tinte.setAttribute("stroke", "none");
      el.tinte.setAttribute("fill-rule", p.interno ? "evenodd" : "nonzero");
      el.sombra.setAttribute("d", el.frente.getAttribute("d"));
      el.sombra.setAttribute("transform", "translate(3.5,5.5)");
      el.sombra.setAttribute("fill", "#0b0f14");
      el.sombra.setAttribute("fill-opacity", "0.07");
      el.sombra.setAttribute("stroke", "none");
      el.sombra.setAttribute("fill-rule", p.interno ? "evenodd" : "nonzero");
      el.rayas.setAttribute("stroke", col);
      el.rayas.setAttribute("stroke-opacity", "0.5");
      el.detalle.setAttribute("stroke", col);
      el.detalle.setAttribute("stroke-opacity", "0.85");
      el.detalle.setAttribute("fill", "none");
      el.flecha.setAttribute("stroke", col);
      el.flecha.setAttribute("fill", "none");
      el.flecha.setAttribute("stroke-opacity", "0.95");
      el.punta.setAttribute("fill", col);
      el.punta.setAttribute("stroke", "none");
      el.hub.setAttribute("fill", col);

      /* profundidad para el orden de dibujo */
      var prof = proy(c, C)[2];
      lista.push({ i: i, prof: prof });

      /* eje / árbol: se agrupa por línea de eje */
      if (!p.noEje) {
        var key = [p.axis[0].toFixed(2), p.axis[1].toFixed(2), p.axis[2].toFixed(2),
          dot(c, B.u).toFixed(0), dot(c, B.v).toFixed(0)].join("|");
        if (!ejes[key]) ejes[key] = { axis: p.axis, u: B.u, v: B.v, a: 1e9, b: -1e9, p: c };
        var s0 = dot(c, p.axis);
        ejes[key].a = Math.min(ejes[key].a, s0 - hw - p.r * 0.2);
        ejes[key].b = Math.max(ejes[key].b, s0 + hw + p.r * 0.2);
      }
    });

    /* ordenar por profundidad (atrás → adelante) */
    lista.sort(function (a, b) { return a.prof - b.prof; });
    var orden = lista.map(function (o) { return o.i; }).join(",");
    if (orden !== this.orden) {
      for (var k = 0; k < lista.length; k++) this.svg.appendChild(this.grupos[lista[k].i].g);
      this.svg.appendChild(this.gExtra);
      this.orden = orden;
    }

    /* árboles */
    var self3 = this, hs = "", n = 0, keys = Object.keys(ejes);
    keys.forEach(function (key) {
      var e = ejes[key];
      var base = mul(e.u, dot(e.p, e.u));
      base = add(base, mul(e.v, dot(e.p, e.v)));
      var pa = proy(add(base, mul(e.axis, e.a)), C);
      var pb = proy(add(base, mul(e.axis, e.b)), C);
      var ln = self3.poolEjes[n];
      if (!ln) {
        ln = document.createElementNS("http://www.w3.org/2000/svg", "line");
        ln.setAttribute("stroke-linecap", "round");
        self3.gEjes.appendChild(ln);
        self3.poolEjes[n] = ln;
      }
      ln.setAttribute("x1", pa[0].toFixed(1));
      ln.setAttribute("y1", pa[1].toFixed(1));
      ln.setAttribute("x2", pb[0].toFixed(1));
      ln.setAttribute("y2", pb[1].toFixed(1));
      ln.setAttribute("stroke", "currentColor");
      ln.setAttribute("stroke-opacity", "0.3");
      ln.setAttribute("stroke-width", "7");
      ln.setAttribute("display", "");
      n++;
    });
    for (var z2 = n; z2 < this.poolEjes.length; z2++) this.poolEjes[z2].setAttribute("display", "none");

    /* extras (correa, brazo, aro) */
    if (this.gCorrea) this.gCorrea.innerHTML = cfg.correa ? this.dibujarCorrea(C, t) : "";
    var ex = "";
    if (cfg.extras) ex += cfg.extras(this, C, t) || "";
    this.gExtra.innerHTML = ex;
  };

  /* velocidad angular aparente (para orientar la flecha) */
  Escena.prototype.velAng = function (p, t) {
    var a1 = this.angulo(p, t), a2 = this.angulo(p, t + 0.01);
    return (a2 - a1) / 0.01;
  };

  /* --------------------------------------------------------------- correa */
  Escena.prototype.dibujarCorrea = function (C, t) {
    var cor = this.cfg.correa;
    var pa = this.piezas[cor.a], pb = this.piezas[cor.b];
    var A = pa.pos, B2 = pb.pos, r1 = pa.r + 2.5, r2 = pb.r + 2.5;
    var d = sub(B2, A), L = Math.sqrt(dot(d, d));
    var u = mul(d, 1 / L);
    var perp = norm(cross(pa.axis, u));
    var co = (r1 - r2) / L, si = Math.sqrt(Math.max(0, 1 - co * co));
    var n0 = add(mul(u, co), mul(perp, si));
    var n1 = add(mul(u, co), mul(perp, -si));
    var T1 = [add(A, mul(n0, r1)), add(A, mul(n1, r1))];
    var T2 = [add(B2, mul(n0, r2)), add(B2, mul(n1, r2))];
    function angP(P, Q) { var v = sub(Q, P); return Math.atan2(dot(v, perp), dot(v, u)); }
    var aT1 = [angP(A, T1[0]), angP(A, T1[1])];
    var aT2 = [angP(B2, T2[0]), angP(B2, T2[1])];

    function arco(P, r, desde, hasta, lejos) {
      var delta = hasta - desde;
      while (delta > Math.PI) delta -= 2 * Math.PI;
      while (delta <= -Math.PI) delta += 2 * Math.PI;
      var sg = delta >= 0 ? 1 : -1;
      var mid1 = desde + delta / 2, mid2 = desde + (delta - sg * 2 * Math.PI) / 2;
      var dif = function (x) { var dd = Math.abs(x - lejos); while (dd > Math.PI) dd = Math.abs(dd - 2 * Math.PI); return dd; };
      if (dif(mid2) < dif(mid1)) delta = delta - sg * 2 * Math.PI;
      var pts = [], n = 22, i;
      for (i = 0; i <= n; i++) {
        var a = desde + delta * (i / n);
        pts.push(add(P, add(mul(u, r * Math.cos(a)), mul(perp, r * Math.sin(a)))));
      }
      return pts;
    }
    /* recorrido: T1_0 →(recta)→ T2_0 →(arco B)→ T2_1 →(recta)→ T1_1 →(arco A)→ T1_0 */
    var loop = arco(B2, r2, aT2[0], aT2[1], 0).concat(arco(A, r1, aT1[1], aT1[0], Math.PI));
    var pts = proyLista(loop, C);
    var col = cor.color || "var(--txt3)";
    var g = '<path d="' + aPath(xy(pts)) + '" fill="' + col + '" fill-opacity=".08" stroke="' + col +
      '" stroke-opacity=".6" stroke-width="' + (cor.ancho || 6) + '" stroke-linejoin="round"/>';

    /* marcas que viajan con la correa */
    var total = 0, seg = [], i;
    for (i = 1; i < loop.length; i++) {
      var dd = Math.sqrt(Math.pow(loop[i][0] - loop[i - 1][0], 2) + Math.pow(loop[i][1] - loop[i - 1][1], 2) + Math.pow(loop[i][2] - loop[i - 1][2], 2));
      seg.push(dd);
      total += dd;
    }
    var a0 = aT1[0];
    var vel = pa.wv >= 0 ? [-Math.sin(a0), Math.cos(a0)] : [Math.sin(a0), -Math.cos(a0)];
    var dir = sub(T2[0], T1[0]);
    var dl = [dot(dir, u), dot(dir, perp)];
    var sgn = (dl[0] * vel[0] + dl[1] * vel[1]) >= 0 ? 1 : -1;
    var nMK = 18, off = sgn * (t * (cor.v || 0.4)) % 1;
    off = ((off % 1) + 1) % 1;
    for (var k = 0; k < nMK; k++) {
      var s = ((k / nMK) + off) % 1 * total;
      var j = 0, acc = 0;
      while (j < seg.length && acc + seg[j] < s) { acc += seg[j]; j++; }
      if (j >= seg.length) j = seg.length - 1;
      var f = seg[j] ? (s - acc) / seg[j] : 0;
      var q = [
        loop[j][0] + (loop[j + 1][0] - loop[j][0]) * f,
        loop[j][1] + (loop[j + 1][1] - loop[j][1]) * f,
        loop[j][2] + (loop[j + 1][2] - loop[j][2]) * f
      ];
      var pq = proy(q, C);
      g += '<circle cx="' + pq[0].toFixed(1) + '" cy="' + pq[1].toFixed(1) + '" r="2.6" fill="' + col + '" fill-opacity=".75"/>';
    }
    return g;
  };

  /* ------------------------------------------------------------- animación */
  Escena.prototype.arrancar = function () {
    if (this.corriendo) return;
    this.corriendo = true;
    var self = this;
    this.ultimo = performance.now();
    var tick = function (ahora) {
      if (!self.corriendo) return;
      var dt = Math.min(50, ahora - self.ultimo) / 1000;
      self.ultimo = ahora;
      self.t += dt * (+self.slider.value / 100);
      self.actualizar();
      self.raf = requestAnimationFrame(tick);
    };
    this.raf = requestAnimationFrame(tick);
  };
  Escena.prototype.parar = function () {
    this.corriendo = false;
    if (this.raf) cancelAnimationFrame(this.raf);
    this.raf = null;
  };

  Escena.prototype.observar = function () {
    var self = this;
    if (!window.IntersectionObserver) return;
    this.io = new IntersectionObserver(function (ent) {
      var vis = ent[0] && ent[0].isIntersecting;
      self.visible = !!vis;
      if (!vis) self.parar();
      else if (!reducido && self.corriendo === false && self.pararPorScroll !== true) {
        // sólo reanuda si el usuario no lo pausó a mano
        if (self.autoRun !== false) self.arrancar();
      }
    }, { rootMargin: "120px" });
    this.io.observe(this.svg);
  };

  /* ---------------------------------------------------------------- panel */
  Escena.prototype.fila = function (l, v, cls) {
    return '<div class="sim-fila' + (cls ? " " + cls : "") + '"><span>' + l + "</span><b>" + v + "</b></div>";
  };

  Escena.prototype.pintarPanel = function () {
    var cfg = this.cfg, self = this, html = "";
    if (cfg.etapas && cfg.etapas.length) {
      html += '<div class="chips v3d-etapas no-print"><button class="chip activo" data-e="-1">Todo</button>';
      cfg.etapas.forEach(function (e, i) {
        html += '<button class="chip" data-e="' + i + '">' + e.t + "</button>";
      });
      html += "</div>";
      html += '<div class="v3d-etapa"></div>';
    }
    html += cfg.panel || "";
    if (cfg.sentido && cfg.sentido.length) {
      html += '<div class="v3d-sentido">';
      cfg.sentido.forEach(function (s) {
        html += '<div class="v3d-sfila"><span class="v3d-sg">' + (s.d === 0 ? "•" : s.d > 0 ? "↻" : "↺") + "</span><span>" + s.t + "</span>";
        if (s.v) html += "<b>" + s.v + "</b>";
        html += "</div>";
      });
      html += '<div class="v3d-snota">↻ / ↺ leídos desde el frente de la escena: al orbitar, el sentido aparente se invierte.</div>';
      html += "</div>";
    }
    if (cfg.nota) html += '<div class="sim-nota">' + cfg.nota + "</div>";
    this.panel.innerHTML = html;

    var chips = this.panel.querySelectorAll(".v3d-etapas .chip");
    var caja = this.panel.querySelector(".v3d-etapa");
    function activar(i) {
      self.etapa = i;
      chips.forEach(function (c) { c.classList.toggle("activo", +c.getAttribute("data-e") === i); });
      if (caja) {
        if (i < 0) caja.innerHTML = "";
        else {
          var e = cfg.etapas[i];
          caja.innerHTML = "<strong>" + e.t + "</strong>" + (e.f ? "<span>" + e.f + "</span>" : "");
        }
      }
      self.actualizar();
    }
    chips.forEach(function (c) {
      c.addEventListener("click", function () { activar(+c.getAttribute("data-e")); });
    });
  };

  /* ---------------------------------------------------------------- montaje */
  function montar(raiz) {
    activos.forEach(function (e) { try { e.parar(); } catch (err) {} });
    activos = [];
    Array.prototype.forEach.call(raiz.querySelectorAll("[data-3d]"), function (h) {
      var tipo = h.getAttribute("data-3d");
      var f = ESCENAS[tipo];
      if (!f) return;
      try { f(h); } catch (e) { console.error("3d " + tipo, e); }
    });
  }

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) activos.forEach(function (e) { e.parar(); });
    else activos.forEach(function (e) { if (e.visible && !reducido) e.arrancar(); });
  });

  window.VISUALES3D = { montar: montar };

  /* =====================================================================
     ESCENAS
     ===================================================================== */

  /* ---------- helpers de definición ---------- */
  function V(x, y, z) { return [x, y, z]; }

  /* =====================================================================
     1) PRÁCTICO 1 — reductor de ejes fijos, m = 4
     ===================================================================== */
  ESCENAS.reductor = function (host) {
    var m = 4;
    var piezas = [
      { et: "G · 40", r: 80, m: m, z: 40, pos: V(0, 0, 0), n: 382, color: "#0d6b57" },
      { et: "C · 20", r: 40, m: m, z: 20, pos: V(-120, 0, 0), n: -764, color: "#0d6b57" },
      { et: "D · 20", r: 40, m: m, z: 20, pos: V(-120, 170, 0), n: -764, color: "#2f6fb5" },
      { et: "E · 25", r: 50, m: m, z: 25, pos: V(-210, 170, 0), n: 611, color: "#2f6fb5" },
      { et: "F · 35", r: 70, m: m, z: 35, pos: V(-210, 340, 0), n: 611, color: "#a5341d" },
      { et: "H · 25", r: 50, m: m, z: 25, pos: V(-305, 340, 0), n: -856, color: "#a5341d" }
    ];
    new Escena(host, {
      alt: "Reductor de ejes fijos del práctico 1 en 3D",
      k: 0.0042,
      piezas: piezas,
      meshes: [[0, 1], [2, 3], [4, 5]],
      etapas: [
        { t: "1ª · G/C", piezas: [0, 1], f: "i = 40/20 = 2 · C gira al revés que G" },
        { t: "2ª · D/E", piezas: [2, 3], f: "i = 20/25 = 0,8 · E gira al revés que D" },
        { t: "3ª · F/H", piezas: [4, 5], f: "i = 35/25 = 1,4 · H gira al revés que F" }
      ],
      sentido: [
        { t: "G · 40 d. (entrada, eje A)", v: "+40 rad/s", d: 1 },
        { t: "C y D · mismo eje", v: "−90 rad/s", d: -1 },
        { t: "E y F · mismo eje", v: "+72 rad/s", d: 1 },
        { t: "H · 25 d. (salida, eje B)", v: "−100,4 rad/s", d: -1 }
      ],
      panel:
        '<div class="sim-fila ac"><span>n<sub>B</sub>/n<sub>A</sub> (3 pares)</span><b>2,24</b></div>' +
        '<div class="sim-fila"><span>Tres pares exteriores</span><b>mismo sentido que A</b></div>',
      nota: "Tres engranes exteriores = tres inversiones: el eje de salida gira en sentido <strong>opuesto</strong> al motor, y 2,24 veces más rápido (es un multiplicador). Arrastrá para girar la vista."
    });
  };

  /* =====================================================================
     2) PRÁCTICO 3 — mismo tren, m = 3
     ===================================================================== */
  ESCENAS.reductor3 = function (host) {
    var m = 3;
    var piezas = [
      { et: "G · 40", r: 60, m: m, z: 40, pos: V(0, 0, 0), n: 477, color: "#0d6b57" },
      { et: "C · 24", r: 36, m: m, z: 24, pos: V(-96, 0, 0), n: -795, color: "#0d6b57" },
      { et: "D · 24", r: 36, m: m, z: 24, pos: V(-96, 170, 0), n: -795, color: "#2f6fb5" },
      { et: "E · 34", r: 51, m: m, z: 34, pos: V(-183, 170, 0), n: 561, color: "#2f6fb5" },
      { et: "F · 50", r: 75, m: m, z: 50, pos: V(-183, 340, 0), n: 561, color: "#a5341d" },
      { et: "H · 34", r: 51, m: m, z: 34, pos: V(-309, 340, 0), n: -826, color: "#a5341d" }
    ];
    new Escena(host, {
      alt: "Reductor de ejes fijos del práctico 3 en 3D",
      k: 0.0034,
      piezas: piezas,
      meshes: [[0, 1], [2, 3], [4, 5]],
      etapas: [
        { t: "1ª · G/C", piezas: [0, 1], f: "i = 40/24 = 1,667 · C gira al revés que G" },
        { t: "2ª · D/E", piezas: [2, 3], f: "i = 24/34 = 0,706 · E gira al revés que D" },
        { t: "3ª · F/H", piezas: [4, 5], f: "i = 50/34 = 1,471 · H gira al revés que F" }
      ],
      sentido: [
        { t: "G · 40 d. (entrada)", v: "+50 rad/s", d: 1 },
        { t: "C y D · mismo eje", v: "−83,3 rad/s", d: -1 },
        { t: "E y F · mismo eje", v: "+58,8 rad/s", d: 1 },
        { t: "H · 34 d. (salida)", v: "−86,5 rad/s", d: -1 }
      ],
      panel:
        '<div class="sim-fila ac"><span>n<sub>B</sub>/n<sub>A</sub></span><b>1,73 · 87 rad/s</b></div>' +
        '<div class="sim-fila"><span>n<sub>B</sub> en rpm</span><b>826 rpm</b></div>',
      nota: "Mismo esquema que el problema 1 pero con m = 3 y otras ruedas. Tres pares exteriores: la salida gira en <strong>sentido opuesto</strong> a la entrada."
    });
  };

  /* =====================================================================
     3) PRÁCTICO 4 — helicoidal de 3 etapas (C = 548,83 mm)
     ===================================================================== */
  ESCENAS.helicoidal = function (host) {
    var piezas = [
      { et: "1 · 32", r: 51.1, m: 3, z: 32, w: 46, twist: 0.33, pos: V(0, 0, 0), n: 1500, color: "#0d6b57" },
      { et: "2 · 64", r: 102.2, m: 3, z: 64, w: 46, twist: 0.33, pos: V(153.2, 0, 0), n: -750, color: "#0d6b57" },
      { et: "3 · 25", r: 52.3, m: 4, z: 25, w: 56, twist: 0.29, pos: V(153.2, 150, 0), n: -750, color: "#2f6fb5" },
      { et: "4 · 80", r: 167.3, m: 4, z: 80, w: 56, twist: 0.29, pos: V(321, 150, -141), n: 234.4, color: "#2f6fb5" },
      { et: "5 · 18", r: 46.6, m: 5, z: 18, w: 74, twist: 0.26, pos: V(321, 300, -141), n: 234.4, color: "#a5341d" },
      { et: "6 · 50", r: 129.4, m: 5, z: 50, w: 74, twist: 0.26, pos: V(486, 300, -81), n: -84.4, color: "#a5341d" }
    ];
    new Escena(host, {
      alt: "Reductor helicoidal de tres etapas en 3D",
      vb: [880, 500],
      az: -0.5, el: 0.52,
      k: 0.0022,
      piezas: piezas,
      meshes: [[0, 1], [2, 3], [4, 5]],
      etapas: [
        { t: "1ª · 32/64", piezas: [0, 1], f: "i₁ = 64/32 = 2 · 1500 → 750 rpm" },
        { t: "2ª · 25/80", piezas: [2, 3], f: "i₂ = 80/25 = 3,2 · 750 → 234,4 rpm" },
        { t: "3ª · 18/50", piezas: [4, 5], f: "i₃ = 50/18 = 2,78 · 234,4 → 84,4 rpm" }
      ],
      sentido: [
        { t: "1 · 32 d. (entrada)", v: "1500 rpm", d: 1 },
        { t: "2 y 3 · mismo eje", v: "750 rpm", d: -1 },
        { t: "4 y 5 · mismo eje", v: "234,4 rpm", d: 1 },
        { t: "6 · 50 d. (salida)", v: "84,4 rpm", d: -1 }
      ],
      panel:
        '<div class="sim-fila ac"><span>Relación total</span><b>17,78 : 1</b></div>' +
        '<div class="sim-fila"><span>Distancia entre centros</span><b>548,83 mm</b></div>' +
        '<div class="sim-fila"><span>Par de salida (η = 98 %)</span><b>3336,4 N·m</b></div>',
      nota: "Los anchos de cara crecen hacia la salida (cada etapa transmite más par) y el dentado va inclinado (hélice). Cada engrane invierte el sentido: la salida gira al revés de la entrada."
    });
  };

  /* =====================================================================
     4) PRÁCTICO 2 — cadena: poleas → cónicos → cilíndricos → sin fin
     ===================================================================== */
  ESCENAS.cadena = function (host) {
    /* Reproduce el esquema del práctico: la correa sube en vertical (poleas de
       6″ y 10″ sobre ejes horizontales), el piñón cónico 4 sigue el eje de la
       polea 3, la rueda 5 y el piñón 6 comparten el eje vertical, el 7 vuelve a
       bajar por el mismo eje hasta el sin fin 8, y la corona 9 cierra con eje
       horizontal. Medidas reales: m = 3,5 en los cilíndricos. */
    var piezas = [
      /* poleas 2 y 3 — eje horizontal, la correa va en un plano vertical */
      { tipo: "polea", r: 76, w: 26, pos: V(0, 0, 265), axis: "x", n: 1520, color: "#8a6a00" },
      { tipo: "polea", r: 127, w: 26, pos: V(0, 0, 0), axis: "x", n: 912, color: "#8a6a00" },
      /* par cónico 4/5, ejes a 90° sobre el vértice común */
      { tipo: "conico", r: 36, m: 4, z: 18, w: 22, pos: V(184, 0, 0), axis: "x", apex: V(260, 0, 0), n: 912, color: "#0d6b57" },
      { tipo: "conico", et: "5 · 38", r: 76, m: 4, z: 38, w: 26, pos: V(260, 0, 36), axis: "z", apex: V(260, 0, 0), n: 432, color: "#0d6b57" },
      /* 6 solidario a 5 (mismo eje vertical) y 7 que engrana con 6, m = 2,5 */
      { tipo: "recto", et: "6 · 20", r: 25, m: 2.5, z: 20, w: 26, pos: V(260, 0, -85), axis: "z", n: 432, color: "#2f6fb5" },
      { tipo: "recto", et: "7 · 48", r: 60, m: 2.5, z: 48, w: 26, pos: V(175, 0, -85), axis: "z", n: -180, color: "#2f6fb5" },
      /* sin fin 8 en el eje de 7; corona 9 con eje horizontal, a 90° */
      { tipo: "tornillo", et: "8 · 3 entradas", r: 16, w: 48, pos: V(175, 0, -225), axis: "z", n: -180, color: "#a5341d", entradas: 3, paso: 26 },
      { tipo: "recto", et: "9 · 36", r: 45, m: 2.5, z: 36, w: 28, pos: V(236, 0, -225), axis: "y", n: 15, color: "#a5341d" }
    ];
    new Escena(host, {
      alt: "Cadena de transmisión del práctico 2 en 3D",
      vb: [620, 700],
      az: -0.42, el: 0.3,
      k: 0.0016,
      piezas: piezas,
      meshes: [[0, 1], [4, 5]],
      correa: { a: 0, b: 1, ancho: 9, color: "#8a6a00", v: 0.55 },
      /* rótulos de las poleas y del piñón, dibujados por encima de todo */
      extras: function (e, C) {
        var f = (10.5 * (e.kTxt || 1)).toFixed(1);
        var L = [
          ["2 · ⌀6″", V(0, 0, 356), 0],
          ["3 · ⌀10″", V(0, 0, -156), 1],
          ["4 · 18", V(152, 0, 36), 2]
        ];
        var enEtapa = function (i) {
          if (e.etapa < 0) return true;
          return (e.cfg.etapas[e.etapa].piezas || []).indexOf(i) >= 0;
        };
        return L.map(function (l) {
          var q = proy(l[1], C);
          var op = enEtapa(l[2]) ? 1 : 0.16;
          return '<text class="pza-et" font-size="' + f + '" opacity="' + op + '" x="' + q[0].toFixed(1) + '" y="' + q[1].toFixed(1) + '">' + l[0] + "</text>";
        }).join("");
      },
      etapas: [
        { t: "Poleas 2/3", piezas: [0, 1], f: "n₃ = 1520·6/10 = 912 rpm · la correa NO invierte" },
        { t: "Cónicos 4/5", piezas: [2, 3], f: "n₅ = 912·18/38 = 432 rpm · ejes a 90°" },
        { t: "Cilíndricos 6/7", piezas: [4, 5], f: "n₇ = 432·20/48 = 180 rpm · invierte" },
        { t: "Sin fin 8/9", piezas: [6, 7], f: "n₉ = 180·3/36 = 15 rpm · invierte" }
      ],
      sentido: [
        { t: "Polea 2 · entrada (motor)", v: "1520 rpm", d: 1 },
        { t: "Polea 3 y piñón 4", v: "912 rpm", d: 1 },
        { t: "Rueda cónica 5 y piñón 6", v: "432 rpm", d: -1 },
        { t: "Rueda 7 y tornillo 8", v: "180 rpm", d: 1 },
        { t: "Corona 9 (salida)", v: "15 rpm", d: 1 }
      ],
      panel:
        '<div class="sim-fila"><span>Poleas 2 → 3</span><b>⌀152,4 → 254 mm</b></div>' +
        '<div class="sim-fila ac"><span>n₉ (salida)</span><b>15 rpm</b></div>' +
        '<div class="sim-fila"><span>Reducción total</span><b>101,3 : 1</b></div>' +
        '<div class="sim-fila"><span>Par en el engrane 9</span><b>2373,6 N·m</b></div>',
      nota: "Cuatro etapas seguidas, en el mismo orden y con los mismos ejes del esquema: correa (⌀6″→⌀10″), par cónico 18/38, par cilíndrico 20/48 (m = 2,5) y sinfín de 3 entradas, hélice derecha, con corona de 36. Cada etapa se colorea distinto y el chip de arriba la aísla."
    });
  };

  /* =====================================================================
     5) PRÁCTICO 5 — planetario de doble satélite, engrane 2 fijo
     ===================================================================== */
  ESCENAS.planeta5 = function (host) {
    var m = 4, r2 = 20 * m / 2, r4 = 30 * m / 2, r5 = 16 * m / 2, r6 = 34 * m / 2;
    var R = r2 + r4;
    var N1 = 0, N2 = 190;                  // dos niveles axiales (soles 2 y 6)
    var nArm = -77.23, n6 = -53, nEsp = -128.7;
    var k = 0.012;
    var piezas = [
      { et: "2 · 20 (fijo)", r: r2, m: m, z: 20, w: 40, pos: V(0, 0, N1), axis: "z", color: "#8a929e" },
      {
        et: "6 · 34 (entrada)", r: r6, m: m, z: 34, w: 40, pos: V(0, 0, N2), axis: "z", color: "#0d6b57",
        ang: function (p, t) { return n6 * k * t; }
      }
    ];
    for (var j = 0; j < 3; j++) {
      (function (jj) {
        piezas.push({
          et: jj === 0 ? "4 · 30" : "", r: r4, m: m, z: 30, w: 36, axis: "z", rama: jj,
          pos: V(R * Math.cos(jj * 2 * Math.PI / 3), R * Math.sin(jj * 2 * Math.PI / 3), N1),
          ang: function (p, t) { return nEsp * k * t; },
          mover: function (p, t) {
            var a = jj * 2 * Math.PI / 3 + nArm * k * t;
            return V(R * Math.cos(a), R * Math.sin(a), N1);
          },
          color: "#2f6fb5"
        });
        piezas.push({
          et: jj === 0 ? "5 · 16" : "", r: r5, m: m, z: 16, w: 36, axis: "z", rama: jj,
          pos: V(R * Math.cos(jj * 2 * Math.PI / 3), R * Math.sin(jj * 2 * Math.PI / 3), N2),
          ang: function (p, t) { return nEsp * k * t; },
          mover: function (p, t) {
            var a = jj * 2 * Math.PI / 3 + nArm * k * t;
            return V(R * Math.cos(a), R * Math.sin(a), N2);
          },
          color: "#2f6fb5"
        });
      })(j);
    }
    new Escena(host, {
      alt: "Planetario de doble satélite del práctico 5 en 3D",
      az: -0.55, el: 0.62,
      vb: [720, 560],
      k: k,
      piezas: piezas,
      borde: { r: R + r4 + 8, z0: N1 - 22, z1: N2 + 24 },
      extras: function (esc, C, t) {
        var g = "", kk;
        var a0 = nArm * k * t;
        for (kk = 0; kk < 3; kk++) {
          var a = a0 + kk * 2 * Math.PI / 3;
          var px = R * Math.cos(a), py = R * Math.sin(a);
          /* perno que une los satélites 4 y 5 */
          var b1 = proy(V(px, py, N1 - 14), C);
          var b2 = proy(V(px, py, N2 + 14), C);
          g += '<line x1="' + b1[0].toFixed(1) + '" y1="' + b1[1].toFixed(1) + '" x2="' + b2[0].toFixed(1) + '" y2="' + b2[1].toFixed(1) + '" stroke="var(--txt3)" stroke-width="5" stroke-opacity=".7" stroke-linecap="round"/>';
        }
        for (kk = 0; kk < 3; kk++) {
          var a2 = a0 + kk * 2 * Math.PI / 3;
          var p1 = proy(V(0, 0, N2 + 34), C);
          var p2 = proy(V(R * Math.cos(a2), R * Math.sin(a2), N2 + 34), C);
          g += '<line x1="' + p1[0].toFixed(1) + '" y1="' + p1[1].toFixed(1) + '" x2="' + p2[0].toFixed(1) + '" y2="' + p2[1].toFixed(1) + '" stroke="var(--ac)" stroke-width="6" stroke-opacity=".55" stroke-linecap="round"/>';
        }
        var pc = proy(V(0, 0, N2 + 34), C);
        g += '<circle cx="' + pc[0].toFixed(1) + '" cy="' + pc[1].toFixed(1) + '" r="10" fill="var(--ac)" fill-opacity=".55"/>';
        return g;
      },
      etapas: [
        { t: "Solar 2 fijo", piezas: [0], f: "n₂ = 0" },
        { t: "Solar 6 (entra)", piezas: [1], f: "n₆ = 53 rpm sentido horario" },
        { t: "Satélites 4/5", piezas: [2, 3, 4, 5, 6, 7], f: "giran 51,5 rpm respecto del brazo (128,7 rpm absolutos)" },
        { t: "Brazo (salida)", piezas: [], f: "n_brazo = 53/(1 − 0,3137) = 77,23 rpm" }
      ],
      sentido: [
        { t: "Solar 2 (fijo)", v: "0 rpm", d: 0 },
        { t: "Solar 6 · entrada", v: "53 rpm", d: 1 },
        { t: "Satélites 4 y 5", v: "128,7 rpm", d: 1 },
        { t: "Brazo · salida", v: "77,23 rpm", d: 1 }
      ],
      panel:
        '<div class="sim-fila"><span>i₀ (brazo fijo)</span><b>+0,3137</b></div>' +
        '<div class="sim-fila ac"><span>n brazo</span><b>77,23 rpm</b></div>' +
        '<div class="sim-fila"><span>Nº de satélites por perno</span><b>2 (4 y 5)</b></div>',
      nota: "Dos soles coaxiales (2 y 6) y un satélite doble por perno: el 4 engrana con el 2 y el 5 con el 6. Con el sol 2 fijo, el brazo gira <strong>más rápido</strong> que la entrada: es un multiplicador de 77,23/53 = 1,46."
    });
  };

  /* =====================================================================
     6) PRÁCTICO 6 — planetario, engrane 6 fijo (multiplicador 24,5:1)
     ===================================================================== */
  ESCENAS.planeta6 = function (host) {
    var m = 2;
    var z2 = 49, z4 = 47, z5 = 48, z6 = 48;
    var r2 = z2 * m / 2, r4 = z4 * m / 2, r5 = z5 * m / 2, r6 = z6 * m / 2;
    var R = r2 + r4;                       // = r5 + r6 = 96
    var N1 = 0, N2 = 190;
    var modo = 0;                          // 0 = P22 (entra solar 2), 1 = P23 (entra brazo)
    var piezas = [], k = 0.0026;

    function vals() {
      if (modo === 0) return { n2: -53, nArm: -1298.5, n6: 0 };
      return { n2: 32.65, nArm: 800, n6: 0 };
    }
    var piezasBase = function () {
      piezas = [
        {
          et: "2 · 49", r: r2, m: m, z: z2, w: 24, pos: V(0, 0, N1), axis: "z", color: "#0d6b57",
          ang: function (p, t) { return vals().n2 * k * t; }
        },
        {
          et: "6 · 48 (fijo)", r: r6, m: m, z: z6, w: 24, pos: V(0, 0, N2), axis: "z", color: "#8a929e"
        }
      ];
      for (var j = 0; j < 3; j++) {
        (function (jj) {
          piezas.push({
            et: jj === 0 ? "4 · 47" : "", r: r4, m: m, z: z4, w: 22, axis: "z", rama: jj,
            pos: V(R * Math.cos(jj * 2 * Math.PI / 3), R * Math.sin(jj * 2 * Math.PI / 3), N1),
            ang: function (p, t) { return (vals().nArm - 1298.5) * k * t; },
            mover: function (p, t) {
              var a = jj * 2 * Math.PI / 3 + vals().nArm * k * t;
              return V(R * Math.cos(a), R * Math.sin(a), N1);
            },
            color: "#2f6fb5"
          });
          piezas.push({
            et: jj === 0 ? "5 · 48" : "", r: r5, m: m, z: z5, w: 22, axis: "z", rama: jj,
            pos: V(R * Math.cos(jj * 2 * Math.PI / 3), R * Math.sin(jj * 2 * Math.PI / 3), N2),
            ang: function (p, t) { return (vals().nArm - 1298.5) * k * t; },
            mover: function (p, t) {
              var a = jj * 2 * Math.PI / 3 + vals().nArm * k * t;
              return V(R * Math.cos(a), R * Math.sin(a), N2);
            },
            color: "#2f6fb5"
          });
        })(j);
      }
    };
    piezasBase();
    var esc = new Escena(host, {
      alt: "Planetario del práctico 6 en 3D",
      az: -0.55, el: 0.62,
      vb: [720, 570],
      k: k,
      piezas: piezas,
      borde: { r: R + r4 + 8, z0: N1 - 18, z1: N2 + 24 },
      extras: function (e, C, t) {
        var g = "", kk, v = vals();
        for (kk = 0; kk < 3; kk++) {
          var a = kk * 2 * Math.PI / 3 + v.nArm * k * t;
          var px = R * Math.cos(a), py = R * Math.sin(a);
          var b1 = proy(V(px, py, N1 - 12), C);
          var b2 = proy(V(px, py, N2 + 12), C);
          g += '<line x1="' + b1[0].toFixed(1) + '" y1="' + b1[1].toFixed(1) + '" x2="' + b2[0].toFixed(1) + '" y2="' + b2[1].toFixed(1) + '" stroke="var(--txt3)" stroke-width="5" stroke-opacity=".7" stroke-linecap="round"/>';
          var p1 = proy(V(0, 0, N2 + 30), C);
          var p2 = proy(V(px, py, N2 + 30), C);
          g += '<line x1="' + p1[0].toFixed(1) + '" y1="' + p1[1].toFixed(1) + '" x2="' + p2[0].toFixed(1) + '" y2="' + p2[1].toFixed(1) + '" stroke="var(--ac)" stroke-width="5" stroke-opacity=".55" stroke-linecap="round"/>';
        }
        return g;
      },
      etapas: [
        { t: "Solar 2 (entra)", piezas: [0], f: "n₂ = 53 rpm" },
        { t: "Satélites 4/5", piezas: [2, 3, 4, 5, 6, 7], f: "un solo perno: giran 1298,5 rpm respecto del brazo" },
        { t: "Solar 6 (fijo)", piezas: [1], f: "n₆ = 0 · engrane exterior" },
        { t: "Brazo (salida)", piezas: [], f: "n_brazo = 53/(1 − 0,95918) = 1298,5 rpm" }
      ],
      sentido: [
        { t: "Solar 2 · entrada", v: "53 rpm", d: 1 },
        { t: "Solar 6 (fijo)", v: "0 rpm", d: 0 },
        { t: "Brazo · salida", v: "1298,5 rpm", d: 1 }
      ],
      panel:
        '<div class="sim-fila"><span>i₀ (brazo fijo)</span><b>+0,95918</b></div>' +
        '<div class="sim-fila ac"><span>n brazo (P22)</span><b>1298,5 rpm</b></div>' +
        '<div class="sim-fila"><span>n₂ si el brazo va a −800</span><b>−32,65 rpm</b></div>' +
        '<div class="sim-fila"><span>Relación</span><b>24,5 : 1</b></div>',
      nota: "Con dientes casi iguales (49/47/48) i₀ ≈ 0,96 y el tren multiplica 24,5:1. Por eso el brazo da 24,5 vueltas por cada vuelta del solar: en la animación el solar se mueve muy despacio al lado del brazo."
    });
  };

  /* =====================================================================
     7) PRÁCTICO 7 — corona interior fija con doble satélite en serie
     ===================================================================== */
  ESCENAS.planeta7 = function (host) {
    var m = 4;
    var z2 = 12, z3 = 16, z4 = 12, z5 = 68;
    var r2 = z2 * m / 2, r3 = z3 * m / 2, r4 = z4 * m / 2, r5 = z5 * m / 2;
    var R3 = r2 + r3, R4 = R3 + r3 + r4;   // 56 y 112
    var n2 = 320, nArm = -68.57, k = 0.0022;
    var n3abs = nArm - 291.4, n4abs = nArm + 388.6;
    var piezas = [
      { et: "2 · 12 (entrada)", r: r2, m: m, z: z2, w: 28, pos: V(0, 0, 0), axis: "z", n: n2, color: "#0d6b57" },
      { tipo: "corona", et: "5 · 68 (corona fija)", r: r5, m: m, z: z5, w: 30, interno: true, pos: V(0, 0, 0), axis: "z", n: 0, color: "#8a929e" }
    ];
    for (var j = 0; j < 3; j++) {
      piezas.push({
        et: j === 0 ? "3 · 16" : "", r: r3, m: m, z: z3, w: 28, axis: "z", rama: j,
        pos: V(R3 * Math.cos(j * 2 * Math.PI / 3), R3 * Math.sin(j * 2 * Math.PI / 3), 0),
        ang: function (p, t) { return n3abs * k * t + p.rama * 1.1; },
        mover: function (p, t) {
          var a = p.rama * 2 * Math.PI / 3 + nArm * k * t;
          return V(R3 * Math.cos(a), R3 * Math.sin(a), 0);
        },
        color: "#2f6fb5"
      });
      piezas.push({
        et: j === 0 ? "4 · 12" : "", r: r4, m: m, z: z4, w: 28, axis: "z", rama: j,
        pos: V(R4 * Math.cos(j * 2 * Math.PI / 3), R4 * Math.sin(j * 2 * Math.PI / 3), 0),
        ang: function (p, t) { return n4abs * k * t + p.rama * 1.9; },
        mover: function (p, t) {
          var a = p.rama * 2 * Math.PI / 3 + nArm * k * t;
          return V(R4 * Math.cos(a), R4 * Math.sin(a), 0);
        },
        color: "#a5341d"
      });
    }
    new Escena(host, {
      alt: "Tren epicicloidal con corona fija del práctico 7 en 3D",
      az: -0.5, el: 0.7,
      vb: [720, 560],
      k: k,
      piezas: piezas,
      borde: { r: r5 + 8, z0: -18, z1: 18 },
      extras: function (e, C, t) {
        var g = "", kk;
        for (kk = 0; kk < 3; kk++) {
          var a = kk * 2 * Math.PI / 3 + nArm * k * t;
          var p1 = proy(V(0, 0, 22), C);
          var p2 = proy(V(R3 * Math.cos(a), R3 * Math.sin(a), 22), C);
          var p3 = proy(V(R4 * Math.cos(a), R4 * Math.sin(a), 22), C);
          g += '<line x1="' + p1[0].toFixed(1) + '" y1="' + p1[1].toFixed(1) + '" x2="' + p2[0].toFixed(1) + '" y2="' + p2[1].toFixed(1) + '" stroke="var(--ac)" stroke-width="4" stroke-opacity=".55" stroke-linecap="round"/>';
          g += '<line x1="' + p2[0].toFixed(1) + '" y1="' + p2[1].toFixed(1) + '" x2="' + p3[0].toFixed(1) + '" y2="' + p3[1].toFixed(1) + '" stroke="var(--ac)" stroke-width="4" stroke-opacity=".55" stroke-linecap="round"/>';
        }
        return g;
      },
      etapas: [
        { t: "Solar 2", piezas: [0], f: "n₂ = −320 rpm (antihorario)" },
        { t: "Satélites 3 y 4", piezas: [2, 3, 4, 5, 6, 7], f: "3 y 4 en el mismo brazo: 2 → 3 → 4 → 5" },
        { t: "Corona 5", piezas: [1], f: "fija · dentado interior: NO invierte" },
        { t: "Brazo (salida)", piezas: [], f: "n_ps = 320/4,6667 = 68,57 rpm" }
      ],
      sentido: [
        { t: "Solar 2 · entrada", v: "−320 rpm", d: -1 },
        { t: "Satélite 3", v: "+360 rpm", d: 1 },
        { t: "Satélite 4", v: "−320 rpm", d: -1 },
        { t: "Brazo · salida", v: "+68,57 rpm", d: 1 }
      ],
      panel:
        '<div class="sim-fila"><span>z₅ = z₂ + 2(z₃ + z₄)</span><b>68 dientes</b></div>' +
        '<div class="sim-fila"><span>i₀ (brazo fijo)</span><b>+68/12 = 5,667</b></div>' +
        '<div class="sim-fila ac"><span>n brazo</span><b>68,57 rpm</b></div>' +
        '<div class="sim-fila"><span>3 etapas en serie</span><b>3,15 rpm</b></div>',
      nota: "El satélite 3 engrana con el solar 2, el satélite 4 con el 3 y con la corona de dentado interno. Dos engranes exteriores ⇒ i₀ positivo. El brazo sale a 68,57 rpm, <strong>en sentido contrario</strong> a la entrada."
    });
  };

  /* =====================================================================
     8) Planetario simple didáctico (capítulo de epicicloidales)
     ===================================================================== */
  ESCENAS.planetario = function (host) {
    var m = 4, zs = 20, zsat = 30, zc = 80;
    var rs = zs * m / 2, rp = zsat * m / 2, rc = zc * m / 2, R = rs + rp;
    var nSol = -60, nArm = -12, nSat = -12 + (-60 + 12) * zs / zsat * -1;
    var k = 0.010;
    var piezas = [
      { et: "solar · 20", r: rs, m: m, z: zs, w: 40, pos: V(0, 0, 0), axis: "z", n: nSol, color: "#0d6b57" },
      { tipo: "corona", et: "corona · 80 (fija)", r: rc, m: m, z: zc, w: 40, interno: true, pos: V(0, 0, 0), axis: "z", n: 0, color: "#8a929e" }
    ];
    for (var j = 0; j < 3; j++) {
      piezas.push({
        et: j === 0 ? "satélite · 30" : "", r: rp, m: m, z: zsat, w: 36, axis: "z", rama: j, sat: true,
        pos: V(R * Math.cos(j * 2 * Math.PI / 3), R * Math.sin(j * 2 * Math.PI / 3), 0),
        ang: function (p, t) { return nSat * k * t + p.rama; },
        mover: function (p, t) {
          var a = p.rama * 2 * Math.PI / 3 + nArm * k * t;
          return V(R * Math.cos(a), R * Math.sin(a), 0);
        },
        color: "#2f6fb5"
      });
    }
    new Escena(host, {
      alt: "Tren planetario simple en 3D",
      az: -0.5, el: 0.66,
      vb: [700, 540],
      k: k,
      piezas: piezas,
      borde: { r: rc + 6, z0: -20, z1: 20 },
      extras: function (e, C, t) {
        var g = "", kk;
        for (kk = 0; kk < 3; kk++) {
          var a = kk * 2 * Math.PI / 3 + nArm * k * t;
          var p1 = proy(V(0, 0, 26), C);
          var p2 = proy(V(R * Math.cos(a), R * Math.sin(a), 26), C);
          g += '<line x1="' + p1[0].toFixed(1) + '" y1="' + p1[1].toFixed(1) + '" x2="' + p2[0].toFixed(1) + '" y2="' + p2[1].toFixed(1) + '" stroke="var(--ac)" stroke-width="4" stroke-opacity=".5" stroke-linecap="round"/>';
        }
        return g;
      },
      etapas: [
        { t: "Corona fija", piezas: [1], f: "n_corona = 0" },
        { t: "Solar (entra)", piezas: [0], f: "n_solar = 60 rpm" },
        { t: "Satélites", piezas: [2, 3, 4], f: "orbitan con el brazo y giran sobre su eje" },
        { t: "Brazo (salida)", piezas: [], f: "n_brazo = 60·20/(20+80) = 12 rpm" }
      ],
      sentido: [
        { t: "Solar", v: "60 rpm", d: 1 },
        { t: "Corona (fija)", v: "0 rpm", d: 0 },
        { t: "Brazo", v: "12 rpm", d: 1 }
      ],
      panel:
        '<div class="sim-fila"><span>z corona = z_s + 2z_sat</span><b>20 + 60 = 80 ✓</b></div>' +
        '<div class="sim-fila ac"><span>n brazo (i = 5)</span><b>12 rpm</b></div>',
      nota: "Los tres elementos: solar, satélites (engranan con el solar y con la corona) y el brazo que arrastra los centros. Con la corona fija, el brazo es 5 veces más lento que el solar."
    });
  };
})();
