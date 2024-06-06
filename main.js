let teclas = document.getElementsByClassName("teclas");
let pantalla= document.getElementById("visor");
let operador = document.getElementsByClassName("operador");
let igual = document.getElementById("igual");
let operadores= "";
let num1= "";
let num2= "";

for (let i = 0; i < teclas.length; i++) {
    teclas[i].addEventListener("click",()=>{
        pantalla.innerText += teclas[i].innerText;
    })
    
}