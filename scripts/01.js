
let myButton = document.getElementById("buttonInput");
let myHeading = document.querySelector("h1");
function setUserName () {

let textoDigitado = document.getElementById("textoDigitado").value
localStorage.setItem("name", textoDigitado);
myHeading.textContent = `Seja bem-vindo ao meu trabalho de extensão, ${textoDigitado}`
}

myButton.onclick = () => {
   setUserName();
}
myButton.addEventListener("click", function() {
   myButton.style.color = "red"
  
})
