/* =========================================================================
   Exámenes resueltos — resolución “hoja de alumno”: paso, fórmula,
   reemplazo, resultado y de dónde sale cada dato.
   ========================================================================= */
(function () {
  var T = String.raw;

  /* ---------- piezas de la hoja de resolución ---------- */
  function datos(items) {
    var h = '<div class="tabla-wrap sol-datos"><table class="tec compacta">' +
      '<thead><tr><th>#</th><th>Dato</th><th class="num">Valor</th><th>De dónde sale</th></tr></thead><tbody>';
    items.forEach(function (it, i) {
      h += '<tr><td class="num">D' + (i + 1) + '</td><td>' + it[0] + '</td><td class="num">' + it[1] + '</td><td>' + it[2] + '</td></tr>';
    });
    return h + '</tbody></table></div>';
  }

  function bloques(tex) {
    return tex.split('\\qquad').map(function (p) { return p.trim(); }).filter(Boolean)
      .map(function (p) { return '$$ ' + p + ' $$'; }).join(' ');
  }

  function paso(n, titulo, exp, lineas, fuente) {
    var calc = '<div class="sol-calc">';
    lineas.forEach(function (l) {
      calc += '<div class="sol-linea' + (l[0] === 'Resultado' ? ' res' : '') + '">' +
        '<span class="sol-tag">' + l[0] + '</span>' +
        '<span class="sol-tex">' + bloques(l[1]) + '</span></div>';
    });
    calc += '</div>';
    return '<div class="sol-paso"><div class="sol-num">' + n + '</div>' +
      '<p class="sol-tit">' + titulo + '</p>' +
      '<p class="sol-exp">' + exp + '</p>' + calc +
      (fuente ? '<p class="sol-fuente"><b>De dónde sale:</b> ' + fuente + '</p>' : '') +
      '</div>';
  }

  function tabla(cabeceras, filas) {
    var h = '<div class="tabla-wrap"><table class="tec compacta"><thead><tr>';
    cabeceras.forEach(function (c, i) {
      h += '<th' + (i ? ' class="num"' : '') + '>' + c + '</th>';
    });
    h += '</tr></thead><tbody>';
    filas.forEach(function (f) {
      h += '<tr>';
      f.forEach(function (c, i) {
        h += '<td' + (i ? ' class="num"' : '') + '>' + c + '</td>';
      });
      h += '</tr>';
    });
    return h + '</tbody></table></div>';
  }

  function res(txt) {
    return '<div class="resultado"><span class="r-lbl">Resultado:</span> <span class="r-val">' + txt + '</span></div>';
  }

  function caja(tipo, titulo, cuerpo) {
    return '<div class="caja ' + tipo + '"><p class="caja-tit">' + titulo + '</p>' + cuerpo + '</div>';
  }

  var H = T`

<h1>Exámenes resueltos</h1>
<p class="bajada">Los tres exámenes, resueltos como una hoja de alumno: <strong>un paso por cálculo</strong>, con la fórmula, el reemplazo, el resultado y <strong>de dónde sale cada dato</strong>. Cada ejercicio arranca con una tabla de datos numerados (D1, D2…) que después se cita en cada paso.</p>
<p class="hojas-mini no-print">Las hojas para imprimir están en <a href="#hojas">Hojas de examen (A4)</a>: en blanco y con los resultados colocados.</p>

<div class="caja truco">
<p class="caja-tit">Cómo leer esta resolución</p>
<ol class="pasos">
<li><strong>Datos numerados.</strong> Cada ejercicio abre con una tabla D1, D2… que dice el valor, la unidad y de dónde se sacó (enunciado, figura, tabla o un paso anterior).</li>
<li><strong>Un paso = un cálculo.</strong> Cada paso tiene un título, una explicación breve, y un bloque con tres renglones: <em>Fórmula</em> (o <em>Tabla</em>, cuando el valor se busca), <em>Reemplazo</em> y <em>Resultado</em>.</li>
<li><strong>La fuente al pie.</strong> El renglón “De dónde sale” dice qué datos (D#) y qué resultado anterior se usaron. Si un número no cierra, se puede rastrear hasta el dato original.</li>
<li><strong>Resultado y chequeo.</strong> Al final de cada ejercicio están la tabla para copiar en el examen y un chequeo rápido para detectar errores de cadena o de unidades.</li>
</ol>
</div>

<div class="caja idea">
<p class="caja-tit">El método, en 5 pasos</p>
<ol class="pasos">
<li>Volcar los datos en la tabla D1…Dn, con unidad y fuente.</li>
<li>Armar la cadena cinemática eje por eje, aunque no la pidan.</li>
<li>Calcular la geometría del diente una vez y reusar los valores.</li>
<li>Hacer Lewis solo en el par pedido: V, W<sub>t</sub>, Y, K<sub>v</sub>, σ, S<sub>t</sub>, f.</li>
<li>Verificar unidades y f ≥ 1,2; comparar la relación total con el producto de las parciales.</li>
</ol>
</div>

<div class="caja dato">
<p class="caja-tit">Antes de empezar</p>
<p>Los datos están transcriptos de las hojas digitalizadas. Si en tu copia algún número no coincide, avisá y se corrige en la hoja y acá. Las respuestas manuscritas de las fotos no siempre son correctas: la referencia es esta resolución y la hoja con resultados.</p>
</div>
`;

  /* ======================================================================
     EXAMEN 02/12/2025
     ====================================================================== */
  function examen2025() {
    var s = T`
<h2 id="examenes--e2025">Examen 02/12/2025 · Comisión B</h2>
<p class="bajada">80 minutos · A 40 pts, B 30 pts, C 30 pts. Tren con reductor sin fin-corona y cadena, Lewis del par 1–2 y reductor helicoidal de tres etapas.</p>
<p class="hojas-mini no-print">Hoja A4: <a href="#hojas" onclick="hojaAbrir('2025','blank')">en blanco</a> · <a href="#hojas" onclick="hojaAbrir('2025','res')">con resultados</a></p>

<h3>Ejercicio A · Tren del elevador (40 pts)</h3>
<p><strong>Qué pide:</strong> la geometría de los engranes 1 y 2 (m = 3), la distancia entre los centros 1 y 4 y la velocidad angular del engrane 4.</p>
`;

    s += datos([
      ['Motor', 'n<sub>m</sub> = 3000 rpm', 'Figura, motor'],
      ['Potencia', 'H = 0,75 kW = 750 W', 'Figura, motor'],
      ['Reductor sin fin-corona', 'i<sub>red</sub> = 20', 'Figura, “relación 20:1”'],
      ['Piñón de cadena (conductor)', 'z<sub>c</sub> = 21 dientes', 'Figura'],
      ['Piñón de cadena (conducido)', 'z<sub>p</sub> = 42 dientes', 'Figura'],
      ['Engrane 1', 'z<sub>1</sub> = 17 dientes', 'Figura'],
      ['Engrane 2', 'z<sub>2</sub> = 58 dientes', 'Figura'],
      ['Engrane 3', 'z<sub>3</sub> = 19 dientes', 'Figura'],
      ['Engrane 4', 'z<sub>4</sub> = 68 dientes', 'Figura'],
      ['Módulo etapa 1', 'm<sub>1</sub> = 3 mm · φ = 20°', 'Enunciado'],
      ['Módulo etapa 2', 'm<sub>2</sub> = 4 mm · φ = 20°', 'Enunciado']
    ]);

    s += '<div class="sol">';
    s += paso(1, 'Salida del reductor',
      'El motor gira a 3000 rpm y el reductor sin fin-corona divide por 20. Esa es la velocidad que entra al piñón de la cadena.',
      [['Fórmula', T`n_{red} = \frac{n_m}{i_{red}}`],
       ['Reemplazo', T`n_{red} = \frac{3000}{20}`],
       ['Resultado', T`n_{red} = 150\ \text{rpm}`]],
      'D1 (n<sub>m</sub>) y D3 (i<sub>red</sub>).');
    s += paso(2, 'Velocidad del eje 1 (cadena)',
      'La cadena va del piñón de 21 dientes al de 42. El conductor es el chico, así que la velocidad baja a la mitad.',
      [['Fórmula', T`n_1 = n_{red}\cdot\frac{z_c}{z_p}`],
       ['Reemplazo', T`n_1 = 150\cdot\frac{21}{42}`],
       ['Resultado', T`n_1 = 75\ \text{rpm}`]],
      'D4, D5 y el resultado del paso 1.');
    s += paso(3, 'Velocidad del eje 2 (par 1–2)',
      'El engrane 1, de 17 dientes, mueve al engrane 2, de 58. Es la primera etapa de engranes (m = 3).',
      [['Fórmula', T`n_2 = n_1\cdot\frac{z_1}{z_2}`],
       ['Reemplazo', T`n_2 = 75\cdot\frac{17}{58}`],
       ['Resultado', T`n_2 = 21{,}9828\ \text{rpm}`]],
      'D6, D7 y el resultado del paso 2.');
    s += paso(4, 'Velocidad del engrane 4',
      'El engrane 3 (19) está en el mismo eje que el 2, así que gira a 21,9828 rpm y mueve al engrane 4 (68). Después paso la velocidad a rad/s.',
      [['Fórmula', T`n_4 = n_2\cdot\frac{z_3}{z_4} \qquad \omega_4 = n_4\cdot\frac{2\pi}{60}`],
       ['Reemplazo', T`n_4 = 21{,}9828\cdot\frac{19}{68}`],
       ['Resultado', T`n_4 = 6{,}1422\ \text{rpm} \qquad \omega_4 = 0{,}6432\ \text{rad/s}`]],
      'D8, D9 y el resultado del paso 3.');
    s += paso(5, 'Adendo, dedendo, paso y holguras (comunes a 1 y 2)',
      'Como los dos engranes son del mismo módulo, comparten estas medidas. La holgura radial es 0,25·m y la circunferencial es p<sub>c</sub>/50 (criterio de cátedra).',
      [['Fórmula', T`a = m \qquad b = 1{,}25\,m \qquad p_c = \pi\,m`],
       ['Reemplazo', T`a = 3 \qquad b = 1{,}25\cdot 3 \qquad p_c = \pi\cdot 3`],
       ['Resultado', T`a = 3\ \text{mm} \qquad b = 3{,}75\ \text{mm} \qquad p_c = 9{,}4248\ \text{mm}`],
       ['Fórmula', T`c = 0{,}25\,m \qquad h_c = \frac{p_c}{50}`],
       ['Reemplazo', T`c = 0{,}25\cdot 3 \qquad h_c = \frac{9{,}4248}{50}`],
       ['Resultado', T`c = 0{,}75\ \text{mm} \qquad h_c = 0{,}1885\ \text{mm}`]],
      'D10 (m = 3) para todas; p<sub>c</sub> se calcula acá y se usa en h<sub>c</sub>.');
    s += paso(6, 'Diámetros del engrane 1',
      'Con D<sub>p</sub> = m·z salen el primitivo y, de ahí, el de base, el de adendo y el de dedendo.',
      [['Fórmula', T`D_p = m\,z \qquad D_b = D_p\cos\varphi`],
       ['Reemplazo', T`D_{p1} = 3\cdot 17 \qquad D_{b1} = 51\cos 20^\circ`],
       ['Resultado', T`D_{p1} = 51\ \text{mm} \qquad D_{b1} = 47{,}92\ \text{mm}`],
       ['Fórmula', T`D_e = D_p + 2m \qquad D_i = D_p - 2{,}5\,m`],
       ['Reemplazo', T`D_{e1} = 51 + 2\cdot 3 \qquad D_{i1} = 51 - 2{,}5\cdot 3`],
       ['Resultado', T`D_{e1} = 57\ \text{mm} \qquad D_{i1} = 43{,}5\ \text{mm}`]],
      'D6 (z<sub>1</sub> = 17), D10 (m = 3, φ = 20°) y el paso 5 para a y b.');
    s += paso(7, 'Diámetros del engrane 2',
      'Mismo módulo que el engrane 1, pero con 58 dientes. Ojo: los 19 dientes son del engrane 3, no de este.',
      [['Fórmula', T`D_p = m\,z \qquad D_b = D_p\cos\varphi`],
       ['Reemplazo', T`D_{p2} = 3\cdot 58 \qquad D_{b2} = 174\cos 20^\circ`],
       ['Resultado', T`D_{p2} = 174\ \text{mm} \qquad D_{b2} = 163{,}51\ \text{mm}`],
       ['Fórmula', T`D_e = D_p + 2m \qquad D_i = D_p - 2{,}5\,m`],
       ['Reemplazo', T`D_{e2} = 174 + 6 \qquad D_{i2} = 174 - 7{,}5`],
       ['Resultado', T`D_{e2} = 180\ \text{mm} \qquad D_{i2} = 166{,}5\ \text{mm}`]],
      'D7 (z<sub>2</sub> = 58), D10 y el paso 5.');
    s += paso(8, 'Distancia entre centros 1 y 4',
      'Los engranes 2 y 3 comparten eje, así que la distancia total es la suma de las dos etapas: 1–2 y 3–4.',
      [['Fórmula', T`a_{12} = \frac{D_{p1}+D_{p2}}{2} \qquad a_{34} = \frac{D_{p3}+D_{p4}}{2}`],
       ['Reemplazo', T`a_{12} = \frac{51+174}{2} \qquad a_{34} = \frac{4\cdot 19+4\cdot 68}{2}`],
       ['Resultado', T`a_{12} = 112{,}5\ \text{mm} \qquad a_{34} = 174\ \text{mm}`],
       ['Fórmula', T`C_{14} = a_{12}+a_{34}`],
       ['Resultado', T`C_{14} = 286{,}5\ \text{mm}`]],
      'Paso 6 (D<sub>p1</sub>), paso 7 (D<sub>p2</sub>), D8, D9 y D11 (m<sub>2</sub> = 4).');
    s += '</div>';

    s += '<h3>Tabla para copiar en el examen</h3>';
    s += tabla(['Ítem', 'Engrane 1', 'Engrane 2', 'Unidad'], [
      ['Adendo', '3', '3', 'mm'],
      ['Dedendo', '3,75', '3,75', 'mm'],
      ['Diámetro primitivo', '51', '174', 'mm'],
      ['Diámetro de base', '47,92', '163,51', 'mm'],
      ['Diámetro de adendo', '57', '180', 'mm'],
      ['Diámetro de dedendo', '43,5', '166,5', 'mm'],
      ['Paso circular', '9,4248', '9,4248', 'mm'],
      ['Holgura radial', '0,75', '0,75', 'mm'],
      ['Holgura circunferencial', '0,1885', '0,1885', 'mm']
    ]);
    s += res('C<sub>14</sub> = 286,5 mm · n<sub>4</sub> = 6,14 rpm · ω<sub>4</sub> = 0,643 rad/s');
    s += '<p class="aviso"><strong>Chequeo:</strong> 3000/6,14 = 488,4 y el producto de las reducciones (20 · 2 · 3,412 · 3,579) también da 488,4. Si te dio 18,75 rpm, tomaste 19 dientes para el engrane 2: son 58.</p>';

    s += caja('truco', 'La trampa de este ejercicio', '<p>El engrane 2 tiene <strong>58 dientes</strong>; los 19 son del engrane 3, que está en el mismo eje pero es de la segunda etapa. Si usás 19 para el 2 te queda D<sub>p2</sub> = 57 mm y todo lo que sigue mal. Fijate también que la segunda etapa es m = 4: el engrane 3 no tiene D<sub>p</sub> = 57 mm, tiene 76 mm.</p>');

    /* ---- B ---- */
    s += T`
<h3>Ejercicio B · Lewis del par 1–2 (30 pts)</h3>
<p><strong>Qué pide:</strong> V, W<sub>t</sub>, Y, K<sub>v</sub>, σ, S<sub>t</sub> y f<sub>seg</sub> para el par 1–2, con los datos del enunciado de B.</p>
`;
    s += datos([
      ['Par de engranes', '1–2 · m = 3 mm', 'Ejercicio A (etapa 1)'],
      ['Dientes', 'z<sub>1</sub> = 17 · z<sub>2</sub> = 58', 'Ejercicio A / figura'],
      ['Velocidad del piñón', 'n<sub>1</sub> = 75 rpm', 'Paso A2'],
      ['Diámetro primitivo', 'D<sub>p1</sub> = 51 mm', 'Paso A6'],
      ['Ancho de cara', 'F = 28 mm', 'Enunciado B'],
      ['Fabricación', 'tallado por fresadora', 'Enunciado B'],
      ['Material', 'SAE 4140 grado 1', 'Enunciado B'],
      ['Dureza', 'H<sub>B</sub> = 240', 'Enunciado B'],
      ['Potencia', 'H = 750 W', 'Ejercicio A']
    ]);

    s += '<div class="sol">';
    s += paso(1, 'Velocidad tangencial',
      'Es la velocidad de la circunferencia primitiva del engrane 1. Con D<sub>p</sub> en mm y n en rpm, el 60 000 pasa mm/min a m/s.',
      [['Fórmula', T`V = \frac{\pi\,D_{p1}\,n_1}{60\,000}`],
       ['Reemplazo', T`V = \frac{\pi\cdot 51\cdot 75}{60\,000}`],
       ['Resultado', T`V = 0{,}2003\ \text{m/s}`]],
      'D4 (D<sub>p1</sub> = 51 mm) y D3 (n<sub>1</sub> = 75 rpm).');
    s += paso(2, 'Carga tangencial',
      'Potencia = fuerza por velocidad. Como el enunciado no da rendimiento, se toma η = 100 %.',
      [['Fórmula', T`W_t = \frac{H}{V}`],
       ['Reemplazo', T`W_t = \frac{750}{0{,}2003}`],
       ['Resultado', T`W_t = 3744{,}8\ \text{N}`]],
      'D9 (H = 750 W) y el resultado del paso 1.');
    s += paso(3, 'Factor geométrico Y',
      'No se calcula: se busca en la tabla de la cátedra para φ = 20° y altura completa, con z = 17.',
      [['Tabla', T`z_1 = 17 \;\Longrightarrow\; Y = 0{,}303`]],
      'D2 (z<sub>1</sub> = 17) y tabla de Y del capítulo de Lewis.');
    s += paso(4, 'Factor dinámico K<sub>v</sub>',
      'El tallado es por fresadora, que en la tabla de la cátedra es “perfil cortado o fresado”. Por eso K<sub>v</sub> usa V, no √V.',
      [['Fórmula', T`K_v = \frac{6{,}1+V}{6{,}1}`],
       ['Reemplazo', T`K_v = \frac{6{,}1+0{,}2003}{6{,}1}`],
       ['Resultado', T`K_v = 1{,}0328`]],
      'D6 (fresadora) y el resultado del paso 1.');
    s += paso(5, 'Esfuerzo aplicado σ',
      'Es Lewis: la fuerza tangencial amplificada por K<sub>v</sub>, repartida en el ancho F, el módulo m y el factor de forma Y.',
      [['Fórmula', T`\sigma = \frac{K_v\,W_t}{F\,m\,Y}`],
       ['Reemplazo', T`\sigma = \frac{1{,}0328\cdot 3744{,}8}{28\cdot 3\cdot 0{,}303}`],
       ['Resultado', T`\sigma = \frac{3867{,}7}{25{,}452} = 151{,}96\ \text{MPa}`]],
      'D5 (F = 28), D1 (m = 3), paso 3 (Y), paso 4 (K<sub>v</sub>) y paso 2 (W<sub>t</sub>).');
    s += paso(6, 'Tensión admisible S<sub>t</sub>',
      'Sale del material y la dureza. Para el 4140 grado 1 la cátedra usa la figura 14-3 (nitrurado).',
      [['Fórmula', T`S_t = 0{,}568\,H_B + 83{,}8`],
       ['Reemplazo', T`S_t = 0{,}568\cdot 240 + 83{,}8`],
       ['Resultado', T`S_t = 220{,}12\ \text{MPa}`]],
      'D7 (4140 grado 1) y D8 (240 HB).');
    s += paso(7, 'Factor de seguridad',
      'Se compara la tensión admisible con la aplicada. El mínimo de cátedra es 1,2.',
      [['Fórmula', T`f_{seg} = \frac{S_t}{\sigma}`],
       ['Reemplazo', T`f_{seg} = \frac{220{,}12}{151{,}96}`],
       ['Resultado', T`f_{seg} = 1{,}449 \;\Rightarrow\; \text{verifica}`]],
      'Paso 6 (S<sub>t</sub>) y paso 5 (σ).');
    s += '</div>';

    s += tabla(['Ítem', 'Valor', 'Unidad'], [
      ['Velocidad tangencial', '0,2003', 'm/s'],
      ['Carga tangencial', '3744,8', 'N'],
      ['Factor geométrico', '0,303', '—'],
      ['Factor dinámico', '1,0328', '—'],
      ['Esfuerzo aplicado', '151,96', 'MPa'],
      ['Tensión admisible', '220,12', 'MPa'],
      ['Factor de seguridad', '1,45', '—']
    ]);
    s += res('σ = 151,96 MPa · S<sub>t</sub> = 220,12 MPa · f<sub>seg</sub> = 1,45 ≥ 1,2 → verifica con poco margen');
    s += '<p class="aviso"><strong>Chequeo:</strong> si usás la otra recta del 4140 (S<sub>t</sub> = 216,2 MPa), f = 1,42: la conclusión no cambia. Para que no verifique haría falta un material con S<sub>t</sub> &lt; 182 MPa (σ·1,2).</p>';

    /* ---- C ---- */
    s += T`
<h3>Ejercicio C · Reductor helicoidal de 3 etapas (30 pts)</h3>
<p><strong>Qué pide:</strong> completar m<sub>t</sub>, los seis diámetros, n<sub>s</sub>, C<sub>e</sub> y el tipo de reductor.</p>
`;
    s += datos([
      ['Velocidad de entrada', 'n<sub>e</sub> = 1000 rpm', 'Tabla del enunciado C'],
      ['Módulo normal', 'm<sub>n</sub> = 3 mm', 'Tabla del enunciado C'],
      ['Ángulo de hélice', 'ψ = 15°', 'Tabla del enunciado C'],
      ['Dientes', 'z<sub>1</sub> 21 · z<sub>2</sub> 46 · z<sub>3</sub> 23', 'Tabla del enunciado C'],
      ['Dientes', 'z<sub>4</sub> 64 · z<sub>5</sub> 17 · z<sub>6</sub> 56', 'Tabla del enunciado C']
    ]);

    s += '<div class="sol">';
    s += paso(1, 'Módulo transversal',
      'En un engrane helicoidal el módulo normal es el que se mide en el plano normal al diente; el transversal, que es el del diámetro primitivo, es mayor.',
      [['Fórmula', T`m_t = \frac{m_n}{\cos\psi}`],
       ['Reemplazo', T`m_t = \frac{3}{\cos 15^\circ}`],
       ['Resultado', T`m_t = \frac{3}{0{,}96593} = 3{,}1058\ \text{mm}`]],
      'D2 (m<sub>n</sub> = 3) y D3 (ψ = 15°).');
    s += paso(2, 'Diámetros primitivos',
      'Cada diámetro es el módulo transversal por su cantidad de dientes. Se usan los seis dientes de la tabla.',
      [['Fórmula', T`D_i = m_t\,z_i`],
       ['Reemplazo', T`D_1 = 3{,}1058\cdot 21 \qquad D_2 = 3{,}1058\cdot 46`],
       ['Resultado', T`D_1 = 65{,}22 \qquad D_2 = 142{,}87\ \text{mm}`],
       ['Reemplazo', T`D_3 = 3{,}1058\cdot 23 \qquad D_4 = 3{,}1058\cdot 64`],
       ['Resultado', T`D_3 = 71{,}43 \qquad D_4 = 198{,}77\ \text{mm}`],
       ['Reemplazo', T`D_5 = 3{,}1058\cdot 17 \qquad D_6 = 3{,}1058\cdot 56`],
       ['Resultado', T`D_5 = 52{,}80 \qquad D_6 = 173{,}93\ \text{mm}`]],
      'D4 y D5 (dientes) y el resultado del paso 1.');
    s += paso(3, 'Relación total',
      'Es el producto de las tres etapas. Cada etapa reduce en z<sub>conducido</sub>/z<sub>conductor</sub>.',
      [['Fórmula', T`i = \frac{z_2}{z_1}\cdot\frac{z_4}{z_3}\cdot\frac{z_6}{z_5}`],
       ['Reemplazo', T`i = \frac{46}{21}\cdot\frac{64}{23}\cdot\frac{56}{17}`],
       ['Resultado', T`i = 2{,}1905\cdot 2{,}7826\cdot 3{,}2941 = 20{,}08`]],
      'D4 y D5 (los seis dientes).');
    s += paso(4, 'Velocidad de salida',
      'La entrada se divide por la relación total.',
      [['Fórmula', T`n_s = \frac{n_e}{i}`],
       ['Reemplazo', T`n_s = \frac{1000}{20{,}08}`],
       ['Resultado', T`n_s = 49{,}81\ \text{rpm}`]],
      'D1 (n<sub>e</sub> = 1000) y el resultado del paso 3.');
    s += paso(5, 'Distancia entre centros',
      'Las tres etapas están en línea, así que se suman las tres distancias parciales (cada una es la semisuma de sus diámetros).',
      [['Fórmula', T`C_e = \frac{D_1+D_2}{2}+\frac{D_3+D_4}{2}+\frac{D_5+D_6}{2}`],
       ['Reemplazo', T`C_e = \frac{65{,}22+142{,}87}{2}+\frac{71{,}43+198{,}77}{2}+\frac{52{,}80+173{,}93}{2}`],
       ['Resultado', T`C_e = 104{,}04 + 135{,}10 + 113{,}36 = 352{,}51\ \text{mm}`]],
      'Los seis diámetros del paso 2.');
    s += paso(6, 'Tipo de reductor',
      'Son tres pares de engranes helicoidales con ejes paralelos, en serie.',
      [['Resultado', T`\text{helicoidal de 3 etapas}`]],
      'Figura del reductor y los pasos 1 a 5.');
    s += '</div>';

    s += tabla(['Ítem', 'Valor', 'Unidad'], [
      ['Módulo transversal m<sub>t</sub>', '3,1058', 'mm'],
      ['Diámetro engrane 1', '65,22', 'mm'],
      ['Diámetro engrane 2', '142,87', 'mm'],
      ['Diámetro engrane 3', '71,43', 'mm'],
      ['Diámetro engrane 4', '198,77', 'mm'],
      ['Diámetro engrane 5', '52,80', 'mm'],
      ['Diámetro engrane 6', '173,93', 'mm'],
      ['Velocidad de salida n<sub>s</sub>', '49,81', 'rpm'],
      ['Distancia entre centros C<sub>e</sub>', '352,51', 'mm'],
      ['Tipo de reductor', 'helicoidal de 3 etapas', '—']
    ]);
    s += res('m<sub>t</sub> = 3,1058 mm · i = 20,08 · n<sub>s</sub> = 49,81 rpm · C<sub>e</sub> = 352,51 mm');
    s += '<p class="aviso"><strong>Chequeo:</strong> la suma de dientes es 21 + 46 + 23 + 64 + 17 + 56 = 227. La distancia total también es m<sub>t</sub>·227/2 = 3,1058·113,5 = 352,5 mm: el atajo confirma los seis diámetros.</p>';

    return s;
  }

  /* ======================================================================
     EXAMEN 22/11/2022
     ====================================================================== */
  function examen2022() {
    var s = T`
<h2 id="examenes--e2022">Examen 22/11/2022</h2>
<p class="bajada">60 minutos · A 60 pts, B 40 pts. Tren de cinco ruedas con engrane intermedio y Lewis del par D–E. No hay reductor helicoidal.</p>
<p class="hojas-mini no-print">Hoja A4: <a href="#hojas" onclick="hojaAbrir('2022','blank')">en blanco</a> · <a href="#hojas" onclick="hojaAbrir('2022','res')">con resultados</a></p>

<h3>Ejercicio A · Tren A-B-C-D-E (60 pts)</h3>
<p><strong>Qué pide:</strong> geometría de A y B (m = 3), distancia entre los centros 1 y 4 y velocidad angular de E.</p>
`;
    s += datos([
      ['Velocidad de A', 'n<sub>A</sub> = 1200 rpm', 'Enunciado A'],
      ['Etapa 1', 'm = 3 mm · φ = 20°', 'Enunciado A'],
      ['Etapa 2', 'm = 4 mm · φ = 20°', 'Enunciado A'],
      ['Engrane A', 'z<sub>A</sub> = 20 dientes', 'Figura'],
      ['Engrane B', 'z<sub>B</sub> = 70 dientes', 'Figura'],
      ['Engrane C', 'z<sub>C</sub> = 18 dientes', 'Figura'],
      ['Engrane D', 'z<sub>D</sub> = 22 dientes', 'Figura'],
      ['Engrane E', 'z<sub>E</sub> = 54 dientes', 'Figura']
    ]);

    s += '<div class="sol">';
    s += paso(1, 'Diámetros primitivos de A y B',
      'Los dos son de m = 3; el primitivo sale de multiplicar módulo por dientes.',
      [['Fórmula', T`D_p = m\,z`],
       ['Reemplazo', T`D_{pA} = 3\cdot 20 \qquad D_{pB} = 3\cdot 70`],
       ['Resultado', T`D_{pA} = 60\ \text{mm} \qquad D_{pB} = 210\ \text{mm}`]],
      'D2 (m = 3), D4 y D5.');
    s += paso(2, 'Diámetros de base de A y B',
      'El de base es el primitivo por el coseno del ángulo de presión.',
      [['Fórmula', T`D_b = D_p\cos\varphi`],
       ['Reemplazo', T`D_{bA} = 60\cos 20^\circ \qquad D_{bB} = 210\cos 20^\circ`],
       ['Resultado', T`D_{bA} = 56{,}38\ \text{mm} \qquad D_{bB} = 197{,}34\ \text{mm}`]],
      'Paso 1 y D2 (φ = 20°).');
    s += paso(3, 'Adendo, dedendo, paso y holguras (comunes a A y B)',
      'Mismo módulo, mismas medidas para los dos. La holgura radial es 0,25·m y la circunferencial p<sub>c</sub>/50.',
      [['Fórmula', T`a = m \qquad b = 1{,}25\,m \qquad p_c = \pi\,m`],
       ['Reemplazo', T`a = 3 \qquad b = 1{,}25\cdot 3 \qquad p_c = \pi\cdot 3`],
       ['Resultado', T`a = 3\ \text{mm} \qquad b = 3{,}75\ \text{mm} \qquad p_c = 9{,}4248\ \text{mm}`],
       ['Fórmula', T`c = 0{,}25\,m \qquad h_c = \frac{p_c}{50}`],
       ['Resultado', T`c = 0{,}75\ \text{mm} \qquad h_c = 0{,}1885\ \text{mm}`]],
      'D2 (m = 3) y el p<sub>c</sub> calculado acá.');
    s += paso(4, 'Diámetros de adendo y dedendo de A y B',
      'El de adendo suma 2m al primitivo; el de dedendo resta 2,5m.',
      [['Fórmula', T`D_e = D_p + 2m \qquad D_i = D_p - 2{,}5\,m`],
       ['Reemplazo', T`D_{eA} = 60 + 6 \qquad D_{eB} = 210 + 6`],
       ['Resultado', T`D_{eA} = 66\ \text{mm} \qquad D_{eB} = 216\ \text{mm}`],
       ['Reemplazo', T`D_{iA} = 60 - 7{,}5 \qquad D_{iB} = 210 - 7{,}5`],
       ['Resultado', T`D_{iA} = 52{,}5\ \text{mm} \qquad D_{iB} = 202{,}5\ \text{mm}`]],
      'Paso 1 y D2 (m = 3).');
    s += paso(5, 'Velocidad de B',
      'A (20) mueve a B (70). B y C están en el mismo eje, así que C gira a la misma velocidad que B.',
      [['Fórmula', T`n_B = n_A\cdot\frac{z_A}{z_B}`],
       ['Reemplazo', T`n_B = 1200\cdot\frac{20}{70}`],
       ['Resultado', T`n_B = 342{,}86\ \text{rpm}`]],
      'D1, D4 y D5.');
    s += paso(6, 'Velocidad de D',
      'C (18) mueve a D (22). D es un engrane intermedio: engrana con C y con E.',
      [['Fórmula', T`n_D = n_B\cdot\frac{z_C}{z_D}`],
       ['Reemplazo', T`n_D = 342{,}86\cdot\frac{18}{22}`],
       ['Resultado', T`n_D = 280{,}52\ \text{rpm}`]],
      'D6, D7 y el resultado del paso 5.');
    s += paso(7, 'Velocidad de E y velocidad angular',
      'D (22) mueve a E (54). Los 22 dientes de D aparecen en el numerador y en el denominador, así que se cancelan: n<sub>E</sub> = n<sub>B</sub>·18/54.',
      [['Fórmula', T`n_E = n_D\cdot\frac{z_D}{z_E} = n_B\cdot\frac{z_C}{z_E}`],
       ['Reemplazo', T`n_E = 280{,}52\cdot\frac{22}{54}`],
       ['Resultado', T`n_E = 114{,}29\ \text{rpm}`],
       ['Fórmula', T`\omega_E = n_E\cdot\frac{2\pi}{60}`],
       ['Resultado', T`\omega_E = 11{,}97\ \text{rad/s}`]],
      'D7, D8 y el resultado del paso 6.');
    s += paso(8, 'Distancia entre centros 1 y 4',
      'Las tres etapas están alineadas: A–B, C–D y D–E. Las distancias se suman.',
      [['Fórmula', T`a_{AB} = \frac{D_{pA}+D_{pB}}{2} \qquad a_{CD} = \frac{D_{pC}+D_{pD}}{2} \qquad a_{DE} = \frac{D_{pD}+D_{pE}}{2}`],
       ['Reemplazo', T`a_{AB} = \frac{60+210}{2} \qquad a_{CD} = \frac{4\cdot 18+4\cdot 22}{2} \qquad a_{DE} = \frac{4\cdot 22+4\cdot 54}{2}`],
       ['Resultado', T`a_{AB} = 135 \qquad a_{CD} = 80 \qquad a_{DE} = 152\ \text{mm}`],
       ['Fórmula', T`C_{14} = 135+80+152`],
       ['Resultado', T`C_{14} = 367\ \text{mm}`]],
      'Paso 1 (D<sub>pA</sub>, D<sub>pB</sub>), D6, D7, D8 y D3 (m = 4).');
    s += '</div>';

    s += tabla(['Ítem', 'Engrane A', 'Engrane B', 'Unidad'], [
      ['Adendo', '3', '3', 'mm'],
      ['Dedendo', '3,75', '3,75', 'mm'],
      ['Diámetro primitivo', '60', '210', 'mm'],
      ['Diámetro de base', '56,38', '197,34', 'mm'],
      ['Diámetro de adendo', '66', '216', 'mm'],
      ['Diámetro de dedendo', '52,5', '202,5', 'mm'],
      ['Paso circular', '9,4248', '9,4248', 'mm'],
      ['Holgura radial', '0,75', '0,75', 'mm'],
      ['Holgura circunferencial', '0,1885', '0,1885', 'mm']
    ]);
    s += res('C<sub>14</sub> = 367 mm · n<sub>E</sub> = 114,29 rpm · ω<sub>E</sub> = 11,97 rad/s');
    s += '<p class="aviso"><strong>Chequeo:</strong> 1200/114,29 = 10,5 y el producto (70/20)·(22/18)·(54/22) = 10,5. D se cancela por ser intermedio: en la cuenta tiene que aparecer una vez arriba y otra abajo.</p>';

    s += caja('truco', 'La trampa de este ejercicio', '<p>D no es una etapa más: es un engrane intermedio entre C y E. Por eso sus 22 dientes se cancelan y la relación total es (70/20)·(18/54), sin el 22. Si en la cuenta te quedó un 22 suelto, revisá.</p>');

    /* ---- B ---- */
    s += T`
<h3>Ejercicio B · Lewis del par D–E (40 pts)</h3>
<p><strong>Qué pide:</strong> V, W<sub>t</sub>, Y, K<sub>v</sub>, σ, S<sub>t</sub> y f<sub>seg</sub> para el par D–E.</p>
`;
    s += datos([
      ['Par de engranes', 'D–E · m = 4 mm', 'Ejercicio A (etapa 2)'],
      ['Dientes', 'z<sub>D</sub> = 22 · z<sub>E</sub> = 54', 'Figura'],
      ['Velocidad de D', 'n<sub>D</sub> = 280,52 rpm', 'Paso A6'],
      ['Diámetro primitivo', 'D<sub>pD</sub> = 88 mm', 'Ejercicio A'],
      ['Ancho de cara', 'F = 28 mm', 'Enunciado B'],
      ['Fabricación', 'tallado por fresa madre', 'Enunciado B'],
      ['Material', 'SAE 4140 g1 nitrurado', 'Enunciado B'],
      ['Dureza', 'H<sub>B</sub> = 275', 'Enunciado B'],
      ['Potencia', 'H = 2 kW = 2000 W', 'Enunciado B']
    ]);

    s += '<div class="sol">';
    s += paso(1, 'Velocidad tangencial',
      'Se calcula en D; en E da lo mismo porque la circunferencia primitiva tiene la misma velocidad.',
      [['Fórmula', T`V = \frac{\pi\,D_{pD}\,n_D}{60\,000}`],
       ['Reemplazo', T`V = \frac{\pi\cdot 88\cdot 280{,}52}{60\,000}`],
       ['Resultado', T`V = 1{,}2925\ \text{m/s}`]],
      'D4 (D<sub>pD</sub> = 88) y D3 (n<sub>D</sub> = 280,52).');
    s += paso(2, 'Carga tangencial',
      'Con η = 100 %, la potencia se reparte entre fuerza y velocidad.',
      [['Fórmula', T`W_t = \frac{H}{V}`],
       ['Reemplazo', T`W_t = \frac{2000}{1{,}2925}`],
       ['Resultado', T`W_t = 1547{,}3\ \text{N}`]],
      'D9 (H = 2000 W) y el paso 1.');
    s += paso(3, 'Factor geométrico Y',
      'Para z<sub>D</sub> = 22, de tabla.',
      [['Tabla', T`z_D = 22 \;\Longrightarrow\; Y = 0{,}331`]],
      'D2 y la tabla de Y.');
    s += paso(4, 'Factor dinámico K<sub>v</sub>',
      'Fresa madre = “generado con fresa madre”: usa la raíz de V.',
      [['Fórmula', T`K_v = \frac{3{,}56+\sqrt{V}}{3{,}56}`],
       ['Reemplazo', T`K_v = \frac{3{,}56+\sqrt{1{,}2925}}{3{,}56}`],
       ['Resultado', T`K_v = \frac{3{,}56+1{,}1369}{3{,}56} = 1{,}3194`]],
      'D6 (fresa madre) y el paso 1.');
    s += paso(5, 'Esfuerzo aplicado σ',
      'Lewis con el ancho y el módulo del par D–E.',
      [['Fórmula', T`\sigma = \frac{K_v\,W_t}{F\,m\,Y}`],
       ['Reemplazo', T`\sigma = \frac{1{,}3194\cdot 1547{,}3}{28\cdot 4\cdot 0{,}331}`],
       ['Resultado', T`\sigma = \frac{2041{,}5}{37{,}072} = 55{,}07\ \text{MPa}`]],
      'D5 (F = 28), D1 (m = 4), paso 3 (Y), paso 4 (K<sub>v</sub>) y paso 2 (W<sub>t</sub>).');
    s += paso(6, 'Tensión admisible S<sub>t</sub>',
      '4140 grado 1 nitrurado, 275 HB: figura 14-3.',
      [['Fórmula', T`S_t = 0{,}568\,H_B + 83{,}8`],
       ['Reemplazo', T`S_t = 0{,}568\cdot 275 + 83{,}8`],
       ['Resultado', T`S_t = 240{,}0\ \text{MPa}`]],
      'D7 y D8.');
    s += paso(7, 'Factor de seguridad',
      'Cociente entre admisible y aplicada.',
      [['Fórmula', T`f_{seg} = \frac{S_t}{\sigma}`],
       ['Reemplazo', T`f_{seg} = \frac{240{,}0}{55{,}07}`],
       ['Resultado', T`f_{seg} = 4{,}36`]],
      'Paso 6 y paso 5.');
    s += '</div>';

    s += tabla(['Ítem', 'Valor', 'Unidad'], [
      ['Velocidad tangencial', '1,2925', 'm/s'],
      ['Carga tangencial', '1547,3', 'N'],
      ['Factor geométrico', '0,331', '—'],
      ['Factor dinámico', '1,3194', '—'],
      ['Esfuerzo aplicado', '55,07', 'MPa'],
      ['Tensión admisible', '240,0', 'MPa'],
      ['Factor de seguridad', '4,36', '—']
    ]);
    s += res('σ = 55,07 MPa · S<sub>t</sub> = 240 MPa · f<sub>seg</sub> = 4,36 → sobra material');
    s += '<p class="aviso"><strong>Chequeo:</strong> con 0,75 kW en vez de 2 kW, σ baja a 20,7 MPa y f sube a 11,6: si te dio eso, la potencia está mal. La del examen es 2 kW.</p>';
    return s;
  }

  /* ======================================================================
     RECUPERATORIO 17/03/2026
     ====================================================================== */
  function examen2026() {
    var s = T`
<h2 id="examenes--e2026">Recuperatorio 17/03/2026 · Comisión B</h2>
<p class="bajada">70 minutos · A 40 pts, B 30 pts, C 30 pts. Ojo con los datos: motor 1800 rpm, cadena ANSI 60 y engranes 15/52 y 19/76.</p>
<p class="hojas-mini no-print">Hoja A4: <a href="#hojas" onclick="hojaAbrir('2026','blank')">en blanco</a> · <a href="#hojas" onclick="hojaAbrir('2026','res')">con resultados</a></p>

<h3>Ejercicio A · Tren con poleas y cadena (40 pts)</h3>
<p><strong>Qué pide:</strong> geometría de los engranes 1 y 2 (m = 2,5), distancia entre los centros 1 y 4 y velocidad angular del engrane 4.</p>
`;
    s += datos([
      ['Motor', 'n<sub>m</sub> = 1800 rpm', 'Figura, motor'],
      ['Potencia', 'H = 1 kW = 1000 W', 'Figura, motor'],
      ['Polea del motor', 'D<sub>1p</sub> = 120 mm', 'Figura, polea trapezoidal'],
      ['Polea conducida', 'D<sub>2p</sub> = 170 mm', 'Figura, polea trapezoidal'],
      ['Piñón de cadena', 'z<sub>c</sub> = 17 dientes', 'Figura'],
      ['Rueda de cadena', 'z<sub>p</sub> = 42 dientes', 'Figura'],
      ['Engrane 1', 'z<sub>1</sub> = 15 dientes', 'Figura'],
      ['Engrane 2', 'z<sub>2</sub> = 52 dientes', 'Figura'],
      ['Engrane 3', 'z<sub>3</sub> = 19 dientes', 'Figura'],
      ['Engrane 4', 'z<sub>4</sub> = 76 dientes', 'Figura'],
      ['Módulo etapa 1', 'm<sub>1</sub> = 2,5 mm · φ = 20°', 'Enunciado'],
      ['Módulo etapa 2', 'm<sub>2</sub> = 4 mm · φ = 20°', 'Enunciado']
    ]);

    s += '<div class="sol">';
    s += paso(1, 'Velocidad de la polea conducida',
      'La polea del motor es la de 120 mm y la conducida la de 170 mm. Es la primera reducción.',
      [['Fórmula', T`n_{polea} = n_m\cdot\frac{D_{1p}}{D_{2p}}`],
       ['Reemplazo', T`n_{polea} = 1800\cdot\frac{120}{170}`],
       ['Resultado', T`n_{polea} = 1270{,}59\ \text{rpm}`]],
      'D1, D3 y D4.');
    s += paso(2, 'Velocidad del eje 1 (cadena)',
      'El piñón de 17 dientes mueve a la rueda de 42: segunda reducción antes de los engranes.',
      [['Fórmula', T`n_1 = n_{polea}\cdot\frac{z_c}{z_p}`],
       ['Reemplazo', T`n_1 = 1270{,}59\cdot\frac{17}{42}`],
       ['Resultado', T`n_1 = 514{,}29\ \text{rpm}`]],
      'D5, D6 y el paso 1.');
    s += paso(3, 'Velocidad del eje 2',
      'El engrane 1 (15) mueve al 2 (52). Es la primera etapa de engranes.',
      [['Fórmula', T`n_2 = n_1\cdot\frac{z_1}{z_2}`],
       ['Reemplazo', T`n_2 = 514{,}29\cdot\frac{15}{52}`],
       ['Resultado', T`n_2 = 148{,}35\ \text{rpm}`]],
      'D7, D8 y el paso 2.');
    s += paso(4, 'Velocidad del engrane 4 y ω<sub>4</sub>',
      'El engrane 3 (19), en el eje del 2, mueve al 4 (76). Después paso a rad/s.',
      [['Fórmula', T`n_4 = n_2\cdot\frac{z_3}{z_4} \qquad \omega_4 = n_4\cdot\frac{2\pi}{60}`],
       ['Reemplazo', T`n_4 = 148{,}35\cdot\frac{19}{76}`],
       ['Resultado', T`n_4 = 37{,}09\ \text{rpm} \qquad \omega_4 = 3{,}884\ \text{rad/s}`]],
      'D9, D10 y el paso 3.');
    s += paso(5, 'Adendo, dedendo, paso y holguras (comunes a 1 y 2)',
      'Mismo módulo (2,5) para los dos. La holgura radial es 0,25·m y la circunferencial p<sub>c</sub>/50.',
      [['Fórmula', T`a = m \qquad b = 1{,}25\,m \qquad p_c = \pi\,m`],
       ['Reemplazo', T`a = 2{,}5 \qquad b = 1{,}25\cdot 2{,}5 \qquad p_c = \pi\cdot 2{,}5`],
       ['Resultado', T`a = 2{,}5 \qquad b = 3{,}125 \qquad p_c = 7{,}854\ \text{mm}`],
       ['Fórmula', T`c = 0{,}25\,m \qquad h_c = \frac{p_c}{50}`],
       ['Resultado', T`c = 0{,}625\ \text{mm} \qquad h_c = 0{,}1571\ \text{mm}`]],
      'D11 (m = 2,5) y el p<sub>c</sub> calculado acá.');
    s += paso(6, 'Diámetros del engrane 1',
      'Con D<sub>p</sub> = m·z y las fórmulas de adendo/dedendo.',
      [['Fórmula', T`D_p = m\,z \qquad D_b = D_p\cos\varphi`],
       ['Reemplazo', T`D_{p1} = 2{,}5\cdot 15 \qquad D_{b1} = 37{,}5\cos 20^\circ`],
       ['Resultado', T`D_{p1} = 37{,}5 \qquad D_{b1} = 35{,}24\ \text{mm}`],
       ['Fórmula', T`D_e = D_p+2m \qquad D_i = D_p-2{,}5\,m`],
       ['Resultado', T`D_{e1} = 42{,}5 \qquad D_{i1} = 31{,}25\ \text{mm}`]],
      'D7 (z<sub>1</sub> = 15), D11 y el paso 5.');
    s += paso(7, 'Diámetros del engrane 2',
      'Mismo módulo, 52 dientes.',
      [['Fórmula', T`D_p = m\,z \qquad D_b = D_p\cos\varphi`],
       ['Reemplazo', T`D_{p2} = 2{,}5\cdot 52 \qquad D_{b2} = 130\cos 20^\circ`],
       ['Resultado', T`D_{p2} = 130 \qquad D_{b2} = 122{,}16\ \text{mm}`],
       ['Fórmula', T`D_e = D_p+2m \qquad D_i = D_p-2{,}5\,m`],
       ['Resultado', T`D_{e2} = 135 \qquad D_{i2} = 123{,}75\ \text{mm}`]],
      'D8 (z<sub>2</sub> = 52), D11 y el paso 5.');
    s += paso(8, 'Distancia entre centros 1 y 4',
      'Engranes 2 y 3 en el mismo eje: se suman las dos etapas.',
      [['Fórmula', T`a_{12} = \frac{D_{p1}+D_{p2}}{2} \qquad a_{34} = \frac{D_{p3}+D_{p4}}{2}`],
       ['Reemplazo', T`a_{12} = \frac{37{,}5+130}{2} \qquad a_{34} = \frac{4\cdot 19+4\cdot 76}{2}`],
       ['Resultado', T`a_{12} = 83{,}75 \qquad a_{34} = 190\ \text{mm}`],
       ['Fórmula', T`C_{14} = 83{,}75+190`],
       ['Resultado', T`C_{14} = 273{,}75\ \text{mm}`]],
      'Pasos 6 y 7, D9, D10 y D12 (m = 4).');
    s += '</div>';

    s += tabla(['Ítem', 'Engrane 1', 'Engrane 2', 'Unidad'], [
      ['Adendo', '2,5', '2,5', 'mm'],
      ['Dedendo', '3,125', '3,125', 'mm'],
      ['Diámetro primitivo', '37,5', '130', 'mm'],
      ['Diámetro de base', '35,24', '122,16', 'mm'],
      ['Diámetro de adendo', '42,5', '135', 'mm'],
      ['Diámetro de dedendo', '31,25', '123,75', 'mm'],
      ['Paso circular', '7,854', '7,854', 'mm'],
      ['Holgura radial', '0,625', '0,625', 'mm'],
      ['Holgura circunferencial', '0,1571', '0,1571', 'mm']
    ]);
    s += res('C<sub>14</sub> = 273,75 mm · n<sub>4</sub> = 37,09 rpm · ω<sub>4</sub> = 3,884 rad/s');
    s += '<p class="aviso"><strong>Chequeo:</strong> 1800/37,09 = 48,5 y el producto de las reducciones (170/120)·(42/17)·(52/15)·(76/19) = 48,5. Si te falta una reducción, el resultado se va al doble o a la mitad.</p>';

    s += caja('truco', 'Los datos que cambian todo', '<p>Motor <strong>1800 rpm</strong> (no 1500), engrane 1 de <strong>15 dientes</strong> (no 13) y engrane 4 de <strong>76</strong> (no 78). La cadena es <strong>ANSI 60</strong>. Con 1500/13/78 los números no cierran con la tabla del examen.</p>');

    /* ---- B ---- */
    s += T`
<h3>Ejercicio B · Lewis del par 1–2 (30 pts)</h3>
<p><strong>Qué pide:</strong> V, W<sub>t</sub>, Y, K<sub>v</sub>, σ, S<sub>t</sub> y f<sub>seg</sub> para el par 1–2.</p>
`;
    s += datos([
      ['Par de engranes', '1–2 · m = 2,5 mm', 'Ejercicio A'],
      ['Dientes', 'z<sub>1</sub> = 15 · z<sub>2</sub> = 52', 'Ejercicio A'],
      ['Velocidad del piñón', 'n<sub>1</sub> = 514,29 rpm', 'Paso A2'],
      ['Diámetro primitivo', 'D<sub>p1</sub> = 37,5 mm', 'Paso A6'],
      ['Ancho de cara', 'F = 25 mm', 'Enunciado B'],
      ['Fabricación', 'tallado por fresadora', 'Enunciado B'],
      ['Material', 'acero grado 1 endurecido', 'Enunciado B'],
      ['Dureza', 'H<sub>B</sub> = 240', 'Enunciado B'],
      ['Potencia', 'H = 1000 W', 'Ejercicio A']
    ]);

    s += '<div class="sol">';
    s += paso(1, 'Velocidad tangencial',
      'Circunferencia primitiva del piñón: D<sub>p</sub> en mm y n en rpm → dividir por 60 000.',
      [['Fórmula', T`V = \frac{\pi\,D_{p1}\,n_1}{60\,000}`],
       ['Reemplazo', T`V = \frac{\pi\cdot 37{,}5\cdot 514{,}29}{60\,000}`],
       ['Resultado', T`V = 1{,}0098\ \text{m/s}`]],
      'D4 y D3.');
    s += paso(2, 'Carga tangencial',
      'Con η = 100 %.',
      [['Fórmula', T`W_t = \frac{H}{V}`],
       ['Reemplazo', T`W_t = \frac{1000}{1{,}0098}`],
       ['Resultado', T`W_t = 990{,}3\ \text{N}`]],
      'D9 y el paso 1.');
    s += paso(3, 'Factor geométrico Y',
      'Para z<sub>1</sub> = 15, de tabla.',
      [['Tabla', T`z_1 = 15 \;\Longrightarrow\; Y = 0{,}290`]],
      'D2 y la tabla de Y.');
    s += paso(4, 'Factor dinámico K<sub>v</sub>',
      'Tallado por fresadora: usa V (no √V).',
      [['Fórmula', T`K_v = \frac{6{,}1+V}{6{,}1}`],
       ['Reemplazo', T`K_v = \frac{6{,}1+1{,}0098}{6{,}1}`],
       ['Resultado', T`K_v = 1{,}1655`]],
      'D6 y el paso 1.');
    s += paso(5, 'Esfuerzo aplicado σ',
      'Lewis con el ancho de 25 mm y el módulo de 2,5 mm.',
      [['Fórmula', T`\sigma = \frac{K_v\,W_t}{F\,m\,Y}`],
       ['Reemplazo', T`\sigma = \frac{1{,}1655\cdot 990{,}3}{25\cdot 2{,}5\cdot 0{,}290}`],
       ['Resultado', T`\sigma = \frac{1154{,}2}{18{,}125} = 63{,}68\ \text{MPa}`]],
      'D5, D1, paso 3, paso 4 y paso 2.');
    s += paso(6, 'Tensión admisible S<sub>t</sub>',
      'Acero grado 1 completamente endurecido, 240 HB: figura 14-2.',
      [['Fórmula', T`S_t = 0{,}533\,H_B + 88{,}3`],
       ['Reemplazo', T`S_t = 0{,}533\cdot 240 + 88{,}3`],
       ['Resultado', T`S_t = 216{,}22\ \text{MPa}`]],
      'D7 y D8.');
    s += paso(7, 'Factor de seguridad',
      'Cociente entre admisible y aplicada.',
      [['Fórmula', T`f_{seg} = \frac{S_t}{\sigma}`],
       ['Reemplazo', T`f_{seg} = \frac{216{,}22}{63{,}68}`],
       ['Resultado', T`f_{seg} = 3{,}40`]],
      'Paso 6 y paso 5.');
    s += '</div>';

    s += tabla(['Ítem', 'Valor', 'Unidad'], [
      ['Velocidad tangencial', '1,0098', 'm/s'],
      ['Carga tangencial', '990,3', 'N'],
      ['Factor geométrico', '0,290', '—'],
      ['Factor dinámico', '1,1655', '—'],
      ['Esfuerzo aplicado', '63,68', 'MPa'],
      ['Tensión admisible', '216,22', 'MPa'],
      ['Factor de seguridad', '3,40', '—']
    ]);
    s += res('σ = 63,68 MPa · S<sub>t</sub> = 216,22 MPa · f<sub>seg</sub> = 3,40 → verifica con margen');
    s += '<p class="aviso"><strong>Chequeo:</strong> Y para 15 dientes es 0,290; 0,261 es el de 13. Si usás 0,261, σ sube a 70,7 MPa y f baja a 3,06: el dato correcto es 0,290.</p>';

    /* ---- C ---- */
    s += T`
<h3>Ejercicio C · Reductor helicoidal de 3 etapas (30 pts)</h3>
<p><strong>Qué pide:</strong> m<sub>t</sub>, los seis diámetros, n<sub>s</sub>, C<sub>e</sub> y el tipo de reductor.</p>
`;
    s += datos([
      ['Velocidad de entrada', 'n<sub>e</sub> = 1200 rpm', 'Tabla del enunciado C'],
      ['Módulo normal', 'm<sub>n</sub> = 4 mm', 'Tabla del enunciado C'],
      ['Ángulo de hélice', 'ψ = 12°', 'Tabla del enunciado C'],
      ['Dientes', 'z<sub>1</sub> 17 · z<sub>2</sub> 64 · z<sub>3</sub> 23', 'Tabla del enunciado C'],
      ['Dientes', 'z<sub>4</sub> 46 · z<sub>5</sub> 17 · z<sub>6</sub> 52', 'Tabla del enunciado C']
    ]);

    s += '<div class="sol">';
    s += paso(1, 'Módulo transversal',
      'El normal se mide en el plano normal al diente; el transversal es el del diámetro primitivo.',
      [['Fórmula', T`m_t = \frac{m_n}{\cos 12^\circ}`],
       ['Reemplazo', T`m_t = \frac{4}{0{,}97815}`],
       ['Resultado', T`m_t = 4{,}0894\ \text{mm}`]],
      'D2 y D3.');
    s += paso(2, 'Diámetros primitivos',
      'Cada uno es m<sub>t</sub> por sus dientes.',
      [['Fórmula', T`D_i = m_t\,z_i`],
       ['Reemplazo', T`D_1 = 4{,}0894\cdot 17 \qquad D_2 = 4{,}0894\cdot 64`],
       ['Resultado', T`D_1 = 69{,}52 \qquad D_2 = 261{,}72\ \text{mm}`],
       ['Reemplazo', T`D_3 = 4{,}0894\cdot 23 \qquad D_4 = 4{,}0894\cdot 46`],
       ['Resultado', T`D_3 = 94{,}06 \qquad D_4 = 188{,}11\ \text{mm}`],
       ['Reemplazo', T`D_5 = 4{,}0894\cdot 17 \qquad D_6 = 4{,}0894\cdot 52`],
       ['Resultado', T`D_5 = 69{,}52 \qquad D_6 = 212{,}65\ \text{mm}`]],
      'D4, D5 y el paso 1.');
    s += paso(3, 'Relación total',
      'Producto de las tres etapas.',
      [['Fórmula', T`i = \frac{z_2}{z_1}\cdot\frac{z_4}{z_3}\cdot\frac{z_6}{z_5}`],
       ['Reemplazo', T`i = \frac{64}{17}\cdot\frac{46}{23}\cdot\frac{52}{17}`],
       ['Resultado', T`i = 3{,}7647\cdot 2\cdot 3{,}0588 = 23{,}03`]],
      'D4 y D5.');
    s += paso(4, 'Velocidad de salida',
      'Entrada dividida por la relación total.',
      [['Fórmula', T`n_s = \frac{n_e}{i}`],
       ['Reemplazo', T`n_s = \frac{1200}{23{,}03}`],
       ['Resultado', T`n_s = 52{,}10\ \text{rpm}`]],
      'D1 y el paso 3.');
    s += paso(5, 'Distancia entre centros',
      'Suma de las tres distancias parciales.',
      [['Fórmula', T`C_e = \frac{D_1+D_2}{2}+\frac{D_3+D_4}{2}+\frac{D_5+D_6}{2}`],
       ['Reemplazo', T`C_e = \frac{69{,}52+261{,}72}{2}+\frac{94{,}06+188{,}11}{2}+\frac{69{,}52+212{,}65}{2}`],
       ['Resultado', T`C_e = 165{,}62 + 141{,}09 + 141{,}08 = 447{,}79\ \text{mm}`]],
      'Los seis diámetros del paso 2.');
    s += paso(6, 'Tipo de reductor',
      'Tres pares helicoidales con ejes paralelos, en serie.',
      [['Resultado', T`\text{helicoidal de 3 etapas}`]],
      'Figura y pasos anteriores.');
    s += '</div>';

    s += tabla(['Ítem', 'Valor', 'Unidad'], [
      ['Módulo transversal m<sub>t</sub>', '4,0894', 'mm'],
      ['Diámetro engrane 1', '69,52', 'mm'],
      ['Diámetro engrane 2', '261,72', 'mm'],
      ['Diámetro engrane 3', '94,06', 'mm'],
      ['Diámetro engrane 4', '188,11', 'mm'],
      ['Diámetro engrane 5', '69,52', 'mm'],
      ['Diámetro engrane 6', '212,65', 'mm'],
      ['Velocidad de salida n<sub>s</sub>', '52,10', 'rpm'],
      ['Distancia entre centros C<sub>e</sub>', '447,79', 'mm'],
      ['Tipo de reductor', 'helicoidal de 3 etapas', '—']
    ]);
    s += res('m<sub>t</sub> = 4,0894 mm · i = 23,03 · n<sub>s</sub> = 52,10 rpm · C<sub>e</sub> = 447,79 mm');
    s += '<p class="aviso"><strong>Chequeo:</strong> suma de dientes = 17 + 64 + 23 + 46 + 17 + 52 = 219. La distancia también es m<sub>t</sub>·219/2 = 4,0894·109,5 = 447,8 mm.</p>';
    return s;
  }

  function cierre() {
    return T`
<h2>Cómo se reparten los puntos y qué mirar primero</h2>
<div class="tabla-wrap">
<table class="tec compacta">
<thead><tr><th>Examen</th><th class="num">A</th><th class="num">B</th><th class="num">C</th><th class="num">Total</th><th>Tiempo</th></tr></thead>
<tbody>
<tr><td>02/12/2025</td><td class="num">40</td><td class="num">30</td><td class="num">30</td><td class="num">100</td><td>80 min</td></tr>
<tr><td>22/11/2022</td><td class="num">60</td><td class="num">40</td><td class="num">—</td><td class="num">100</td><td>60 min</td></tr>
<tr><td>17/03/2026 (recup.)</td><td class="num">40</td><td class="num">30</td><td class="num">30</td><td class="num">100</td><td>70 min</td></tr>
</tbody>
</table>
</div>
<p>El A siempre vale más y es el más largo: geometría de dos ruedas + cadena cinemática + distancia entre centros. El B es corto pero acumula puntajes chicos (V, W<sub>t</sub>, Y, K<sub>v</sub>, σ, S<sub>t</sub>, f), así que conviene hacerlo completo. El C es el más “de tabla”: si sabés m<sub>t</sub> = m<sub>n</sub>/cos ψ y sumás las tres distancias, son 30 puntos casi regalados.</p>

<div class="caja truco">
<p class="caja-tit">Los cinco errores que más cuestan</p>
<ol class="pasos">
<li><strong>Confundir el número de dientes</strong> de dos ruedas del mismo eje (58 vs 19 en diciembre; 22 vs 54 en el de 2022).</li>
<li><strong>Usar m<sub>n</sub> en lugar de m<sub>t</sub></strong> en los diámetros de un helicoidal.</li>
<li><strong>Olvidar una reducción previa</strong> (polea o cadena) y arrastrar el error a todo el B.</li>
<li><strong>Poner V en mm/s o W<sub>t</sub> en kN</strong>: el número puede estar bien y la unidad mal, y el examen descuenta igual.</li>
<li><strong>No verificar f<sub>seg</sub> ≥ 1,2</strong>: el número solo no alcanza, hay que decir si verifica o no.</li>
</ol>
</div>
`;
  }

  window.CAPITULOS.push({
    id: "examenes",
    grupo: "7 · Exámenes resueltos",
    titulo: "Exámenes resueltos (3)",
    html: H + examen2025() + examen2022() + examen2026() + cierre()
  });
})();
