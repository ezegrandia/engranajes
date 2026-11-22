/* =========================================================================
   CONTENIDO · 4. REDUCTORES
   Capítulos: trenes, epicicloidales, reductores-tipos, practico-reductores,
              resumen
   ========================================================================= */
window.CAPITULOS = window.CAPITULOS || [];

/* --------------------------------------------------------------- TRENES */
window.CAPITULOS.push({
  id: "trenes",
  grupo: "4 · Reductores",
  titulo: "Trenes de engranajes",
  html: String.raw`
<h1>Trenes de engranajes</h1>
<p class="bajada">Un tren es una cadena de ruedas donde la conducida de un par es la motriz del siguiente. Con eso se consiguen relaciones que un solo par no puede dar, y aparece la primera fórmula que hay que dominar: la de Willis.</p>

<h2>Por qué no alcanza con dos ruedas</h2>
<p>La relación de un solo par está limitada por la cantidad de dientes que se pueden tallar:</p>
<ul>
<li><strong>Mínimo:</strong> z<sub>mín</sub> = 2/sen²φ ≈ 17 dientes con φ = 20°, para no tener interferencia. En la práctica se aceptan 15 con corrección.</li>
<li><strong>Máximo:</strong> por acumulación de errores de tallado, no se suele pasar de <strong>200 dientes</strong> en engranajes industriales (100 en mecánica fina).</li>
</ul>
<div class="f">$$ i_{\text{un par}} \approx \frac{15}{200} \ldots \frac{15}{100} = \frac{1}{13{,}3} \ldots \frac{1}{6{,}7} $$</div>

<p>Además hay otros dos casos en que un solo par no sirve: cuando la relación es un número irracional (π, por ejemplo) y cuando los ejes están demasiado lejos como para que dos ruedas de tamaño normal engranen.</p>

<h2>Tren ordinario simple</h2>
<p>Cada eje tiene <strong>una sola rueda</strong>. La relación de velocidades sale de la fórmula de Willis:</p>

<div class="f f-grande">$$ i = \frac{n_e}{n_s} = \frac{\prod z_{\text{conducidas}}}{\prod z_{\text{motrices}}} $$</div>

<div class="caja dato">
<p class="caja-tit">∏ (productoria) no es π (3,1416)</p>
<p>El símbolo <strong>∏</strong> es la <span class="prod">Π</span> <strong>mayúscula</strong> y se llama <strong>productoria</strong>: quiere decir «multiplicá todos los términos». Por ejemplo:</p>
<div class="f f-sin">$$ \prod z_{\text{conducidas}} = z_{C}\cdot z_{E}\cdot z_{H} $$</div>
<p>No tiene nada que ver con <strong>π</strong>, la pi minúscula, que es el número 3,1416 de $p_c = \pi\,m$ o de $\omega = 2\pi n/60$. Se distinguen por la forma: la <strong>productoria</strong> es un <span class="prod">Π</span> grande, con el travesaño de arriba ancho y recto; la <strong>π</strong> es chica y con las dos patas curvadas.</p>
</div>

<p>En un tren simple con ruedas 2 (motriz), 3, 4 y 5 (conducida), la productoria se abre así:</p>
<div class="f">$$ i = \frac{z_3 \cdot z_4 \cdot z_5}{z_2 \cdot z_3 \cdot z_4} = \frac{z_5}{z_2} $$</div>

<div class="caja idea">
<p class="caja-tit">Las ruedas locas o parásitas</p>
<p>Las ruedas intermedias <strong>se cancelan</strong>: no cambian el valor absoluto de la relación. Sirven para dos cosas: invertir el sentido de giro final y salvar distancias entre ejes. En un tren simple todas las ruedas deben tener el <strong>mismo módulo</strong> (si no, no engranan).</p>
</div>

<h2>Tren ordinario compuesto</h2>
<p>Al menos un eje tiene <strong>dos ruedas solidarias</strong>. Se separa el tren en pares de engrane y se multiplican las relaciones parciales:</p>

<div class="f f-grande">$$ i = \frac{n_e}{n_s} = \frac{z_3}{z_2} \cdot \frac{z_5}{z_4} $$</div>

<div class="tabla-wrap">
<table class="tec">
<thead><tr><th></th><th>Tren simple</th><th>Tren compuesto</th></tr></thead>
<tbody>
<tr><td>Ruedas por eje</td><td>Una</td><td>Una o más (dos solidarias)</td></tr>
<tr><td>Módulo</td><td>Igual en todas las ruedas</td><td>Igual dentro de cada par, distinto entre pares</td></tr>
<tr><td>Relación</td><td><span>$\dfrac{z_{última}}{z_{primera}}$</span></td><td>Producto de los pares</td></tr>
<tr><td>Ventaja</td><td>Simple; sirve para invertir giro</td><td>Permite cualquier relación y optimizar cada etapa</td></tr>
</tbody>
</table>
</div>

<div class="caja dato">
<p class="caja-tit">Por qué cada etapa puede tener distinto módulo</p>
<p>El par que transmite cada eje crece (o decrece) con la relación acumulada. Los dientes del par de salida soportan más fuerza que los del par de entrada, así que conviene darles <strong>más módulo</strong>. Eso es exactamente lo que se ve en un reductor real: los engranajes de la etapa lenta son más grandes y más "gordos".</p>
</div>

<h2>Simulador: el tren en movimiento</h2>
<p>Un eje motor, dos etapas y un eje de salida. Fijate cómo la segunda etapa vuelve a invertir el sentido y cómo el producto de las relaciones parciales da la reducción total.</p>
<div data-visual="tren"></div>

<h2>Tren compuesto recurrente (coaxial)</h2>
<p>Es el caso en que el eje de entrada y el de salida son <strong>coaxiales</strong> (un reductor coaxial). Para que eso sea posible, las dos etapas deben tener la misma distancia entre centros:</p>

<div class="f f-grande">$$ r_2 + r_3 = r_4 + r_5 \qquad\Longrightarrow\qquad m_A(z_2 + z_3) = m_B(z_4 + z_5) $$</div>

<div class="f">$$ \frac{m_A}{m_B} = \frac{z_4 + z_5}{z_2 + z_3} $$</div>

<p>O sea: los módulos de cada etapa son inversamente proporcionales a la suma de dientes. Si las sumas son iguales (z₂ + z₃ = z₄ + z₅), los dos módulos coinciden.</p>

<h2>Potencias y pares transmitidos</h2>
<p>Sin pérdidas, la potencia se conserva y el par se multiplica por la relación:</p>

<div class="f f-grande">$$ \frac{T_s}{T_e} = i \qquad\qquad H = T\,\omega = \text{constante} $$</div>

<div class="caja idea">
<p class="caja-tit">Dónde se torsiona el eje</p>
<p>El par se transmite por las fuerzas tangenciales de los dientes. En cada eje, el par entra por una rueda y sale por la otra: el tramo de eje <strong>entre las dos ruedas</strong> queda torsionado, y el resto del eje trabaja a flexión por las reacciones de los apoyos. Por eso los ejes de reductores se calculan a flexión y torsión combinadas.</p>
</div>

<h2>Ejemplo resuelto — Reductor de ejes fijos (práctico, problema 1)</h2>
<p>Radios primitivos: r<sub>G</sub> = 80 mm, r<sub>C</sub> = r<sub>D</sub> = 40 mm, r<sub>E</sub> = r<sub>H</sub> = 50 mm, r<sub>F</sub> = 70 mm; módulo 4 en todas las ruedas; ω<sub>A</sub> = 40 rad/s; potencia 10 HP. La rueda G va en el eje motor A y engrana con C; C y D son solidarias; D engrana con E; E y F solidarias; F engrana con H, que va en el eje de salida B.</p>

<ol class="pasos">
<li><strong>Dientes de cada rueda</strong> (z = 2r/m)
<div class="f">$$ z_G = \frac{2\cdot 80}{4} = 40 \qquad z_C = z_D = 20 \qquad z_E = z_H = 25 \qquad z_F = \frac{2\cdot 70}{4} = 35 $$</div></li>
<li><strong>Relación de transmisión</strong>
<div class="f">$$ i = \frac{n_B}{n_A} = \frac{z_G}{z_C}\cdot\frac{z_D}{z_E}\cdot\frac{z_F}{z_H} = \frac{40}{20}\cdot\frac{20}{25}\cdot\frac{35}{25} = 2 \cdot 0{,}8 \cdot 1{,}4 = 2{,}24 $$</div></li>
<li><strong>Velocidad de salida</strong>
<div class="f">$$ \omega_B = 2{,}24 \cdot 40 = 89{,}6 \approx 90\ \text{rad/s} \qquad\qquad n_B = \omega_B\frac{60}{2\pi} = 856\ \text{rpm} $$</div></li>
<li><strong>Torque de salida</strong> (H = 10 HP = 7450 W)
<div class="f">$$ T_B = \frac{H}{\omega_B} = \frac{7450}{90} = 82{,}8 \approx 82{,}86\ \text{N}\cdot\text{m} $$</div></li>
<li><strong>Con rendimiento η = 92 %</strong>
<div class="f">$$ T_B' = 0{,}92 \cdot 82{,}86 = 76{,}28\ \text{N}\cdot\text{m} $$</div></li>
</ol>

<div class="caja ojo">
<p class="caja-tit">¡Cuidado! Este "reductor" es un multiplicador</p>
<p>La relación dio 2,24 y la salida gira <strong>más rápido</strong> que la entrada (89,6 contra 40 rad/s): el par de salida es menor que el de entrada (82,86 N·m contra 186,25 N·m). El nombre del práctico dice "reductor", pero los números dicen que acelera. En el examen, lo correcto es decir qué pasa: si n<sub>salida</sub> &gt; n<sub>entrada</sub>, es un multiplicador y el par se reduce.</p>
</div>

<h3>Sentido de giro</h3>
<p>Cada par de engranajes exteriores invierte el sentido. En este tren hay <strong>tres</strong> pares (G-C, D-E, F-H): tres inversiones → el eje B gira en sentido <strong>opuesto</strong> al A. Regla general: si el número de engranes exteriores en el camino es par, giran en el mismo sentido; si es impar, al revés.</p>
<p class="aviso">Las ruedas interiores (coronas de dentado interno) <strong>no</strong> invierten el sentido.</p>

<h2>Checklist del capítulo</h2>
<div class="caja">
<ul>
<li>¿Distinguís tren simple de compuesto mirando el esquema?</li>
<li>¿Sabés por qué las ruedas locas no afectan la relación?</li>
<li>¿Podés plantear la condición de coaxialidad (m<sub>A</sub>(z₂+z₃) = m<sub>B</sub>(z₄+z₅))?</li>
<li>¿Contás las inversiones para el sentido de giro?</li>
<li>¿Sabés si el par se multiplica o se divide según i?</li>
</ul>
</div>
`
});

