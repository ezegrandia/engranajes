/* =========================================================================
   CONTENIDO · 2. CÁLCULO MECÁNICO
   Capítulos: fuerzas, lewis, seleccion-modulo, formulario
   ========================================================================= */
window.CAPITULOS = window.CAPITULOS || [];

/* -------------------------------------------------------------- FUERZAS */
window.CAPITULOS.push({
  id: "fuerzas",
  grupo: "2 · Cálculo",
  titulo: "Potencia, par y fuerzas",
  html: String.raw`
<h1>Potencia, par y fuerzas en el diente</h1>
<p class="bajada">Toda verificación arranca igual: de la potencia y la velocidad sacás el par; del par y el diámetro primitivo, la fuerza tangencial. Estos tres números (T, W<sub>t</sub>, W) son la entrada de Lewis, del cálculo del árbol y de la selección de rodamientos.</p>

<h2>Potencia, par y velocidad angular</h2>
<p>La potencia es par por velocidad angular. Con H en watt, T en N·m y ω en rad/s:</p>

<div class="f f-grande">$$ H = T \cdot \omega \qquad\qquad T = \frac{H}{\omega} \qquad\qquad \omega = \frac{2\pi n}{60} $$<span class="f-nota">n en rpm. Si H viene en HP: H[W] = H[HP] × 745. Si viene en kW: H[W] = H[kW] × 1000.</span></div>

<h2>La fuerza tangencial</h2>
<p>El par se transmite por una fuerza aplicada sobre la circunferencia primitiva. Como T = W<sub>t</sub>·(D<sub>p</sub>/2):</p>

<div class="f f-grande">$$ W_t = \frac{2T}{D_p} = \frac{60\,000 \cdot H}{\pi \cdot D_p \cdot n} $$<span class="f-nota">W<sub>t</sub> en N, H en W, D<sub>p</sub> en mm, n en rpm. Es la fórmula de la cátedra (con D<sub>p</sub> en mm y el 60 000 para pasar de rpm a rad/s y de mm a m).</span></div>

<h2>Descomposición de la fuerza</h2>
<p>El diente no empuja "de costado" puro: la fuerza resultante W es normal al flanco, y por eso está inclinada el ángulo de presión φ respecto de la tangente.</p>

<figure class="figura">
<svg viewBox="0 0 440 300" role="img" aria-label="Descomposición de la fuerza en el diente: fuerza tangencial, radial y resultante con el ángulo de presión">
  <circle cx="170" cy="180" r="100" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="6 4"/>
  <circle cx="170" cy="180" r="3.2" fill="currentColor"/>
  <text class="svg-tenue" x="170" y="288" font-size="10.5" text-anchor="middle">circunferencia primitiva (D<tspan font-size="8" dy="3">p</tspan><tspan dy="-3">)</tspan></text>
  <!-- tangente -->
  <line x1="40" y1="80" x2="330" y2="80" stroke="currentColor" stroke-width="1" stroke-dasharray="3 4" stroke-opacity=".6"/>
  <!-- Wt -->
  <line x1="170" y1="80" x2="296" y2="80" stroke="currentColor" stroke-width="2.2"/>
  <polygon points="304,80 293,75 293,85" fill="currentColor"/>
  <text class="svg-txt" x="246" y="70" font-size="12.5" font-weight="700" text-anchor="middle">W<tspan font-size="9" dy="3">t</tspan></text>
  <!-- Wr -->
  <line x1="170" y1="80" x2="170" y2="168" stroke="currentColor" stroke-width="2.2"/>
  <polygon points="170,176 165,165 175,165" fill="currentColor"/>
  <text class="svg-txt" x="183" y="130" font-size="12.5" font-weight="700">W<tspan font-size="9" dy="3">r</tspan></text>
  <!-- W -->
  <line x1="170" y1="80" x2="282.8" y2="121" stroke="var(--ac)" stroke-width="2.4"/>
  <polygon points="282.8,121 272.8,122.2 275.9,113.7" fill="var(--ac)"/>
  <text class="svg-txt" x="296" y="120" font-size="12.5" font-weight="700" fill="var(--ac)">W</text>
  <!-- ángulo -->
  <path d="M 230 80 A 60 60 0 0 1 226.4 100.5" fill="none" stroke="currentColor" stroke-width="1.4"/>
  <text class="svg-txt" x="240" y="101" font-size="11" font-style="italic">φ</text>
  <text class="svg-tenue" x="330" y="60" font-size="10.5" text-anchor="middle">tangente al</text>
  <text class="svg-tenue" x="330" y="72" font-size="10.5" text-anchor="middle">círculo primitivo</text>
</svg>
<figcaption>En el punto de contacto: W<sub>t</sub> tangente, W<sub>r</sub> radial hacia el centro y W resultante (normal al flanco). El ángulo entre W<sub>t</sub> y W es el ángulo de presión φ.</figcaption>
</figure>

<div class="f f-grande">$$ W_r = W_t \cdot \tan\varphi \qquad\qquad W = \frac{W_t}{\cos\varphi} \qquad\qquad W = \sqrt{W_t^2 + W_r^2} $$</div>

<div class="tabla-wrap">
<table class="tec">
<thead><tr><th>Fuerza</th><th>De dónde sale</th><th>Para qué se usa</th><th>Con φ = 20°</th></tr></thead>
<tbody>
<tr><td><strong>W<sub>t</sub></strong> tangencial</td><td>Del par transmitido</td><td>Verificación del <strong>diente</strong> (Lewis, AGMA)</td><td class="num">100 %</td></tr>
<tr><td><strong>W<sub>r</sub></strong> radial</td><td>De la forma del diente</td><td>Flexión del <strong>árbol</strong> y vida de los rodamientos</td><td class="num">36,4 %</td></tr>
<tr><td><strong>W</strong> resultante</td><td>Composición de las dos</td><td>Verificación global del árbol</td><td class="num">106,4 %</td></tr>
</tbody>
</table>
</div>

<div class="caja ojo">
<p class="caja-tit">El error más común</p>
<p>W<sub>t</sub> es <strong>siempre mayor</strong> que W<sub>r</sub> (casi el triple) y W es solo un 6 % mayor que W<sub>t</sub>. Si te quedó W &lt; W<sub>t</sub>, invertiste el coseno. Y si usaste W en lugar de W<sub>t</sub> en Lewis, te da 6 % más de tensión: no es un error grave, pero no es lo que pide la cátedra.</p>
</div>

<h2>Ejemplo resuelto (TP, primer bloque)</h2>
<p>Motor de 135 HP a 800 rpm, m = 6 mm, z₁ = 17 (D<sub>p1</sub> = 102 mm).</p>

<ol class="pasos">
<li><strong>Potencia en watt</strong>
<div class="f">$$ H = 135\ \text{HP} \cdot 745\ \frac{\text{W}}{\text{HP}} = 100\,575\ \text{W} \approx 100\,640\ \text{W} $$</div></li>
<li><strong>Velocidad angular</strong>
<div class="f">$$ \omega = \frac{2\pi \cdot 800}{60} = 83{,}776\ \text{rad/s} $$</div></li>
<li><strong>Torque</strong>
<div class="f">$$ T = \frac{H}{\omega} = \frac{100\,640}{83{,}776} = 1201{,}3\ \text{N}\cdot\text{m} $$</div></li>
<li><strong>Fuerza tangencial</strong> (r₁ = D<sub>p1</sub>/2 = 51 mm = 0,051 m)
<div class="f">$$ W_t = \frac{T}{r_1} = \frac{1201{,}3}{0{,}051} = 23\,555\ \text{N} $$</div></li>
<li><strong>Fuerza radial y resultante</strong>
<div class="f">$$ W_r = 23\,555 \cdot \tan 20^\circ = 23\,555 \cdot 0{,}36397 = 8573\ \text{N} $$</div>
<div class="f">$$ W = \frac{23\,555}{\cos 20^\circ} = \frac{23\,555}{0{,}93969} = 25\,067\ \text{N} $$</div></li>
</ol>
<div class="resultado"><span class="r-lbl">Resultado:</span> <span class="r-val">T = 1201,3 N·m · W<sub>t</sub> = 23 555 N · W<sub>r</sub> = 8573 N · W = 25 067 N</span></div>

<h2>Qué pasa con el par en una reducción</h2>
<p>La potencia se conserva (salvo pérdidas), pero como el eje de salida gira más lento, el par aumenta en la misma proporción:</p>

<div class="f f-grande">$$ H_1 = H_2 \;\Rightarrow\; T_1\omega_1 = T_2\omega_2 \;\Rightarrow\; \frac{T_2}{T_1} = \frac{\omega_1}{\omega_2} = i $$</div>

<div class="caja idea">
<p class="caja-tit">Regla de oro</p>
<p><strong>La velocidad se divide por i y el par se multiplica por i.</strong> Si además hay rendimiento η, el par de salida es T₂ = T₁·i·η. Con η = 0,92 y i = 2,24, el par se multiplica por 2,06, no por 2,24.</p>
<p>Corolario: los árboles de salida y los engranajes de la última etapa son los más cargados. Por eso en los reductores el módulo crece hacia la salida.</p>
</div>

<h2>Checklist del capítulo</h2>
<div class="caja">
<ul>
<li>¿Pasás de HP a W con 745 (no con 736)?</li>
<li>¿Calculás ω con 2πn/60 y no con n directamente?</li>
<li>¿Usás D<sub>p</sub>/2 (radio) al dividir el par?</li>
<li>¿Sabés qué fuerza se usa para el diente y cuál para el árbol?</li>
<li>¿Podés explicar por qué el par aumenta al reducir la velocidad?</li>
</ul>
</div>
`
});

