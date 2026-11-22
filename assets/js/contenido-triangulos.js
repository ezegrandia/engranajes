/* =========================================================================
   CONTENIDO · 6. CHULETAS — triángulos de despeje
   Cada tarjeta es un "triángulo mágico": arriba el que queda solo, abajo los
   dos factores. Se arma desde un array para no repetir el SVG 40 veces.
   OJO: las celdas y los despejes van con String.raw (T`...`); si se escriben
   como strings comunes, JavaScript se come las barras de \cos, \pi, \le, etc.
   ========================================================================= */
window.CAPITULOS = window.CAPITULOS || [];

(function () {
  "use strict";

  var T = String.raw;

  /* ---------- glosario de variables: [símbolo, qué es, unidad] ---------- */
  var VARS = {
    Dp:    ["<i>D</i><sub>p</sub>", "diámetro primitivo", "mm"],
    Dpm:   ["<i>D</i><sub>p</sub>", "diámetro primitivo en metros", "m"],
    Dppulg:["<i>D</i><sub>p</sub>", "diámetro primitivo en pulgadas", "pulg"],
    Dp1:   ["<i>D</i><sub>p1</sub>", "diámetro primitivo del piñón", "mm"],
    Dp2:   ["<i>D</i><sub>p2</sub>", "diámetro primitivo de la rueda", "mm"],
    Db:    ["<i>D</i><sub>b</sub>", "diámetro de base", "mm"],
    C:     ["<i>C</i>", "distancia entre centros", "mm"],
    m:     ["<i>m</i>", "módulo", "mm"],
    mt:    ["<i>m</i><sub>t</sub>", "módulo transversal", "mm"],
    mn:    ["<i>m</i><sub>n</sub>", "módulo normal", "mm"],
    z:     ["<i>z</i>", "número de dientes", "—"],
    z1:    ["<i>z</i><sub>1</sub>", "dientes del piñón (o nº de entradas)", "—"],
    z2:    ["<i>z</i><sub>2</sub>", "dientes de la rueda / de la corona", "—"],
    zsum:  ["<i>z</i><sub>1</sub>+<i>z</i><sub>2</sub>", "suma de dientes del par", "—"],
    zcCond:["<i>z</i><sub>c</sub>", "productoria ∏ de los dientes conducidos", "—"],
    zm:    ["<i>z</i><sub>m</sub>", "productoria ∏ de los dientes motrices", "—"],
    zcCor: ["<i>z</i><sub>c</sub>", "dientes de la corona", "—"],
    zs:    ["<i>z</i><sub>s</sub>", "dientes del solar", "—"],
    pc:    ["<i>p</i><sub>c</sub>", "paso circular", "mm"],
    pb:    ["<i>p</i><sub>b</sub>", "paso de base", "mm"],
    px:    ["<i>p</i><sub>x</sub>", "paso axial del tornillo", "mm"],
    Pd:    ["<i>P</i><sub>d</sub>", "paso diametral", "1/pulg"],
    F:     ["<i>F</i>", "ancho de cara del diente", "mm"],
    hc:    ["<i>h</i><sub>c</sub>", "huelgo circular (juego)", "mm"],
    t:     ["<i>t</i>", "espesor del diente (arco)", "mm"],
    phi:   ["<i>φ</i>", "ángulo de presión", "°"],
    psi:   ["<i>ψ</i>", "ángulo de hélice", "°"],
    gam:   ["<i>γ</i>", "ángulo primitivo del cono", "°"],
    eta:   ["<i>η</i>", "rendimiento", "—"],
    i:     ["<i>i</i>", "relación de transmisión", "—"],
    n:     ["<i>n</i>", "velocidad de giro", "rpm"],
    n1:    ["<i>n</i><sub>1</sub>", "velocidad del eje 1", "rpm"],
    n2:    ["<i>n</i><sub>2</sub>", "velocidad del eje 2", "rpm"],
    ne:    ["<i>n</i><sub>e</sub>", "velocidad de entrada", "rpm"],
    ns:    ["<i>n</i><sub>s</sub>", "velocidad de salida", "rpm"],
    nsol:  ["<i>n</i><sub>solar</sub>", "velocidad del solar", "rpm"],
    nps:   ["<i>n</i><sub>ps</sub>", "velocidad del brazo portasatélites", "rpm"],
    w:     ["<i>ω</i>", "velocidad angular", "rad/s"],
    v:     ["<i>V</i>", "velocidad tangencial", "m/s"],
    vac:   ["<i>v</i>", "vacío del diente", "mm"],
    r:     ["<i>r</i>", "radio primitivo (D<sub>p</sub>/2), en metros", "m"],
    H:     ["<i>H</i>", "potencia", "W"],
    T:     ["<i>T</i>", "par (torque)", "N·m"],
    Te:    ["<i>T</i><sub>e</sub>", "par de entrada", "N·m"],
    Ts:    ["<i>T</i><sub>s</sub>", "par de salida", "N·m"],
    Ps:    ["<i>P</i><sub>s</sub>", "potencia de salida", "W"],
    Pe:    ["<i>P</i><sub>e</sub>", "potencia de entrada", "W"],
    HP:    ["<i>HP</i>", "potencia en HP", "HP"],
    Wpot:  ["<i>W</i>", "potencia en watt", "W"],
    Wt:    ["<i>W</i><sub>t</sub>", "fuerza tangencial", "N"],
    Wr:    ["<i>W</i><sub>r</sub>", "fuerza radial", "N"],
    Wa:    ["<i>W</i><sub>a</sub>", "fuerza axial", "N"],
    Wn:    ["<i>W</i>", "fuerza normal sobre el diente", "N"],
    Kv:    ["<i>K</i><sub>v</sub>", "factor dinámico", "—"],
    sig:   ["<i>σ</i>", "tensión de flexión (Lewis)", "MPa"],
    St:    ["<i>S</i><sub>t</sub>", "resistencia a la fatiga del material", "MPa"],
    HB:    ["<i>H</i><sub>B</sub>", "dureza Brinell del material", "HB"],
    fseg:  ["<i>f</i><sub>seg</sub>", "factor de seguridad", "—"],
    Y:     ["<i>Y</i>", "factor de forma de Lewis", "—"],
    Lab:   ["<i>L</i><sub>ab</sub>", "longitud de la línea de acción", "mm"],
    mc:    ["<i>m</i><sub>c</sub>", "relación de contacto", "—"],
    L:     ["<i>L</i>", "avance del tornillo sin fin", "mm"],
    Ao:    ["<i>A</i><sub>o</sub>", "distancia exterior del cono", "mm"],
    de:    ["<i>d</i><sub>e</sub>", "diámetro exterior (de cabeza)", "mm"],
    di:    ["<i>d</i><sub>i</sub>", "diámetro interior (de raíz)", "mm"],
    ht:    ["<i>h</i><sub>t</sub>", "altura total del diente", "mm"],
    ad:    ["<i>a</i>", "addendo (cabeza del diente)", "mm"],
    ba:    ["<i>b</i>", "dedendo (raíz del diente)", "mm"]
  };

  /* ---------- variables de cada tarjeta y si va con estrella ---------- */
  var INFO = {
    "Módulo": { v: ["Dp", "m", "z"], star: 1 },
    "Paso circular": { v: ["pc", "m"] },
    "Paso de base": { v: ["pb", "pc", "phi"] },
    "Diámetro de base": { v: ["Db", "Dp", "phi"] },
    "Huelgo (cátedra)": { v: ["pc", "hc"] },
    "Ancho de cara (Fanchon)": { v: ["F", "m"], star: 1 },
    "Paso diametral": { v: ["z", "Pd", "Dppulg"] },
    "Pulgada ↔ módulo": { v: ["Pd", "m"] },
    "Relación por dientes": { v: ["z2", "z1", "i"], star: 1 },
    "Relación por velocidades": { v: ["n1", "n2", "i"], star: 1 },
    "Relación por diámetros": { v: ["Dp2", "Dp1", "i"] },
    "Distancia entre centros": { v: ["C", "m", "zsum"] },
    "rpm → rad/s": { v: ["w", "n"], star: 1 },
    "Velocidad tangencial": { v: ["v", "w", "r"] },
    "Potencia y par": { v: ["H", "T", "w"], star: 1 },
    "Potencia y fuerza": { v: ["H", "Wt", "v"], star: 1 },
    "Par y fuerza": { v: ["T", "Wt", "r"] },
    "Par y diámetro": { v: ["T", "Wt", "Dpm"], star: 1 },
    "Rendimiento": { v: ["Ps", "Pe", "eta"] },
    "HP → watt": { v: ["Wpot", "HP"], star: 1 },
    "Fuerza radial": { v: ["Wr", "Wt", "phi"] },
    "Fuerza normal (W total)": { v: ["Wt", "Wn", "phi"] },
    "Factor de seguridad": { v: ["St", "fseg", "sig"], star: 1 },
    "Lewis: tensión": { v: ["Kv", "Wt", "sig", "F", "m", "Y"], star: 1 },
    "Lewis: despejar F": { v: ["Kv", "Wt", "F", "sig", "m", "Y"] },
    "Relación de contacto": { v: ["Lab", "mc", "pb"] },
    "Tren: velocidades": { v: ["ne", "ns", "i"], star: 1 },
    "Tren: dientes": { v: ["zcCond", "zm", "i"], star: 1 },
    "Par de salida": { v: ["Ts", "Te", "i"], star: 1 },
    "Sin fin: relación": { v: ["z2", "z1", "i"], star: 1 },
    "Sin fin: avance": { v: ["L", "px", "z1"] },
    "Sin fin: paso axial": { v: ["px", "mn"] },
    "Planetario: brazo": { v: ["nps", "nsol", "zs", "zcCor"] },
    "Planetario: i con corona fija": { v: ["zcCor", "zs", "i"] },
    "Helicoidal: módulo normal": { v: ["mn", "mt", "psi"], star: 1 },
    "Helicoidal: fuerza axial": { v: ["Wa", "Wt", "psi"] },
    "Cónico: ángulo primitivo": { v: ["z1", "z2", "gam"] },
    "Cónico: cono exterior": { v: ["Dp", "Ao", "gam"] },
    "Tapás el de arriba": { v: ["Dp", "m", "z"] },
    "Tapás el de la izquierda": { v: ["Dp", "m", "z"] },
    "Tapás el de la derecha": { v: ["Dp", "m", "z"] },
    "Diámetro exterior": { v: ["de", "Dp", "ad"] },
    "Diámetro interior": { v: ["Dp", "di", "ba"] },
    "Altura total": { v: ["ht", "ad", "ba"] },
    "Centros con diámetros": { v: ["C", "Dp1", "Dp2"] }
  };

  /* ---------- piezas de una tarjeta ---------- */
  function tri(arriba, izq, der, tapado) {
    function celda(k, txt) {
      var tap = tapado === k;
      return '<span class="tri-' + k + (tap ? " tapado" : "") + '">' +
        (tap ? "?" : "$" + txt + "$") + "</span>";
    }
    return '<div class="tri">' +
      '<svg viewBox="0 0 200 168" aria-hidden="true">' +
      '<path d="M100 7 L5 161 L195 161 Z"/>' +
      '<path d="M46 95 H154"/><path d="M100 95 V161"/>' +
      "</svg>" +
      celda("t", arriba) + celda("l", izq) + celda("r", der) +
      "</div>";
  }

  function leyenda(titulo) {
    var info = INFO[titulo];
    if (!info || !info.v || !info.v.length) return "";
    return '<div class="tri-vars">' + info.v.map(function (id) {
      var v = VARS[id];
      if (!v) { console.warn("tri: falta la variable " + id); return ""; }
      return '<div><span class="v-s">' + v[0] + "</span> " + v[1] + ' <b>[' + v[2] + "]</b></div>";
    }).join("") + "</div>";
  }

  function estrella(titulo) {
    var info = INFO[titulo];
    return info && info.star
      ? '<span class="star" title="de los que más se usan en el examen">★</span>'
      : "";
  }

  function tarjeta(titulo, arriba, izq, der, despejes, nota) {
    return '<div class="tri-card" data-vars="' + datosVars(titulo) + '">' +
      "<h4>" + estrella(titulo) + titulo + "</h4>" +
      tri(arriba, izq, der) +
      '<div class="tri-des">' +
      despejes.map(function (d) { return "<span>$" + d + "$</span>"; }).join("") +
      "</div>" +
      (nota ? '<p class="tri-nota">' + nota + "</p>" : "") +
      leyenda(titulo) +
      (EJEMPLOS[titulo] ? '<button type="button" class="tri-ej" data-ej="' + titulo + '">Ver ejemplo →</button>' : "") +
      "</div>";
  }

  function tarjetaTap(titulo, arriba, izq, der, tapado, texto) {
    return '<div class="tri-card">' +
      "<h4>" + estrella(titulo) + titulo + "</h4>" +
      tri(arriba, izq, der, tapado) +
      '<p class="tri-nota">' + texto + "</p>" +
      leyenda(titulo) +
      "</div>";
  }

  /* ---------- triángulo de suma (+ o − en la raya) ---------- */
  function triSuma(arriba, izq, der, signo) {
    return '<div class="tri tri-suma">' +
      '<svg viewBox="0 0 200 168" aria-hidden="true">' +
      '<path d="M100 7 L5 161 L195 161 Z"/>' +
      '<path d="M46 95 H86"/><path d="M114 95 H154"/><path d="M100 107 V161"/>' +
      "</svg>" +
      '<span class="tri-t">$' + arriba + "$</span>" +
      '<span class="tri-l">$' + izq + "$</span>" +
      '<span class="tri-r">$' + der + "$</span>" +
      '<span class="tri-signo">' + signo + "</span>" +
      "</div>";
  }

  function clave(h) { return h.replace(/<[^>]+>/g, ""); }

  function datosVars(titulo) {
    var info = INFO[titulo] || {}, ks = [];
    (info.v || []).forEach(function (id) {
      var v = VARS[id];
      if (!v) return;
      var k = clave(v[0]);
      if (ks.indexOf(k) < 0) ks.push(k);
    });
    return ks.join(" ");
  }

  function tarjetaSuma(titulo, arriba, izq, der, signo, despejes, nota) {
    return '<div class="tri-card suma" data-cat="5" data-vars="' + datosVars(titulo) + '">' +
      '<h4><span class="tag-suma">suma</span>' + titulo + "</h4>" +
      triSuma(arriba, izq, der, signo) +
      '<div class="tri-des">' +
      despejes.map(function (d) { return "<span>$" + d + "$</span>"; }).join("") +
      "</div>" +
      (nota ? '<p class="tri-nota">' + nota + "</p>" : "") +
      leyenda(titulo) +
      "</div>";
  }

  var SUMAS = [
    ["Diámetro exterior", T`d_e`, T`d_p`, T`2a`, "+",
      [T`d_e = d_p + 2a`, T`d_p = d_e - 2a`, T`2a = d_e - d_p`],
      T`Con $a = m$: $d_e = d_p + 2m = m\,(z+2)$, y esa sí es un triángulo de producto.`],

    ["Diámetro interior", T`d_p`, T`d_i`, T`2b`, "−",
      [T`d_p = d_i + 2b`, T`d_i = d_p - 2b`, T`2b = d_p - d_i`],
      T`Acá el de arriba es el <strong>mayor</strong>: $d_p$ menos cualquiera de los dos de abajo da el otro.`],

    ["Altura total", T`h_t`, T`a`, T`b`, "+",
      [T`h_t = a + b`, T`a = h_t - b`, T`b = h_t - a`],
      T`Con $a = m$ y $b = 1{,}25m$: $h_t = 2{,}25m$.`],

    ["Centros con diámetros", T`2C`, T`D_{p1}`, T`D_{p2}`, "+",
      [T`2C = D_{p1} + D_{p2}`, T`C = \dfrac{D_{p1} + D_{p2}}{2}`, T`D_{p2} = 2C - D_{p1}`],
      T`También $C = r_1 + r_2$, la suma de los dos radios primitivos.`]
  ];

  function seccionSumas() {
    return '<section class="tri-sec tri-sumas" data-cat="5">' +
      '<h2>Triángulos de suma (solo para acomodar)</h2>' +
      '<details class="tri-aux tri-aux-mini">' +
      '<summary>Por qué estos no despejan<span class="no-print"> — tocá para abrir</span></summary>' +
      '<div class="details-cuerpo"><div class="caja ojo"><p class="caja-tit">Estos NO sirven como despeje</p>' +
      '<p>En los de <strong>producto</strong> tapás una celda y sale multiplicar o dividir. Acá no: el signo <strong>+</strong> o <strong>−</strong> de la raya solo te dice <strong>cómo está armada la fórmula base</strong>. No son un método de despeje: si necesitás despejar, pasás el término <strong>sumando o restando a mano</strong>.</p>' +
      '<p>Con <strong>+</strong>: el de arriba es la <strong>suma</strong> de los dos de abajo. Con <strong>−</strong>: el de arriba es el <strong>mayor</strong>, y restándole cualquiera de los dos de abajo queda el otro.</p>' +
      '<p class="aviso">Van en azul y con el signo en la raya justamente para que no los mezcles con los de producto.</p></div></div>' +
      '</details>' +
      '<div class="tris">' + SUMAS.map(function (c) { return tarjetaSuma.apply(null, c); }).join("") + "</div>" +
      "</section>";
  }

  /* ---------- las fórmulas que NO son triángulo (con el despeje hecho) ---------- */
  function clavesDe(ids) {
    return ids.split(/\s+/).map(function (id) {
      var v = VARS[id];
      return v ? clave(v[0]) : "";
    }).filter(Boolean).join(" ");
  }

  function seccionNoTri() {
    var html = '<details class="tri-aux" id="tri-notri">' +
      '<summary><span class="notri-tit">Las que no son triángulo, con el despeje hecho</span><span class="no-print"> — tocá para abrir</span></summary>' +
      '<div class="details-cuerpo">' +
      String.raw`
<div class="caja idea">
<p class="caja-tit">Cuándo venís acá</p>
<p>Si la fórmula tiene una <strong>suma o resta</strong>, una <strong>raíz</strong>, una <strong>potencia</strong> o <strong>más de tres letras</strong>, no hay triángulo que la resuelva: está acá, ya despejada. Todo lo que es solo producto y cociente vive en los 42 triángulos de arriba.</p>
<p class="aviso">No hace falta memorizar estas: alcanza con saber que existen y dónde están. Y el <strong>filtro de arriba también trabaja acá</strong>: si tocás una variable, este bloque se abre solo con las fórmulas que la usan.</p>
</div>

<h3>1 · Cálculo mecánico (Lewis y dimensionado)</h3>

<div class="mini" data-ids="Kv v">
<h4>Factor dinámico K<sub>v</sub> — la fila va según el tallado</h4>
<div class="tabla-wrap">
<table class="tec compacta">
<thead><tr><th>Tallado</th><th>Sistema m</th><th>Sistema P<sub>d</sub></th></tr></thead>
<tbody>
<tr><td>Hierro fundido, moldeado</td><td><span>$\dfrac{3{,}05+V}{3{,}05}$</span></td><td><span>$\dfrac{600+V}{600}$</span></td></tr>
<tr><td>Cortado o fresado</td><td><span>$\dfrac{6{,}1+V}{6{,}1}$</span></td><td><span>$\dfrac{1200+V}{1200}$</span></td></tr>
<tr><td>Fresa madre / cepillado</td><td><span>$\dfrac{3{,}56+\sqrt{V}}{3{,}56}$</span></td><td><span>$\dfrac{50+\sqrt{V}}{50}$</span></td></tr>
<tr><td>Rectificado</td><td><span>$\sqrt{\dfrac{5{,}56+\sqrt{V}}{5{,}56}}$</span></td><td><span>$\sqrt{\dfrac{78+\sqrt{V}}{78}}$</span></td></tr>
</tbody>
</table>
</div>
<p>Con <strong>V en m/s</strong>. La columna de la derecha se usa solo si el enunciado viene en paso diametral.</p>
</div>

<div class="grid2">

<div class="mini" data-ids="v">
<h4>Velocidad para K<sub>v</sub></h4>
<div class="f">$$V = \frac{\pi\,D_p\,n}{60\,000} = \omega\,r$$</div>
<p>D<sub>p</sub> en mm, n en rpm, r en <strong>metros</strong>. Es la misma que el triángulo $V=\omega r$, pero directa desde D<sub>p</sub> y n.</p>
</div>

<div class="mini" data-ids="m H Kv w z1 Y F St">
<h4>Módulo por raíz cúbica</h4>
<div class="f">$$m = \sqrt[3]{\frac{2000\,H\,K_v}{\omega\,z_1\,k\,Y\,S_{adm}}}$$</div>
<div class="f">$$H = \frac{\omega\,z_1\,k\,Y\,S_{adm}\,m^3}{2000\,K_v}$$</div>
<div class="f">$$S_{adm} = \frac{2000\,H\,K_v}{\omega\,z_1\,k\,Y\,m^3}$$</div>
<p>Con $k = F/m \approx 9{,}5$.</p>
</div>

<div class="mini" data-ids="z phi">
<h4>Dientes mínimo (interferencia)</h4>
<div class="f">$$z_{mín} = \frac{2}{\operatorname{sen}^2\varphi}$$</div>
<p>Con φ = 20°: <strong>z<sub>mín</sub> = 17</strong> (15 con corrección). Si z &lt; z<sub>mín</sub>, el diente sale con interferencia.</p>
</div>

<div class="mini" data-ids="t vac pc hc">
<h4>Espesor del diente y vacío</h4>
<div class="f">$$t = \frac{p_c - h_c}{2} \qquad v = p_c - t$$</div>
<p>Se cumple <span>$t + v = p_c$</span>. Si el enunciado da el juego lateral, sale de acá: es una resta, no hay triángulo.</p>
<p class="aviso">Esta <strong>v es minúscula</strong> (vacío, en mm): no es la <strong>V</strong> de velocidad tangencial (m/s).</p>
</div>

<div class="mini" data-ids="m ht">
<h4>Diente recortado (20° corto)</h4>
<div class="f">$$a = 0{,}8\,m \qquad b = m \qquad h_t = 1{,}8\,m$$</div>
<p>Con eso quedan <span>$d_e = D_p + 1{,}6m$</span> y <span>$d_i = D_p - 2m$</span>. El diente normal es $a=m$, $b=1{,}25m$, $h_t=2{,}25m$.</p>
</div>

<div class="mini" data-ids="St HB">
<h4>Tensión admisible S<sub>t</sub></h4>
<div class="tabla-wrap">
<table class="tec compacta">
<thead><tr><th>Material / grado</th><th>S<sub>t</sub> [MPa]</th></tr></thead>
<tbody>
<tr><td>Acero endurecido g1</td><td><span>$0{,}533\,H_B + 88{,}3$</span></td></tr>
<tr><td>Acero endurecido g2</td><td><span>$0{,}703\,H_B + 113$</span></td></tr>
<tr><td>4140 nitrurado g1</td><td><span>$0{,}568\,H_B + 83{,}8$</span></td></tr>
<tr><td>4140 nitrurado g2</td><td><span>$0{,}749\,H_B + 110$</span></td></tr>
</tbody>
</table>
</div>
<p>Si te dan S<sub>t</sub> y piden la dureza: <span>$H_B = \dfrac{S_t - 110}{0{,}749}$</span> (4140 g2).</p>
</div>

<div class="mini" data-ids="Lab de Db C phi">
<h4>Línea de acción y relación de contacto</h4>
<div class="f">$$L_{ab} = \sqrt{R_{e1}^2-R_{b1}^2}+\sqrt{R_{e2}^2-R_{b2}^2}-C\operatorname{sen}\varphi$$</div>
<p>Después <span>$m_c = \dfrac{L_{ab}}{p_b}$</span> (eso sí es triángulo). Se pide $m_c \ge 1{,}2$.</p>
</div>

</div>

<h3>2 · Trenes, planetarios y reductores</h3>
<div class="grid2">

<div class="mini" data-ids="m zsum">
<h4>Tren coaxial (dos etapas)</h4>
<div class="f">$$m_A(z_1+z_2) = m_B(z_3+z_4)$$</div>
<p>Los dos pares comparten eje: la suma de radios tiene que dar igual. De acá sale el módulo o el diente que falte.</p>
</div>

<div class="mini" data-ids="ne ns nps i">
<h4>Willis (planetario)</h4>
<div class="f">$$\frac{n_e-n_{ps}}{n_s-n_{ps}} = i_0 = \pm\frac{\prod z_c}{\prod z_m}$$</div>
<p>Se resuelve con el <strong>método tabular</strong> de 3 filas. i<sub>0</sub> es con el brazo fijo.</p>
</div>

<div class="mini" data-ids="nps nsol">
<h4>Los tres casos de Willis</h4>
<p><strong>Corona fija</strong></p>
<div class="f">$$n_{ps} = n_{solar}\,\frac{z_s}{z_s+z_c}$$</div>
<p><strong>Solar fijo</strong></p>
<div class="f">$$n_{ps} = n_{corona}\,\frac{z_c}{z_s+z_c}$$</div>
<p><strong>Brazo fijo</strong></p>
<div class="f">$$\frac{n_{solar}}{n_{corona}} = -\frac{z_c}{z_s}$$</div>
</div>

<div class="mini" data-ids="zs zcCor">
<h4>Corona del planetario</h4>
<div class="f">$$z_c = z_s + 2\,z_{sat}$$</div>
<p>Con doble satélite en serie: <span>$z_c = z_s + 2(z_3+z_4)$</span>. Es la verificación del dibujo.</p>
</div>

<div class="mini" data-ids="Ts Te i eta">
<h4>Par y potencia con rendimiento</h4>
<div class="f">$$T_s = T_e\,i\,\eta \qquad H_s = H_e\,\eta$$</div>
<p>Con n etapas: η<sup>n</sup> (una por par). El rendimiento <strong>no</strong> cambia la velocidad, solo el par y la potencia.</p>
</div>

<div class="mini" data-ids="i">
<h4>Relación total del reductor</h4>
<div class="f">$$i_{total} = i_1\cdot i_2\cdots i_n$$</div>
<p>En un tren simple la rueda loca no cambia i (solo el sentido). El sentido se cuenta aparte: una inversión por par exterior.</p>
</div>

</div>

<h3>3 · Cónicos</h3>
<div class="grid2">

<div class="mini" data-ids="gam">
<h4>Ángulo del otro cono</h4>
<div class="f">$$\Gamma = \Sigma - \gamma$$</div>
<p>Con ejes a 90°: <strong>Γ = 90° − γ</strong>. γ sale de $\tan\gamma = z_1/z_2$ (triángulo).</p>
</div>

<div class="mini" data-ids="Dp F gam">
<h4>Radios de base y medio</h4>
<div class="f">$$r_b = \frac{D_p}{2\cos\gamma} \qquad r_m = r-\frac{F}{2}\operatorname{sen}\gamma$$</div>
<p>r<sub>b</sub> para la línea de acción; r<sub>m</sub> para las fuerzas en el diente medio.</p>
</div>

<div class="mini" data-ids="F Ao">
<h4>Ancho de cara máximo</h4>
<div class="f">$$F \le \frac{A_o}{3}$$</div>
<p>A<sub>o</sub> es la distancia exterior del cono (triángulo). Si F no cumple, achicá F.</p>
</div>

<div class="mini" data-ids="Wr Wa Wt phi gam">
<h4>Fuerzas en el cónico</h4>
<div class="f">$$W_r = W_t\tan\varphi\cos\gamma$$</div>
<div class="f">$$W_a = W_t\tan\varphi\operatorname{sen}\gamma$$</div>
<p>W<sub>t</sub> sale del par; estas dos se suman aparte, no son triángulo.</p>
</div>

</div>

<h3>4 · Tornillo sin fin</h3>
<div class="grid2">

<div class="mini" data-ids="px z1 Dp1">
<h4>Ángulo de hélice</h4>
<div class="f">$$\beta = \arctan\frac{\pi\,D_{p1}}{p_x\,z_1} \qquad \lambda = 90^\circ-\beta$$</div>
<p>D<sub>p1</sub> del tornillo, p<sub>x</sub> paso axial y z<sub>1</sub> entradas.</p>
</div>

<div class="mini" data-ids="Dp2 z2">
<h4>Diámetro de la corona</h4>
<div class="f">$$D_{p2} = \frac{p}{\pi}\,z_2$$</div>
<p>p = paso circular de la corona. Con $p = \pi m_n$ queda $D_{p2} = m_n\,z_2$.</p>
</div>

<div class="mini" data-ids="eta phi">
<h4>Rendimiento del sin fin</h4>
<div class="f">$$\eta = \frac{\cos\varphi_n-\mu\tan\lambda}{\cos\varphi_n+\mu\cot\lambda}$$</div>
<p>μ = coeficiente de roce (0,05–0,1). Típico 60–80 %. No es triángulo: se calcula completo.</p>
</div>

</div>

<h3>5 · Helicoidales</h3>
<div class="grid2">

<div class="mini" data-ids="C mn zsum psi">
<h4>Distancia entre centros</h4>
<div class="f">$$C = \frac{m_n(z_1+z_2)}{2\cos\psi}$$</div>
<p>Con ψ = 0 volvés al caso recto.</p>
</div>

<div class="mini" data-ids="phi psi">
<h4>Ángulo de presión transversal</h4>
<div class="f">$$\tan\varphi_t = \frac{\tan\varphi_n}{\cos\psi}$$</div>
<p>El normal es el de la fresa (20°); el transversal es el que se ve en el plano de giro.</p>
</div>

<div class="mini" data-ids="mc F psi">
<h4>Relación de contacto helicoidal</h4>
<div class="f">$$m_{hel} = m_c + \frac{F\tan\psi}{p_t}$$</div>
<p>Al contacto del plano transversal se le suma el axial. F es el ancho de cara, ψ la hélice y $p_t$ el paso transversal ($p_t = \pi m_t$).</p>
</div>

</div>

<h3>6 · Fuerzas: las cuatro W</h3>
<div class="grid2">

<div class="mini" data-ids="Wn Wt Wr phi">
<h4>Fuerza resultante total W</h4>
<div class="f">$$W = \frac{W_t}{\cos\varphi} = \sqrt{W_t^2+W_r^2}$$</div>
<p>Es la que el práctico pide como <strong>«fuerza resultante total»</strong> (por ejemplo 25 067 N). Sale del triángulo $W_t = W\cos\varphi$ o directo por Pitágoras.</p>
</div>

<div class="mini" data-ids="Wa Wt Wr phi psi">
<h4>Las cuatro fuerzas, de un vistazo</h4>
<div class="tabla-wrap">
<table class="tec compacta">
<thead><tr><th>Fuerza</th><th>Qué es</th><th>Fórmula</th></tr></thead>
<tbody>
<tr><td>$W_t$</td><td>tangencial: la que hace el par</td><td><span>$2T/D_p$</span></td></tr>
<tr><td>$W_r$</td><td>radial: separa los ejes</td><td><span>$W_t\tan\varphi$</span></td></tr>
<tr><td>$W_a$</td><td>axial: empuja el árbol por el eje</td><td><span>$W_t\tan\psi$</span></td></tr>
<tr><td><strong>$W$</strong></td><td><strong>resultante total</strong> (normal al flanco)</td><td><span>$W_t/\cos\varphi$</span></td></tr>
</tbody>
</table>
</div>
<p class="aviso">$W$ no es $W_a$: la total es la suma vectorial de $W_t$ y $W_r$; la axial solo aparece si el diente está inclinado (helicoidal, cónico, sin fin).</p>
</div>

</div>

<div class="caja dato">
<p class="caja-tit">Cómo saber al instante si hace falta este bloque</p>
<p><strong>Producto o cociente → triángulo.</strong> <strong>Suma, raíz, potencia o más de tres letras → este bloque.</strong> Si te aparece una que no está ni acá, es porque se arma con dos triángulos seguidos: buscá una intermedia y volvé.</p>
</div>
` +
      "</div></details>";
    /* data-ids="m H" → data-vars con los símbolos del filtro */
    return html.replace(/data-ids="([^"]*)"/g, function (todo, ids) {
      return 'data-vars="' + clavesDe(ids) + '"';
    });
  }


  /* ---------- ficha de cada variable: qué es, para qué sirve, dónde vale ---------- */
  var INFO_VAR = {
    "m": { q: "Módulo: el tamaño del diente. Sale de dividir el diámetro primitivo por la cantidad de dientes (m = Dp/z) y es el dato que se normaliza.",
      u: "Con m salen z, Dp, de, di, ht, pc, F y la distancia entre centros: es la puerta de entrada a toda la geometría y a la tabla de módulos.",
      t: "Dentado recto. En helicoidales manda el módulo normal mn; en cónicos, el del extremo exterior; en el sin fin, el módulo del tornillo.",
      o: "Nunca adoptes el m calculado: redondeá al normalizado (2 · 2,5 · 3 · 4 · 5 · 6 · 8 · 10 …)." },
    "mt": { q: "Módulo transversal: el que se mide en el plano perpendicular al eje. Es el módulo aparente del helicoidal: mt = mn/cos ψ.",
      u: "Con mt calculás el diámetro primitivo (Dp = mt·z), la distancia entre centros y el paso transversal.",
      t: "Sólo engranajes helicoidales (y bihelicoidales).",
      o: "Siempre mt > mn. Si ψ = 0 volvés al caso recto." },
    "mn": { q: "Módulo normal: el que se mide en el plano normal al diente, o sea el módulo real de la fresa. Es el que se normaliza en helicoidales.",
      u: "De mn salen mt, Dp, C y el ancho de cara. Lewis helicoidal usa mn, no mt.",
      t: "Helicoidales. También es el módulo del tornillo en el sin fin.",
      o: "No lo confundas con mt: mn es el de la norma." },
    "z": { q: "Número de dientes de una rueda.",
      u: "Entra en z = Dp/m, en la relación i = z2/z1 y en casi todo: define el factor de forma Y, el diámetro y la relación de contacto.",
      t: "Todos.",
      o: "Mínimo 17 dientes con φ = 20° para no tener interferencia (15 con corrección)." },
    "z1": { q: "Dientes del piñón (la rueda chica). En el sin fin, es el número de entradas del tornillo.",
      u: "Es el denominador de la relación: i = z2/z1.",
      t: "Todos.",
      o: "En el sin fin, z1 = 1, 2, 3 o 4 entradas, no dientes." },
    "z2": { q: "Dientes de la rueda (la grande), o de la corona en el sin fin.",
      u: "Es el numerador de la relación: i = z2/z1.",
      t: "Todos.",
      o: "En un planetario, z2 puede ser el solar o la corona según el dibujo: mirá el esquema." },
    "zc": { q: "Dos usos: la productoria ∏ de los dientes de todas las ruedas conducidas de un tren, o los dientes de la corona en un planetario.",
      u: "En el tren es el numerador de i = ∏zc/∏zm; en el planetario entra en zc = zs + 2·zsat y en Willis.",
      t: "Trenes compuestos y planetarios.",
      o: "El mismo subíndice se usa para las dos cosas: fijate la tarjeta." },
    "zm": { q: "Productoria ∏ de los dientes de las ruedas motrices de un tren.",
      u: "Denominador de i = ∏zc/∏zm.",
      t: "Trenes simples y compuestos.",
      o: "Contá sólo las ruedas que transmiten: las solidarias cuentan una vez por par." },
    "zs": { q: "Dientes del solar, la rueda central del planetario.",
      u: "Con zs y zc sale la relación del planetario (i = 1 + zc/zs con corona fija) y la velocidad del brazo.",
      t: "Planetarios.",
      o: "Verificá siempre zc = zs + 2·zsat." },
    "z1+z2": { q: "Suma de los dientes del par: es lo que fija la distancia entre centros.",
      u: "C = m(z1+z2)/2. En un tren coaxial, las dos sumas tienen que ser iguales.",
      t: "Pares de ejes paralelos.",
      o: "Coaxial: mA(z1+z2) = mB(z3+z4), con módulos distintos en cada etapa." },
    "Dp": { q: "Diámetro primitivo: el de la circunferencia de paso, donde el diente rueda sin deslizar.",
      u: "Con Dp salen m (Dp/z), C, la velocidad (V = πDp n/60000) y la fuerza (Wt = 2T/Dp).",
      t: "Todos.",
      o: "En paso diametral va en pulgadas y en par y diámetro en metros: fijate la tarjeta." },
    "Dp1": { q: "Diámetro primitivo del piñón.",
      u: "Referencia para i = Dp2/Dp1 y para la distancia entre centros.",
      t: "Pares y trenes.",
      o: "Si cada etapa tiene distinto módulo, compará sólo dentro del mismo par." },
    "Dp2": { q: "Diámetro primitivo de la rueda.",
      u: "Con i = Dp2/Dp1 y C = (Dp1+Dp2)/2.",
      t: "Pares y trenes.",
      o: "" },
    "Db": { q: "Diámetro de base: el de la circunferencia desde la que se genera la evolvente.",
      u: "Con Db se calculan la línea de acción y la relación de contacto.",
      t: "Dentado de evolvente (recto y helicoidal).",
      o: "Siempre Db < Dp." },
    "de": { q: "Diámetro exterior (de cabeza): el que se mide con el calibre por fuera.",
      u: "de = Dp + 2a = m(z+2). Sirve para verificar una rueda que ya tenés.",
      t: "Ruedas de dentado exterior.",
      o: "En una corona de dentado interno, el exterior es el aro, no la punta del diente." },
    "di": { q: "Diámetro interior (de raíz o de fondo).",
      u: "di = Dp − 2b = m(z−2,5). Se usa para verificar y para el maquinado.",
      t: "Todos.",
      o: "El diente es más débil en la raíz: ahí se calcula la flexión de Lewis." },
    "C": { q: "Distancia entre centros: la separación entre los ejes de dos ruedas que engranan.",
      u: "C = m(z1+z2)/2 = (Dp1+Dp2)/2. Es el dato para ubicar cojinetes y bastidor.",
      t: "Ejes paralelos. En cónicos se usa el cono exterior (Ao).",
      o: "En un tren, la C total es la suma de las C de cada etapa." },
    "ht": { q: "Altura total del diente: de la cresta a la raíz.",
      u: "ht = a + b = 2,25m.",
      t: "Dentado recto y helicoidal de altura completa.",
      o: "Con diente recortado: ht = 1,8m." },
    "a": { q: "Addendo (cabeza): cuánto sobresale el diente por encima del primitivo.",
      u: "a = m, y de = Dp + 2a.",
      t: "Todos.",
      o: "Recortado: a = 0,8m." },
    "b": { q: "Dedendo (raíz): cuánto baja el valle por debajo del primitivo.",
      u: "b = 1,25m, y di = Dp − 2b.",
      t: "Todos.",
      o: "Incluye el huelgo: b = a + hc." },
    "pc": { q: "Paso circular: la distancia entre dientes consecutivos medida sobre el primitivo.",
      u: "pc = πm. Entra en el huelgo (hc = pc/50) y en la relación de contacto.",
      t: "Todos.",
      o: "No se mide con el calibre: se calcula." },
    "pb": { q: "Paso de base: el paso medido sobre la circunferencia de base.",
      u: "pb = pc·cosφ. Divide la línea de acción para sacar mc = Lab/pb.",
      t: "Evolvente (recto y helicoidal).",
      o: "Siempre pb < pc." },
    "px": { q: "Paso axial del tornillo: lo que avanza la hélice en una vuelta, medido sobre el eje.",
      u: "px = π·mn. Con las entradas da el avance L = px·z1.",
      t: "Tornillo sin fin.",
      o: "No lo confundas con el paso circular de la corona." },
    "Pd": { q: "Paso diametral: cantidad de dientes por pulgada de diámetro primitivo (sistema inglés).",
      u: "Pd = z/Dp[pulg] y se relaciona con el módulo por Pd·m = 25,4.",
      t: "Engranajes en pulgadas (importados o máquinas viejas).",
      o: "Pd grande = dientes chicos: es inverso al módulo." },
    "F": { q: "Ancho de cara: el largo del diente.",
      u: "F = 9,5m (Fanchon medio, entre 7m y 12m). Entra en la tensión de Lewis y define cuánta carga aguanta.",
      t: "Todos.",
      o: "Primero se agranda F; el módulo es el último recurso." },
    "hc": { q: "Huelgo circular (juego o backlash): la luz entre el diente y el valle de la otra rueda.",
      u: "hc = pc/50 ≈ 0,02pc. Evita que se trabe por dilatación o error de tallado.",
      t: "Todos.",
      o: "No es el juego entre flancos: ese depende del espesor del diente." },
    "t": { q: "Espesor del diente: el arco de diente medido sobre la circunferencia primitiva.",
      u: "Con t y v se controla el juego lateral: t + v = pc. Sale de t = (pc − hc)/2.",
      t: "Dentado recto de altura completa (φ = 20°).",
      o: "No es un triángulo: t + v = pc es una suma." },
    "HB": { q: "Dureza Brinell del material: el dato del que sale la tensión admisible St.",
      u: "St = 0,749·HB + 110 (4140 grado 2) y después fseg = St/σ.",
      t: "Aceros de la tabla AGMA.",
      o: "Cada material y grado tiene sus coeficientes: no mezcles el 0,749 con el 0,533." },
    "i": { q: "Relación de transmisión: cuántas vueltas da la entrada por cada vuelta de la salida.",
      u: "i = ne/ns = z2/z1 = Dp2/Dp1 = Ts/Te. Si i > 1 reduce; si i < 1 multiplica.",
      t: "Pares, trenes y reductores.",
      o: "El sentido de giro no está en i: se cuenta aparte con los pares exteriores." },
    "n": { q: "Velocidad de giro en rpm.",
      u: "n = ω/0,10472 = 60ω/2π. Entra en V = πDp n/60000 y en la elección del módulo.",
      t: "Todos.",
      o: "No la confundas con ω (rad/s)." },
    "n1": { q: "Velocidad del eje 1 (normalmente el motor) en rpm.",
      u: "n2 = n1/i. Si baja la velocidad, sube el par en la misma proporción.",
      t: "Pares y ejes.",
      o: "" },
    "n2": { q: "Velocidad del eje 2 (el conducido) en rpm.",
      u: "n2 = n1·z1/z2.",
      t: "Pares y ejes.",
      o: "" },
    "ne": { q: "Velocidad de entrada de un tren o reductor.",
      u: "i = ne/ns.",
      t: "Trenes y reductores.",
      o: "En un reductor, ns < ne." },
    "ns": { q: "Velocidad de salida de un tren o reductor.",
      u: "ns = ne/i.",
      t: "Trenes y reductores.",
      o: "" },
    "nsolar": { q: "Velocidad del solar del planetario, en rpm.",
      u: "Con Willis, o con el atajo nps = nsolar·zs/(zs+zc) si la corona está fija.",
      t: "Planetarios.",
      o: "Si el solar está fijo, nsolar = 0." },
    "nps": { q: "Velocidad del brazo portasatélites: la salida planetaria.",
      u: "Sale de Willis despejada.",
      t: "Planetarios.",
      o: "Puede salir más rápido que la entrada: revisá el signo y el valor." },
    "ω": { q: "Velocidad angular en radianes por segundo.",
      u: "ω = 2πn/60. Con H y T: H = T·ω.",
      t: "Todos.",
      o: "1 rpm = 0,10472 rad/s." },
    "V": { q: "Velocidad tangencial sobre la circunferencia primitiva. Va con V mayúscula para no confundirla con el vacío del diente.",
      u: "V = ω·r = πDp·n/60000. Con ella salen Wt = H/V y el factor Kv.",
      t: "Todos.",
      o: "Para que dé en m/s, el radio va en metros. La v minúscula es el vacío del diente, en mm." },
    "v": { q: "Vacío del diente: el ancho del espacio entre dos dientes, medido sobre la circunferencia primitiva. Va con v minúscula.",
      u: "v = pc − t y se cumple t + v = pc. No es la velocidad.",
      t: "Dentado recto de altura completa.",
      o: "No la confundas con V (mayúscula) = velocidad tangencial, en m/s." },
    "r": { q: "Radio primitivo: la mitad del diámetro primitivo (Dp/2).",
      u: "V = ω·r y T = Wt·r.",
      t: "Todos.",
      o: "En esas dos fórmulas va en metros (si tenés Dp en mm, r = Dp/2000)." },
    "H": { q: "Potencia en watt.",
      u: "H = T·ω = Wt·V. De acá salen el par y la fuerza.",
      t: "Todos.",
      o: "1 HP = 745 W." },
    "HP": { q: "Potencia en caballos de vapor (horse power).",
      u: "W = 745·HP.",
      t: "Motores y enunciados.",
      o: "No es lo mismo que CV (735,5 W)." },
    "W": { q: "Dos significados: potencia en watt (en la tarjeta HP→watt) o fuerza normal sobre el diente (en el par de engranajes). En el práctico es la «fuerza resultante total».",
      u: "Como potencia: W = 745·HP. Como fuerza: W = Wt/cosφ = √(Wt²+Wr²).",
      t: "Todos / dentado de evolvente.",
      o: "No la confundas con Wa (axial, solo en helicoidal, cónico y sin fin)." },
    "T": { q: "Par o torque, en N·m.",
      u: "T = H/ω = Wt·r.",
      t: "Todos.",
      o: "Con la misma potencia, si baja la velocidad el par sube." },
    "Te": { q: "Par de entrada.",
      u: "Ts = Te·i·η.",
      t: "Reductores.",
      o: "" },
    "Ts": { q: "Par de salida.",
      u: "Ts = Te·i (sin pérdidas) o Te·i·η (con rendimiento).",
      t: "Reductores.",
      o: "" },
    "Ps": { q: "Potencia de salida.",
      u: "η = Ps/Pe.",
      t: "Reductores.",
      o: "La diferencia con Pe es el calor que se pierde." },
    "Pe": { q: "Potencia de entrada.",
      u: "Pe = Ps/η.",
      t: "Reductores.",
      o: "" },
    "Wt": { q: "Fuerza tangencial: la que transmite el par, aplicada en el primitivo.",
      u: "Wt = 2T/Dp = H/V. Es la base de Lewis y de las fuerzas radial y axial.",
      t: "Todos.",
      o: "No es la fuerza total sobre el diente: esa es W." },
    "Wr": { q: "Fuerza radial: empuja los ejes uno hacia el otro.",
      u: "Wr = Wt·tanφ ≈ 0,36·Wt.",
      t: "Recto y helicoidal (en helicoidal se suma la axial).",
      o: "Es la que cargan los rodamientos." },
    "Wa": { q: "Fuerza axial: empuja el eje en dirección longitudinal.",
      u: "Wa = Wt·tanψ.",
      t: "Helicoidal, cónico y sin fin.",
      o: "Obliga a usar rodamientos que tomen empuje." },
    "Kv": { q: "Factor dinámico: cuánto aumenta la carga por el impacto entre dientes.",
      u: "Va en el numerador de Lewis y depende de V y del tipo de tallado.",
      t: "Todos (la fórmula cambia según el tallado).",
      o: "A más velocidad, más Kv." },
    "σ": { q: "Tensión de flexión en el pie del diente (Lewis).",
      u: "σ = Kv·Wt/(F·m·Y).",
      t: "Recto (y helicoidal usando mn).",
      o: "Se compara con St para el factor de seguridad." },
    "St": { q: "Resistencia a la fatiga del material.",
      u: "Sale de la dureza: St = 0,749HB + 110 para el 4140 grado 2.",
      t: "Todos.",
      o: "Ojo con la curva y el grado del material." },
    "fseg": { q: "Factor de seguridad.",
      u: "fseg = St/σ. Se pide ≥ 1,2.",
      t: "Todos.",
      o: "Si no verifica, subí F antes que m." },
    "Y": { q: "Factor de forma de Lewis: cuánto resiste el diente según su cantidad de dientes.",
      u: "Va en el denominador de Lewis: Y = 0,322 para z = 20.",
      t: "Recto; en helicoidal se usa el número de dientes equivalente.",
      o: "Sacalo de la tabla, no lo inventes." },
    "Lab": { q: "Longitud de la línea de acción: el tramo donde los dientes están en contacto.",
      u: "mc = Lab/pb.",
      t: "Evolvente recto y helicoidal.",
      o: "Si es chica, el contacto es corto y hay más ruido." },
    "mc": { q: "Relación de contacto: cuántos pares de dientes engranan a la vez.",
      u: "mc = Lab/pb; se pide entre 1,2 y el máximo.",
      t: "Recto y helicoidal.",
      o: "mc < 1,2 es salto y ruido." },
    "L": { q: "Avance del tornillo sin fin: lo que avanza la corona por vuelta del tornillo.",
      u: "L = px·z1.",
      t: "Sin fin.",
      o: "Es longitud por vuelta, no velocidad." },
    "Ao": { q: "Distancia exterior del cono: la generatriz del cono primitivo, medida desde el vértice.",
      u: "Ao = Dp/(2 senγ), y el ancho de cara máximo es F ≤ Ao/3.",
      t: "Engranajes cónicos.",
      o: "Se mide desde el vértice del cono." },
    "φ": { q: "Ángulo de presión: el que forma la línea de acción con la tangente a los primitivos.",
      u: "Define Wr = Wt·tanφ y el mínimo de dientes (zmin = 2/sen²φ = 17).",
      t: "Todos los de evolvente.",
      o: "El normal es 20°." },
    "ψ": { q: "Ángulo de hélice: la inclinación del diente respecto del eje.",
      u: "Con ψ salen mn/mt, la fuerza axial Wa y el aumento de la relación de contacto.",
      t: "Helicoidales y sin fin.",
      o: "A más ψ, más suave pero más empuje axial." },
    "γ": { q: "Ángulo primitivo del cono (el del piñón cónico).",
      u: "tanγ = z1/z2; con él salen Ao y las fuerzas radial y axial del cónico.",
      t: "Cónicos.",
      o: "El de la rueda es Γ = 90° − γ." },
    "η": { q: "Rendimiento: la fracción de la potencia que llega a la salida.",
      u: "η = Ps/Pe. En un tren, el η total es el producto de los η de cada etapa.",
      t: "Reductores y transmisiones.",
      o: "Cilíndrico 0,97–0,99; sin fin 0,60–0,80." }
  };

  /* ---------- filtro rápido por variable ---------- */
  var CATS = null;

  var CHIPS_ORDEN = ["m", "mt", "mn", "z", "z1", "z2", "zcCond", "zcCor", "zm", "zs", "zsum",
    "Dp", "Dp1", "Dp2", "Db", "de", "di", "C", "ht", "ad", "ba",
    "pc", "pb", "px", "Pd", "F", "hc", "t", "vac", "i", "n", "n1", "n2", "ne", "ns", "nsolar", "nps",
    "w", "v", "r", "H", "HP", "Wpot", "T", "Te", "Ts", "Ps", "Pe", "Wt", "Wr", "Wa",
    "Kv", "sig", "St", "HB", "fseg", "Y", "Lab", "mc", "L", "Ao", "phi", "psi", "gam", "eta"];

  function barraFiltro(nF) {
    var usadas = {}, vistos = {}, chips = "";
    Object.keys(INFO).forEach(function (t) {
      (INFO[t].v || []).forEach(function (id) { usadas[id] = 1; });
    });
    /* variables que solo aparecen en el bloque de las que no son triángulo */
    ["t", "vac", "HB"].forEach(function (id) { usadas[id] = 1; });
    CHIPS_ORDEN.forEach(function (id) {
      var v = VARS[id];
      if (!v || !usadas[id]) return;
      var k = clave(v[0]);
      if (vistos[k]) return;
      vistos[k] = 1;
      chips += '<button type="button" class="tri-chip" data-sym="' + k + '" data-def="' + v[1] + '" data-u="' + v[2] + '" title="' + v[1] + " [" + v[2] + ']">' + v[0] + "</button>";
    });
    return '<div class="tri-filtro no-print" id="tri-filtro">' +
      '<div class="tri-filtro-cab"><strong>Filtrar por variable</strong>' +
      '<span id="tri-res">· ' + (GEOMETRIA.length + MECANICA.length + FUERZAS.length + TRENES.length + HELICOIDALES.length + SUMAS.length) + " triángulos" +
      (nF ? " + " + nF + " fórmulas" : "") + "</span>" +
      '<button type="button" class="tri-limpiar" id="tri-limpiar" hidden>Ver todos</button></div>' +
      '<div class="tri-cats">' + construirCats().map(function (c, i) {
        return '<button type="button" class="tri-cat" data-cat="' + i + '">' + c.t + "</button>";
      }).join("") + "</div>" +
      '<div class="tri-que" id="tri-que" hidden></div>' +
      '<div class="tri-chips">' + chips + "</div>" +
      '<p class="tri-filtro-pie">Tocá una <b>categoría</b> para ver solo esos triángulos, o una <b>variable</b> (por ejemplo <b>m</b>): además de los triángulos, abajo aparecen las fórmulas que la usan.</p>' +
      "</div>";
  }

  function seccion(titulo, items, cat) {
    var marc = ' data-cat="' + cat + '"';
    return '<section class="tri-sec" data-cat="' + cat + '"><h2>' + titulo + '</h2><div class="tris">' +
      items.map(function (c) {
        return tarjeta.apply(null, c).replace('<div class="tri-card"', '<div class="tri-card"' + marc);
      }).join("") +
      "</div></section>";
  }

  /* ---------- los triángulos ---------- */
  var GEOMETRIA = [
    ["Módulo", T`D_p`, T`m`, T`z`,
      [T`D_p = m\cdot z`, T`m = \dfrac{D_p}{z}`, T`z = \dfrac{D_p}{m}`]],

    ["Paso circular", T`p_c`, T`\pi`, T`m`,
      [T`p_c = \pi\cdot m`, T`m = \dfrac{p_c}{\pi}`], T`π = 3,1416, siempre.`],

    ["Paso de base", T`p_b`, T`p_c`, T`\cos\varphi`,
      [T`p_b = p_c\cos\varphi`, T`p_c = \dfrac{p_b}{\cos\varphi}`, T`\cos\varphi = \dfrac{p_b}{p_c}`],
      T`Con φ = 20°: cos φ = 0,9397.`],

    ["Diámetro de base", T`D_b`, T`D_p`, T`\cos\varphi`,
      [T`D_b = D_p\cos\varphi`, T`D_p = \dfrac{D_b}{\cos\varphi}`, T`\cos\varphi = \dfrac{D_b}{D_p}`]],

    ["Huelgo (cátedra)", T`p_c`, T`h_c`, T`50`,
      [T`p_c = 50\,h_c`, T`h_c = \dfrac{p_c}{50}`], T`También $h_c \approx 0{,}02\,p_c$.`],

    ["Ancho de cara (Fanchon)", T`F`, T`9{,}5`, T`m`,
      [T`F = 9{,}5\,m`, T`m = \dfrac{F}{9{,}5}`], T`Rango válido: $7m \le F \le 12m$.`],

    ["Paso diametral", T`z`, T`P_d`, T`D_p`,
      [T`z = P_d\,D_p`, T`P_d = \dfrac{z}{D_p}`, T`D_p = \dfrac{z}{P_d}`], T`Acá $D_p$ va en <strong>pulgadas</strong> (sistema inglés).`],

    ["Pulgada ↔ módulo", T`25{,}4`, T`P_d`, T`m`,
      [T`25{,}4 = P_d\,m`, T`m = \dfrac{25{,}4}{P_d}`, T`P_d = \dfrac{25{,}4}{m}`],
      T`$25{,}4$ es el pasaje de pulgadas a mm: $1\ \text{pulg} = 25{,}4\ \text{mm}$. Sale de $P_d\,m = 25{,}4$.`],

    ["Relación por dientes", T`z_2`, T`i`, T`z_1`,
      [T`z_2 = i\,z_1`, T`i = \dfrac{z_2}{z_1}`, T`z_1 = \dfrac{z_2}{i}`],
      T`Módulo igual en las dos ruedas.`],

    ["Relación por velocidades", T`n_1`, T`i`, T`n_2`,
      [T`n_1 = i\,n_2`, T`i = \dfrac{n_1}{n_2}`, T`n_2 = \dfrac{n_1}{i}`],
      T`Con una rueda loca, $i$ no cambia; el sentido sí.`],

    ["Relación por diámetros", T`D_{p2}`, T`i`, T`D_{p1}`,
      [T`D_{p2} = i\,D_{p1}`, T`i = \dfrac{D_{p2}}{D_{p1}}`, T`D_{p1} = \dfrac{D_{p2}}{i}`],
      T`Vale si el módulo es el mismo.`],

    ["Distancia entre centros", T`2C`, T`m`, T`z_1 + z_2`,
      [T`2C = m\,(z_1 + z_2)`, T`C = \dfrac{m\,(z_1 + z_2)}{2}`, T`m = \dfrac{2C}{z_1 + z_2}`],
      T`En helicoidales usá $m_t = m_n/\cos\psi$.`]
  ];

  var MECANICA = [
    ["rpm → rad/s", T`\omega`, T`0{,}10472`, T`n`,
      [T`\omega = 0{,}10472\,n`, T`n = \dfrac{\omega}{0{,}10472}`], T`$0{,}10472 = 2\pi/60$.`],

    ["Velocidad tangencial", T`V`, T`\omega`, T`r`,
      [T`V = \omega\,r`, T`\omega = \dfrac{V}{r}`, T`r = \dfrac{V}{\omega}`],
      T`Acá $r$ va en <strong>metros</strong> para que $V$ dé en m/s. Equivale a $V = \pi D_p n/60\,000$ (con $D_p$ en mm).`],

    ["Potencia y par", T`H`, T`T`, T`\omega`,
      [T`H = T\,\omega`, T`T = \dfrac{H}{\omega}`, T`\omega = \dfrac{H}{T}`],
      T`La que más se usa en los prácticos.`],

    ["Potencia y fuerza", T`H`, T`W_t`, T`V`,
      [T`H = W_t\,V`, T`W_t = \dfrac{H}{V}`, T`V = \dfrac{H}{W_t}`]],

    ["Par y fuerza", T`T`, T`W_t`, T`r`,
      [T`T = W_t\,r`, T`W_t = \dfrac{T}{r}`, T`r = \dfrac{T}{W_t}`],
      T`$r$ en <strong>metros</strong> → $T$ en N·m. Con $r$ en mm el par sale en N·mm (dividí por 1000).`],

    ["Par y diámetro", T`2T`, T`W_t`, T`D_p`,
      [T`2T = W_t\,D_p`, T`W_t = \dfrac{2T}{D_p}`, T`D_p = \dfrac{2T}{W_t}`],
      T`Acá $D_p$ va en <strong>metros</strong> (102 mm = 0,102 m) para que $T$ dé en N·m. Es la misma de arriba con $D_p = 2r$.`],

    ["Rendimiento", T`P_s`, T`\eta`, T`P_e`,
      [T`P_s = \eta\,P_e`, T`\eta = \dfrac{P_s}{P_e}`, T`P_e = \dfrac{P_s}{\eta}`],
      T`En un reductor, η multiplica al par.`],

    ["HP → watt", T`W`, T`745`, T`HP`,
      [T`W = 745\,HP`, T`HP = \dfrac{W}{745}`], T`1 HP = 745 W.`]
  ];

  var FUERZAS = [
    ["Fuerza radial", T`W_r`, T`W_t`, T`\tan\varphi`,
      [T`W_r = W_t\tan\varphi`, T`W_t = \dfrac{W_r}{\tan\varphi}`, T`\tan\varphi = \dfrac{W_r}{W_t}`],
      T`φ = 20° → tan φ = 0,364.`],

    ["Fuerza normal (W total)", T`W_t`, T`W`, T`\cos\varphi`,
      [T`W_t = W\cos\varphi`, T`W = \dfrac{W_t}{\cos\varphi}`, T`\cos\varphi = \dfrac{W_t}{W}`],
      T`Es la <strong>resultante total</strong> que pide el práctico: $W = \sqrt{W_t^2+W_r^2}$. No la confundas con $W_a$ (axial, solo helicoidal, cónico y sin fin).`],

    ["Factor de seguridad", T`S_t`, T`f_{seg}`, T`\sigma`,
      [T`S_t = f_{seg}\,\sigma`, T`f_{seg} = \dfrac{S_t}{\sigma}`, T`\sigma = \dfrac{S_t}{f_{seg}}`],
      T`Se pide $f_{seg} \ge 1{,}2$.`],

    ["Lewis: tensión", T`K_v W_t`, T`\sigma`, T`F\,m\,Y`,
      [T`K_v W_t = \sigma\,F m Y`, T`\sigma = \dfrac{K_v W_t}{F m Y}`],
      T`Si te piden $F$ o $m$, usá el triángulo siguiente.`],

    ["Lewis: despejar F", T`K_v W_t`, T`F`, T`\sigma\,m\,Y`,
      [T`K_v W_t = F\,\sigma m Y`, T`F = \dfrac{K_v W_t}{\sigma m Y}`, T`m = \dfrac{K_v W_t}{\sigma F Y}`],
      T`Primero subí $F$ (ensanchar); el módulo es el último recurso.`],

    ["Relación de contacto", T`L_{ab}`, T`m_c`, T`p_b`,
      [T`L_{ab} = m_c\,p_b`, T`m_c = \dfrac{L_{ab}}{p_b}`, T`p_b = \dfrac{L_{ab}}{m_c}`],
      T`Se pide $1{,}2 \le m_c$.`]
  ];

  var TRENES = [
    ["Tren: velocidades", T`n_e`, T`i`, T`n_s`,
      [T`n_e = i\,n_s`, T`i = \dfrac{n_e}{n_s}`, T`n_s = \dfrac{n_e}{i}`],
      T`Entrada arriba, salida a la derecha.`],

    ["Tren: dientes", T`\displaystyle\prod z_c`, T`i`, T`\displaystyle\prod z_m`,
      [T`\prod z_c = i\,\prod z_m`, T`i = \dfrac{\prod z_c}{\prod z_m}`, T`\prod z_m = \dfrac{\prod z_c}{i}`],
      T`$z_c = \prod z_{conducidas}$ y $z_m = \prod z_{motrices}$: $\prod$ es productoria (Pi mayúscula), no es $\pi$.`],

    ["Par de salida", T`T_s`, T`T_e`, T`i`,
      [T`T_s = T_e\,i`, T`i = \dfrac{T_s}{T_e}`, T`T_e = \dfrac{T_s}{i}`],
      T`Sin pérdidas; con η: $T_s = T_e\,i\,\eta$.`],

    ["Sin fin: relación", T`z_2`, T`i`, T`z_1`,
      [T`z_2 = i\,z_1`, T`i = \dfrac{z_2}{z_1}`, T`z_1 = \dfrac{z_2}{i}`],
      T`$z_1$ = número de entradas.`],

    ["Sin fin: avance", T`L`, T`p_x`, T`z_1`,
      [T`L = p_x\,z_1`, T`p_x = \dfrac{L}{z_1}`, T`z_1 = \dfrac{L}{p_x}`],
      T`Es lo que avanza la corona por vuelta.`],

    ["Sin fin: paso axial", T`p_x`, T`\pi`, T`m_n`,
      [T`p_x = \pi\,m_n`, T`m_n = \dfrac{p_x}{\pi}`]],

    ["Planetario: brazo", T`n_{ps}`, T`n_{solar}`, T`\dfrac{z_s}{z_s+z_c}`,
      [T`n_{ps} = n_{solar}\,\dfrac{z_s}{z_s + z_c}`, T`n_{solar} = n_{ps}\,\dfrac{z_s + z_c}{z_s}`],
      T`Vale con la corona fija.`],

    ["Planetario: i con corona fija", T`z_c`, T`(i-1)`, T`z_s`,
      [T`z_c = (i-1)\,z_s`, T`i = 1 + \dfrac{z_c}{z_s}`, T`z_s = \dfrac{z_c}{i-1}`],
      T`Es el atajo $i = 1 + z_c/z_s$.`]
  ];

  var HELICOIDALES = [
    ["Helicoidal: módulo normal", T`m_n`, T`m_t`, T`\cos\psi`,
      [T`m_n = m_t\cos\psi`, T`m_t = \dfrac{m_n}{\cos\psi}`, T`\cos\psi = \dfrac{m_n}{m_t}`],
      T`Con ψ = 20°: cos ψ = 0,9397.`],

    ["Helicoidal: fuerza axial", T`W_a`, T`W_t`, T`\tan\psi`,
      [T`W_a = W_t\tan\psi`, T`W_t = \dfrac{W_a}{\tan\psi}`, T`\tan\psi = \dfrac{W_a}{W_t}`],
      T`Solo aparece si el diente está inclinado (helicoidal, cónico, sin fin). No es la resultante total $W$.`],

    ["Cónico: ángulo primitivo", T`z_1`, T`\tan\gamma`, T`z_2`,
      [T`z_1 = z_2\tan\gamma`, T`\tan\gamma = \dfrac{z_1}{z_2}`, T`z_2 = \dfrac{z_1}{\tan\gamma}`],
      T`Con ejes a 90°: $\Gamma = 90° - \gamma$.`],

    ["Cónico: cono exterior", T`D_p`, T`A_o`, T`2\sin\gamma`,
      [T`D_p = 2A_o\sin\gamma`, T`A_o = \dfrac{D_p}{2\sin\gamma}`, T`\sin\gamma = \dfrac{D_p}{2A_o}`],
      T`Y el ancho de cara: $F \le A_o/3$.`]
  ];


  /* ---------- un ejemplo corto por tarjeta ---------- */
  function ej(sit, form, res) {
    return '<p class="tri-ej-sit">' + sit + "</p>" +
      '<div class="f f-sin">$$' + form + "$$</div>" +
      (res ? '<p class="tri-ej-res">' + res + "</p>" : "");
  }

  var EJEMPLOS = {
    "Módulo": ej(T`Un engrane de <strong>34 dientes</strong> tiene <strong>$D_p = 102$ mm</strong>. ¿Qué módulo tiene?`,
      T`m = \frac{D_p}{z} = \frac{102}{34} = 3\ \text{mm}`,
      T`Es un <strong>módulo 3</strong> (normalizado).`),

    "Paso circular": ej(T`Un engrane de <strong>módulo 4</strong>. ¿Cuánto mide el paso?`,
      T`p_c = \pi\cdot m = 3{,}1416\cdot 4 = 12{,}57\ \text{mm}`,
      T`En los 360° del círculo entran exactamente <strong>$z$</strong> pasos.`),

    "Paso de base": ej(T`<strong>m = 4</strong> y φ = 20° (el caso de todos los prácticos).`,
      T`p_b = p_c\cos\varphi = 12{,}57\cdot 0{,}9397 = 11{,}81\ \text{mm}`,
      T`Es el paso medido sobre el <strong>círculo de base</strong>.`),

    "Diámetro de base": ej(T`Rueda de <strong>$D_p = 102$ mm</strong> y φ = 20°.`,
      T`D_b = D_p\cos\varphi = 102\cdot 0{,}9397 = 95{,}85\ \text{mm}`,
      T`Siempre <strong>$D_b < D_p$</strong> (el diente trabaja desde la base).`),

    "Huelgo (cátedra)": ej(T`<strong>m = 3</strong>: el paso vale $p_c = \pi\cdot 3 = 9{,}42$ mm.`,
      T`h_c = \frac{p_c}{50} = \frac{9{,}42}{50} = 0{,}188\ \text{mm}`,
      T`Es la holgura que evita que el diente se trabe.`),

    "Ancho de cara (Fanchon)": ej(T`<strong>m = 6 mm</strong> (TP de engranajes).`,
      T`F = 9{,}5\,m = 9{,}5\cdot 6 = 57\ \text{mm} \qquad 7m = 42 \le F \le 72 = 12m`,
      T`Se adopta <strong>F = 57 mm</strong> (Fanchon medio).`),

    "Paso diametral": ej(T`Rueda de <strong>20 dientes</strong> y <strong>$D_p = 2{,}5$ pulg</strong>.`,
      T`P_d = \frac{z}{D_p} = \frac{20}{2{,}5} = 8\ \text{1/pulg}`,
      T`Ocho dientes por pulgada de diámetro primitivo.`),

    "Pulgada ↔ módulo": ej(T`Una rueda vieja tallada con <strong>$P_d = 10$</strong> (sistema inglés).`,
      T`m = \frac{25{,}4}{P_d} = \frac{25{,}4}{10} = 2{,}54\ \text{mm}`,
      T`Equivale a un módulo métrico <strong>2,54</strong>.`),

    "Relación por dientes": ej(T`Piñón de <strong>17</strong> y rueda de <strong>46</strong>.`,
      T`i = \frac{z_2}{z_1} = \frac{46}{17} = 2{,}71`,
      T`La rueda gira <strong>2,71 veces más lento</strong> y en sentido contrario.`),

    "Relación por velocidades": ej(T`Con $i = 2{,}71$ y un motor de <strong>1450 rpm</strong>.`,
      T`n_2 = \frac{n_1}{i} = \frac{1450}{2{,}71} = 535\ \text{rpm}`,
      T`La salida va a <strong>535 rpm</strong>.`),

    "Relación por diámetros": ej(T`$i = 2$ y piñón de <strong>$D_p = 80$ mm</strong> (m = 4, z₁ = 20).`,
      T`D_{p2} = i\,D_{p1} = 2\cdot 80 = 160\ \text{mm}`,
      T`Con m = 4: <strong>$z_2 = 40$</strong>.`),

    "Distancia entre centros": ej(T`<strong>m = 6</strong>, z₁ = 17 y z₂ = 46 (TP, bloque 1).`,
      T`C = \frac{m(z_1+z_2)}{2} = \frac{6\cdot 63}{2} = 189\ \text{mm}`,
      T`<strong>189 mm</strong> entre ejes: el dato que se usa para el árbol.`),

    "rpm → rad/s": ej(T`El eje de salida del práctico 1: <strong>856 rpm</strong>.`,
      T`\omega = 0{,}10472\,n = 0{,}10472\cdot 856 = 89{,}6\ \text{rad/s}`,
      T`Los <strong>90 rad/s</strong> del enunciado.`),

    "Velocidad tangencial": ej(T`n = 300 rpm y $D_p = 100$ mm (r = 0,05 m).`,
      T`\omega = 31{,}42\ \text{rad/s} \quad V = \omega\,r = 31{,}42\cdot 0{,}05 = 1{,}57\ \text{m/s}`,
      T`Ojo: el radio va en <strong>metros</strong> para que dé m/s.`),

    "Potencia y par": ej(T`H = <strong>10 HP = 7450 W</strong> y $\omega = 90$ rad/s.`,
      T`T = \frac{H}{\omega} = \frac{7450}{90} = 82{,}8\ \text{N}\cdot\text{m}`,
      T`Los <strong>82,86 N·m</strong> del práctico 1.`),

    "Potencia y fuerza": ej(T`H = <strong>3725 W</strong> (5 HP) y V = 1,131 m/s.`,
      T`W_t = \frac{H}{V} = \frac{3725}{1{,}131} = 3293\ \text{N}`,
      T`Los <strong>3293 N</strong> del práctico de reductores (P11).`),

    "Par y fuerza": ej(T`T = 82,86 N·m y r = 50 mm = <strong>0,05 m</strong>.`,
      T`W_t = \frac{T}{r} = \frac{82{,}86}{0{,}05} = 1657\ \text{N}`,
      T`Si usás el radio en mm te sale 1000 veces más chico.`),

    "Par y diámetro": ej(T`T = <strong>1201,3 N·m</strong> y $D_p = 102$ mm.`,
      T`W_t = \frac{2T}{D_p} = \frac{2\cdot 1201{,}3}{0{,}102} = 23\,555\ \text{N}`,
      T`Los <strong>23 555 N</strong> del TP de engranajes (bloque 1).`),

    "Rendimiento": ej(T`Entran <strong>7450 W</strong> y el reductor tiene η = 0,92.`,
      T`P_s = \eta\,P_e = 0{,}92\cdot 7450 = 6854\ \text{W}`,
      T`Se pierden <strong>596 W</strong> en calor y ruido.`),

    "HP → watt": ej(T`Motor de <strong>10 HP</strong>.`,
      T`W = 745\,HP = 745\cdot 10 = 7450\ \text{W}`,
      T`Y 5 HP son <strong>3725 W</strong>.`),

    "Fuerza radial": ej(T`$W_t = 3293$ N y φ = 20°.`,
      T`W_r = W_t\tan\varphi = 3293\cdot 0{,}364 = 1198{,}7\ \text{N}`,
      T`Es ≈ <strong>0,36·W_t</strong>: sirve para chequear rápido.`),

    "Fuerza normal (W total)": ej(T`$W_t = 3293$ N y φ = 20°.`,
      T`W = \frac{W_t}{\cos\varphi} = \frac{3293}{0{,}9397} = 3504\ \text{N}`,
      T`Siempre <strong>$W > W_t$</strong>. Y también $W = \sqrt{3293^2+1198{,}7^2} = 3504$ N.`),

    "Factor de seguridad": ej(T`Material con <strong>$S_t = 375$ MPa</strong> y tensión de Lewis $\sigma = 250$ MPa.`,
      T`f_{seg} = \frac{S_t}{\sigma} = \frac{375}{250} = 1{,}5`,
      T`<strong>Verifica</strong>: se pide $f_{seg} \ge 1{,}2$.`),

    "Lewis: tensión": ej(T`$K_v = 1{,}2987$, $W_t = 3293$ N, F = 25 mm, m = 2,5 y Y = 0,322.`,
      T`\sigma = \frac{K_v\,W_t}{F\,m\,Y} = \frac{1{,}2987\cdot 3293}{25\cdot 2{,}5\cdot 0{,}322} = 212{,}5\ \text{MPa}`,
      T`Los <strong>212,7 MPa</strong> del práctico (P11).`),

    "Lewis: despejar F": ej(T`Con los datos anteriores querés bajar a <strong>σ ≤ 150 MPa</strong>.`,
      T`F = \frac{K_v\,W_t}{\sigma\,m\,Y} = \frac{4276{,}8}{150\cdot 2{,}5\cdot 0{,}322} = 35{,}4\ \text{mm}`,
      T`Se adopta <strong>F = 40 mm</strong> y se verifica de nuevo.`),

    "Relación de contacto": ej(T`$L_{ab} = 28{,}8$ mm y $p_b = 17{,}71$ mm.`,
      T`m_c = \frac{L_{ab}}{p_b} = \frac{28{,}8}{17{,}71} = 1{,}63`,
      T`Está entre 1,2 y el máximo: <strong>verifica</strong>.`),

    "Tren: velocidades": ej(T`$n_e = 1500$ rpm e $i = 17{,}78$ (práctico 4).`,
      T`n_s = \frac{n_e}{i} = \frac{1500}{17{,}78} = 84{,}4\ \text{rpm}`,
      T`Los <strong>84,375 rpm</strong> del práctico.`),

    "Tren: dientes": ej(T`Tres etapas: 32/64, 25/80 y 18/50.`,
      T`z_c = 64\cdot 80\cdot 50 = 256\,000 \qquad z_m = 32\cdot 25\cdot 18 = 14\,400`,
      T`$i = 256\,000/14\,400 = 17{,}78$: <strong>sin mirar las rpm</strong>.`),

    "Par de salida": ej(T`$T_e = 199{,}2$ N·m e $i = 17{,}78$.`,
      T`T_s = T_e\,i = 199{,}2\cdot 17{,}78 = 3542\ \text{N}\cdot\text{m}`,
      T`Con $\eta^3 = 0{,}98^3$ queda <strong>3336 N·m</strong> (práctico 4).`),

    "Sin fin: relación": ej(T`Tornillo de <strong>3 entradas</strong> y corona de <strong>36 dientes</strong>.`,
      T`i = \frac{z_2}{z_1} = \frac{36}{3} = 12`,
      T`Doce vueltas del tornillo = <strong>una</strong> de la corona.`),

    "Sin fin: avance": ej(T`$p_x = 15{,}7$ mm y 3 entradas.`,
      T`L = p_x\,z_1 = 15{,}7\cdot 3 = 47{,}1\ \text{mm}`,
      T`Avanza <strong>47 mm por vuelta</strong>.`),

    "Sin fin: paso axial": ej(T`Tornillo de <strong>$m_n = 5$ mm</strong>.`,
      T`p_x = \pi\,m_n = 3{,}1416\cdot 5 = 15{,}71\ \text{mm}`,
      T`Es el paso medido <strong>sobre el eje</strong> del tornillo.`),

    "Planetario: brazo": ej(T`Solar 20, corona 80, corona fija y $n_{solar} = 100$ rpm.`,
      T`n_{ps} = n_{solar}\frac{z_s}{z_s+z_c} = 100\cdot\frac{20}{100} = 20\ \text{rpm}`,
      T`El brazo sale a <strong>20 rpm</strong> (5 veces más lento).`),

    "Planetario: i con corona fija": ej(T`Querés $i = 5$ con un solar de <strong>20 dientes</strong>.`,
      T`z_c = (i-1)\,z_s = (5-1)\cdot 20 = 80\ \text{dientes}`,
      T`Y el satélite: $z_{sat} = (80-20)/2 = $ <strong>30</strong>.`),

    "Helicoidal: módulo normal": ej(T`$m_n = 3$, ψ = 20° y z = 32 (práctico 4).`,
      T`m_t = \frac{m_n}{\cos\psi} = \frac{3}{0{,}9397} = 3{,}19\ \text{mm} \quad D_p = m_t\,z = 102{,}2\ \text{mm}`,
      T`El <strong>$D_p = 102{,}16$ mm</strong> del práctico.`),

    "Helicoidal: fuerza axial": ej(T`$W_t = 3900$ N y ψ = 20°.`,
      T`W_a = W_t\tan\psi = 3900\cdot 0{,}364 = 1420\ \text{N}`,
      T`Los <strong>1422 N</strong> de la primera etapa (práctico 4).`),

    "Cónico: ángulo primitivo": ej(T`Par cónico de <strong>18 y 38 dientes</strong> (práctico 2).`,
      T`\tan\gamma = \frac{z_1}{z_2} = \frac{18}{38} = 0{,}474 \;\Rightarrow\; \gamma = 25{,}3°`,
      T`Y $\Gamma = 90° - 25{,}3° = $ <strong>64,7°</strong>.`),

    "Cónico: cono exterior": ej(T`$D_p = 36$ mm y $\gamma = 25{,}3°$.`,
      T`A_o = \frac{D_p}{2\sin\gamma} = \frac{36}{2\cdot 0{,}428} = 42{,}1\ \text{mm}`,
      T`El ancho de cara máximo: $F \le A_o/3 = $ <strong>14 mm</strong>.`)
  };

  var bloqueNoTri = seccionNoTri();
  var nFormulas = (bloqueNoTri.match(/class="mini"/g) || []).length;

  var html = String.raw`
<h1>Triángulos de despeje</h1>
<p class="bajada">Todos los triángulos de la materia en un solo lugar. Tapás la incógnita y leés el despeje sin pensar: es la forma más rápida de no equivocarse con una fracción en el examen. Al final están las fórmulas que <strong>no</strong> entran en un triángulo y cómo adaptarlas.</p>
` + barraFiltro(nFormulas) + String.raw`
<details class="tri-aux" id="tri-reglas">
<summary>Reglas, cómo se lee y lo que no entra<span class="no-print"> — tocá para abrir</span></summary>
<div class="details-cuerpo">
<div class="caja idea">
<p class="caja-tit">La regla, en una frase</p>
<p><strong>Arriba va el que queda solo; abajo, los dos que se multiplican.</strong> Si tapás el de arriba, los dos de abajo van multiplicándose entre sí. Si tapás uno de abajo, va el de arriba dividido el otro de abajo.</p>
<p class="aviso">Y siempre se cumple: <strong>el de arriba = producto de los dos de abajo</strong>. Si al reemplazar no cierra, el triángulo está mal armado (o la fórmula tiene una suma, no un producto).</p>
</div>

<div class="caja truco">
<p class="caja-tit">Tocalos en pantalla</p>
<p>Cada celda se puede <strong>tocar para taparla</strong> y probarte: aparece un <strong>?</strong> en lugar de la fórmula. Tocá de nuevo para destaparla. En papel hacés lo mismo con el dedo.</p>
</div>

<div class="caja dato">
<p class="caja-tit">Significado, unidad y estrellas</p>
<ul>
<li><strong class="tri-star">★</strong> = de los que más se usan en el examen y en los prácticos. Son <strong>16</strong> de los 38: si te sabés esos, aprobás.</li>
<li>Debajo de cada tarjeta está el <strong>significado y la unidad</strong> de cada variable: <strong>[mm]</strong> milímetros, <strong>[rad/s]</strong>, <strong>[rpm]</strong>, <strong>[N·m]</strong>, <strong>[N]</strong>, <strong>[MPa]</strong>, <strong>[W]</strong>, <strong>[°]</strong>, <strong>[1/pulg]</strong>.</li>
<li><strong>[—]</strong> quiere decir que no tiene unidad: números de dientes, relaciones, factores y rendimientos.</li>
<li>El símbolo <strong class="prod">∏</strong> es la <strong>productoria</strong> (Pi mayúscula): significa «multiplicá todos los términos». No confundir con <strong>π</strong> (pi minúscula), que es 3,1416.</li>
<li>Ojo con las mezclas: en $V = \omega\,r$ y en $T = W_t\,r$ el radio va en <strong>metros</strong> (si tenés el diámetro, $r = D_p/2000$), porque $V$ sale en m/s y $T$ en N·m. Los diámetros, en cambio, van en mm.</li>
<li><strong>Dos letras que se parecen:</strong> <strong>V</strong> (mayúscula) es la <strong>velocidad tangencial</strong> [m/s]; <strong>v</strong> (minúscula) es el <strong>vacío del diente</strong> [mm]. Con V salen $W_t$ y $K_v$; con v se controla el juego lateral.</li>
</ul>
</div>

<h2>Cómo se lee (con el triángulo de D<sub>p</sub> = m·z)</h2>
<p>El mismo triángulo contesta las tres preguntas posibles: todo depende de qué celda tapes.</p>
<div class="tris tris-metodo">
` +
    tarjetaTap("Tapás el de arriba", T`D_p`, T`m`, T`z`, "t",
      String.raw`Los dos de abajo se multiplican: $D_p = m\cdot z$.`) +
    tarjetaTap("Tapás el de la izquierda", T`D_p`, T`m`, T`z`, "l",
      String.raw`El de arriba dividido el de la derecha: $m = \dfrac{D_p}{z}$.`) +
    tarjetaTap("Tapás el de la derecha", T`D_p`, T`m`, T`z`, "r",
      String.raw`El de arriba dividido el de la izquierda: $z = \dfrac{D_p}{m}$.`) +
    String.raw`
</div>

<h2>Lo que no entra en un triángulo</h2>
<div class="grid2">
<div class="mini">
<h4>Sumas y restas</h4>
<p>No entran en el triángulo de <strong>producto</strong>: $d_e = D_p + 2m$, $d_i = D_p - 2{,}5m$, $h_t = a + b$, $t + v = p_c$, $C = r_1 + r_2$. Para estas está el <strong>triángulo de suma</strong> (azul, al final), que solo sirve para <em>acomodar</em> la fórmula: si hay que despejar, el término se pasa a mano.</p>
</div>
<div class="mini">
<h4>Raíces y potencias</h4>
<p>$m = \sqrt[3]{\dfrac{2000\,H\,K_v}{\omega\,z_1\,k\,Y\,S_{adm}}}$ y $z_{mín} = \dfrac{2}{\operatorname{sen}^2\varphi}$ no son triángulos. En la primera, calculá el radicando y después sacá la raíz cúbica.</p>
</div>
<div class="mini">
<h4>Cuatro letras o más</h4>
<p>Willis: $\dfrac{n_e - n_{ps}}{n_s - n_{ps}} = i_0$; la selección del módulo; $C = \dfrac{m(z_1+z_2)}{2}$; el tren coaxial $m_A(z_2+z_3) = m_B(z_4+z_5)$. Juntá dos letras en una sola casilla (por ejemplo $Z = \frac{z_1+z_2}{2}$) y el triángulo sigue valiendo.</p>
</div>
<div class="mini">
<h4>La que tiene dos caras</h4>
<p>$K_v = \dfrac{3{,}56 + \sqrt{V}}{3{,}56}$ no es producto ni cociente puro: se calcula directo. Y $\eta$ del sin fin tampoco: usá la fórmula completa.</p>
</div>
</div>
</div>
</details>
` +
    seccion("Geometría del diente", GEOMETRIA, 0) +
    seccion("Velocidad, potencia y par", MECANICA, 1) +
    seccion("Fuerzas, Lewis y contacto", FUERZAS, 2) +
    seccion("Trenes, reductores y planetarios", TRENES, 3) +
    seccion("Helicoidales y cónicos", HELICOIDALES, 4) +
    seccionSumas() +
    bloqueNoTri +
    String.raw`
<details class="tri-aux tri-aux-mini">
<summary>Chuleta de constantes para el triángulo<span class="no-print"> — tocá para abrir</span></summary>
<div class="details-cuerpo">
<div class="caja dato">
<div class="tabla-wrap">
<table class="tec compacta">
<thead><tr><th>Constante</th><th class="num">Valor</th><th>Constante</th><th class="num">Valor</th></tr></thead>
<tbody>
<tr><td>π</td><td class="num">3,14159</td><td>2π/60</td><td class="num">0,10472</td></tr>
<tr><td>cos 20°</td><td class="num">0,9397</td><td>tan 20°</td><td class="num">0,3640</td></tr>
<tr><td>sen 20°</td><td class="num">0,3420</td><td>1 HP</td><td class="num">745 W</td></tr>
<tr><td>1 pulg</td><td class="num">25,4 mm</td><td>P<sub>d</sub>·m</td><td class="num">25,4</td></tr>
<tr><td>F/m (Fanchon)</td><td class="num">9,5</td><td>p<sub>c</sub>/h<sub>c</sub></td><td class="num">50</td></tr>
<tr><td>z<sub>mín</sub> (φ = 20°)</td><td class="num">17</td><td>f<sub>seg</sub> mínimo</td><td class="num">1,2</td></tr>
</tbody>
</table>
</div>
</div>
</div>
</details>

<details class="tri-aux tri-aux-mini">
<summary>Checklist para el examen<span class="no-print"> — tocá para abrir</span></summary>
<div class="details-cuerpo">
<div class="caja">
<ol>
<li>Antes de despejar, escribí el triángulo: <strong>arriba el solo, abajo los dos factores</strong>.</li>
<li>Reemplazá las letras por números <strong>con las mismas unidades</strong> (mm con mm, rad/s con rad/s).</li>
<li>Si el resultado no tiene sentido (un módulo de 0,2 mm, un factor de seguridad de 80), revisá si el triángulo estaba invertido.</li>
<li>Las fórmulas con suma ($d_e$, $d_i$, $h_t$, $C$) se despejan a mano: el triángulo no las cubre.</li>
<li>Poné siempre la unidad en el resultado y una frase de conclusión.</li>
</ol>
</div>
</div>
</details>
`;

  window.CAPITULOS.push({
    id: "triangulos",
    grupo: "6 · Chuletas",
    titulo: "Triángulos de despeje (todos)",
    html: html
  });

  /* ---------- ventana de ejemplo ---------- */
  var modal = null, focoPrevio = null;

  function crearModal() {
    modal = document.createElement("div");
    modal.className = "tri-modal";
    modal.hidden = true;
    modal.innerHTML =
      '<div class="tri-modal-caja" role="dialog" aria-modal="true" aria-labelledby="tri-mtit">' +
      '<button type="button" class="tri-modal-cerrar" aria-label="Cerrar">×</button>' +
      '<h3 id="tri-mtit"></h3><div class="tri-modal-cuerpo"></div>' +
      "</div>";
    document.body.appendChild(modal);
  }

  function abrirModal(titulo, html) {
    if (!modal) crearModal();
    focoPrevio = document.activeElement;
    modal.querySelector("#tri-mtit").innerHTML = titulo;
    var cuerpo = modal.querySelector(".tri-modal-cuerpo");
    cuerpo.innerHTML = html;
    if (window.renderMathInElement) {
      try {
        window.renderMathInElement(cuerpo, {
          delimiters: [{ left: "$$", right: "$$", display: true }, { left: "$", right: "$", display: false }],
          throwOnError: false
        });
      } catch (e) { /* si falla, se ve el código de la fórmula */ }
    }
    modal.hidden = false;
    cuerpo.scrollTop = 0;
    document.documentElement.classList.add("sin-scroll");
    modal.querySelector(".tri-modal-cerrar").focus();
  }

  function abrirEjemplo(titulo) { abrirModal(titulo, EJEMPLOS[titulo] || ""); }

  function abrirInfo(barra, clave) {
    var chip = barra ? barra.querySelector('.tri-chip[data-sym="' + clave + '"]') : null;
    var v = INFO_VAR[clave];
    if (!chip || !v) return;
    var nom = chip.getAttribute("data-def"), u = chip.getAttribute("data-u");
    var html =
      (v.q ? "<h4>Qué es</h4><p>" + v.q + "</p>" : "") +
      (v.u ? "<h4>Qué te permite obtener</h4><p>" + v.u + "</p>" : "") +
      (v.t ? "<h4>Dónde vale</h4><p>" + v.t + "</p>" : "") +
      (v.o ? '<h4 class="ojo">Ojo</h4><p>' + v.o + "</p>" : "");
    abrirModal(chip.innerHTML + " · " + nom + " <span class=\"q-u-h\">[" + u + "]</span>", html);
  }

  function cerrarEjemplo() {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.documentElement.classList.remove("sin-scroll");
    if (focoPrevio && focoPrevio.focus) { try { focoPrevio.focus(); } catch (e) {} }
  }

  function construirCats() {
    if (CATS) return CATS;
    function k(items) {
      var s = {};
      items.forEach(function (c) {
        ((INFO[c[0]] || {}).v || []).forEach(function (id) {
          if (VARS[id]) s[clave(VARS[id][0])] = 1;
        });
      });
      return s;
    }
    CATS = [
      { t: "Geometría del diente", k: k(GEOMETRIA) },
      { t: "Velocidad, potencia y par", k: k(MECANICA) },
      { t: "Fuerzas, Lewis y contacto", k: k(FUERZAS) },
      { t: "Trenes y planetarios", k: k(TRENES) },
      { t: "Helicoidales y cónicos", k: k(HELICOIDALES) },
      { t: "Triángulos de suma", k: k(SUMAS) }
    ];
    return CATS;
  }

  function pintarFiltro(barra) {
    var root = barra.closest(".contenido") || document;
    var sym = barra.getAttribute("data-sym") || "";
    var cat = barra.getAttribute("data-cat");
    var cats = construirCats();
    var idx = cat === null ? -1 : +cat;
    var set = idx >= 0 ? cats[idx].k : null;
    var res = barra.querySelector("#tri-res");
    var limpiar = barra.querySelector("#tri-limpiar");
    var que = barra.querySelector("#tri-que");
    var chips = barra.querySelectorAll(".tri-chip");
    var cards = root.querySelectorAll(".tri-sec .tri-card");
    var sugeridas = 0;

    Array.prototype.forEach.call(chips, function (c) {
      var k = c.getAttribute("data-sym");
      var sug = !!set && !!set[k];
      if (sug) sugeridas++;
      c.classList.toggle("activo", !!sym && k === sym);
      c.classList.toggle("sug", sug);
    });
    barra.classList.toggle("cat-on", !!set);
    Array.prototype.forEach.call(barra.querySelectorAll(".tri-cat"), function (b, i) {
      b.classList.toggle("activo", i === idx);
    });

    var vis = 0;
    Array.prototype.forEach.call(cards, function (c) {
      var vars = (c.getAttribute("data-vars") || "").split(" ");
      var ok;
      if (sym) ok = vars.indexOf(sym) > -1;
      else if (set) ok = c.getAttribute("data-cat") === String(idx);
      else ok = true;
      c.hidden = !ok;
      if (ok) vis++;
    });
    Array.prototype.forEach.call(root.querySelectorAll(".tri-sec"), function (sec) {
      sec.hidden = (!!sym || !!set) && !sec.querySelector(".tri-card:not([hidden])");
    });
    var chipSel = sym ? barra.querySelector('.tri-chip[data-sym="' + sym + '"]') : null;
    var notri = root.querySelector("#tri-notri");
    var nVis = 0;

    Array.prototype.forEach.call(root.querySelectorAll(".tri-aux"), function (aux) {
      if (aux === notri) return;
      aux.hidden = !!sym || !!set;
    });

    if (notri) {
      var minis = notri.querySelectorAll(".mini");
      Array.prototype.forEach.call(minis, function (mi) {
        var keys = (mi.getAttribute("data-vars") || "").split(" ");
        var ok = !sym || keys.indexOf(sym) > -1;
        mi.hidden = !!sym && !ok;
        if (ok && sym) nVis++;
      });
      /* grupos: si no queda ninguna tarjeta visible, se esconde el título */
      var cuerpo = notri.querySelector(".details-cuerpo");
      var nodos = cuerpo ? Array.prototype.slice.call(cuerpo.children) : [];
      var grupoH = null, grupoVis = 0;
      var cerrarGrupo = function () { if (grupoH) grupoH.hidden = !!sym && grupoVis === 0; };
      nodos.forEach(function (n) {
        if (n.tagName === "H3") { cerrarGrupo(); grupoH = n; grupoVis = 0; return; }
        if (n.classList.contains("mini")) { if (!n.hidden) grupoVis++; return; }
        if (n.classList.contains("grid2")) {
          var vv = 0;
          Array.prototype.forEach.call(n.querySelectorAll(".mini"), function (m2) { if (!m2.hidden) vv++; });
          grupoVis += vv;
          n.hidden = !!sym && vv === 0;
          return;
        }
        if (n.classList.contains("caja")) n.hidden = !!sym;
      });
      cerrarGrupo();

      var tit = notri.querySelector(".notri-tit");
      if (set || (sym && !nVis)) {
        notri.hidden = true;
        notri.open = false;
        notri.removeAttribute("data-auto");
        if (tit) tit.textContent = "Las que no son triángulo, con el despeje hecho";
      } else {
        notri.hidden = false;
        if (sym) {
          if (!notri.open) { notri.open = true; notri.setAttribute("data-auto", "1"); }
          if (tit) tit.textContent = "Las que no son triángulo con " + (chipSel ? chipSel.textContent : sym) + " (" + nVis + ")";
        } else {
          if (notri.getAttribute("data-auto") === "1") { notri.open = false; notri.removeAttribute("data-auto"); }
          if (tit) tit.textContent = "Las que no son triángulo, con el despeje hecho";
        }
      }
    }

    if (res) {
      if (chipSel) {
        res.innerHTML = "· " + vis + (vis === 1 ? " triángulo" : " triángulos") +
          (nVis ? " + " + nVis + (nVis === 1 ? " fórmula" : " fórmulas") : "") + " con " + chipSel.innerHTML;
      } else if (set) {
        res.innerHTML = "· " + vis + (vis === 1 ? " triángulo" : " triángulos");
      } else {
        res.textContent = "· " + cards.length + " triángulos" + (nFormulas ? " + " + nFormulas + " fórmulas" : "");
      }
    }
    if (que) {
      if (chipSel) {
        que.innerHTML = '<span class="q-sym">' + chipSel.innerHTML + "</span>" +
          '<span class="q-def">' + chipSel.getAttribute("data-def") + "</span>" +
          '<span class="q-u">[' + chipSel.getAttribute("data-u") + "]</span>" +
          '<button type="button" class="tri-info" data-var="' + sym + '">¿Qué es?</button>';
        que.hidden = false;
      } else if (set) {
        que.innerHTML = '<span class="q-cat">' + cats[idx].t + "</span>" +
          '<span class="q-def">' + sugeridas + " variables iluminadas · tocá una para acotar</span>";
        que.hidden = false;
      } else {
        que.hidden = true;
        que.innerHTML = "";
      }
    }
    if (limpiar) limpiar.hidden = !chipSel && !set;
  }

  document.addEventListener("click", function (e) {
    var t = e.target;
    var chip = t && t.closest ? t.closest(".tri-chip") : null;
    if (chip) {
      var barra = chip.closest(".tri-filtro");
      var sym = chip.getAttribute("data-sym");
      barra.removeAttribute("data-cat");
      if (barra.getAttribute("data-sym") === sym) barra.removeAttribute("data-sym");
      else barra.setAttribute("data-sym", sym);
      pintarFiltro(barra);
      return;
    }
    var catBtn = t && t.closest ? t.closest(".tri-cat") : null;
    if (catBtn) {
      var barraC = catBtn.closest(".tri-filtro");
      var idxC = catBtn.getAttribute("data-cat");
      barraC.removeAttribute("data-sym");
      if (barraC.getAttribute("data-cat") === idxC) barraC.removeAttribute("data-cat");
      else barraC.setAttribute("data-cat", idxC);
      pintarFiltro(barraC);
      return;
    }
    var info = t && t.closest ? t.closest(".tri-info") : null;
    if (info) { abrirInfo(info.closest(".tri-filtro"), info.getAttribute("data-var")); return; }
    var reset = t && t.closest ? t.closest("#tri-limpiar") : null;
    if (reset) {
      var barraR = reset.closest(".tri-filtro");
      barraR.removeAttribute("data-sym");
      barraR.removeAttribute("data-cat");
      pintarFiltro(barraR);
      return;
    }
    var boton = t && t.closest ? t.closest(".tri-ej") : null;
    if (boton) { abrirEjemplo(boton.getAttribute("data-ej")); return; }
    if (modal && !modal.hidden && (t === modal || (t.closest && t.closest(".tri-modal-cerrar")))) {
      cerrarEjemplo();
      return;
    }
    var celda = t && t.closest ? t.closest(".tri-t, .tri-l, .tri-r") : null;
    if (!celda || celda.classList.contains("tapado")) return;
    if (celda.closest(".tri-card.suma")) return;
    celda.classList.toggle("tap");
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" || e.key === "Esc") cerrarEjemplo();
  });
  window.addEventListener("hashchange", cerrarEjemplo);
})();
