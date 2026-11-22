/* =========================================================================
   Engranajes y Reductores — aplicación
   Router por hash, navegación, búsqueda, quiz, calculadoras, impresión.
   ========================================================================= */
(function () {
  "use strict";

  var CAPS = window.CAPITULOS || [];
  var PREG = window.PREGUNTAS || [];
  var DESA = window.DESARROLLO || [];
  var LS = {
    tema: "edm-tema",
    visitados: "edm-visitados",
    quiz: "edm-quiz",
    quizTema: "edm-quiz-tema"
  };

  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  /* ---------- utilidades ---------- */
  var SES = null;
  try { SES = window.sessionStorage; } catch (e) { SES = null; }
  function leer(k, def, st) {
    try { var v = (st || localStorage).getItem(k); return v ? JSON.parse(v) : def; }
    catch (e) { return def; }
  }
  function guardar(k, v, st) {
    try { (st || localStorage).setItem(k, JSON.stringify(v)); } catch (e) { /* modo privado */ }
  }
  /* El progreso vive en sessionStorage: se mantiene mientras la pestaña esté
     abierta, pero se reinicia al abrir la guía en una pestaña nueva.
     El tema, en cambio, se recuerda entre sesiones. */
  var PROG = SES || localStorage;
  function slug(s) {
    return s.toString().toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60);
  }
  function num(v, dec) {
    if (!isFinite(v)) return "—";
    var d = dec == null ? 2 : dec;
    var s = Math.abs(v) >= 1000 ? v.toFixed(0) : v.toFixed(d);
    return s.replace(".", ",");
  }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /* ---------- tema ---------- */
  function aplicarTema(t) {
    document.documentElement.setAttribute("data-tema", t === "oscuro" ? "oscuro" : "claro");
    guardar(LS.tema, t);
    var m = document.querySelector('meta[name="theme-color"]');
    if (m) m.setAttribute("content", t === "oscuro" ? "#11141a" : "#0d6b57");
  }
  (function initTema() {
    var t = leer(LS.tema, null);
    if (!t) t = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "oscuro" : "claro";
    aplicarTema(t);
  })();

  /* ---------- navegación ---------- */
  var nav = $("#nav");
  function construirNav() {
    var html = "", grupo = null;
    CAPS.forEach(function (c, i) {
      if (c.grupo !== grupo) {
        grupo = c.grupo;
        html += '<div class="nav-grupo">' + esc(grupo) + "</div>";
      }
      html += '<a href="#' + c.id + '" data-cap="' + c.id + '">' +
        '<span class="num">' + (i + 1) + "</span><span>" + esc(c.titulo) + "</span></a>";
    });
    nav.innerHTML = html;
  }

  function marcarVistos() {
    var v = leer(LS.visitados, [], PROG);
    $$("#nav a").forEach(function (a) {
      a.classList.toggle("visto", v.indexOf(a.dataset.cap) !== -1);
    });
  }

  /* ---------- índice de búsqueda ---------- */
  var INDICE = [];
  function construirIndice() {
    CAPS.forEach(function (c) {
      var d = document.createElement("div");
      d.innerHTML = c.html;
      var titulos = $$("h2, h3", d);
      if (!titulos.length) {
        INDICE.push({ cap: c.id, capT: c.titulo, sec: "", txt: d.textContent.replace(/\s+/g, " ").slice(0, 4000) });
      }
      titulos.forEach(function (h) {
        var partes = [];
        var el = h.nextElementSibling;
        while (el && !/^H[23]$/.test(el.tagName)) {
          partes.push(el.textContent);
          el = el.nextElementSibling;
        }
        INDICE.push({
          cap: c.id,
          capT: c.titulo,
          sec: h.textContent.trim(),
          id: c.id + "--" + slug(h.textContent),
          txt: partes.join(" ").replace(/\s+/g, " ")
        });
      });
    });
  }

  var buscarInput = $("#buscar"), resultados = $("#resultados");
  function buscar(q) {
    q = (q || "").trim().toLowerCase();
    if (q.length < 2) { resultados.hidden = true; resultados.innerHTML = ""; return; }
    var terminos = q.split(/\s+/);
    var hits = [];
    INDICE.forEach(function (it) {
      var blob = (it.capT + " " + it.sec + " " + it.txt).toLowerCase();
      var ok = terminos.every(function (t) { return blob.indexOf(t) !== -1; });
      if (!ok) return;
      var peso = (it.sec.toLowerCase().indexOf(q) !== -1 ? 3 : 0) + (it.capT.toLowerCase().indexOf(q) !== -1 ? 4 : 0);
      hits.push({ it: it, peso: peso });
    });
    hits.sort(function (a, b) { return b.peso - a.peso; });
    hits = hits.slice(0, 14);
    if (!hits.length) {
      resultados.innerHTML = '<div class="vacio">Sin resultados para «' + esc(q) + '».</div>';
      resultados.hidden = false;
      return;
    }
    resultados.innerHTML = hits.map(function (h) {
      var href = "#" + h.it.cap + (h.it.id ? "/" + h.it.id.split("--")[1] : "");
      return '<a href="' + href + '"><span class="r-cap">' + esc(h.it.capT) + "</span>" +
        esc(h.it.sec || "Portada del capítulo") + "</a>";
    }).join("");
    resultados.hidden = false;
  }
  buscarInput.addEventListener("input", function () { buscar(buscarInput.value); });
  buscarInput.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { buscarInput.value = ""; buscar(""); buscarInput.blur(); }
    if (e.key === "Enter") {
      var primero = $("a", resultados);
      if (primero) { location.hash = primero.getAttribute("href"); resultados.hidden = true; buscarInput.blur(); }
    }
  });
  document.addEventListener("click", function (e) {
    if (!resultados.hidden && !resultados.contains(e.target) && e.target !== buscarInput) resultados.hidden = true;
  });

  /* ---------- render de capítulos ---------- */
  var principal = $("#contenido");
  var capActual = null;
  var hooks = {};

  function renderMath(el) {
    if (!window.renderMathInElement) return;
    try {
      window.renderMathInElement(el, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false }
        ],
        throwOnError: false,
        errorColor: "#b3301a",
        ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code", "option"]
      });
    } catch (e) { /* si KaTeX falla, se ve el código fuente de la fórmula */ }
  }

  function prepararTitulos(cont, capId) {
    $$("h2, h3", cont).forEach(function (h) {
      if (!h.id) h.id = capId + "--" + slug(h.textContent);
    });
  }

  function cinta(cap) {
    return '<div class="cinta-print"><span>Elementos de Máquinas · Engranajes y Reductores</span><span>' +
      esc(cap.titulo) + "</span></div>";
  }

  function render(id, sub) {
    var cap = null, idx = -1;
    for (var i = 0; i < CAPS.length; i++) if (CAPS[i].id === id) { cap = CAPS[i]; idx = i; break; }
    if (!cap) { id = CAPS[0].id; cap = CAPS[0]; idx = 0; }

    capActual = cap;
    principal.innerHTML = cinta(cap) + cap.html + paginador(idx);
    prepararTitulos(principal, cap.id);
    renderMath(principal);

    $$("#nav a").forEach(function (a) {
      a.classList.toggle("activo", a.dataset.cap === cap.id);
      if (a.dataset.cap === cap.id) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    $$(".acceso").forEach(function (a) {
      var on = a.getAttribute("data-cap") === cap.id;
      a.classList.toggle("activo", on);
      if (on) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });

    var v = leer(LS.visitados, [], PROG);
    if (v.indexOf(cap.id) === -1) { v.push(cap.id); guardar(LS.visitados, v, PROG); marcarVistos(); }

    document.title = cap.titulo + " · Engranajes y Reductores";
    if (hooks[cap.id]) { try { hooks[cap.id](principal); } catch (e) { console.error(e); } }
    if (window.VISUALES) { try { window.VISUALES.montar(principal); } catch (e) { console.error(e); } }
    if (window.VISUALES3D) { try { window.VISUALES3D.montar(principal); } catch (e) { console.error(e); } }

    if (sub) {
      var el = document.getElementById(cap.id + "--" + sub);
      if (el) {
        setTimeout(function () { el.scrollIntoView({ block: "start", behavior: "instant" }); }, 30);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" });
    principal.focus({ preventScroll: true });
  }

  function paginador(idx) {
    var ant = CAPS[idx - 1], sig = CAPS[idx + 1];
    var h = '<nav class="pager no-print" aria-label="Navegación entre capítulos">';
    h += ant ? '<a href="#' + ant.id + '" class="ant"><span class="dir">← Anterior</span><span class="tt">' + esc(ant.titulo) + "</span></a>"
      : '<a class="vacia"></a>';
    h += sig ? '<a href="#' + sig.id + '" class="sig"><span class="dir">Siguiente →</span><span class="tt">' + esc(sig.titulo) + "</span></a>"
      : '<a class="vacia"></a>';
    h += "</nav>";
    return h;
  }

  function ruta() {
    var h = location.hash.replace(/^#/, "");
    if (!h) return { id: CAPS[0].id, sub: null };
    var p = h.split("/");
    return { id: p[0], sub: p[1] || null };
  }

  window.addEventListener("hashchange", function () {
    var r = ruta();
    render(r.id, r.sub);
    cerrarMenu();
  });

  /* ---------- menú móvil ---------- */
  var sidebar = $("#sidebar"), velo = $("#velo"), btnMenu = $("#btn-menu");
  function abrirMenu() {
    sidebar.classList.add("abierto");
    velo.hidden = false;
    btnMenu.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }
  function cerrarMenu() {
    sidebar.classList.remove("abierto");
    velo.hidden = true;
    btnMenu.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
  btnMenu.addEventListener("click", function () {
    if (sidebar.classList.contains("abierto")) cerrarMenu(); else abrirMenu();
  });
  velo.addEventListener("click", cerrarMenu);
  $("#btn-buscar").addEventListener("click", function () {
    abrirMenu();
    setTimeout(function () { buscarInput.focus(); }, 250);
  });
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) cerrarMenu();
  });
  $$(".acceso").forEach(function (a) {
    a.addEventListener("click", function () { cerrarMenu(); });
  });

  /* ---------- tema / impresión / reset ---------- */
  $("#btn-tema").addEventListener("click", function () {
    var t = document.documentElement.getAttribute("data-tema") === "oscuro" ? "claro" : "oscuro";
    aplicarTema(t);
  });
  $("#btn-print").addEventListener("click", function () { window.print(); });

  /* al imprimir, los desplegables se abren solos y después vuelven a su lugar */
  var plegados = null;
  function abrirPlegados() {
    var ds = document.querySelectorAll("details");
    plegados = [];
    Array.prototype.forEach.call(ds, function (d, i) {
      plegados[i] = d.open;
      if (!d.open) d.open = true;
    });
  }
  function cerrarPlegados() {
    if (!plegados) return;
    var ds = document.querySelectorAll("details");
    Array.prototype.forEach.call(ds, function (d, i) {
      if (plegados[i] === false) d.open = false;
    });
    plegados = null;
  }
  window.addEventListener("beforeprint", abrirPlegados);
  window.addEventListener("afterprint", cerrarPlegados);

  $("#btn-reset").addEventListener("click", function () {
    if (!confirm("¿Reiniciar el progreso de esta pestaña (capítulos vistos y respuestas del cuestionario)?")) return;
    [LS.visitados, LS.quiz, LS.quizTema].forEach(function (k) {
      try { localStorage.removeItem(k); } catch (e) {}
      try { if (SES) SES.removeItem(k); } catch (e) {}
    });
    marcarVistos();
    if (capActual) render(capActual.id, null);
  });

  document.addEventListener("keydown", function (e) {
    var tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "textarea" || tag === "select") return;
    if (e.key === "/") { e.preventDefault(); abrirMenu(); buscarInput.focus(); }
    if (e.key === "Escape") cerrarMenu();
  });

  /* =======================================================================
     CALCULADORAS
     ===================================================================== */
  var MODULOS = [0.5, 0.75, 1, 1.25, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12, 16, 20, 25, 32, 40];
  var Y_LEWIS = {
    12: 0.245, 13: 0.261, 14: 0.277, 15: 0.290, 16: 0.296, 17: 0.303, 18: 0.309,
    19: 0.314, 20: 0.322, 21: 0.328, 22: 0.331, 24: 0.337, 26: 0.346, 28: 0.353,
    30: 0.359, 34: 0.371, 38: 0.384, 43: 0.397, 50: 0.409, 60: 0.422, 75: 0.435,
    100: 0.447, 150: 0.460, 300: 0.472, 400: 0.480
  };
  function yLewis(z) {
    if (Y_LEWIS[z]) return Y_LEWIS[z];
    var ks = Object.keys(Y_LEWIS).map(Number).sort(function (a, b) { return a - b; });
    if (z < ks[0]) return Y_LEWIS[ks[0]];
    for (var i = 0; i < ks.length - 1; i++) {
      if (z >= ks[i] && z <= ks[i + 1]) {
        var t = (z - ks[i]) / (ks[i + 1] - ks[i]);
        return Y_LEWIS[ks[i]] + t * (Y_LEWIS[ks[i + 1]] - Y_LEWIS[ks[i]]);
      }
    }
    return Y_LEWIS[400];
  }
  var PERFILES = {
    creadora: { et: "Generado con fresa madre (creadora)", kv: function (V) { return (3.56 + Math.sqrt(V)) / 3.56; } },
    fresado: { et: "Perfil cortado o fresado", kv: function (V) { return (6.1 + V) / 6.1; } },
    rectificado: { et: "Cepillado o esmerilado (rectificado)", kv: function (V) { return Math.sqrt((5.56 + Math.sqrt(V)) / 5.56); } },
    fundido: { et: "Fundición, perfil moldeado", kv: function (V) { return (3.05 + V) / 3.05; } }
  };

  /* --- Calculadora 1: módulo recomendado + verificación --- */
  hooks["seleccion-modulo"] = function (raiz) {
    var c = $(".calc", raiz);
    if (!c) return;
    var inH = $("#c-h", c), inU = $("#c-u", c), inN = $("#c-n", c),
      inS = $("#c-s", c), inZ = $("#c-z", c), inF = $("#c-f", c), inP = $("#c-p", c);
    var sal = $("#c-salida", c);
    var grafico = $("#c-abaco", raiz);

    function calcular() {
      var Hval = parseFloat(String(inH.value).replace(",", ".")) || 0;
      var H = inU.value === "HP" ? Hval * 745 : Hval * 1000;
      var n = parseFloat(String(inN.value).replace(",", ".")) || 1;
      var Sadm = parseFloat(String(inS.value).replace(",", ".")) || 500;
      var z = Math.max(12, Math.round(parseFloat(String(inZ.value).replace(",", ".")) || 17));
      var fm = parseFloat(String(inF.value).replace(",", ".")) || 7;
      var perfil = PERFILES[inP.value] || PERFILES.creadora;
      var w = 2 * Math.PI * n / 60;
      var Kv = 1, m = 1, iter = 0;
      m = Math.pow(2000 * H * 1.2 / (w * z * fm * yLewis(z) * Sadm), 1 / 3);
      do {
        var V = Math.PI * m * z * n / 60000;
        Kv = perfil.kv(V);
        var mNew = Math.pow(2000 * H * Kv / (w * z * fm * yLewis(z) * Sadm), 1 / 3);
        if (Math.abs(mNew - m) < 0.0005) { m = mNew; break; }
        m = mNew; iter++;
      } while (iter < 40);

      var mNorm = null, mSig = null;
      for (var i = 0; i < MODULOS.length; i++) {
        if (MODULOS[i] >= m - 1e-9) { mNorm = MODULOS[i]; mSig = MODULOS[i + 1] || null; break; }
      }
      var Vn = Math.PI * mNorm * z * n / 60000;
      var Kvn = perfil.kv(Vn);
      var T = H / w;
      var Wt = 2000 * H / (w * mNorm * z);
      var sigma = Kvn * Wt / ((fm * mNorm) * mNorm * yLewis(z));
      var fseg = Sadm / sigma;

      sal.innerHTML =
        '<div class="s"><span class="l">Potencia</span><span class="v">' + num(H / 1000, 1) + " kW</span></div>" +
        '<div class="s"><span class="l">Torque</span><span class="v">' + num(T, 1) + " N·m</span></div>" +
        '<div class="s"><span class="l">Vel. tangencial</span><span class="v">' + num(Vn, 2) + " m/s</span></div>" +
        '<div class="s"><span class="l">K<sub>v</sub></span><span class="v">' + num(Kvn, 3) + "</span></div>" +
        '<div class="s"><span class="l">m calculado</span><span class="v">' + num(m, 2) + " mm</span></div>" +
        '<div class="s ok"><span class="l">Módulo normalizado</span><span class="v">' + num(mNorm, 2) + " mm</span></div>" +
        '<div class="s"><span class="l">W<sub>t</sub> (con m norm.)</span><span class="v">' + num(Wt, 0) + " N</span></div>" +
        '<div class="s"><span class="l">σ Lewis</span><span class="v">' + num(sigma, 1) + " MPa</span></div>" +
        '<div class="s"><span class="l">f<sub>seg</sub> = S/σ</span><span class="v">' + num(fseg, 2) + "</span></div>";

      dibujarAbaco(grafico, Sadm, z, fm, perfil, n, H / 1000, mNorm);
      return { mNorm: mNorm, mSig: mSig };
    }

    ["input", "change"].forEach(function (ev) {
      [inH, inU, inN, inS, inZ, inF, inP].forEach(function (el) { el.addEventListener(ev, calcular); });
    });
    calcular();
  };

  /* --- Ábaco SVG (reconstrucción del gráfico de la cátedra) --- */
  var CURVAS_M = [1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12, 16, 20, 25, 32, 40];

  function dibujarAbaco(cont, Sadm, z, fm, perfil, nPt, hPt, mSel) {
    if (!cont) return;
    var W = 680, H = 380, ml = 54, mr = 48, mt = 16, mb = 40;
    var x0 = ml, x1 = W - mr, y0 = H - mb, y1 = mt;
    var nMin = 10, nMax = 10000, hMin = 0.01, hMax = 10000;
    var lx = function (n) { return x0 + (Math.log10(n) - Math.log10(nMin)) / (Math.log10(nMax) - Math.log10(nMin)) * (x1 - x0); };
    var ly = function (h) { return y0 - (Math.log10(h) - Math.log10(hMin)) / (Math.log10(hMax) - Math.log10(hMin)) * (y0 - y1); };

    function Hpara(m, n) {
      var w = 2 * Math.PI * n / 60, Kv = 1, V;
      for (var k = 0; k < 6; k++) {
        V = Math.PI * m * z * n / 60000;
        Kv = perfil.kv(V);
      }
      return Sadm * w * z * fm * yLewis(z) * Math.pow(m, 3) / (2000 * Kv) / 1000;
    }

    var s = [];
    s.push('<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="Ábaco de selección de módulo">');
    // grilla
    for (var e = -2; e <= 4; e++) {
      var xh = lx(Math.pow(10, e));
      s.push('<line x1="' + xh.toFixed(1) + '" y1="' + y1 + '" x2="' + xh.toFixed(1) + '" y2="' + y0 + '" stroke="currentColor" stroke-opacity=".12"/>');
      s.push('<text class="svg-tenue" x="' + xh.toFixed(1) + '" y="' + (y0 + 15) + '" font-size="10" text-anchor="middle">' + (e <= 1 ? Math.pow(10, e).toString().replace(".", ",") : Math.pow(10, e).toLocaleString("es-AR")) + "</text>");
    }
    for (var e2 = -2; e2 <= 4; e2++) {
      var yh = ly(Math.pow(10, e2));
      s.push('<line x1="' + x0 + '" y1="' + yh.toFixed(1) + '" x2="' + x1 + '" y2="' + yh.toFixed(1) + '" stroke="currentColor" stroke-opacity=".12"/>');
      s.push('<text class="svg-tenue" x="' + (x0 - 6) + '" y="' + (yh + 3.5).toFixed(1) + '" font-size="10" text-anchor="end">' + (e2 <= 1 ? Math.pow(10, e2).toString().replace(".", ",") : Math.pow(10, e2).toLocaleString("es-AR")) + "</text>");
    }
    // curvas
    var ROTULADOS = [1, 2, 4, 6, 8, 12, 20, 32];
    CURVAS_M.forEach(function (m) {
      var pts = [];
      for (var i = 0; i <= 60; i++) {
        var n = Math.pow(10, Math.log10(nMin) + i / 60 * (Math.log10(nMax) - Math.log10(nMin)));
        var h = Hpara(m, n);
        if (h > hMax || h < hMin / 4) continue;
        pts.push(lx(n).toFixed(1) + "," + ly(h).toFixed(1));
      }
      if (pts.length < 2) return;
      var esSel = Math.abs(m - mSel) < 1e-6;
      s.push('<polyline points="' + pts.join(" ") + '" fill="none" stroke="' + (esSel ? "var(--ac)" : "currentColor") + '" stroke-opacity="' + (esSel ? "1" : ".4") + '" stroke-width="' + (esSel ? "2.4" : "1.1") + '"/>');
      if (ROTULADOS.indexOf(m) === -1 && !esSel) return;
      var ult = pts[pts.length - 1].split(",");
      var tx = Math.min(+ult[0] + 4, x1 + 2);
      var ty = Math.max(+ult[1] + 3, y1 + 9);
      s.push('<text x="' + tx.toFixed(1) + '" y="' + ty.toFixed(1) + '" font-size="9.5" font-weight="' + (esSel ? "700" : "500") + '" fill="' + (esSel ? "var(--ac)" : "currentColor") + '" fill-opacity="' + (esSel ? "1" : ".75") + '">m=' + m.toString().replace(".", ",") + "</text>");
    });
    // punto de operación
    if (hPt >= hMin && hPt <= hMax && nPt >= nMin && nPt <= nMax) {
      var px = lx(nPt), py = ly(hPt);
      s.push('<line x1="' + px.toFixed(1) + '" y1="' + py.toFixed(1) + '" x2="' + px.toFixed(1) + '" y2="' + y0 + '" stroke="#b3301a" stroke-width="1" stroke-dasharray="3 3"/>');
      s.push('<line x1="' + x0 + '" y1="' + py.toFixed(1) + '" x2="' + px.toFixed(1) + '" y2="' + py.toFixed(1) + '" stroke="#b3301a" stroke-width="1" stroke-dasharray="3 3"/>');
      s.push('<circle cx="' + px.toFixed(1) + '" cy="' + py.toFixed(1) + '" r="4.3" fill="#b3301a"/>');
      s.push('<text x="' + (px + 7).toFixed(1) + '" y="' + (py - 6).toFixed(1) + '" font-size="10" fill="#b3301a" font-weight="700">tu punto</text>');
    }
    // ejes
    s.push('<line x1="' + x0 + '" y1="' + y0 + '" x2="' + x1 + '" y2="' + y0 + '" stroke="currentColor" stroke-width="1.3"/>');
    s.push('<line x1="' + x0 + '" y1="' + y0 + '" x2="' + x0 + '" y2="' + y1 + '" stroke="currentColor" stroke-width="1.3"/>');
    s.push('<text class="svg-tenue" x="' + ((x0 + x1) / 2) + '" y="' + (H - 6) + '" font-size="10.5" text-anchor="middle">Velocidad angular del eje motriz n₁ [rpm]</text>');
    s.push('<text class="svg-tenue" font-size="10.5" text-anchor="middle" transform="translate(14,' + ((y0 + y1) / 2) + ') rotate(-90)">Potencia nominal H [kW]</text>');
    s.push('<rect x="' + (x0 + 2) + '" y="' + (y1 + 2) + '" width="345" height="14" fill="var(--sup)" opacity=".88"/>');
    s.push('<text x="' + (x0 + 6) + '" y="' + (y1 + 11) + '" font-size="10" fill="currentColor" font-weight="700">S_adm = ' + num(Sadm, 0) + " MPa · z₁=" + z + " · F=" + num(fm, 1) + "·m · " + perfil.et.split("(")[0].trim() + "</text>");
    s.push("</svg>");
    cont.innerHTML = s.join("");
  }

  /* --- Calculadora 2: geometría del engrane --- */
  hooks.geometria = function (raiz) {
    var c = $("#calc-geo", raiz);
    if (!c) return;
    var inM = $("#g-m", c), inZ1 = $("#g-z1", c), inZ2 = $("#g-z2", c),
      inN1 = $("#g-n1", c), inFi = $("#g-fi", c);
    var sal = $("#g-salida", c);
    function calc() {
      var m = parseFloat(String(inM.value).replace(",", ".")) || 4;
      var z1 = Math.max(1, Math.round(parseFloat(String(inZ1.value).replace(",", ".")) || 17));
      var z2 = Math.max(1, Math.round(parseFloat(String(inZ2.value).replace(",", ".")) || 46));
      var n1 = parseFloat(String(inN1.value).replace(",", ".")) || 0;
      var fi = (parseFloat(String(inFi.value).replace(",", ".")) || 20) * Math.PI / 180;
      var a = m, b = 1.25 * m, ht = a + b, pc = Math.PI * m, hc = pc / 50, t = (pc - hc) / 2, v = pc - t;
      var dp1 = m * z1, dp2 = m * z2, de1 = dp1 + 2 * a, de2 = dp2 + 2 * a,
        di1 = dp1 - 2 * b, di2 = dp2 - 2 * b,
        db1 = dp1 * Math.cos(fi), db2 = dp2 * Math.cos(fi),
        C = (dp1 + dp2) / 2, i = z2 / z1, n2 = n1 / i,
        pb = pc * Math.cos(fi);
      var filas = [
        ["Módulo", "m", num(m, 2) + " mm"], ["Paso circular", "p_c = π·m", num(pc, 3) + " mm"],
        ["Paso de base", "p_b = p_c·cos φ", num(pb, 3) + " mm"],
        ["Addendo", "a = m", num(a, 2) + " mm"], ["Dedendo", "b = 1,25·m", num(b, 2) + " mm"],
        ["Altura total", "h_t = 2,25·m", num(ht, 2) + " mm"],
        ["Huelgo", "h_c = p_c/50", num(hc, 3) + " mm"],
        ["Espesor", "t = (p_c−h_c)/2", num(t, 3) + " mm"],
        ["Vacío", "v = p_c−t", num(v, 3) + " mm"],
        ["D primitivo piñón", "D_p1 = m·z₁", num(dp1, 2) + " mm"],
        ["D primitivo rueda", "D_p2 = m·z₂", num(dp2, 2) + " mm"],
        ["D exterior piñón", "d_e1 = D_p1+2a", num(de1, 2) + " mm"],
        ["D exterior rueda", "d_e2 = D_p2+2a", num(de2, 2) + " mm"],
        ["D raíz piñón", "d_i1 = D_p1−2b", num(di1, 2) + " mm"],
        ["D raíz rueda", "d_i2 = D_p2−2b", num(di2, 2) + " mm"],
        ["D base piñón", "D_b1 = D_p1·cos φ", num(db1, 2) + " mm"],
        ["D base rueda", "D_b2 = D_p2·cos φ", num(db2, 2) + " mm"],
        ["Distancia entre centros", "C = (D_p1+D_p2)/2", num(C, 2) + " mm"],
        ["Relación de transmisión", "i = z₂/z₁", num(i, 4)],
        ["Velocidad de salida", "n₂ = n₁/i", num(n2, 1) + " rpm"]
      ];
      sal.innerHTML = '<div class="tabla-wrap" style="margin:0"><table class="tec compacta"><tbody>' +
        filas.map(function (f) {
          return "<tr><td>" + f[0] + "</td><td><code>" + f[1] + "</code></td><td class='num'>" + f[2] + "</td></tr>";
        }).join("") + "</tbody></table></div>";
    }
    [inM, inZ1, inZ2, inN1, inFi].forEach(function (el) { el.addEventListener("input", calc); });
    calc();
  };

  /* =======================================================================
     CUESTIONARIO
     ===================================================================== */
  hooks.quiz = function (raiz) {
    var cont = $("#quiz-caja", raiz);
    if (!cont) return;

    var estado = leer(LS.quiz, null, PROG) || { orden: [], pos: 0, aciertos: 0, respuestas: {} };
    var temaSel = leer(LS.quizTema, "todos", PROG);
    var preguntas = [];
    var chips = $("#quiz-temas", raiz);

    var temas = [];
    PREG.forEach(function (p) { if (temas.indexOf(p.tema) === -1) temas.push(p.tema); });
    chips.innerHTML = '<button class="chip' + (temaSel === "todos" ? " activo" : "") + '" data-tema="todos">Todos (' + PREG.length + ")</button>" +
      temas.map(function (t) {
        var n = PREG.filter(function (p) { return p.tema === t; }).length;
        return '<button class="chip' + (temaSel === t ? " activo" : "") + '" data-tema="' + esc(t) + '">' + esc(t) + " (" + n + ")</button>";
      }).join("");

    function filtrar() {
      var idxs = [];
      PREG.forEach(function (p, i) { if (temaSel === "todos" || p.tema === temaSel) idxs.push(i); });
      return idxs;
    }
    function mezclar(a) {
      for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
      return a;
    }
    function nueva(barajar) {
      var idxs = filtrar();
      if (barajar) mezclar(idxs);
      estado = { orden: idxs, pos: 0, aciertos: 0, respuestas: {} };
      guardar(LS.quiz, estado, PROG);
      pintar();
    }

    function pintar() {
      if (!estado.orden.length) estado = { orden: filtrar(), pos: 0, aciertos: 0, respuestas: {} };
      if (estado.pos >= estado.orden.length) { fin(); return; }
      var qi = estado.orden[estado.pos];
      var p = PREG[qi];
      var elegida = estado.respuestas[qi];
      var total = estado.orden.length;
      var pct = Math.round(estado.pos / total * 100);

      var ops = p.ops.map(function (o, k) {
        var clase = "opcion";
        if (elegida != null) {
          if (k === p.ok) clase += " correcta";
          else if (k === elegida) clase += " errada";
        }
        return '<button class="' + clase + '" data-k="' + k + '"' + (elegida != null ? " disabled" : "") + ">" +
          '<span class="letra">' + "ABCD"[k] + "</span><span>" + o + "</span></button>";
      }).join("");

      cont.innerHTML =
        '<div class="quiz-barra"><span class="quiz-meta">Pregunta ' + (estado.pos + 1) + " de " + total + "</span>" +
        '<span class="progreso"><span style="width:' + pct + '%"></span></span>' +
        '<span class="quiz-meta">✔ ' + estado.aciertos + " · ✘ " + (estado.pos - estado.aciertos) + "</span></div>" +
        '<p class="quiz-preg">' + p.p + "</p>" +
        '<div class="opciones">' + ops + "</div>" +
        (elegida != null
          ? '<div class="explica">' + (elegida === p.ok ? "<b>¡Correcto!</b> " : "<b>No es la opción correcta.</b> ") + p.exp + "</div>" +
            '<div class="quiz-pie"><button class="btn btn-primario" id="quiz-sig">' +
            (estado.pos + 1 === total ? "Ver resultado" : "Siguiente pregunta →") + "</button></div>"
          : "");
      renderMath(cont);

      if (elegida == null) {
        $$(".opcion", cont).forEach(function (b) {
          b.addEventListener("click", function () {
            var k = +b.dataset.k;
            estado.respuestas[qi] = k;
            if (k === p.ok) estado.aciertos++;
            guardar(LS.quiz, estado, PROG);
            pintar();
          });
        });
      } else {
        var sig = $("#quiz-sig", cont);
        if (sig) sig.addEventListener("click", function () { estado.pos++; guardar(LS.quiz, estado, PROG); pintar(); });
      }
    }

    function fin() {
      var total = estado.orden.length;
      var pct = total ? Math.round(estado.aciertos / total * 100) : 0;
      var malas = estado.orden.filter(function (qi) { return estado.respuestas[qi] !== PREG[qi].ok; });
      cont.innerHTML =
        '<div class="quiz-fin"><div class="nota">' + pct + "%</div>" +
        "<p><strong>" + estado.aciertos + " de " + total + " correctas</strong>" +
        (pct >= 80 ? " · ¡Estás listo para el examen!" : pct >= 60 ? " · Buen trabajo, repasá los temas marcados." : " · Volvé sobre la teoría de los temas fallados.") + "</p></div>" +
        (malas.length
          ? '<details open><summary>Repasar las ' + malas.length + " preguntas falladas</summary><div class='details-cuerpo'>" +
            malas.map(function (qi, n) {
              var p = PREG[qi];
              return "<p><strong>" + (n + 1) + ". " + p.p + "</strong><br><span style='color:var(--ac)'>✓ " +
                p.ops[p.ok] + "</span><br><span style='color:var(--txt2)'>" + p.exp + "</span></p>";
            }).join("") + "</div></details>"
          : "") +
        '<div class="quiz-pie" style="justify-content:center"><button class="btn btn-primario" id="quiz-otra">Volver a empezar</button></div>';
      renderMath(cont);
      $("#quiz-otra", cont).addEventListener("click", function () { nueva(true); });
    }

    chips.addEventListener("click", function (e) {
      var b = e.target.closest(".chip");
      if (!b) return;
      temaSel = b.dataset.tema;
      guardar(LS.quizTema, temaSel, PROG);
      $$(".chip", chips).forEach(function (x) { x.classList.toggle("activo", x === b); });
      nueva(true);
    });

    if (!estado.orden.length) nueva(true); else pintar();
  };

  /* ---------- preguntas de desarrollo ---------- */
  hooks.desarrollo = function (raiz) {
    var cont = $("#desarrollo-lista", raiz);
    if (!cont) return;
    cont.innerHTML = DESA.map(function (d, i) {
      return "<details><summary>" + (i + 1) + ". " + d.p + "</summary><div class='details-cuerpo'>" + d.r + "</div></details>";
    }).join("");
    renderMath(cont);
  };

  /* ---------- arranque ---------- */
  construirNav();
  construirIndice();
  marcarVistos();
  var r = ruta();
  render(r.id, r.sub);
})();
