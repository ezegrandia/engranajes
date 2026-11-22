/* =========================================================================
   CONTENIDO · 1b. FUNDAMENTOS (continuación)
   Capítulos: contacto, helicoidales, conicos, sinfin
   ========================================================================= */
window.CAPITULOS = window.CAPITULOS || [];

/* ------------------------------------------------- RELACIÓN DE CONTACTO */
window.CAPITULOS.push({
  id: "contacto",
  grupo: "1 · Fundamentos",
  titulo: "Contacto e interferencia",
  html: String.raw`
<h1>Relación de contacto e interferencia</h1>
<p class="bajada">Cuántos dientes están engranando a la vez, por qué eso decide si el engranaje vibra o no, y cuándo el diente "se come" el flanco del otro. Son dos preguntas de teoría casi seguras en el examen.</p>

<h2>La línea de acción y el ángulo de presión</h2>
<p>Cuando dos perfiles de evolvente engranan, el punto de contacto se desplaza sobre una recta fija llamada <strong>línea de acción</strong> (o línea de presión). Esa recta es tangente a los dos círculos de base y forma el <strong>ángulo de presión φ</strong> con la tangente a los círculos primitivos en el punto primitivo P.</p>

<div class="f">$$ D_b = D_p \cdot \cos\varphi \qquad\qquad \cos\varphi = \frac{D_b}{D_p} $$<span class="f-nota">Cuanto mayor es φ, más "gordo" y resistente es el diente en la base, pero mayor es la carga radial. La cátedra usa φ = 20°.</span></div>

<p>Los ángulos de presión normalizados son 14,5°, 20°, 22,5° y 25°. El de 20° es el estándar industrial.</p>

<h2>Relación de contacto (grado de recubrimiento) m<sub>c</sub></h2>
<p>El contacto entre un par de dientes empieza en el punto A (entrada) y termina en B (salida). El recorrido sobre la línea de acción es L<sub>ab</sub>. Dividido por el <strong>paso de base</strong> da cuántos pasos de diente abarca el contacto: eso es la relación de contacto.</p>

<div class="f">$$ m_c = \frac{q_t}{p_c} = \frac{L_{ab}}{p_b} = \frac{L_{ab}}{p_c \cdot \cos\varphi} $$<span class="f-nota">q<sub>t</sub> = arco de contacto total = q<sub>a</sub> (aproximación) + q<sub>r</sub> (retroceso). p<sub>b</sub> = p<sub>c</sub>·cos φ.</span></div>

<p>La longitud de la línea de acción se calcula con los radios exteriores y de base (fórmula de Norton, ec. 11.2, que coincide con el Manual Oberg-Jones, tomo I, pág. 755):</p>

<div class="f f-grande">$$ L_{ab} = \sqrt{R_{e1}^2 - R_{b1}^2} \;+\; \sqrt{R_{e2}^2 - R_{b2}^2} \;-\; C \cdot \sin\varphi $$</div>

<div class="f f-grande">$$ \boxed{\; m_c = \frac{\sqrt{R_{e1}^2 - R_{b1}^2} + \sqrt{R_{e2}^2 - R_{b2}^2} - C \cdot \sin\varphi}{p_c \cdot \cos\varphi} \;} $$</div>

<p>Donde R<sub>e</sub> = radio exterior = d<sub>e</sub>/2, R<sub>b</sub> = radio de base = D<sub>b</sub>/2, C = distancia entre centros. Todo en mm.</p>

<h2>Qué significa el número que te queda</h2>
<p>La relación de contacto se lee así: la parte entera dice cuántos pares de dientes engranan <em>siempre</em>, y la parte decimal, qué fracción del tiempo hay un par más.</p>

<div class="tabla-wrap">
<table class="tec">
<thead><tr><th class="num">m<sub>c</sub></th><th>Interpretación</th></tr></thead>
<tbody>
<tr><td class="num">0,95</td><td>95 % del tiempo engrana 1 par · 5 % del tiempo, ninguno → <strong>vibra</strong></td></tr>
<tr><td class="num">1,00</td><td>100 % del tiempo engrana 1 par · 0 % sin contacto (caso límite)</td></tr>
<tr><td class="num">1,65</td><td>65 % del tiempo engranan 2 pares · 35 % del tiempo, 1 par</td></tr>
<tr><td class="num">1,95</td><td>95 % del tiempo engranan 2 pares · 5 % del tiempo, 1 par</td></tr>
<tr><td class="num">2,00</td><td>100 % del tiempo engranan 2 pares</td></tr>
<tr><td class="num">2,13</td><td>13 % del tiempo engranan 3 pares · 87 % del tiempo, 2 pares</td></tr>
</tbody>
</table>
</div>

<h2>Probalo: cambiá los dientes y mirá cómo cambia m<sub>c</sub></h2>
<p>El simulador dibuja los dos engranajes con sus círculos primitivos (trazo), sus círculos de cabeza (línea fina) y la línea de acción con el tramo de contacto entre <strong>A</strong> y <strong>B</strong>. Al mover los dientes o el módulo cambia la longitud de ese tramo y, con ella, la relación de contacto.</p>
<div data-visual="contacto"></div>

<h2>Los límites: mínimo y máximo</h2>
<div class="grid2">
<div class="caja idea">
<p class="caja-tit">Mínimo</p>
<p><strong>Teórico:</strong> m<sub>c</sub> ≥ 1 (si es menor, hay instantes sin contacto: golpeteo).</p>
<p><strong>Práctico:</strong> m<sub>c</sub> ≥ 1,2 … 1,4. La cátedra verifica con 1,2.</p>
<div class="f f-sin">$$ m_c \ge 1{,}2 $$</div>
</div>
<div class="caja ojo">
<p class="caja-tit">Máximo</p>
<p>Si el contacto se sale de la zona de evolvente, hay interferencia. El tope es:</p>
<div class="f f-sin">$$ m_c \le \frac{C}{p_c}\cdot\tan\varphi \;=\; \frac{z_1+z_2}{2\pi}\cdot\tan\varphi $$</div>
<p>Con z₁ = 17, z₂ = 46 y φ = 20°: m<sub>c</sub> ≤ 63/6,2832·0,36397 = 3,65. El valor real (1,627) está muy por debajo.</p>
</div>
</div>

<h2>Ejercicio resuelto: relación de contacto del TP (m = 6 mm, z₁ = 17, z₂ = 46)</h2>
<p>Es la pregunta complementaria del primer bloque del práctico. Vamos paso a paso.</p>

<ol class="pasos">
<li><strong>Radios exteriores</strong> (con a = m = 6 mm)
<div class="f">$$ R_{e1} = \frac{D_{p1} + 2a}{2} = \frac{102 + 12}{2} = 57\ \text{mm} \qquad R_{e2} = \frac{276 + 12}{2} = 144\ \text{mm} $$</div></li>
<li><strong>Radios de base</strong>
<div class="f">$$ R_{b1} = \frac{D_{p1}\cos\varphi}{2} = \frac{102 \cdot 0{,}93969}{2} = 47{,}924\ \text{mm} \qquad R_{b2} = \frac{276 \cdot 0{,}93969}{2} = 129{,}678\ \text{mm} $$</div></li>
<li><strong>Términos de la raíz</strong>
<div class="f">$$ \sqrt{R_{e1}^2 - R_{b1}^2} = \sqrt{57^2 - 47{,}924^2} = 30{,}860\ \text{mm} $$</div>
<div class="f">$$ \sqrt{R_{e2}^2 - R_{b2}^2} = \sqrt{144^2 - 129{,}678^2} = 62{,}607\ \text{mm} $$</div></li>
<li><strong>Resta del término C·sen φ</strong>
<div class="f">$$ C \cdot \sin\varphi = 189 \cdot 0{,}34202 = 64{,}642\ \text{mm} $$</div></li>
<li><strong>Longitud de la línea de acción</strong>
<div class="f">$$ L_{ab} = 30{,}860 + 62{,}607 - 64{,}642 = 28{,}825\ \text{mm} $$</div></li>
<li><strong>Relación de contacto</strong>
<div class="f">$$ m_c = \frac{28{,}825}{p_c\cos\varphi} = \frac{28{,}825}{18{,}8496 \cdot 0{,}93969} = \frac{28{,}825}{17{,}713} = 1{,}627 $$</div></li>
</ol>

<div class="resultado"><span class="r-lbl">Resultado:</span> <span class="r-val">m<sub>c</sub> = 1,627 ≥ 1,2 → verifica</span></div>
<p>Interpretación: el 62,7 % del tiempo engranan dos pares de dientes y el 37,3 % restante, uno solo. Es un engranaje suave, sin vibraciones.</p>

<h2>Interferencia</h2>
<p>La evolvente solo existe <em>fuera</em> del círculo de base. Si el diente de una rueda llega a tocar el flanco del otro antes de que este empiece su evolvente (es decir, por debajo del círculo de base), el contacto se produce en una zona que no es evolvente: el diente del piñón <strong>socava</strong> (rebaja) la raíz de la rueda. Eso es la interferencia.</p>

<div class="caja ojo">
<p class="caja-tit">Consecuencias</p>
<ul>
<li>Se debilita la raíz del diente (menos material) y se pierde la relación de transmisión constante.</li>
<li>Aparecen vibraciones y ruido, y se acelera el desgaste.</li>
<li>El problema es tanto mayor cuanto <strong>menos dientes</strong> tiene el piñón.</li>
</ul>
</div>

<h3>¿Cuántos dientes como mínimo?</h3>
<p>La condición de no interferencia para un dentado de altura completa lleva a:</p>
<div class="f">$$ z_{mín} = \frac{2}{\sin^2\varphi} \qquad\Longrightarrow\qquad z_{mín} = \frac{2}{\sin^2 20^\circ} = \frac{2}{0{,}11698} \approx 17{,}1 \;\Rightarrow\; 17\ \text{dientes} $$</div>
<div class="f f-sin">$$ \varphi = 14{,}5^\circ \Rightarrow z_{mín} = 32 \qquad \varphi = 20^\circ \Rightarrow z_{mín} = 17 \qquad \varphi = 25^\circ \Rightarrow z_{mín} = 12 $$</div>

<p>En la práctica se suele tomar 15 dientes como mínimo para ruedas talladas con φ = 20°, aceptando una pequeña corrección del dentado. Si no se corrige, el mínimo es 17.</p>

<h3>Tabla de números mínimos de dientes (Lipp)</h3>
<p>Para pares con relación de transmisión distinta de 1, el mínimo del piñón depende de los dientes de la rueda. Esta es la tabla 13-1 de Shigley (φ<sub>n</sub> = 20°, altura completa):</p>

<div class="tabla-wrap">
<table class="tec compacta">
<thead><tr><th>z piñón \ z rueda</th><th class="num">0</th><th class="num">5</th><th class="num">10</th><th class="num">15</th><th class="num">20</th><th class="num">25</th><th class="num">30</th><th class="num">35</th></tr></thead>
<tbody>
<tr><td class="num">8</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="num">12</td></tr>
<tr><td class="num">9</td><td></td><td></td><td></td><td></td><td></td><td class="num">12</td><td class="num">34</td><td></td></tr>
<tr><td class="num">10</td><td></td><td></td><td></td><td></td><td class="num">12</td><td class="num">26</td><td class="num">∞</td><td></td></tr>
<tr><td class="num">11</td><td></td><td></td><td></td><td class="num">13</td><td class="num">23</td><td class="num">93</td><td></td><td></td></tr>
<tr><td class="num">12</td><td></td><td></td><td class="num">12</td><td class="num">16</td><td class="num">24</td><td class="num">57</td><td class="num">∞</td><td></td></tr>
<tr><td class="num">13</td><td class="num">16</td><td class="num">17</td><td class="num">20</td><td class="num">27</td><td class="num">50</td><td></td><td class="num">∞</td><td></td></tr>
<tr><td class="num">14</td><td class="num">26</td><td class="num">27</td><td class="num">34</td><td class="num">53</td><td class="num">207</td><td></td><td></td><td></td></tr>
<tr><td class="num">15</td><td class="num">45</td><td class="num">49</td><td class="num">69</td><td class="num">181</td><td class="num">∞</td><td></td><td></td><td></td></tr>
<tr><td class="num">16</td><td class="num">101</td><td class="num">121</td><td class="num">287</td><td class="num">∞</td><td></td><td></td><td></td><td></td></tr>
<tr><td class="num">17</td><td class="num">∞</td><td class="num">∞</td><td class="num">∞</td><td></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div>
<p class="aviso">Cada celda da el máximo de dientes de la rueda para el que <em>todavía no hay</em> interferencia con ese piñón. Por ejemplo: un piñón de 13 dientes puede engranar sin interferencia hasta una rueda de 16 dientes; con 17 ya hay interferencia.</p>

<div class="caja truco">
<p class="caja-tit">Cómo se evita en la práctica</p>
<ul>
<li><strong>Usar z ≥ 17</strong> en el piñón (lo más simple).</li>
<li><strong>Corregir el dentado</strong> (modificación del addendo, "dientes corregidos"): se desplaza el perfil para que la evolvente útil no se salga.</li>
<li><strong>Aumentar el ángulo de presión</strong> (25° permite bajar a 12 dientes).</li>
<li><strong>Dentado helicoidal</strong>: el número mínimo equivalente crece con 1/cos³ψ, así que se pueden usar menos dientes reales.</li>
</ul>
</div>

<h2>Checklist del capítulo</h2>
<div class="caja">
<ul>
<li>¿Podés escribir m<sub>c</sub> y decir qué significa 1,65?</li>
<li>¿Sabés por qué el denominador lleva p<sub>c</sub>·cos φ y no p<sub>c</sub>?</li>
<li>¿Recordás los tres límites (1 teórico, 1,2 práctico, máximo por interferencia)?</li>
<li>¿De dónde sale z<sub>mín</sub> = 2/sen²φ y cuánto vale con φ = 20°?</li>
<li>¿Sabés qué le pasa físicamente al diente cuando hay interferencia?</li>
</ul>
</div>
`
});

