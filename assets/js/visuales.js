/* =========================================================================
   VISUALES INTERACTIVOS
   Simuladores animados de engranajes, trenes y planetarios + nomenclatura.
   Se montan solos: cualquier <div data-visual="..."> se inicializa.
   ========================================================================= */
(function () {
  "use strict";

  var activos = [];   // loops en ejecución
  var reducido = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function num(v, d) {
    if (!isFinite(v)) return "—";
    var s = (Math.abs(v) >= 100 ? v.toFixed(0) : v.toFixed(d == null ? 1 : d));
    return s.replace(".", ",");
  }
  function esc(s) { return String(s); }

  /* ---------- geometría de un engranaje ---------- */
  function dientes(cx, cy, r, z, ha, hf, fase) {
    var paso = 2 * Math.PI / z;
    var ro = r + ha, rr = Math.max(r * 0.4, r - hf);
    var wTip = paso * 0.20, wRoot = paso * 0.30;
    var d = "", primero = true;
    for (var i = 0; i < z; i++) {
      var a = i * paso + (fase || 0);
      var pts = [[a - wRoot, rr], [a - wTip, ro], [a + wTip, ro], [a + wRoot, rr]];
      for (var k = 0; k < pts.length; k++) {
        var x = cx + pts[k][1] * Math.cos(pts[k][0]);
        var y = cy + pts[k][1] * Math.sin(pts[k][0]);
        d += (primero ? "M" : "L") + x.toFixed(1) + " " + y.toFixed(1) + " ";
        primero = false;
      }
    }
    return d + "Z";
  }

  /* corona de dentado interno: contorno dentado hacia adentro */
  function dientesCorona(cx, cy, r, z, ha, hf, fase) {
    var paso = 2 * Math.PI / z;
    var ri = r - ha, ro = r + hf;
    var wTip = paso * 0.20, wRoot = paso * 0.30;
    var d = "", primero = true;
    for (var i = 0; i < z; i++) {
      var a = i * paso + (fase || 0);
      var pts = [[a - wRoot, ro], [a - wTip, ri], [a + wTip, ri], [a + wRoot, ro]];
      for (var k = 0; k < pts.length; k++) {
        var x = cx + pts[k][1] * Math.cos(pts[k][0]);
        var y = cy + pts[k][1] * Math.sin(pts[k][0]);
        d += (primero ? "M" : "L") + x.toFixed(1) + " " + y.toFixed(1) + " ";
        primero = false;
      }
    }
    return d + "Z";
  }

  function flecha(x1, y1, x2, y2, clase) {
    var ang = Math.atan2(y2 - y1, x2 - x1);
    var L = 9, W = 4.2;
    var bx = x2 - L * Math.cos(ang), by = y2 - L * Math.sin(ang);
    var nx = -Math.sin(ang) * W, ny = Math.cos(ang) * W;
    return '<line x1="' + x1.toFixed(1) + '" y1="' + y1.toFixed(1) + '" x2="' + bx.toFixed(1) + '" y2="' + by.toFixed(1) +
      '" stroke="currentColor" stroke-width="1.8" class="' + (clase || "") + '"/>' +
      '<polygon points="' + x2.toFixed(1) + "," + y2.toFixed(1) + " " + (bx + nx).toFixed(1) + "," + (by + ny).toFixed(1) +
      " " + (bx - nx).toFixed(1) + "," + (by - ny).toFixed(1) + '" fill="currentColor"/>';
  }

  /* arco con punta de flecha: sentido de giro alrededor de (cx,cy)
     dir > 0 = horario (ángulo creciente en SVG); dir < 0 = antihorario */
  function flechaGiro(cx, cy, R, dir, r0, col) {
    var r = r0 || Math.max(15, R + 18);
    var a1 = -2.18, a2 = -0.96;                     // 70° de arco sobre la parte de arriba
    var pA = [cx + r * Math.cos(a1), cy + r * Math.sin(a1)];
    var pB = [cx + r * Math.cos(a2), cy + r * Math.sin(a2)];
    var desde, hasta, angFin, sweep;
    if (dir > 0) { desde = pA; hasta = pB; angFin = a2; sweep = 1; }
    else { desde = pB; hasta = pA; angFin = a1; sweep = 0; }
    var c = col || "var(--ac)";
    var d = "M " + desde[0].toFixed(1) + " " + desde[1].toFixed(1) +
      " A " + r.toFixed(1) + " " + r.toFixed(1) + " 0 0 " + sweep + " " +
      hasta[0].toFixed(1) + " " + hasta[1].toFixed(1);
    /* tangente en el extremo, en el sentido del giro */
    var tx = -Math.sin(angFin) * dir, ty = Math.cos(angFin) * dir;
    var nx = -ty, ny = tx;
    var L = Math.max(9, Math.min(15, r * 0.14)), Wd = L * 0.44;
    return '<path d="' + d + '" fill="none" stroke="' + c + '" stroke-width="1.7" stroke-linecap="round"/>' +
      '<polygon points="' + (hasta[0] + tx * L).toFixed(1) + "," + (hasta[1] + ty * L).toFixed(1) + " " +
      (hasta[0] + nx * Wd).toFixed(1) + "," + (hasta[1] + ny * Wd).toFixed(1) + " " +
      (hasta[0] - nx * Wd).toFixed(1) + "," + (hasta[1] - ny * Wd).toFixed(1) + '" fill="' + c + '"/>';
  }

  /* ---------- control de animación ---------- */
  function crearLoop(paso, dibujar) {
    var st = { t: 0, ultimo: 0, raf: null, corriendo: false, paso: paso, dibujar: dibujar };
    st.arrancar = function () {
      if (st.corriendo) return;
      st.corriendo = true;
      st.ultimo = performance.now();
      var tick = function (ahora) {
        if (!st.corriendo) return;
        var dt = Math.min(60, ahora - st.ultimo) / 1000;
        st.ultimo = ahora;
        st.t += dt * st.paso;
        st.dibujar(st.t, dt);
        st.raf = requestAnimationFrame(tick);
      };
      st.raf = requestAnimationFrame(tick);
    };
    st.parar = function () {
      st.corriendo = false;
      if (st.raf) cancelAnimationFrame(st.raf);
      st.raf = null;
    };
    st.reiniciar = function () { st.t = 0; st.dibujar(0, 0); };
    return st;
  }

  function botonPlay(cont, loop, etiqueta) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "btn btn-mini";
    b.innerHTML = "⏸ Pausar";
    var andando = true;
    b.addEventListener("click", function () {
      andando = !andando;
      if (andando) { loop.arrancar(); b.innerHTML = "⏸ Pausar"; }
      else { loop.parar(); b.innerHTML = "▶ " + (etiqueta || "Reproducir"); }
    });
    cont.appendChild(b);
    return b;
  }

  /* =======================================================================
     1) DOS ENGRANAJES ENGRANANDO
     ===================================================================== */
  function montarPar(host) {
    var S = {
      z1: 20, z2: 40, m: 4, n1: 60
    };
    var AN = 260, AL = 230;              // área de dibujo
    var W = 700, H = 420;
    var cy = 200;

    host.innerHTML =
      '<div class="sim">' +
      '  <div class="sim-lienzo"><svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="Dos engranajes engranando"></svg></div>' +
      '  <div class="sim-panel">' +
      '    <div class="sim-datos"></div>' +
      '    <div class="sim-ctrl no-print">' +
      '      <label class="sl">dientes z₁ <output id="o-z1"></output><input type="range" min="10" max="60" step="1" value="20"></label>' +
      '      <label class="sl">dientes z₂ <output id="o-z2"></output><input type="range" min="12" max="90" step="1" value="40"></label>' +
      '      <label class="sl">módulo m [mm] <output id="o-m"></output><input type="range" min="1" max="10" step="0.5" value="4"></label>' +
      '      <label class="sl">velocidad n₁ [rpm] <output id="o-n"></output><input type="range" min="10" max="600" step="10" value="60"></label>' +
      '    </div>' +
      '  </div>' +
      "</div>";

    var svg = host.querySelector("svg");
    var panel = host.querySelector(".sim-datos");
    var ctrl = host.querySelector(".sim-ctrl");
    var rngs = ctrl.querySelectorAll("input");
    var loop = crearLoop(1, dibujar);

    function geometria() {
      var m = S.m, r1 = m * S.z1 / 2, r2 = m * S.z2 / 2;
      var a = m, b = 1.25 * m;
      var ancho = 2 * (r1 + a + r2 + a), alto = 2 * (r2 + a);
      var escala = Math.min(1.45, (W - 70) / ancho, (H - 115) / alto);
      var R1 = r1 * escala, R2 = r2 * escala;
      var x1 = 40 + R1, x2 = x1 + R1 + R2;
      return { m: m, r1: r1, r2: r2, R1: R1, R2: R2, a: a * escala, b: b * escala, x1: x1, x2: x2, C: r1 + r2, esc: escala };
    }

    function dibujar(t) {
      var g = geometria();
      var rad1 = t * S.n1 * 2 * Math.PI / 60 * 0.12;     // cámara lenta
      var ang1 = rad1 * 180 / Math.PI;
      var ang2 = -ang1 * S.z1 / S.z2;
      var paso2 = 360 / S.z2;
      var fase2 = 180 + paso2 / 2;                       // diente contra espacio
      var x1 = g.x1, x2 = g.x2;
      var y = cy;
      var alfa = 20 * Math.PI / 180;

      var s = [];
      // círculos primitivos
      s.push('<circle cx="' + x1 + '" cy="' + y + '" r="' + g.R1 + '" fill="none" stroke="currentColor" stroke-opacity=".3" stroke-dasharray="6 5"/>');
      s.push('<circle cx="' + x2 + '" cy="' + y + '" r="' + g.R2 + '" fill="none" stroke="currentColor" stroke-opacity=".3" stroke-dasharray="6 5"/>');
      // rueda 2
      s.push('<g transform="rotate(' + ang2.toFixed(2) + " " + x2 + " " + y + ')">');
      s.push('<path d="' + dientes(x2, y, g.R2, S.z2, g.a, g.b, fase2 * Math.PI / 180) + '" fill="currentColor" fill-opacity=".07" stroke="currentColor" stroke-width="1.5"/>');
      s.push('<line x1="' + x2 + '" y1="' + y + '" x2="' + (x2 + g.R2 - g.a).toFixed(1) + '" y2="' + y + '" stroke="var(--ac)" stroke-width="2.2"/>');
      s.push("</g>");
      // rueda 1 (se enmascara la rueda 2 para que el piñón quede adelante)
      s.push('<circle cx="' + x1 + '" cy="' + y + '" r="' + (g.R1 + g.b + 1).toFixed(1) + '" fill="var(--sup2)"/>');
      s.push('<g transform="rotate(' + ang1.toFixed(2) + " " + x1 + " " + y + ')">');
      s.push('<path d="' + dientes(x1, y, g.R1, S.z1, g.a, g.b, 0) + '" fill="currentColor" fill-opacity=".1" stroke="currentColor" stroke-width="1.5"/>');
      s.push('<line x1="' + x1 + '" y1="' + y + '" x2="' + (x1 + g.R1 - g.a).toFixed(1) + '" y2="' + y + '" stroke="var(--ac)" stroke-width="2.2"/>');
      s.push("</g>");
      // centros
      s.push('<circle cx="' + x1 + '" cy="' + y + '" r="3.2" fill="currentColor"/><circle cx="' + x2 + '" cy="' + y + '" r="3.2" fill="currentColor"/>');
      // rótulos
      var yb = Math.max(y + g.R2 + 34, H - 26);
      s.push('<text x="' + x1 + '" y="' + (y + g.R1 + 30) + '" font-size="12.5" text-anchor="middle" font-weight="700">piñón z₁ = ' + S.z1 + "</text>");
      s.push('<text x="' + x1 + '" y="' + (y + g.R1 + 45) + '" font-size="11" text-anchor="middle" fill-opacity=".7">D<tspan font-size="8" dy="2">p</tspan><tspan dy="-2"> = </tspan>' + num(g.r1 * 2) + " mm</text>");
      s.push('<text x="' + x2 + '" y="' + (y + g.R2 + 30) + '" font-size="12.5" text-anchor="middle" font-weight="700">rueda z₂ = ' + S.z2 + "</text>");
      s.push('<text x="' + x2 + '" y="' + (y + g.R2 + 45) + '" font-size="11" text-anchor="middle" fill-opacity=".7">D<tspan font-size="8" dy="2">p</tspan><tspan dy="-2"> = </tspan>' + num(g.r2 * 2) + " mm</text>");
      // sentido de giro (flechas curvas)
      s.push(flechaGiro(x1, y, g.R1, 1));
      s.push(flechaGiro(x2, y, g.R2, -1));
      s.push('<text x="' + x1 + '" y="' + (y - g.R1 - 34) + '" font-size="10.5" text-anchor="middle" fill="var(--ac)">horario</text>');
      s.push('<text x="' + x2 + '" y="' + (y - g.R2 - 34) + '" font-size="10.5" text-anchor="middle" fill="var(--ac)">antihorario</text>');
      // línea de acción
      var Px = x1 + g.R1, Py = y;
      var L = (g.R1 + g.R2) * 0.8;
      s.push('<line x1="' + (Px - L * Math.cos(alfa)).toFixed(1) + '" y1="' + (Py + L * Math.sin(alfa)).toFixed(1) +
        '" x2="' + (Px + L * Math.cos(alfa)).toFixed(1) + '" y2="' + (Py - L * Math.sin(alfa)).toFixed(1) +
        '" stroke="var(--ac)" stroke-width="1.2" stroke-dasharray="5 4" stroke-opacity=".8"/>');
      s.push('<text x="' + (Px + L * Math.cos(alfa) - 4).toFixed(1) + '" y="' + (Py - L * Math.sin(alfa) - 8).toFixed(1) + '" font-size="10" text-anchor="end" fill="var(--ac)">línea de acción</text>');
      // ángulo de presión
      s.push('<path d="M ' + (Px - 46).toFixed(1) + " " + Py + " A 46 46 0 0 0 " + (Px - 46 * Math.cos(alfa)).toFixed(1) + " " + (Py - 46 * Math.sin(alfa)).toFixed(1) + '" fill="none" stroke="var(--ac)" stroke-width="1"/>');
      s.push('<text x="' + (Px - 62).toFixed(1) + '" y="' + (Py - 8).toFixed(1) + '" font-size="10.5" font-style="italic" fill="var(--ac)">φ</text>');
      // punto de contacto (recorre la línea de acción)
      var pb = Math.PI * S.m * Math.cos(alfa) * (g.R1 / (S.m * S.z1 / 2));
      var rec = (rad1 * g.R1) % pb;
      var sp = rec - pb / 2;
      var Kx = Px + sp * Math.cos(alfa), Ky = Py + sp * Math.sin(alfa);
      s.push('<circle cx="' + Kx.toFixed(1) + '" cy="' + Ky.toFixed(1) + '" r="4" fill="var(--alerta)"/>');
      s.push('<text x="' + (Kx + 8).toFixed(1) + '" y="' + (Ky + 14).toFixed(1) + '" font-size="10" fill="var(--alerta)">contacto</text>');
      // escala gráfica (para ver el efecto del módulo)
      var yb = H - 16, barra = 50 * g.esc;
      s.push('<line x1="24" y1="' + yb + '" x2="' + (24 + barra).toFixed(1) + '" y2="' + yb + '" stroke="currentColor" stroke-width="2.2"/>');
      s.push('<line x1="24" y1="' + (yb - 5) + '" x2="24" y2="' + (yb + 5) + '" stroke="currentColor" stroke-width="2.2"/>');
      s.push('<line x1="' + (24 + barra).toFixed(1) + '" y1="' + (yb - 5) + '" x2="' + (24 + barra).toFixed(1) + '" y2="' + (yb + 5) + '" stroke="currentColor" stroke-width="2.2"/>');
      s.push('<text x="' + (24 + barra / 2).toFixed(1) + '" y="' + (yb - 9) + '" font-size="10" text-anchor="middle" fill-opacity=".7">50 mm</text>');
      svg.innerHTML = s.join("");

      // panel
      var n2 = S.n1 * S.z1 / S.z2;
      var i = S.z2 / S.z1;
      var C = (g.r1 + g.r2);
      panel.innerHTML =
        fila("Relación i = z₂/z₁", num(i, 3)) +
        fila("Velocidad n₂", num(n2, 1) + " rpm") +
        fila("Distancia entre centros", num(C, 1) + " mm") +
        fila("Paso circular p<sub>c</sub>", num(Math.PI * S.m, 2) + " mm") +
        fila("Sentido de giro", "opuesto", "ac") + '<div class="sim-nota">Dibujo a escala (regla de 50 mm abajo) · animación a cámara lenta</div>';
    }

    function fila(l, v, clase) {
      return '<div class="sim-fila' + (clase ? " " + clase : "") + '"><span>' + l + "</span><b>" + v + "</b></div>";
    }

    function setRangos() {
      ctrl.querySelectorAll("output")[0].textContent = S.z1;
      ctrl.querySelectorAll("output")[1].textContent = S.z2;
      ctrl.querySelectorAll("output")[2].textContent = num(S.m, 1).replace(",0", "");
      ctrl.querySelectorAll("output")[3].textContent = S.n1;
    }

    rngs[0].addEventListener("input", function () { S.z1 = +this.value; setRangos(); dibujar(loop.t); });
    rngs[1].addEventListener("input", function () { S.z2 = +this.value; setRangos(); dibujar(loop.t); });
    rngs[2].addEventListener("input", function () { S.m = +this.value; setRangos(); dibujar(loop.t); });
    rngs[3].addEventListener("input", function () { S.n1 = +this.value; setRangos(); dibujar(loop.t); });

    setRangos();
    dibujar(0);
    if (!reducido) loop.arrancar(); else botonPlay(ctrl, loop);
    activos.push(loop);
    return loop;
  }

  /* =======================================================================
     2) TREN DE TRES EJES (compuesto)
     ===================================================================== */
  function montarTren(host) {
    var S = { z1: 18, z2: 30, z3: 50, z4: 80, n1: 100 };
    var W = 720, H = 430, y = 215;

    host.innerHTML =
      '<div class="sim">' +
      '  <div class="sim-lienzo"><svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="Tren de engranajes de tres ejes"></svg></div>' +
      '  <div class="sim-panel"><div class="sim-datos"></div>' +
      '    <div class="sim-ctrl no-print">' +
      '      <label class="sl">z₂ (rueda del eje B) <output></output><input type="range" min="20" max="48" step="1" value="30"></label>' +
      '      <label class="sl">z₄ (rueda del eje C) <output></output><input type="range" min="24" max="80" step="1" value="80"></label>' +
      "    </div>" +
      "  </div></div>";

    var svg = host.querySelector("svg"), panel = host.querySelector(".sim-datos");
    var rngs = host.querySelectorAll(".sim-ctrl input");
    var loop = crearLoop(1, dibujar);

    function dibujar(t) {
      var m = 4;
      var r1 = m * S.z1 / 2, r2 = m * S.z2 / 2, r3 = m * S.z3 / 2, r4 = m * S.z4 / 2;
      var ancho = 2 * r1 + r2 + r3 + 2 * r4 + 2 * m;
      var alto = 2 * (Math.max(r2, r4) + m);
      var esc = Math.min((W - 60) / ancho, (H - 92) / alto);
      var R1 = r1 * esc, R2 = r2 * esc, R3 = r3 * esc, R4 = r4 * esc;
      var xA = 40 + R1, xB = xA + R1 + R2, xC = xB + R3 + R4;
      var a1 = (t * S.n1 * 6 * 0.12) % 360;
      var a2 = -a1 * S.z1 / S.z2;
      var a3 = a2;                                  // eje B: ruedas 2 y 3 solidarias
      var a4 = -a3 * S.z3 / S.z4;
      var s = [];
      s.push('<g>');
      // tres ejes
      [xA, xB, xC].forEach(function (x) {
        s.push('<line x1="' + x + '" y1="40" x2="' + x + '" y2="' + (H - 30) + '" stroke="currentColor" stroke-opacity=".18" stroke-width="1.2" stroke-dasharray="7 6"/>');
      });
      s.push('<text x="' + xA + '" y="28" font-size="11" text-anchor="middle" font-weight="700">eje A (motor)</text>');
      s.push('<text x="' + xB + '" y="28" font-size="11" text-anchor="middle" font-weight="700">eje B</text>');
      s.push('<text x="' + xC + '" y="28" font-size="11" text-anchor="middle" font-weight="700">eje C (salida)</text>');
      // ruedas
      rueda(xB, y, R2, S.z2, a2, "z₂", y - R2 - 12, -1);
      rueda(xB, y, R3, S.z3, a3, "z₃", y + R2 + 22, -1);
      rueda(xA, y, R1, S.z1, a1, "z₁", y + R1 + 22, 1);
      rueda(xC, y, R4, S.z4, a4, "z₄", y + R4 + 22, 1);
      s.push("</g>");
      svg.innerHTML = s.join("");

      function rueda(cx, cy, R, z, ang, et, ly, dir) {
        s.push('<g transform="rotate(' + ang.toFixed(2) + " " + cx + " " + cy + ')">');
        s.push('<path d="' + dientes(cx, cy, R, z, 4 * esc, 5 * esc, 0) + '" fill="currentColor" fill-opacity=".1" stroke="currentColor" stroke-width="1.4"/>');
        s.push('<line x1="' + cx + '" y1="' + cy + '" x2="' + (cx + R - 4 * esc).toFixed(1) + '" y2="' + cy + '" stroke="var(--ac)" stroke-width="2"/>');
        s.push("</g>");
        s.push('<circle cx="' + cx + '" cy="' + cy + '" r="2.6" fill="currentColor"/>');
        s.push('<text x="' + cx + '" y="' + ly + '" font-size="12" text-anchor="middle" font-weight="700" paint-order="stroke" stroke="var(--sup2)" stroke-width="4">' + et + " · " + z + " d.</text>");
        s.push(flechaGiro(cx, cy, R, dir, Math.max(13, R * 0.6)));
      }

      var nB = S.n1 * S.z1 / S.z2;
      var nC = nB * S.z3 / S.z4;
      panel.innerHTML =
        '<div class="sim-fila"><span>n<sub>A</sub></span><b>' + num(S.n1, 0) + " rpm</b></div>" +
        '<div class="sim-fila"><span>n<sub>B</sub> = n<sub>A</sub>·z₁/z₂</span><b>' + num(nB, 1) + " rpm</b></div>" +
        '<div class="sim-fila ac"><span>n<sub>C</sub> = n<sub>B</sub>·z₃/z₄</span><b>' + num(nC, 1) + " rpm</b></div>" +
        '<div class="sim-fila"><span>Sentido A → C</span><b>mismo sentido</b></div>' +
        '<div class="sim-fila"><span>Relación total</span><b>' + num(S.n1 / nC, 2) + " : 1</b></div>";
    }

    rngs[0].addEventListener("input", function () {
      S.z2 = +this.value; this.previousElementSibling.textContent = S.z2; dibujar(loop.t);
    });
    rngs[1].addEventListener("input", function () {
      S.z4 = +this.value; this.previousElementSibling.textContent = S.z4; dibujar(loop.t);
    });
    rngs[0].previousElementSibling.textContent = S.z2;
    rngs[1].previousElementSibling.textContent = S.z4;
    dibujar(0);
    if (!reducido) loop.arrancar(); else botonPlay(host.querySelector(".sim-ctrl"), loop);
    activos.push(loop);
    return loop;
  }

  /* =======================================================================
     3) PLANETARIO INTERACTIVO
     ===================================================================== */
  function montarPlanetario(host) {
    var S = { zs: 20, zsat: 30, modo: 1, n: 60 };
    var W = 620, H = 480, cx = 305, cy = 240;

    host.innerHTML =
      '<div class="sim">' +
      '  <div class="sim-lienzo"><svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="Tren planetario animado"></svg></div>' +
      '  <div class="sim-panel">' +
      '    <div class="chips sim-modos no-print">' +
      '      <button class="chip activo" data-modo="1">Corona fija · entra solar</button>' +
      '      <button class="chip" data-modo="2">Solar fijo · entra corona</button>' +
      '      <button class="chip" data-modo="3">Brazo fijo · entra solar</button>' +
      '      <button class="chip" data-modo="4">Corona fija · entra brazo</button>' +
      "    </div>" +
      '    <div class="sim-datos"></div>' +
      '    <div class="sim-ctrl no-print">' +
      '      <label class="sl">dientes del satélite <output></output><input type="range" min="10" max="40" step="1" value="30"></label>' +
      '      <label class="sl">velocidad de entrada [rpm] <output></output><input type="range" min="10" max="200" step="5" value="60"></label>' +
      "    </div>" +
      "  </div></div>";

    var svg = host.querySelector("svg"), panel = host.querySelector(".sim-datos");
    var rngs = host.querySelectorAll(".sim-ctrl input");
    var chips = host.querySelectorAll(".sim-modos .chip");
    var loop = crearLoop(1, dibujar);

    function cinematica() {
      var zc = S.zs + 2 * S.zsat;
      var i0 = -zc / S.zs;
      var n = S.n, ns, nc, na;
      if (S.modo === 1) { nc = 0; ns = n; na = ns / (1 - i0); }
      else if (S.modo === 2) { ns = 0; nc = n; na = i0 * nc / (i0 - 1); }
      else if (S.modo === 3) { na = 0; ns = n; nc = ns / i0; }
      else { nc = 0; na = n; ns = na * (1 - i0); }
      return { zc: zc, i0: i0, ns: ns, nc: nc, na: na };
    }

    function dibujar(t) {
      var k = cinematica();
      var m = 320 / k.zc;                        // para que la corona mida 150 de radio
      var rs = m * S.zs / 2, rp = m * S.zsat / 2, rc = m * k.zc / 2;
      var brazo = rs + rp;
      var wS = k.ns, wC = k.nc, wA = k.na;
      var wPlaneta = wA + (-(wS - wA) * S.zs / S.zsat);
      var fS = t * wS * 0.6, fC = t * wC * 0.6, fA = t * wA * 0.6, fP = t * wPlaneta * 0.6;

      var s = [];
      // corona
      s.push('<g transform="rotate(' + fC.toFixed(2) + " " + cx + " " + cy + ')">');
      s.push('<path d="' + dientesCorona(cx, cy, rc, k.zc, m, 1.25 * m, 0) + '" fill="none" stroke="currentColor" stroke-width="1.5"/>');
      s.push('<circle cx="' + cx + '" cy="' + cy + '" r="' + (rc + 1.25 * m) + '" fill="none" stroke="currentColor" stroke-width="1.5"/>');
      s.push('<circle cx="' + cx + '" cy="' + cy + '" r="' + (rc + 1.25 * m + 7) + '" fill="none" stroke="currentColor" stroke-width="1" stroke-opacity=".45"/>');
      // marcas para ver el giro
      for (var i = 0; i < 8; i++) {
        var a = i * Math.PI / 4;
        s.push('<line x1="' + (cx + (rc + 1.25 * m) * Math.cos(a)).toFixed(1) + '" y1="' + (cy + (rc + 1.25 * m) * Math.sin(a)).toFixed(1) +
          '" x2="' + (cx + (rc + 1.25 * m + 7) * Math.cos(a)).toFixed(1) + '" y2="' + (cy + (rc + 1.25 * m + 7) * Math.sin(a)).toFixed(1) + '" stroke="currentColor" stroke-width="1.5"/>');
      }
      s.push("</g>");
      s.push('<text x="' + cx + '" y="' + (cy - rc - 26) + '" font-size="11" text-anchor="middle" fill-opacity=".75">corona z<tspan font-size="8" dy="2">c</tspan><tspan dy="-2"> = ' + k.zc + (S.modo === 1 || S.modo === 4 ? " (fija)" : "") + "</tspan></text>");

      // brazo
      s.push('<g transform="rotate(' + fA.toFixed(2) + " " + cx + " " + cy + ')">');
      for (var j = 0; j < 3; j++) {
        var aj = j * 2 * Math.PI / 3 - Math.PI / 2;
        s.push('<line x1="' + cx + '" y1="' + cy + '" x2="' + (cx + brazo * Math.cos(aj)).toFixed(1) + '" y2="' + (cy + brazo * Math.sin(aj)).toFixed(1) + '" stroke="var(--ac)" stroke-width="2" stroke-dasharray="8 5" stroke-opacity=".9"/>');
      }
      s.push("</g>");

      // satélites
      for (var q = 0; q < 3; q++) {
        var aq = q * 2 * Math.PI / 3 - Math.PI / 2 + fA * Math.PI / 180;
        var px = cx + brazo * Math.cos(aq), py = cy + brazo * Math.sin(aq);
        s.push('<g transform="rotate(' + fP.toFixed(2) + " " + px.toFixed(1) + " " + py.toFixed(1) + ')">');
        s.push('<path d="' + dientes(px, py, rp, S.zsat, m, 1.25 * m, 0) + '" fill="var(--sup)" stroke="currentColor" stroke-width="1.4"/>');
        s.push('<line x1="' + px.toFixed(1) + '" y1="' + py.toFixed(1) + '" x2="' + (px + rp * 0.9).toFixed(1) + '" y2="' + py.toFixed(1) + '" stroke="var(--ac)" stroke-width="1.6"/>');
        s.push("</g>");
        s.push('<circle cx="' + px.toFixed(1) + '" cy="' + py.toFixed(1) + '" r="2.5" fill="currentColor"/>');
      }

      // solar
      s.push('<g transform="rotate(' + fS.toFixed(2) + " " + cx + " " + cy + ')">');
      s.push('<path d="' + dientes(cx, cy, rs, S.zs, m, 1.25 * m, 0) + '" fill="currentColor" fill-opacity=".12" stroke="currentColor" stroke-width="1.5"/>');
      s.push('<line x1="' + cx + '" y1="' + cy + '" x2="' + (cx + rs * 0.85).toFixed(1) + '" y2="' + cy + '" stroke="currentColor" stroke-width="2"/>');
      s.push("</g>");
      s.push('<text x="' + cx + '" y="' + (cy + 4) + '" font-size="11" text-anchor="middle" font-weight="700" paint-order="stroke" stroke="var(--sup)" stroke-width="4">solar</text>');
      s.push('<text x="' + cx + '" y="' + (cy + 18) + '" font-size="10" text-anchor="middle" paint-order="stroke" stroke="var(--sup)" stroke-width="4">z₁ = ' + S.zs + "</text>");

      svg.innerHTML = s.join("");

      // panel
      var fijo = { 1: "corona", 2: "solar", 3: "brazo", 4: "corona" }[S.modo];
      var entra = { 1: "solar", 2: "corona", 3: "solar", 4: "brazo" }[S.modo];
      panel.innerHTML =
        '<div class="sim-fila"><span>Fijo</span><b>' + fijo + " · entra por el " + entra + "</b></div>" +
        '<div class="sim-fila"><span>i₀ (brazo fijo) = −z<sub>c</sub>/z<sub>s</sub></span><b>' + num(k.i0, 3) + "</b></div>" +
        '<div class="sim-fila"><span>n solar</span><b>' + num(k.ns, 1) + " rpm</b></div>" +
        '<div class="sim-fila"><span>n corona</span><b>' + num(k.nc, 1) + " rpm</b></div>" +
        '<div class="sim-fila ac"><span>n brazo (salida)</span><b>' + num(k.na, 1) + " rpm</b></div>" +
        '<div class="sim-fila"><span>Relación</span><b>' + num(Math.abs(k.ns / k.na), 2) + " : 1</b></div>";
    }

    chips.forEach(function (b) {
      b.addEventListener("click", function () {
        chips.forEach(function (x) { x.classList.toggle("activo", x === b); });
        S.modo = +b.dataset.modo;
        dibujar(loop.t);
      });
    });
    rngs[0].addEventListener("input", function () {
      S.zsat = +this.value; this.previousElementSibling.textContent = S.zsat; dibujar(loop.t);
    });
    rngs[1].addEventListener("input", function () {
      S.n = +this.value; this.previousElementSibling.textContent = S.n; dibujar(loop.t);
    });
    rngs[0].previousElementSibling.textContent = S.zsat;
    rngs[1].previousElementSibling.textContent = S.n;
    dibujar(0);
    if (!reducido) loop.arrancar(); else botonPlay(host.querySelector(".sim-ctrl"), loop);
    activos.push(loop);
    return loop;
  }

  /* =======================================================================
     4) NOMENCLATURA INTERACTIVA DEL DIENTE
     ===================================================================== */
  function montarDiente(host) {
    var PARTES = [
      { k: "cresta", t: "Cresta (cabeza)", d: "Es la superficie superior del diente, la que define el diámetro exterior d<sub>e</sub>." },
      { k: "flanco", t: "Flanco", d: "Es la cara lateral del diente. Tiene forma de evolvente: es la que empuja al diente de la otra rueda." },
      { k: "raiz", t: "Raíz (valle)", d: "Es el fondo entre dos dientes. Define el diámetro de raíz d<sub>i</sub> y es la zona más solicitada a flexión." },
      { k: "add", t: "Addendo (cabeza)", d: "Altura desde el círculo de paso hasta la cresta. Para diente de altura completa vale a = m." },
      { k: "ded", t: "Dedendo (raíz)", d: "Altura desde el círculo de paso hasta la raíz. Vale b = 1,25·m e incluye el huelgo." },
      { k: "paso", t: "Paso circular p<sub>c</sub>", d: "Distancia entre dos dientes consecutivos medida sobre el círculo de paso. p<sub>c</sub> = π·m." },
      { k: "espesor", t: "Espesor del diente t", d: "Parte del paso que ocupa el diente: t = (p<sub>c</sub> − h<sub>c</sub>)/2." },
      { k: "vacio", t: "Ancho del espacio v", d: "Parte vacía entre dos dientes: v = p<sub>c</sub> − t. Siempre t + v = p<sub>c</sub>." }
    ];
    var W = 700, H = 330;
    host.innerHTML =
      '<div class="sim sim-diente">' +
      '  <div class="sim-lienzo">' +
      '    <svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="Partes del diente">' +
      '      <line class="d-base" x1="70" y1="110" x2="640" y2="110" stroke="currentColor" stroke-opacity=".45" stroke-dasharray="5 4"/>' +
      '      <line class="d-base" x1="70" y1="170" x2="640" y2="170" stroke="currentColor" stroke-opacity=".45" stroke-dasharray="5 4"/>' +
      '      <line class="d-base" x1="70" y1="225" x2="640" y2="225" stroke="currentColor" stroke-width="1.3"/>' +
      '      <rect x="110" y="225" width="440" height="42" fill="currentColor" fill-opacity=".05" stroke="currentColor" stroke-width="1.2"/>' +
      '      <g fill="currentColor" fill-opacity=".07">' +
      '        <polygon points="127,225 138,110 182,110 193,225"/>' +
      '        <polygon points="237,225 248,110 292,110 303,225"/>' +
      '        <polygon points="347,225 358,110 392,110 403,225"/>' +
      '      </g>' +
      '      <g stroke="currentColor" stroke-width="1.5" fill="none">' +
      '        <line class="d-borde" data-p="cresta" x1="138" y1="110" x2="182" y2="110"/>' +
      '        <line class="d-borde" data-p="cresta" x1="248" y1="110" x2="292" y2="110"/>' +
      '        <line class="d-borde" data-p="cresta" x1="358" y1="110" x2="392" y2="110"/>' +
      '        <line class="d-borde" data-p="flanco" x1="138" y1="110" x2="127" y2="225"/>' +
      '        <line class="d-borde" data-p="flanco" x1="182" y1="110" x2="193" y2="225"/>' +
      '        <line class="d-borde" data-p="flanco" x1="248" y1="110" x2="237" y2="225"/>' +
      '        <line class="d-borde" data-p="flanco" x1="292" y1="110" x2="303" y2="225"/>' +
      '        <line class="d-borde" data-p="flanco" x1="358" y1="110" x2="347" y2="225"/>' +
      '        <line class="d-borde" data-p="flanco" x1="392" y1="110" x2="403" y2="225"/>' +
      '        <line class="d-borde" data-p="raiz" x1="193" y1="225" x2="237" y2="225"/>' +
      '        <line class="d-borde" data-p="raiz" x1="303" y1="225" x2="347" y2="225"/>' +
      '      </g>' +
      // addendo
      '      <g class="d-marca" data-p="add" stroke="currentColor" stroke-width="1.2" fill="none">' +
      '        <line class="svg-tenue-linea" x1="430" y1="110" x2="486" y2="110" stroke-dasharray="3 3"/>' +
      '        <line class="svg-tenue-linea" x1="430" y1="170" x2="486" y2="170" stroke-dasharray="3 3"/>' +
      '        <line x1="476" y1="110" x2="476" y2="170"/><line x1="470" y1="110" x2="482" y2="110"/><line x1="470" y1="170" x2="482" y2="170"/>' +
      '        <text x="490" y="146" font-size="13" fill="currentColor" stroke="none" font-weight="700">a = m</text>' +
      "      </g>" +
      // dedendo
      '      <g class="d-marca" data-p="ded" stroke="currentColor" stroke-width="1.2" fill="none">' +
      '        <line class="svg-tenue-linea" x1="430" y1="225" x2="486" y2="225" stroke-dasharray="3 3"/>' +
      '        <line x1="476" y1="170" x2="476" y2="225"/><line x1="470" y1="225" x2="482" y2="225"/>' +
      '        <text x="490" y="203" font-size="13" fill="currentColor" stroke="none" font-weight="700">b = 1,25·m</text>' +
      "      </g>" +
      // paso circular
      '      <g class="d-marca" data-p="paso" stroke="currentColor" stroke-width="1.2" fill="none">' +
      '        <line x1="160" y1="76" x2="270" y2="76"/><line x1="160" y1="70" x2="160" y2="82"/><line x1="270" y1="70" x2="270" y2="82"/>' +
      '        <line class="svg-tenue-linea" x1="160" y1="82" x2="160" y2="110" stroke-dasharray="3 3"/>' +
      '        <line class="svg-tenue-linea" x1="270" y1="82" x2="270" y2="110" stroke-dasharray="3 3"/>' +
      '        <text x="215" y="64" font-size="13" text-anchor="middle" fill="currentColor" stroke="none" font-weight="700">p<tspan font-size="9" dy="2">c</tspan></text>' +
      "      </g>" +
      // espesor
      '      <g class="d-marca" data-p="espesor" stroke="currentColor" stroke-width="1.2" fill="none">' +
      '        <line x1="132" y1="170" x2="188" y2="170"/><line x1="132" y1="164" x2="132" y2="176"/><line x1="188" y1="164" x2="188" y2="176"/>' +
      '        <text x="160" y="158" font-size="12" text-anchor="middle" fill="currentColor" stroke="none" font-weight="700">t</text>' +
      "      </g>" +
      // vacío
      '      <g class="d-marca" data-p="vacio" stroke="currentColor" stroke-width="1.2" fill="none">' +
      '        <line x1="188" y1="170" x2="242" y2="170"/><line x1="242" y1="164" x2="242" y2="176"/>' +
      '        <text x="215" y="158" font-size="12" text-anchor="middle" fill="currentColor" stroke="none" font-weight="700">v</text>' +
      "      </g>" +
      "    </svg>" +
      "  </div>" +
      '  <div class="sim-panel">' +
      '    <div class="chips no-print d-chips">' + PARTES.map(function (p, i) {
        return '<button class="chip' + (i === 0 ? " activo" : "") + '" data-p="' + p.k + '">' + p.t.replace(/<[^>]+>/g, "") + "</button>";
      }).join("") + "</div>" +
      '    <div class="d-info"></div>' +
      "  </div>" +
      "</div>";

    var chips = host.querySelectorAll(".d-chips .chip");
    var info = host.querySelector(".d-info");
    var marcas = host.querySelectorAll("[data-p]");

    function activar(k) {
      marcas.forEach(function (m) {
        var on = m.getAttribute("data-p") === k;
        m.classList.toggle("d-on", on);
      });
      var p = PARTES.filter(function (x) { return x.k === k; })[0];
      if (p) info.innerHTML = "<strong>" + p.t + "</strong><p>" + p.d + "</p>";
    }
    chips.forEach(function (b) {
      b.addEventListener("click", function () {
        chips.forEach(function (x) { x.classList.toggle("activo", x === b); });
        activar(b.dataset.p);
      });
    });
    marcas.forEach(function (m) {
      m.addEventListener("mouseenter", function () { activar(m.getAttribute("data-p")); });
      m.addEventListener("click", function () { activar(m.getAttribute("data-p")); });
    });
    activar("cresta");
  }

  /* =======================================================================
     5) RELACIÓN DE CONTACTO (interactivo, sin animación)
     ===================================================================== */
  function montarContacto(host) {
    var S = { z1: 17, z2: 46, m: 6 };
    var W = 700, H = 420, y = 215;
    var ALFA = 20 * Math.PI / 180;

    host.innerHTML =
      '<div class="sim">' +
      '  <div class="sim-lienzo"><svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="Relación de contacto: línea de acción y puntos A y B"></svg></div>' +
      '  <div class="sim-panel"><div class="sim-datos"></div>' +
      '    <div class="sim-ctrl no-print">' +
      '      <label class="sl">dientes z₁ <output></output><input type="range" min="10" max="60" step="1" value="17"></label>' +
      '      <label class="sl">dientes z₂ <output></output><input type="range" min="12" max="90" step="1" value="46"></label>' +
      '      <label class="sl">módulo m [mm] <output></output><input type="range" min="1" max="10" step="0.5" value="6"></label>' +
      "    </div>" +
      "  </div></div>";

    var svg = host.querySelector("svg"), panel = host.querySelector(".sim-datos");
    var rngs = host.querySelectorAll(".sim-ctrl input");

    function dibujar() {
      var m = S.m, r1 = m * S.z1 / 2, r2 = m * S.z2 / 2, a = m, b = 1.25 * m;
      var C = r1 + r2;
      var Rb1 = r1 * Math.cos(ALFA), Rb2 = r2 * Math.cos(ALFA);
      var Re1 = r1 + a, Re2 = r2 + a;
      var s1 = Math.sqrt(Math.max(0, Re1 * Re1 - Rb1 * Rb1));
      var s2 = Math.sqrt(Math.max(0, Re2 * Re2 - Rb2 * Rb2));
      var Lab = s1 + s2 - C * Math.sin(ALFA);
      var pb = Math.PI * m * Math.cos(ALFA);
      var mc = Lab / pb;
      var mcMax = (C / (Math.PI * m)) * Math.tan(ALFA);
      var PA = s2 - r2 * Math.sin(ALFA);      // de P hacia A
      var PB = s1 - r1 * Math.sin(ALFA);      // de P hacia B

      var ancho = 2 * (r1 + a + r2 + a), alto = 2 * (r2 + a);
      var esc = Math.min(1.45, (W - 70) / ancho, (H - 110) / alto);
      var R1 = r1 * esc, R2 = r2 * esc;
      var total = 2 * R1 + 2 * R2 + 2 * a * esc;
      var x1 = (W - total) / 2 + R1 + a * esc, x2 = x1 + R1 + R2;
      var Px = x1 + R1;

      var s = [];
      // círculos
      s.push('<circle cx="' + x2 + '" cy="' + y + '" r="' + R2 + '" fill="none" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="6 5"/>');
      s.push('<circle cx="' + x1 + '" cy="' + y + '" r="' + R1 + '" fill="none" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="6 5"/>');
      s.push('<circle cx="' + x2 + '" cy="' + y + '" r="' + (Re2 * esc) + '" fill="none" stroke="currentColor" stroke-opacity=".5" stroke-width="1.1"/>');
      s.push('<circle cx="' + x1 + '" cy="' + y + '" r="' + (Re1 * esc) + '" fill="none" stroke="currentColor" stroke-opacity=".5" stroke-width="1.1"/>');
      s.push('<circle cx="' + x2 + '" cy="' + y + '" r="' + (Rb2 * esc) + '" fill="none" stroke="currentColor" stroke-opacity=".35" stroke-dasharray="2 4"/>');
      s.push('<circle cx="' + x1 + '" cy="' + y + '" r="' + (Rb1 * esc) + '" fill="none" stroke="currentColor" stroke-opacity=".35" stroke-dasharray="2 4"/>');
      // centros
      s.push('<circle cx="' + x1 + '" cy="' + y + '" r="3" fill="currentColor"/><circle cx="' + x2 + '" cy="' + y + '" r="3" fill="currentColor"/>');
      s.push('<text x="' + x1 + '" y="' + (y + 18) + '" font-size="10" text-anchor="middle" fill-opacity=".6">O₁</text>');
      s.push('<text x="' + x2 + '" y="' + (y + 18) + '" font-size="10" text-anchor="middle" fill-opacity=".6">O₂</text>');
      // línea de acción
      var ux = Math.cos(ALFA), uy = -Math.sin(ALFA);
      var Ltot = PA + PB;
      var Ax = Px - PA * ux, Ay = y - PA * uy;
      var Bx = Px + PB * ux, By = y + PB * uy;
      s.push('<line x1="' + (Px - (PA + 40) * ux).toFixed(1) + '" y1="' + (y - (PA + 40) * uy).toFixed(1) +
        '" x2="' + (Px + (PB + 40) * ux).toFixed(1) + '" y2="' + (y + (PB + 40) * uy).toFixed(1) +
        '" stroke="currentColor" stroke-width="1" stroke-dasharray="7 5" stroke-opacity=".55"/>');
      s.push('<line x1="' + Ax.toFixed(1) + '" y1="' + Ay.toFixed(1) + '" x2="' + Bx.toFixed(1) + '" y2="' + By.toFixed(1) + '" stroke="var(--ac)" stroke-width="3.2"/>');
      // puntos
      s.push('<circle cx="' + Ax.toFixed(1) + '" cy="' + Ay.toFixed(1) + '" r="4.2" fill="var(--alerta)"/>');
      s.push('<circle cx="' + Bx.toFixed(1) + '" cy="' + By.toFixed(1) + '" r="4.2" fill="var(--ac)"/>');
      s.push('<circle cx="' + Px + '" cy="' + y + '" r="3.6" fill="currentColor"/>');
      s.push('<text x="' + (Ax - 10).toFixed(1) + '" y="' + (Ay + 16).toFixed(1) + '" font-size="12" font-weight="700" fill="var(--alerta)">A</text>');
      s.push('<text x="' + (Bx + 6).toFixed(1) + '" y="' + (By - 8).toFixed(1) + '" font-size="12" font-weight="700" fill="var(--ac)">B</text>');
      s.push('<text x="' + (Px + 6) + '" y="' + (y + 15) + '" font-size="11" font-weight="700">P</text>');
      // rótulos
      s.push('<text x="' + (Px + (PB + 30) * ux).toFixed(1) + '" y="' + (y + (PB + 30) * uy - 10).toFixed(1) + '" font-size="10" text-anchor="middle" fill-opacity=".7">línea de acción</text>');
      s.push('<text x="' + x1 + '" y="' + (y + R1 + 26) + '" font-size="11.5" text-anchor="middle" font-weight="700">piñón z₁ = ' + S.z1 + "</text>");
      s.push('<text x="' + x2 + '" y="' + (y + R2 + 26) + '" font-size="11.5" text-anchor="middle" font-weight="700">rueda z₂ = ' + S.z2 + "</text>");
      svg.innerHTML = s.join("");

      var ok = mc >= 1.2 && mc <= mcMax;
      var ent = Math.floor(mc);
      var frac = Math.round((mc - ent) * 100);
      var interp = "El " + (ent >= 1 ? (frac + " % del tiempo engranan " + (ent + 1) + " pares y el " + (100 - frac) + " %, " + ent) : (100 - frac) + " % del tiempo no engrana ningún par");
      panel.innerHTML =
        '<div class="sim-fila ac"><span>Relación de contacto m<sub>c</sub></span><b>' + num(mc, 3) + "</b></div>" +
        '<div class="sim-fila"><span>Longitud de la línea de acción L<sub>ab</sub></span><b>' + num(Lab, 2) + " mm</b></div>" +
        '<div class="sim-fila"><span>Paso de base p<sub>b</sub> = p<sub>c</sub>·cos φ</span><b>' + num(pb, 2) + " mm</b></div>" +
        '<div class="sim-fila"><span>Máximo admisible</span><b>' + num(mcMax, 2) + "</b></div>" +
        '<div class="sim-fila"><span>Mínimo práctico</span><b>1,20</b></div>' +
        '<div class="sim-nota">' + interp + (ok ? "" : " · <strong>fuera del rango recomendado</strong>") + "</div>";
    }

    rngs[0].addEventListener("input", function () { S.z1 = +this.value; this.previousElementSibling.textContent = S.z1; dibujar(); });
    rngs[1].addEventListener("input", function () { S.z2 = +this.value; this.previousElementSibling.textContent = S.z2; dibujar(); });
    rngs[2].addEventListener("input", function () { S.m = +this.value; this.previousElementSibling.textContent = num(S.m, 1).replace(",0", ""); dibujar(); });
    rngs[0].previousElementSibling.textContent = S.z1;
    rngs[1].previousElementSibling.textContent = S.z2;
    rngs[2].previousElementSibling.textContent = S.m;
    dibujar();
  }

  /* =======================================================================
     MONTAJE Y LIMPIEZA
     ===================================================================== */
  function detener() {
    activos.forEach(function (l) { try { l.parar(); } catch (e) {} });
    activos = [];
  }

  function montar(raiz) {
    detener();
    var hosts = raiz.querySelectorAll("[data-visual]");
    Array.prototype.forEach.call(hosts, function (h) {
      var tipo = h.getAttribute("data-visual");
      try {
        if (tipo === "par") montarPar(h);
        else if (tipo === "tren") montarTren(h);
        else if (tipo === "planetario") montarPlanetario(h);
        else if (tipo === "diente") montarDiente(h);
        else if (tipo === "contacto") montarContacto(h);
      } catch (e) { console.error("visual " + tipo, e); }
    });
  }

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) activos.forEach(function (l) { l.parar(); });
  });

  window.VISUALES = { montar: montar, detener: detener };
})();
