/* =========================================================================
   CONTENIDO · 3. PRÁCTICOS RESUELTOS (parte 1)
   Capítulos: ej1 (dimensionamiento completo), ej2 (árbol con rodamientos)
   ========================================================================= */
window.CAPITULOS = window.CAPITULOS || [];

/* ------------------------------------------------------- EJERCICIO 1 */
window.CAPITULOS.push({
  id: "ej1",
  grupo: "3 · Prácticos resueltos",
  titulo: "Ejercicio 1: transmisión completa",
  html: String.raw`
<h1>Ejercicio 1 — Dimensionar una transmisión completa</h1>
<p class="bajada">Es el bloque 1 del práctico (preguntas 1 a 25) y el modelo de examen más probable: desde el módulo hasta el factor de seguridad, pasando por toda la geometría. Acá está cada pregunta con su planteo y su número.</p>

<div class="ej">
<div class="ej-cab">
  <span class="ej-num">1</span>
  <div>
    <p class="ej-tit">Transmisión por engranaje cilíndrico de dentado recto — 135 HP a 800 rpm</p>
    <p class="ej-sub">Preguntas 1 a 25 del práctico · dificultad media · 45 minutos</p>
  </div>
</div>
<div class="ej-cuerpo">

<div class="caja dato">
<p class="caja-tit">Enunciado</p>
<p>Se debe dimensionar una transmisión por engranaje cilíndrico de dentado recto entre un árbol accionado por un motor de <strong>135 HP</strong> que gira a <strong>800 rpm</strong>. La relación de transmisión es <strong>i = 2,7</strong>. Se estima un material de aproximadamente <strong>500 MPa</strong> de tensión admisible. El engranaje motor tiene <strong>z₁ = 17 dientes</strong> y el ángulo de presión es <strong>φ = 20°</strong>.</p>
</div>

<div class="ej-datos">
  <div><dt>Potencia</dt><dd>135 HP = 100,6 kW</dd></div>
  <div><dt>n₁</dt><dd>800 rpm</dd></div>
  <div><dt>i</dt><dd>2,7</dd></div>
  <div><dt>S<sub>adm</sub></dt><dd>500 MPa</dd></div>
  <div><dt>z₁</dt><dd>17 dientes</dd></div>
  <div><dt>φ</dt><dd>20°</dd></div>
  <div><dt>Tallado</dt><dd>cepillado / rectificado</dd></div>
  <div><dt>Material</dt><dd>AISI 4140 g.2, 350 HB</dd></div>
</div>

<h3>Hoja de respuestas (las 25)</h3>
<div class="tabla-wrap t-ancho">
<table class="tec compacta">
<thead><tr><th class="num">N.º</th><th>Qué pide</th><th class="num">Respuesta</th><th class="num">N.º</th><th>Qué pide</th><th class="num">Respuesta</th></tr></thead>
<tbody>
<tr><td class="num">1</td><td>Módulo</td><td class="num">6 mm</td><td class="num">14</td><td>Distancia entre centros</td><td class="num">189 mm</td></tr>
<tr><td class="num">2</td><td>Dientes conducido z₂</td><td class="num">46</td><td class="num">15</td><td>Paso circular</td><td class="num">18,85 mm</td></tr>
<tr><td class="num">3</td><td>Addendo a</td><td class="num">6 mm</td><td class="num">16</td><td>Huelgo h<sub>c</sub></td><td class="num">0,377 mm</td></tr>
<tr><td class="num">4</td><td>Dedendo b</td><td class="num">7,5 mm</td><td class="num">17</td><td>Espesor t</td><td class="num">9,236 mm</td></tr>
<tr><td class="num">5</td><td>Altura total h<sub>t</sub></td><td class="num">13,5 mm</td><td class="num">18</td><td>Vacío v</td><td class="num">9,613 mm</td></tr>
<tr><td class="num">6</td><td>D<sub>p1</sub> motor</td><td class="num">102 mm</td><td class="num">19</td><td>Ancho de cara F</td><td class="num">57 mm</td></tr>
<tr><td class="num">7</td><td>D<sub>p2</sub> conducido</td><td class="num">276 mm</td><td class="num">20</td><td>Completar esquema motor</td><td class="num">ver tabla</td></tr>
<tr><td class="num">8</td><td>d<sub>e1</sub> exterior motor</td><td class="num">114 mm</td><td class="num">21</td><td>Completar esquema conducido</td><td class="num">ver tabla</td></tr>
<tr><td class="num">9</td><td>d<sub>e2</sub> exterior conducido</td><td class="num">288 mm</td><td class="num">22</td><td>Torque T</td><td class="num">1201,3 N·m</td></tr>
<tr><td class="num">10</td><td>d<sub>i1</sub> de raíz motor</td><td class="num">87 mm</td><td class="num">23</td><td>Fuerzas W<sub>t</sub>/W<sub>r</sub>/W</td><td class="num">23555/8573/25067 N</td></tr>
<tr><td class="num">11</td><td>d<sub>i2</sub> de raíz conducido</td><td class="num">261 mm</td><td class="num">24</td><td>Tensión de Lewis</td><td class="num">266,23 MPa</td></tr>
<tr><td class="num">12</td><td>D<sub>b1</sub> de base motor</td><td class="num">95,85 mm</td><td class="num">25</td><td>Factor de seguridad</td><td class="num">1,398</td></tr>
<tr><td class="num">13</td><td>D<sub>b2</sub> de base conducido</td><td class="num">259,36 mm</td><td class="num">—</td><td>Relación de contacto (compl.)</td><td class="num">1,627</td></tr>
</tbody>
</table>
</div>

<div class="caja ojo">
<p class="caja-tit">Antes de arrancar: dos conversiones</p>
<div class="f f-sin">$$ H = 135\ \text{HP}\cdot 745\ \frac{\text{W}}{\text{HP}} = 100\,575\ \text{W} \approx 100\,640\ \text{W} \qquad\qquad \omega = \frac{2\pi\cdot 800}{60} = 83{,}776\ \text{rad/s} $$</div>
<p>El práctico usa 100 640 W (0,745 kW/HP con más decimales). Cualquiera de los dos valores lleva al mismo módulo.</p>
</div>

<h3>Paso 1 — geometría (preguntas 3 a 21)</h3>

<div class="preg">
<p class="preg-cab"><span class="preg-n">P1</span><span class="preg-tit">Módulo recomendable a través de gráficas</span></p>
<p>Se entra al ábaco de predimensionamiento con los datos del enunciado: hoja de S<sub>adm</sub> = 500 MPa, abscisa n₁ = 800 rpm y ordenada H = 100,6 kW. El punto cae sobre la recta del módulo <strong>6 mm</strong>.</p>
<p>Verificación analítica (misma fórmula de Lewis con F = 7m, z₁ = 17, Y = 0,303, creadora):</p>
<div class="f">$$ m = \sqrt[3]{\frac{2000 \cdot H \cdot K_v}{\omega \cdot z_1 \cdot 7 \cdot Y \cdot S_{adm}}} = \sqrt[3]{\frac{2000 \cdot 100\,640 \cdot 1{,}58}{83{,}776 \cdot 17 \cdot 7 \cdot 0{,}303 \cdot 500}} = \sqrt[3]{210{,}6} = 5{,}95\ \text{mm} $$</div>
<div class="resultado"><span class="r-lbl">Respuesta P1:</span> <span class="r-val">m = 6 mm (normalizado)</span></div>
</div>

<div class="preg">
<p class="preg-cab"><span class="preg-n">P2</span><span class="preg-tit">Cantidad de dientes del engrane conducido</span></p>
<div class="f">$$ i = \frac{n_1}{n_2} = \frac{z_2}{z_1} \;\Rightarrow\; z_2 = i\cdot z_1 = 2{,}7 \cdot 17 = 45{,}9 $$</div>
<p>El número de dientes es entero: se adopta <strong>46</strong> (el inmediato disponible). La relación real queda i = 46/17 = 2,706, prácticamente la pedida.</p>
<div class="resultado"><span class="r-lbl">Respuesta P2:</span> <span class="r-val">z₂ = 46 dientes</span></div>
</div>

<div class="preg">
<p class="preg-cab"><span class="preg-n">P3 · P4 · P5</span><span class="preg-tit">Alturas del diente</span></p>
<p>Para diente de altura completa (el caso normal):</p>
<div class="f">$$ a = m = 6\ \text{mm} \qquad\qquad b = 1{,}25\,m = 1{,}25 \cdot 6 = 7{,}5\ \text{mm} \qquad\qquad h_t = a + b = 13{,}5\ \text{mm} $$</div>
<p>Estos valores son <strong>iguales para los dos engranajes</strong>: el addendo y el dedendo dependen solo del módulo.</p>
<div class="resultado"><span class="r-lbl">Respuestas:</span> <span class="r-val">a = 6 mm · b = 7,5 mm · h<sub>t</sub> = 13,5 mm</span></div>
</div>

<div class="preg">
<p class="preg-cab"><span class="preg-n">P6 · P7</span><span class="preg-tit">Diámetros primitivos</span></p>
<div class="f">$$ D_{p1} = m\,z_1 = 6 \cdot 17 = 102\ \text{mm} \qquad\qquad D_{p2} = m\,z_2 = 6 \cdot 46 = 276\ \text{mm} $$</div>
<div class="resultado"><span class="r-lbl">Respuestas:</span> <span class="r-val">D<sub>p1</sub> = 102 mm · D<sub>p2</sub> = 276 mm</span></div>
</div>

<div class="preg">
<p class="preg-cab"><span class="preg-n">P8 · P9</span><span class="preg-tit">Diámetros exteriores (cabeza)</span></p>
<div class="f">$$ d_{e1} = D_{p1} + 2a = 102 + 12 = 114\ \text{mm} \qquad\qquad d_{e2} = D_{p2} + 2a = 276 + 12 = 288\ \text{mm} $$</div>
<div class="resultado"><span class="r-lbl">Respuestas:</span> <span class="r-val">d<sub>e1</sub> = 114 mm · d<sub>e2</sub> = 288 mm</span></div>
</div>

<div class="preg">
<p class="preg-cab"><span class="preg-n">P10 · P11</span><span class="preg-tit">Diámetros interiores o de raíz</span></p>
<div class="f">$$ d_{i1} = D_{p1} - 2b = 102 - 15 = 87\ \text{mm} \qquad\qquad d_{i2} = D_{p2} - 2b = 276 - 15 = 261\ \text{mm} $$</div>
<div class="resultado"><span class="r-lbl">Respuestas:</span> <span class="r-val">d<sub>i1</sub> = 87 mm · d<sub>i2</sub> = 261 mm</span></div>
</div>

<div class="preg">
<p class="preg-cab"><span class="preg-n">P12 · P13</span><span class="preg-tit">Diámetros de base</span></p>
<p>La circunferencia de base es donde se genera la evolvente. Siempre es menor que la primitiva:</p>
<div class="f">$$ D_{b1} = D_{p1}\cos\varphi = 102 \cdot \cos 20^\circ = 102 \cdot 0{,}93969 = 95{,}85\ \text{mm} $$</div>
<div class="f">$$ D_{b2} = D_{p2}\cos\varphi = 276 \cdot 0{,}93969 = 259{,}36\ \text{mm} $$</div>
<div class="resultado"><span class="r-lbl">Respuestas:</span> <span class="r-val">D<sub>b1</sub> = 95,85 mm · D<sub>b2</sub> = 259,36 mm</span></div>
</div>

<div class="preg">
<p class="preg-cab"><span class="preg-n">P14</span><span class="preg-tit">Distancia entre centros</span></p>
<div class="f">$$ C = \frac{D_{p1} + D_{p2}}{2} = \frac{102 + 276}{2} = 189\ \text{mm} $$</div>
<p>También: C = m(z₁ + z₂)/2 = 6·63/2 = 189 mm. Las dos formas dan lo mismo.</p>
<div class="resultado"><span class="r-lbl">Respuesta P14:</span> <span class="r-val">C = 189 mm</span></div>
</div>

<div class="preg">
<p class="preg-cab"><span class="preg-n">P15</span><span class="preg-tit">Paso circular</span></p>
<div class="f">$$ p_c = \pi\,m = 3{,}14159 \cdot 6 = 18{,}8496 \approx 18{,}85\ \text{mm} $$</div>
<div class="resultado"><span class="r-lbl">Respuesta P15:</span> <span class="r-val">p<sub>c</sub> = 18,85 mm</span></div>
</div>

<div class="preg">
<p class="preg-cab"><span class="preg-n">P16</span><span class="preg-tit">Huelgo circular</span></p>
<p>Criterio de cátedra (valor medio entre p<sub>c</sub>/80 y p<sub>c</sub>/40):</p>
<div class="f">$$ h_c = \frac{p_c}{50} = 0{,}02 \cdot 18{,}8496 = 0{,}377\ \text{mm} $$</div>
<div class="resultado"><span class="r-lbl">Respuesta P16:</span> <span class="r-val">h<sub>c</sub> = 0,377 mm</span></div>
</div>

<div class="preg">
<p class="preg-cab"><span class="preg-n">P17 · P18</span><span class="preg-tit">Espesor del diente y ancho del espacio</span></p>
<div class="f">$$ t = \frac{p_c - h_c}{2} = \frac{18{,}8496 - 0{,}377}{2} = 9{,}236\ \text{mm} $$</div>
<div class="f">$$ v = p_c - t = 18{,}8496 - 9{,}236 = 9{,}613\ \text{mm} $$</div>
<p>Chequeo: t + v = 9,236 + 9,613 = 18,849 = p<sub>c</sub> ✓</p>
<div class="resultado"><span class="r-lbl">Respuestas:</span> <span class="r-val">t = 9,236 mm · v = 9,613 mm</span></div>
</div>

<div class="preg">
<p class="preg-cab"><span class="preg-n">P19</span><span class="preg-tit">Ancho de cara (valor medio de Fanchon)</span></p>
<p>Fanchon recomienda 7m ≤ F ≤ 12m; el práctico pide el valor medio del intervalo:</p>
<div class="f">$$ F = \frac{7 + 12}{2}\cdot m = 9{,}5 \cdot 6 = 57\ \text{mm} $$</div>
<p>Verificación con los otros criterios: Faires 48–75 mm ✓ · Oberg 56–75 mm ✓ · Shigley 56–94 mm ✓. Los 57 mm caen dentro de todos.</p>
<div class="resultado"><span class="r-lbl">Respuesta P19:</span> <span class="r-val">F = 57 mm</span></div>
</div>

<div class="preg">
<p class="preg-cab"><span class="preg-n">P20 · P21</span><span class="preg-tit">Completar los esquemas de ambos engranes</span></p>
<p>Con toda la geometría calculada, las dos tablas quedan así:</p>
<div class="tabla-wrap">
<table class="tec compacta">
<thead><tr><th>Variable</th><th class="num">Motor (z₁ = 17)</th><th class="num">Conducido (z₂ = 46)</th></tr></thead>
<tbody>
<tr><td>Círculo de paso D<sub>p</sub></td><td class="num">102 mm</td><td class="num">276 mm</td></tr>
<tr><td>Círculo de cabeza d<sub>e</sub></td><td class="num">114 mm</td><td class="num">288 mm</td></tr>
<tr><td>Círculo de raíz d<sub>i</sub></td><td class="num">87 mm</td><td class="num">261 mm</td></tr>
<tr><td>Círculo de base D<sub>b</sub></td><td class="num">95,85 mm</td><td class="num">259,36 mm</td></tr>
<tr><td>Cabeza a</td><td class="num">6 mm</td><td class="num">6 mm</td></tr>
<tr><td>Raíz b</td><td class="num">7,5 mm</td><td class="num">7,5 mm</td></tr>
<tr><td>Paso circular p<sub>c</sub></td><td class="num">18,85 mm</td><td class="num">18,85 mm</td></tr>
<tr><td>Espesor t</td><td class="num">9,236 mm</td><td class="num">9,236 mm</td></tr>
<tr><td>Ancho del espacio v</td><td class="num">9,613 mm</td><td class="num">9,613 mm</td></tr>
<tr><td>Ancho de cara F</td><td class="num">57 mm</td><td class="num">57 mm</td></tr>
<tr><td>Paso de base p<sub>b</sub></td><td class="num">17,71 mm</td><td class="num">17,71 mm</td></tr>
</tbody>
</table>
</div>
<p class="aviso">El paso de base no aparecía con valor en la figura del práctico: p<sub>b</sub> = p<sub>c</sub>·cos φ = 18,8496 · 0,93969 = 17,713 mm.</p>
</div>

<h3>Paso 2 — fuerzas y verificación (preguntas 22 a 25)</h3>

<div class="preg">
<p class="preg-cab"><span class="preg-n">P22</span><span class="preg-tit">Torque aplicado en el árbol motor</span></p>
<div class="f">$$ \omega = \frac{2\pi\,n}{60} = \frac{2\pi \cdot 800}{60} = 83{,}776\ \text{rad/s} \qquad\qquad T = \frac{H}{\omega} = \frac{100\,640}{83{,}776} = 1201{,}3\ \text{N}\cdot\text{m} $$</div>
<div class="resultado"><span class="r-lbl">Respuesta P22:</span> <span class="r-val">T = 1201,3 N·m</span></div>
</div>

<div class="preg">
<p class="preg-cab"><span class="preg-n">P23</span><span class="preg-tit">Fuerzas actuantes en el diente</span></p>
<p>Con el radio primitivo del piñón r₁ = D<sub>p1</sub>/2 = 51 mm = 0,051 m:</p>
<div class="f">$$ W_t = \frac{T}{r_1} = \frac{1201{,}3}{0{,}051} = 23\,555\ \text{N} $$</div>
<div class="f">$$ W_r = W_t\tan\varphi = 23\,555 \cdot 0{,}36397 = 8573\ \text{N} $$</div>
<div class="f">$$ W = \frac{W_t}{\cos\varphi} = \frac{23\,555}{0{,}93969} = 25\,067\ \text{N} $$</div>
<div class="resultado"><span class="r-lbl">Respuesta P23:</span> <span class="r-val">W<sub>t</sub> = 23 555 N · W<sub>r</sub> = 8573 N · W = 25 067 N</span></div>
</div>

<div class="preg">
<p class="preg-cab"><span class="preg-n">P24</span><span class="preg-tit">Tensión en la raíz del diente (Lewis)</span></p>
<p>Datos: dientes rectificados (cepillado o esmerilado), F = 57 mm, m = 6 mm, W<sub>t</sub> = 23 555 N.</p>
<ol class="pasos">
<li><strong>Factor de forma</strong> (z₁ = 17): Y = 0,303.</li>
<li><strong>Velocidad tangencial</strong>
<div class="f">$$ V = \frac{\pi\,D_{p1}\,n}{60\,000} = \frac{\pi \cdot 102 \cdot 800}{60\,000} = 4{,}2726\ \text{m/s} $$</div></li>
<li><strong>Factor dinámico</strong> (perfil cepillado o esmerilado)
<div class="f">$$ K_v = \sqrt{\frac{5{,}56 + \sqrt{V}}{5{,}56}} = \sqrt{\frac{5{,}56 + 2{,}0670}{5{,}56}} = 1{,}1712 $$</div></li>
<li><strong>Tensión</strong>
<div class="f">$$ \sigma = \frac{K_v\,W_t}{F\,m\,Y} = \frac{1{,}1712 \cdot 23\,555}{57 \cdot 6 \cdot 0{,}303} = \frac{27\,587{,}6}{103{,}626} = 266{,}23\ \text{MPa} $$</div></li>
</ol>
<div class="resultado"><span class="r-lbl">Respuesta P24:</span> <span class="r-val">σ = 266,23 MPa</span></div>
</div>

<div class="preg">
<p class="preg-cab"><span class="preg-n">P25</span><span class="preg-tit">Factor de seguridad (AISI 4140 grado 2, 350 HB)</span></p>
<div class="f">$$ S_t = 0{,}749\,H_B + 110 = 0{,}749 \cdot 350 + 110 = 372{,}15\ \text{MPa} $$</div>
<div class="f">$$ f_{seg} = \frac{S_t}{\sigma} = \frac{372{,}15}{266{,}23} = 1{,}398 $$</div>
<div class="resultado"><span class="r-lbl">Respuesta P25:</span> <span class="r-val">f<sub>seg</sub> = 1,398 (adimensional)</span></div>
</div>

<div class="preg">
<p class="preg-cab"><span class="preg-n">COMPL.</span><span class="preg-tit">Relación de contacto (pregunta complementaria)</span></p>
<p>Con los radios exteriores (57 y 144 mm), los de base (47,924 y 129,678 mm) y C = 189 mm:</p>
<div class="f">$$ m_c = \frac{\sqrt{57^2 - 47{,}924^2} + \sqrt{144^2 - 129{,}678^2} - 189\sin 20^\circ}{18{,}8496 \cdot \cos 20^\circ} $$</div>
<div class="f">$$ m_c = \frac{30{,}860 + 62{,}607 - 64{,}642}{17{,}713} = \frac{28{,}825}{17{,}713} = 1{,}627 $$</div>
<div class="resultado"><span class="r-lbl">Resultado:</span> <span class="r-val">m<sub>c</sub> = 1,627 ≥ 1,2 → verifica</span></div>
</div>

<h3>Cómo se piensa este ejercicio (para el examen)</h3>
<div class="caja idea">
<p class="caja-tit">El orden no es casual</p>
<ol>
<li><strong>Primero el módulo</strong>, porque todo depende de él. Sale del ábaco o de la fórmula, con la tensión admisible del material.</li>
<li><strong>Después z₂</strong>, porque completa la geometría (necesitás los dos diámetros para C).</li>
<li><strong>La geometría completa</strong> es mecánica: a, b, h<sub>t</sub>, D<sub>p</sub>, d<sub>e</sub>, d<sub>i</sub>, D<sub>b</sub>, C, p<sub>c</sub>, h<sub>c</sub>, t, v.</li>
<li><strong>F</strong> es una decisión de diseño (no sale de una fórmula): se adopta el valor medio de Fanchon.</li>
<li><strong>Recién ahí las fuerzas</strong>, que necesitan T y D<sub>p</sub>.</li>
<li><strong>Al final Lewis y AGMA</strong>, que necesitan las fuerzas y F.</li>
</ol>
</div>

<div class="caja truco">
<p class="caja-tit">Trucos para no equivocarte</p>
<ul>
<li>Si el resultado de un diámetro te da menor que el de raíz del otro engranaje, revisaste mal: D<sub>i</sub> &lt; D<sub>b</sub> &lt; D<sub>p</sub> &lt; d<sub>e</sub> siempre en ese orden.</li>
<li>W<sub>r</sub> ≈ 0,364·W<sub>t</sub> con φ = 20°. Si te dio más que W<sub>t</sub>, usaste cotangente.</li>
<li>σ en MPa exige W<sub>t</sub> en N y F, m en mm. Si usaste F en cm, te da 10 veces más.</li>
<li>El factor de seguridad se calcula con S<sub>t</sub> del material del engranaje que estás verificando (acá el piñón).</li>
</ul>
</div>

</div>
</div>
`
});

