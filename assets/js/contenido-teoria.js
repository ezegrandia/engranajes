/* =========================================================================
   CONTENIDO · 1. FUNDAMENTOS DE ENGRANAJES
   Capítulos: inicio, geometria, contacto, helicoidales, conicos, sinfin
   ========================================================================= */
window.CAPITULOS = window.CAPITULOS || [];

/* ---------------------------------------------------------------- INICIO */
window.CAPITULOS.push({
  id: "inicio",
  grupo: "1 · Fundamentos",
  titulo: "Cómo usar esta guía",
  html: String.raw`
<h1>Engranajes y reductores</h1>
<p class="bajada">Todo lo que entra en el examen del Módulo 03: teoría explicada, fórmulas listas para usar, los prácticos resueltos paso a paso y preguntas para autoevaluarte. No necesitás abrir los PDF: está todo acá.</p>

<div class="grid3">
  <div class="mini"><h4>1 · Entendé</h4><p>Seis capítulos de teoría con las fórmulas, los criterios de la cátedra y los casos típicos de examen.</p></div>
  <div class="mini"><h4>2 · Resolvé</h4><p>Los 4 bloques del TP de engranajes y los 7 problemas del práctico de reductores, resueltos con todos los números.</p></div>
  <div class="mini"><h4>3 · Autoevaluáte</h4><p>Cuestionario multiple choice con explicación, preguntas de desarrollo y un resumen imprimible en blanco y negro.</p></div>
</div>

<h2>Qué te van a pedir</h2>
<p>Los prácticos de la materia giran siempre alrededor de las mismas dos familias de problemas. Si dominás estas dos secuencias, aprobás:</p>

<div class="grid2">
  <div class="caja dato">
    <p class="caja-tit">
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 7v6l4 2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
      Bloque A — Transmisión por engranajes
    </p>
    <ol class="pasos">
      <li>Elegir el <strong>módulo</strong> con el ábaco (o analíticamente).</li>
      <li>Calcular <strong>z₂</strong> con la relación de transmisión.</li>
      <li>Sacar <strong>toda la geometría</strong>: D<sub>p</sub>, d<sub>e</sub>, d<sub>i</sub>, D<sub>b</sub>, C, p<sub>c</sub>, h<sub>c</sub>, t, v, F.</li>
      <li>Calcular <strong>torque y fuerzas</strong> (T, W<sub>t</sub>, W<sub>r</sub>, W).</li>
      <li>Verificar por <strong>Lewis</strong> (σ) y sacar el <strong>factor de seguridad</strong> (f<sub>seg</sub> = S<sub>t</sub>/σ).</li>
    </ol>
  </div>
  <div class="caja dato">
    <p class="caja-tit">
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><circle cx="9" cy="12" r="6.2" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="18" cy="12" r="3.4" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>
      Bloque B — Reductores
    </p>
    <ol class="pasos">
      <li>Contar dientes: <strong>z = 2r/m</strong> o por geometría.</li>
      <li>Plantear la <strong>relación de transmisión</strong> del tren: la productoria $\prod$ de las conducidas sobre la de las motrices.</li>
      <li>Resolver <strong>ω, n</strong> y el <strong>sentido de giro</strong>.</li>
      <li>Resolver <strong>par y potencia</strong> (con o sin rendimiento).</li>
      <li>Si hay planetarios: <strong>fórmula de Willis</strong> o método tabular.</li>
    </ol>
  </div>
</div>

<div class="caja truco">
<p class="caja-tit">
<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>
Ruta de estudio sugerida (7 días)
</p>
<p><strong>Día 1:</strong> Geometría del diente y normalización. <strong>Día 2:</strong> Relación de contacto e interferencia. <strong>Día 3:</strong> Fuerzas y cálculo de Lewis. <strong>Día 4:</strong> Selección de módulo + resolver el Ejercicio 1 completo. <strong>Día 5:</strong> Trenes ordinarios y epicicloidales. <strong>Día 6:</strong> Práctico de reductores + ejercicios 2, 3 y 4. <strong>Día 7:</strong> Cuestionario, preguntas de desarrollo y resumen impreso.</p>
</div>

<div class="caja dato">
<p class="caja-tit">Simuladores para verlo en movimiento</p>
<p>Cuatro capítulos traen simuladores animados (se ven en PC y en el celular):</p>
<ul>
<li><strong>Geometría</strong>: las partes del diente (tocá cada una) y dos engranajes engranando, con la línea de acción y el punto de contacto.</li>
<li><strong>Trenes</strong>: un tren de dos etapas girando, con las velocidades y el sentido de cada eje.</li>
<li><strong>Epicicloidales</strong>: el planetario con sus cuatro modos (corona fija, solar fijo, brazo fijo, entrada por el brazo) y los números de Willis en vivo.</li>
</ul>
<p>Además hay diagramas nuevos del cilindro desenrollado (ángulo de hélice), de los conos primitivos y de las disposiciones de rodamientos.</p>
</div>

<div class="caja truco">
<p class="caja-tit">Cómo se guarda el progreso</p>
<p>El avance (capítulos vistos y respuestas del cuestionario) se guarda <strong>solo mientras la pestaña está abierta</strong>. Si cerrás la pestaña y volvés a abrir la guía, arranca de cero; si la dejás abierta y volvés más tarde, seguís donde estabas. Podés borrarlo a mano con <em>Reiniciar progreso</em> (abajo del índice).</p>
</div>

<h2>Nomenclatura: la misma letra en todos lados</h2>
<p>La cátedra usa esta notación. Si te la aprendés de memoria, las fórmulas se leen solas.</p>

<div class="tabla-wrap t-form t-simb">
<table class="tec">
<caption>Magnitudes, símbolos y unidades que se usan en toda la guía</caption>
<thead><tr><th>Símbolo</th><th>Qué es</th><th>Unidad</th><th>Fórmula / criterio</th></tr></thead>
<tbody>
<tr><td>$m$</td><td>Módulo (normalizado)</td><td class="num">mm</td><td>Se adopta siempre de la serie normalizada</td></tr>
<tr><td>$z$</td><td>Cantidad de dientes</td><td class="num">—</td><td>Entero; $z_1$ es el piñón (motriz)</td></tr>
<tr><td>$D_p$</td><td>Diámetro primitivo o de paso</td><td class="num">mm</td><td>$D_p = m\,z$</td></tr>
<tr><td>$d_e$</td><td>Diámetro exterior (cabeza)</td><td class="num">mm</td><td>$d_e = D_p + 2a = m(z+2)$</td></tr>
<tr><td>$d_i$</td><td>Diámetro interior / de raíz</td><td class="num">mm</td><td>$d_i = D_p - 2b = m(z-2{,}5)$</td></tr>
<tr><td>$D_b$</td><td>Diámetro de base (genera la evolvente)</td><td class="num">mm</td><td>$D_b = D_p\cos\varphi$</td></tr>
<tr><td>$p_c$</td><td>Paso circular</td><td class="num">mm</td><td>$p_c = \pi\,m$</td></tr>
<tr><td>$a,\ b$</td><td>Altura de cabeza (addendo) y de raíz (dedendo)</td><td class="num">mm</td><td>$a = m \qquad b = 1{,}25\,m$</td></tr>
<tr><td>$h_t$</td><td>Altura total del diente</td><td class="num">mm</td><td>$h_t = a + b = 2{,}25\,m$</td></tr>
<tr><td>$h_c$</td><td>Huelgo circular (backlash)</td><td class="num">mm</td><td>La cátedra adopta $h_c = \dfrac{p_c}{50}$</td></tr>
<tr><td>$t,\ v$</td><td>Espesor del diente y ancho del espacio</td><td class="num">mm</td><td>$t = \dfrac{p_c - h_c}{2} \qquad v = p_c - t$</td></tr>
<tr><td>$F$</td><td>Ancho de cara (largo del diente)</td><td class="num">mm</td><td>$7\,m \le F \le 12\,m$ &nbsp;(Fanchon)</td></tr>
<tr><td>$C$</td><td>Distancia entre centros</td><td class="num">mm</td><td>$C = \dfrac{D_{p1} + D_{p2}}{2}$</td></tr>
<tr><td>$\varphi$</td><td>Ángulo de presión</td><td class="num">°</td><td>20° en todos los ejercicios</td></tr>
<tr><td>$i$</td><td>Relación de transmisión</td><td class="num">—</td><td>$i = \dfrac{n_1}{n_2} = \dfrac{z_2}{z_1} = \dfrac{D_{p2}}{D_{p1}}$</td></tr>
<tr><td>$n,\ \omega$</td><td>Velocidad angular</td><td class="num">rpm · rad/s</td><td>$\omega = \dfrac{2\pi n}{60}$</td></tr>
<tr><td>$H$</td><td>Potencia</td><td class="num">W · kW · HP</td><td>1 HP = 745 W</td></tr>
<tr><td>$T$</td><td>Torque (par)</td><td class="num">N·m</td><td>$T = \dfrac{H}{\omega}$</td></tr>
<tr><td>$W_t,\ W_r,\ W$</td><td>Carga tangencial, radial y resultante</td><td class="num">N</td><td>$W_t = \dfrac{2T}{D_p} \qquad W = \dfrac{W_t}{\cos\varphi}$</td></tr>
<tr><td>$Y$</td><td>Factor de forma de Lewis</td><td class="num">—</td><td>Sale de la tabla según $z$</td></tr>
<tr><td>$K_v$</td><td>Factor dinámico</td><td class="num">—</td><td>Depende del tallado y de $V$ [m/s]</td></tr>
<tr><td>$\sigma$</td><td>Tensión en la raíz del diente (Lewis)</td><td class="num">MPa</td><td>$\sigma = \dfrac{K_v\,W_t}{F\,m\,Y}$</td></tr>
<tr><td>$S_t$</td><td>Tensión admisible del material (AGMA)</td><td class="num">MPa</td><td>Sale de la dureza $H_B$</td></tr>
<tr><td>$f_{seg}$</td><td>Factor de seguridad</td><td class="num">—</td><td>$f_{seg} = \dfrac{S_t}{\sigma} \ge 1{,}2$ (recomendado)</td></tr>
</tbody>
</table>
</div>

<h2>Los 8 errores que más puntos cuestan</h2>
<div class="caja ojo">
<ol>
<li><strong>Mezclar unidades.</strong> El módulo y los diámetros van en <em>mm</em>; la velocidad tangencial V va en <em>m/s</em>; la potencia en <em>W</em> para las cuentas. Si usás kW en la fórmula de σ, el resultado sale 1000 veces más chico.</li>
<li><strong>Usar el radio en vez del diámetro</strong> en W<sub>t</sub> = 2T/D<sub>p</sub>. El 2 está justamente para eso.</li>
<li><strong>Elegir mal el número de dientes para Y.</strong> Y se lee con los dientes <em>del engranaje que estás verificando</em>, no del otro.</li>
<li><strong>Equivocar la V.</strong> V = π·D<sub>p</sub>·n/60 000 con D<sub>p</sub> en mm, n en rpm y V en m/s.</li>
<li><strong>Olvidar que el torque se multiplica.</strong> En un reductor el par de salida es i veces el de entrada (menos pérdidas), no al revés.</li>
<li><strong>Confundir z con Z₂ del tren.</strong> En un tren compuesto cada eje puede tener dos ruedas solidarias: solo cuentan como motriz/conducida las que transmiten.</li>
<li><strong>Signo de la relación en planetarios.</strong> El signo sale de contar los engranes <em>exteriores</em> del tren con el brazo fijo.</li>
<li><strong>Copiar el resultado sin verificar.</strong> Siempre chequeá: ¿el módulo es normalizado? ¿f<sub>seg</sub> ≥ 1? ¿m<sub>c</sub> entre 1,2 y el máximo?</li>
</ol>
</div>

<h2>Cómo leer las fórmulas de esta guía</h2>
<p>Todas las fórmulas están escritas en notación matemática real (fracciones con línea, raíces, subíndices). Cada bloque tiene la misma estructura:</p>
<div class="f">$$ \sigma = \frac{K_v \cdot W_t}{F \cdot m \cdot Y} $$<span class="f-nota">Tensión de flexión en la raíz del diente (Lewis). σ en MPa, W<sub>t</sub> en N, F y m en mm.</span></div>
<p>Al costado o debajo aparece siempre la <strong>unidad</strong> y, cuando importa, el <strong>criterio de la cátedra</strong> (por ejemplo, h<sub>c</sub> = p<sub>c</sub>/50). Si un ejercicio del práctico usa un criterio distinto, lo vas a encontrar aclarado en el capítulo del ejercicio.</p>

<div class="caja idea">
<p class="caja-tit">
<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.5.4.8 1 .8 1.6V16h5.4v-.5c0-.6.3-1.2.8-1.6A6 6 0 0 0 12 3z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>
Para imprimir
</p>
<p>El capítulo <strong>Resumen imprimible</strong> está pensado para papel: blanco y negro, sin colores, con las fórmulas y las tablas esenciales. Con el botón <strong>Imprimir</strong> (o Ctrl+P) sale limpio, sin menús, en A4. Cualquier capítulo se puede imprimir igual.</p>
</div>
`
});

