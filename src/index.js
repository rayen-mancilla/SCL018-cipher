import cipher from './cipher.js';

console.log(cipher);

//Declarando variables para luego aplicar display block& none

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
let convertingToCapital= document.getElementById("cipherMessage");
convertingToCapital.addEventListener("keyup" , capitalLetter)
function capitalLetter(){
  convertingToCapital.value= convertingToCapital.value.toUpperCase();
}