/* ---------------------------------------------------- ENGRANAJES HELICOIDALES */
window.CAPITULOS.push({
  id: "helicoidales",
  grupo: "1 · Fundamentos",
  titulo: "Engranajes helicoidales",
  html: String.raw`
<h1>Engranajes cilíndricos helicoidales</h1>
<p class="bajada">Los mismos engranajes de siempre, pero con los dientes inclinados un ángulo ψ. Ganan suavidad y capacidad de carga, y a cambio aparecen un módulo "transversal" y una fuerza axial que hay que saber manejar.</p>

<h2>Ventajas y desventajas</h2>
<div class="grid2">
<div class="caja idea">
<p class="caja-tit">A favor</p>
<ul>
<li>Mayor capacidad de carga (más dientes en contacto).</li>
<li>Engrane gradual: menos ruido y menos vibración.</li>
<li>Pueden usarse con ejes alabeados (hélices cruzadas a 90°).</li>
<li>Son reversibles (a diferencia del sinfín).</li>
</ul>
</div>
<div class="caja ojo">
<p class="caja-tit">En contra</p>
<ul>
<li>Generan <strong>empuje axial</strong>: hay que usar rodamientos que lo absorban (cónicos, de contacto angular).</li>
<li>Fabricación más compleja (y más cara) que el dentado recto.</li>
<li>El empuje cambia de sentido si se invierte el giro o el par.</li>
</ul>
</div>
</div>

<h2>Los dos módulos: normal y transversal</h2>
<p>El diente se talla con una fresa que "ve" el perfil en un plano normal a la hélice. Por eso el módulo que se normaliza es el <strong>normal</strong> m<sub>n</sub>, y el que aparece en el diámetro primitivo es el <strong>transversal</strong> m<sub>t</sub>:</p>

<div class="f f-grande">$$ m_t = \frac{m_n}{\cos\psi} \qquad\qquad D_p = z \cdot m_t = \frac{z \cdot m_n}{\cos\psi} $$</div>

<div class="f">$$ p_t = \frac{p_n}{\cos\psi} = m_t \cdot \pi \qquad\qquad D_b = D_p\cos\varphi_t \qquad\qquad C = \frac{m_n(z_1+z_2)}{2\cos\psi} $$</div>

<div class="caja dato">
<p class="caja-tit">Ángulo de hélice</p>
<p>Rango habitual: <strong>15° ≤ ψ ≤ 30°</strong>. Por encima de 30° crece demasiado el empuje axial; por debajo de 15° casi no se aprovecha la ventaja del dentado helicoidal.</p>
</div>

<h2>El cilindro "desenrollado": de dónde sale el ángulo de hélice</h2>
<p>Si se corta el cilindro de paso y se extiende sobre un plano, la hélice del diente se vuelve una <strong>recta inclinada</strong>. El ángulo que forma con la circunferencia es ψ, y el avance axial de una vuelta completa es el paso axial p<sub>x</sub> multiplicado por el número de entradas.</p>

<figure class="figura">
<svg viewBox="0 0 700 380" role="img" aria-label="Cilindro de paso desenrollado: el filete es una recta inclinada el ángulo psi, separada el paso axial px, y en una vuelta avanza L">
  <rect x="110" y="70" width="490" height="230" fill="currentColor" fill-opacity=".05" stroke="currentColor" stroke-width="1.6"/>
  <!-- filetes -->
  <line x1="110" y1="300" x2="600" y2="70" stroke="currentColor" stroke-width="2.4"/>
  <line x1="110" y1="223" x2="437" y2="70" stroke="currentColor" stroke-width="1.6" stroke-opacity=".8"/>
  <!-- ángulo psi -->
  <path d="M 250 300 A 140 140 0 0 0 236 240" fill="none" stroke="var(--ac)" stroke-width="1.8"/>
  <text x="256" y="272" font-size="13" font-style="italic" fill="var(--ac)" font-weight="700">ψ</text>
  <!-- paso axial -->
  <line class="svg-tenue-linea" x1="88" y1="300" x2="110" y2="300" stroke-dasharray="3 3"/>
  <line class="svg-tenue-linea" x1="88" y1="223" x2="110" y2="223" stroke-dasharray="3 3"/>
  <line x1="88" y1="223" x2="88" y2="300" stroke="currentColor" stroke-width="1.2"/>
  <line x1="82" y1="223" x2="94" y2="223" stroke="currentColor" stroke-width="1.2"/>
  <line x1="82" y1="300" x2="94" y2="300" stroke="currentColor" stroke-width="1.2"/>
  <text x="76" y="264" font-size="12" text-anchor="end" font-weight="700">p<tspan font-size="8" dy="2">x</tspan></text>
  <!-- avance L -->
  <line class="svg-tenue-linea" x1="600" y1="70" x2="626" y2="70" stroke-dasharray="3 3"/>
  <line class="svg-tenue-linea" x1="600" y1="300" x2="626" y2="300" stroke-dasharray="3 3"/>
  <line x1="620" y1="70" x2="620" y2="300" stroke="currentColor" stroke-width="1.2"/>
  <line x1="614" y1="70" x2="626" y2="70" stroke="currentColor" stroke-width="1.2"/>
  <line x1="614" y1="300" x2="626" y2="300" stroke="currentColor" stroke-width="1.2"/>
  <text x="640" y="186" font-size="12" font-weight="700">L = p<tspan font-size="8" dy="2">x</tspan><tspan dy="-2">·z</tspan><tspan font-size="8" dy="2">1</tspan></text>
  <!-- perímetro -->
  <line class="svg-tenue-linea" x1="110" y1="336" x2="600" y2="336"/>
  <line class="svg-tenue-linea" x1="110" y1="330" x2="110" y2="342"/>
  <line class="svg-tenue-linea" x1="600" y1="330" x2="600" y2="342"/>
  <text x="355" y="356" font-size="11.5" text-anchor="middle">π·D<tspan font-size="8" dy="2">p</tspan><tspan dy="-2"> (una vuelta completa de circunferencia)</tspan></text>
  <!-- rótulos de dirección -->
  <text x="118" y="62" font-size="10.5" fill-opacity=".7">← desarrollo de la circunferencia →</text>
  <text x="612" y="62" font-size="10.5" text-anchor="end" fill-opacity=".7">↑ dirección axial</text>
</svg>
<figcaption><strong>Cómo leerlo:</strong> el rectángulo es el cilindro de paso cortado y estirado. La horizontal es una vuelta completa de circunferencia (π·D<sub>p</sub>) y la vertical es la dirección del eje. El filete del diente aparece como una recta inclinada: el ángulo que forma con la horizontal es ψ. Dos filetes consecutivos están separados el <strong>paso axial p<sub>x</sub></strong>, y en una vuelta completa el diente avanza axialmente <strong>L = p<sub>x</sub>·z₁</strong>. Si ψ = 0, el diente sería recto (no habría avance ni empuje axial).</figcaption>
</figure>

<h2>Adendo, dedendo y ángulos de presión</h2>
<div class="f">$$ a = m_n \qquad\qquad b = 1{,}25\,m_n \qquad\qquad h_t = 2{,}25\,m_n $$</div>
<p>El ángulo de presión también tiene dos versiones: el normal φ<sub>n</sub> (el del tallado, 20°) y el transversal φ<sub>t</sub> (el que se ve en el plano de rotación):</p>
<div class="f">$$ \tan\varphi_t = \frac{\tan\varphi_n}{\cos\psi} \qquad\Longleftrightarrow\qquad \cos\psi = \frac{\tan\varphi_n}{\tan\varphi_t} $$<span class="f-nota">Con φ<sub>n</sub> = 20° y ψ = 20°: φ<sub>t</sub> = 21,17°.</span></div>

<h2>Relación de contacto total</h2>
<p>Además del contacto en el plano transversal (igual que en dentado recto, pero con φ<sub>t</sub> y p<sub>t</sub>), el diente inclinado agrega un contacto <strong>axial</strong> porque el flanco "barre" a lo largo de la cara:</p>

<div class="f f-grande">$$ m_{hel} = m_c + m_a \qquad\text{con}\qquad m_a = \frac{F \cdot \tan\psi}{p_t} $$</div>

<div class="f">$$ m_c = \frac{\sqrt{(R_{P2}+a)^2 - R_{B2}^2} + \sqrt{(R_{P1}+a)^2 - R_{B1}^2} - (R_{P1}+R_{P2})\sin\varphi_t}{p_t\cos\varphi_t} $$</div>

<p>Por eso un helicoidal puede tener m<sub>hel</sub> de 3 o 4 sin ningún problema: es la razón de que sea más silencioso y soporte más carga.</p>

<h2>Fuerzas: aparece la componente axial</h2>
<p>El torque sigue produciendo la fuerza tangencial de siempre, pero ahora la fuerza resultante se descompone en tres direcciones:</p>

<div class="f f-grande">$$ W_t = \frac{60\,000 \cdot H}{\pi \cdot D_p \cdot n} \qquad\qquad W_r = W_t\tan\varphi_t \qquad\qquad W_a = W_t\tan\psi $$</div>

<div class="f">$$ W = \frac{W_t}{\cos\varphi_n \cdot \cos\psi} \qquad\text{y también}\qquad W_r = W\sin\varphi_n $$</div>

<div class="tabla-wrap">
<table class="tec">
<thead><tr><th>Fuerza</th><th>Fórmula</th><th>Para qué se usa</th></tr></thead>
<tbody>
<tr><td>Tangencial W<sub>t</sub></td><td><span>$W_t = \dfrac{2T}{D_p} = \dfrac{60\,000\,H}{\pi D_p n}$</span></td><td>Verificación del diente (Lewis)</td></tr>
<tr><td>Radial W<sub>r</sub></td><td><span>$W_r = W_t\tan\varphi_t$</span></td><td>Flexión del árbol y rodamientos</td></tr>
<tr><td>Axial W<sub>a</sub></td><td><span>$W_a = W_t\tan\psi$</span></td><td>Empuje sobre los rodamientos</td></tr>
<tr><td>Resultante W</td><td><span>$W = \dfrac{W_t}{\cos\varphi_n\cos\psi}$</span></td><td>Verificación global del árbol</td></tr>
</tbody>
</table>
</div>

<div class="caja truco">
<p class="caja-tit">Regla del empuje axial (la pregunta clásica)</p>
<p>El empuje axial va <strong>en el mismo sentido en que "avanza" el diente</strong>. Para saberlo sin equivocarte:</p>
<ol>
<li>Mirá el sentido de giro del engranaje.</li>
<li>Mirá el sentido de la hélice (derecha o izquierda).</li>
<li>El empuje apunta hacia el lado del diente que "entra" en el engrane.</li>
</ol>
<p>En un par montado en ejes paralelos, las dos fuerzas axiales son <strong>iguales y de sentido contrario</strong>: una empuja el árbol en un sentido y la otra en el opuesto. Eso es lo que permite usar rodamientos en "O" o en "X" y balancear la carga.</p>
</div>

<h2>Cómo cambia (y cómo NO cambia) la relación de transmisión</h2>
<div class="caja idea">
<p class="caja-tit">Importante para los prácticos</p>
<p>Pasar de dentado recto a helicoidal <strong>no cambia la relación de transmisión</strong>: i sigue siendo z₂/z₁. Lo que cambia es la geometría (m<sub>n</sub> vs m<sub>t</sub>), la distancia entre centros y la aparición de las fuerzas axiales. En el práctico de reductores hay tres preguntas que piden recalcular la velocidad suponiendo dentado helicoidal de 20°: la respuesta es <strong>la misma velocidad</strong>, y lo que hay que explicar es el empuje axial.</p>
</div>

<h2>Checklist del capítulo</h2>
<div class="caja">
<ul>
<li>¿Sabés por qué se normaliza m<sub>n</sub> y no m<sub>t</sub>?</li>
<li>¿Podés calcular D<sub>p</sub> y C con m<sub>n</sub> y ψ?</li>
<li>¿Recordás las tres componentes de la fuerza y con qué fórmulas salen?</li>
<li>¿Sabés qué le pasa a la relación de transmisión al pasar de recto a helicoidal? (Nada.)</li>
<li>¿Podés explicar por qué el helicoidal es más silencioso (m<sub>a</sub>)?</li>
</ul>
</div>
`
});

