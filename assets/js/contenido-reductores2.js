/* =========================================================================
   CONTENIDO · 4b. REDUCTORES (continuación)
   Capítulos: reductores-tipos, practico-reductores, resumen
   ========================================================================= */
window.CAPITULOS = window.CAPITULOS || [];

/* ------------------------------------------------- TIPOS Y CONSTRUCCIÓN */
window.CAPITULOS.push({
  id: "reductores-tipos",
  grupo: "4 · Reductores",
  titulo: "Tipos, construcción y lubricación",
  html: String.raw`
<h1>Reductores: tipos, construcción y lubricación</h1>
<p class="bajada">La parte teórica que se pregunta con más frecuencia: qué tipo de reductor conviene para cada relación, cómo se construye, qué rodamientos lleva cada disposición y cómo se lubrica. Son preguntas de definición: se contestan con criterio y con números de referencia.</p>

<h2>Qué es un reductor</h2>
<p>Es una transmisión por engranajes montada en una <strong>armazón rígida, independiente y hermética</strong> al aceite y al polvo, que soporta los cojinetes de los árboles. Su fin es reducir la velocidad angular del árbol conducido y, como consecuencia, aumentar el par. El mecanismo inverso (aumentar la velocidad) se llama <strong>multiplicador</strong>. Se conectan al motor y a la máquina por medio de <strong>acoplamientos</strong> (o embragues).</p>

<div class="caja dato">
<p class="caja-tit">Motoreductores</p>
<p>Son conjuntos motor eléctrico + reductor montados en un mismo bastidor. El motor típico es asincrónico jaula de ardilla, cerrado y ventilado, para redes de 220/440 V y 60 Hz, con protección IP-44 (DIN 40050). Siempre llevan guardamotor y relé térmico. Se usan para potencias relativamente pequeñas y son la solución estándar en cintas, agitadores y transportadores.</p>
</div>

<h2>Tipos principales</h2>
<div class="tabla-wrap">
<table class="tec compacta">
<thead><tr><th class="num">N.º</th><th>Tipo</th><th>Ejes</th><th class="num">Relación típica</th><th>Observación</th></tr></thead>
<tbody>
<tr><td class="num">1</td><td>Cilíndrico, 1 etapa</td><td>paralelos</td><td class="num">1 – 10</td><td>Simple y eficiente; conviene i ≤ 8</td></tr>
<tr><td class="num">2</td><td>Cilíndrico, 2 etapas</td><td>paralelos</td><td class="num">10 – 60</td><td>El más usado en la industria</td></tr>
<tr><td class="num">3</td><td>Cilíndrico 2 etapas coaxial (concurrente)</td><td>paralelos, coaxiales</td><td class="num">10 – 60</td><td>Ejes de entrada y salida alineados; árbol intermedio largo y flexible</td></tr>
<tr><td class="num">4</td><td>Cilíndrico, 3 etapas</td><td>paralelos</td><td class="num">40 – 250</td><td>Para relaciones grandes</td></tr>
<tr><td class="num">5</td><td>Cónico, 1 etapa</td><td>concurrentes (90°)</td><td class="num">1 – 5</td><td>Cambia la dirección del movimiento</td></tr>
<tr><td class="num">6</td><td>Cónico-cilíndrico</td><td>concurrentes + paralelos</td><td class="num">5 – 40</td><td>Etapa cónica a la entrada (más rápida, menos cargada)</td></tr>
<tr><td class="num">7 – 10</td><td>Sin fin-corona, 1 etapa</td><td>alabeados</td><td class="num">10 – 100</td><td>Silencioso y compacto; bajo rendimiento; sin fin vertical, lateral, inferior o superior</td></tr>
<tr><td class="num">11</td><td>Sin fin-corona, 2 etapas</td><td>alabeados</td><td class="num">&gt; 100</td><td>Poco frecuente</td></tr>
<tr><td class="num">12</td><td>Mixto sin fin + cilíndrico</td><td>alabeados + paralelos</td><td class="num">50 – 500</td><td>El sin fin va como etapa rápida (mejor rendimiento a alta velocidad)</td></tr>
</tbody>
</table>
</div>

<h2>Cómo se elige el tipo</h2>
<div class="tabla-wrap">
<table class="tec">
<thead><tr><th>Criterio</th><th>Regla práctica</th></tr></thead>
<tbody>
<tr><td>Relación 1 ≤ i ≤ 10</td><td>Un escalón cilíndrico. En la práctica no conviene pasar de i = 8 en un escalón</td></tr>
<tr><td>Relación 10 ≤ i ≤ 50</td><td>Dos etapas</td></tr>
<tr><td>Relación i &gt; 40</td><td>Tres etapas (o planetario, o sin fin)</td></tr>
<tr><td>Cambiar la dirección del eje</td><td>Cónico (o hipoidal si es automotor)</td></tr>
<tr><td>Relación muy grande y poco espacio</td><td>Planetario o sin fin</td></tr>
<tr><td>Marcha silenciosa, intermitente</td><td>Sin fin (aunque el rendimiento sea bajo)</td></tr>
<tr><td>Funcionamiento continuo con mucha potencia</td><td>Cilíndrico: el rendimiento manda en el costo energético</td></tr>
</tbody>
</table>
</div>

<div class="caja idea">
<p class="caja-tit">El rendimiento decide la factura de luz</p>
<p>Las pérdidas de un reductor sin fin superan casi <strong>cinco veces</strong> las de un reductor cilíndrico de dos escalones. En servicio continuo, el costo de la energía perdida puede superar el costo de fabricación del reductor: por eso los sin fin se reservan para servicio intermitente o donde el silencio es crítico.</p>
</div>

<div class="tabla-wrap">
<table class="tec">
<thead><tr><th>Tipo</th><th class="num">Rendimiento aproximado</th><th>Tamaño relativo</th><th>Peso relativo</th></tr></thead>
<tbody>
<tr><td>Cilíndrico 1–3 etapas</td><td class="num">0,97 – 0,99 por etapa</td><td>Medio</td><td>Medio</td></tr>
<tr><td>Planetario</td><td class="num">0,97 – 0,99</td><td>Chico</td><td>2 a 3 veces menor</td></tr>
<tr><td>Cónico</td><td class="num">0,96 – 0,98</td><td>Medio</td><td>Medio</td></tr>
<tr><td>Sin fin-corona</td><td class="num">0,60 – 0,80</td><td>Grande para i chico; chico para i grande</td><td>Medio</td></tr>
</tbody>
</table>
</div>

<h2>Construcción: el bastidor</h2>
<ul>
<li>Se hace de <strong>fundición</strong> (a veces acero al carbono, y también soldado). Forma simple, con la menor cantidad de nervios y rebordes que garantice rigidez.</li>
<li>Los <strong>nervios o refuerzos</strong> se ubican donde los cojinetes transmiten esfuerzos al bastidor: sin ellos el bastidor se deforma y los engranajes pierden contacto.</li>
<li>Los <strong>pernos de la tapa</strong> van lo más cerca posible de los cojinetes.</li>
<li>El mecanizado de los alojamientos de cojinetes se hace con alta exactitud y terminación superficial mejor que <strong>1,6 µm</strong>.</li>
<li>La tapa se posiciona con <strong>dos pasadores cónicos</strong> (o cilíndricos) lo más separados posible.</li>
<li>Lleva <strong>ganchos de izaje</strong>, mirilla de nivel de aceite, tapones de llenado y drenaje, y a veces termómetro.</li>
<li>En la junta horizontal se hacen <strong>canales de retorno</strong> que comunican con el interior, para que el aceite no escurra hacia afuera.</li>
<li>Los bastidores de sin fin llevan <strong>aletas de disipación</strong>: el calor es el límite de potencia de esa transmisión.</li>
</ul>

<h2>Rodamientos: qué disposición va con cada engrane</h2>
<div class="tabla-wrap">
<table class="tec">
<thead><tr><th>Tipo de engrane</th><th>Rodamientos recomendados</th><th>Por qué</th></tr></thead>
<tbody>
<tr><td>Dentado recto</td><td>Cualquier tipo</td><td>No hay empuje axial</td></tr>
<tr><td>Helicoidal</td><td>Bolas rígidos, cónicos de una fila, doble hilera de rodillos de rótula</td><td>Hay empuje axial en un sentido: hace falta que alguno lo tome</td></tr>
<tr><td>Bihelicoidal con bifurcación</td><td>Uno de los árboles (mejor el del piñón) sobre <strong>bolas</strong></td><td>El juego axial permite que el piñón se autocentre y reparta la carga entre las dos filas</td></tr>
<tr><td>Cónico</td><td>Cónicos, con distancia entre apoyos <strong>2,5 a 3 veces</strong> la distancia del centro del piñón al primer rodamiento</td><td>El árbol va en voladizo: hay que darle rigidez</td></tr>
<tr><td>Sin fin</td><td><strong>Angulares</strong> (cónicos o de contacto angular) en disposición <strong>ajustada</strong></td><td>Gran empuje axial + necesidad de rigidez para mantener la posición relativa</td></tr>
<tr><td>Sin fin con apoyos muy separados (&gt; 350 mm)</td><td>Disposición <strong>fijo-libre</strong></td><td>Evita el "agarre" por dilatación térmica del tornillo</td></tr>
<tr><td>Planetario</td><td>Agujas en los satélites; bolas o rodillos en el resto</td><td>El diámetro del satélite es crítico</td></tr>
</tbody>
</table>
</div>

<h2>Cómo leer la disposición de los rodamientos</h2>
<p>El triángulo de un rodamiento cónico o de contacto angular apunta hacia el lado en que ese rodamiento puede tomar el empuje axial. Según cómo se miren los dos triángulos cambia la rigidez del árbol y la separación efectiva entre apoyos.</p>

<figure class="figura">
<svg viewBox="0 0 700 250" role="img" aria-label="Disposiciones de rodamientos cónicos en O, en X y fijo-libre">
  <!-- panel O -->
  <g>
    <line x1="20" y1="120" x2="200" y2="120" stroke="currentColor" stroke-width="2.4"/>
    <line class="svg-tenue-linea" x1="20" y1="120" x2="200" y2="120" stroke-dasharray="10 6" stroke-opacity=".35"/>
    <polygon points="62,96 62,144 36,120" fill="currentColor" fill-opacity=".12" stroke="currentColor" stroke-width="1.5"/>
    <polygon points="158,96 158,144 184,120" fill="currentColor" fill-opacity=".12" stroke="currentColor" stroke-width="1.5"/>
    <line class="svg-tenue-linea" x1="36" y1="76" x2="184" y2="76" stroke="var(--ac)" stroke-dasharray="4 4"/>
    <line class="svg-tenue-linea" x1="36" y1="70" x2="36" y2="82" stroke="var(--ac)"/>
    <line class="svg-tenue-linea" x1="184" y1="70" x2="184" y2="82" stroke="var(--ac)"/>
    <text x="110" y="68" font-size="10" text-anchor="middle" fill="var(--ac)">span efectivo (mayor)</text>
    <text x="110" y="176" font-size="11.5" text-anchor="middle" font-weight="700">O · ajustada</text>
    <text x="110" y="192" font-size="10" text-anchor="middle" fill-opacity=".7">back-to-back</text>
    <text x="110" y="210" font-size="9.5" text-anchor="middle" fill-opacity=".7">más rígida</text>
  </g>
  <!-- panel X -->
  <g transform="translate(240,0)">
    <line x1="20" y1="120" x2="200" y2="120" stroke="currentColor" stroke-width="2.4"/>
    <line class="svg-tenue-linea" x1="20" y1="120" x2="200" y2="120" stroke-dasharray="10 6" stroke-opacity=".35"/>
    <polygon points="62,96 62,144 88,120" fill="currentColor" fill-opacity=".12" stroke="currentColor" stroke-width="1.5"/>
    <polygon points="158,96 158,144 132,120" fill="currentColor" fill-opacity=".12" stroke="currentColor" stroke-width="1.5"/>
    <line class="svg-tenue-linea" x1="88" y1="76" x2="132" y2="76" stroke="var(--ac)" stroke-dasharray="4 4"/>
    <line class="svg-tenue-linea" x1="88" y1="70" x2="88" y2="82" stroke="var(--ac)"/>
    <line class="svg-tenue-linea" x1="132" y1="70" x2="132" y2="82" stroke="var(--ac)"/>
    <text x="110" y="68" font-size="10" text-anchor="middle" fill="var(--ac)">span efectivo (menor)</text>
    <text x="110" y="176" font-size="11.5" text-anchor="middle" font-weight="700">X · frente a frente</text>
    <text x="110" y="192" font-size="10" text-anchor="middle" fill-opacity=".7">face-to-face</text>
    <text x="110" y="210" font-size="9.5" text-anchor="middle" fill-opacity=".7">tolera desalineación</text>
  </g>
  <!-- panel fijo-libre -->
  <g transform="translate(480,0)">
    <line x1="20" y1="120" x2="200" y2="120" stroke="currentColor" stroke-width="2.4"/>
    <line class="svg-tenue-linea" x1="20" y1="120" x2="200" y2="120" stroke-dasharray="10 6" stroke-opacity=".35"/>
    <rect x="58" y="100" width="10" height="40" fill="currentColor" fill-opacity=".2" stroke="currentColor" stroke-width="1.5"/>
    <rect x="68" y="100" width="10" height="40" fill="currentColor" fill-opacity=".2" stroke="currentColor" stroke-width="1.5"/>
    <line class="svg-tenue-linea" x1="63" y1="88" x2="63" y2="152" stroke="var(--ac)"/>
    <line class="svg-tenue-linea" x1="45" y1="164" x2="81" y2="164" stroke="var(--ac)"/>
    <polygon points="45,164 51,160 51,168" fill="var(--ac)"/>
    <polygon points="81,164 75,160 75,168" fill="var(--ac)"/>
    <circle cx="152" cy="120" r="13" fill="none" stroke="currentColor" stroke-width="1.5"/>
    <circle cx="152" cy="120" r="4" fill="currentColor"/>
    <line class="svg-tenue-linea" x1="120" y1="152" x2="184" y2="152" stroke="var(--ac)" stroke-dasharray="4 3"/>
    <polygon points="120,152 126,148 126,156" fill="var(--ac)"/>
    <polygon points="184,152 178,148 178,156" fill="var(--ac)"/>
    <text x="110" y="176" font-size="11.5" text-anchor="middle" font-weight="700">fijo-libre</text>
    <text x="63" y="86" font-size="9.5" text-anchor="middle" fill="var(--ac)">fijo (axial)</text>
    <text x="152" y="90" font-size="9.5" text-anchor="middle" fill="var(--ac)">libre (desliza)</text>
    <text x="110" y="210" font-size="9.5" text-anchor="middle" fill-opacity=".7">para ejes largos o calientes</text>
  </g>
</svg>
<figcaption>El triángulo indica hacia dónde toma empuje cada rodamiento. En <strong>O</strong> los triángulos miran hacia afuera y las líneas de carga se cruzan por fuera de los apoyos: el árbol queda más rígido. En <strong>X</strong> miran hacia adentro. En <strong>fijo-libre</strong>, un apoyo absorbe el axial y el otro desliza para dejar dilatarse al eje.</figcaption>
</figure>

<div class="caja truco">
<p class="caja-tit">Ajustada vs. fijo-libre (pregunta clásica)</p>
<p><strong>Ajustada</strong> (los dos apoyos toman axial en ambos sentidos, con precarga): máxima rigidez, pero si el eje se dilata mucho puede trabarse. <strong>Fijo-libre</strong>: un apoyo toma el axial y el otro queda libre para deslizar por dilatación. Se usa en ejes largos o calientes (sin fin con apoyos &gt; 350 mm).</p>
</div>

<h2>Lubricación</h2>
<div class="tabla-wrap">
<table class="tec">
<thead><tr><th>Método</th><th>Cuándo</th><th>Detalle</th></tr></thead>
<tbody>
<tr><td><strong>Inmersión</strong> (baño de aceite)</td><td>v<sub>t</sub> &lt; 12 m/s</td><td>Se sumerge la rueda mayor. Rápidas: hasta 0,7 de la altura del diente y no menos de 10 mm. Lentas: hasta 100 mm como máximo. En cónicos, el aceite debe cubrir el diente en toda su longitud</td></tr>
<tr><td><strong>Chorro</strong> (forzada)</td><td>v<sub>t</sub> ≥ 12 m/s</td><td>Toberas alimentadas por bomba; requiere filtrado, refrigeración y regulación</td></tr>
<tr><td><strong>Niebla de aceite</strong></td><td>Potencia media, sobre todo planetarios</td><td>Bastidor de poco volumen; el aceite se salpica con las ruedas o con ruedas de paletas</td></tr>
<tr><td>A ≥ 20 m/s</td><td>—</td><td>Se entrega aceite a cada rueda por separado, y por el lado opuesto al movimiento de los dientes</td></tr>
</tbody>
</table>
</div>

<div class="f">$$ \text{Capacidad del baño: } 0{,}35 \ldots 0{,}7\ \frac{\text{litro}}{\text{kW}} $$</div>

<h3>Reglas específicas del tornillo sin fin</h3>
<ul>
<li>Inmersión válida hasta v<sub>tornillo</sub> = 10 m/s. La rueda (si el tornillo está arriba) o el tornillo se sumergen <strong>no más de la altura del filete</strong>.</li>
<li>Si el tornillo va <strong>debajo</strong> de la rueda, el nivel no debe superar el centro del elemento rodante de los rodamientos del árbol del tornillo (para no perder potencia en los cojinetes ni complicar los sellos). Si con eso el tornillo no queda sumergido, se colocan <strong>anillos con paletas</strong> que echan aceite sobre la rueda.</li>
<li>v<sub>tornillo</sub> &lt; 4 m/s → la <strong>rueda va arriba</strong> del tornillo.</li>
<li>v<sub>tornillo</sub> ≥ 4 m/s → el <strong>tornillo va arriba</strong> de la rueda.</li>
<li>v<sub>tornillo</sub> &gt; 10 m/s → lubricación forzada por tobera, del lado en que los filetes entran en engrane.</li>
<li>En transmisiones multietápicas, la viscosidad se elige como valor intermedio entre las etapas. Si el mismo aceite lubrica engranajes y cojinetes, manda el engrane.</li>
</ul>

<h2>Preguntas típicas de este tema (con la respuesta corta)</h2>
<details><summary>¿Por qué los reductores planetarios pesan menos?</summary><div class="details-cuerpo"><p>Porque usan <strong>engrane interior</strong> (aprovechan mucho mejor el diámetro disponible), reparten la carga entre varios satélites, pueden usar materiales de alta calidad en ruedas de diámetro chico, y los esfuerzos flectores sobre los árboles se equilibran, así que las ruedas pueden ser más angostas. Pesan 2 a 3 veces menos para la misma potencia y relación.</p></div></details>
<details><summary>¿Qué desventaja tiene el reductor coaxial?</summary><div class="details-cuerpo"><p>Tres: aumenta el largo total (los cojinetes de los árboles rápido y lento van en el mismo eje geométrico), el árbol intermedio es largo y se flexiona mucho (torcedura de las ruedas), y no se aprovecha la capacidad de carga de la etapa rápida porque las dos etapas tienen la misma distancia entre centros aunque los pares sean muy distintos.</p></div></details>
<details><summary>¿Por qué el sin fin va como etapa rápida en un reductor mixto?</summary><div class="details-cuerpo"><p>Porque a mayor velocidad de deslizamiento el coeficiente de rozamiento baja y el rendimiento del sin fin mejora. Colocado en la etapa rápida (menos par), además, su tamaño es menor.</p></div></details>
<details><summary>¿Qué es la "bifurcación de potencia" y para qué sirve?</summary><div class="details-cuerpo"><p>Es repartir el flujo de potencia en dos caminos paralelos (por ejemplo, dos ruedas bihelicoidales). Disminuye los inconvenientes de la disposición asimétrica de las ruedas respecto de los cojinetes: las ruedas se ubican en el medio del tramo y no se tuercen por la deflexión del árbol. En los planetarios, la multiplicidad de satélites es la misma idea.</p></div></details>

<h2>Checklist del capítulo</h2>
<div class="caja">
<ul>
<li>¿Sabés qué reductor elegir para i = 4, i = 20, i = 80?</li>
<li>¿Podés decir el rendimiento de cada tipo y justificar?</li>
<li>¿Qué rodamiento lleva un sin fin y en qué disposición?</li>
<li>¿Cuál es el límite de la lubricación por inmersión y qué se hace por encima?</li>
<li>¿Cuánto aceite lleva un reductor por kW?</li>
<li>¿Qué reglas rigen el nivel en un sin fin (tornillo arriba/abajo)?</li>
</ul>
</div>
`
});

