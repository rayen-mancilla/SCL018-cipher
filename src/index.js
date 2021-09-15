import cipher from './cipher.js';

console.log(cipher);

//Declarando variables para luego aplicar display block& none
//Block significa mostrar
//None significa ocultar

let unveilWelcomePage= document.getElementById("welcomePage")
unveilWelcomePage.style.display="block"
let unveilMainPage= document.getElementById ("mainPage");
unveilMainPage.style.display="none";

// Creando función para pasar a Main Page, haciendo click en el botón "start"

const startButton = document.getElementById("startButton");
startButton.addEventListener('click', startEncrypta);
function startEncrypta() {
  unveilWelcomePage.style.display ="none";
  unveilMainPage.style.display ="block";
}

// Creando función convirtiendo a mayúscula
//.value nos ayuda a "rescatar" el valor
let convertingToCapital= document.getElementById("cipherMessage");
convertingToCapital.addEventListener("keyup" , capitalLetter)
function capitalLetter(){
  convertingToCapital.value= convertingToCapital.value.toUpperCase();
}

// crear botones cifrado y descifrado
const buttonEncode1 = document.getElementById("encodeButton");
const buttonDecode1 = document.getElementById("decodeButton");

//funcion del boton cifrar
buttonEncode1.addEventListener("click", ()=>{
  let textEncode = document.getElementById("cipherMessage").value;
  let offSet = parseInt(document.getElementById("boxNumber").value,10);
  document.getElementById("cipherMessage").value = cipher.encode(offSet,textEncode);
});

//funcion del boton descifrar
buttonDecode1.addEventListener("click", ()=>{
  let textDecode = document.getElementById("cipherMessage").value;
  let offSet = parseInt(document.getElementById("boxNumber").value,10);
  document.getElementById("cipherMessage").value = cipher.decode(offSet, textDecode);
});