/* --------------------------------------------------------- ENGRANAJES CÓNICOS */
window.CAPITULOS.push({
  id: "conicos",
  grupo: "1 · Fundamentos",
  titulo: "Engranajes cónicos",
  html: String.raw`
<h1>Engranajes cónicos</h1>
<p class="bajada">Para transmitir entre ejes que se cortan (concurrentes). La geometría pasa de círculos a conos, pero las cuentas son casi las mismas que en los cilíndricos, con dos ángulos nuevos: γ y Γ.</p>

<h2>Tipos</h2>
<div class="tabla-wrap">
<table class="tec">
<thead><tr><th>Tipo</th><th>Cuándo se usa</th><th>Observación</th></tr></thead>
<tbody>
<tr><td><strong>Dentado recto</strong></td><td>Velocidades periféricas bajas</td><td>Funciona bien solo hasta v<sub>t</sub> ≤ 2 m/s; ruidoso</td></tr>
<tr><td><strong>Dentado helicoidal (espiral)</strong></td><td>v<sub>t</sub> mayor, más carga</td><td>Engrane más gradual, requiere rodamientos para el empuje axial</td></tr>
<tr><td><strong>Hipoidal</strong></td><td>Automóviles (piñón de ataque)</td><td>Ejes <em>alabeados</em>: el piñón va descentrado; más silencioso y resistente, pero con deslizamiento</td></tr>
</tbody>
</table>
</div>

<h2>Nomenclatura y geometría</h2>
<p>En un engranaje cónico hay dos conos primitivos que ruedan sin deslizar sobre una generatriz común, con el vértice en el punto donde se cortan los ejes. Los ángulos de paso son γ (piñón) y Γ (rueda), y su suma es el ángulo entre ejes Σ:</p>

<div class="f f-grande">$$ \Sigma = \gamma + \Gamma \qquad\qquad \tan\gamma = \frac{z_1}{z_2} \qquad\qquad \tan\Gamma = \frac{z_2}{z_1} $$</div>

<p>Los diámetros de paso se miden en el <strong>extremo mayor</strong> del diente:</p>
<div class="f">$$ D_{p1} = m \cdot z_1 \qquad\qquad D_{p2} = m \cdot z_2 $$</div>

<p>La <strong>longitud de generatriz</strong> (distancia del vértice al extremo mayor, A<sub>o</sub>) y el <strong>radio del cono posterior</strong> (r<sub>b</sub>, el que se usa para "desenrollar" el diente y tratarlo como uno recto) son:</p>

<div class="f f-grande">$$ A_o = \frac{D_p}{2\sin\gamma} \qquad\qquad r_{b1} = \frac{D_{p1}}{2\cos\gamma} \qquad\qquad r_{b2} = \frac{D_{p2}}{2\cos\Gamma} $$</div>

<p>El <strong>ancho de cara</strong> F debe ser menor que un tercio de la generatriz para que el diente no se afine demasiado en el extremo menor:</p>
<div class="f">$$ F \le \frac{A_o}{3} \qquad\text{(Shigley)}\qquad\qquad F \approx 10\,m\ \text{(valor típico)} $$</div>

<h2>Los conos primitivos y sus ángulos</h2>
<p>En un engranaje cónico los dos conos primitivos comparten el vértice (donde se cortan los ejes) y son <strong>tangentes a lo largo de una generatriz</strong>. Los ángulos de paso γ y Γ se miden desde el eje de cada rueda, y la generatriz mide A<sub>o</sub>.</p>

<figure class="figura">
<svg viewBox="0 0 520 340" role="img" aria-label="Conos primitivos de un par cónico: ángulos de paso gamma y gamma mayúscula, generatriz Ao y diámetros primitivos">
  <!-- conos -->
  <polygon points="350,130 307.9,226.2 392.1,226.2" fill="currentColor" fill-opacity=".1"/>
  <polygon points="350,130 307.9,33.8 307.9,226.2" fill="currentColor" fill-opacity=".04"/>
  <!-- ejes -->
  <line class="svg-tenue-linea" x1="350" y1="130" x2="350" y2="296" stroke-dasharray="7 5"/>
  <line class="svg-tenue-linea" x1="350" y1="130" x2="222" y2="130" stroke-dasharray="7 5"/>
  <text class="svg-tenue" x="356" y="308" font-size="10.5">eje del piñón</text>
  <text class="svg-tenue" x="218" y="118" font-size="10.5" text-anchor="end">eje de la rueda</text>
  <!-- generatriz -->
  <line x1="350" y1="130" x2="307.9" y2="226.2" stroke="var(--ac)" stroke-width="2.6"/>
  <!-- contornos -->
  <line x1="350" y1="130" x2="392.1" y2="226.2" stroke="currentColor" stroke-width="1.6"/>
  <line x1="307.9" y1="226.2" x2="392.1" y2="226.2" stroke="currentColor" stroke-width="1.6"/>
  <line x1="350" y1="130" x2="307.9" y2="33.8" stroke="currentColor" stroke-width="1.6"/>
  <line x1="307.9" y1="33.8" x2="307.9" y2="226.2" stroke="currentColor" stroke-width="1.6"/>
  <!-- ángulos -->
  <path d="M 350 130 L 350 176 A 46 46 0 0 1 331.6 172.2 Z" fill="var(--ac)" fill-opacity=".22" stroke="var(--ac)" stroke-width="1.2"/><path d="M 350 130 L 304 130 A 46 46 0 0 0 331.6 172.2 Z" fill="var(--ac)" fill-opacity=".12" stroke="var(--ac)" stroke-width="1.2"/>
  
  <text x="341" y="164" font-size="13" fill="var(--ac)" font-weight="700" text-anchor="middle">γ</text>
  <text x="322" y="150" font-size="13" fill="var(--ac)" font-weight="700" text-anchor="middle">Γ</text>
  <!-- Dp2 -->
  <line class="svg-tenue-linea" x1="272" y1="33.8" x2="272" y2="226.2"/>
  <line class="svg-tenue-linea" x1="266" y1="33.8" x2="278" y2="33.8"/>
  <line class="svg-tenue-linea" x1="266" y1="226.2" x2="278" y2="226.2"/>
  <text x="264" y="112" font-size="11" text-anchor="end">D<tspan font-size="8" dy="2">p2</tspan></text>
  <!-- Dp1 -->
  <line class="svg-tenue-linea" x1="307.9" y1="240" x2="392.1" y2="240"/>
  <line class="svg-tenue-linea" x1="307.9" y1="234" x2="307.9" y2="246"/>
  <line class="svg-tenue-linea" x1="392.1" y1="234" x2="392.1" y2="246"/>
  <text x="350" y="258" font-size="11" text-anchor="middle">D<tspan font-size="8" dy="2">p1</tspan></text>
  <!-- Ao con línea de referencia -->
  <line class="svg-tenue-linea" x1="336" y1="172" x2="418" y2="152" stroke-dasharray="3 3"/>
  <text x="422" y="152" font-size="11" fill="var(--ac)">A<tspan font-size="8" dy="2">o</tspan><tspan dy="-2"> (generatriz)</tspan></text>
  <!-- vértice -->
  <circle cx="350" cy="130" r="3.4" fill="currentColor"/>
  <text x="350" y="122" font-size="10" text-anchor="middle" fill-opacity=".7">vértice común</text>
  <!-- ruedas -->
  <line class="svg-tenue-linea" x1="300" y1="66" x2="268" y2="58" stroke-dasharray="3 3"/>
  <text x="264" y="58" font-size="11" text-anchor="end" fill-opacity=".8">rueda (z₂)</text>
  <line class="svg-tenue-linea" x1="378" y1="212" x2="410" y2="226" stroke-dasharray="3 3"/>
  <text x="414" y="230" font-size="11" fill-opacity=".8">piñón (z₁)</text>
</svg>
<figcaption><strong>Cómo leerlo:</strong> los dos conos comparten el vértice (donde se cortan los ejes) y se tocan a lo largo de la línea verde: esa es la <strong>generatriz</strong>, y su longitud es A<sub>o</sub>. El ángulo γ se mide desde el eje del piñón y Γ desde el eje de la rueda; siempre γ + Γ = Σ. Sobre la base de cada cono (el extremo mayor del diente) se miden D<sub>p1</sub> y D<sub>p2</sub>. En el ejemplo 14/32 el piñón tiene pocos dientes, por eso su cono es angosto y el de la rueda es ancho.</figcaption>
</figure>

<h2>Ejemplo resuelto (el de la presentación)</h2>
<p>Piñón z₁ = 14, rueda z₂ = 32, módulo m = 4,5 mm, φ = 20°, ejes a 90°. Determinar diámetros de paso, ángulos de paso y radios de cono posterior.</p>

<ol class="pasos">
<li><strong>Diámetros de paso</strong>
<div class="f">$$ D_{p1} = m \cdot z_1 = 4{,}5 \cdot 14 = 63\ \text{mm} \qquad D_{p2} = 4{,}5 \cdot 32 = 144\ \text{mm} $$</div></li>
<li><strong>Ángulos de paso</strong>
<div class="f">$$ \gamma = \arctan\frac{z_1}{z_2} = \arctan\frac{14}{32} = 23{,}63^\circ \qquad \Gamma = 90^\circ - 23{,}63^\circ = 66{,}37^\circ $$</div></li>
<li><strong>Longitud de generatriz</strong>
<div class="f">$$ A_o = \frac{D_{p1}}{2\sin\gamma} = \frac{63}{2 \cdot 0{,}4009} = 78{,}6\ \text{mm} $$</div></li>
<li><strong>Radios del cono posterior</strong>
<div class="f">$$ r_{b1} = \frac{63}{2\cos 23{,}63^\circ} = 34{,}4\ \text{mm} \qquad r_{b2} = \frac{144}{2\cos 66{,}37^\circ} = 179{,}6\ \text{mm} $$</div></li>
<li><strong>Ancho de cara admisible</strong>
<div class="f">$$ F \le \frac{A_o}{3} = \frac{78{,}6}{3} = 26{,}2\ \text{mm} $$</div></li>
</ol>
<div class="resultado"><span class="r-lbl">Resumen:</span> <span class="r-val">D<sub>p1</sub> = 63 mm · D<sub>p2</sub> = 144 mm · γ = 23,63° · Γ = 66,37° · r<sub>b1</sub> = 34,4 mm · r<sub>b2</sub> = 179,6 mm</span></div>

<h2>Fuerzas en un engranaje cónico</h2>
<p>Se calculan en el <strong>radio medio</strong> del diente (a media cara), que es donde se considera aplicada la carga:</p>

<div class="f f-grande">$$ r_m = r - \frac{F}{2}\sin\gamma \qquad\qquad W_t = \frac{H}{2\pi\,r_m\,n} = \frac{2T}{D_m} $$</div>

<div class="f">$$ W_r = W_t\tan\varphi\cos\gamma \qquad\qquad W_a = W_t\tan\varphi\sin\gamma $$</div>

<div class="caja idea">
<p class="caja-tit">Por qué se calcula en el radio medio</p>
<p>En un cónico el módulo (y por lo tanto la resistencia del diente) cambia a lo largo de la cara: es máximo en el extremo mayor y mínimo en el menor. Calcular con el radio medio es el compromiso habitual: la carga no está toda en el extremo más resistente ni en el más débil.</p>
</div>

<div class="caja ojo">
<p class="caja-tit">Empuje axial y radial</p>
<p>Ojo con las componentes: en los cónicos, la <strong>fuerza radial de uno es la axial del otro</strong> (por la geometría a 90°). Con γ chico (piñón), el empuje axial del piñón es chico y su radial grande; en la rueda pasa al revés.</p>
</div>

<h2>Checklist del capítulo</h2>
<div class="caja">
<ul>
<li>¿Sabés calcular γ y Γ y verificar que suman Σ?</li>
<li>¿Podés obtener A<sub>o</sub> y los radios de cono posterior?</li>
<li>¿Recordás el límite F ≤ A<sub>o</sub>/3?</li>
<li>¿Sabés por qué las fuerzas se calculan en el radio medio?</li>
<li>¿Qué diferencia hay entre cónico recto, espiral e hipoidal?</li>
</ul>
</div>
`
});