/* ----------------------------------------------------------------- LEWIS */
window.CAPITULOS.push({
  id: "lewis",
  grupo: "2 · Cálculo",
  titulo: "Cálculo mecánico: Lewis",
  html: String.raw`
<h1>Cálculo mecánico del diente (Lewis + AGMA)</h1>
<p class="bajada">La verificación que cierra todos los ejercicios: se calcula la tensión de flexión en la raíz del diente, se la compara con la tensión admisible del material y se obtiene el factor de seguridad. Cinco fórmulas y dos tablas.</p>

<h2>La hipótesis de Lewis (1892)</h2>
<p>Wilfred Lewis modeló el diente como una <strong>viga en voladizo</strong> de sección rectangular, empotrada en la raíz y cargada en la punta por la fuerza tangencial W<sub>t</sub>:</p>

<figure class="figura">
<svg viewBox="0 0 640 300" role="img" aria-label="El diente modelado como viga en voladizo: longitud l, espesor t en la raíz y fuerza Wt en la punta">
  <!-- (a) viga -->
  <text x="150" y="30" font-size="11" text-anchor="middle" font-weight="700" fill-opacity=".75">(a) viga en voladizo</text>
  <rect x="70" y="120" width="210" height="42" fill="currentColor" fill-opacity=".1" stroke="currentColor" stroke-width="1.6"/>
  <g stroke="currentColor" stroke-width="1" stroke-opacity=".5">
    <line x1="62" y1="112" x2="78" y2="120"/><line x1="62" y1="132" x2="78" y2="140"/>
    <line x1="62" y1="152" x2="78" y2="160"/><line x1="62" y1="124" x2="66" y2="126"/>
  </g>
  <line x1="70" y1="120" x2="70" y2="162" stroke="currentColor" stroke-width="3"/>
  <!-- fuerza -->
  <line x1="280" y1="120" x2="280" y2="62" stroke="var(--alerta)" stroke-width="2.4"/>
  <polygon points="280,54 274,66 286,66" fill="var(--alerta)"/>
  <text x="288" y="66" font-size="12" font-weight="700" fill="var(--alerta)">W<tspan font-size="8" dy="2">t</tspan></text>
  <!-- cotas -->
  <line class="svg-tenue-linea" x1="70" y1="196" x2="70" y2="210"/>
  <line class="svg-tenue-linea" x1="280" y1="184" x2="280" y2="210"/>
  <line x1="70" y1="202" x2="280" y2="202" stroke="currentColor" stroke-width="1.2"/>
  <line x1="64" y1="202" x2="76" y2="202" stroke="currentColor" stroke-width="1.2"/>
  <line x1="274" y1="202" x2="286" y2="202" stroke="currentColor" stroke-width="1.2"/>
  <text x="175" y="220" font-size="11.5" text-anchor="middle" font-weight="700">l</text>
  <line class="svg-tenue-linea" x1="296" y1="120" x2="310" y2="120"/>
  <line class="svg-tenue-linea" x1="296" y1="162" x2="310" y2="162"/>
  <line x1="303" y1="120" x2="303" y2="162" stroke="currentColor" stroke-width="1.2"/>
  <line x1="297" y1="120" x2="309" y2="120" stroke="currentColor" stroke-width="1.2"/>
  <line x1="297" y1="162" x2="309" y2="162" stroke="currentColor" stroke-width="1.2"/>
  <text x="318" y="145" font-size="11.5" font-weight="700">t</text>
  <text x="150" y="262" font-size="10.5" text-anchor="middle" fill-opacity=".7">sección rectangular: F (ancho de cara) × t</text>
  <!-- (b) diente -->
  <text x="500" y="30" font-size="11" text-anchor="middle" font-weight="700" fill-opacity=".75">(b) el diente real</text>
  <rect x="410" y="196" width="190" height="40" fill="currentColor" fill-opacity=".06" stroke="currentColor" stroke-width="1.4"/>
  <polygon points="452,196 464,86 512,86 524,196" fill="currentColor" fill-opacity=".1" stroke="currentColor" stroke-width="1.6"/>
  <!-- fuerza en la punta -->
  <line x1="512" y1="86" x2="556" y2="86" stroke="var(--alerta)" stroke-width="2.2"/>
  <polygon points="564,86 552,81 552,91" fill="var(--alerta)"/>
  <text x="568" y="80" font-size="12" font-weight="700" fill="var(--alerta)">W<tspan font-size="8" dy="2">t</tspan></text>
  <!-- sección crítica -->
  <line class="svg-tenue-linea" x1="446" y1="196" x2="530" y2="196" stroke="var(--ac)" stroke-width="2" stroke-dasharray="5 3"/>
  <text x="532" y="214" font-size="10" fill="var(--ac)" font-weight="600">sección crítica</text>
  <!-- l -->
  <line class="svg-tenue-linea" x1="428" y1="86" x2="440" y2="86"/>
  <line class="svg-tenue-linea" x1="428" y1="196" x2="440" y2="196"/>
  <line x1="432" y1="86" x2="432" y2="196" stroke="currentColor" stroke-width="1.2"/>
  <line x1="426" y1="86" x2="438" y2="86" stroke="currentColor" stroke-width="1.2"/>
  <line x1="426" y1="196" x2="438" y2="196" stroke="currentColor" stroke-width="1.2"/>
  <text x="420" y="146" font-size="11.5" font-weight="700" text-anchor="end">l</text>
  <text x="500" y="256" font-size="10.5" text-anchor="middle" fill-opacity=".7">el diente trabaja como la viga de (a)</text>
</svg>
<figcaption>Lewis supone que la fuerza W<sub>t</sub> actúa en la punta y que la sección peligrosa es la de la raíz (línea verde), de espesor t y ancho F. Con eso la tensión es la de flexión pura: σ = 6·W<sub>t</sub>·l/(F·t²).</figcaption>
</figure>

<div class="f">$$ \sigma = \frac{M}{I/c} = \frac{6\,W_t\,l}{F\,t^2} $$<span class="f-nota">l = altura del diente, t = espesor en la raíz, F = ancho de cara. Es la flexión clásica de una viga.</span></div>

<p>Haciendo el análisis geométrico del perfil y reemplazando t y l por el paso y un factor de forma, queda la ecuación que se usa en la práctica:</p>

<div class="f f-grande">$$ \sigma = \frac{K_v \cdot W_t}{F \cdot m \cdot Y} \quad\text{(sistema módulo)} $$</div>
<div class="f">$$ \sigma = \frac{W_t \cdot P_d}{F \cdot Y} \quad\text{(sistema paso diametral)} $$</div>

<div class="f f-sin">$$ \sigma \text{ [MPa]} \qquad W_t \text{ [N]} \qquad F \text{ [mm]} \qquad m \text{ [mm]} \qquad Y \text{ [adimensional]} $$</div>

<div class="caja idea">
<p class="caja-tit">Qué hace cada letra</p>
<ul>
<li><strong>W<sub>t</sub></strong>: la carga tangencial que ya calculaste (2T/D<sub>p</sub>).</li>
<li><strong>F</strong>: ancho de cara; está en el denominador, así que agrandarlo baja la tensión.</li>
<li><strong>m</strong>: módulo; también en el denominador (y como el paso crece con m, en realidad la tensión va con 1/m²).</li>
<li><strong>Y</strong>: factor de forma de Lewis: depende solo del número de dientes. Cuantos menos dientes, más chico es Y y más tensión.</li>
<li><strong>K<sub>v</sub></strong>: factor dinámico, mayor que 1, que castiga la velocidad.</li>
</ul>
</div>

<h2>Tabla del factor de forma Y (φ = 20°, altura completa)</h2>
<div class="tabla-wrap">
<table class="tec compacta">
<thead><tr><th class="num">z</th><th class="num">Y</th><th class="num">z</th><th class="num">Y</th><th class="num">z</th><th class="num">Y</th><th class="num">z</th><th class="num">Y</th></tr></thead>
<tbody>
<tr><td class="num">12</td><td class="num">0,245</td><td class="num">19</td><td class="num">0,314</td><td class="num">28</td><td class="num">0,353</td><td class="num">60</td><td class="num">0,422</td></tr>
<tr><td class="num">13</td><td class="num">0,261</td><td class="num">20</td><td class="num">0,322</td><td class="num">30</td><td class="num">0,359</td><td class="num">75</td><td class="num">0,435</td></tr>
<tr><td class="num">14</td><td class="num">0,277</td><td class="num">21</td><td class="num">0,328</td><td class="num">34</td><td class="num">0,371</td><td class="num">100</td><td class="num">0,447</td></tr>
<tr><td class="num">15</td><td class="num">0,290</td><td class="num">22</td><td class="num">0,331</td><td class="num">38</td><td class="num">0,384</td><td class="num">150</td><td class="num">0,460</td></tr>
<tr><td class="num">16</td><td class="num">0,296</td><td class="num">24</td><td class="num">0,337</td><td class="num">43</td><td class="num">0,397</td><td class="num">300</td><td class="num">0,472</td></tr>
<tr><td class="num">17</td><td class="num">0,303</td><td class="num">26</td><td class="num">0,346</td><td class="num">50</td><td class="num">0,409</td><td class="num">400</td><td class="num">0,480</td></tr>
<tr><td class="num">18</td><td class="num">0,309</td><td class="num">—</td><td class="num">—</td><td class="num">—</td><td class="num">—</td><td class="num">cremallera</td><td class="num">0,485</td></tr>
</tbody>
</table>
</div>
<p class="aviso">Si el número de dientes no está en la tabla, se <strong>interpola linealmente</strong>. Ejemplo: z = 25 entre 0,337 (24) y 0,346 (26) → Y = 0,3415.</p>

<h2>Factor dinámico K<sub>v</sub></h2>
<p>Los dientes fallan con menos esfuerzo a mayor velocidad. AGMA lo cuantifica con un factor que depende de la velocidad tangencial V y del método de tallado. Con V en <strong>m/s</strong>:</p>

<div class="tabla-wrap">
<table class="tec">
<thead><tr><th>Tallado / acabado</th><th>Fórmula (V en m/s)</th><th>Fórmula (V en pie/min)</th></tr></thead>
<tbody>
<tr><td>Hierro fundido, perfil moldeado</td><td><span>$K_v = \dfrac{3{,}05 + V}{3{,}05}$</span></td><td><span>$K_v = \dfrac{600 + V}{600}$</span></td></tr>
<tr><td>Perfil cortado o fresado</td><td><span>$K_v = \dfrac{6{,}1 + V}{6{,}1}$</span></td><td><span>$K_v = \dfrac{1200 + V}{1200}$</span></td></tr>
<tr><td>Generado con fresa madre o cepillado</td><td><span>$K_v = \dfrac{3{,}56 + \sqrt{V}}{3{,}56}$</span></td><td><span>$K_v = \dfrac{50 + \sqrt{V}}{50}$</span></td></tr>
<tr><td>Cepillado o esmerilado (rectificado)</td><td><span>$K_v = \sqrt{\dfrac{5{,}56 + \sqrt{V}}{5{,}56}}$</span></td><td><span>$K_v = \sqrt{\dfrac{78 + \sqrt{V}}{78}}$</span></td></tr>
</tbody>
</table>
</div>

<p>La velocidad tangencial en el círculo primitivo se calcula con:</p>
<div class="f">$$ V = \frac{\pi \cdot D_p \cdot n}{60\,000} \qquad\text{[m/s] con } D_p \text{ en mm y } n \text{ en rpm} $$</div>

<div class="caja truco">
<p class="caja-tit">Cuál fórmula elegir (lo dice el enunciado)</p>
<ul>
<li>"dientes rectificados (cepillado o esmerilado)" → la raíz cuadrada.</li>
<li>"generados con fresa madre" o "tallado con creadora" → (3,56 + √V)/3,56.</li>
<li>"fresado" o "perfil cortado" → (6,1 + V)/6,1.</li>
<li>Ábaco de selección de módulo de la cátedra → siempre la de creadora, porque el gráfico está construido con esa hipótesis.</li>
</ul>
<p>Fijate que la de rectificado da K<sub>v</sub> más chico (más benévola) y la de fresado el más grande. Confundirlas cambia el resultado hasta un 40 %.</p>
</div>

<h2>Tensión admisible del material S<sub>t</sub> (AGMA)</h2>
<p>El esfuerzo de flexión permisible sale de la <strong>dureza Brinell</strong>, según dos gráficas de Shigley:</p>

<div class="grid2">
<div class="caja dato">
<p class="caja-tit">Figura 14-2 — aceros completamente endurecidos</p>
<div class="f f-sin">$$ S_t = 0{,}533\,H_B + 88{,}3 \quad\text{(grado 1)} $$</div>
<div class="f f-sin">$$ S_t = 0{,}703\,H_B + 113 \quad\text{(grado 2)} $$</div>
<p class="aviso">En kpsi: S<sub>t</sub> = 77,3·H<sub>B</sub> + 12 800 (grado 1); 102·H<sub>B</sub> + 16 400 (grado 2).</p>
</div>
<div class="caja dato">
<p class="caja-tit">Figura 14-3 — AISI 4140 / 4340 nitrurado</p>
<div class="f f-sin">$$ S_t = 0{,}568\,H_B + 83{,}8 \quad\text{(grado 1)} $$</div>
<div class="f f-sin">$$ S_t = 0{,}749\,H_B + 110 \quad\text{(grado 2)} $$</div>
<p class="aviso">En kpsi: S<sub>t</sub> = 82,3·H<sub>B</sub> + 12 150 (grado 1); 108,6·H<sub>B</sub> + 15 890 (grado 2).</p>
</div>
</div>

<div class="tabla-wrap">
<table class="tec">
<caption>Valores ya calculados para los casos que aparecen en los prácticos</caption>
<thead><tr><th>Material</th><th class="num">H<sub>B</sub></th><th>Fórmula</th><th class="num">S<sub>t</sub> [MPa]</th></tr></thead>
<tbody>
<tr><td>AISI 4140 grado 2</td><td class="num">300</td><td><span>$0{,}749\cdot 300 + 110$</span></td><td class="num">334,7</td></tr>
<tr><td>AISI 4140 grado 2</td><td class="num">350</td><td><span>$0{,}749\cdot 350 + 110$</span></td><td class="num">372,2</td></tr>
<tr><td>AISI 4140 grado 2</td><td class="num">275</td><td><span>$0{,}749\cdot 275 + 110$</span></td><td class="num">316,0</td></tr>
<tr><td>Acero endurecido grado 2</td><td class="num">300</td><td><span>$0{,}703\cdot 300 + 113$</span></td><td class="num">323,9</td></tr>
<tr><td>Acero endurecido grado 1</td><td class="num">300</td><td><span>$0{,}533\cdot 300 + 88{,}3$</span></td><td class="num">248,2</td></tr>
</tbody>
</table>
</div>

<div class="caja ojo">
<p class="caja-tit">Qué gráfica usar</p>
<p>Si el enunciado dice <strong>"AISI 4140 grado 2"</strong> o "acero nitrurado" → figura 14-3 (0,749·H<sub>B</sub> + 110). Si dice solamente "acero" sin más datos, la cátedra usa la 14-3 para el 4140 y la 14-2 para aceros comunes. Cuando el enunciado te da directamente una tensión límite (por ejemplo S<sub>t</sub> = 375 MPa), no hay que calcular nada: se usa ese valor.</p>
</div>

<h2>Factor de seguridad</h2>
<div class="f f-grande">$$ f_{seg} = \frac{S_t}{\sigma} $$</div>

<div class="tabla-wrap">
<table class="tec">
<thead><tr><th class="num">f<sub>seg</sub></th><th>Lectura</th><th>Qué hacer</th></tr></thead>
<tbody>
<tr><td class="num">&lt; 1</td><td>El diente se rompe con la carga nominal</td><td>Rediseñar: subir m o F, cambiar material</td></tr>
<tr><td class="num">1,0 – 1,2</td><td>Margen insuficiente (no admite sobrecargas)</td><td>Revisar y ajustar</td></tr>
<tr><td class="num">≈ 1,2 – 2</td><td>Rango habitual de diseño</td><td>Verifica</td></tr>
<tr><td class="num">&gt; 2</td><td>Sobredimensionado</td><td>Se puede reducir m o F si interesa ahorrar</td></tr>
</tbody>
</table>
</div>

<h2>Ejemplo resuelto completo (TP, preguntas 24 y 25)</h2>
<p>Engranaje motor: m = 6 mm, z₁ = 17, F = 57 mm, W<sub>t</sub> = 23 555 N, n = 800 rpm, D<sub>p1</sub> = 102 mm, dientes rectificados. Material AISI 4140 grado 2, 350 HB.</p>

<ol class="pasos">
<li><strong>Factor de forma</strong>: z = 17 → Y = 0,303 (de tabla).</li>
<li><strong>Velocidad tangencial</strong>
<div class="f">$$ V = \frac{\pi \cdot 102 \cdot 800}{60\,000} = 4{,}2726\ \text{m/s} $$</div></li>
<li><strong>Factor dinámico</strong> (rectificado)
<div class="f">$$ K_v = \sqrt{\frac{5{,}56 + \sqrt{4{,}2726}}{5{,}56}} = \sqrt{\frac{5{,}56 + 2{,}0670}{5{,}56}} = \sqrt{1{,}3714} = 1{,}1712 $$</div></li>
<li><strong>Tensión de flexión</strong>
<div class="f">$$ \sigma = \frac{K_v\,W_t}{F\,m\,Y} = \frac{1{,}1712 \cdot 23\,555}{57 \cdot 6 \cdot 0{,}303} = \frac{27\,587{,}6}{103{,}626} = 266{,}23\ \text{MPa} $$</div></li>
<li><strong>Tensión admisible</strong> (figura 14-3, grado 2, H<sub>B</sub> = 350)
<div class="f">$$ S_t = 0{,}749 \cdot 350 + 110 = 372{,}15\ \text{MPa} $$</div></li>
<li><strong>Factor de seguridad</strong>
<div class="f">$$ f_{seg} = \frac{372{,}15}{266{,}23} = 1{,}398 $$</div></li>
</ol>
<div class="resultado"><span class="r-lbl">Resultado:</span> <span class="r-val">σ = 266,23 MPa · S<sub>t</sub> = 372,15 MPa · f<sub>seg</sub> = 1,398 → verifica</span></div>

<h2>Qué hacer si no verifica</h2>
<div class="caja truco">
<p class="caja-tit">Orden de intervención (de menor a mayor impacto)</p>
<ol>
<li><strong>Aumentar F</strong> (ancho de cara): σ baja linealmente y no cambia ningún diámetro. Cuidado con el límite F ≤ 12·m.</li>
<li><strong>Cambiar el material</strong> por uno de mayor dureza: sube S<sub>t</sub> sin tocar la geometría.</li>
<li><strong>Subir el módulo</strong>: σ baja con 1/m², pero crecen D<sub>p</sub>, C y el volumen. Es la última opción.</li>
<li><strong>Cambiar el tallado</strong> a uno más fino (rectificado) para bajar K<sub>v</sub>: casi nunca es lo que se pide, pero vale mencionarlo.</li>
</ol>
</div>

<h2>Checklist del capítulo</h2>
<div class="caja">
<ul>
<li>¿Tenés claras las unidades de la fórmula de σ (W<sub>t</sub> en N, F y m en mm → MPa)?</li>
<li>¿Elegís Y con los dientes del engranaje que estás verificando?</li>
<li>¿Elegís la K<sub>v</sub> que corresponde al tallado del enunciado?</li>
<li>¿Calculás V con D<sub>p</sub> del engranaje verificado y su propia n?</li>
<li>¿Sabés qué gráfica de S<sub>t</sub> usar y cómo despejar H<sub>B</sub> si te piden el material?</li>
<li>¿Podés explicar por qué F es la variable más "barata" para corregir?</li>
</ul>
</div>
`
});

