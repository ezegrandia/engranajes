/* =========================================================================
   CONTENIDO · 3b. PRÁCTICOS RESUELTOS (parte 2)
   Capítulos: ej3, ej4, extras
   ========================================================================= */
window.CAPITULOS = window.CAPITULOS || [];

/* ----------------------------------------------------------- EJERCICIO 3 */
window.CAPITULOS.push({
  id: "ej3",
  grupo: "3 · Prácticos resueltos",
  titulo: "Ejercicio 3: módulo 2,5",
  html: String.raw`
<h1>Ejercicio 3 — Verificación con módulo chico</h1>
<p class="bajada">Bloque 3 del práctico (preguntas 38 a 42). El dato fuerte es la velocidad de salida: de ahí sale la relación, los dientes y todo lo demás. Es el caso típico de "dame z₂ a partir de las rpm".</p>

<div class="ej">
<div class="ej-cab">
  <span class="ej-num">3</span>
  <div>
    <p class="ej-tit">Transmisión módulo 2,5 — 17 HP a 610 rpm, salida a 200 rpm</p>
    <p class="ej-sub">Preguntas 38 a 42 · dificultad baja · 20 minutos</p>
  </div>
</div>
<div class="ej-cuerpo">

<div class="caja dato">
<p class="caja-tit">Enunciado</p>
<p>La figura muestra un árbol montado sobre dos rodamientos, con un engranaje cilíndrico de dentado recto de <strong>módulo 2,5, 19 dientes y φ = 20°</strong>. El árbol está accionado por un motor de <strong>17 HP</strong> que gira a <strong>610 rpm</strong>. El engranaje conducido debe girar a <strong>200 rpm</strong>.</p>
</div>

<div class="ej-datos">
  <div><dt>m</dt><dd>2,5 mm</dd></div>
  <div><dt>z₁</dt><dd>19</dd></div>
  <div><dt>Potencia</dt><dd>17 HP = 12 665 W</dd></div>
  <div><dt>n₁</dt><dd>610 rpm</dd></div>
  <div><dt>n₂</dt><dd>200 rpm</dd></div>
  <div><dt>F</dt><dd>30 mm</dd></div>
  <div><dt>Tallado</dt><dd>fresa madre (creadora)</dd></div>
</div>

<div class="tabla-wrap">
<table class="tec compacta">
<thead><tr><th class="num">N.º</th><th>Qué pide</th><th class="num">Respuesta</th></tr></thead>
<tbody>
<tr><td class="num">38</td><td>Cantidad de dientes del conducido</td><td class="num">58</td></tr>
<tr><td class="num">39</td><td>Torque aplicado al árbol</td><td class="num">198,27 N·m</td></tr>
<tr><td class="num">40</td><td>Fuerza tangencial</td><td class="num">8348 N</td></tr>
<tr><td class="num">41</td><td>Tensión de Lewis</td><td class="num">477,13 MPa</td></tr>
<tr><td class="num">42</td><td>Distancia entre centros</td><td class="num">96,25 mm</td></tr>
</tbody>
</table>
</div>

<h3>Resolución</h3>

<div class="preg">
<p class="preg-cab"><span class="preg-n">P38</span><span class="preg-tit">Dientes del engrane conducido</span></p>
<p>Acá la relación no viene como i: sale de las dos velocidades. Como i = n₁/n₂ = z₂/z₁:</p>
<div class="f">$$ i = \frac{n_1}{n_2} = \frac{610}{200} = 3{,}05 \qquad\Longrightarrow\qquad z_2 = i\,z_1 = 3{,}05 \cdot 19 = 57{,}95 \;\Rightarrow\; 58 $$</div>
<p class="aviso">Ojo: 57,95 se redondea a 58 (no a 57). Con z₂ = 58 la relación real es 3,0526 y la salida real n₂ = 610/3,0526 = 199,8 rpm, prácticamente la pedida.</p>
<div class="resultado"><span class="r-lbl">Respuesta:</span> <span class="r-val">z₂ = 58 dientes</span></div>
</div>

<div class="preg">
<p class="preg-cab"><span class="preg-n">P39</span><span class="preg-tit">Torque en el árbol</span></p>
<div class="f">$$ H = 17 \cdot 745 = 12\,665\ \text{W} \qquad \omega = \frac{2\pi \cdot 610}{60} = 63{,}879\ \text{rad/s} $$</div>
<div class="f">$$ T = \frac{12\,665}{63{,}879} = 198{,}27\ \text{N}\cdot\text{m} $$</div>
<div class="resultado"><span class="r-lbl">Respuesta:</span> <span class="r-val">T = 198,27 N·m</span></div>
</div>

<div class="preg">
<p class="preg-cab"><span class="preg-n">P40</span><span class="preg-tit">Fuerza tangencial</span></p>
<p>D<sub>p1</sub> = 2,5·19 = 47,5 mm → r₁ = 23,75 mm = 0,02375 m:</p>
<div class="f">$$ W_t = \frac{T}{r_1} = \frac{198{,}27}{0{,}02375} = 8348\ \text{N} $$</div>
<div class="resultado"><span class="r-lbl">Respuesta:</span> <span class="r-val">W<sub>t</sub> = 8348 N</span></div>
</div>

<div class="preg">
<p class="preg-cab"><span class="preg-n">P41</span><span class="preg-tit">Tensión de Lewis (fresa madre)</span></p>
<ol class="pasos">
<li><strong>Factor de forma</strong> para z = 19: Y = 0,314 (de tabla).</li>
<li><strong>Velocidad tangencial</strong>
<div class="f">$$ V = \frac{\pi \cdot 47{,}5 \cdot 610}{60\,000} = 1{,}5171\ \text{m/s} $$</div></li>
<li><strong>Factor dinámico</strong> (generado con fresa madre)
<div class="f">$$ K_v = \frac{3{,}56 + \sqrt{V}}{3{,}56} = \frac{3{,}56 + 1{,}2317}{3{,}56} = 1{,}3460 $$</div></li>
<li><strong>Tensión</strong>
<div class="f">$$ \sigma = \frac{1{,}3460 \cdot 8348}{30 \cdot 2{,}5 \cdot 0{,}314} = \frac{11\,236{,}4}{23{,}55} = 477{,}13\ \text{MPa} $$</div></li>
</ol>
<div class="resultado"><span class="r-lbl">Respuesta:</span> <span class="r-val">σ = 477,13 MPa</span></div>
<p class="aviso">Este es el caso de tensión más alta de los cuatro bloques: 477 MPa con un módulo de 2,5 mm. Es lo esperable: módulo chico, fuerza grande. Si te piden el factor de seguridad con un acero de 4140 (300 HB → S<sub>t</sub> = 334,7 MPa), daría f<sub>seg</sub> = 0,70: <strong>no verifica</strong>. En el práctico no se pide, pero es la lectura correcta del número.</p>
</div>

<div class="preg">
<p class="preg-cab"><span class="preg-n">P42</span><span class="preg-tit">Distancia entre centros</span></p>
<div class="f">$$ D_{p2} = m\,z_2 = 2{,}5 \cdot 58 = 145\ \text{mm} \qquad\qquad C = \frac{47{,}5 + 145}{2} = 96{,}25\ \text{mm} $$</div>
<div class="resultado"><span class="r-lbl">Respuesta:</span> <span class="r-val">C = 96,25 mm</span></div>
</div>

</div>
</div>
`
});

