document.addEventListener("DOMContentLoaded", function () {
  const boton = document.querySelector(".btn_msj");
  const botonConectar = document.querySelector(".btn_conectar");

  const cardsOculta = document.querySelector(".cards-oculta");
  const formulario = document.getElementById("miFormulario");
  const resultado = document.getElementById("resultado");
  const comentario = document.getElementById("comentario");

  formulario.addEventListener("submit", function (event) {
    // 1. Evita que el formulario se envíe de forma tradicional
    event.preventDefault();

    // 2. Limpia el textarea después de enviar el comentario
    comentario.value = "";

    // 3. Muestra el mensaje de confirmación
    resultado.innerHTML =
      "<p> <strong>Tu comentario ha sido enviado. </strong> </p>";

    // 4. Limpia el textarea después de mostrar el mensaje
    comentario.value = "";

    comentario.addEventListener("focus", function () {
      if (comentario.value.trim() === "") {
        resultado.innerHTML = ""; // Limpia el mensaje si el textarea está vacío
      }
      
    });
  });
  boton.addEventListener("click", function () {
    cardsOculta.style.display = "flex";
    boton.style.backgroundColor = "#020564";
    boton.style.color = "white";

    botonConectar.style.backgroundColor = "white";
    botonConectar.style.color = "#020564";
  });

  botonConectar.addEventListener("click", function () {
    cardsOculta.style.display = "none";
    boton.style.backgroundColor = "white";
    boton.style.color = "#020564";

    botonConectar.style.backgroundColor = "#020564";
    botonConectar.style.color = "white";
    document.getElementById("resultado").innerHTML = "";
  });
});
