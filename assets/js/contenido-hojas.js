window.CAPITULOS.push({
  id: "hojas",
  grupo: "7 · Exámenes resueltos",
  titulo: "Hojas de examen (A4)",
  html: String.raw`
<h1>Hojas de examen (A4)</h1>
<p class="bajada">Los tres exámenes digitalizados, listos para imprimir tal como son: <strong>en blanco</strong> para resolverlos a mano y <strong>con los resultados</strong> para autocorregir. Cambiá de examen y de versión sin salir de la guía.</p>
<p class="solo-impresion">Para imprimir una hoja A4, abrila con «Abrir en pestaña» y usá el botón Imprimir de la hoja (esta vista no imprime el visor).</p>

<div class="caja idea">
<p class="caja-tit">Cómo usarlas</p>
<p>Elegí el examen y la versión. La hoja se ajusta sola al ancho de la pantalla. Para imprimir en A4 usá <strong>Imprimir</strong> (abre la hoja y lanza el diálogo) o <strong>Abrir en pestaña</strong> y después <kbd>Ctrl</kbd>+<kbd>P</kbd>. En la versión resuelta, los valores están en azul y la hoja lleva el sello <strong>RESUELTO</strong>.</p>
</div>

<div class="hojas-barra no-print">
  <div class="hojas-g">
    <span class="hojas-lbl">Examen</span>
    <button type="button" class="hoja-btn activo" data-exam="2022" onclick="hojaSet('2022')">22/11/2022</button>
    <button type="button" class="hoja-btn" data-exam="2025" onclick="hojaSet('2025')">02/12/2025</button>
    <button type="button" class="hoja-btn" data-exam="2026" onclick="hojaSet('2026')">17/03/2026</button>
  </div>
  <div class="hojas-g">
    <span class="hojas-lbl">Versión</span>
    <button type="button" class="hoja-btn activo" data-ver="blank" onclick="hojaVer('blank')">En blanco</button>
    <button type="button" class="hoja-btn" data-ver="res" onclick="hojaVer('res')">Con resultados</button>
  </div>
  <div class="hojas-g hojas-acc">
    <a id="hoja-abrir" class="hoja-link" href="assets/examenes/hojas-examen.html?ver=2022" target="_blank" rel="noopener">Abrir en pestaña</a>
    <button type="button" class="hoja-btn hoja-imprimir" onclick="hojaImprimir()">Imprimir</button>
  </div>
</div>

<div class="hojas-marco">
  <iframe id="hoja-frame" src="assets/examenes/hojas-examen.html?ver=2022&embed=1" title="Hoja de examen en blanco"></iframe>
</div>

<p class="hojas-pie">La hoja es la misma que se entrega en el examen (A4, 210 × 297 mm). Los valores de la versión resuelta salen de la resolución paso a paso de <a href="#examenes">Exámenes resueltos</a>.</p>
`
});
