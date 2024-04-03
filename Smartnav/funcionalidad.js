function cambiarTextoColorBoton(event) {
  // Evita que la página se refresque
  event.preventDefault();

  // Obtener el identificador del botón
  const idBoton = event.target.id;

  // Obtener el texto del botón
  const textoBoton = event.target.textContent;

  // Cambiar el texto del botón
  event.target.textContent = "Conectado";

  // Cambiar el color de fondo del botón
  event.target.style.backgroundColor = "#fff";

  // Cambiar el color del texto del botón
  event.target.style.color = "#08423f";
}