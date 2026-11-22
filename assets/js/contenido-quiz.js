/* =========================================================================
   CONTENIDO · 5. ESTUDIO
   Capítulos: quiz, desarrollo + bancos de preguntas
   ========================================================================= */
window.CAPITULOS = window.CAPITULOS || [];

window.CAPITULOS.push({
  id: "quiz",
  grupo: "5 · Estudio",
  titulo: "Cuestionario (multiple choice)",
  html: String.raw`
<h1>Cuestionario de teoría</h1>
<p class="bajada">78 preguntas de multiple choice con la explicación de cada respuesta. Elegí un tema o hacelas todas: el progreso se guarda en el navegador y podés volver donde dejaste.</p>

<div class="caja idea no-print">
<p class="caja-tit">Cómo usarlo</p>
<ul>
<li>Marcá una opción: te dice al instante si está bien y <strong>por qué</strong>.</li>
<li>Al final ves el porcentaje, la lista de las que fallaste y podés repetir solo el tema que te cuesta.</li>
<li>Si querés respuestas para desarrollar de puño y letra, andá a <strong>Preguntas de desarrollo</strong>.</li>
</ul>
</div>

<div class="chips no-print" id="quiz-temas"></div>
<div class="quiz" id="quiz-caja"></div>
`
});

window.CAPITULOS.push({
  id: "desarrollo",
  grupo: "5 · Estudio",
  titulo: "Preguntas de desarrollo",
  html: String.raw`
<h1>Preguntas de desarrollo</h1>
<p class="bajada">Las preguntas "de fundamento" que se toman en el oral o en el escrito: no se contestan con una fórmula sino explicando el por qué. Cada una tiene una respuesta modelo para comparar con la tuya.</p>

<div class="caja truco">
<p class="caja-tit">Cómo estudiar estas preguntas</p>
<p>Tapá la respuesta, contestá en voz alta en 3 o 4 frases, y después compará. Si tu respuesta coincide en las ideas clave (no en las palabras), está bien. Las respuestas modelo están escritas como las escribiría un alumno que aprobó, no como un libro.</p>
</div>

<div id="desarrollo-lista"></div>
`
});

/* =========================================================================
   BANCO DE PREGUNTAS — MULTIPLE CHOICE
   ========================================================================= */