/* ----------------------------------------------------------- EJERCICIO 4 */
window.CAPITULOS.push({
  id: "ej4",
  grupo: "3 · Prácticos resueltos",
  titulo: "Ejercicio 4: polea y 25 kW",
  html: String.raw`
<h1>Ejercicio 4 — Árbol con polea trapezoidal</h1>
<p class="bajada">Bloque 4 del práctico (preguntas 43 a 46). Acá el factor dinámico es el más alto de todos los bloques porque el engranaje gira a 1800 rpm, y el material viene dado como tensión límite directamente.</p>

<div class="ej">
<div class="ej-cab">
  <span class="ej-num">4</span>
  <div>
    <p class="ej-tit">Árbol sobre rodamientos rígidos de bolas — 25 kW a 1800 rpm</p>
    <p class="ej-sub">Preguntas 43 a 46 · dificultad baja · 20 minutos</p>
  </div>
</div>
<div class="ej-cuerpo">

<div class="caja dato">
<p class="caja-tit">Enunciado</p>
<p>La figura muestra un árbol montado sobre dos <strong>rodamientos rígidos de bolas en disposición fijo-libre</strong>, con un engranaje cilíndrico de dentado recto de <strong>módulo 3, 21 dientes y φ = 20°</strong>. Transmite una potencia de <strong>25 kW</strong> al engrane conducido. El árbol gira a <strong>n₁ = 1800 rpm</strong> y el engrane conducido a <strong>n₂ = 450 rpm</strong>. En el extremo derecho del árbol hay una polea que provoca una fuerza transversal de <strong>F₂ = 2000 N</strong>. La tensión límite del material es <strong>S<sub>t</sub> = 375 MPa</strong>.</p>
</div>

<div class="ej-datos">
  <div><dt>m</dt><dd>3 mm</dd></div>
  <div><dt>z₁</dt><dd>21</dd></div>
  <div><dt>Potencia</dt><dd>25 kW = 25 000 W</dd></div>
  <div><dt>n₁</dt><dd>1800 rpm</dd></div>
  <div><dt>n₂</dt><dd>450 rpm</dd></div>
  <div><dt>F</dt><dd>30 mm</dd></div>
  <div><dt>Tallado</dt><dd>fresado</dd></div>
  <div><dt>S<sub>t</sub></dt><dd>375 MPa</dd></div>
</div>

<div class="tabla-wrap">
<table class="tec compacta">
<thead><tr><th class="num">N.º</th><th>Qué pide</th><th class="num">Respuesta</th></tr></thead>
<tbody>
<tr><td class="num">43</td><td>Torque transmitido</td><td class="num">132,63 N·m</td></tr>
<tr><td class="num">44</td><td>Fuerza resultante sobre la circunferencia primitiva</td><td class="num">4480,68 N</td></tr>
<tr><td class="num">45</td><td>Tensión de Lewis (fresado)</td><td class="num">281,46 MPa</td></tr>
<tr><td class="num">46</td><td>Factor de seguridad (S<sub>t</sub> = 375 MPa)</td><td class="num">1,332</td></tr>
</tbody>
</table>
</div>

<h3>Resolución</h3>

<div class="preg">
<p class="preg-cab"><span class="preg-n">P43</span><span class="preg-tit">Torque transmitido</span></p>
<div class="f">$$ \omega = \frac{2\pi \cdot 1800}{60} = 188{,}4956\ \text{rad/s} \qquad\qquad T = \frac{25\,000}{188{,}4956} = 132{,}63\ \text{N}\cdot\text{m} $$</div>
<div class="resultado"><span class="r-lbl">Respuesta:</span> <span class="r-val">T = 132,63 N·m</span></div>
</div>

<div class="preg">
<p class="preg-cab"><span class="preg-n">P44</span><span class="preg-tit">Fuerza resultante sobre la circunferencia primitiva</span></p>
<p>D<sub>p1</sub> = 3·21 = 63 mm → r₁ = 31,5 mm = 0,0315 m:</p>
<div class="f">$$ W_t = \frac{T}{r_1} = \frac{132{,}63}{0{,}0315} = 4210{,}45\ \text{N} $$</div>
<div class="f">$$ W = \frac{W_t}{\cos 20^\circ} = \frac{4210{,}45}{0{,}93969} = 4480{,}68\ \text{N} $$</div>
<div class="resultado"><span class="r-lbl">Respuesta:</span> <span class="r-val">W = 4480,68 N</span></div>
<p class="aviso">La pregunta 44 pide la <strong>resultante</strong> (W), no la tangencial. Es un distractor clásico: si respondés 4210 N está mal.</p>
</div>

<div class="preg">
<p class="preg-cab"><span class="preg-n">P45</span><span class="preg-tit">Tensión de Lewis (dientes fresados)</span></p>
<ol class="pasos">
<li><strong>Factor de forma</strong> para z = 21: Y = 0,328.</li>
<li><strong>Velocidad tangencial</strong>
<div class="f">$$ V = \frac{\pi \cdot 63 \cdot 1800}{60\,000} = 5{,}9376\ \text{m/s} $$</div></li>
<li><strong>Factor dinámico</strong> (perfil cortado o fresado)
<div class="f">$$ K_v = \frac{6{,}1 + V}{6{,}1} = \frac{6{,}1 + 5{,}9376}{6{,}1} = 1{,}9734 $$</div></li>
<li><strong>Tensión</strong> (se usa W<sub>t</sub>, no W)
<div class="f">$$ \sigma = \frac{1{,}9734 \cdot 4210{,}45}{30 \cdot 3 \cdot 0{,}328} = \frac{8308{,}9}{29{,}52} = 281{,}46\ \text{MPa} $$</div></li>
</ol>
<div class="resultado"><span class="r-lbl">Respuesta:</span> <span class="r-val">σ = 281,46 MPa</span></div>
</div>

<div class="preg">
<p class="preg-cab"><span class="preg-n">P46</span><span class="preg-tit">Factor de seguridad</span></p>
<div class="f">$$ f_{seg} = \frac{S_t}{\sigma} = \frac{375}{281{,}46} = 1{,}332 $$</div>
<div class="resultado"><span class="r-lbl">Respuesta:</span> <span class="r-val">f<sub>seg</sub> = 1,332</span></div>
</div>

<div class="preg">
<p class="preg-cab"><span class="preg-n">EXTRA</span><span class="preg-tit">Datos que no se piden pero conviene saber calcular</span></p>
<p>Con i = 1800/450 = 4 → z₂ = 4·21 = 84 dientes, D<sub>p2</sub> = 252 mm y C = (63 + 252)/2 = 157,5 mm. Y la fuerza radial de la polea (2000 N) más las reacciones en los apoyos son el punto de partida del cálculo del árbol como viga, que no forma parte de estas preguntas.</p>
</div>

<h3>Comparación de los cuatro bloques</h3>
<div class="tabla-wrap">
<table class="tec">
<thead><tr><th>Bloque</th><th class="num">H</th><th class="num">n₁</th><th class="num">m</th><th class="num">W<sub>t</sub> [N]</th><th class="num">V [m/s]</th><th class="num">K<sub>v</sub></th><th class="num">σ [MPa]</th><th class="num">f<sub>seg</sub></th></tr></thead>
<tbody>
<tr><td>1 — 135 HP</td><td class="num">100,6 kW</td><td class="num">800</td><td class="num">6</td><td class="num">23 555</td><td class="num">4,27</td><td class="num">1,171</td><td class="num">266,2</td><td class="num">1,398</td></tr>
<tr><td>2 — 15 HP</td><td class="num">11,2 kW</td><td class="num">760</td><td class="num">3</td><td class="num">3744</td><td class="num">2,98</td><td class="num">1,145</td><td class="num">167,4</td><td class="num">2,000</td></tr>
<tr><td>3 — 17 HP</td><td class="num">12,7 kW</td><td class="num">610</td><td class="num">2,5</td><td class="num">8348</td><td class="num">1,52</td><td class="num">1,346</td><td class="num">477,1</td><td class="num">—</td></tr>
<tr><td>4 — 25 kW</td><td class="num">25 kW</td><td class="num">1800</td><td class="num">3</td><td class="num">4210</td><td class="num">5,94</td><td class="num">1,973</td><td class="num">281,5</td><td class="num">1,332</td></tr>
</tbody>
</table>
</div>
<div class="caja idea">
<p class="caja-tit">Lo que muestra la tabla</p>
<p>El bloque 1 tiene la fuerza más grande (23 555 N) pero, al tener módulo 6 y F = 57 mm, la tensión es moderada. El bloque 3 tiene menos de la mitad de fuerza pero módulo 2,5 y F = 30: la tensión se dispara. <strong>La tensión no depende solo de la fuerza: F·m² es lo que realmente pesa.</strong></p>
</div>

</div>
</div>
`
});