/* -------------------------------------------------- TORNILLO SIN FIN */
window.CAPITULOS.push({
  id: "sinfin",
  grupo: "1 · Fundamentos",
  titulo: "Tornillo sin fin y corona",
  html: String.raw`
<h1>Tornillo sin fin y rueda helicoidal</h1>
<p class="bajada">La forma más rápida de conseguir una reducción enorme en un solo escalón (i de 20 a 100) con ejes alabeados. El precio es el rendimiento: es la transmisión por engranajes que más energía pierde.</p>

<h2>Características</h2>
<div class="grid2">
<div class="caja idea">
<p class="caja-tit">A favor</p>
<ul>
<li>Alta reducción de velocidad en una sola etapa: i = z₂/z₁ con z₁ = 1…4 entradas.</li>
<li>Muy compacto y silencioso.</li>
<li>Ejes alabeados (perpendiculares y sin cortarse).</li>
<li>Puede ser <strong>autoblocante</strong>: no gira al revés (el tornillo es siempre el motor).</li>
</ul>
</div>
<div class="caja ojo">
<p class="caja-tit">En contra</p>
<ul>
<li>Alto rozamiento por deslizamiento: rendimiento aproximado entre <strong>60 % y 80 %</strong> (y menos si el ángulo de avance es chico).</li>
<li>Gran empuje axial en el tornillo (hace falta rodamiento de empuje).</li>
<li>Necesita refrigeración: el calor es un límite de diseño.</li>
<li>La corona suele ser de bronce (para deslizar contra el acero del tornillo).</li>
</ul>
</div>
</div>

<h2>Relación de transmisión</h2>
<p>El tornillo tiene z₁ <em>entradas</em> (como si fueran los dientes de un engranaje de z₁ dientes) y la corona z₂ dientes. En una vuelta del tornillo, la corona avanza z₁ dientes, o sea z₁/z₂ de vuelta:</p>

<div class="f f-grande">$$ i = \frac{n_e}{n_s} = \frac{z_2}{z_1} \qquad\Longrightarrow\qquad i = \frac{60}{1} = 60\ \text{(con z}_1 = 1,\ z_2 = 60\text{)} $$</div>

<h2>Dimensiones del tornillo y de la corona</h2>
<div class="f">$$ p_x = \pi \cdot m_n \qquad\qquad b \cong 5\,p_x \qquad\qquad L = p_x \cdot z_1 \ \text{(avance)} $$</div>

<div class="f">$$ \beta = \arctan\!\left(\frac{\pi \cdot D_{p1}}{p_x \cdot z_1}\right) \qquad\qquad \lambda = 90^\circ - \beta \ \text{(ángulo de avance)} $$</div>

<div class="f">$$ D_{p2} = \frac{p}{\pi}\cdot z_2 = d_G \qquad\qquad \frac{C^{0{,}875}}{3} \le D_{p1} \le \frac{C^{0{,}875}}{1{,}7} $$</div>

<figure class="figura">
<svg viewBox="0 0 560 380" role="img" aria-label="Conjunto tornillo sin fin y corona: ejes perpendiculares, diámetros de paso, paso axial y ángulo de avance">
  <!-- corona -->
  <circle cx="270" cy="120" r="78" fill="currentColor" fill-opacity=".05" stroke="currentColor" stroke-width="1.6"/>
  <circle cx="270" cy="120" r="58" fill="none" stroke="currentColor" stroke-width="1.1" stroke-dasharray="6 4"/>
  <g stroke="currentColor" stroke-width="1.4">
    <line x1="270" y1="42" x2="270" y2="54"/><line x1="270" y1="186" x2="270" y2="198"/>
    <line x1="192" y1="120" x2="204" y2="120"/><line x1="336" y1="120" x2="348" y2="120"/>
    <line x1="215" y1="65" x2="224" y2="74"/><line x1="325" y1="65" x2="316" y2="74"/>
    <line x1="215" y1="175" x2="224" y2="166"/><line x1="325" y1="175" x2="316" y2="166"/>
  </g>
  <line class="svg-tenue-linea" x1="270" y1="120" x2="270" y2="30" stroke-dasharray="7 5"/>
  <text class="svg-tenue" x="276" y="34" font-size="10.5">eje de la corona</text>
  <text x="270" y="124" font-size="11.5" text-anchor="middle" font-weight="700">corona</text>
  <text x="270" y="138" font-size="10.5" text-anchor="middle">z₂ dientes</text>
  <!-- diámetro de la corona -->
  <line class="svg-tenue-linea" x1="212" y1="120" x2="328" y2="120" stroke-dasharray="4 3"/>
  <text x="352" y="118" font-size="10.5">d<tspan font-size="8" dy="2">G</tspan></text>
  <!-- tornillo -->
  <rect x="110" y="228" width="320" height="40" rx="8" fill="currentColor" fill-opacity=".07" stroke="currentColor" stroke-width="1.6"/>
  <g stroke="currentColor" stroke-width="1.3">
    <line x1="140" y1="228" x2="128" y2="268"/><line x1="180" y1="228" x2="168" y2="268"/>
    <line x1="220" y1="228" x2="208" y2="268"/><line x1="260" y1="228" x2="248" y2="268"/>
    <line x1="300" y1="228" x2="288" y2="268"/><line x1="340" y1="228" x2="328" y2="268"/>
    <line x1="380" y1="228" x2="368" y2="268"/>
  </g>
  <line class="svg-tenue-linea" x1="100" y1="248" x2="440" y2="248" stroke-dasharray="7 5"/>
  <text class="svg-tenue" x="444" y="252" font-size="10.5">eje del tornillo</text>
  <!-- contacto -->
  <circle cx="270" cy="198" r="3.6" fill="var(--alerta)"/>
  <line class="svg-tenue-linea" x1="270" y1="198" x2="270" y2="228" stroke="var(--alerta)" stroke-dasharray="3 3"/>
  <text x="278" y="212" font-size="10" fill="var(--alerta)">zona de engrane</text>
  <!-- dW -->
  <line class="svg-tenue-linea" x1="98" y1="228" x2="98" y2="268"/>
  <line class="svg-tenue-linea" x1="92" y1="228" x2="104" y2="228"/>
  <line class="svg-tenue-linea" x1="92" y1="268" x2="104" y2="268"/>
  <text x="86" y="252" font-size="10.5" text-anchor="end">d<tspan font-size="8" dy="2">W</tspan></text>
  <!-- px -->
  <line class="svg-tenue-linea" x1="150" y1="228" x2="140" y2="228" stroke-dasharray="3 3"/>
  <line x1="150" y1="282" x2="182" y2="282" stroke="currentColor" stroke-width="1.2"/>
  <line x1="150" y1="276" x2="150" y2="288" stroke="currentColor" stroke-width="1.2"/>
  <line x1="182" y1="276" x2="182" y2="288" stroke="currentColor" stroke-width="1.2"/>
  <text x="166" y="300" font-size="10.5" text-anchor="middle">p<tspan font-size="8" dy="2">x</tspan></text>
  <!-- lambda -->
  <path d="M 240 300 A 34 34 0 0 1 246 274" fill="none" stroke="var(--ac)" stroke-width="1.4"/>
  <text x="252" y="296" font-size="11.5" fill="var(--ac)" font-style="italic">λ</text>
  <text x="270" y="318" font-size="10.5" text-anchor="middle" fill-opacity=".75">el filete sube con el ángulo de avance λ</text>
  <!-- 90 grados -->
  <path d="M 270 210 L 288 210 L 288 228" fill="none" stroke="currentColor" stroke-width="1" stroke-opacity=".55"/>
</svg>
<figcaption>Conjunto tornillo sin fin–corona. Los ejes son perpendiculares (alabeados): el tornillo gira y empuja los dientes de la corona. El tornillo tiene <strong>z₁ entradas</strong> (no dientes) y su paso axial es p<sub>x</sub>; el ángulo de avance λ es el que forma el filete con el plano de la corona. Cuanto menor es λ, más reducción y menos rendimiento.</figcaption>
</figure>

<div class="caja dato">
<p class="caja-tit">Qué significan</p>
<ul>
<li><strong>p<sub>x</sub></strong>: paso axial del tornillo (lo que avanza un filete por vuelta completa si tuviera una sola entrada... en realidad p<sub>x</sub> es la distancia entre filetes).</li>
<li><strong>L = p<sub>x</sub>·z₁</strong>: avance, lo que avanza axialmente el tornillo en una vuelta.</li>
<li><strong>β</strong>: ángulo de la hélice del filete; <strong>λ</strong>: ángulo de avance (complementario).</li>
<li><strong>b ≈ 5·p<sub>x</sub></strong>: longitud del tornillo, para que abrace varios dientes de la corona.</li>
<li>La desigualdad del D<sub>p1</sub> es la recomendación de Dobrovolsky para que el tornillo tenga rigidez suficiente para la distancia entre centros C.</li>
</ul>
</div>

<h2>Fuerzas y rendimiento</h2>
<p>El tornillo trabaja como un plano inclinado: la fuerza normal W se descompone en tres ejes y aparece el rozamiento W<sub>f</sub> = μ·W:</p>

<div class="f">$$ W^x = W\left(\cos\varphi_n\sin\lambda + \mu\cos\lambda\right) \qquad W^y = W\sin\varphi_n \qquad W^z = W\left(\cos\varphi_n\cos\lambda - \mu\sin\lambda\right) $$</div>

<div class="f f-grande">$$ \eta = \frac{\cos\varphi_n - \mu\tan\lambda}{\cos\varphi_n + \mu\cot\lambda} $$</div>

<div class="tabla-wrap">
<table class="tec">
<thead><tr><th>Componente</th><th>Nombre</th><th>Efecto</th></tr></thead>
<tbody>
<tr><td>W<sup>x</sup></td><td>Tangencial en el tornillo (= axial en la corona)</td><td>Es la que transmite potencia: W<sub>Wt</sub> = H/V<sub>W</sub> = H/(π·d<sub>W</sub>·n<sub>W</sub>)</td></tr>
<tr><td>W<sup>y</sup></td><td>Radial</td><td>Separa los árboles; la absorben los rodamientos</td></tr>
<tr><td>W<sup>z</sup></td><td>Axial en el tornillo (= tangencial en la corona)</td><td>Empuje axial grande: rodamiento de empuje obligatorio</td></tr>
</tbody>
</table>
</div>

<div class="caja truco">
<p class="caja-tit">Por qué el rendimiento es bajo</p>
<p>Con λ chico (pocas entradas, mucha reducción), tan λ es chico y cot λ es grande: el término μ·cot λ domina el denominador y η se derrumba. Si además μ·cot λ &gt; cos φ<sub>n</sub> − μ tan λ, el sistema es <strong>autoblocante</strong>: no se puede mover desde la corona. Es una propiedad, no un defecto, en aparejos y elevadores.</p>
</div>

<h2>Ejemplo de cadena cinemática (práctico de reductores, problema 2)</h2>
<p>Polea 2 (6 pulg) → polea 3 (10 pulg) → cónico 4/5 (18/38) → cilíndrico 6/7 (20/48) → sinfín 8/corona 9 (3/36). Con n₂ = 1520 rpm:</p>

<ol class="pasos">
<li><strong>Correa</strong>: la relación es de diámetros (o de velocidades tangenciales iguales)
<div class="f">$$ n_3 = n_2\cdot\frac{d_2}{d_3} = 1520\cdot\frac{6}{10} = 912\ \text{rpm} $$</div></li>
<li><strong>Par cónico 4-5</strong>
<div class="f">$$ n_5 = n_3\cdot\frac{z_4}{z_5} = 912\cdot\frac{18}{38} = 432\ \text{rpm} $$</div></li>
<li><strong>Par cilíndrico 6-7</strong>
<div class="f">$$ n_7 = n_5\cdot\frac{z_6}{z_7} = 432\cdot\frac{20}{48} = 180\ \text{rpm} $$</div></li>
<li><strong>Sinfín 8-corona 9</strong>
<div class="f">$$ n_9 = n_7\cdot\frac{z_8}{z_9} = 180\cdot\frac{3}{36} = 15\ \text{rpm} $$</div></li>
</ol>
<div class="resultado"><span class="r-lbl">Resultado:</span> <span class="r-val">n₉ = 15 rpm (reducción total ≈ 101:1)</span></div>
<p>La relación total también se puede calcular de una sola vez:</p>
<div class="f">$$ i_{total} = \frac{n_2}{n_9} = \frac{z_3\,z_5\,z_7\,z_9}{z_2\,z_4\,z_6\,z_8} = \frac{10\cdot38\cdot48\cdot36}{6\cdot18\cdot20\cdot3} = 101{,}33 $$</div>
<p class="aviso">Ojo: en la correa se usan <strong>diámetros</strong> (no dientes), y en el sinfín se usa el número de <strong>entradas</strong> z₈ = 3.</p>

<h2>Checklist del capítulo</h2>
<div class="caja">
<ul>
<li>¿Sabés calcular i = z₂/z₁ y explicar por qué es tan grande?</li>
<li>¿Podés obtener p<sub>x</sub>, L, β y λ?</li>
<li>¿Recordás el rango de rendimiento (60–80 %) y por qué es bajo?</li>
<li>¿Qué significa autoblocante y de qué depende?</li>
<li>¿En qué se diferencia el sinfín cilíndrico del globoidal?</li>
</ul>
</div>
`
});
