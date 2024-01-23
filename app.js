let listaNumerosSorteados = [];
let numeroMax = 10;
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

function asignarTextoElemento(elemento, texto) {
  elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}
function verificarIntento() {
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
  if (numeroUsuario === numeroSecreto) {
    asignarTextoElemento("p", `Advinaste el numero en ${intentos} ${intentos === 1 ? "intento" : "intentos"}`);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //el usuario no acerto
    if (numeroSecreto > numeroUsuario) {
      asignarTextoElemento("p", "El numero es mayor");
    } else {
      asignarTextoElemento("p", "El numero es menor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMax) + 1;

  if (listaNumerosSorteados.length == numeroMax) {
    asignarTextoElemento("p", "Ya se sortaron todos los numeros posibles");
  } else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del numero secreto!");
  asignarTextoElemento("p", `Ingrese un numero del 1 al ${numeroMax}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}
function reiniciarJuego() {
  limpiarCaja();
  condicionesIniciales();
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