/* ------------------------------------------------ PRÁCTICO DE REDUCTORES */
window.CAPITULOS.push({
  id: "practico-reductores",
  grupo: "4 · Reductores",
  titulo: "Práctico de reductores resuelto",
  html: String.raw`
<h1>Práctico de reductores — los 7 problemas resueltos</h1>
<p class="bajada">Todos los ejercicios del práctico, con el planteo completo y los números oficiales. Es el material que más se parece al examen de reductores.</p>

<div class="caja idea">
<p class="caja-tit">Lo que piden siempre</p>
<div class="grid3">
<div class="mini"><h4>Dientes</h4><p>De radios: z = 2r/m. De geometría: z<sub>corona</sub> = z<sub>solar</sub> + 2z<sub>satélite</sub>.</p></div>
<div class="mini"><h4>Velocidades</h4><p>La productoria $\prod$ de las conducidas sobre la de las motrices. En planetarios, Willis.</p></div>
<div class="mini"><h4>Par y fuerzas</h4><p>T = P/ω (con η si corresponde) y Lewis para la tensión.</p></div>
</div>
</div>

<div class="ej">
<div class="ej-cab"><span class="ej-num">1</span><div><p class="ej-tit">Reductor de ejes fijos — m = 4, ω<sub>A</sub> = 40 rad/s</p><p class="ej-sub">Preguntas 1 a 6</p></div></div>
<div class="ej-cuerpo">
<p><strong>Datos:</strong> r<sub>G</sub> = 80, r<sub>C</sub> = r<sub>D</sub> = 40, r<sub>E</sub> = r<sub>H</sub> = 50, r<sub>F</sub> = 70 mm; m = 4 mm; ω<sub>A</sub> = 40 rad/s; P = 10 HP.</p>

<h4>P1 — Dientes de cada rueda</h4>
<p>El radio primitivo es r = m·z/2, así que z = 2r/m:</p>
<div class="f">$$ z_G = \frac{2\cdot 80}{4} = 40 \quad z_C = z_D = \frac{2\cdot 40}{4} = 20 \quad z_E = z_H = \frac{2\cdot 50}{4} = 25 \quad z_F = \frac{2\cdot 70}{4} = 35 $$</div>

<h4>P2 — Velocidad del eje B</h4>
<div class="f">$$ \frac{n_B}{n_A} = \frac{z_G}{z_C}\cdot\frac{z_D}{z_E}\cdot\frac{z_F}{z_H} = \frac{40}{20}\cdot\frac{20}{25}\cdot\frac{35}{25} = 2{,}24 $$</div>
<div class="f">$$ \omega_B = 2{,}24 \cdot 40 = 89{,}6 \approx 90\ \text{rad/s} \qquad n_B = \frac{89{,}6 \cdot 60}{2\pi} = 856\ \text{rpm} $$</div>

<h4>P3 — Si fuera helicoidal de 20°</h4>
<p>La relación de transmisión <strong>no cambia</strong>: ω<sub>B</sub> = 90 rad/s y n<sub>B</sub> = 856 rpm. Lo único que cambia es la geometría (m<sub>n</sub> vs m<sub>t</sub>) y la aparición de fuerzas axiales.</p>

<h4>P4 — Torque de salida (sin pérdidas)</h4>
<div class="f">$$ H = 10\ \text{HP} \cdot 745 = 7450\ \text{W} \qquad T_B = \frac{H}{\omega_B} = \frac{7450}{90} = 82{,}8 \approx 82{,}86\ \text{N}\cdot\text{m} $$</div>

<h4>P5 — Con eficiencia del 92 %: velocidad</h4>
<p>El rendimiento no cambia la velocidad (solo la potencia y el par): ω<sub>B</sub> = 90 rad/s · n<sub>B</sub> = 856 rpm.</p>

<h4>P6 — Con eficiencia del 92 %: torque</h4>
<div class="f">$$ T_B' = 0{,}92 \cdot 82{,}86 = 76{,}28\ \text{N}\cdot\text{m} $$</div>

<div class="caja ojo">
<p class="caja-tit">Ojo: es un multiplicador</p>
<p>La salida gira 2,24 veces más rápido que la entrada (89,6 vs 40 rad/s), así que el par de salida es <strong>menor</strong> que el de entrada (83 contra 186 N·m). El nombre del práctico dice "reductor", pero con estos radios el tren acelera. En el examen conviene aclararlo.</p>
</div>
</div>
</div>

<h3>El reductor del práctico, en 3D</h3>
<p>La misma disposición del problema 1: la rueda G entra por el eje A, arrastra a C (solidaria con D), D mueve a E (solidaria con F) y F mueve a H en el eje de salida. Cada rueda lleva una <strong>flecha con su sentido de giro</strong> y el panel lista las velocidades de los cuatro ejes. Con los chips <strong>1ª / 2ª / 3ª</strong> se aísla cada par y se ve la inversión: tres pares exteriores, salida opuesta.</p>
<div data-3d="reductor"></div>

<div class="ej">
<div class="ej-cab"><span class="ej-num">2</span><div><p class="ej-tit">Cadena poleas → cónicos → cilíndricos → sin fin</p><p class="ej-sub">Preguntas 7 a 11</p></div></div>
<div class="ej-cuerpo">
<p><strong>Datos:</strong> polea 2 = 6 pulg (5 HP, 1520 rpm) → polea 3 = 10 pulg; cónicos 4/5 = 18/38; cilíndricos 6/7 = 20/48; sinfín 8 = 3 entradas (hélice derecha) / corona 9 = 36 dientes.</p>

<h4>P7 — Velocidad del engrane 9</h4>
<div class="f">$$ n_3 = 1520\cdot\frac{6}{10} = 912 \qquad n_5 = 912\cdot\frac{18}{38} = 432 \qquad n_7 = 432\cdot\frac{20}{48} = 180 $$</div>
<div class="f">$$ n_9 = 180\cdot\frac{3}{36} = 15\ \text{rpm} $$</div>
<p>De una sola vez: n₉ = 1520·(6/10)·(18/38)·(20/48)·(3/36) = 15 rpm.</p>

<h4>P8 — Si el par 6-7 fuera helicoidal de 18°</h4>
<p>La relación no cambia: n₉ = 15 rpm. Lo único que agrega es empuje axial en ese par.</p>

<h4>P9 — Sentido de giro del engrane 9</h4>
<p>Hay que contar las inversiones: la correa <strong>no invierte</strong>, el par cónico tampoco (los ejes son perpendiculares: el sentido se analiza en cada eje), el par cilíndrico invierte, el sinfín invierte según la hélice. Con hélice derecha y el giro indicado, la respuesta del práctico es <strong>horario</strong>.</p>
<p class="aviso">Para el examen: alcanza con indicar el criterio (contar inversiones y aplicar la regla de la hélice) y el resultado. Si el dibujo no permite seguir el eje, se indica el sentido respecto de la vista.</p>

<h4>P10 — Torque en el engrane 9</h4>
<div class="f">$$ H = 5\ \text{HP} = 3725\ \text{W} \qquad \omega_9 = \frac{2\pi \cdot 15}{60} = 1{,}5708\ \text{rad/s} $$</div>
<div class="f">$$ T_9 = \frac{3725}{1{,}5708} = 2371 \approx 2373{,}6\ \text{N}\cdot\text{m} $$</div>
<p>La reducción total es de 101:1, y el par se multiplica en la misma proporción.</p>

<h4>P11 — Tensión de Lewis en el engrane 6</h4>
<ol class="pasos">
<li>D<sub>p6</sub> = 2,5·20 = 50 mm; n₆ = n₅ = 432 rpm.
<div class="f">$$ V = \frac{\pi \cdot 50 \cdot 432}{60\,000} = 1{,}131\ \text{m/s} $$</div></li>
<li>Fuerza tangencial (potencia / velocidad):
<div class="f">$$ W_t = \frac{H}{V} = \frac{3725}{1{,}131} = 3293\ \text{N} $$</div></li>
<li>Factor de forma (z = 20): Y = 0,322. Factor dinámico (fresa madre):
<div class="f">$$ K_v = \frac{3{,}56 + \sqrt{1{,}131}}{3{,}56} = 1{,}2987 $$</div></li>
<li>Tensión:
<div class="f">$$ \sigma = \frac{1{,}2987 \cdot 3293}{25 \cdot 2{,}5 \cdot 0{,}322} = \frac{4276{,}8}{20{,}125} = 212{,}5 \approx 212{,}7\ \text{MPa} $$</div></li>
</ol>
<div class="resultado"><span class="r-lbl">Respuestas:</span> <span class="r-val">n₉ = 15 rpm · T₉ = 2373,6 N·m · σ₆ = 212,7 MPa</span></div>

<h4>La cadena completa, en 3D</h4>
<p>Las cuatro etapas juntas, con la misma disposición del esquema: la correa sube en vertical entre las poleas 2 y 3, el piñón 4 va en el eje de la polea 3 y engrana con la rueda 5, que comparte el eje vertical con el piñón 6; el 7 baja por ese mismo eje hasta el sin fin 8, y la corona 9 cierra con el eje horizontal. Cada etapa con su color: <strong>correa</strong> (dorado), <strong>cónicos 4/5</strong> (verde), <strong>cilíndricos 6/7</strong> (azul) y <strong>sin fin 8/9</strong> (rojo). Los chips del panel aíslan una etapa y muestran su fórmula. Fijate en el sentido: la correa <strong>no invierte</strong>; el par cónico cambia de eje (por eso el sentido se lee sobre cada eje); el par 6-7 invierte; el sin fin vuelve a invertir. Resultado con hélice derecha: la corona 9 gira <strong>horaria</strong>.</p>
<div data-3d="cadena"></div>
</div>
</div>

<div class="ej">
<div class="ej-cab"><span class="ej-num">3</span><div><p class="ej-tit">Reductor de ejes fijos — m = 3, ω<sub>A</sub> = 50 rad/s</p><p class="ej-sub">Preguntas 12 a 15</p></div></div>
<div class="ej-cuerpo">
<p><strong>Datos:</strong> r<sub>G</sub> = 60, r<sub>C</sub> = r<sub>D</sub> = 36, r<sub>E</sub> = r<sub>H</sub> = 51, r<sub>F</sub> = 75 mm; m = 3 mm.</p>
<div class="f">$$ z_G = 40 \quad z_C = z_D = 24 \quad z_E = z_H = 34 \quad z_F = 50 $$</div>
<div class="f">$$ \frac{n_B}{n_A} = \frac{40}{24}\cdot\frac{24}{34}\cdot\frac{50}{34} = 1{,}7301 $$</div>
<div class="f">$$ \omega_B = 1{,}7301 \cdot 50 = 86{,}5 \approx 87\ \text{rad/s} \qquad n_B = 826\ \text{rpm} $$</div>
<p><strong>Sentido:</strong> hay tres pares exteriores (G-C, D-E, F-H) → el eje B gira en sentido <strong>opuesto</strong> al A.</p>
<p><strong>Con dentado helicoidal de 20°:</strong> misma velocidad (87 rad/s / 826 rpm).</p>
<div class="resultado"><span class="r-lbl">Respuestas:</span> <span class="r-val">ω<sub>B</sub> = 87 rad/s · n<sub>B</sub> = 826 rpm · sentido opuesto al eje A</span></div>

<h4>El tren, en 3D</h4>
<p>Misma disposición que el problema 1 (cuatro ejes, tres pares), con m = 3: G·40, C/D·24, E/H·34 y F·50. Al aislar cada etapa con los chips se ve la inversión del sentido par por par: al ser <strong>tres pares exteriores</strong>, la salida queda opuesta a la entrada.</p>
<div data-3d="reductor3"></div>
</div>
</div>

<div class="ej">
<div class="ej-cab"><span class="ej-num">4</span><div><p class="ej-tit">Reductor helicoidal de 3 etapas</p><p class="ej-sub">Preguntas 16 a 20</p></div></div>
<div class="ej-cuerpo">
<p><strong>Datos:</strong> etapa 1: z₁ = 32, z₂ = 64, m<sub>n</sub> = 3, ψ = 20°; etapa 2: z₃ = 25, z₄ = 80, m<sub>n</sub> = 4, ψ = 17°; etapa 3: z₅ = 18, z₆ = 50, m<sub>n</sub> = 5, ψ = 15°. Entrada 1500 rpm; P = 42 HP; η = 98 % por etapa.</p>

<h4>P17 — Velocidad del engrane 6</h4>
<div class="f">$$ n_6 = 1500\cdot\frac{32}{64}\cdot\frac{25}{80}\cdot\frac{18}{50} = 1500 \cdot 0{,}5 \cdot 0{,}3125 \cdot 0{,}36 = 84{,}375\ \text{rpm} $$</div>

<h4>P18 — Distancia entre centros total</h4>
<p>Cada etapa aporta su distancia; como los ejes son paralelos, la distancia entre el eje de entrada y el de salida es la <strong>suma</strong> de las tres:</p>
<div class="f">$$ C_i = \frac{m_{n,i}(z_{piñón} + z_{rueda})}{2\cos\psi_i} $$</div>
<div class="f">$$ C_1 = \frac{3(32+64)}{2\cos 20^\circ} = 153{,}24 \quad C_2 = \frac{4(25+80)}{2\cos 17^\circ} = 219{,}55 \quad C_3 = \frac{5(18+50)}{2\cos 15^\circ} = 175{,}99 $$</div>
<div class="f">$$ C = 153{,}24 + 219{,}55 + 175{,}99 = 548{,}78 \approx 548{,}83\ \text{mm} $$</div>

<h4>P19 — Torque de salida (η = 98 % por etapa)</h4>
<div class="f">$$ H = 42\ \text{HP} \cdot 745 = 31\,290\ \text{W} \qquad \omega_6 = \frac{2\pi \cdot 84{,}375}{60} = 8{,}8357\ \text{rad/s} $$</div>
<div class="f">$$ T_6 = \frac{H\cdot\eta^3}{\omega_6} = \frac{31\,290 \cdot 0{,}98^3}{8{,}8357} = \frac{29\,450}{8{,}8357} = 3333 \approx 3336{,}4\ \text{N}\cdot\text{m} $$</div>

<h4>P20 — Fuerzas axiales</h4>
<p>La fuerza axial es F<sub>a</sub> = F<sub>t</sub>·tan ψ, con F<sub>t</sub> = 2T/D<sub>p</sub> y D<sub>p</sub> = m<sub>n</sub>·z/cos ψ. Cada rueda de un par lleva la misma fuerza axial y en sentido contrario.</p>
<div class="tabla-wrap">
<table class="tec compacta">
<thead><tr><th>Par</th><th class="num">T [N·m]</th><th class="num">D<sub>p</sub> piñón [mm]</th><th class="num">F<sub>t</sub> [N]</th><th class="num">F<sub>a</sub> [N]</th></tr></thead>
<tbody>
<tr><td>1 y 2</td><td class="num">199,2</td><td class="num">102,16</td><td class="num">3900</td><td class="num">1422</td></tr>
<tr><td>3 y 4</td><td class="num">390,4</td><td class="num">104,57</td><td class="num">7467</td><td class="num">2287</td></tr>
<tr><td>5 y 6</td><td class="num">1224,3</td><td class="num">93,17</td><td class="num">26 285</td><td class="num">7055</td></tr>
</tbody>
</table>
</div>
<p class="aviso">En cada par, las flechas de empuje axial son opuestas (una empuja el árbol hacia un lado y la otra hacia el otro). El torque de cada etapa siguiente incluye el 98 % de rendimiento.</p>
<div class="resultado"><span class="r-lbl">Respuestas:</span> <span class="r-val">n₆ = 84,375 rpm · C = 548,83 mm · T₆ = 3336,4 N·m · F<sub>a</sub> = 1422 / 2287 / 7055 N</span></div>
</div>
</div>

<h3>La cadena de tres etapas, en 3D</h3>
<p>El reductor helicoidal del problema 4: los ejes 1-2, 2-3 (solidarias), 3-4, 4-5 (solidarias) y 5-6, con el dentado inclinado de verdad. Fijate cómo el ancho de cara crece hacia la salida (cada etapa transmite más par) y cómo el sentido se invierte en cada engrane: 1 ↻, 2 y 3 ↺, 4 y 5 ↻, 6 ↺.</p>
<div data-3d="helicoidal"></div>

<div class="ej">
<div class="ej-cab"><span class="ej-num">5</span><div><p class="ej-tit">Planetario con el engrane 2 fijo</p><p class="ej-sub">Pregunta 21 · z₂ = 20, z₄ = 30, z₅ = 16, n₆ = 53 rpm</p></div></div>
<div class="ej-cuerpo">
<ol class="pasos">
<li><strong>z₆</strong> = z₂ + z₄ − z₅ = 20 + 30 − 16 = 34 (soles coaxiales, par 4-5 en el mismo perno).</li>
<li><strong>Brazo fijo</strong>: camino 6 → 5 → 4 → 2, dos engranes exteriores → signo +:
<div class="f">$$ i_0 = \frac{z_5 z_2}{z_6 z_4} = \frac{16 \cdot 20}{34 \cdot 30} = 0{,}3137 $$</div></li>
<li><strong>Willis</strong> con n₂ = 0:
<div class="f">$$ \frac{53 - n_3}{0 - n_3} = 0{,}3137 \;\Rightarrow\; n_3 = \frac{53}{0{,}6863} = 77{,}23\ \text{rpm} $$</div></li>
</ol>
<div class="resultado"><span class="r-lbl">Respuesta:</span> <span class="r-val">n<sub>brazo</sub> = 77,23 rpm (horario, igual que la entrada)</span></div>

<h4>El doble satélite, en 3D</h4>
<p>Dos niveles: abajo el <strong>sol 2</strong> (gris, fijo) con el satélite 4; arriba el <strong>sol 6</strong> (verde, la entrada) con el satélite 5. Los pares 4-5 van montados en el <strong>mismo perno</strong> (las columnas grises), por eso giran junto con el brazo. Mirá que el brazo (las barras verdes) arrastra a los dos satélites y que el sol 2, al estar fijo, hace que los satélites rueden sobre él.</p>
<div data-3d="planeta5"></div>
</div>
</div>

<div class="ej">
<div class="ej-cab"><span class="ej-num">6</span><div><p class="ej-tit">Planetario con el engrane 6 fijo</p><p class="ej-sub">Preguntas 22 y 23 · z₂ = 49, z₄ = 47, z₅ = 48, n₂ = 53 rpm</p></div></div>
<div class="ej-cuerpo">
<ol class="pasos">
<li><strong>z₆</strong> = 49 + 47 − 48 = 48.</li>
<li><strong>Brazo fijo</strong> (camino 2 → 4 → 5 → 6, dos exteriores → +):
<div class="f">$$ i_0 = \frac{z_4 z_6}{z_2 z_5} = \frac{47 \cdot 48}{49 \cdot 48} = 0{,}95918 $$</div></li>
<li><strong>Willis</strong> con n₆ = 0 y n₂ = 53:
<div class="f">$$ \frac{53 - n_3}{-n_3} = 0{,}95918 \;\Rightarrow\; 53 = 0{,}04082\,n_3 \;\Rightarrow\; n_3 = 1298{,}5\ \text{rpm} $$</div></li>
<li><strong>P23</strong>: ahora el brazo gira a 800 rpm antihorario (n₃ = −800) y se pide n₂:
<div class="f">$$ \frac{n_2 + 800}{0 + 800} = 0{,}95918 \;\Rightarrow\; n_2 = -32{,}65\ \text{rpm} $$</div></li>
</ol>
<div class="resultado"><span class="r-lbl">Respuestas:</span> <span class="r-val">n₃ = 1298,5 rpm (P22) · n₂ = −32,65 rpm (P23)</span></div>

<h4>El multiplicador, en 3D</h4>
<p>Con el <strong>sol 6 fijo</strong> (gris) y el sol 2 como entrada, el brazo se dispara: 24,5 vueltas por cada vuelta del solar. En la animación el sol 2 se mueve muy despacio al lado del brazo, y eso es exactamente lo que dice la relación. Los satélites 4 y 5 giran solidarios en cada perno.</p>
<div data-3d="planeta6"></div>
<p class="aviso">Con dientes casi iguales (49/47/48), i₀ ≈ 0,96: una entrada de 53 rpm da 1298 rpm de salida. Es la razón por la que los planetarios con doble satélite se usan como <strong>multiplicadores</strong> (o reductores de relación fraccionaria, según qué elemento sea la entrada).</p>
</div>
</div>

<div class="ej">
<div class="ej-cab"><span class="ej-num">7</span><div><p class="ej-tit">Planetario con corona interior fija</p><p class="ej-sub">Preguntas 24 a 26 · z₂ = 12, z₃ = 16, z₄ = 12, n₂ = 320 rpm antihorario</p></div></div>
<div class="ej-cuerpo">
<ol class="pasos">
<li><strong>Dientes de la corona</strong>: el satélite 3 engrana con el solar y con el satélite 4; el 4 engrana con la corona. La geometría da:
<div class="f">$$ z_5 = z_2 + 2(z_3 + z_4) = 12 + 2(16+12) = 68 $$</div></li>
<li><strong>Brazo fijo</strong>: camino 2 → 3 (exterior) → 4 (exterior) → 5 (interior). Dos exteriores → positivo. Los dientes intermedios se cancelan:
<div class="f">$$ i_0 = \frac{z_3 z_4 z_5}{z_2 z_3 z_4} = \frac{z_5}{z_2} = \frac{68}{12} = 5{,}6667 $$</div></li>
<li><strong>Willis</strong> con corona fija (n₅ = 0) y n₂ = −320 (antihorario, porque horario = +):
<div class="f">$$ \frac{-320 - n_3}{-n_3} = 5{,}6667 \;\Rightarrow\; -320 = -4{,}6667\,n_3 \;\Rightarrow\; n_3 = +68{,}57\ \text{rpm} $$</div></li>
<li><strong>Con 3 etapas en serie</strong>: cada etapa divide por (i₀ − 1) = 4,6667 e invierte el signo:
<div class="f">$$ n_{salida} = \frac{320}{4{,}6667^3} = \frac{320}{101{,}63} = 3{,}15\ \text{rpm} $$</div></li>
</ol>
<div class="resultado"><span class="r-lbl">Respuestas:</span> <span class="r-val">z₅ = 68 dientes · n<sub>ps</sub> = 68,57 rpm (1 etapa) · 3,15 rpm (3 etapas)</span></div>

<h4>La corona interior, en 3D</h4>
<p>El <strong>sol 2</strong> (verde) engrana con el satélite 3, el 3 con el 4 y el 4 con la <strong>corona 5</strong> de dentado interior (gris, fija). Dos engranes exteriores (2-3 y 3-4) y uno interior (4-5): la corona <strong>no invierte</strong>, por eso i₀ queda positivo y el brazo sale en sentido contrario a la entrada.</p>
<div data-3d="planeta7"></div>
</div>
</div>

<h2>Tabla resumen de respuestas</h2>
<div class="tabla-wrap">
<table class="tec">
<thead><tr><th>Problema</th><th>Resultados</th></tr></thead>
<tbody>
<tr><td>1 — ejes fijos m = 4</td><td>z = 40/20/20/25/35/25 · ω<sub>B</sub> = 90 rad/s · n<sub>B</sub> = 856 rpm · T = 82,86 N·m · con η: 76,28 N·m</td></tr>
<tr><td>2 — cadena completa</td><td>n₉ = 15 rpm · T₉ = 2373,6 N·m · σ₆ = 212,7 MPa</td></tr>
<tr><td>3 — ejes fijos m = 3</td><td>z = 40/24/24/34/50/34 · ω<sub>B</sub> = 87 rad/s · n<sub>B</sub> = 826 rpm · sentido opuesto</td></tr>
<tr><td>4 — helicoidal 3 etapas</td><td>n₆ = 84,375 rpm · C = 548,83 mm · T₆ = 3336,4 N·m · F<sub>a</sub> = 1422 / 2287 / 7055 N</td></tr>
<tr><td>5 — planetario 2 fijo</td><td>n<sub>brazo</sub> = 77,23 rpm</td></tr>
<tr><td>6 — planetario 6 fijo</td><td>n<sub>brazo</sub> = 1298,5 rpm · n₂ = −32,65 rpm</td></tr>
<tr><td>7 — corona fija doble satélite</td><td>z₅ = 68 · n<sub>ps</sub> = 68,57 rpm · 3 etapas: 3,15 rpm</td></tr>
</tbody>
</table>
</div>
`
});