/* ------------------------------------------------------- EPICICLOIDALES */
window.CAPITULOS.push({
  id: "epicicloidales",
  grupo: "4 · Reductores",
  titulo: "Trenes epicicloidales",
  html: String.raw`
<h1>Trenes epicicloidales (planetarios)</h1>
<p class="bajada">El tema que más confunde y el que más preguntas tiene en los prácticos. Con la fórmula de Willis y una regla de signos bien aplicada se resuelve cualquier caso. Acá está el método, las tres variantes, el método tabular y cinco ejercicios resueltos.</p>

<h2>Qué es un tren epicicloidal</h2>
<p>Es un tren en el que alguna rueda gira sobre un eje que <strong>no es fijo</strong>, sino que se traslada girando alrededor del eje principal. Ese eje móvil lo sostiene el <strong>brazo portasatélites</strong>. Por eso estos trenes tienen <strong>dos grados de libertad</strong>: para que la salida sea predecible hay que fijar (o accionar) dos de sus tres elementos.</p>

<figure class="figura">
<svg viewBox="0 44 520 344" role="img" aria-label="Tren planetario simple: solar, satélites, corona de dentado interno y brazo portasatélites">
  <!-- corona -->
  <circle cx="200" cy="190" r="126" fill="none" stroke="currentColor" stroke-width="1.8"/>
  <circle cx="200" cy="190" r="118" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/>
  <!-- satélites y solar -->
  <g fill="var(--sup)" stroke="currentColor" stroke-width="1.6">
    <circle cx="200" cy="110" r="46"/>
    <circle cx="269.3" cy="230" r="46"/>
    <circle cx="130.7" cy="230" r="46"/>
  </g>
  <circle cx="200" cy="190" r="34" fill="var(--sup)" stroke="currentColor" stroke-width="1.8"/>
  <!-- brazo: circunferencia que pasa por los centros de los satélites -->
  <circle cx="200" cy="190" r="80" fill="none" stroke="var(--ac)" stroke-width="1.6" stroke-dasharray="7 5"/>
  <!-- centros de los satélites -->
  <g fill="currentColor">
    <circle cx="200" cy="110" r="3.4"/>
    <circle cx="269.3" cy="230" r="3.4"/>
    <circle cx="130.7" cy="230" r="3.4"/>
  </g>
  <!-- rótulos -->
  <text class="svg-txt" x="200" y="122" font-size="11" text-anchor="middle" font-weight="700">satélite</text>
  <text class="svg-txt" x="200" y="136" font-size="10" text-anchor="middle">z₂</text>
  <text class="svg-txt" x="200" y="190" font-size="11" text-anchor="middle" font-weight="700">solar</text>
  <text class="svg-txt" x="200" y="204" font-size="10" text-anchor="middle">z₁</text>
  <text class="svg-tenue" x="338" y="184" font-size="11" font-weight="600">corona</text>
  <text class="svg-tenue" x="338" y="198" font-size="10">(dentado interno) z₃</text>
  <line class="svg-tenue-linea" x1="328" y1="188" x2="322" y2="195" stroke-width="1"/>
  <text class="svg-tenue" x="200" y="352" font-size="10.5" text-anchor="middle">El brazo (trazo) pasa por los centros de los satélites y gira alrededor del eje.</text>
  <text class="svg-tenue" x="200" y="368" font-size="10.5" text-anchor="middle">Condición geométrica: z₃ = z₁ + 2·z₂</text>
</svg>
<figcaption>Los tres elementos del tren planetario: <strong>solar</strong> (central), <strong>satélites</strong> (engranan con el solar y con la corona) y <strong>corona</strong> de dentado interno. El <strong>brazo portasatélites</strong> une los centros de los satélites: es el elemento que da la salida planetaria.</figcaption>
</figure>

<h2>La fórmula de Willis</h2>
<p>La idea genial de Willis: si el brazo no se moviera, el tren sería un tren ordinario y su relación sería fácil de calcular. Entonces se mide todo <strong>respecto del brazo</strong>:</p>

<div class="f f-grande">$$ \frac{n_e - n_{ps}}{n_s - n_{ps}} = i_0 = \pm\frac{\prod z_{\text{conducidas}}}{\prod z_{\text{motrices}}} $$<span class="f-nota">n<sub>e</sub> = velocidad de entrada, n<sub>s</sub> = velocidad de salida, n<sub>ps</sub> = velocidad del brazo portasatélites. i₀ es la relación con el brazo fijo.</span></div>

<div class="caja truco">
<p class="caja-tit">Cómo se arma i₀ (siempre igual)</p>
<ol>
<li>Imaginá el brazo <strong>fijo</strong>: el tren se vuelve ordinario.</li>
<li>Recorré el camino desde la entrada hasta la salida y escribí la productoria $\prod$: los dientes de las conducidas arriba, los de las motrices abajo.</li>
<li>El signo: contá los engranes <strong>exteriores</strong> en el camino. Si es par → positivo; si es impar → negativo. Los engranes interiores (corona) no invierten.</li>
</ol>
<p><strong>Ejemplo:</strong> solar → satélite (exterior, −) → corona (interior, +) = un engrane exterior → signo negativo:</p>
<div class="f f-sin">$$ i_0 = -\frac{z_{corona}}{z_{solar}} $$</div>
</div>

<h2>Los tres casos que hay que saber</h2>
<div class="tabla-wrap">
<table class="tec">
<thead><tr><th>Se fija</th><th>Ecuación de Willis</th><th>Fórmula resultante</th></tr></thead>
<tbody>
<tr><td><strong>Corona</strong> (n<sub>corona</sub> = 0)</td><td><span>$\dfrac{n_{solar} - n_{ps}}{0 - n_{ps}} = i_0$</span></td><td><span>$n_{ps} = n_{solar}\dfrac{z_{solar}}{z_{solar}+z_{corona}}$</span> · <span>$n_{solar} = n_{ps}\dfrac{z_{solar}+z_{corona}}{z_{solar}}$</span></td></tr>
<tr><td><strong>Solar</strong> (n<sub>solar</sub> = 0)</td><td><span>$\dfrac{0 - n_{ps}}{n_{corona} - n_{ps}} = i_0$</span></td><td><span>$n_{ps} = n_{corona}\dfrac{z_{corona}}{z_{solar}+z_{corona}}$</span></td></tr>
<tr><td><strong>Brazo</strong> (n<sub>ps</sub> = 0)</td><td><span>$\dfrac{n_{solar}}{n_{corona}} = i_0$</span></td><td><span>$\dfrac{n_{solar}}{n_{corona}} = -\dfrac{z_{corona}}{z_{solar}}$</span></td></tr>
</tbody>
</table>
</div>

<div class="caja idea">
<p class="caja-tit">Atajo para el planetario simple con corona fija</p>
<p>El caso más usado en la práctica (la corona va fija al bastidor y hace de carcasa):</p>
<div class="f f-sin">$$ n_{ps} = n_{solar}\cdot\frac{z_{solar}}{z_{solar}+z_{corona}} $$</div>
<p>Con z<sub>solar</sub> = 20 y z<sub>corona</sub> = 80: la salida por el brazo es 5 veces más lenta que el solar.</p>
</div>

<h2>Simulador: los cuatro modos del planetario</h2>
<p>El mismo mecanismo, cambiando qué elemento se fija. Elegí un modo y mirá cómo se mueven los tres elementos y qué números salen de Willis. Es la forma más rápida de entender por qué un planetario sirve para reducir, multiplicar o hacer de tren ordinario.</p>
<div data-visual="planetario"></div>

<h2>El método tabular (equivalente, y más fácil de ver)</h2>
<p>Se arma una tabla con una columna por elemento y tres filas: movimiento con el brazo, movimiento relativo (brazo fijo) y movimiento total (suma).</p>

<h3>a) Tren epicicloidal simple (ruedas a y b, brazo c, rueda a fija)</h3>
<div class="tabla-wrap">
<table class="tec compacta">
<thead><tr><th>Movimiento</th><th class="num">a (solar, fija)</th><th class="num">b (satélite)</th><th class="num">c (brazo)</th></tr></thead>
<tbody>
<tr><td>Con el brazo (+1 vuelta a todo)</td><td class="num">+1</td><td class="num">+1</td><td class="num">+1</td></tr>
<tr><td>Relativo al brazo (brazo fijo)</td><td class="num">−1</td><td class="num">+a/b</td><td class="num">0</td></tr>
<tr><td><strong>Total</strong></td><td class="num"><strong>0</strong></td><td class="num"><strong>1 + a/b</strong></td><td class="num"><strong>+1</strong></td></tr>
</tbody>
</table>
</div>
<div class="f">$$ i = \frac{n_b}{n_c} = 1 + \frac{z_a}{z_b} $$</div>

<h3>b) Tren epicicloidal compuesto (a-b, c-d, brazo e)</h3>
<div class="tabla-wrap">
<table class="tec compacta">
<thead><tr><th>Movimiento</th><th class="num">a</th><th class="num">b</th><th class="num">c</th><th class="num">d</th><th class="num">e (brazo)</th></tr></thead>
<tbody>
<tr><td>Con el brazo</td><td class="num">+1</td><td class="num">+1</td><td class="num">+1</td><td class="num">+1</td><td class="num">+1</td></tr>
<tr><td>Relativo (brazo fijo)</td><td class="num">−1</td><td class="num">+a/b</td><td class="num">+a/b</td><td class="num">−(a·c)/(b·d)</td><td class="num">0</td></tr>
<tr><td><strong>Total</strong></td><td class="num"><strong>0</strong></td><td class="num"><strong>1+a/b</strong></td><td class="num"><strong>1+a/b</strong></td><td class="num"><strong>1−(a·c)/(b·d)</strong></td><td class="num"><strong>+1</strong></td></tr>
</tbody>
</table>
</div>
<div class="f">$$ i = \frac{n_e}{n_d} = \frac{1}{1 - \dfrac{z_a z_c}{z_b z_d}} $$</div>

<h3>c) Tren epi-hipocicloidal simple (solar a, satélite b, corona d fija)</h3>
<div class="tabla-wrap">
<table class="tec compacta">
<thead><tr><th>Movimiento</th><th class="num">a (solar)</th><th class="num">b (satélite)</th><th class="num">c (brazo)</th><th class="num">d (corona)</th></tr></thead>
<tbody>
<tr><td>Con el brazo</td><td class="num">+1</td><td class="num">+1</td><td class="num">+1</td><td class="num">+1</td></tr>
<tr><td>Relativo (brazo fijo)</td><td class="num">+d/a</td><td class="num">−d/b</td><td class="num">0</td><td class="num">−1</td></tr>
<tr><td><strong>Total</strong></td><td class="num"><strong>1+d/a</strong></td><td class="num"><strong>1−d/b</strong></td><td class="num"><strong>+1</strong></td><td class="num"><strong>0</strong></td></tr>
</tbody>
</table>
</div>
<div class="f">$$ i = \frac{n_a}{n_c} = 1 + \frac{z_d}{z_a} = \frac{z_a + z_d}{z_a} $$</div>
<p class="aviso">Coincide exactamente con la tabla de Willis para corona fija: es el mismo resultado por otro camino.</p>

<div class="caja truco">
<p class="caja-tit">Cómo se construye la fila "relativa"</p>
<ol>
<li>Se fija el brazo y se da <strong>una vuelta negativa</strong> (-1) al elemento que está fijo al bastidor.</li>
<li>Se propaga esa vuelta por los engranes como en un tren ordinario: si A mueve a B, n<sub>B</sub> = −n<sub>A</sub>·z<sub>A</sub>/z<sub>B</sub> (signo − si es engrane exterior, + si es interior).</li>
<li>La columna del brazo va en 0.</li>
<li>Se suma fila 1 + fila 2 para obtener el movimiento total.</li>
</ol>
</div>

<h2>Ejercicios resueltos</h2>

<div class="ej">
<div class="ej-cab"><span class="ej-num">A</span><div><p class="ej-tit">Corona fija: solar 20, satélite 30, corona 80</p><p class="ej-sub">n₂ = 100 rpm · incógnita n<sub>ps</sub></p></div></div>
<div class="ej-cuerpo">
<p>Verificación geométrica: 80 = 20 + 2·30 ✓. Brazo fijo: i₀ = −80/20 = −4.</p>
<div class="f">$$ \frac{100 - n_{ps}}{0 - n_{ps}} = -4 \;\Rightarrow\; 100 - n_{ps} = 4n_{ps} \;\Rightarrow\; n_{ps} = 20\ \text{rpm} $$</div>
<p>Atajo: n<sub>ps</sub> = 100·20/100 = 20 rpm ✓ (mismo sentido que el solar).</p>
</div>
</div>

<div class="ej">
<div class="ej-cab"><span class="ej-num">B</span><div><p class="ej-tit">Solar 15, satélite 10, corona 35 — despejar n<sub>ps</sub></p><p class="ej-sub">n<sub>solar</sub> = 10 rpm, corona fija</p></div></div>
<div class="ej-cuerpo">
<div class="f">$$ i_0 = -\frac{35}{15} = -2{,}3333 \qquad \frac{10 - n_{ps}}{-n_{ps}} = -2{,}3333 \;\Rightarrow\; n_{ps} = \frac{10}{3{,}3333} = 3\ \text{rpm} $$</div>
<p>Y si la corona no está fija sino girando, se usa la forma general despejada:</p>
<div class="f">$$ n_{ps} = \frac{n_{solar} - i_0\,n_{corona}}{1 - i_0} $$</div>
<p>Con n<sub>solar</sub> = 1 y n<sub>corona</sub> = 4,14: n<sub>ps</sub> = (1 + 9,66)/3,3333 = <strong>3,2 rpm</strong>. Con n<sub>solar</sub> = 5 y n<sub>corona</sub> = −0,71: n<sub>ps</sub> = <strong>1,003 rpm</strong>.</p>
</div>
</div>

<div class="ej">
<div class="ej-cab"><span class="ej-num">C</span><div><p class="ej-tit">Práctico, problema 5 — doble satélite con el engrane 2 fijo</p><p class="ej-sub">z₂ = 20, z₄ = 30, z₅ = 16, n₆ = 53 rpm (horario) · incógnita n₃</p></div></div>
<div class="ej-cuerpo">
<ol class="pasos">
<li><strong>Dientes del engrane 6</strong>: el enunciado no lo da, pero los dos soles son coaxiales y el par 4-5 va en el mismo perno:
<div class="f">$$ z_6 = z_2 + z_4 - z_5 = 20 + 30 - 16 = 34 $$</div></li>
<li><strong>Relación con el brazo fijo</strong> (camino 6 → 5 → 4 → 2, dos engranes exteriores → signo +):
<div class="f">$$ i_0 = +\frac{z_5 \cdot z_2}{z_6 \cdot z_4} = \frac{16 \cdot 20}{34 \cdot 30} = 0{,}3137 $$</div></li>
<li><strong>Willis</strong> (n₂ = 0 porque el engrane 2 está fijo):
<div class="f">$$ \frac{53 - n_{ps}}{0 - n_{ps}} = 0{,}3137 \;\Rightarrow\; 53 - n_{ps} = -0{,}3137\,n_{ps} \;\Rightarrow\; n_{ps} = \frac{53}{0{,}6863} = 77{,}23\ \text{rpm} $$</div></li>
</ol>
<div class="resultado"><span class="r-lbl">Respuesta:</span> <span class="r-val">n<sub>brazo</sub> = 77,23 rpm (mismo sentido que el engrane 6, horario)</span></div>
<p class="aviso">Fijate que el brazo gira <em>más rápido</em> que la entrada: 77,23 &gt; 53. Es un multiplicador. Con doble satélite las relaciones son cercanas a 1 (o ligeramente menores), por eso este tren se usa para diferencias finas, no para reducir.</p>
</div>
</div>

<div class="ej">
<div class="ej-cab"><span class="ej-num">D</span><div><p class="ej-tit">Práctico, problema 6 — engrane 6 fijo</p><p class="ej-sub">z₂ = 49, z₄ = 47, z₅ = 48, n₂ = 53 rpm · incógnita n₃</p></div></div>
<div class="ej-cuerpo">
<ol class="pasos">
<li><strong>Dientes del engrane 6</strong>: z₆ = 49 + 47 − 48 = 48.</li>
<li><strong>Relación con el brazo fijo</strong> (camino 2 → 4 → 5 → 6, dos exteriores → +):
<div class="f">$$ i_0 = \frac{z_4 \cdot z_6}{z_2 \cdot z_5} = \frac{47 \cdot 48}{49 \cdot 48} = \frac{47}{49} = 0{,}95918 $$</div></li>
<li><strong>Willis</strong> (n₆ = 0):
<div class="f">$$ \frac{53 - n_{ps}}{0 - n_{ps}} = 0{,}95918 \;\Rightarrow\; 53 = n_{ps}(1 - 0{,}95918) = 0{,}04082\,n_{ps} \;\Rightarrow\; n_{ps} = 1298{,}5\ \text{rpm} $$</div></li>
</ol>
<div class="resultado"><span class="r-lbl">Respuesta:</span> <span class="r-val">n<sub>brazo</sub> = 1298,5 rpm</span></div>
<p><strong>Pregunta 23:</strong> con el brazo a 800 rpm en sentido antihorario (o sea −800, porque horario = +) y el engrane 6 fijo:</p>
<div class="f">$$ \frac{n_2 + 800}{0 + 800} = 0{,}95918 \;\Rightarrow\; n_2 = 0{,}95918 \cdot 800 - 800 = -32{,}65\ \text{rpm} $$</div>
<div class="resultado"><span class="r-lbl">Resultado:</span> <span class="r-val">n₂ = −32,65 rpm (antihorario, muy lento)</span></div>
<p class="aviso">Este es el caso interesante: con dientes casi iguales (49, 47, 48) la relación i₀ ≈ 0,96 está muy cerca de 1, así que una entrada de 53 rpm produce 1298 rpm a la salida. Es un <strong>multiplicador de 24,5:1</strong>. Con los mismos números, si se invierte el papel (brazo de entrada), la salida es 24,5 veces más lenta.</p>
</div>
</div>

<div class="ej">
<div class="ej-cab"><span class="ej-num">E</span><div><p class="ej-tit">Práctico, problema 7 — corona interior fija con doble satélite en serie</p><p class="ej-sub">z₂ = 12, z₃ = 16, z₄ = 12, eje a = 320 rpm antihorario · incógnitas z₅ y n<sub>ps</sub></p></div></div>
<div class="ej-cuerpo">
<ol class="pasos">
<li><strong>Dientes de la corona</strong>: el satélite 3 engrana con el solar 2, el satélite 4 (en el mismo brazo) engrana con el satélite 3 y con la corona 5. La geometría da:
<div class="f">$$ z_5 = z_2 + 2(z_3 + z_4) = 12 + 2(16 + 12) = 68 $$</div></li>
<li><strong>Relación con el brazo fijo</strong>: camino 2 → 3 (exterior) → 4 (exterior) → 5 (interior). Dos exteriores → signo positivo. Los dientes intermedios se cancelan:
<div class="f">$$ i_0 = +\frac{z_3 \cdot z_4 \cdot z_5}{z_2 \cdot z_3 \cdot z_4} = \frac{z_5}{z_2} = \frac{68}{12} = 5{,}6667 $$</div></li>
<li><strong>Willis</strong> (corona fija, n₅ = 0; entrada antihoraria → n₂ = −320 con la convención horario = +):
<div class="f">$$ \frac{-320 - n_{ps}}{0 - n_{ps}} = 5{,}6667 \;\Rightarrow\; -320 - n_{ps} = -5{,}6667\,n_{ps} \;\Rightarrow\; -320 = -4{,}6667\,n_{ps} $$</div>
<div class="f">$$ n_{ps} = \frac{320}{4{,}6667} = +68{,}57\ \text{rpm} $$</div></li>
<li><strong>Si el reductor tuviera 3 etapas en serie</strong>, cada etapa multiplica por el mismo factor (y el signo se invierte en cada una):
<div class="f">$$ i_{etapa} = i_0 - 1 = 4{,}6667 \qquad n_{salida} = \frac{320}{4{,}6667^3} = \frac{320}{101{,}63} = 3{,}15\ \text{rpm} $$</div></li>
</ol>
<div class="resultado"><span class="r-lbl">Respuestas:</span> <span class="r-val">z₅ = 68 dientes · n<sub>ps</sub> = 68,57 rpm (1 etapa) · 3,15 rpm (3 etapas)</span></div>
<p class="aviso">Ojo con el signo del resultado: en una etapa la salida es horaria (+68,57), en dos etapas antihoraria (−14,69) y en tres horaria (+3,15). El práctico pide 3,15 (positivo) porque son tres etapas.</p>
</div>
</div>

<h3>El planetario en 3D</h3>
<p>El mismo tren del ejemplo: solar de 20 dientes, tres satélites de 30 y corona de 80 (fija, dentado interior). Cada elemento lleva su flecha de sentido y el panel muestra las tres velocidades. Con los chips se aísla el solar, los satélites, la corona o el brazo para ver qué hace cada uno.</p>
<div data-3d="planetario"></div>

<h2>Aplicaciones (para la pregunta teórica)</h2>
<div class="grid2">
<div class="mini"><h4>Turbinas eólicas</h4><p>El rotor gira a 15 rpm y el generador necesita 1500: una multiplicadora planetaria de 2 o 3 etapas hace la relación 100:1 en un espacio mínimo dentro de la góndola.</p></div>
<div class="mini"><h4>Cajas automáticas</h4><p>Varios juegos planetarios con embragues permiten cambiar la relación fijando distintos elementos (solar, corona o brazo) sin cortar el par. Una caja de 9 marchas usa 4 juegos.</p></div>
<div class="mini"><h4>Motor de arranque</h4><p>El piñón del arranque arrastra un planetario reductor (corona fija) que multiplica el par del motor eléctrico, que gira muy rápido y tiene poco par.</p></div>
<div class="mini"><h4>Atornillador a batería</h4><p>Dos o tres etapas planetarias de 44/6 dan una reducción de 70:1 o más, con el motor chico girando a 10 000 rpm.</p></div>
<div class="mini"><h4>Diferencial del auto</h4><p>Reparte el par entre las dos ruedas y permite velocidades distintas en curva: n<sub>izq</sub> + n<sub>der</sub> = 2·n<sub>marco</sub>.</p></div>
<div class="mini"><h4>Aparejo de cadena</h4><p>Epicicloidal compuesto manual con rendimiento suficiente para izar 1 tonelada con la fuerza de una persona.</p></div>
</div>

<h2>Checklist del capítulo</h2>
<div class="caja">
<ul>
<li>¿Podés escribir Willis y explicar qué es n<sub>ps</sub>?</li>
<li>¿Sabés determinar el signo de i₀ contando engranes exteriores?</li>
<li>¿Recordás la condición z<sub>corona</sub> = z<sub>solar</sub> + 2·z<sub>satélite</sub>?</li>
<li>¿Podés despejar cualquiera de las tres velocidades de Willis?</li>
<li>¿Sabés armar la tabla del método tabular (con el brazo / relativo / total)?</li>
<li>¿Entendés por qué con dientes casi iguales la relación puede ser enorme o casi 1?</li>
</ul>
</div>
`
});