/* -------------------------------------------------------------- EXTRAS */
window.CAPITULOS.push({
  id: "extras",
  grupo: "3 · Prácticos resueltos",
  titulo: "Ejercicios extra (planetarios y cónicos)",
  html: String.raw`
<h1>Ejercicios extra resueltos</h1>
<p class="bajada">Los ejemplos que dio el profesor en clase y que suelen aparecer como variantes de examen: planetarios con corona fija, trenes epicicloidales compuestos, el aparejo de cadena y el diferencial.</p>

<h2>1 · Planetario 20 / 30 / 80: los tres casos</h2>
<p>Solar z₂ = 20, satélite z₄ = 30, corona z₅ = 80 (verifica: 80 = 20 + 2·30). Un solo satélite engrana con el solar y con la corona, así que con el brazo fijo:</p>

<div class="f">$$ i_0 = \frac{n_2}{n_5}\bigg|_{\text{brazo fijo}} = -\frac{z_5}{z_2} = -\frac{80}{20} = -4 $$</div>
<p class="aviso">El signo es negativo porque hay <strong>un</strong> engrane exterior (solar-satélite); el satélite-corona es interior y no invierte. El satélite no aparece en la fórmula porque engrana con los dos: se cancela.</p>

<div class="caja idea">
<p class="caja-tit">Caso A — corona fija, entrada en el solar</p>
<p>n₂ = 100 rpm, n₅ = 0. Willis:</p>
<div class="f f-sin">$$ \frac{100 - n_{ps}}{0 - n_{ps}} = -4 \;\Rightarrow\; 100 - n_{ps} = 4\,n_{ps} \;\Rightarrow\; n_{ps} = \frac{100}{5} = 20\ \text{rpm} $$</div>
<p>Y el atajo: <span>$n_{ps} = n_2\dfrac{z_2}{z_2+z_5} = 100\cdot\dfrac{20}{100} = 20$</span> ✓</p>
</div>

<div class="caja idea">
<p class="caja-tit">Caso B — corona fija, entrada en el brazo, salida en el solar</p>
<p>n₅ = 0, n₂ = 0 y el brazo gira a 20 rpm: el solar sale a 100 rpm (relación 5:1). Es el reductor planetario típico: <strong>multiplica la velocidad por (z₂+z₅)/z₂ = 5</strong> al revés (reduce 5:1 si entra por el brazo... cuidado con cuál es entrada).</p>
</div>

<div class="caja idea">
<p class="caja-tit">Caso C — entrada en la corona, solar fijo</p>
<p>n₂ = 0, n₅ = 20 rpm:</p>
<div class="f f-sin">$$ \frac{0 - n_{ps}}{20 - n_{ps}} = -4 \;\Rightarrow\; -n_{ps} = -80 + 4n_{ps} \;\Rightarrow\; n_{ps} = 16\ \text{rpm} $$</div>
<p>Atajo: <span>$n_{ps} = n_5\dfrac{z_5}{z_2+z_5} = 20\cdot\dfrac{80}{100} = 16$</span> ✓</p>
</div>

<div class="caja idea">
<p class="caja-tit">Caso D — brazo fijo (se convierte en tren ordinario)</p>
<p>n<sub>ps</sub> = 0, n₂ = 100 rpm:</p>
<div class="f f-sin">$$ \frac{100 - 0}{n_5 - 0} = -4 \;\Rightarrow\; n_5 = -25\ \text{rpm} $$</div>
<p>Gira al revés y cuatro veces más lento. Es el caso de la tabla 4-1 de la teoría: brazo fijo → tren ordinario simple.</p>
</div>

<h2>2 · Planetario 15 / 10 / 35: despejar la velocidad del brazo</h2>
<p>Corona z₃ = 15 + 2·10 = 35. Brazo fijo: i₀ = −35/15 = −2,3333. Con el solar a 10 rpm y la corona fija:</p>
<div class="f">$$ \frac{10 - n_{ps}}{0 - n_{ps}} = -2{,}3333 \;\Rightarrow\; 10 - n_{ps} = 2{,}3333\,n_{ps} \;\Rightarrow\; n_{ps} = \frac{10}{3{,}3333} = 3\ \text{rpm} $$</div>

<p>Si en cambio el solar gira a 1 rpm y la corona a 4,14 rpm (mismo sentido), hay que usar la fórmula general despejada:</p>
<div class="f f-grande">$$ n_{ps} = \frac{n_{solar} - i_0 \cdot n_{corona}}{1 - i_0} = \frac{1 - (-2{,}3333)(4{,}14)}{1 + 2{,}3333} = \frac{1 + 9{,}66}{3{,}3333} = 3{,}2\ \text{rpm} $$</div>
<p>Y con el solar a 5 rpm y la corona a −0,71 rpm (sentido contrario):</p>
<div class="f">$$ n_{ps} = \frac{5 - (-2{,}3333)(-0{,}71)}{3{,}3333} = \frac{5 - 1{,}657}{3{,}3333} = 1{,}003 \approx 1\ \text{rpm} $$</div>

<h2>3 · Atornillador a batería (planetario de 2 etapas)</h2>
<p>Datos relevados del mecanismo: solar z₁ = 6, satélite z₂ = 19, corona z₃ = 6 + 2·19 = 44. Corona fija, entrada por el brazo (el portasatélites), salida por el solar.</p>

<ol class="pasos">
<li><strong>Verificar la geometría</strong>: 44 = 6 + 2·19 ✓</li>
<li><strong>Relación con brazo fijo</strong>
<div class="f">$$ i_0 = -\frac{z_3}{z_1} = -\frac{44}{6} = -7{,}333 $$</div></li>
<li><strong>Velocidad del solar con el brazo a 1 rpm y la corona fija</strong>
<div class="f">$$ \frac{n_1 - 1}{0 - 1} = -7{,}333 \;\Rightarrow\; n_1 - 1 = 7{,}333 \;\Rightarrow\; n_1 = 8{,}333\ \text{rpm} $$</div></li>
<li><strong>Relación por etapa</strong>: i = 8,333. Con dos etapas en serie:
<div class="f">$$ i_{total} = i^{n} = 8{,}333^2 = 69{,}44 $$</div></li>
<li><strong>Velocidad de entrada con el brazo final a 150 rpm</strong>
<div class="f">$$ n_e = 150 \cdot 69{,}44 = 10\,416\ \text{rpm} $$</div></li>
</ol>
<div class="resultado"><span class="r-lbl">Resultado:</span> <span class="r-val">i<sub>total</sub> = 69,44 · n<sub>e</sub> ≈ 10 416 rpm para 150 rpm a la salida</span></div>
<p>Dos etapas de 44/6 dan una reducción de casi 70:1 en un espacio mínimo. Es exactamente el mecanismo de un destornillador eléctrico.</p>

<h2>4 · Tren epicicloidal compuesto (99 / 100 / 101 / 100)</h2>
<p>Es el ejemplo clásico de "relación enorme con cuatro ruedas". Con el brazo de entrada y la rueda d de salida:</p>
<div class="f f-grande">$$ i = \frac{n_e}{n_d} = \frac{1}{1 - \dfrac{z_a z_c}{z_b z_d}} $$</div>
<p>Con z<sub>a</sub> = 99, z<sub>b</sub> = 100, z<sub>c</sub> = 101, z<sub>d</sub> = 100:</p>
<div class="f">$$ i = \frac{1}{1 - \dfrac{99 \cdot 101}{100 \cdot 100}} = \frac{1}{1 - \dfrac{9999}{10000}} = \frac{1}{0{,}0001} = 10\,000 $$</div>
<div class="resultado"><span class="r-lbl">Resultado:</span> <span class="r-val">i = 10 000 : 1 con solo 4 ruedas</span></div>
<p class="aviso">Cuanto más cerca están los productos, más grande es la relación. Acá la diferencia es de 1 diente en 10 000: una vuelta del brazo mueve la salida 1/10 000 de vuelta. Rendimiento bajísimo, pero es la base de los reductores de alta relación.</p>

<h2>5 · Aparejo de cadena (epi-hipocicloidal compuesto)</h2>
<p>Ruedas: b = 22, c = 53, d = 28, e = 103 (corona fija e). La relación entre el piñón b (polea de accionamiento) y el brazo f (polea de izaje):</p>
<div class="f f-grande">$$ i = \frac{n_b}{n_f} = 1 + \frac{z_e \cdot z_c}{z_d \cdot z_b} $$</div>
<div class="f">$$ i = 1 + \frac{103 \cdot 53}{28 \cdot 22} = 1 + \frac{5459}{616} = 1 + 8{,}862 = 9{,}862 $$</div>
<div class="resultado"><span class="r-lbl">Resultado:</span> <span class="r-val">i = 6075/616 = 9,862 → para 1 vuelta de la polea de izaje hay que dar 9,86 vueltas de la de accionamiento</span></div>
<p>Si además la polea de accionamiento es 5 veces más grande que la de izaje, la relación total de desplazamiento es ≈ 50:1: por cada 50 cm de cadena que tira el operador, la carga sube 1 cm.</p>

<h2>6 · Diferencial del automóvil</h2>
<p>En un diferencial, el marco (corona c + caja de satélites d) es el brazo, y los dos semiejes llevan las ruedas f. Si una rueda se levanta, su engranaje f queda fijo; entonces el otro f gira al doble de la velocidad del marco:</p>
<div class="f">$$ n_{f,libre} = 2\,n_{marco} $$</div>
<p>Y en general, la condición del diferencial es:</p>
<div class="f f-grande">$$ n_{izq} + n_{der} = 2\,n_{marco} $$</div>
<div class="caja idea">
<p class="caja-tit">Por qué existe</p>
<p>En una curva las dos ruedas recorren caminos distintos y deben girar a velocidades distintas. Con un eje rígido, una de las dos patinaría. El diferencial reparte el par (50/50) y deja que las velocidades se acomoden solas: <strong>suma constante = 2 veces la del marco</strong>.</p>
</div>

<h2>Resumen de las fórmulas de planetarios</h2>
<div class="tabla-wrap">
<table class="tec">
<thead><tr><th>Situación</th><th>Fórmula</th><th>Atajo</th></tr></thead>
<tbody>
<tr><td>Willis general</td><td><span>$\dfrac{n_e - n_{ps}}{n_s - n_{ps}} = i_0 = \pm\dfrac{\prod z_{conducidas}}{\prod z_{motrices}}$</span></td><td>—</td></tr>
<tr><td>Corona fija, entra solar</td><td><span>$n_{ps} = \dfrac{n_{solar}}{1 - i_0}$</span></td><td><span>$n_{ps} = n_{solar}\dfrac{z_s}{z_s+z_c}$</span></td></tr>
<tr><td>Corona fija, entra brazo</td><td><span>$n_{solar} = n_{ps}(1 - i_0)$</span></td><td><span>$n_{solar} = n_{ps}\dfrac{z_s+z_c}{z_s}$</span></td></tr>
<tr><td>Solar fijo</td><td><span>$n_{ps} = \dfrac{-i_0\,n_{corona}}{1-i_0}$</span></td><td><span>$n_{ps} = n_c\dfrac{z_c}{z_s+z_c}$</span></td></tr>
<tr><td>Brazo fijo</td><td><span>$\dfrac{n_s}{n_c} = i_0$</span></td><td>tren ordinario</td></tr>
<tr><td>Despejar n<sub>ps</sub></td><td><span>$n_{ps} = \dfrac{n_e - i_0\,n_s}{1 - i_0}$</span></td><td>la más usada</td></tr>
</tbody>
</table>
</div>
<p class="aviso">Los atajos valen solo para el planetario <strong>simple</strong> (un satélite que engrana con solar y corona). Con doble satélite (dos ruedas en el mismo perno, o engranando entre sí) hay que usar Willis con la productoria $\prod$ completa.</p>
`
});
