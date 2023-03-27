let texto = "";

function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(125);
  
  // mostrar todas las teclas presionadas en la pantalla
  textSize(32);
  textAlign(CENTER);
  text(mostrarTexto(texto), displayWidth/2, displayHeight/2);
}

function keyPressed() {
  // si se presiona "Enter", borrar el texto
  if (keyCode === ENTER) {
    texto = "";
  } else if (keyCode === BACKSPACE) {
    // borrar el último carácter
    texto = texto.slice(0, -1);
  } else if (esLetra(key) || key === " ") {
    // agregar la tecla presionada al texto si es letra o espacio
    texto += key;
  }
  
  // prevenir que la página haga scroll cuando se presiona una tecla
  return false;
}

function esLetra(caracter) {
  // verificar si el caracter es una letra
  return /^[a-zA-Z]$/.test(caracter);
}

function mostrarTexto(texto) {
  // mostrar solo los caracteres de letras y espacio del texto
  return texto.replace(/[^a-zA-Z ]/g, "");
}