/* ------------------------------------------------- SELECCIÓN DE MÓDULO */
window.CAPITULOS.push({
  id: "seleccion-modulo",
  grupo: "2 · Cálculo",
  titulo: "Selección del módulo",
  html: String.raw`
<h1>Selección del módulo</h1>
<p class="bajada">La primera pregunta de todos los prácticos: con la potencia, las rpm y el material, elegir el módulo. Se puede hacer con el ábaco de la cátedra (lo que piden) o analíticamente con la misma fórmula de Lewis (lo que te deja verificar y entender de dónde sale).</p>

<h2>Cómo está construido el ábaco de la cátedra</h2>
<p>Las gráficas de "Predimensionamiento del módulo" (hojas 4 a 8 de las tablas de la cátedra) no son un invento: son la ecuación de Lewis despejada, con estas cuatro hipótesis fijas:</p>

<div class="tabla-wrap">
<table class="tec">
<thead><tr><th>Hipótesis</th><th>Valor</th><th>Por qué</th></tr></thead>
<tbody>
<tr><td>Dientes del piñón</td><td>z₁ = 17</td><td>El mínimo sin interferencia con φ = 20°</td></tr>
<tr><td>Ancho de cara</td><td>F = 7·m</td><td>El mínimo recomendado (Fanchon): hipótesis conservadora</td></tr>
<tr><td>Tallado</td><td>Con creadora</td><td>K<sub>v</sub> = (3,56 + √V)/3,56</td></tr>
<tr><td>Tensión admisible</td><td>S<sub>adm</sub> = 100 / 200 / 350 / 500 / 700 MPa</td><td>Una gráfica por familia de materiales</td></tr>
</tbody>
</table>
</div>

<p>Las ordenadas son la potencia nominal H [kW] y las abscisas la velocidad del eje motriz n₁ [rpm], ambas en escala logarítmica. Cada recta es un módulo normalizado: <strong>todo lo que queda por encima de una recta necesita un módulo mayor</strong>.</p>

<h2>Procedimiento para leer el ábaco</h2>
<ol class="pasos">
<li>Elegí la hoja según la <strong>tensión admisible</strong> del material (si dice "aproximadamente 500 MPa", es la hoja 7).</li>
<li>Convertí la potencia a <strong>kW</strong> (135 HP × 0,745 = 100,6 kW).</li>
<li>Entrá por el eje horizontal con n₁ (800 rpm) y subí hasta la potencia (100,6 kW).</li>
<li>Mirá entre qué dos rectas cae el punto y adoptá el <strong>módulo de la recta superior</strong> (el inmediato mayor).</li>
<li>Verificá después con Lewis: el ábaco es un predimensionamiento, no la verificación final.</li>
</ol>

<div class="caja idea">
<p class="caja-tit">El caso del práctico</p>
<p>Con S<sub>adm</sub> = 500 MPa, n₁ = 800 rpm y H = 100,6 kW, el punto cae prácticamente sobre la recta de <strong>m = 6 mm</strong>. Por eso la respuesta de la pregunta 1 es m = 6 mm. La hoja del ábaco usa F = 7·m, la hipótesis más conservadora; el práctico adopta F = 9,5·m, así que con ese módulo la tensión real baja a 266 MPa, muy por debajo de los 500 MPa admisibles.</p>
</div>

<h2>El mismo cálculo, sin ábaco</h2>
<p>Despejando m de la ecuación de Lewis con F = k·m (k = F/m) queda:</p>

<div class="f f-grande">$$ m = \sqrt[3]{\frac{2000 \cdot H \cdot K_v}{\omega \cdot z_1 \cdot k \cdot Y \cdot S_{adm}}} $$<span class="f-nota">m en mm, H en W, ω en rad/s, S<sub>adm</sub> en MPa. El 2000 viene de pasar D<sub>p</sub> de mm a m en W<sub>t</sub> = 2H/(ω·D<sub>p</sub>).</span></div>

<p>Como K<sub>v</sub> depende de V y V depende de m, la ecuación es implícita: se resuelve en dos o tres iteraciones (arrancás con K<sub>v</sub> = 1,2 y repetís).</p>

<details>
<summary>Ver la deducción paso a paso</summary>
<div class="details-cuerpo">
<p>Partimos de Lewis y de las definiciones:</p>
<div class="f">$$ \sigma = \frac{K_v W_t}{F m Y} \le S_{adm} \qquad W_t = \frac{2T}{D_p} \qquad T = \frac{H}{\omega} \qquad D_p = m\,z_1 $$</div>
<p>Reemplazando, con D<sub>p</sub> en metros (m/1000):</p>
<div class="f">$$ W_t = \frac{2H}{\omega \cdot \frac{m}{1000}\cdot z_1} = \frac{2000\,H}{\omega\,m\,z_1} $$</div>
<p>y con F = k·m:</p>
<div class="f">$$ \sigma = \frac{K_v \cdot \dfrac{2000\,H}{\omega\,m\,z_1}}{k\,m \cdot m \cdot Y} = \frac{2000\,H\,K_v}{\omega\,z_1\,k\,Y\,m^3} $$</div>
<p>Igualando σ = S<sub>adm</sub> y despejando:</p>
<div class="f">$$ m^3 = \frac{2000\,H\,K_v}{\omega\,z_1\,k\,Y\,S_{adm}} $$</div>
</div>
</details>

<h2>Calculadora: módulo recomendado</h2>
<p>Devuelve el módulo calculado, el normalizado inmediato superior y la verificación con ese módulo (σ y f<sub>seg</sub>).</p>

<div class="calc">
  <h3>Predimensionamiento y verificación</h3>
  <div class="calc-campos">
    <div class="campo"><label for="c-h">Potencia H</label><input id="c-h" type="number" step="1" value="135"></div>
    <div class="campo"><label for="c-u">Unidad</label>
      <select id="c-u"><option value="HP">HP</option><option value="kW">kW</option></select>
    </div>
    <div class="campo"><label for="c-n">n₁ [rpm]</label><input id="c-n" type="number" step="10" value="800"></div>
    <div class="campo"><label for="c-s">S<sub>adm</sub> [MPa]</label><input id="c-s" type="number" step="10" value="500"></div>
    <div class="campo"><label for="c-z">z₁ [dientes]</label><input id="c-z" type="number" step="1" value="17"></div>
    <div class="campo"><label for="c-f">F / m</label>
      <select id="c-f">
        <option value="7">7 (Fanchon mínimo)</option>
        <option value="8">8 (Faires mínimo)</option>
        <option value="9.5" selected>9,5 (Fanchon medio)</option>
        <option value="12">12 (Fanchon máximo)</option>
      </select>
    </div>
    <div class="campo"><label for="c-p">Tallado</label>
      <select id="c-p">
        <option value="creadora" selected>Fresa madre / creadora</option>
        <option value="fresado">Cortado o fresado</option>
        <option value="rectificado">Rectificado</option>
        <option value="fundido">Fundido</option>
      </select>
    </div>
  </div>
  <div class="calc-salida" id="c-salida"></div>
  <p class="aviso">El ábaco de la cátedra usa F = 7·m y z₁ = 17, por eso con esos valores reproduce exactamente la lectura de las gráficas. Con F = 9,5·m el módulo calculado baja (menos tensión por diente).</p>
</div>

<h3>Ábaco interactivo</h3>
<p>Mismas rectas que las gráficas de la cátedra, recalculadas para la tensión admisible que elijas. El punto rojo es tu caso.</p>
<div class="figura" id="c-abaco"></div>

<div class="caja ojo">
<p class="caja-tit">Ojo con las hojas del ábaco</p>
<p>Las gráficas están hechas para S<sub>adm</sub> = 100, 200, 350, 500 y 700 MPa. Si tu material tiene 375 MPa, no podés usar directamente la hoja de 350 ni la de 500: usá la de 350 (más conservadora) o, mejor, la calculadora de esta página. En el examen, si te dan la tensión exacta, calculá con la fórmula y usá el ábaco solo como control.</p>
</div>

<h2>Después de elegir el módulo</h2>
<div class="caja idea">
<p class="caja-tit">Secuencia completa del ejercicio</p>
<ol>
<li>Adoptar m normalizado (el inmediato superior al calculado).</li>
<li>Calcular z₂ = i·z₁ (redondear al entero).</li>
<li>Geometría completa: D<sub>p</sub>, d<sub>e</sub>, d<sub>i</sub>, D<sub>b</sub>, C, p<sub>c</sub>, h<sub>c</sub>, t, v.</li>
<li>Adoptar F (Fanchon medio: 9,5·m).</li>
<li>T y fuerzas (W<sub>t</sub>, W<sub>r</sub>, W).</li>
<li>Lewis: Y, V, K<sub>v</sub>, σ.</li>
<li>AGMA: S<sub>t</sub> según material y dureza → f<sub>seg</sub>.</li>
<li>Chequear relación de contacto m<sub>c</sub>.</li>
</ol>
</div>
`
});

