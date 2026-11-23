/* =========================================================================
   Exámenes resueltos — tres exámenes reales de la cátedra, paso a paso
   ========================================================================= */
window.CAPITULOS.push({
  id: "examenes",
  grupo: "7 · Exámenes resueltos",
  titulo: "Exámenes resueltos (3)",
  html: String.raw`
<h1>Exámenes resueltos</h1>
<p class="bajada">Tres exámenes reales de la cátedra —dos finales de comisión y un recuperatorio— resueltos completos, paso a paso y con todas las tablas llenas. Sirven para practicar el formato, medirte con el tiempo y comparar con lo que está escrito a lápiz en las fotos.</p>

<div class="caja idea">
<p class="caja-tit">Qué tienen en común los tres</p>
<p>Todos arrancan con un <strong>tren de engranajes</strong> (geometría del diente + cadena cinemática + distancia entre centros), siguen con una <strong>verificación de Lewis/AGMA</strong> sobre uno de los pares del tren y terminan con un <strong>reductor helicoidal</strong> para completar la tabla. El de 2022 no tiene reductor: son solo A y B.</p>
</div>

<div class="caja truco">
<p class="caja-tit">Cómo encarar el examen en 60–80 minutos</p>
<ol class="pasos">
<li><strong>Primero la cadena cinemática</strong>, aunque no la pidan. Saber qué eje gira a qué rpm te ordena todo y evita usar el par equivocado en Lewis.</li>
<li><strong>Geometría en tabla</strong>: D<sub>p</sub> = m·z, D<sub>e</sub> = D<sub>p</sub> + 2m, D<sub>i</sub> = D<sub>p</sub> − 2,5m, D<sub>b</sub> = D<sub>p</sub>·cos φ, p<sub>c</sub> = π·m. Son cuentas cortas y todas valen puntos.</li>
<li><strong>Lewis solo en el par que piden</strong>, con el módulo y el ancho de <em>ese</em> par. No mezcles el módulo de la otra etapa.</li>
<li><strong>Verificá unidades</strong>: V en m/s (D<sub>p</sub> en mm → dividir por 60 000), W<sub>t</sub> en N, σ en MPa. Un resultado en kN o en mm/s es un error de unidad, no de cuenta.</li>
</ol>
</div>

<div class="caja dato">
<p class="caja-tit">Antes de empezar: las respuestas de las fotos</p>
<p>Las fotos son exámenes corregidos y tienen respuestas manuscritas. No todas están bien: por ejemplo, en el de diciembre el D<sub>p</sub> del engrane 2 figura como 57 mm (tomaron los 19 dientes del engrane 3) y la distancia entre centros como 243 mm. Acá está la resolución verificada; si tu número no coincide, compará el paso a paso antes de cambiar nada. Los datos están transcriptos de las fotos: si en tu copia algún número no coincide, avisá y lo ajusto.</p>
</div>

<div class="caja idea">
<p class="caja-tit">Los tres exámenes</p>
<p><a href="#examenes/e2025"><strong>02/12/2025 · Comisión B</strong></a> — tren con reductor sin fin-corona y cadena, Lewis del par 1–2 y reductor helicoidal. 80 minutos, A 40 + B 30 + C 30.</p>
<p><a href="#examenes/e2022"><strong>22/11/2022</strong></a> — tren de cinco ruedas con engrane intermedio y Lewis del par D–E. 60 minutos, A 60 + B 40.</p>
<p><a href="#examenes/e2026"><strong>Recuperatorio 17/03/2026 · Comisión B</strong></a> — poleas trapezoidales y cadena antes de los engranes, Lewis del par 1–2 y reductor de tres etapas. 80 minutos, A 40 + B 30 + C 30.</p>
</div>

<h2 id="examenes--e2025">Examen 02/12/2025 · Comisión B</h2>
<p class="bajada">Módulo 03: Engranajes · 80 minutos · Ejercicio A 40 pts, B 30 pts, C 30 pts. Es el examen más completo de los tres: tren con reductor sin fin-corona y cadena, Lewis del primer par y reductor helicoidal de tres etapas.</p>

<div class="tabla-wrap">
<table class="tec compacta">
<thead><tr><th>Ejercicio</th><th>Qué hay que resolver</th><th class="num">Puntaje</th></tr></thead>
<tbody>
<tr><td><strong>A</strong></td><td>Tren del elevador: geometría de los engranes 1 y 2, distancia entre centros y velocidad de salida</td><td class="num">40</td></tr>
<tr><td><strong>B</strong></td><td>Lewis/AGMA del par 1–2: V, W<sub>t</sub>, Y, K<sub>v</sub>, σ, S<sub>t</sub>, f<sub>seg</sub></td><td class="num">30</td></tr>
<tr><td><strong>C</strong></td><td>Reductor helicoidal de 3 etapas: m<sub>t</sub>, diámetros, i, n<sub>s</sub>, distancia entre centros</td><td class="num">30</td></tr>
</tbody>
</table>
</div>

<h3>Ejercicio A · Tren del elevador (40 pts)</h3>

<div class="caja dato">
<p class="caja-tit">Enunciado</p>
<p>El tren de engranajes mostrado se usa como <strong>elevador para personas</strong>. La primera etapa son engranajes cilíndricos de diente recto con <strong>módulo 3</strong> y ángulo de presión 20°, y la segunda etapa son engranajes cilíndricos de diente recto con <strong>módulo 4</strong> y ángulo de presión 20°. Calcular los datos solicitados en las tablas anexas.</p>
</div>

<div class="ej-datos datos-largos">
  <div><dt>Motor</dt><dd>3000 rpm · 0,75 kW</dd></div>
  <div><dt>Reductor</dt><dd>sin fin-corona, i = 20:1</dd></div>
  <div><dt>Cadena</dt><dd>ANSI 80 · piñón 21 dientes → 42 dientes</dd></div>
  <div><dt>1.ª etapa</dt><dd>m = 3 mm · φ = 20°</dd></div>
  <div><dt>2.ª etapa</dt><dd>m = 4 mm · φ = 20°</dd></div>
  <div><dt>Engrane 1</dt><dd>z₁ = 17 (m = 3)</dd></div>
  <div><dt>Engrane 2</dt><dd>z₂ = 58 (m = 3)</dd></div>
  <div><dt>Engrane 3</dt><dd>z₃ = 19 (m = 4), mismo eje que 2</dd></div>
  <div><dt>Engrane 4</dt><dd>z₄ = 68 (m = 4), salida</dd></div>
</div>

<p>El dibujo tiene el motor, la salida del reductor, el <strong>eje 1</strong> (piñón de cadena de 42 dientes + engrane 1) y el <strong>eje 2</strong> (engranes 2 y 3 juntos). El engrane 4 está en el eje de salida. Antes de tocar una fórmula, conviene escribir la cadena de velocidades.</p>

<div class="tabla-wrap">
<table class="tec compacta">
<thead><tr><th>Punto de la cadena</th><th>Elemento</th><th class="num">n [rpm]</th></tr></thead>
<tbody>
<tr><td>Motor</td><td>—</td><td class="num">3000</td></tr>
<tr><td>Salida del reductor</td><td>sin fin-corona i = 20</td><td class="num">150</td></tr>
<tr><td>Eje 1</td><td>piñón 42 + engrane 1</td><td class="num">75</td></tr>
<tr><td>Eje 2</td><td>engrane 2 + engrane 3</td><td class="num">21,98</td></tr>
<tr><td>Eje 4 (salida)</td><td>engrane 4</td><td class="num">6,14</td></tr>
</tbody>
</table>
</div>

<ol class="pasos">
<li><strong>Salida del reductor.</strong> El sin fin-corona divide por 20:
<div class="f">$$ n_{red} = \frac{3000}{20} = 150\ \text{rpm} $$</div></li>
<li><strong>Eje 1.</strong> La cadena va del piñón de 21 al de 42; como el conductor es el chico, la velocidad baja:
<div class="f">$$ n_1 = 150\cdot\frac{21}{42} = 75\ \text{rpm} $$</div></li>
<li><strong>Eje 2.</strong> El engrane 1 (17) mueve al 2 (58):
<div class="f">$$ n_2 = 75\cdot\frac{17}{58} = 21{,}9828\ \text{rpm} $$</div></li>
<li><strong>Eje 4.</strong> El engrane 3 (19), solidario al 2, mueve al 4 (68):
<div class="f">$$ n_4 = 21{,}9828\cdot\frac{19}{68} = 6{,}1422\ \text{rpm} $$</div>
<div class="f">$$ \omega_4 = 6{,}1422\cdot\frac{2\pi}{60} = 0{,}6432\ \text{rad/s} $$</div></li>
</ol>

<p>Control de la relación total: 3000/6,1422 = 488,4, y el producto de las tres reducciones es 20 · (42/21) · (58/17) · (68/19) = 488,4. Cierra.</p>

<p>Ahora la geometría de los dos engranes de la primera etapa (m = 3). Las fórmulas son las mismas para los cuatro, pero el examen solo pide 1 y 2:</p>

<div class="f">$$ \begin{gathered} a = m \\ b = 1{,}25\,m \\ D_p = m\,z \\ D_b = D_p\cos\varphi \\ D_e = D_p + 2m \\ D_i = D_p - 2{,}5\,m \\ p_c = \pi\,m \\ c = 0{,}25\,m \quad\text{(holgura radial)} \\ h_c = \frac{p_c}{50} \quad\text{(holgura circunferencial)} \end{gathered} $$</div>

<ol class="pasos">
<li><strong>Engrane 1</strong> (z₁ = 17, m = 3):
<div class="f">$$ \begin{gathered} D_{p1} = 3\cdot 17 = 51\ \text{mm} \\ D_{b1} = 51\cos 20^\circ = 47{,}92\ \text{mm} \\ D_{e1} = 51 + 6 = 57\ \text{mm} \\ D_{i1} = 51 - 7{,}5 = 43{,}5\ \text{mm} \end{gathered} $$</div></li>
<li><strong>Engrane 2</strong> (z₂ = 58, m = 3):
<div class="f">$$ \begin{gathered} D_{p2} = 3\cdot 58 = 174\ \text{mm} \\ D_{b2} = 174\cos 20^\circ = 163{,}51\ \text{mm} \\ D_{e2} = 174 + 6 = 180\ \text{mm} \\ D_{i2} = 174 - 7{,}5 = 166{,}5\ \text{mm} \end{gathered} $$</div></li>
<li><strong>Comunes a los dos</strong>:
<div class="f">$$ \begin{gathered} a = 3\ \text{mm} \\ b = 3{,}75\ \text{mm} \\ p_c = \pi\cdot 3 = 9{,}4248\ \text{mm} \\ c = 0{,}25\cdot 3 = 0{,}75\ \text{mm} \\ h_c = \frac{9{,}4248}{50} = 0{,}1885\ \text{mm} \end{gathered} $$</div></li>
<li><strong>Distancia entre centros eje 1 y eje 4.</strong> Los engranes 2 y 3 están en el mismo eje, así que la distancia total es la suma de las dos etapas:
<div class="f">$$ \begin{gathered} a_{12} = \frac{D_{p1}+D_{p2}}{2} \\ a_{12} = \frac{51+174}{2} = 112{,}5\ \text{mm} \\ a_{34} = \frac{D_{p3}+D_{p4}}{2} \\ a_{34} = \frac{4\cdot 19+4\cdot 68}{2} = 174\ \text{mm} \\ C_{14} = 112{,}5 + 174 = 286{,}5\ \text{mm} \end{gathered} $$</div></li>
</ol>

<div class="tabla-wrap">
<table class="tec compacta">
<thead><tr><th>Ítem</th><th class="num">Engrane 1</th><th class="num">Engrane 2</th><th>Unidad</th></tr></thead>
<tbody>
<tr><td>Adendo</td><td class="num">3</td><td class="num">3</td><td>mm</td></tr>
<tr><td>Dedendo</td><td class="num">3,75</td><td class="num">3,75</td><td>mm</td></tr>
<tr><td>Diámetro primitivo</td><td class="num">51</td><td class="num">174</td><td>mm</td></tr>
<tr><td>Diámetro de base</td><td class="num">47,92</td><td class="num">163,51</td><td>mm</td></tr>
<tr><td>Diámetro de adendo</td><td class="num">57</td><td class="num">180</td><td>mm</td></tr>
<tr><td>Diámetro de dedendo</td><td class="num">43,5</td><td class="num">166,5</td><td>mm</td></tr>
<tr><td>Paso circular</td><td class="num">9,4248</td><td class="num">9,4248</td><td>mm</td></tr>
<tr><td>Holgura radial</td><td class="num">0,75</td><td class="num">0,75</td><td>mm</td></tr>
<tr><td>Holgura circunferencial</td><td class="num">0,1885</td><td class="num">0,1885</td><td>mm</td></tr>
</tbody>
</table>
</div>

<div class="resultado"><span class="r-lbl">Resultados:</span> <span class="r-val">C<sub>14</sub> = 286,5 mm · n<sub>4</sub> = 6,14 rpm · ω<sub>4</sub> = 0,643 rad/s</span></div>

<div class="caja truco">
<p class="caja-tit">La trampa de este ejercicio</p>
<p>El engrane 2 tiene <strong>58 dientes</strong>; los 19 son del engrane 3, que está en el mismo eje pero es de la segunda etapa. Si usás 19 para el engrane 2 te queda D<sub>p2</sub> = 57 mm y todo lo que sigue mal (la distancia entre centros, sobre todo). Fijate también que la segunda etapa es m = 4: el engrane 3 no tiene D<sub>p</sub> = 57 mm, tiene 76 mm.</p>
</div>

<h3>Ejercicio B · Lewis del par 1–2 (30 pts)</h3>

<div class="caja dato">
<p class="caja-tit">Enunciado</p>
<p>Considerando la transmisión de engrane del ejercicio 1 <strong>(entre engrane 1 y 2)</strong>, y con los siguientes datos de funcionamiento: ancho del diente 28 mm; fabricación: tallado por fresadora; material: SAE 4140 grado 1; dureza: 240 HB. Determinar: velocidad tangencial, carga tangencial, factor geométrico, factor dinámico, esfuerzo aplicado, tensión admisible y factor de seguridad.</p>
</div>

<div class="ej-datos datos-largos">
  <div><dt>Par</dt><dd>1–2 · m = 3 mm</dd></div>
  <div><dt>z₁ / z₂</dt><dd>17 / 58</dd></div>
  <div><dt>n₁</dt><dd>75 rpm</dd></div>
  <div><dt>D<sub>p1</sub></dt><dd>51 mm</dd></div>
  <div><dt>Ancho F</dt><dd>28 mm</dd></div>
  <div><dt>Potencia</dt><dd>0,75 kW = 750 W</dd></div>
  <div><dt>Material</dt><dd>SAE 4140 g1 · 240 HB</dd></div>
  <div><dt>Tallado</dt><dd>fresadora</dd></div>
</div>

<ol class="pasos">
<li><strong>Velocidad tangencial.</strong> Es la de la circunferencia primitiva del engrane 1; con D<sub>p</sub> en mm y n en rpm, el 60 000 pasa mm/min a m/s:
<div class="f">$$ V = \frac{\pi\,D_{p1}\,n_1}{60\,000} = \frac{\pi\cdot 51\cdot 75}{60\,000} = 0{,}2003\ \text{m/s} $$</div></li>
<li><strong>Carga tangencial.</strong> Potencia = fuerza por velocidad; con η = 100 % (el enunciado no da rendimiento):
<div class="f">$$ W_t = \frac{H}{V} = \frac{750}{0{,}2003} = 3744{,}8\ \text{N} $$</div>
<p class="aviso">Si el enunciado diera un rendimiento η, la fuerza sobre el diente sería W<sub>t</sub> = η·H/V. Acá no hay pérdidas: la potencia del motor llega entera al par 1–2.</p></li>
<li><strong>Factor geométrico.</strong> Sale de la tabla de Y para z = 17, φ = 20°, altura completa:
<div class="f">$$ Y = 0{,}303 $$</div></li>
<li><strong>Factor dinámico.</strong> El tallado es por fresadora, que en la tabla de la cátedra es “perfil cortado o fresado”:
<div class="f">$$ K_v = \frac{6{,}1 + V}{6{,}1} = \frac{6{,}1 + 0{,}2003}{6{,}1} = 1{,}0328 $$</div></li>
<li><strong>Esfuerzo aplicado (Lewis).</strong> El módulo y el ancho son los del par 1–2:
<div class="f">$$ \sigma = \frac{K_v\,W_t}{F\,m\,Y} $$</div>
<div class="f">$$ \sigma = \frac{1{,}0328\cdot 3744{,}8}{28\cdot 3\cdot 0{,}303} = \frac{3867{,}7}{25{,}452} = 151{,}96\ \text{MPa} $$</div></li>
<li><strong>Tensión admisible.</strong> Para el 4140 grado 1 la cátedra usa la figura 14-3 (nitrurado):
<div class="f">$$ S_t = 0{,}568\,H_B + 83{,}8 $$</div>
<div class="f">$$ S_t = 0{,}568\cdot 240 + 83{,}8 = 220{,}12\ \text{MPa} $$</div></li>
<li><strong>Factor de seguridad.</strong>
<div class="f">$$ f_{seg} = \frac{S_t}{\sigma} = \frac{220{,}12}{151{,}96} = 1{,}449 $$</div></li>
</ol>

<div class="tabla-wrap">
<table class="tec compacta">
<thead><tr><th>Ítem</th><th class="num">Valor</th><th>Unidad</th></tr></thead>
<tbody>
<tr><td>Velocidad tangencial</td><td class="num">0,200</td><td>m/s</td></tr>
<tr><td>Carga tangencial</td><td class="num">3744,8</td><td>N</td></tr>
<tr><td>Factor geométrico</td><td class="num">0,303</td><td>—</td></tr>
<tr><td>Factor dinámico</td><td class="num">1,0328</td><td>—</td></tr>
<tr><td>Esfuerzo aplicado</td><td class="num">151,96</td><td>MPa</td></tr>
<tr><td>Tensión admisible</td><td class="num">220,12</td><td>MPa</td></tr>
<tr><td>Factor de seguridad</td><td class="num">1,45</td><td>—</td></tr>
</tbody>
</table>
</div>

<div class="resultado"><span class="r-lbl">Resultado:</span> <span class="r-val">σ = 151,96 MPa · S<sub>t</sub> = 220,12 MPa · f<sub>seg</sub> = 1,45 ≥ 1,2 → verifica con poco margen</span></div>

<div class="caja idea">
<p class="caja-tit">Lectura del resultado</p>
<p>Un factor de 1,45 está por encima del mínimo de 1,2 pero sin sobrar: si el enunciado pidiera “elegir otro material” o “subir el módulo”, con este número ya sabés que hay poco margen. Si en cambio usás la otra recta del 4140 (acero grado 1: S<sub>t</sub> = 0,533·240 + 88,3 = 216,2 MPa), el factor baja a 1,42; la conclusión no cambia.</p>
</div>

<div class="caja truco">
<p class="caja-tit">Errores que se vieron en la foto</p>
<p>La velocidad está escrita como 0,00022 m/s: es un error de unidades (D<sub>p</sub> en mm y el 60 000). Con V = 0,2003 m/s, W<sub>t</sub> = 3744,8 N, no 3409 kN. Y el factor geométrico es 0,303 (z = 17), no 0,311.</p>
</div>

<h3>Ejercicio C · Reductor helicoidal de 3 etapas (30 pts)</h3>

<div class="caja dato">
<p class="caja-tit">Enunciado</p>
<p>Del reductor mostrado en la figura, completar los datos faltantes en la tabla (3 pts cada uno).</p>
</div>

<div class="ej-datos datos-largos">
  <div><dt>Entrada</dt><dd>n<sub>e</sub> = 1000 rpm</dd></div>
  <div><dt>Módulo normal</dt><dd>m<sub>n</sub> = 3 mm</dd></div>
  <div><dt>Ángulo de hélice</dt><dd>ψ = 15°</dd></div>
  <div><dt>z₁ · z₂ · z₃</dt><dd>21 · 46 · 23</dd></div>
  <div><dt>z₄ · z₅ · z₆</dt><dd>64 · 17 · 56</dd></div>
  <div><dt>Etapas</dt><dd>1–2, 3–4 y 5–6</dd></div>
</div>

<ol class="pasos">
<li><strong>Módulo transversal.</strong> En un helicoidal el módulo normal es el que se mide en el plano normal al diente; el transversal (el del diámetro primitivo) es mayor:
<div class="f">$$ m_t = \frac{m_n}{\cos\psi} = \frac{3}{\cos 15^\circ} $$</div>
<div class="f">$$ m_t = \frac{3}{0{,}96593} = 3{,}1058\ \text{mm} $$</div></li>
<li><strong>Diámetros primitivos.</strong> D<sub>i</sub> = m<sub>t</sub>·z<sub>i</sub>:
<div class="f">$$ \begin{gathered} D_1 = 3{,}1058\cdot 21 = 65{,}22 \\ D_2 = 3{,}1058\cdot 46 = 142{,}87 \\ D_3 = 3{,}1058\cdot 23 = 71{,}43 \\ D_4 = 3{,}1058\cdot 64 = 198{,}77 \\ D_5 = 3{,}1058\cdot 17 = 52{,}80 \\ D_6 = 3{,}1058\cdot 56 = 173{,}93 \end{gathered} $$</div>
<p>Todos en mm. Fijate que D<sub>1</sub> + D<sub>2</sub> = 208,09; la mitad es la distancia entre centros de la primera etapa.</p></li>
<li><strong>Relación total.</strong> Es el producto de las tres etapas (cada una reduce en z<sub>conducido</sub>/z<sub>conductor</sub>):
<div class="f">$$ i = \frac{46}{21}\cdot\frac{64}{23}\cdot\frac{56}{17} $$</div>
<div class="f">$$ i = 2{,}1905\cdot 2{,}7826\cdot 3{,}2941 = 20{,}08 $$</div></li>
<li><strong>Velocidad de salida.</strong>
<div class="f">$$ n_s = \frac{n_e}{i} = \frac{1000}{20{,}08} = 49{,}81\ \text{rpm} $$</div></li>
<li><strong>Distancia entre centros.</strong> Como las tres etapas están en línea, se suman las tres distancias parciales:
<div class="f">$$ C_e = \frac{D_1+D_2}{2} + \frac{D_3+D_4}{2} + \frac{D_5+D_6}{2} $$</div>
<div class="f">$$ C_e = 104{,}04 + 135{,}10 + 113{,}36 = 352{,}51\ \text{mm} $$</div></li>
<li><strong>Tipo de reductor.</strong> Tres pares de engranes helicoidales con ejes paralelos: <strong>reductor helicoidal de 3 etapas</strong>.</li>
</ol>

<div class="tabla-wrap">
<table class="tec compacta">
<thead><tr><th>Ítem</th><th class="num">Valor</th><th>Unidad</th></tr></thead>
<tbody>
<tr><td>Módulo transversal m<sub>t</sub></td><td class="num">3,1058</td><td>mm</td></tr>
<tr><td>Diámetro engrane 1</td><td class="num">65,22</td><td>mm</td></tr>
<tr><td>Diámetro engrane 2</td><td class="num">142,87</td><td>mm</td></tr>
<tr><td>Diámetro engrane 3</td><td class="num">71,43</td><td>mm</td></tr>
<tr><td>Diámetro engrane 4</td><td class="num">198,77</td><td>mm</td></tr>
<tr><td>Diámetro engrane 5</td><td class="num">52,80</td><td>mm</td></tr>
<tr><td>Diámetro engrane 6</td><td class="num">173,93</td><td>mm</td></tr>
<tr><td>Velocidad de salida n<sub>s</sub></td><td class="num">49,81</td><td>rpm</td></tr>
<tr><td>Distancia entre centros C<sub>e</sub></td><td class="num">352,51</td><td>mm</td></tr>
<tr><td>Tipo de reductor</td><td colspan="2">helicoidal de 3 etapas (ejes paralelos)</td></tr>
</tbody>
</table>
</div>

<div class="resultado"><span class="r-lbl">Resultado:</span> <span class="r-val">m<sub>t</sub> = 3,1058 mm · i = 20,08 · n<sub>s</sub> = 49,81 rpm · C<sub>e</sub> = 352,51 mm</span></div>

<div class="caja truco">
<p class="caja-tit">No dividas por cos dos veces</p>
<p>El módulo transversal ya es m<sub>t</sub> = m<sub>n</sub>/cos ψ. Los diámetros se calculan con <strong>m<sub>t</sub></strong>, no con m<sub>n</sub>. Si usás m<sub>n</sub> = 3 te quedan diámetros 3,5 % más chicos y la distancia entre centros no cierra con la tabla.</p>
</div>

<h2 id="examenes--e2022">Examen 22/11/2022</h2>
<p class="bajada">Módulo 03: Engranajes · 60 minutos · Ejercicio A 60 pts y Ejercicio B 40 pts. No hay reductor helicoidal: el examen se concentra en el tren de cinco ruedas y en la verificación del par D–E.</p>

<h3>Ejercicio A · Tren del elevador A-B-C-D-E (60 pts)</h3>

<div class="caja dato">
<p class="caja-tit">Enunciado</p>
<p>El tren de engranajes mostrado se usa como elevador para personas. Utiliza engranajes cilíndricos de diente recto con <strong>módulo 3</strong> (ruedas A y B) y <strong>módulo 4</strong> en las ruedas C, D y E, y ángulo de presión 20° en todos los engranes. La velocidad del engrane A es de <strong>1200 rpm</strong>. Calcular los datos solicitados en las tablas anexas.</p>
</div>

<div class="ej-datos datos-largos">
  <div><dt>Entrada</dt><dd>n<sub>A</sub> = 1200 rpm</dd></div>
  <div><dt>Etapa 1</dt><dd>m = 3 mm · z<sub>A</sub> = 20 · z<sub>B</sub> = 70</dd></div>
  <div><dt>Etapa 2</dt><dd>m = 4 mm · z<sub>C</sub> = 18 · z<sub>D</sub> = 22</dd></div>
  <div><dt>Etapa 3</dt><dd>m = 4 mm · z<sub>D</sub> = 22 · z<sub>E</sub> = 54</dd></div>
  <div><dt>Ángulo</dt><dd>φ = 20° en todos</dd></div>
</div>

<p>La disposición es: A en el eje 1; B y C en el eje 2 (solidarios); D en el eje 3; E en el eje 4. Ojo con D: es un engrane <strong>intermedio</strong> que engrana con C y con E, así que sus 22 dientes aparecen una vez en el numerador y otra en el denominador y se cancelan.</p>

<ol class="pasos">
<li><strong>Geometría de A y B</strong> (m = 3). Las dos ruedas comparten adendo, dedendo, paso y holguras:
<div class="f">$$ \begin{gathered} a = 3 \\ b = 3{,}75 \\ p_c = 9{,}4248 \\ c = 0{,}75 \\ h_c = 0{,}1885 \\ D_{pA} = 3\cdot 20 = 60 \\ D_{pB} = 3\cdot 70 = 210 \\ D_{bA} = 60\cos 20^\circ = 56{,}38 \\ D_{bB} = 210\cos 20^\circ = 197{,}34 \\ D_{eA} = 66 \\ D_{eB} = 216 \\ D_{iA} = 52{,}5 \\ D_{iB} = 202{,}5 \end{gathered} $$</div></li>
<li><strong>Velocidades.</strong> De A a B:
<div class="f">$$ n_B = 1200\cdot\frac{20}{70} = 342{,}86\ \text{rpm} $$</div>
De C a D (C gira con B):
<div class="f">$$ n_D = 342{,}86\cdot\frac{18}{22} = 280{,}52\ \text{rpm} $$</div>
De D a E:
<div class="f">$$ \begin{gathered} n_E = 280{,}52\cdot\frac{22}{54} = 114{,}29\ \text{rpm} \\ \omega_E = 11{,}97\ \text{rad/s} \end{gathered} $$</div></li>
<li><strong>Control.</strong> D se cancela: n<sub>E</sub> = 1200·(20/70)·(18/54) = 114,29 rpm. La relación total es 1200/114,29 = 10,5.</li>
<li><strong>Distancia entre centros eje 1 y eje 4.</strong> Las tres etapas están alineadas:
<div class="f">$$ \begin{gathered} a_{AB} = \frac{60+210}{2} = 135\ \text{mm} \\ a_{CD} = \frac{4\cdot 18+4\cdot 22}{2} = \frac{72+88}{2} = 80\ \text{mm} \\ a_{DE} = \frac{4\cdot 22+4\cdot 54}{2} = \frac{88+216}{2} = 152\ \text{mm} \\ C_{14} = 135 + 80 + 152 = 367\ \text{mm} \end{gathered} $$</div></li>
</ol>

<div class="tabla-wrap">
<table class="tec compacta">
<thead><tr><th>Ítem</th><th class="num">Engrane A</th><th class="num">Engrane B</th><th>Unidad</th></tr></thead>
<tbody>
<tr><td>Adendo</td><td class="num">3</td><td class="num">3</td><td>mm</td></tr>
<tr><td>Dedendo</td><td class="num">3,75</td><td class="num">3,75</td><td>mm</td></tr>
<tr><td>Diámetro primitivo</td><td class="num">60</td><td class="num">210</td><td>mm</td></tr>
<tr><td>Diámetro de base</td><td class="num">56,38</td><td class="num">197,34</td><td>mm</td></tr>
<tr><td>Diámetro de adendo</td><td class="num">66</td><td class="num">216</td><td>mm</td></tr>
<tr><td>Diámetro de dedendo</td><td class="num">52,5</td><td class="num">202,5</td><td>mm</td></tr>
<tr><td>Paso circular</td><td class="num">9,4248</td><td class="num">9,4248</td><td>mm</td></tr>
<tr><td>Holgura radial</td><td class="num">0,75</td><td class="num">0,75</td><td>mm</td></tr>
<tr><td>Holgura circunferencial</td><td class="num">0,1885</td><td class="num">0,1885</td><td>mm</td></tr>
</tbody>
</table>
</div>

<div class="resultado"><span class="r-lbl">Resultados:</span> <span class="r-val">C<sub>14</sub> = 367 mm · n<sub>E</sub> = 114,29 rpm · ω<sub>E</sub> = 11,97 rad/s</span></div>

<div class="caja truco">
<p class="caja-tit">Las dos holguras no son lo mismo</p>
<p><strong>Holgura radial</strong> es el juego entre la punta de un diente y el fondo del otro: vale 0,25·m = 0,75 mm. <strong>Holgura circunferencial</strong> (backlash) es el juego entre flancos: la cátedra toma h<sub>c</sub> = p<sub>c</sub>/50 = 0,1885 mm. Si escribís 0,0942 en la radial estás poniendo h<sub>c</sub>/2, que no es ninguna de las dos.</p>
</div>

<h3>Ejercicio B · Lewis del par D–E (40 pts)</h3>

<div class="caja dato">
<p class="caja-tit">Enunciado</p>
<p>Considerando la transmisión de engrane del ejercicio 1 <strong>(entre engrane D y E)</strong>, y con los siguientes datos: ancho del diente 28 mm; fabricación: tallado por fresa madre; material: SAE 4140 grado 1, nitrurado endurecido completamente; dureza: 275 HB. Se asume una eficiencia del 100 % en la transmisión. Determinar V, W<sub>t</sub>, Y, K<sub>v</sub>, σ, S<sub>t</sub> y f<sub>seg</sub>.</p>
</div>

<div class="ej-datos datos-largos">
  <div><dt>Par</dt><dd>D–E · m = 4 mm</dd></div>
  <div><dt>z<sub>D</sub> / z<sub>E</sub></dt><dd>22 / 54</dd></div>
  <div><dt>n<sub>D</sub></dt><dd>280,52 rpm</dd></div>
  <div><dt>D<sub>pD</sub></dt><dd>88 mm</dd></div>
  <div><dt>Ancho F</dt><dd>28 mm</dd></div>
  <div><dt>Potencia</dt><dd>2 kW = 2000 W</dd></div>
  <div><dt>Material</dt><dd>SAE 4140 g1 nitrurado · 275 HB</dd></div>
  <div><dt>Tallado</dt><dd>fresa madre</dd></div>
</div>

<ol class="pasos">
<li><strong>Velocidad tangencial.</strong> Se calcula en D (o en E; da lo mismo porque la velocidad de la circunferencia primitiva es la misma):
<div class="f">$$ V = \frac{\pi\cdot 88\cdot 280{,}52}{60\,000} = 1{,}2925\ \text{m/s} $$</div></li>
<li><strong>Carga tangencial.</strong> Con η = 100 %:
<div class="f">$$ W_t = \frac{H}{V} = \frac{2000}{1{,}2925} = 1547{,}3\ \text{N} $$</div></li>
<li><strong>Factor geométrico.</strong> Para z<sub>D</sub> = 22, de tabla:
<div class="f">$$ Y = 0{,}331 $$</div></li>
<li><strong>Factor dinámico.</strong> Fresa madre = “generado con fresa madre”, con raíz de V:
<div class="f">$$ K_v = \frac{3{,}56+\sqrt{V}}{3{,}56} $$</div>
<div class="f">$$ K_v = \frac{3{,}56+\sqrt{1{,}2925}}{3{,}56} $$</div>
<div class="f">$$ K_v = \frac{3{,}56+1{,}1369}{3{,}56} = 1{,}3194 $$</div></li>
<li><strong>Esfuerzo aplicado.</strong>
<div class="f">$$ \sigma = \frac{K_v\,W_t}{F\,m\,Y} $$</div>
<div class="f">$$ \sigma = \frac{1{,}3194\cdot 1547{,}3}{28\cdot 4\cdot 0{,}331} = \frac{2041{,}5}{37{,}072} = 55{,}07\ \text{MPa} $$</div></li>
<li><strong>Tensión admisible.</strong> 4140 grado 1 nitrurado (figura 14-3):
<div class="f">$$ S_t = 0{,}568\cdot 275 + 83{,}8 = 240{,}0\ \text{MPa} $$</div></li>
<li><strong>Factor de seguridad.</strong>
<div class="f">$$ f_{seg} = \frac{240{,}0}{55{,}07} = 4{,}36 $$</div></li>
</ol>

<div class="tabla-wrap">
<table class="tec compacta">
<thead><tr><th>Ítem</th><th class="num">Valor</th><th>Unidad</th></tr></thead>
<tbody>
<tr><td>Velocidad tangencial</td><td class="num">1,2925</td><td>m/s</td></tr>
<tr><td>Carga tangencial</td><td class="num">1547,3</td><td>N</td></tr>
<tr><td>Factor geométrico</td><td class="num">0,331</td><td>—</td></tr>
<tr><td>Factor dinámico</td><td class="num">1,3194</td><td>—</td></tr>
<tr><td>Esfuerzo aplicado</td><td class="num">55,07</td><td>MPa</td></tr>
<tr><td>Tensión admisible</td><td class="num">240,0</td><td>MPa</td></tr>
<tr><td>Factor de seguridad</td><td class="num">4,36</td><td>—</td></tr>
</tbody>
</table>
</div>

<div class="resultado"><span class="r-lbl">Resultado:</span> <span class="r-val">σ = 55,07 MPa · S<sub>t</sub> = 240 MPa · f<sub>seg</sub> = 4,36 → sobra material</span></div>

<div class="caja idea">
<p class="caja-tit">Por qué acá S<sub>t</sub> es tan alto</p>
<p>El mismo 4140, pero nitrurado y con 275 HB, sube la tensión admisible a 240 MPa. El esfuerzo es bajo porque el módulo es grande (4 mm) y el ancho también (28 mm): la sección que resiste es más grande. Por eso el factor de seguridad da 4,36 y no 1,4 como en el examen de diciembre.</p>
</div>

<div class="caja truco">
<p class="caja-tit">¿De dónde salen los 2 kW?</p>
<p>El enunciado del ejercicio B no repite la potencia: se toma la del motor del ejercicio A. Con 2 kW y V = 1,2925 m/s, W<sub>t</sub> = 1547 N, que es el valor que cierra con el resto de la tabla (σ = 55 MPa). Si usás 0,75 kW te da un tercio de la fuerza y el factor de seguridad se va a 11,6: no es el examen.</p>
</div>

<h2 id="examenes--e2026">Recuperatorio 17/03/2026 · Comisión B</h2>
<p class="bajada">Módulo 03: Engranajes · 80 minutos · Ejercicio A 40 pts, B 30 pts, C 30 pts. Es el examen con más transmisiones previas: poleas trapezoidales y cadena antes de los engranes.</p>

<h3>Ejercicio A · Tren con poleas y cadena (40 pts)</h3>

<div class="caja dato">
<p class="caja-tit">Enunciado</p>
<p>El tren de engranajes mostrado se usa en una máquina industrial. La primera etapa de engranajes cilíndricos es de diente recto con <strong>módulo 2,5</strong> y ángulo de presión 20°, y la segunda etapa es de diente recto con <strong>módulo 4</strong> y ángulo de presión 20°. Calcular los datos solicitados en las tablas anexas.</p>
</div>

<div class="ej-datos datos-largos">
  <div><dt>Motor</dt><dd>1500 rpm · 1 kW</dd></div>
  <div><dt>Poleas</dt><dd>trapezoidales B · 120 mm → 170 mm</dd></div>
  <div><dt>Cadena</dt><dd>ANSI 80 · 17 dientes → 42 dientes</dd></div>
  <div><dt>1.ª etapa</dt><dd>m = 2,5 mm · z₁ = 13 · z₂ = 52</dd></div>
  <div><dt>2.ª etapa</dt><dd>m = 4 mm · z₃ = 19 · z₄ = 78</dd></div>
</div>

<p>Acá hay <strong>dos reducciones antes de los engranes</strong>: la polea (120/170) y la cadena (17/42). Las dos multiplican por z<sub>conductor</sub>/z<sub>conducido</sub> y las dos hay que aplicarlas; olvidarse una es el error más común.</p>

<ol class="pasos">
<li><strong>Velocidad del eje 1.</strong> Primero la polea, después la cadena:
<div class="f">$$ \begin{gathered} n_{polea} = 1500\cdot\frac{120}{170} = 1058{,}82\ \text{rpm} \\ n_1 = 1058{,}82\cdot\frac{17}{42} = 428{,}57\ \text{rpm} \end{gathered} $$</div></li>
<li><strong>Velocidad del eje 4.</strong> Engrane 1 → 2 y engrane 3 → 4:
<div class="f">$$ n_4 = 428{,}57\cdot\frac{13}{52}\cdot\frac{19}{78} $$</div>
<div class="f">$$ n_4 = 428{,}57\cdot 0{,}25\cdot 0{,}24359 = 26{,}10\ \text{rpm} $$</div>
<div class="f">$$ \omega_4 = 26{,}10\cdot\frac{2\pi}{60} = 2{,}733\ \text{rad/s} $$</div></li>
<li><strong>Geometría de 1 y 2</strong> (m = 2,5):
<div class="f">$$ \begin{gathered} a = 2{,}5 \\ b = 3{,}125 \\ p_c = 7{,}854 \\ c = 0{,}625 \\ h_c = 0{,}1571 \\ D_{p1} = 2{,}5\cdot 13 = 32{,}5 \\ D_{p2} = 2{,}5\cdot 52 = 130 \\ D_{b1} = 32{,}5\cos 20^\circ = 30{,}54 \\ D_{b2} = 130\cos 20^\circ = 122{,}16 \\ D_{e1} = 37{,}5 \\ D_{e2} = 135 \\ D_{i1} = 26{,}25 \\ D_{i2} = 123{,}75 \end{gathered} $$</div></li>
<li><strong>Distancia entre centros eje 1 y eje 4.</strong>
<div class="f">$$ \begin{gathered} a_{12} = \frac{32{,}5+130}{2} = 81{,}25\ \text{mm} \\ a_{34} = \frac{4\cdot 19+4\cdot 78}{2} = \frac{76+312}{2} = 194\ \text{mm} \\ C_{14} = 81{,}25 + 194 = 275{,}25\ \text{mm} \end{gathered} $$</div></li>
</ol>

<div class="tabla-wrap">
<table class="tec compacta">
<thead><tr><th>Ítem</th><th class="num">Engrane 1</th><th class="num">Engrane 2</th><th>Unidad</th></tr></thead>
<tbody>
<tr><td>Adendo</td><td class="num">2,5</td><td class="num">2,5</td><td>mm</td></tr>
<tr><td>Dedendo</td><td class="num">3,125</td><td class="num">3,125</td><td>mm</td></tr>
<tr><td>Diámetro primitivo</td><td class="num">32,5</td><td class="num">130</td><td>mm</td></tr>
<tr><td>Diámetro de base</td><td class="num">30,54</td><td class="num">122,16</td><td>mm</td></tr>
<tr><td>Diámetro de adendo</td><td class="num">37,5</td><td class="num">135</td><td>mm</td></tr>
<tr><td>Diámetro de dedendo</td><td class="num">26,25</td><td class="num">123,75</td><td>mm</td></tr>
<tr><td>Paso circular</td><td class="num">7,854</td><td class="num">7,854</td><td>mm</td></tr>
<tr><td>Holgura radial</td><td class="num">0,625</td><td class="num">0,625</td><td>mm</td></tr>
<tr><td>Holgura circunferencial</td><td class="num">0,1571</td><td class="num">0,1571</td><td>mm</td></tr>
</tbody>
</table>
</div>

<div class="resultado"><span class="r-lbl">Resultados:</span> <span class="r-val">C<sub>14</sub> = 275,25 mm · n<sub>4</sub> = 26,10 rpm · ω<sub>4</sub> = 2,733 rad/s</span></div>

<div class="caja truco">
<p class="caja-tit">Dos reducciones, no una</p>
<p>La polea baja de 1500 a 1058,82 rpm y la cadena de 1058,82 a 428,57 rpm. Si te saltás la polea, n₁ = 607,14 rpm y todos los resultados de B quedan al doble. La cadena ANSI 80 tiene paso 1 pulgada (25,4 mm), pero para la cinemática no hace falta: solo importan los dientes.</p>
</div>

<h3>Ejercicio B · Lewis del par 1–2 (30 pts)</h3>

<div class="caja dato">
<p class="caja-tit">Enunciado</p>
<p>Considerando la transmisión de engrane del ejercicio 1 <strong>(entre engrane 1 y 2)</strong>, y con los siguientes datos: ancho del diente 23 mm; fabricación: tallado por fresadora; material: acero grado 1 completamente endurecido; dureza: 240 HB. Determinar V, W<sub>t</sub>, Y, K<sub>v</sub>, σ, S<sub>t</sub> y f<sub>seg</sub>.</p>
</div>

<div class="ej-datos datos-largos">
  <div><dt>Par</dt><dd>1–2 · m = 2,5 mm</dd></div>
  <div><dt>z₁ / z₂</dt><dd>13 / 52</dd></div>
  <div><dt>n₁</dt><dd>428,57 rpm</dd></div>
  <div><dt>D<sub>p1</sub></dt><dd>32,5 mm</dd></div>
  <div><dt>Ancho F</dt><dd>23 mm</dd></div>
  <div><dt>Potencia</dt><dd>1 kW = 1000 W</dd></div>
  <div><dt>Material</dt><dd>acero grado 1 · 240 HB</dd></div>
  <div><dt>Tallado</dt><dd>fresadora</dd></div>
</div>

<ol class="pasos">
<li><strong>Velocidad tangencial.</strong>
<div class="f">$$ V = \frac{\pi\cdot 32{,}5\cdot 428{,}57}{60\,000} = 0{,}7293\ \text{m/s} $$</div></li>
<li><strong>Carga tangencial.</strong>
<div class="f">$$ W_t = \frac{1000}{0{,}7293} = 1371{,}2\ \text{N} $$</div></li>
<li><strong>Factor geométrico.</strong> Para z₁ = 13 (tabla, φ = 20°, altura completa):
<div class="f">$$ Y = 0{,}261 $$</div></li>
<li><strong>Factor dinámico.</strong> Fresadora:
<div class="f">$$ K_v = \frac{6{,}1+0{,}7293}{6{,}1} = 1{,}1196 $$</div></li>
<li><strong>Esfuerzo aplicado.</strong>
<div class="f">$$ \sigma = \frac{K_v\,W_t}{F\,m\,Y} $$</div>
<div class="f">$$ \sigma = \frac{1{,}1196\cdot 1371{,}2}{23\cdot 2{,}5\cdot 0{,}261} = \frac{1535{,}2}{15{,}008} = 102{,}29\ \text{MPa} $$</div></li>
<li><strong>Tensión admisible.</strong> Acero grado 1 completamente endurecido (figura 14-2):
<div class="f">$$ S_t = 0{,}533\cdot 240 + 88{,}3 = 216{,}22\ \text{MPa} $$</div></li>
<li><strong>Factor de seguridad.</strong>
<div class="f">$$ f_{seg} = \frac{216{,}22}{102{,}29} = 2{,}11 $$</div></li>
</ol>

<div class="tabla-wrap">
<table class="tec compacta">
<thead><tr><th>Ítem</th><th class="num">Valor</th><th>Unidad</th></tr></thead>
<tbody>
<tr><td>Velocidad tangencial</td><td class="num">0,7293</td><td>m/s</td></tr>
<tr><td>Carga tangencial</td><td class="num">1371,2</td><td>N</td></tr>
<tr><td>Factor geométrico</td><td class="num">0,261</td><td>—</td></tr>
<tr><td>Factor dinámico</td><td class="num">1,1196</td><td>—</td></tr>
<tr><td>Esfuerzo aplicado</td><td class="num">102,29</td><td>MPa</td></tr>
<tr><td>Tensión admisible</td><td class="num">216,22</td><td>MPa</td></tr>
<tr><td>Factor de seguridad</td><td class="num">2,11</td><td>—</td></tr>
</tbody>
</table>
</div>

<div class="resultado"><span class="r-lbl">Resultado:</span> <span class="r-val">σ = 102,29 MPa · S<sub>t</sub> = 216,22 MPa · f<sub>seg</sub> = 2,11 → verifica</span></div>

<div class="caja truco">
<p class="caja-tit">Y para 13 dientes es 0,261</p>
<p>En la foto figura 0,290, que es el valor de 15 dientes. La tabla de la cátedra da Y = 0,261 para z = 13: el diente de 13 es más chico y más débil, y por eso el esfuerzo sube. Es el único dato que hay que buscar sí o sí en la tabla.</p>
</div>

<h3>Ejercicio C · Reductor helicoidal de 3 etapas (30 pts)</h3>

<div class="caja dato">
<p class="caja-tit">Enunciado</p>
<p>Del reductor mostrado en la figura, completar los datos faltantes en la tabla (3 pts cada uno).</p>
</div>

<div class="ej-datos datos-largos">
  <div><dt>Entrada</dt><dd>n<sub>e</sub> = 1200 rpm</dd></div>
  <div><dt>Módulo normal</dt><dd>m<sub>n</sub> = 4 mm</dd></div>
  <div><dt>Ángulo de hélice</dt><dd>ψ = 12°</dd></div>
  <div><dt>z₁ · z₂ · z₃</dt><dd>17 · 64 · 23</dd></div>
  <div><dt>z₄ · z₅ · z₆</dt><dd>48 · 17 · 52</dd></div>
  <div><dt>Etapas</dt><dd>1–2, 3–4 y 5–6</dd></div>
</div>

<ol class="pasos">
<li><strong>Módulo transversal.</strong>
<div class="f">$$ m_t = \frac{m_n}{\cos 12^\circ} = \frac{4}{\cos 12^\circ} $$</div>
<div class="f">$$ m_t = \frac{4}{0{,}97815} = 4{,}0894\ \text{mm} $$</div></li>
<li><strong>Diámetros primitivos.</strong>
<div class="f">$$ \begin{gathered} D_1 = 4{,}0894\cdot 17 = 69{,}52 \\ D_2 = 4{,}0894\cdot 64 = 261{,}72 \\ D_3 = 4{,}0894\cdot 23 = 94{,}06 \\ D_4 = 4{,}0894\cdot 48 = 196{,}29 \\ D_5 = 4{,}0894\cdot 17 = 69{,}52 \\ D_6 = 4{,}0894\cdot 52 = 212{,}65 \end{gathered} $$</div></li>
<li><strong>Relación total.</strong>
<div class="f">$$ i = \frac{64}{17}\cdot\frac{48}{23}\cdot\frac{52}{17} $$</div>
<div class="f">$$ i = 3{,}7647\cdot 2{,}0870\cdot 3{,}0588 = 24{,}03 $$</div></li>
<li><strong>Velocidad de salida.</strong>
<div class="f">$$ n_s = \frac{1200}{24{,}03} = 49{,}93\ \text{rpm} $$</div></li>
<li><strong>Distancia entre centros.</strong>
<div class="f">$$ C_e = \frac{D_1+D_2}{2} + \frac{D_3+D_4}{2} + \frac{D_5+D_6}{2} $$</div>
<div class="f">$$ C_e = 165{,}62 + 145{,}17 + 141{,}08 = 451{,}87\ \text{mm} $$</div></li>
<li><strong>Tipo de reductor.</strong> <strong>Helicoidal de 3 etapas</strong>, ejes paralelos.</li>
</ol>

<div class="tabla-wrap">
<table class="tec compacta">
<thead><tr><th>Ítem</th><th class="num">Valor</th><th>Unidad</th></tr></thead>
<tbody>
<tr><td>Módulo transversal m<sub>t</sub></td><td class="num">4,0894</td><td>mm</td></tr>
<tr><td>Diámetro engrane 1</td><td class="num">69,52</td><td>mm</td></tr>
<tr><td>Diámetro engrane 2</td><td class="num">261,72</td><td>mm</td></tr>
<tr><td>Diámetro engrane 3</td><td class="num">94,06</td><td>mm</td></tr>
<tr><td>Diámetro engrane 4</td><td class="num">196,29</td><td>mm</td></tr>
<tr><td>Diámetro engrane 5</td><td class="num">69,52</td><td>mm</td></tr>
<tr><td>Diámetro engrane 6</td><td class="num">212,65</td><td>mm</td></tr>
<tr><td>Velocidad de salida n<sub>s</sub></td><td class="num">49,93</td><td>rpm</td></tr>
<tr><td>Distancia entre centros C<sub>e</sub></td><td class="num">451,87</td><td>mm</td></tr>
<tr><td>Tipo de reductor</td><td colspan="2">helicoidal de 3 etapas (ejes paralelos)</td></tr>
</tbody>
</table>
</div>

<div class="resultado"><span class="r-lbl">Resultado:</span> <span class="r-val">m<sub>t</sub> = 4,0894 mm · i = 24,03 · n<sub>s</sub> = 49,93 rpm · C<sub>e</sub> = 451,87 mm</span></div>

<div class="caja idea">
<p class="caja-tit">Chequeo rápido de la tabla</p>
<p>La suma de todos los dientes es 17 + 64 + 23 + 48 + 17 + 52 = 221. La distancia total es m<sub>t</sub>·221/2 = 4,0894·110,5 = 451,9 mm. Es el atajo para no sumar las tres etapas por separado y detectar un error de tipeo.</p>
</div>

<h2>Cómo se reparten los puntos y qué mirar primero</h2>

<div class="tabla-wrap">
<table class="tec compacta">
<thead><tr><th>Examen</th><th class="num">A</th><th class="num">B</th><th class="num">C</th><th class="num">Total</th><th>Tiempo</th></tr></thead>
<tbody>
<tr><td>02/12/2025</td><td class="num">40</td><td class="num">30</td><td class="num">30</td><td class="num">100</td><td>80 min</td></tr>
<tr><td>22/11/2022</td><td class="num">60</td><td class="num">40</td><td class="num">—</td><td class="num">100</td><td>60 min</td></tr>
<tr><td>17/03/2026 (recup.)</td><td class="num">40</td><td class="num">30</td><td class="num">30</td><td class="num">100</td><td>80 min</td></tr>
</tbody>
</table>
</div>

<p>El A siempre es el que más puntos vale y el más largo: geometría de dos ruedas + cadena cinemática + distancia entre centros. El B es corto pero acumula muchos puntajes chicos (V, W<sub>t</sub>, Y, K<sub>v</sub>, σ, S<sub>t</sub>, f), así que conviene hacerlo completo aunque sea con cuentas redondeadas. El C es el más “de tabla”: si sabés m<sub>t</sub> = m<sub>n</sub>/cos ψ y sumás las tres distancias, son 30 puntos casi regalados.</p>

<div class="caja truco">
<p class="caja-tit">Los cinco errores que más puntos cuestan</p>
<ol class="pasos">
<li><strong>Confundir el número de dientes</strong> de dos ruedas del mismo eje (58 vs 19 en diciembre; 22 vs 54 en el de 2022).</li>
<li><strong>Usar m<sub>n</sub> en lugar de m<sub>t</sub></strong> en los diámetros de un helicoidal.</li>
<li><strong>Olvidar una reducción previa</strong> (polea o cadena) y arrastrar el error a todo el B.</li>
<li><strong>Poner V en mm/s o W<sub>t</sub> en kN</strong>: el resultado numérico puede estar bien y la unidad mal, y el examen descuenta igual.</li>
<li><strong>No verificar f<sub>seg</sub> ≥ 1,2</strong>: el número solo no alcanza, hay que decir si verifica o no.</li>
</ol>
</div>
`
});