/* --------------------------------------------------------- EJERCICIO 2 */
window.CAPITULOS.push({
  id: "ej2",
  grupo: "3 · Prácticos resueltos",
  titulo: "Ejercicio 2: árbol con rodamientos",
  html: String.raw`
<h1>Ejercicio 2 — Árbol sobre rodamientos cónicos</h1>
<p class="bajada">Bloque 2 del práctico (preguntas 26 a 37). Cambia el dato de entrada: ahora el módulo y los dientes ya están dados y lo que se busca es el torque, las fuerzas y la verificación del diente en un árbol montado sobre rodamientos cónicos en disposición "O".</p>

<div class="ej">
<div class="ej-cab">
  <span class="ej-num">2</span>
  <div>
    <p class="ej-tit">Árbol con engranaje recto — 15 HP a 760 rpm</p>
    <p class="ej-sub">Preguntas 26 a 37 · dificultad media · 30 minutos</p>
  </div>
</div>
<div class="ej-cuerpo">

<div class="caja dato">
<p class="caja-tit">Enunciado</p>
<p>La figura muestra un árbol montado sobre dos <strong>rodamientos cónicos en disposición ajustada "O"</strong>, con un engranaje cilíndrico de dentado recto de <strong>módulo 3, 25 dientes y φ = 20°</strong>. El árbol está accionado por un motor de <strong>15 HP</strong> que gira a <strong>760 rpm</strong>. La relación de transmisión es <strong>i = 2,6</strong>. Además tiene una fuerza axial aplicada hacia la derecha de <strong>F<sub>a</sub> = 1600 N</strong>.</p>
</div>

<div class="ej-datos">
  <div><dt>m</dt><dd>3 mm</dd></div>
  <div><dt>z₁</dt><dd>25</dd></div>
  <div><dt>Potencia</dt><dd>15 HP = 11 175 W</dd></div>
  <div><dt>n₁</dt><dd>760 rpm</dd></div>
  <div><dt>i</dt><dd>2,6</dd></div>
  <div><dt>F</dt><dd>25 mm</dd></div>
  <div><dt>Tallado</dt><dd>rectificado</dd></div>
  <div><dt>Material</dt><dd>AISI 4140 g.2, 300 HB</dd></div>
</div>

<div class="tabla-wrap">
<table class="tec compacta">
<thead><tr><th class="num">N.º</th><th>Qué pide</th><th class="num">Respuesta</th><th class="num">N.º</th><th>Qué pide</th><th class="num">Respuesta</th></tr></thead>
<tbody>
<tr><td class="num">26</td><td>Dientes conducido</td><td class="num">65</td><td class="num">32</td><td>d<sub>i2</sub> de raíz conducido</td><td class="num">187,5 mm</td></tr>
<tr><td class="num">27</td><td>D<sub>p1</sub></td><td class="num">75 mm</td><td class="num">33</td><td>Distancia entre centros</td><td class="num">135 mm</td></tr>
<tr><td class="num">28</td><td>D<sub>p2</sub></td><td class="num">195 mm</td><td class="num">34</td><td>Torque</td><td class="num">140,41 N·m</td></tr>
<tr><td class="num">29</td><td>d<sub>e1</sub></td><td class="num">81 mm</td><td class="num">35</td><td>Fuerzas W<sub>t</sub>/W<sub>r</sub>/W</td><td class="num">3744/1363/3985 N</td></tr>
<tr><td class="num">30</td><td>d<sub>e2</sub></td><td class="num">201 mm</td><td class="num">36</td><td>Tensión de Lewis</td><td class="num">167,36 MPa</td></tr>
<tr><td class="num">31</td><td>d<sub>i1</sub> de raíz motor</td><td class="num">67,5 mm</td><td class="num">37</td><td>Factor de seguridad</td><td class="num">2,000</td></tr>
</tbody>
</table>
</div>

<h3>Resolución</h3>

<div class="preg">
<p class="preg-cab"><span class="preg-n">P26</span><span class="preg-tit">Dientes del engrane conducido</span></p>
<div class="f">$$ z_2 = i \cdot z_1 = 2{,}6 \cdot 25 = 65\ \text{dientes} $$</div>
<p>Acá da justo entero: no hay que redondear.</p>
<div class="resultado"><span class="r-lbl">Respuesta:</span> <span class="r-val">z₂ = 65 dientes</span></div>
</div>

<div class="preg">
<p class="preg-cab"><span class="preg-n">P27 · P28</span><span class="preg-tit">Diámetros primitivos</span></p>
<div class="f">$$ D_{p1} = m z_1 = 3 \cdot 25 = 75\ \text{mm} \qquad\qquad D_{p2} = m z_2 = 3 \cdot 65 = 195\ \text{mm} $$</div>
<div class="resultado"><span class="r-lbl">Respuestas:</span> <span class="r-val">D<sub>p1</sub> = 75 mm · D<sub>p2</sub> = 195 mm</span></div>
</div>

<div class="preg">
<p class="preg-cab"><span class="preg-n">P29 · P30</span><span class="preg-tit">Diámetros exteriores</span></p>
<p>a = m = 3 mm, entonces 2a = 6 mm:</p>
<div class="f">$$ d_{e1} = 75 + 6 = 81\ \text{mm} \qquad\qquad d_{e2} = 195 + 6 = 201\ \text{mm} $$</div>
<div class="resultado"><span class="r-lbl">Respuestas:</span> <span class="r-val">d<sub>e1</sub> = 81 mm · d<sub>e2</sub> = 201 mm</span></div>
</div>

<div class="preg">
<p class="preg-cab"><span class="preg-n">P31 · P32</span><span class="preg-tit">Diámetros de raíz</span></p>
<p>b = 1,25·m = 3,75 mm, entonces 2b = 7,5 mm:</p>
<div class="f">$$ d_{i1} = 75 - 7{,}5 = 67{,}5\ \text{mm} \qquad\qquad d_{i2} = 195 - 7{,}5 = 187{,}5\ \text{mm} $$</div>
<div class="resultado"><span class="r-lbl">Respuestas:</span> <span class="r-val">d<sub>i1</sub> = 67,5 mm · d<sub>i2</sub> = 187,5 mm</span></div>
</div>

<div class="preg">
<p class="preg-cab"><span class="preg-n">P33</span><span class="preg-tit">Distancia entre centros</span></p>
<div class="f">$$ C = \frac{75 + 195}{2} = 135\ \text{mm} $$</div>
<div class="resultado"><span class="r-lbl">Respuesta:</span> <span class="r-val">C = 135 mm</span></div>
</div>

<div class="preg">
<p class="preg-cab"><span class="preg-n">P34</span><span class="preg-tit">Torque en el árbol motor</span></p>
<div class="f">$$ H = 15 \cdot 745 = 11\,175\ \text{W} \qquad \omega = \frac{2\pi \cdot 760}{60} = 79{,}587\ \text{rad/s} $$</div>
<div class="f">$$ T = \frac{11\,175}{79{,}587} = 140{,}41\ \text{N}\cdot\text{m} $$</div>
<div class="resultado"><span class="r-lbl">Respuesta:</span> <span class="r-val">T = 140,41 N·m</span></div>
</div>

<div class="preg">
<p class="preg-cab"><span class="preg-n">P35</span><span class="preg-tit">Fuerzas en el diente</span></p>
<p>r₁ = 75/2 = 37,5 mm = 0,0375 m:</p>
<div class="f">$$ W_t = \frac{140{,}41}{0{,}0375} = 3744\ \text{N} $$</div>
<div class="f">$$ W_r = 3744\tan 20^\circ = 1363\ \text{N} \qquad\qquad W = \frac{3744}{\cos 20^\circ} = 3985\ \text{N} $$</div>
<div class="resultado"><span class="r-lbl">Respuesta:</span> <span class="r-val">W<sub>t</sub> = 3744 N · W<sub>r</sub> = 1363 N · W = 3985 N</span></div>
</div>

<div class="preg">
<p class="preg-cab"><span class="preg-n">P36</span><span class="preg-tit">Tensión de Lewis</span></p>
<ol class="pasos">
<li><strong>Factor de forma</strong> para z = 25: no está en la tabla, se interpola entre z = 24 (0,337) y z = 26 (0,346):
<div class="f">$$ Y = 0{,}337 + \frac{25 - 24}{26 - 24}(0{,}346 - 0{,}337) = 0{,}337 + 0{,}5 \cdot 0{,}009 = 0{,}3415 $$</div></li>
<li><strong>Velocidad y factor dinámico</strong> (rectificado)
<div class="f">$$ V = \frac{\pi \cdot 75 \cdot 760}{60\,000} = 2{,}9845\ \text{m/s} \qquad K_v = \sqrt{\frac{5{,}56 + \sqrt{2{,}9845}}{5{,}56}} = 1{,}1449 $$</div></li>
<li><strong>Tensión</strong>
<div class="f">$$ \sigma = \frac{1{,}1449 \cdot 3744}{25 \cdot 3 \cdot 0{,}3415} = \frac{4286{,}5}{25{,}613} = 167{,}36\ \text{MPa} $$</div></li>
</ol>
<div class="resultado"><span class="r-lbl">Respuesta:</span> <span class="r-val">σ = 167,36 MPa</span></div>
</div>

<div class="preg">
<p class="preg-cab"><span class="preg-n">P37</span><span class="preg-tit">Factor de seguridad (AISI 4140 grado 2, 300 HB)</span></p>
<div class="f">$$ S_t = 0{,}749 \cdot 300 + 110 = 334{,}7\ \text{MPa} \qquad\qquad f_{seg} = \frac{334{,}7}{167{,}36} = 2{,}000 $$</div>
<div class="resultado"><span class="r-lbl">Respuesta:</span> <span class="r-val">f<sub>seg</sub> = 2,000</span></div>
</div>

<h3>Lo que hay que saber de este bloque</h3>
<div class="caja idea">
<p class="caja-tit">La disposición "O" de los rodamientos cónicos</p>
<p>Los dos conos apuntan sus vértices hacia afuera (o sea, las cargas se aplican "hacia adentro"): es la disposición <strong>en O</strong> (también llamada "ajustada" o back-to-back). Ventaja: la distancia efectiva entre apoyos es mayor, el árbol queda más rígido frente a la flexión. La disposición en <strong>X</strong> (frente a frente) es más tolerante a la desalineación pero menos rígida.</p>
<p>En los prácticos, "rodamientos cónicos dispuestos en O" siempre implica: pueden tomar <strong>carga radial y axial</strong> en un solo sentido cada uno, y hay que darles un <strong>ajuste (precarga)</strong> con la tuerca.</p>
</div>

<div class="caja ojo">
<p class="caja-tit">Datos que no se usan</p>
<p>El enunciado trae una fuerza axial F<sub>a</sub> = 1600 N y diámetros/distancia de los rodamientos (d₁ = 30, d₂ = 25, L₁ = 65, L₂ = 45 mm). Con eso se resuelve el <strong>equilibrio del árbol</strong> (cálculo de reacciones y vida de los rodamientos), que es materia del módulo de rodamientos: en las 12 preguntas de este bloque no se piden. No te distraigas con esos datos: usá los que pide cada pregunta.</p>
</div>

</div>
</div>
`
});
