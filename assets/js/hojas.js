(function () {
  var estado = { exam: "2022", ver: "blank" };

  function url(print) {
    return "assets/examenes/hojas-examen.html?ver=" + estado.exam +
      (estado.ver === "res" ? "&res=1" : "") +
      "&embed=1" + (print ? "&print=1" : "");
  }

  function pintar() {
    Array.prototype.forEach.call(document.querySelectorAll(".hoja-btn[data-exam]"), function (b) {
      b.classList.toggle("activo", b.getAttribute("data-exam") === estado.exam);
    });
    Array.prototype.forEach.call(document.querySelectorAll(".hoja-btn[data-ver]"), function (b) {
      b.classList.toggle("activo", b.getAttribute("data-ver") === estado.ver);
    });
    var a = document.getElementById("hoja-abrir");
    if (a) a.href = url();
  }

  function cargar() {
    var f = document.getElementById("hoja-frame");
    if (f) f.src = url();
    pintar();
  }

  window.hojaSet = function (exam) {
    estado.exam = exam;
    cargar();
  };

  window.hojaVer = function (v) {
    estado.ver = v;
    cargar();
  };

  window.hojaAbrir = function (exam, ver) {
    estado.exam = exam;
    estado.ver = ver || "blank";
    if (location.hash !== "#hojas") location.hash = "#hojas";
    setTimeout(cargar, 160);
  };

  window.hojaImprimir = function () {
    window.open(url(true), "_blank", "noopener");
  };

  window.addEventListener("message", function (e) {
    if (!e.data || e.data.tipo !== "hoja-alto") return;
    var f = document.getElementById("hoja-frame");
    if (f) f.style.height = Math.max(420, Math.min(1600, e.data.alto)) + "px";
  });

  function sync() {
    var f = document.getElementById("hoja-frame");
    if (!f) return;
    f.src = url();
    pintar();
  }

  window.addEventListener("hashchange", function () { setTimeout(sync, 140); });
  document.addEventListener("DOMContentLoaded", function () { setTimeout(sync, 140); });
})();