window.PREGUNTAS = [
/* --- Geometría --- */
{
  tema: "Geometría",
  p: "¿Cuál es la relación correcta entre módulo, diámetro primitivo y número de dientes?",
  ops: ["$m = D_p \\cdot z$", "$m = \\dfrac{D_p}{z}$", "$m = \\dfrac{z}{D_p}$", "$m = \\pi \\cdot D_p \\cdot z$"],
  ok: 1,
  exp: "El perímetro del círculo primitivo contiene z pasos: $\\pi D_p = p z$. Dividiendo por $\\pi z$ queda $m = \\dfrac{D_p}{z} = \\dfrac{p}{\\pi}$. Es la definición de módulo."
},
{
  tema: "Geometría",
  p: "Un engranaje de módulo 4 mm y 25 dientes tiene un diámetro primitivo de:",
  ops: ["6,25 mm", "29 mm", "100 mm", "104 mm"],
  ok: 2,
  exp: "D<sub>p</sub> = m·z = 4 · 25 = 100 mm. Con 104 estarías sumando el addendo (diámetro exterior), y 6,25 sale de dividir en lugar de multiplicar."
},
{
  tema: "Geometría",
  p: "Para un diente de altura completa, el addendo (altura de cabeza) vale:",
  ops: ["a = 0,8·m", "a = m", "a = 1,25·m", "a = 2,25·m"],
  ok: 1,
  exp: "a = m. El dedendo es b = 1,25·m (incluye el huelgo) y la altura total h<sub>t</sub> = 2,25·m. El 0,8·m corresponde al diente de altura recortada."
},
{
  tema: "Geometría",
  p: "El diámetro de raíz (interior) de un engranaje de m = 6 mm y z = 17 es:",
  ops: ["102 mm", "90 mm", "87 mm", "114 mm"],
  ok: 2,
  exp: "d<sub>i</sub> = D<sub>p</sub> − 2b = 102 − 2(1,25·6) = 102 − 15 = 87 mm. Si usás 2a en lugar de 2b te da 90 mm, que es un error típico."
},
{
  tema: "Geometría",
  p: "El diámetro de base de un engranaje, con φ = 20°, es:",
  ops: ["Mayor que el exterior", "Igual al primitivo", "Menor que el primitivo pero mayor que el de raíz", "Menor que el de raíz"],
  ok: 2,
  exp: "D<sub>b</sub> = D<sub>p</sub>·cos φ. Como cos 20° = 0,9397, el de base es un 6 % menor que el primitivo. Y como d<sub>i</sub> = D<sub>p</sub> − 2,5m es bastante menor, el orden siempre es d<sub>i</sub> &lt; D<sub>b</sub> &lt; D<sub>p</sub> &lt; d<sub>e</sub>."
},
{
  tema: "Geometría",
  p: "El huelgo circular que adopta la cátedra es:",
  ops: ["$h_c = \\dfrac{p_c}{80}$", "$h_c = \\dfrac{p_c}{50}$", "$h_c = \\dfrac{p_c}{40}$", "$h_c = 0{,}1\\,p_c$"],
  ok: 1,
  exp: "La cátedra toma el valor medio del rango $\\dfrac{p_c}{80} \\ldots \\dfrac{p_c}{40}$, o sea $h_c = \\dfrac{p_c}{50} = 0{,}02\\,p_c$. Con m = 6: $h_c = 0{,}377$ mm."
},
{
  tema: "Geometría",
  p: "Con el huelgo definido, el espesor del diente y el ancho del espacio cumplen:",
  ops: ["t = v = p<sub>c</sub>/2 exactamente", "t = (p<sub>c</sub> − h<sub>c</sub>)/2 y v = p<sub>c</sub> − t", "t = p<sub>c</sub> − h<sub>c</sub> y v = h<sub>c</sub>", "t = p<sub>c</sub> + h<sub>c</sub>"],
  ok: 1,
  exp: "Se reparte el paso menos el huelgo en dos partes iguales: t = (p<sub>c</sub> − h<sub>c</sub>)/2. Después v = p<sub>c</sub> − t, que da un poco menos que t. La suma t + v = p<sub>c</sub> siempre."
},
{
  tema: "Geometría",
  p: "La distancia entre centros de un par m = 6, z₁ = 17, z₂ = 46 es:",
  ops: ["189 mm", "378 mm", "102 mm", "204 mm"],
  ok: 0,
  exp: "C = m(z₁+z₂)/2 = 6·63/2 = 189 mm. El 378 es el doble (confundir radio con diámetro) y 102 es solo el D<sub>p1</sub>."
},
{
  tema: "Geometría",
  p: "El paso circular de un engranaje de módulo 6 mm es:",
  ops: ["6 mm", "18,85 mm", "9,42 mm", "37,7 mm"],
  ok: 1,
  exp: "p<sub>c</sub> = π·m = 3,14159 · 6 = 18,85 mm. Ojo: el módulo no es el paso, es el paso dividido π."
},
{
  tema: "Geometría",
  p: "El ancho de cara recomendado por Fanchon (valor medio) es:",
  ops: ["F = 5·m", "F = 7·m", "F = 9,5·m", "F = 15·m"],
  ok: 2,
  exp: "Fanchon propone 7m ≤ F ≤ 12m; el valor medio del intervalo es (7+12)/2 = 9,5·m. Con m = 6 da F = 57 mm."
},
{
  tema: "Geometría",
  p: "Si un cálculo da un módulo de 5,3 mm, el valor que se adopta es:",
  ops: ["5,3 mm exactos", "5 mm", "6 mm", "8 mm"],
  ok: 2,
  exp: "Siempre se adopta el módulo normalizado inmediato superior: 6 mm. Adoptar 5 mm dejaría el diente más solicitado que lo calculado."
},
{
  tema: "Geometría",
  p: "El paso diametral P<sub>d</sub> se relaciona con el módulo por:",
  ops: ["P<sub>d</sub> = 25,4·m", "P<sub>d</sub>·m = 25,4", "P<sub>d</sub> = m/25,4", "No tienen relación"],
  ok: 1,
  exp: "P<sub>d</sub> = z/D<sub>p</sub>[pulg] = π/p[pulg], así que P<sub>d</sub>·m = 25,4. Un P<sub>d</sub> grande significa dientes chicos, o sea módulo chico."
},

/* --- Contacto --- */
{
  tema: "Contacto e interferencia",
  p: "Una relación de contacto m<sub>c</sub> = 1,65 significa que:",
  ops: ["Engranan siempre 1,65 pares de dientes", "El 65 % del tiempo engranan 2 pares y el 35 %, 1 par", "El 65 % del tiempo engrana 1 par y el 35 %, ninguno", "Hay interferencia"],
  ok: 1,
  exp: "La parte entera indica los pares que engranan siempre (1) y la decimal la fracción de tiempo con un par más (0,65 → 65 % del tiempo, 2 pares)."
},
{
  tema: "Contacto e interferencia",
  p: "El valor mínimo práctico recomendado para la relación de contacto es:",
  ops: ["1,0", "1,2", "1,5", "2,0"],
  ok: 1,
  exp: "El mínimo teórico es 1 (por debajo hay instantes sin contacto), pero en la práctica se exige m<sub>c</sub> ≥ 1,2 para evitar vibraciones por el cambio de par de dientes."
},
{
  tema: "Contacto e interferencia",
  p: "En la fórmula de la relación de contacto, el denominador es:",
  ops: ["p<sub>c</sub>", "p<sub>c</sub>·cos φ", "p<sub>c</sub>/cos φ", "p<sub>c</sub>·sen φ"],
  ok: 1,
  exp: "Es el paso de base p<sub>b</sub> = p<sub>c</sub>·cos φ, porque la longitud de la línea de acción se mide sobre la línea de presión, no sobre la circunferencia primitiva."
},
{
  tema: "Contacto e interferencia",
  p: "El número mínimo de dientes de un piñón con φ = 20° para no tener interferencia es:",
  ops: ["12", "15", "17", "25"],
  ok: 2,
  exp: "z<sub>mín</sub> = 2/sen²φ = 2/0,11698 ≈ 17,1 → 17 dientes. Con 14,5° el mínimo sube a 32; con 25° baja a 12."
},
{
  tema: "Contacto e interferencia",
  p: "La interferencia ocurre cuando:",
  ops: ["El piñón tiene más dientes que la rueda", "El contacto se produce por debajo del círculo de base, donde no hay evolvente", "El huelgo es demasiado grande", "La relación de contacto es mayor que 2"],
  ok: 1,
  exp: "La evolvente solo existe fuera del círculo de base. Si el diente toca antes de esa zona, el flanco no es evolvente y el piñón socava la raíz de la rueda: eso es interferencia."
},
{
  tema: "Contacto e interferencia",
  p: "Una relación de contacto de 0,95 provoca:",
  ops: ["Nada, es aceptable", "Vibraciones porque hay instantes sin ningún diente en contacto", "Interferencia en la raíz", "Sobrecalentamiento del aceite"],
  ok: 1,
  exp: "Con m<sub>c</sub> &lt; 1 hay un 5 % del tiempo en que ningún par de dientes está en contacto: el engranaje golpetea y vibra. Por eso no se acepta."
},
{
  tema: "Contacto e interferencia",
  p: "¿Qué pasa con el número mínimo de dientes si se aumenta el ángulo de presión?",
  ops: ["Aumenta", "Disminuye", "No cambia", "Se hace infinito"],
  ok: 1,
  exp: "z<sub>mín</sub> = 2/sen²φ: al aumentar φ, sen²φ crece y z<sub>mín</sub> baja (con 25° se puede usar 12 dientes). El precio es una mayor carga radial."
},
{
  tema: "Contacto e interferencia",
  p: "El límite superior de la relación de contacto vale:",
  ops: ["m<sub>c</sub> ≤ 2 siempre", "m<sub>c</sub> ≤ (C/p<sub>c</sub>)·tan φ", "m<sub>c</sub> ≤ z₁/z₂", "No tiene límite"],
  ok: 1,
  exp: "El contacto no puede salirse de la zona de evolvente, y eso impone m<sub>c</sub> ≤ (C/p<sub>c</sub>)·tan φ = (z₁+z₂)/(2π)·tan φ. Superarlo significaría interferencia."
},

/* --- Fuerzas --- */
{
  tema: "Fuerzas y potencia",
  p: "La potencia transmitida se calcula como:",
  ops: ["H = T/ω", "H = T·ω", "H = T·ω²", "H = W<sub>t</sub>·ω"],
  ok: 1,
  exp: "Potencia = par × velocidad angular, con T en N·m y ω en rad/s. De ahí sale T = H/ω, que es lo que se usa para hallar el torque."
},
{
  tema: "Fuerzas y potencia",
  p: "¿Cuánto vale la velocidad angular de un eje que gira a 800 rpm?",
  ops: ["800 rad/s", "83,78 rad/s", "5026 rad/s", "12,73 rad/s"],
  ok: 1,
  exp: "ω = 2π·n/60 = 2π·800/60 = 83,78 rad/s. El factor es 0,10472 por rpm."
},
{
  tema: "Fuerzas y potencia",
  p: "La fuerza tangencial sobre el diente es:",
  ops: ["$W_t = T \\cdot D_p$", "$W_t = \\dfrac{2T}{D_p}$", "$W_t = \\dfrac{T}{D_p}$", "$W_t = 2T \\cdot D_p$"],
  ok: 1,
  exp: "El par es fuerza por radio: T = W<sub>t</sub>·(D<sub>p</sub>/2). Despejando, $W_t = \\dfrac{2T}{D_p}$. El 2 aparece porque se usa el diámetro y no el radio."
},
{
  tema: "Fuerzas y potencia",
  p: "Con φ = 20°, la fuerza radial respecto de la tangencial es aproximadamente:",
  ops: ["10 %", "36 %", "100 %", "264 %"],
  ok: 1,
  exp: "W<sub>r</sub> = W<sub>t</sub>·tan 20° = 0,364·W<sub>t</sub>, o sea un 36 %. La resultante W = W<sub>t</sub>/cos 20° = 1,064·W<sub>t</sub>, solo un 6 % mayor que la tangencial."
},
{
  tema: "Fuerzas y potencia",
  p: "¿Qué fuerza se usa para verificar el diente con Lewis?",
  ops: ["La resultante W", "La radial W<sub>r</sub>", "La tangencial W<sub>t</sub>", "La axial W<sub>a</sub>"],
  ok: 2,
  exp: "Lewis usa la tangencial, porque es la que produce el momento flector en la raíz. La resultante W se usa para verificar el árbol y los rodamientos."
},
{
  tema: "Fuerzas y potencia",
  p: "En un reductor, al reducir la velocidad:",
  ops: ["El par disminuye en la misma proporción", "El par se multiplica por la relación de transmisión", "El par no cambia", "La potencia aumenta"],
  ok: 1,
  exp: "H = T·ω se conserva (salvo pérdidas): si ω baja, T sube en la misma proporción. T<sub>salida</sub> = T<sub>entrada</sub>·i·η."
},
{
  tema: "Fuerzas y potencia",
  p: "Un motor de 15 HP equivale a:",
  ops: ["11,0 kW", "11 175 W", "15 kW", "1118 W"],
  ok: 1,
  exp: "1 HP = 745 W, así que 15 HP = 11 175 W = 11,2 kW. (Si usás 736 W/HP, típico del CV, la diferencia es del 1 %.)"
},
{
  tema: "Fuerzas y potencia",
  p: "Si el torque en el árbol es 1200 N·m y el D<sub>p</sub> = 102 mm, la fuerza tangencial vale:",
  ops: ["11 765 N", "23 529 N", "122 400 N", "1176 N"],
  ok: 1,
  exp: "$W_t = \\dfrac{2T}{D_p} = \\dfrac{2 \\cdot 1200}{0{,}102} = 23\\,529$ N. El 11 765 sale de dividir por el diámetro sin el 2 (o de usar el radio como diámetro)."
},

/* --- Lewis --- */
{
  tema: "Cálculo de Lewis",
  p: "La ecuación de Lewis para el sistema módulo es:",
  ops: ["$\\sigma = \\dfrac{W_t}{F\\,m\\,Y}$", "$\\sigma = \\dfrac{K_v\\,W_t}{F\\,m\\,Y}$", "$\\sigma = K_v\\,W_t \\cdot F\\,m\\,Y$", "$\\sigma = \\dfrac{F\\,m\\,Y}{W_t}$"],
  ok: 1,
  exp: "$\\sigma = \\dfrac{K_v\\,W_t}{F\\,m\\,Y}$. $K_v$ es el factor dinámico, siempre mayor que 1: aumenta la tensión respecto del caso estático."
},
{
  tema: "Cálculo de Lewis",
  p: "El factor de forma Y se elige en función de:",
  ops: ["El módulo", "El ancho de cara", "El número de dientes del engranaje que se verifica", "La potencia"],
  ok: 2,
  exp: "Y depende solo de la forma del diente, o sea de z (y del ángulo de presión). Se lee con los dientes del engranaje que estás verificando; si no está en la tabla, se interpola."
},
{
  tema: "Cálculo de Lewis",
  p: "Si se duplica el ancho de cara F, la tensión σ:",
  ops: ["Se duplica", "Se reduce a la mitad", "Se reduce a la cuarta parte", "No cambia"],
  ok: 1,
  exp: "σ es inversamente proporcional a F. Por eso, cuando la verificación no da, agrandar F es la corrección más barata: no cambia ningún diámetro."
},
{
  tema: "Cálculo de Lewis",
  p: "Si se duplica el módulo m manteniendo la potencia y las rpm, la tensión σ aproximadamente:",
  ops: ["Se reduce a la mitad", "Se reduce a la cuarta parte", "No cambia", "Se duplica"],
  ok: 1,
  exp: "Al subir m, el diámetro primitivo crece (y con él el radio), así que W<sub>t</sub> baja como 1/m; y el denominador F·m·Y también crece como m. El resultado es σ ∝ 1/m²."
},
{
  tema: "Cálculo de Lewis",
  p: "El esfuerzo de flexión permisible S<sub>t</sub> para AISI 4140 grado 2 (figura 14-3) es:",
  ops: ["$S_t = 0{,}533\\,H_B + 88{,}3$", "$S_t = 0{,}703\\,H_B + 113$", "$S_t = 0{,}749\\,H_B + 110$", "$S_t = 0{,}568\\,H_B + 83{,}8$"],
  ok: 2,
  exp: "Para acero nitrurado AISI 4140/4340 grado 2 (figura 14-3): S<sub>t</sub> = 0,749·H<sub>B</sub> + 110 MPa. Con 350 HB da 372,15 MPa. Las otras fórmulas son el grado 1 del 4140 y los grados de la figura 14-2."
},
{
  tema: "Cálculo de Lewis",
  p: "Un factor de seguridad de 1,398 significa que:",
  ops: ["El engranaje dura 1,398 veces más", "La tensión admisible es 1,398 veces la tensión actuante", "El engranaje tiene 1,398 % de margen", "La potencia se puede aumentar 1,398 veces sin romper, pero no es recomendable"],
  ok: 1,
  exp: "f<sub>seg</sub> = S<sub>t</sub>/σ: cuántas veces la tensión admisible supera a la actuante. Un 1,398 deja un 40 % de margen: verifica."
},
{
  tema: "Cálculo de Lewis",
  p: "Para z = 25 dientes, el factor de forma Y (interpolando) vale:",
  ops: ["0,322", "0,337", "0,3415", "0,346"],
  ok: 2,
  exp: "La tabla no trae 25. Se interpola entre z = 24 (0,337) y z = 26 (0,346): Y = 0,337 + (1/2)(0,346 − 0,337) = 0,3415. 0,322 es el de 20 dientes y 0,346 el de 26."
},
{
  tema: "Cálculo de Lewis",
  p: "La velocidad tangencial para el factor dinámico se calcula como:",
  ops: ["V = π·D<sub>p</sub>·n", "V = π·D<sub>p</sub>·n/60 000", "V = 2π·n/60", "V = D<sub>p</sub>·n/60"],
  ok: 1,
  exp: "Con D<sub>p</sub> en mm y n en rpm, V = π·D<sub>p</sub>·n/60 000 da m/s. El 60 000 viene de pasar rpm a s y mm a m."
},
{
  tema: "Cálculo de Lewis",
  p: "Si el enunciado dice que los dientes son 'generados con fresa madre', el factor dinámico es:",
  ops: ["$K_v = \\dfrac{3{,}05 + V}{3{,}05}$", "$K_v = \\dfrac{6{,}1 + V}{6{,}1}$", "$K_v = \\dfrac{3{,}56 + \\sqrt{V}}{3{,}56}$", "$K_v = \\sqrt{\\dfrac{5{,}56 + \\sqrt{V}}{5{,}56}}$"],
  ok: 2,
  exp: "Fresa madre = creadora = perfil generado: K<sub>v</sub> = (3,56 + √V)/3,56. La de 6,1 es para cortado/fresado y la raíz cuadrada para rectificado."
},
{
  tema: "Cálculo de Lewis",
  p: "Si σ = 281 MPa y S<sub>t</sub> = 375 MPa, el factor de seguridad y su lectura son:",
  ops: ["0,75 → no verifica", "1,33 → verifica", "1,33 → no verifica", "0,75 → verifica"],
  ok: 1,
  exp: "f<sub>seg</sub> = 375/281 = 1,33. Al ser mayor que 1 (y que el mínimo práctico 1,2) verifica, con un margen del 33 %."
},
{
  tema: "Cálculo de Lewis",
  p: "Si la verificación de Lewis no da, la primera corrección recomendada es:",
  ops: ["Aumentar el ancho de cara F", "Aumentar el módulo", "Disminuir la potencia", "Cambiar el ángulo de presión"],
  ok: 0,
  exp: "Aumentar F baja σ linealmente sin cambiar ningún diámetro ni la distancia entre centros (siempre que no se pase de 12·m). Subir el módulo es más caro: agranda todo."
},

/* --- Módulo --- */
{
  tema: "Selección de módulo",
  p: "El ábaco de selección de módulo de la cátedra está construido con:",
  ops: ["z₁ = 17, F = 7m, tallado con creadora", "z₁ = 25, F = 10m, fresado", "z₁ = 12, F = 5m, moldeado", "z₁ = 17, F = 12m, rectificado"],
  ok: 0,
  exp: "Las hipótesis son z₁ = 17 (mínimo sin interferencia), F = 7m (mínimo de Fanchon), tallado con creadora y una hoja por cada tensión admisible."
},
{
  tema: "Selección de módulo",
  p: "Para entrar al ábaco se necesitan:",
  ops: ["El módulo y la potencia", "La velocidad del eje motriz y la potencia", "El diámetro primitivo y el ancho de cara", "La relación de transmisión y los dientes"],
  ok: 1,
  exp: "Las abscisas son n₁ [rpm] y las ordenadas la potencia [kW]. La relación de transmisión no interviene en el predimensionamiento del módulo."
},
{
  tema: "Selección de módulo",
  p: "Si el punto de operación cae entre las rectas de m = 5 y m = 6, se adopta:",
  ops: ["m = 5", "m = 5,5", "m = 6", "El promedio 5,5"],
  ok: 2,
  exp: "Se adopta el módulo normalizado inmediato superior (6). Los módulos son discretos: los valores intermedios no existen como norma, salvo en la serie de segunda opción."
},
{
  tema: "Selección de módulo",
  p: "La tensión admisible que se usa en el ábaco es la del material del:",
  ops: ["Eje", "Engranaje (diente)", "Rodamiento", "Bastidor"],
  ok: 1,
  exp: "Es la tensión admisible a flexión del material del engranaje, porque el ábaco sale de la ecuación de Lewis aplicada al diente."
},
{
  tema: "Selección de módulo",
  p: "En la fórmula m³ = 2000·H·K<sub>v</sub>/(ω·z₁·k·Y·S<sub>adm</sub>), la constante 2000 aparece por:",
  ops: ["Convertir HP a W", "Convertir mm a m en la expresión de W<sub>t</sub> = 2H/(ω·D<sub>p</sub>)", "Un factor de seguridad", "La densidad del acero"],
  ok: 1,
  exp: "D<sub>p</sub> = m·z₁ está en mm y hay que pasarlo a metros para que W<sub>t</sub> = 2H/(ω·D<sub>p</sub>) dé newton: 2/(m/1000) = 2000/m."
},

/* --- Trenes --- */
{
  tema: "Trenes",
  p: "En un tren ordinario simple, las ruedas intermedias (locas):",
  ops: ["Multiplican la relación", "No influyen en el valor de la relación, pero cambian el sentido de giro", "Reducen el rendimiento a la mitad", "Deben tener distinto módulo"],
  ok: 1,
  exp: "Se cancelan en la productoria ∏ de dientes. Sirven para invertir el sentido final o para salvar distancia entre ejes. En un tren simple todas las ruedas deben tener el mismo módulo."
},
{
  tema: "Trenes",
  p: "En un tren simple, ¿qué condición deben cumplir las ruedas?",
  ops: ["Todas el mismo número de dientes", "Todas el mismo módulo", "Todas el mismo ancho de cara", "Ninguna condición"],
  ok: 1,
  exp: "Para que dos ruedas engranen necesitan el mismo módulo (y el mismo ángulo de presión). Los dientes pueden ser distintos."
},
{
  tema: "Trenes",
  p: "La relación de un tren compuesto se calcula como:",
  ops: ["Productoria ∏ de las motrices sobre la de las conducidas", "Productoria ∏ de las conducidas sobre la de las motrices", "Suma de dientes conducidos", "Diferencia entre la primera y la última rueda"],
  ok: 1,
  exp: "i = n<sub>e</sub>/n<sub>s</sub> = ∏z<sub>conducidas</sub> / ∏z<sub>motrices</sub>. Si i &gt; 1 hay reducción (la salida gira más lento); si i &lt; 1, multiplicación."
},
{
  tema: "Trenes",
  p: "En un tren compuesto, los módulos de los distintos pares:",
  ops: ["Deben ser iguales", "Pueden ser distintos", "Deben ser múltiplos", "Deben ser iguales solo si los ejes son coaxiales"],
  ok: 1,
  exp: "Cada par necesita el mismo módulo dentro del par, pero entre pares puede cambiar. Es más: conviene que el par de salida tenga más módulo porque transmite más par."
},
{
  tema: "Trenes",
  p: "En un tren compuesto recurrente (coaxial) se cumple que:",
  ops: ["z₂ + z₃ = z₄ + z₅", "z₁ = z₄", "Todos los módulos son iguales", "i = 1"],
  ok: 0,
  exp: "Para que los ejes de entrada y salida sean coaxiales, las dos etapas deben tener la misma distancia entre centros: r₂ + r₃ = r₄ + r₅, o sea m<sub>A</sub>(z₂+z₃) = m<sub>B</sub>(z₄+z₅)."
},
{
  tema: "Trenes",
  p: "Un tren con tres pares de engranajes exteriores transmite el giro:",
  ops: ["En el mismo sentido", "En sentido opuesto", "No transmite", "Depende del módulo"],
  ok: 1,
  exp: "Cada par exterior invierte el sentido. Con tres inversiones (número impar) el eje de salida gira al revés que el de entrada."
},
{
  tema: "Trenes",
  p: "En un reductor ideal, la potencia de salida respecto de la de entrada es:",
  ops: ["Mayor, porque el par aumenta", "Igual", "Menor, porque la velocidad baja", "No se puede saber"],
  ok: 1,
  exp: "Sin pérdidas la potencia se conserva: H = T·ω. Lo que cambia es el reparto: el par sube y la velocidad baja en la misma proporción."
},
{
  tema: "Trenes",
  p: "Un tren cuya salida gira a 89,6 rad/s cuando la entrada gira a 40 rad/s es:",
  ops: ["Un reductor con i = 0,446", "Un multiplicador: el par de salida es menor que el de entrada", "Un reductor con i = 2,24", "Imposible físicamente"],
  ok: 1,
  exp: "Si la salida gira más rápido, es un multiplicador y el par se reduce en la misma proporción. Confundir esto es el error más común del práctico de reductores."
},

/* --- Planetarios --- */
{
  tema: "Planetarios",
  p: "La fórmula de Willis para trenes epicicloidales es:",
  ops: ["(n<sub>e</sub> − n<sub>ps</sub>)/(n<sub>s</sub> − n<sub>ps</sub>) = i₀", "(n<sub>e</sub> + n<sub>ps</sub>)/(n<sub>s</sub> + n<sub>ps</sub>) = i₀", "n<sub>e</sub>/n<sub>s</sub> = i₀", "(n<sub>e</sub>·n<sub>ps</sub>)/n<sub>s</sub> = i₀"],
  ok: 0,
  exp: "Se plantea todo respecto del brazo: la relación de velocidades relativas al brazo es la que tendría el tren si el brazo estuviera fijo (i₀)."
},
{
  tema: "Planetarios",
  p: "En Willis, i₀ es:",
  ops: ["La relación de transmisión total", "La relación que tendría el tren con el brazo fijo", "La velocidad del brazo", "El número de satélites"],
  ok: 1,
  exp: "i₀ se calcula como un tren ordinario (productoria ∏ de conducidas sobre la de motrices) imaginando el brazo bloqueado. Su signo sale de contar los engranes exteriores."
},
{
  tema: "Planetarios",
  p: "Para determinar el signo de i₀ se cuentan:",
  ops: ["Los satélites", "Los engranes exteriores del camino", "Las coronas", "Los dientes del solar"],
  ok: 1,
  exp: "Cada engrane exterior invierte el sentido: un número par da i₀ positivo y un número impar, negativo. Los engranes interiores (coronas) no invierten."
},
{
  tema: "Planetarios",
  p: "Con la corona fija y entrada por el solar, la velocidad del brazo es:",
  ops: ["$n_{ps} = n_{solar}\\dfrac{z_{solar}}{z_{solar}+z_{corona}}$", "$n_{ps} = n_{solar}\\dfrac{z_{corona}}{z_{solar}}$", "$n_{ps} = n_{solar}$", "$n_{ps} = n_{solar}(z_{corona}-z_{solar})$"],
  ok: 0,
  exp: "Sale de Willis con $n_{corona} = 0$: $n_{ps} = n_{solar}\\dfrac{z_{solar}}{z_{solar}+z_{corona}}$. Con $z_s = 20$ y $z_c = 80$, la salida es 5 veces más lenta."
},
{
  tema: "Planetarios",
  p: "La condición geométrica de un planetario simple es:",
  ops: ["z<sub>corona</sub> = z<sub>solar</sub> + z<sub>satélite</sub>", "z<sub>corona</sub> = z<sub>solar</sub> + 2·z<sub>satélite</sub>", "z<sub>corona</sub> = 2·z<sub>solar</sub>", "z<sub>satélite</sub> = z<sub>solar</sub>"],
  ok: 1,
  exp: "El diámetro de la corona es el del solar más dos veces el del satélite (el satélite está a un lado y al otro del eje). Si no se cumple, el tren no se puede armar."
},
{
  tema: "Planetarios",
  p: "Un tren epicicloidal tiene:",
  ops: ["Un grado de libertad", "Dos grados de libertad", "Tres grados de libertad", "Ninguno"],
  ok: 1,
  exp: "Tiene dos: para que la salida sea predecible hay que fijar o accionar dos de sus tres elementos (solar, corona, brazo). Es la diferencia con el tren ordinario, que tiene uno."
},
{
  tema: "Planetarios",
  p: "En el método tabular, las tres filas son:",
  ops: ["Entrada, salida, pérdidas", "Movimiento con el brazo, movimiento relativo (brazo fijo) y movimiento total", "Velocidad, par, potencia", "Solar, satélite, corona"],
  ok: 1,
  exp: "Se da +1 a todo (movimiento con el brazo), se calcula el movimiento relativo con el brazo bloqueado y se suma. La columna del brazo queda en 0 en la fila relativa."
},
{
  tema: "Planetarios",
  p: "Si el brazo queda fijo, el tren epicicloidal:",
  ops: ["Se bloquea", "Se comporta como un tren ordinario", "Duplica la velocidad", "No transmite par"],
  ok: 1,
  exp: "Con el brazo fijo no hay movimiento planetario: los ejes de los satélites quedan quietos y el tren funciona como un tren ordinario. Es el caso que define i₀."
},
{
  tema: "Planetarios",
  p: "Un planetario con z₂ = 49, z₄ = 47, z₅ = 48 y el engrane 6 fijo, con 53 rpm de entrada, da una salida de:",
  ops: ["Aproximadamente 53 rpm", "Aproximadamente 1298 rpm", "Aproximadamente 25 rpm", "Aproximadamente 530 rpm"],
  ok: 1,
  exp: "Con dientes casi iguales, i₀ = (z₄·z₆)/(z₂·z₅) ≈ 0,96: la diferencia con 1 es chica y el denominador (1 − i₀) también, así que la salida se dispara a 1298 rpm."
},
{
  tema: "Planetarios",
  p: "En un diferencial de automóvil, si una rueda se levanta del piso:",
  ops: ["El auto no se mueve", "La rueda libre gira al doble de la velocidad del marco", "La rueda libre gira igual que el marco", "Se rompe el satélite"],
  ok: 1,
  exp: "Con una rueda fija, el satélite rueda sobre ella y la otra rueda recibe el doble de giro: n<sub>libre</sub> = 2·n<sub>marco</sub>. Es la aplicación clásica del tren diferencial."
},

/* --- Reductores --- */
{
  tema: "Reductores",
  p: "El rendimiento típico de una transmisión por tornillo sin fin es:",
  ops: ["95 – 99 %", "85 – 90 %", "60 – 80 %", "40 – 50 %"],
  ok: 2,
  exp: "Entre 60 y 80 %, por el deslizamiento entre filete y diente. Es la transmisión por engranajes de menor rendimiento y por eso se usa en servicio intermitente."
},
{
  tema: "Reductores",
  p: "Para una relación i = 50, la solución habitual es:",
  ops: ["Una etapa cilíndrica", "Dos etapas cilíndricas", "Un tren de cuatro etapas", "No se puede"],
  ok: 1,
  exp: "De 10 a 60 se usan dos etapas; más de 40 se puede pasar a tres. Una sola etapa no conviene más allá de i = 8 (a lo sumo 10)."
},
{
  tema: "Reductores",
  p: "La lubricación por inmersión se puede usar hasta:",
  ops: ["5 m/s", "12 m/s", "25 m/s", "No tiene límite"],
  ok: 1,
  exp: "Hasta v<sub>t</sub> = 12 m/s. Por encima, la fuerza centrífuga lanza el aceite y el engranaje queda sin lubricar: hay que pasar a lubricación por chorro."
},
{
  tema: "Reductores",
  p: "Los rodamientos de un reductor de tornillo sin fin se montan preferentemente:",
  ops: ["Rígidos de bolas en disposición libre", "Angulares (cónicos o de contacto angular) en disposición ajustada", "De agujas sin axial", "De empuje puro"],
  ok: 1,
  exp: "El sin fin produce un gran empuje axial y necesita rigidez para mantener la posición relativa entre tornillo y corona. Si los apoyos están a más de 350 mm se usa fijo-libre para evitar el agarre por dilatación."
},
{
  tema: "Reductores",
  p: "La capacidad de aceite de un reductor se calcula como:",
  ops: ["0,1 a 0,2 litros por kW", "0,35 a 0,7 litros por kW", "1 a 2 litros por kW", "10 litros fijos"],
  ok: 1,
  exp: "De 0,35 a 0,7 L por kW de potencia transmitida. Menos aceite no refrigera; más aceite aumenta las pérdidas por salpicado."
},
{
  tema: "Reductores",
  p: "Los reductores planetarios, comparados con los de ejes fijos de igual potencia y relación:",
  ops: ["Son más pesados", "Pesan 2 a 3 veces menos", "Pesan igual", "No se pueden comparar"],
  ok: 1,
  exp: "Pesan 2 a 3 veces menos gracias al engrane interior, al reparto de carga entre satélites y a que los esfuerzos flectores sobre los árboles se equilibran."
},
{
  tema: "Reductores",
  p: "En un reductor cónico, la distancia entre rodamientos del árbol en voladizo debe ser:",
  ops: ["Igual al diámetro del piñón", "2,5 a 3 veces la distancia del centro del piñón al primer rodamiento", "Menor que el ancho de cara", "No importa"],
  ok: 1,
  exp: "Ese sobredimensionamiento de la distancia entre apoyos da rigidez al voladizo; si no se cumple, el piñón se desalinea bajo carga y el contacto se concentra en un extremo del diente."
},
{
  tema: "Reductores",
  p: "La disposición 'fijo-libre' de rodamientos se usa cuando:",
  ops: ["El eje es muy corto", "Hay riesgo de agarre por dilatación térmica (ejes largos o calientes)", "La carga es puramente radial", "El engranaje es recto"],
  ok: 1,
  exp: "Un apoyo toma el axial y el otro queda libre para deslizar. Es lo que se hace en árboles de sin fin con apoyos separados más de 350 mm."
},

/* --- Cónicos / helicoidales / sin fin --- */
{
  tema: "Cónicos, helicoidales y sin fin",
  p: "Al pasar de dentado recto a helicoidal, la relación de transmisión:",
  ops: ["Aumenta con ψ", "Disminuye con ψ", "No cambia", "Se hace negativa"],
  ok: 2,
  exp: "i = z₂/z₁ siempre. El ángulo de hélice cambia la geometría (m<sub>t</sub>, D<sub>p</sub>, C) y agrega empuje axial, pero no la relación."
},
{
  tema: "Cónicos, helicoidales y sin fin",
  p: "En un engranaje cónico, el ángulo de paso del piñón cumple:",
  ops: ["tan γ = z₁/z₂", "tan γ = z₂/z₁", "sen γ = z₁/z₂", "γ = 45° siempre"],
  ok: 0,
  exp: "tan γ = z₁/z₂ para el piñón y tan Γ = z₂/z₁ para la rueda, con γ + Γ = Σ (ángulo entre ejes). Con 14 y 32 dientes y Σ = 90°: γ = 23,63°."
},
{
  tema: "Cónicos, helicoidales y sin fin",
  p: "El ancho de cara de un engranaje cónico está limitado por:",
  ops: ["F ≤ 3·m", "F ≤ A<sub>o</sub>/3", "F ≤ D<sub>p</sub>/2", "No tiene límite"],
  ok: 1,
  exp: "F ≤ A<sub>o</sub>/3 (Shigley), siendo A<sub>o</sub> la longitud de generatriz. Si la cara es más ancha, el diente se afina demasiado en el extremo menor y pierde resistencia."
},
{
  tema: "Cónicos, helicoidales y sin fin",
  p: "En un tornillo sin fin de 3 entradas que engrana con una corona de 36 dientes, la relación es:",
  ops: ["12 : 1", "3 : 1", "36 : 1", "108 : 1"],
  ok: 0,
  exp: "i = z₂/z₁ = 36/3 = 12. El número de entradas hace de 'dientes' del tornillo: por eso un sin fin de 1 entrada con corona de 60 da 60:1."
},
{
  tema: "Cónicos, helicoidales y sin fin",
  p: "La fuerza que aparece en los engranajes helicoidales y no en los rectos es:",
  ops: ["La radial", "La tangencial", "La axial", "La centrífuga"],
  ok: 2,
  exp: "El diente inclinado genera empuje axial W<sub>a</sub> = W<sub>t</sub>·tan ψ. Por eso necesitan rodamientos que lo absorban (cónicos, de contacto angular) o ruedas bihelicoidales que lo cancelan."
},
{
  tema: "Cónicos, helicoidales y sin fin",
  p: "Que un tornillo sin fin sea autoblocante significa que:",
  ops: ["No puede girar", "No puede accionarse desde la corona (solo desde el tornillo)", "Tiene rendimiento 100 %", "No necesita lubricación"],
  ok: 1,
  exp: "Con μ·cot λ grande, el sistema no se mueve desde la corona: es irreversible. Es una ventaja en aparejos y elevadores (la carga no baja sola) y una limitación cuando se necesita reversibilidad."
},
{
  tema: "Cónicos, helicoidales y sin fin",
  p: "En un engranaje helicoidal, el módulo transversal vale:",
  ops: ["m<sub>t</sub> = m<sub>n</sub>·cos ψ", "m<sub>t</sub> = m<sub>n</sub>/cos ψ", "m<sub>t</sub> = m<sub>n</sub>", "m<sub>t</sub> = m<sub>n</sub>·tan ψ"],
  ok: 1,
  exp: "El módulo normal es el del tallado; el transversal (el que se ve en el plano de rotación) es mayor: m<sub>t</sub> = m<sub>n</sub>/cos ψ. Con eso D<sub>p</sub> = z·m<sub>n</sub>/cos ψ."
},
{
  tema: "Cónicos, helicoidales y sin fin",
  p: "En un cónico, el radio del cono posterior se calcula como:",
  ops: ["r<sub>b</sub> = D<sub>p</sub>/(2·cos γ)", "r<sub>b</sub> = D<sub>p</sub>·cos γ/2", "r<sub>b</sub> = D<sub>p</sub>/(2·sen γ)", "r<sub>b</sub> = D<sub>p</sub>/2"],
  ok: 0,
  exp: "r<sub>b</sub> = D<sub>p</sub>/(2·cos γ). La generatriz, en cambio, es A<sub>o</sub> = D<sub>p</sub>/(2·sen γ). No confundir las dos."
}
];