/* ------------------------------------------------------------- GEOMETRÍA */
window.CAPITULOS.push({
  id: "geometria",
  grupo: "1 · Fundamentos",
  titulo: "Geometría del diente",
  html: String.raw`
<h1>Geometría del diente</h1>
<p class="bajada">De dónde sale el módulo, qué significan cada uno de los diámetros y cómo se calcula la geometría completa de un par de engranajes. Es la base de todo lo demás: si esto sale bien, el resto del ejercicio son cuentas.</p>

<h2>Qué es un engranaje y por qué la evolvente</h2>
<p>Un engranaje es una rueda dentada que transmite movimiento y potencia a otra rueda dentada mediante el empuje de sus dientes. Para que la relación de velocidades sea <strong>constante</strong> durante todo el contacto, los perfiles de los dientes deben cumplir la <strong>ley de engrane</strong>:</p>

<div class="caja idea">
<p class="caja-tit">Ley de engrane</p>
<p>La normal común a los perfiles en el punto de contacto debe pasar siempre por el <strong>centro instantáneo de rotación</strong> (el punto primitivo P). Si se cumple, la relación de velocidades angulares es constante.</p>
</div>

<p>El perfil que cumple esto de forma natural y es fácil de fabricar es la <strong>evolvente de círculo</strong>: la curva que describe el extremo de un hilo que se desenrolla de un cilindro (el círculo de base). Sus dos propiedades prácticas son:</p>
<ul>
<li>La normal en cualquier punto es tangente al círculo de base → la línea de acción es siempre recta y el ángulo de presión es constante.</li>
<li>La distancia entre centros puede variar un poco sin cambiar la relación de transmisión (por eso el práctico puede decir "con ruedas de evolvente esto no afecta la relación").</li>
</ul>

<h2>La relación fundamental: π·D<sub>p</sub> = p·z</h2>
<p>El perímetro del círculo primitivo contiene exactamente <em>z</em> pasos. De ahí sale todo:</p>

<div class="f">$$ \pi \cdot D_p = p \cdot z \qquad\Longrightarrow\qquad m = \frac{D_p}{z} = \frac{p}{\pi} $$<span class="f-nota">Módulo m en mm. D<sub>p</sub> = diámetro primitivo [mm]. p = paso circular [mm]. z = número de dientes.</span></div>

<p>Despejando, las tres formas que vas a usar todo el tiempo:</p>
<div class="f">$$ D_p = m \cdot z \qquad\qquad p_c = \pi \cdot m \qquad\qquad z = \frac{D_p}{m} $$</div>

<div class="caja dato">
<p class="caja-tit">Sistema módulo vs. sistema paso diametral</p>
<p>En el sistema métrico se usa el <strong>módulo</strong> m [mm]. En el sistema inglés se usa el <strong>paso diametral</strong> P<sub>d</sub> [1/pulg], que es lo inverso:</p>
<div class="f">$$ P_d = \frac{z}{D_p[\text{pulg}]} = \frac{\pi}{p[\text{pulg}]} \qquad\qquad P_d\,[\text{pulg}^{-1}] \cdot m\,[\text{mm}] = 25{,}4 $$<span class="f-nota">Equivalencia útil: P<sub>d</sub>·m = 25,4. Un P<sub>d</sub> grande = dientes chicos = módulo chico.</span></div>
</div>

<h2>Nomenclatura del diente</h2>
<p>Esta es la figura que hay que saber leer. Está dibujada "desplegada" (como si fuera una cremallera) para que se vean bien las dimensiones del paso.</p>

<figure class="figura">
<svg viewBox="0 0 880 320" role="img" aria-label="Diente de engranaje desplegado con el paso circular, el espesor, el vacío, el addendo, el dedendo y la altura total">
  <!-- líneas de referencia de los círculos -->
  <line class="svg-tenue-linea" x1="100" y1="140" x2="530" y2="140" stroke-dasharray="6 4"/>
  <line class="svg-tenue-linea" x1="100" y1="180" x2="530" y2="180" stroke-dasharray="6 4"/>
  <line class="svg-tenue-linea" x1="100" y1="220" x2="530" y2="220" stroke-dasharray="2 4"/>
  <!-- material -->
  <rect x="120" y="220" width="380" height="45" fill="currentColor" fill-opacity=".06" stroke="currentColor" stroke-width="1.4"/>
  <!-- dientes -->
  <g fill="currentColor" fill-opacity=".06" stroke="currentColor" stroke-width="1.5">
    <polygon points="129,220 136,180 142,140 178,140 184,180 191,220"/>
    <polygon points="229,220 236,180 242,140 278,140 284,180 291,220"/>
    <polygon points="329,220 336,180 342,140 378,140 384,180 391,220"/>
    <polygon points="429,220 436,180 442,140 478,140 484,180 491,220"/>
  </g>
  <!-- paso circular -->
  <line class="svg-linea" x1="160" y1="88" x2="260" y2="88" stroke-width="1.2"/>
  <line class="svg-linea" x1="160" y1="82" x2="160" y2="94" stroke-width="1.2"/>
  <line class="svg-linea" x1="260" y1="82" x2="260" y2="94" stroke-width="1.2"/>
  <line class="svg-tenue-linea" x1="160" y1="96" x2="160" y2="140" stroke-dasharray="3 4"/>
  <line class="svg-tenue-linea" x1="260" y1="96" x2="260" y2="140" stroke-dasharray="3 4"/>
  <text class="svg-txt" x="210" y="80" font-size="12.5" text-anchor="middle" font-weight="600">p<tspan font-size="8.5" dy="3">c</tspan></text>
  <!-- espesor y vacío -->
  <line class="svg-linea" x1="136" y1="114" x2="236" y2="114" stroke-width="1.2"/>
  <line class="svg-linea" x1="136" y1="108" x2="136" y2="120" stroke-width="1.2"/>
  <line class="svg-linea" x1="184" y1="108" x2="184" y2="120" stroke-width="1.2"/>
  <line class="svg-linea" x1="236" y1="108" x2="236" y2="120" stroke-width="1.2"/>
  <line class="svg-tenue-linea" x1="136" y1="120" x2="136" y2="180" stroke-dasharray="3 4"/>
  <line class="svg-tenue-linea" x1="184" y1="120" x2="184" y2="180" stroke-dasharray="3 4"/>
  <line class="svg-tenue-linea" x1="236" y1="120" x2="236" y2="180" stroke-dasharray="3 4"/>
  <text class="svg-txt" x="160" y="106" font-size="12" text-anchor="middle" font-weight="600">t</text>
  <text class="svg-txt" x="210" y="106" font-size="12" text-anchor="middle" font-weight="600">v</text>
  <!-- addendo, dedendo y altura total -->
  <line class="svg-linea" x1="116" y1="140" x2="116" y2="180" stroke-width="1.2"/>
  <line class="svg-linea" x1="110" y1="140" x2="122" y2="140" stroke-width="1.2"/>
  <line class="svg-linea" x1="110" y1="180" x2="122" y2="180" stroke-width="1.2"/>
  <line class="svg-linea" x1="116" y1="180" x2="116" y2="220" stroke-width="1.2"/>
  <line class="svg-linea" x1="110" y1="220" x2="122" y2="220" stroke-width="1.2"/>
  <line class="svg-linea" x1="86" y1="140" x2="86" y2="220" stroke-width="1.2"/>
  <line class="svg-linea" x1="80" y1="140" x2="92" y2="140" stroke-width="1.2"/>
  <line class="svg-linea" x1="80" y1="220" x2="92" y2="220" stroke-width="1.2"/>
  <line class="svg-tenue-linea" x1="86" y1="140" x2="100" y2="140" stroke-dasharray="3 4"/>
  <line class="svg-tenue-linea" x1="86" y1="220" x2="100" y2="220" stroke-dasharray="3 4"/>
  <text class="svg-txt" x="110" y="165" font-size="12" text-anchor="end" font-weight="600">a</text>
  <text class="svg-txt" x="110" y="205" font-size="12" text-anchor="end" font-weight="600">b</text>
  <text class="svg-txt" x="78" y="184" font-size="12" text-anchor="middle" font-weight="600" transform="rotate(-90 78 184)">h<tspan font-size="8" dy="3">t</tspan></text>
  <!-- rótulos de los círculos -->
  <text class="svg-tenue" x="538" y="145" font-size="11">círculo de cabeza (exterior)</text>
  <text class="svg-tenue" x="538" y="185" font-size="11">círculo de paso (primitivo)</text>
  <text class="svg-tenue" x="538" y="225" font-size="11">círculo de raíz (fondo)</text>
  <text class="svg-tenue" x="120" y="300" font-size="10.5">cresta = borde superior · flanco = cara lateral del diente · valle = fondo entre dientes</text>
</svg>
<figcaption>Diente desplegado. En el diente real los círculos son concéntricos: el de cabeza por fuera, el de paso en el medio y el de raíz por dentro. El de base queda entre el de paso y el de raíz: D<sub>b</sub> = D<sub>p</sub>·cos φ.</figcaption>
</figure>

<h2>Las partes del diente, una por una</h2>
<p>Tocá cada parte para ver dónde está en el dibujo y qué significa. Es la misma figura de arriba, pero interactiva.</p>
<div data-visual="diente"></div>

<h2>Las 12 fórmulas de geometría</h2>
<p>Para un par de engranajes de dentado recto, altura completa y ángulo de presión φ = 20°:</p>

<div class="tabla-wrap">
<table class="tec">
<thead><tr><th>Variable</th><th>Fórmula</th><th>Con m = 6 mm, z = 17</th></tr></thead>
<tbody>
<tr><td>Módulo</td><td><span>$m = \dfrac{D_p}{z}$</span></td><td class="num">6 mm</td></tr>
<tr><td>Addendo (altura de cabeza)</td><td><span>$a = m$</span></td><td class="num">6 mm</td></tr>
<tr><td>Dedendo (altura de raíz)</td><td><span>$b = 1{,}25\,m$</span></td><td class="num">7,5 mm</td></tr>
<tr><td>Altura total</td><td><span>$h_t = a + b = 2{,}25\,m$</span></td><td class="num">13,5 mm</td></tr>
<tr><td>Diámetro primitivo</td><td><span>$D_p = m\,z$</span></td><td class="num">102 mm</td></tr>
<tr><td>Diámetro exterior</td><td><span>$d_e = D_p + 2a = m(z+2)$</span></td><td class="num">114 mm</td></tr>
<tr><td>Diámetro de raíz</td><td><span>$d_i = D_p - 2b = m(z - 2{,}5)$</span></td><td class="num">87 mm</td></tr>
<tr><td>Diámetro de base</td><td><span>$D_b = D_p\cos\varphi$</span></td><td class="num">95,85 mm</td></tr>
<tr><td>Paso circular</td><td><span>$p_c = \pi\,m$</span></td><td class="num">18,85 mm</td></tr>
<tr><td>Paso de base</td><td><span>$p_b = p_c\cos\varphi$</span></td><td class="num">17,71 mm</td></tr>
<tr><td>Distancia entre centros</td><td><span>$C = \dfrac{D_{p1} + D_{p2}}{2}$</span></td><td class="num">189 mm (con z₂ = 46)</td></tr>
<tr><td>Relación de transmisión</td><td><span>$i = \dfrac{n_1}{n_2} = \dfrac{z_2}{z_1} = \dfrac{D_{p2}}{D_{p1}}$</span></td><td class="num">2,7</td></tr>
</tbody>
</table>
</div>

<div class="caja ojo">
<p class="caja-tit">Ojo: diente de altura recortada</p>
<p>Si el enunciado dice <strong>altura recortada</strong> (stub tooth), cambian el addendo y el dedendo:</p>
<div class="f">$$ a = 0{,}8\,m \qquad\qquad b = m \qquad\qquad h_t = 1{,}8\,m $$</div>
<p>Todo lo demás (D<sub>p</sub>, D<sub>b</sub>, p<sub>c</sub>, C) es igual. En los prácticos de la materia siempre aparece altura completa salvo que se aclare.</p>
</div>

<h2>Espesor, vacío y huelgo circular</h2>
<p>El diente no ocupa todo el paso: hay que dejar un juego para que no se trabe (por dilatación, error de tallado y lubricación). Ese juego es el <strong>huelgo circular</strong> h<sub>c</sub> (en inglés <em>backlash</em>). La cátedra lo adopta como un valor medio entre las recomendaciones bibliográficas:</p>

<div class="f">$$ \frac{p_c}{80} \le h_c \le \frac{p_c}{40} \qquad\Longrightarrow\qquad h_c = \frac{p_c}{50} = 0{,}02\,p_c $$<span class="f-nota">Criterio de cátedra. Faires propone 0,003·m ≤ h<sub>c</sub> ≤ 0,004·m (equivalente).</span></div>

<p>Con el huelgo definido, el espesor del diente y el ancho del espacio se reparten el paso:</p>
<div class="f">$$ t = \frac{p_c - h_c}{2} \qquad\qquad v = p_c - t \qquad\qquad t + v = p_c $$</div>

<div class="resultado"><span class="r-lbl">Con m = 6 mm:</span> <span class="r-val">p<sub>c</sub> = 18,850 mm · h<sub>c</sub> = 0,377 mm · t = 9,236 mm · v = 9,613 mm</span></div>

<p>Fijate que t &gt; v apenas: el diente es un poquito más grueso que el espacio, y ese "exceso" del orden del huelgo es lo que después se reparte entre los dos engranajes.</p>

<h2>Ancho de cara F: cuatro criterios y uno es el que vale</h2>
<p>El ancho del diente (largo del flanco) no está normalizado: se adopta dentro de un rango. La cátedra pide el <strong>valor medio del rango de Fanchon</strong>:</p>

<div class="tabla-wrap">
<table class="tec">
<thead><tr><th>Autor</th><th>Recomendación</th><th>Ejemplo con m = 6 mm</th></tr></thead>
<tbody>
<tr class="destacar"><td><strong>Fanchon</strong> (el que usa la cátedra)</td><td><span>$7\,m \le F \le 12\,m$</span> → valor medio <span>$F = 9{,}5\,m$</span></td><td class="num">57 mm</td></tr>
<tr><td>Faires (Diseño de elementos de máquinas, 4ª ed., 13.12)</td><td><span>$8\,m \le F \le 12{,}5\,m$</span></td><td class="num">48 … 75 mm</td></tr>
<tr><td>Oberg-Jones (Manual Universal, ed. 14, tomo I, pág. 723)</td><td><span>$3\,p \le F \le 4\,p \;\Rightarrow\; 9{,}4\,m \le F \le 12{,}5\,m$</span></td><td class="num">56 … 75 mm</td></tr>
<tr><td>Shigley-Mischke (Diseño en Ing. Mecánica, 8ª ed., pág. 719)</td><td><span>$3\,p \le F \le 5\,p \;\Rightarrow\; 9{,}4\,m \le F \le 15{,}7\,m$</span></td><td class="num">56 … 94 mm</td></tr>
</tbody>
</table>
</div>

<div class="caja truco">
<p class="caja-tit">Por qué F es la variable "barata"</p>
<p>En la fórmula de Lewis, F está en el denominador: si aumentás F, baja σ y podés mantener el módulo. En cambio si aumentás m, σ baja con m² pero crecen todos los diámetros y la distancia entre centros. Por eso, cuando la verificación no da, <strong>primero se agranda F</strong> y recién después se sube el módulo.</p>
</div>

<h2>Módulos normalizados</h2>
<p>El módulo no se elige libre: se adopta de la serie. La primera columna son los <strong>preferidos</strong> (los que aparecen en los prácticos); la segunda, la alternativa.</p>

<div class="grid2">
<div class="tabla-wrap">
<table class="tec compacta">
<caption>Módulos normalizados [mm]</caption>
<thead><tr><th>Serie preferida</th><th>2ª opción</th></tr></thead>
<tbody>
<tr><td class="num">1 · 1,25 · 1,5 · 2</td><td class="num">1,125 · 1,375 · 1,75 · 2,25</td></tr>
<tr><td class="num">2,5 · 3 · 4 · 5</td><td class="num">2,75 · 3,5 · 4,5 · 5,5</td></tr>
<tr><td class="num">6 · 8 · 10 · 12</td><td class="num">7 · 9 · 11 · 14</td></tr>
<tr><td class="num">16 · 20 · 25 · 32 · 40</td><td class="num">18 · 22 · 28 · 36 · 45</td></tr>
</tbody>
</table>
</div>
<div class="tabla-wrap">
<table class="tec compacta">
<caption>Paso diametral [1/pulg]</caption>
<thead><tr><th>Bastos</th><th>Finos</th></tr></thead>
<tbody>
<tr><td class="num">2 · 2,25 · 2,5 · 3</td><td class="num">20 · 24 · 32 · 40</td></tr>
<tr><td class="num">4 · 6 · 8 · 10</td><td class="num">48 · 64 · 80 · 96</td></tr>
<tr><td class="num">12 · 16</td><td class="num">120 · 150</td></tr>
</tbody>
</table>
</div>
</div>

<div class="caja idea">
<p class="caja-tit">Regla práctica</p>
<p>Si el cálculo te da m = 5,3 mm, no podés usar 5,3: adoptás <strong>6 mm</strong> (el normalizado inmediato superior) y verificás. Si adoptás el inferior, el diente queda más solicitado que lo calculado.</p>
</div>

<h2>Simulador: cómo engranan dos ruedas</h2>
<p>Cambiá los dientes, el módulo y la velocidad y mirá en vivo qué pasa con la relación, la distancia entre centros y el sentido de giro. Las circunferencias de trazo son los círculos primitivos; la recta inclinada es la <strong>línea de acción</strong>, que forma el ángulo de presión φ con la tangente.</p>
<div data-visual="par"></div>

<h2>Calculadora de geometría</h2>
<p>Cambiá los datos y te sale toda la geometría del par. Usala para chequear tus cuentas de los prácticos.</p>

<div class="calc" id="calc-geo">
  <h3>Geometría de un par de engranajes</h3>
  <div class="calc-campos">
    <div class="campo"><label for="g-m">Módulo m [mm]</label><input id="g-m" type="number" step="0.25" value="6"></div>
    <div class="campo"><label for="g-z1">Dientes piñón z₁</label><input id="g-z1" type="number" step="1" value="17"></div>
    <div class="campo"><label for="g-z2">Dientes rueda z₂</label><input id="g-z2" type="number" step="1" value="46"></div>
    <div class="campo"><label for="g-n1">n₁ [rpm]</label><input id="g-n1" type="number" step="10" value="800"></div>
    <div class="campo"><label for="g-fi">Ángulo de presión φ [°]</label><input id="g-fi" type="number" step="0.5" value="20"></div>
  </div>
  <div class="calc-salida" id="g-salida"></div>
</div>

<h2>Checklist del capítulo</h2>
<div class="caja">
<ul>
<li>¿Sabés de memoria D<sub>p</sub> = m·z, d<sub>e</sub> = D<sub>p</sub> + 2m, d<sub>i</sub> = D<sub>p</sub> − 2,5m, D<sub>b</sub> = D<sub>p</sub>·cos φ?</li>
<li>¿Podés explicar por qué D<sub>b</sub> &lt; D<sub>p</sub> pero D<sub>b</sub> &gt; d<sub>i</sub>?</li>
<li>¿Sabés de dónde sale h<sub>c</sub> = p<sub>c</sub>/50 y cómo se reparte entre t y v?</li>
<li>¿Recordás el rango de Fanchon y el valor medio 9,5·m?</li>
<li>¿Tenés clara la diferencia entre módulo y paso diametral (P<sub>d</sub>·m = 25,4)?</li>
</ul>
</div>
`
});
