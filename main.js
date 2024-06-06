let teclas = document.getElementsByClassName("teclas");
let pantalla= document.getElementsByClassName("visor")[0];

for (let i = 0; i < teclas.length; i++) {
    teclas[i].addEventListener("click",()=>{
        pantalla.innerText += teclas[i].innerText;
    })
    
}