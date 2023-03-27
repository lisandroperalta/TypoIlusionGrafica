let texto = "";
let miLetrero;

let lienzoSecundario;

function setup() {
  createCanvas(innerWidth, innerHeight);
  lienzoSecundario = createGraphics(innerWidth, innerHeight);
  miLetrero = new Letrero();

}

function draw() {
  background(125);

  // mostrar todas las teclas presionadas en la pantalla
  textSize(32);
  textAlign(CENTER);
  image(lienzoSecundario, 0, 0);

  text(mostrarTexto(texto), displayWidth / 2, displayHeight / 2);


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

    miLetrero.agregarLetra(key);
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



class Letrero {

  Letrero() {
    this.tamanio;
    this.posX;
    this.posY;
  }
  agregarLetra(key) {
    lienzoSecundario.textSize(random(500, 3000));
    lienzoSecundario.fill(this.colorAleatorio());
    lienzoSecundario.textAlign(CENTER);
    this.ubicacionAletoria();
    lienzoSecundario.text(key, this.posX, this.posY);

  }

  ubicacionAletoria() {
    this.posX = (displayWidth / 2) + random(-displayWidth / 2, displayWidth / 2);
    this.posY = (displayHeight / 2) + random(-displayHeight / 2, displayHeight / 2);

    //console.log(posX, posY);

  }

  colorAleatorio() {
    // Establece el modo de color en RGB
    colorMode(RGB);

    // Genera valores aleatorios para cada canal de color
    let r = random(255);
    let g = 0;
    let b = random(255);

    // Retorna el color generado
    return color(r, g, b);
  }

}