/* --------------------------------------------------------------- RESUMEN */
window.CAPITULOS.push({
  id: "resumen",
  grupo: "5 · Estudio",
  titulo: "Resumen imprimible (B/N)",
  html: String.raw`
<h1>Resumen imprimible</h1>
<p class="bajada">Todo lo esencial en blanco y negro para imprimir y llevar al examen. Está armado para salir limpio en A4: sin colores, sin menús, con las fórmulas y las tablas que se usan.</p>

<div class="caja idea no-print">
<p class="caja-tit">Cómo imprimirlo</p>
<p>Botón <strong>Imprimir</strong> (arriba a la derecha) o <kbd>Ctrl</kbd>+<kbd>P</kbd>. Si querés ahorrar papel, elegí "escala de grises" y "márgenes predeterminados". Las 5 páginas de abajo alcanzan para tener todo el formulario a mano.</p>
</div>

<h2>1 · Geometría y nomenclatura</h2>
<div class="tabla-wrap">
<table class="tec compacta">
<thead><tr><th>Cantidad</th><th>Fórmula</th><th>Cantidad</th><th>Fórmula</th></tr></thead>
<tbody>
<tr><td>Módulo</td><td><span>$m = \dfrac{D_p}{z} = \dfrac{p_c}{\pi}$</span></td><td>Paso de base</td><td><span>$p_b = p_c\cos\varphi$</span></td></tr>
<tr><td>Paso diametral</td><td><span>$P_d = \dfrac{z}{D_p[\text{pulg}]}$</span></td><td>Equivalencia</td><td><span>$P_d\cdot m = 25{,}4$</span></td></tr>
<tr><td>Addendo</td><td><span>$a = m$</span></td><td>Paso circular</td><td><span>$p_c = \pi m$</span></td></tr>
<tr><td>Dedendo</td><td><span>$b = 1{,}25\,m$</span></td><td>Huelgo</td><td><span>$h_c = \dfrac{p_c}{50}$</span></td></tr>
<tr><td>Altura total</td><td><span>$h_t = 2{,}25\,m$</span></td><td>Espesor / vacío (v)</td><td><span>$t = (p_c-h_c)/2$</span> · <span>$v = p_c - t$</span></td></tr>
<tr><td>Primitivo</td><td><span>$D_p = m\,z$</span></td><td>Exterior</td><td><span>$d_e = D_p + 2m$</span></td></tr>
<tr><td>Raíz</td><td><span>$d_i = D_p - 2{,}5m$</span></td><td>Base</td><td><span>$D_b = D_p\cos\varphi$</span></td></tr>
<tr><td>Centros</td><td><span>$C = \dfrac{m(z_1+z_2)}{2}$</span></td><td>Relación</td><td><span>$i = \dfrac{z_2}{z_1} = \dfrac{n_1}{n_2}$</span></td></tr>
<tr><td>Ancho de cara</td><td><span>$F = 9{,}5\,m$</span> (Fanchon medio)</td><td>Rango</td><td><span>$7m \le F \le 12m$</span></td></tr>
<tr><td>Diente recortado</td><td><span>$a = 0{,}8m$</span> · <span>$b = m$</span></td><td>Altura total recortada</td><td><span>$h_t = 1{,}8m$</span></td></tr>
</tbody>
</table>
</div>

<h2>2 · Velocidad de contacto e interferencia</h2>
<div class="f f-sin">$$ m_c = \frac{\sqrt{R_{e1}^2-R_{b1}^2}+\sqrt{R_{e2}^2-R_{b2}^2}-C\sin\varphi}{p_c\cos\varphi} $$</div>
<div class="f f-sin">$$ 1{,}2 \le m_c \le \frac{C}{p_c}\tan\varphi \qquad\qquad z_{mín} = \frac{2}{\sin^2\varphi} = 17\ \text{(φ = 20°)} $$</div>

<h2>3 · Potencia, par y fuerzas</h2>
<div class="f f-sin">$$ \omega = \frac{2\pi n}{60} \qquad T = \frac{H}{\omega} \qquad W_t = \frac{2T}{D_p} = \frac{60\,000\,H}{\pi D_p n} \qquad W_r = W_t\tan\varphi \qquad W = \frac{W_t}{\cos\varphi} $$</div>
<div class="f f-sin">$$ H = T\,\omega \qquad \frac{T_s}{T_e} = i\cdot\eta \qquad V = \frac{\pi D_p n}{60\,000} $$</div>

<h2>4 · Lewis y factor de seguridad</h2>
<div class="f f-sin">$$ \sigma = \frac{K_v\,W_t}{F\,m\,Y} \qquad\qquad f_{seg} = \frac{S_t}{\sigma} \qquad\qquad S_t = 0{,}749\,H_B + 110 \ \text{(4140 g.2)} $$</div>
<div class="tabla-wrap">
<table class="tec compacta">
<thead><tr><th class="num">z</th><th class="num">Y</th><th class="num">z</th><th class="num">Y</th><th class="num">z</th><th class="num">Y</th><th class="num">z</th><th class="num">Y</th></tr></thead>
<tbody>
<tr><td class="num">12</td><td class="num">0,245</td><td class="num">17</td><td class="num">0,303</td><td class="num">24</td><td class="num">0,337</td><td class="num">50</td><td class="num">0,409</td></tr>
<tr><td class="num">13</td><td class="num">0,261</td><td class="num">18</td><td class="num">0,309</td><td class="num">26</td><td class="num">0,346</td><td class="num">60</td><td class="num">0,422</td></tr>
<tr><td class="num">14</td><td class="num">0,277</td><td class="num">19</td><td class="num">0,314</td><td class="num">28</td><td class="num">0,353</td><td class="num">75</td><td class="num">0,435</td></tr>
<tr><td class="num">15</td><td class="num">0,290</td><td class="num">20</td><td class="num">0,322</td><td class="num">30</td><td class="num">0,359</td><td class="num">100</td><td class="num">0,447</td></tr>
<tr><td class="num">16</td><td class="num">0,296</td><td class="num">21</td><td class="num">0,328</td><td class="num">34</td><td class="num">0,371</td><td class="num">cremallera</td><td class="num">0,485</td></tr>
</tbody>
</table>
</div>
<div class="tabla-wrap">
<table class="tec compacta">
<thead><tr><th>Tallado</th><th>K<sub>v</sub> (V en m/s)</th></tr></thead>
<tbody>
<tr><td>Fundido moldeado</td><td><span>$K_v = \dfrac{3{,}05+V}{3{,}05}$</span></td></tr>
<tr><td>Cortado o fresado</td><td><span>$K_v = \dfrac{6{,}1+V}{6{,}1}$</span></td></tr>
<tr><td>Fresa madre o cepillado</td><td><span>$K_v = \dfrac{3{,}56+\sqrt{V}}{3{,}56}$</span></td></tr>
<tr><td>Rectificado</td><td><span>$K_v = \sqrt{\dfrac{5{,}56+\sqrt{V}}{5{,}56}}$</span></td></tr>
</tbody>
</table>
</div>
<div class="f f-sin">$$ \text{Acero endurecido: } S_t = 0{,}533H_B+88{,}3\ (g1) \qquad S_t = 0{,}703H_B+113\ (g2) $$</div>
<div class="f f-sin">$$ \text{AISI 4140 nitrurado: } S_t = 0{,}568H_B+83{,}8\ (g1) \qquad S_t = 0{,}749H_B+110\ (g2) $$</div>

<h2>5 · Selección de módulo</h2>
<div class="f f-sin">$$ m = \sqrt[3]{\frac{2000\,H\,K_v}{\omega\,z_1\,k\,Y\,S_{adm}}} \qquad (k = F/m) $$</div>
<p class="aviso">Ábaco de cátedra: z₁ = 17, F = 7m, creadora, hojas para S<sub>adm</sub> = 100/200/350/500/700 MPa. Se entra con n₁ [rpm] y H [kW]; el punto entre dos rectas toma el módulo superior.</p>

<h2>6 · Trenes de engranajes</h2>
<div class="f f-sin">$$ i = \frac{n_e}{n_s} = \frac{\prod z_{\text{conducidas}}}{\prod z_{\text{motrices}}} \qquad\qquad \frac{T_s}{T_e} = i $$</div>
<p class="aviso"><strong>∏ = productoria</strong> (Pi mayúscula): multiplicá todos los dientes, no es π = 3,1416.</p>
<div class="f f-sin">$$ \text{Coaxial: } m_A(z_2+z_3) = m_B(z_4+z_5) $$</div>

<h2>7 · Planetarios (Willis)</h2>
<div class="f f-sin">$$ \frac{n_e - n_{ps}}{n_s - n_{ps}} = i_0 = \pm\frac{\prod z_{\text{conducidas}}}{\prod z_{\text{motrices}}} $$</div>
<div class="f f-sin">$$ n_{ps} = \frac{n_e - i_0\,n_s}{1 - i_0} $$</div>
<div class="tabla-wrap">
<table class="tec compacta">
<thead><tr><th>Se fija</th><th>Fórmula</th><th>Se fija</th><th>Fórmula</th></tr></thead>
<tbody>
<tr><td>Corona</td><td><span>$n_{ps} = n_{solar}\dfrac{z_s}{z_s+z_c}$</span></td><td>Solar</td><td><span>$n_{ps} = n_{corona}\dfrac{z_c}{z_s+z_c}$</span></td></tr>
<tr><td>Brazo</td><td><span>$\dfrac{n_{solar}}{n_{corona}} = -\dfrac{z_c}{z_s}$</span></td><td>Geometría</td><td><span>$z_c = z_s + 2z_{sat}$</span></td></tr>
</tbody>
</table>
</div>
<div class="f f-sin">$$ \text{Signo de } i_0: \text{ par de engranes exteriores } \Rightarrow + \; ; \text{ impar } \Rightarrow - $$</div>

<h2>8 · Helicoidales, cónicos y sin fin</h2>
<div class="tabla-wrap">
<table class="tec compacta">
<thead><tr><th>Tipo</th><th>Fórmulas</th></tr></thead>
<tbody>
<tr><td>Helicoidal</td><td><span>$m_t = \dfrac{m_n}{\cos\psi}$</span> · <span>$D_p = \dfrac{m_n z}{\cos\psi}$</span> · <span>$C = \dfrac{m_n(z_1+z_2)}{2\cos\psi}$</span> · <span>$\tan\varphi_t = \dfrac{\tan\varphi_n}{\cos\psi}$</span> · <span>$W_r = W_t\tan\varphi_t$</span> · <span>$W_a = W_t\tan\psi$</span> · <span>$m_{hel} = m_c + F\tan\psi/p_t$</span></td></tr>
<tr><td>Cónico</td><td><span>$\tan\gamma = \dfrac{z_1}{z_2}$</span> · <span>$\Gamma = \Sigma-\gamma$</span> · <span>$A_o = D_p/(2\sin\gamma)$</span> · <span>$r_b = D_p/(2\cos\gamma)$</span> · <span>$F \le A_o/3$</span> · <span>$W_r = W_t\tan\varphi\cos\gamma$</span> · <span>$W_a = W_t\tan\varphi\sin\gamma$</span></td></tr>
<tr><td>Sin fin</td><td><span>$i = \dfrac{z_2}{z_1}$</span> · <span>$p_x = \pi m_n$</span> · <span>$L = p_x z_1$</span> · <span>$\lambda = 90^\circ-\beta$</span> · <span>$\eta = \dfrac{\cos\varphi_n-\mu\tan\lambda}{\cos\varphi_n+\mu\cot\lambda}$</span> · η = 60–80 %</td></tr>
</tbody>
</table>
</div>

<h2>9 · Reductores: criterios</h2>
<div class="tabla-wrap">
<table class="tec compacta">
<thead><tr><th>Relación</th><th>Tipo</th><th>Rendimiento</th><th>Rodamientos</th></tr></thead>
<tbody>
<tr><td>1 – 10</td><td>Cilíndrico 1 etapa (conviene ≤ 8)</td><td class="num">0,97–0,99</td><td>Cualquiera</td></tr>
<tr><td>10 – 60</td><td>Cilíndrico 2 etapas</td><td class="num">0,94–0,98</td><td>Según dentado</td></tr>
<tr><td>&gt; 40</td><td>3 etapas / planetario</td><td class="num">0,92–0,97</td><td>Agujas en satélites</td></tr>
<tr><td>10 – 100</td><td>Sin fin 1 etapa</td><td class="num">0,60–0,80</td><td>Angulares, disposición ajustada</td></tr>
<tr><td>—</td><td>Helicoidal</td><td class="num">—</td><td>Bolas rígidos, cónicos, rodillos de rótula</td></tr>
</tbody>
</table>
</div>
<p class="aviso"><strong>Lubricación:</strong> inmersión hasta 12 m/s (0,7·h del diente y ≥10 mm en rápidas; ≤100 mm en lentas) · chorro desde 12 m/s · capacidad 0,35–0,7 L/kW. <strong>Sin fin:</strong> inmersión hasta 10 m/s; v<sub>torn</sub> &lt; 4 → rueda arriba; ≥ 4 → tornillo arriba; &gt; 10 → forzada. Apoyos &gt; 350 mm → disposición fijo-libre.</p>

<h2>10 · Checklist final de examen</h2>
<div class="caja">
<ol>
<li>Convertí todo antes de empezar: <strong>HP → W (×745)</strong>, rpm → rad/s, mm → m donde haga falta.</li>
<li>Elegí el <strong>módulo normalizado</strong> (nunca el calculado exacto).</li>
<li>Redondeá los <strong>dientes</strong> al entero y recalculá i real.</li>
<li>Verificá el <strong>orden de los diámetros</strong>: d<sub>i</sub> &lt; D<sub>b</sub> &lt; D<sub>p</sub> &lt; d<sub>e</sub>.</li>
<li>En Lewis usá Y con los dientes del engranaje verificado y K<sub>v</sub> con su propio V.</li>
<li>Chequeá que <strong>W &gt; W<sub>t</sub></strong> y que <strong>W<sub>r</sub> ≈ 0,36·W<sub>t</sub></strong>.</li>
<li>f<sub>seg</sub> ≥ 1,2 y m<sub>c</sub> ≥ 1,2: si no, decilo y proponé la corrección (subir F primero).</li>
<li>En trenes: contá las <strong>inversiones</strong> para el sentido y verificá que el par crezca al reducir velocidad.</li>
<li>En planetarios: verificá z<sub>corona</sub> = z<sub>solar</sub> + 2z<sub>satélite</sub> antes de usar Willis; determiná el signo contando engranes exteriores.</li>
<li>Poné siempre <strong>unidades</strong> en el resultado y una frase de conclusión ("verifica", "no verifica porque…").</li>
</ol>
</div>

<h2>Constantes de bolsillo</h2>
<div class="tabla-wrap">
<table class="tec compacta">
<tbody>
<tr><td>sen 20° = 0,34202 · cos 20° = 0,93969 · tan 20° = 0,36397</td><td>1 HP = 745 W · 1 kW = 1000 W</td></tr>
<tr><td>π = 3,14159 · 2π = 6,28319</td><td>1 pulg = 25,4 mm · P<sub>d</sub>·m = 25,4</td></tr>
<tr><td>Módulos: 0,5 · 0,75 · 1 · 1,25 · 1,5 · 2 · 2,5 · 3 · 4 · 5 · 6 · 8 · 10 · 12 · 16 · 20 · 25 · 32 · 40</td><td>ω = n·0,10472 (n en rpm)</td></tr>
</tbody>
</table>
</div>
`
});