/* =========================================================================
   BANCO DE PREGUNTAS — DESARROLLO
   ========================================================================= */
window.DESARROLLO = [
{
  p: "¿Qué dice la ley de engrane y por qué la evolvente la cumple?",
  r: "<p>La ley de engrane dice que la normal común a los perfiles en el punto de contacto debe pasar siempre por el centro instantáneo de rotación (el punto primitivo P). Si se cumple, la relación de velocidades angulares es constante durante todo el contacto.</p><p>La evolvente la cumple porque la normal a la curva en cualquier punto es tangente al círculo de base: todas las normales son la misma recta (la línea de acción), y esa recta corta la línea de centros siempre en el mismo punto. De ahí que el ángulo de presión sea constante y la relación de transmisión también.</p>"
},
{
  p: "¿De dónde sale D<sub>p</sub> = m·z y qué es exactamente el módulo?",
  r: "<p>El perímetro del círculo primitivo contiene exactamente z pasos: π·D<sub>p</sub> = p·z. Dividiendo por π·z: D<sub>p</sub>/z = p/π. Ese cociente es el módulo, m = p/π, que se mide en mm y es la unidad de tamaño del dentado.</p><p>Su ventaja es que es independiente del número de dientes: dos ruedas engranan si tienen el mismo módulo (y el mismo ángulo de presión). Por eso se normaliza el módulo y no el diámetro.</p>"
},
{
  p: "¿Qué diferencia hay entre módulo y paso diametral?",
  r: "<p>Son dos formas de medir lo mismo en sistemas distintos. El módulo (métrico) es m = D<sub>p</sub>/z en mm. El paso diametral (inglés) es P<sub>d</sub> = z/D<sub>p</sub> en 1/pulg, o sea el inverso del módulo pasado a pulgadas.</p><p>Se relacionan por P<sub>d</sub>·m = 25,4. Un P<sub>d</sub> grande significa dientes chicos (módulo chico) y viceversa: son inversamente proporcionales.</p>"
},
{
  p: "¿Qué es el huelgo circular y por qué se deja?",
  r: "<p>Es el juego entre el flanco de un diente y el flanco del otro cuando están en contacto (backlash). Se deja para absorber dilataciones térmicas, errores de tallado y montaje, y para permitir la película de lubricante.</p><p>Si no hubiera huelgo, el engranaje se trabaría al calentarse. La cátedra adopta h<sub>c</sub> = p<sub>c</sub>/50, valor medio entre las recomendaciones de p<sub>c</sub>/80 y p<sub>c</sub>/40. Después el espesor del diente se reparte: t = (p<sub>c</sub> − h<sub>c</sub>)/2.</p>"
},
{
  p: "¿Cómo se elige el ancho de cara F y por qué hay varios criterios?",
  r: "<p>F no está normalizado: cada autor da un rango según su experiencia. Faires propone 8m ≤ F ≤ 12,5m, Fanchon 7m ≤ F ≤ 12m, Oberg-Jones 3p ≤ F ≤ 4p (equivalente a 9,4m ≤ F ≤ 12,5m) y Shigley 3p ≤ F ≤ 5p (9,4m ≤ F ≤ 15,7m).</p><p>La cátedra pide el valor medio del rango de Fanchon: F = 9,5·m. El límite inferior evita que el diente sea demasiado angosto (se flexiona y se desalinea); el superior, que la carga no se concentre en un extremo por la deflexión del árbol.</p>"
},
{
  p: "¿Qué es la relación de contacto y cómo se interpreta su valor?",
  r: "<p>Es la cantidad promedio de pares de dientes en contacto simultáneo. Se calcula como la longitud de la línea de acción dividida por el paso de base: m<sub>c</sub> = L<sub>ab</sub>/(p<sub>c</sub>·cos φ).</p><p>La parte entera dice cuántos pares engranan siempre y la decimal, qué fracción del tiempo hay un par más. Por ejemplo, 1,65 significa que el 65 % del tiempo engranan dos pares y el 35 %, uno solo. Debe ser ≥ 1 (teórico) y ≥ 1,2 en la práctica: si es menor hay instantes sin contacto y el engranaje vibra.</p>"
},
{
  p: "¿Qué es la interferencia y cómo se evita?",
  r: "<p>La evolvente solo existe fuera del círculo de base. Si el diente de una rueda toca el flanco del otro antes de que este empiece su evolvente, el contacto ocurre en una zona que no es evolvente y el piñón socava (rebaja) la raíz de la rueda. Eso es interferencia.</p><p>Se evita con z ≥ 17 en el piñón (φ = 20°), corrigiendo el dentado (modificación del addendo), aumentando el ángulo de presión (25° permite 12 dientes) o usando dentado helicoidal (el número mínimo equivalente crece con 1/cos³ψ).</p>"
},
{
  p: "¿Por qué la relación de contacto tiene un valor máximo?",
  r: "<p>Porque el contacto no puede salirse de la zona de evolvente. El punto de entrada A y el de salida B están limitados por los círculos de cabeza, y si el arco de contacto crece demasiado, uno de los extremos cae por debajo del círculo de base. El límite es m<sub>c</sub> ≤ (C/p<sub>c</sub>)·tan φ = (z₁+z₂)/(2π)·tan φ.</p><p>Superarlo no es «mejor»: es señal de que el diseño tiene interferencia.</p>"
},
{
  p: "¿Qué fuerzas actúan en el diente y para qué se usa cada una?",
  r: "<p>La resultante W es normal al flanco y se descompone en tangencial W<sub>t</sub> y radial W<sub>r</sub> = W<sub>t</sub>·tan φ. W<sub>t</sub> es la que transmite el par (sale de 2T/D<sub>p</sub>) y es la que se usa para verificar el diente por flexión con Lewis.</p><p>La radial no transmite potencia pero flexiona el árbol; la resultante W = W<sub>t</sub>/cos φ se usa para verificar el árbol y la vida de los rodamientos. En helicoidales y cónicos aparece además la componente axial.</p>"
},
{
  p: "Explicá la hipótesis de Lewis y sus limitaciones.",
  r: "<p>Lewis (1892) modela el diente como una viga en voladizo de sección rectangular, empotrada en la raíz y cargada en la punta por W<sub>t</sub>. La tensión máxima de flexión es σ = 6·W<sub>t</sub>·l/(F·t²), y reemplazando la geometría del perfil por el factor de forma Y queda σ = K<sub>v</sub>·W<sub>t</sub>/(F·m·Y).</p><p>Limitaciones: ignora la carga compartida entre dientes (usa 1 diente), no considera el esfuerzo de contacto (picadura), ni la concentración de tensiones en el entalle de la raíz, ni el desgaste. Por eso es una verificación de predimensionamiento: después se complementa con AGMA.</p>"
},
{
  p: "¿Por qué se aplica un factor dinámico K<sub>v</sub> mayor que 1?",
  r: "<p>Porque los ensayos muestran que a mayor velocidad los dientes fallan con menor esfuerzo: los errores de tallado y la elasticidad del sistema hacen que la carga no sea uniforme, aparecen impactos al entrar en contacto y vibraciones.</p><p>K<sub>v</sub> depende de la velocidad tangencial y del método de tallado: un diente rectificado admite más velocidad con menos castigo que uno fresado. Por eso hay cuatro expresiones según el acabado.</p>"
},
{
  p: "¿De dónde sale la tensión admisible S<sub>t</sub> y por qué hay dos gráficas?",
  r: "<p>Sale de las gráficas 14-2 y 14-3 de Shigley (normas ANSI/AGMA 2001-D04 y 2101-D04), que dan el esfuerzo de flexión permisible en función de la dureza Brinell. Son rectas: S<sub>t</sub> = a·H<sub>B</sub> + b.</p><p>La 14-2 es para aceros completamente endurecidos y la 14-3 para aceros nitrurados (AISI 4140 y 4340). Cada una tiene grado 1 y grado 2: el grado 2 tiene mejor calidad metalúrgica y por eso mayor tensión admisible.</p>"
},
{
  p: "¿Qué significa el factor de seguridad y qué valores se consideran aceptables?",
  r: "<p>f<sub>seg</sub> = S<sub>t</sub>/σ indica cuántas veces la tensión admisible supera a la actuante. Es el margen frente a la falla por flexión.</p><p>Por debajo de 1 el diente se rompe con la carga nominal. Entre 1 y 1,2 el margen es insuficiente para sobrecargas. Entre 1,2 y 2 es el rango habitual de diseño. Por encima de 2 está sobredimensionado: se podría reducir F o el módulo.</p>"
},
{
  p: "¿Cómo se elige el módulo con el ábaco de la cátedra?",
  r: "<p>Se elige la hoja según la tensión admisible del material, se entra por el eje horizontal con la velocidad del eje motriz en rpm y por el vertical con la potencia en kW. El punto cae entre dos rectas de módulo constante y se adopta el módulo de la recta superior (el inmediato mayor).</p><p>El ábaco está construido con z₁ = 17, F = 7m y tallado con creadora, aplicando Lewis. Es un predimensionamiento: después hay que verificar con el módulo adoptado y el F real.</p>"
},
{
  p: "Si la verificación no da, ¿en qué orden conviene corregir?",
  r: "<p>Primero aumentar el ancho de cara F: baja σ linealmente y no cambia ningún diámetro (hay que respetar F ≤ 12m). Segundo, cambiar el material por uno de mayor dureza: sube S<sub>t</sub> sin tocar la geometría. Tercero, subir el módulo: σ baja con 1/m² pero crecen todos los diámetros, la distancia entre centros y el volumen.</p><p>Opcionalmente, mejorar el tallado (rectificado) para bajar K<sub>v</sub>, aunque casi nunca es la variable en juego.</p>"
},
{
  p: "¿Cuál es la diferencia entre un tren simple y uno compuesto?",
  r: "<p>En el simple cada eje tiene una sola rueda, y la relación depende solo de la primera y la última: las intermedias se cancelan. Todas las ruedas deben tener el mismo módulo.</p><p>En el compuesto al menos un eje tiene dos ruedas solidarias. La relación es el producto de las relaciones de cada par, y cada par puede tener distinto módulo porque transmite distinto par. Permite cualquier relación y optimizar cada etapa, a costa de más piezas.</p>"
},
{
  p: "¿Por qué en un tren compuesto conviene que la última etapa tenga más módulo?",
  r: "<p>Porque el par crece con la relación acumulada: el eje de salida transmite i veces el par de entrada. La fuerza tangencial W<sub>t</sub> = 2T/D<sub>p</sub> también crece, así que los dientes de la etapa lenta soportan más carga.</p><p>Para mantener σ razonable hay que aumentar F o m en esa etapa. Por eso en un reductor real los engranajes de salida son visiblemente más grandes y robustos.</p>"
},
{
  p: "¿Qué condición debe cumplir un tren compuesto para ser coaxial?",
  r: "<p>Que las dos etapas tengan la misma distancia entre centros, porque el eje de entrada y el de salida son el mismo eje geométrico: r₂ + r₃ = r₄ + r₅.</p><p>En función de los dientes y módulos: m<sub>A</sub>(z₂+z₃) = m<sub>B</sub>(z₄+z₅). De ahí sale la relación inversa entre los módulos de las etapas.</p>"
},
{
  p: "¿Cómo se transmite el par a lo largo de un tren y dónde se torsiona el eje?",
  r: "<p>El par entra a cada eje por una rueda y sale por otra; entre las dos ruedas del mismo eje el tramo queda sometido a torsión. El resto del eje, entre apoyos, trabaja a flexión por las reacciones.</p><p>En los extremos (entrada y salida) el eje está torsionado desde el acoplamiento hasta la rueda. Por eso los ejes de reductores se calculan a flexión y torsión combinadas, y los tramos más cargados son los de la etapa lenta.</p>"
},
{
  p: "¿Por qué un tren epicicloidal tiene dos grados de libertad y cómo se resuelve?",
  r: "<p>Porque tiene tres elementos móviles (solar, corona y brazo) y una sola ecuación cinemática que los liga. Para que la salida sea predecible hay que fijar o accionar dos: en la práctica se deja uno fijo al bastidor.</p><p>Según cuál se fije (corona, solar o brazo) se obtienen tres reductores distintos con el mismo mecanismo. Esa es la base de las cajas automáticas.</p>"
},
{
  p: "Explicá la fórmula de Willis y cómo se determina el signo.",
  r: "<p>Willis plantea las velocidades relativas al brazo: (n<sub>e</sub> − n<sub>ps</sub>)/(n<sub>s</sub> − n<sub>ps</sub>) = i₀, donde i₀ es la relación que tendría el tren con el brazo fijo.</p><p>i₀ se calcula como un tren ordinario: la productoria ∏ de los dientes de las conducidas sobre la de las motrices. El signo sale de contar los engranes exteriores del camino: número par → positivo, impar → negativo. Los engranes interiores (coronas) no invierten el sentido.</p>"
},
{
  p: "¿Cómo se arma la tabla del método tabular?",
  r: "<p>Se ponen columnas para cada elemento y tres filas. Primera fila: movimiento con el brazo, se da +1 a todos (el mecanismo bloqueado gira una vuelta). Segunda fila: movimiento relativo con el brazo fijo, se da −1 al elemento que está fijo al bastidor y se propaga por los engranes como en un tren ordinario; la columna del brazo va en 0. Tercera fila: suma de las dos.</p><p>De la columna del elemento fijo sale la condición (debe dar 0) y de las otras, la relación. Es equivalente a Willis pero muestra el movimiento completo.</p>"
},
{
  p: "¿Por qué con dientes casi iguales un planetario puede dar relaciones enormes?",
  r: "<p>Porque en el tren epicicloidal compuesto la relación es i = 1/(1 − (z<sub>a</sub>·z<sub>c</sub>)/(z<sub>b</sub>·z<sub>d</sub>)). Si los productos son casi iguales, el denominador es casi cero y la relación explota.</p><p>Con 99/100/101/100 el denominador vale 1/10 000 y la relación es 10 000:1 con solo cuatro ruedas. El precio es un rendimiento muy bajo, porque la potencia circula varias veces por el tren.</p>"
},
{
  p: "¿Cómo funciona el diferencial y por qué es necesario?",
  r: "<p>En una curva las ruedas recorren caminos distintos y deben girar a velocidades distintas; con un eje rígido una patinaría. El diferencial reparte el par y deja que las velocidades se acomoden: n<sub>izq</sub> + n<sub>der</sub> = 2·n<sub>marco</sub>.</p><p>El marco (con la corona y los satélites) es el brazo; los dos semiejes llevan los engranes f. Si una rueda se levanta, la otra gira al doble de la velocidad del marco.</p>"
},
{
  p: "¿Qué tipos de reductor hay y cuál se elige para cada relación?",
  r: "<p>Cilíndricos (ejes paralelos), cónicos (ejes concurrentes), planetarios, de tornillo sin fin (ejes alabeados) y mixtos.</p><p>Criterio: hasta i = 8-10 una etapa cilíndrica; de 10 a 60, dos etapas; más de 40, tres etapas o planetario; para relaciones muy grandes, planetario o sin fin. Si hay que cambiar la dirección del eje, cónico. Si se prioriza el silencio y el servicio es intermitente, sin fin.</p>"
},
{
  p: "¿Por qué el rendimiento del tornillo sin fin es bajo?",
  r: "<p>Porque el contacto entre filete y diente es de deslizamiento, no de rodadura como en un engranaje. La fuerza de rozamiento W<sub>f</sub> = μ·W se opone al movimiento y consume potencia.</p><p>El rendimiento es η = (cos φ<sub>n</sub> − μ·tan λ)/(cos φ<sub>n</sub> + μ·cot λ). Con λ chico (pocas entradas, mucha reducción) el término μ·cot λ domina y η cae; llega a cero cuando el sistema se vuelve autoblocante.</p>"
},
{
  p: "¿Qué criterios rigen la lubricación de un reductor?",
  r: "<p>Hasta v<sub>t</sub> = 12 m/s se lubrica por inmersión: se sumerge la rueda mayor, hasta 0,7 de la altura del diente y no menos de 10 mm en las rápidas, y hasta 100 mm en las lentas. La capacidad del baño es de 0,35 a 0,7 L por kW.</p><p>Desde 12 m/s se pasa a lubricación por chorro con toberas y bomba; desde 20 m/s se alimenta cada rueda por separado. En los multietápicos la viscosidad se elige como valor intermedio. En el sin fin, la inmersión vale hasta 10 m/s y el nivel depende de si el tornillo va arriba o abajo de la rueda.</p>"
},
{
  p: "¿Qué rodamientos se usan en cada tipo de engrane y por qué?",
  r: "<p>Recto: cualquiera, porque no hay empuje axial. Helicoidal: bolas rígidos, cónicos de una fila o rodillos de rótula, para tomar el empuje axial. Bihelicoidal con bifurcación: uno de los árboles sobre bolas, para que el juego axial permita autocentrarse. Cónico: cónicos con distancia entre apoyos 2,5 a 3 veces la del piñón al primer apoyo. Sin fin: angulares en disposición ajustada (o fijo-libre si los apoyos están a más de 350 mm).</p><p>La idea común: el empuje axial y la rigidez definen el tipo, y la dilatación térmica define la disposición.</p>"
},
{
  p: "¿Por qué en los engranajes cónicos las fuerzas se calculan en el radio medio?",
  r: "<p>Porque en un cónico el módulo y la resistencia del diente cambian a lo largo de la cara: son máximos en el extremo mayor y mínimos en el menor. La carga tampoco se distribuye uniformemente.</p><p>Calcular en el radio medio es el compromiso: no se sobreestima la capacidad del extremo mayor ni se subestima la debilidad del menor. El radio medio se obtiene restando (F/2)·sen γ al radio mayor.</p>"
}
];