/* ----------------------------------------------------------- FORMULARIO */
window.CAPITULOS.push({
  id: "formulario",
  grupo: "2 · Cálculo",
  titulo: "Formulario completo",
  html: String.raw`
<h1>Formulario completo</h1>
<p class="bajada">Todas las fórmulas juntas, ordenadas por lo que te piden. Si en el examen te bloqueás, buscá acá la magnitud y seguí la fila.</p>

<h2>Si te piden…</h2>
<div class="tabla-wrap t-form">
<table class="tec">
<thead><tr><th>Te piden</th><th>Usá</th><th>Ojo con</th></tr></thead>
<tbody>
<tr><td>Módulo</td><td><span>$m = \dfrac{D_p}{z} = \dfrac{p_c}{\pi}$</span> · ábaco · <span>$m^3 = \dfrac{2000 H K_v}{\omega z_1 k Y S_{adm}}$</span></td><td>Redondear al normalizado superior</td></tr>
<tr><td>Dientes del conducido</td><td><span>$z_2 = i\,z_1 = \dfrac{n_1}{n_2}z_1$</span></td><td>Redondear a entero; recalcular i real</td></tr>
<tr><td>Diámetro primitivo</td><td><span>$D_p = m\,z$</span></td><td>—</td></tr>
<tr><td>Exterior / raíz / base</td><td><span>$d_e = D_p + 2m$</span> · <span>$d_i = D_p - 2{,}5m$</span> · <span>$D_b = D_p\cos\varphi$</span></td><td>b = 1,25 m</td></tr>
<tr><td>Distancia entre centros</td><td><span>$C = \dfrac{D_{p1}+D_{p2}}{2}$</span></td><td>En helicoidales: <span>$C = \dfrac{m_n(z_1+z_2)}{2\cos\psi}$</span></td></tr>
<tr><td>Paso</td><td><span>$p_c = \pi m$</span> · <span>$p_b = p_c\cos\varphi$</span></td><td>—</td></tr>
<tr><td>Torque</td><td><span>$T = \dfrac{H}{\omega}$</span> con <span>$\omega = \dfrac{2\pi n}{60}$</span></td><td>H en W; 1 HP = 745 W</td></tr>
<tr><td>Fuerza tangencial</td><td><span>$W_t = \dfrac{2T}{D_p}$</span></td><td>Radio = D<sub>p</sub>/2</td></tr>
<tr><td>Fuerzas radial y resultante (W)</td><td><span>$W_r = W_t\tan\varphi$</span> · <span>$W = \dfrac{W_t}{\cos\varphi} = \sqrt{W_t^2+W_r^2}$</span></td><td>W &gt; W<sub>t</sub>; W<sub>a</sub> es axial</td></tr>
<tr><td>Tensión de Lewis</td><td><span>$\sigma = \dfrac{K_v\,W_t}{F\,m\,Y}$</span></td><td>F y m en mm → MPa</td></tr>
<tr><td>Factor dinámico</td><td>Según tallado (4 fórmulas)</td><td>V en m/s</td></tr>
<tr><td>Tensión admisible</td><td><span>$S_t = 0{,}749 H_B + 110$</span> (4140 grado 2)</td><td>Ojo qué gráfica</td></tr>
<tr><td>Factor de seguridad</td><td><span>$f_{seg} = \dfrac{S_t}{\sigma}$</span></td><td>≥ 1,2 ideal</td></tr>
<tr><td>Relación de contacto</td><td><span>$m_c = \dfrac{\sqrt{R_{e1}^2-R_{b1}^2}+\sqrt{R_{e2}^2-R_{b2}^2}-C\sin\varphi}{p_c\cos\varphi}$</span></td><td>≥ 1,2</td></tr>
<tr><td>Velocidad tangencial</td><td><span>$V = \dfrac{\pi D_p n}{60\,000}$</span></td><td>m/s</td></tr>
<tr><td>Relación de un tren</td><td><span>$i = \dfrac{\displaystyle\prod z_{conducidas}}{\displaystyle\prod z_{motrices}} = \dfrac{n_e}{n_s}$</span></td><td>Sentido de giro aparte</td></tr>
<tr><td>Planetario</td><td><span>$\dfrac{n_e - n_{ps}}{n_s - n_{ps}} = \pm\dfrac{\displaystyle\prod z_c}{\displaystyle\prod z_m}$</span></td><td>Signo por n.º de engranes exteriores</td></tr>
<tr><td>Corona fija (planetario simple)</td><td><span>$\dfrac{n_{ps}}{n_{solar}} = \dfrac{z_{solar}}{z_{solar}+z_{corona}}$</span></td><td>Sale de Willis con n<sub>corona</sub> = 0</td></tr>
<tr><td>Sin fin</td><td><span>$i = \dfrac{z_2}{z_1}$</span> (z₁ = entradas)</td><td>η = 60–80 %</td></tr>
</tbody>
</table>
</div>
<p class="aviso"><strong>∏ = productoria</strong> (Pi mayúscula): se multiplican todos los términos. No confundir con π = 3,1416.</p>

<h2>Geometría del diente recto</h2>
<div class="tabla-wrap t-form">
<table class="tec">
<thead><tr><th>Cantidad</th><th>Fórmula</th><th>Unidad</th></tr></thead>
<tbody>
<tr><td>Módulo</td><td><span>$m = \dfrac{D_p}{z} = \dfrac{p_c}{\pi}$</span></td><td>mm</td></tr>
<tr><td>Paso diametral</td><td><span>$P_d = \dfrac{z}{D_p[\text{pulg}]} = \dfrac{\pi}{p[\text{pulg}]}$</span>, <span>$P_d\cdot m = 25{,}4$</span></td><td>1/pulg</td></tr>
<tr><td>Addendo</td><td><span>$a = m$</span></td><td>mm</td></tr>
<tr><td>Dedendo</td><td><span>$b = 1{,}25\,m$</span></td><td>mm</td></tr>
<tr><td>Altura total</td><td><span>$h_t = 2{,}25\,m$</span></td><td>mm</td></tr>
<tr><td>Paso circular</td><td><span>$p_c = \pi m$</span></td><td>mm</td></tr>
<tr><td>Huelgo</td><td><span>$h_c = \dfrac{p_c}{50}$</span></td><td>mm</td></tr>
<tr><td>Espesor / vacío</td><td><span>$t = \dfrac{p_c - h_c}{2}$</span> · <span>$v = p_c - t$</span></td><td>mm</td></tr>
<tr><td>Diámetros</td><td><span>$D_p = mz$</span> · <span>$d_e = D_p+2m$</span> · <span>$d_i = D_p-2{,}5m$</span> · <span>$D_b = D_p\cos\varphi$</span></td><td>mm</td></tr>
<tr><td>Ancho de cara</td><td><span>$F = 9{,}5\,m$</span> (Fanchon medio); <span>$7m \le F \le 12m$</span></td><td>mm</td></tr>
<tr><td>Distancia entre centros</td><td><span>$C = \dfrac{m(z_1+z_2)}{2}$</span></td><td>mm</td></tr>
<tr><td>Relación</td><td><span>$i = \dfrac{n_1}{n_2} = \dfrac{z_2}{z_1} = \dfrac{D_{p2}}{D_{p1}}$</span></td><td>—</td></tr>
</tbody>
</table>
</div>
<p class="aviso"><strong>V y v no son lo mismo:</strong> <span>$V$</span> (mayúscula) es la <strong>velocidad tangencial</strong> [m/s]; <span>$v$</span> (minúscula) es el <strong>vacío del diente</strong> [mm].</p>

<h2>Helicoidales, cónicos y sin fin</h2>
<div class="tabla-wrap t-form">
<table class="tec">
<thead><tr><th>Tipo</th><th>Fórmulas clave</th></tr></thead>
<tbody>
<tr><td><strong>Helicoidal</strong></td><td><span>$m_t = \dfrac{m_n}{\cos\psi}$</span> · <span>$D_p = \dfrac{z\,m_n}{\cos\psi}$</span> · <span>$C = \dfrac{m_n(z_1+z_2)}{2\cos\psi}$</span> · <span>$\tan\varphi_t = \dfrac{\tan\varphi_n}{\cos\psi}$</span> · <span>$W_a = W_t\tan\psi$</span> · <span>$m_{hel} = m_c + F\tan\psi/p_t$</span></td></tr>
<tr><td><strong>Cónico</strong></td><td><span>$\tan\gamma = \dfrac{z_1}{z_2}$</span> · <span>$\Gamma = \Sigma - \gamma$</span> · <span>$A_o = D_p/(2\sin\gamma)$</span> · <span>$r_b = D_p/(2\cos\gamma)$</span> · <span>$F \le A_o/3$</span> · <span>$r_m = r - (F/2)\sin\gamma$</span> · <span>$W_r = W_t\tan\varphi\cos\gamma$</span> · <span>$W_a = W_t\tan\varphi\sin\gamma$</span></td></tr>
<tr><td><strong>Sin fin</strong></td><td><span>$i = \dfrac{z_2}{z_1}$</span> · <span>$p_x = \pi m_n$</span> · <span>$L = p_x z_1$</span> · <span>$\beta = \arctan(\pi D_{p1}/(p_x z_1))$</span> · <span>$\lambda = 90^\circ - \beta$</span> · <span>$D_{p2} = (p/\pi)z_2$</span> · <span>$\eta = \dfrac{\cos\varphi_n - \mu\tan\lambda}{\cos\varphi_n + \mu\cot\lambda}$</span></td></tr>
</tbody>
</table>
</div>

<h2>Trenes y reductores</h2>
<div class="tabla-wrap t-form">
<table class="tec">
<thead><tr><th>Concepto</th><th>Fórmula</th></tr></thead>
<tbody>
<tr><td>Relación de un tren ordinario</td><td><span>$i = \dfrac{n_e}{n_s} = \dfrac{z_2 z_4 z_6 \dots}{z_1 z_3 z_5 \dots}$</span> (conducidas arriba)</td></tr>
<tr><td>Par en el tren</td><td><span>$\dfrac{T_s}{T_e} = i \cdot \eta$</span> · potencia constante (menos pérdidas)</td></tr>
<tr><td>Planetario (Willis)</td><td><span>$\dfrac{n_e - n_{ps}}{n_s - n_{ps}} = i_0 = \pm\dfrac{\prod z_{conducidas}}{\prod z_{motrices}}$</span> (brazo fijo)</td></tr>
<tr><td>Corona fija</td><td><span>$n_{ps} = n_{solar}\dfrac{z_{solar}}{z_{solar}+z_{corona}}$</span></td></tr>
<tr><td>Solar fijo</td><td><span>$n_{ps} = n_{corona}\dfrac{z_{corona}}{z_{solar}+z_{corona}}$</span></td></tr>
<tr><td>Brazo fijo</td><td><span>$\dfrac{n_{solar}}{n_{corona}} = -\dfrac{z_{corona}}{z_{solar}}$</span></td></tr>
<tr><td>Condición geométrica</td><td><span>$z_{corona} = z_{solar} + 2\,z_{satélite}$</span> · con doble satélite en serie: <span>$z_{corona} = z_{solar} + 2(z_3+z_4)$</span></td></tr>
<tr><td>Método tabular</td><td>3 filas: movimiento con el brazo (+1 a todo) · movimiento relativo (brazo fijo) · suma</td></tr>
</tbody>
</table>
</div>

<h2>Constantes y equivalencias</h2>
<div class="grid3">
<div class="mini"><h4>Angulares</h4><p><span>$\omega = \dfrac{2\pi n}{60}$</span><br><span>$n = \dfrac{60\,\omega}{2\pi}$</span><br>1 rad = 57,2958°</p></div>
<div class="mini"><h4>Potencia</h4><p>1 HP = 745 W<br>1 kW = 1000 W<br>1 CV ≈ 736 W</p></div>
<div class="mini"><h4>Trigonométricas (φ = 20°)</h4><p>sen 20° = 0,34202<br>cos 20° = 0,93969<br>tan 20° = 0,36397</p></div>
<div class="mini"><h4>Longitudes</h4><p>1 pulg = 25,4 mm<br><span>$P_d \cdot m = 25{,}4$</span></p></div>
<div class="mini"><h4>Módulo normalizado</h4><p>… 2 · 2,5 · 3 · 4 · 5 · 6 · 8 · 10 · 12 · 16 · 20 · 25 · 32 · 40</p></div>
<div class="mini"><h4>π</h4><p>π = 3,1415927<br>2π = 6,2831853</p></div>
</div>
`
});
