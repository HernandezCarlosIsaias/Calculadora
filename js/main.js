let teclas = document.getElementsByClassName("teclas");
let pantalla= document.getElementById("visor");
let operadores = document.getElementsByClassName("operador");
let igual = document.getElementById("igual");
let borrar = document.getElementById("borrar");
let punto = document.getElementById("punto");
let operador= "";
let num1= "";
let num2= "";

//Tomamos el valor de las teclas precionadas y lo imprimimos en la pantalla.
for (let i = 0; i < teclas.length; i++) {
    teclas[i].addEventListener("click",()=>{
        if (operador === ""){
            num1 += teclas[i].innerText;
        }
        else{
            num2 += teclas[i].innerText;
        }
        pantalla.innerText += teclas[i].innerText;
    })
}

//Controlamos que los numeros no contengan mas de una "."
punto.addEventListener("click", ()=>{
    if (operador===""){
       
        if (!num1.includes(".")){
            num1+= "."
            pantalla.innerText += punto.innerText;
        }
    }else{
        if (!num2.includes(".")){
            num2+= "."
            pantalla.innerText += punto.innerText;
        }
    }
})

//Guardamos el operador en la variable.
for (let i = 0; i < operadores.length; i++) {
    operadores[i].addEventListener("click",() => {
        switch(operadores[i].innerText){
            case "+":
                operador= "suma";
                break;
            
            case "-":
                operador= "resta";
                break;

            case "*":
                operador= "multiplicacion";
                break;
            
            case "/":
                operador= "division";
                break;
            
            default:
                console.log("La operacion no es valida.");
            }
            pantalla.innerText= "";
        })
    }

//Logica del boton "C"
borrar.addEventListener("click", () =>{
    if (operador === ""){
            num1= num1.slice(0,num1.length-1);
            pantalla.innerText= num1;
        }
    else{
            num2= num2.slice(0,num2.length-1);
            pantalla.innerText= num2;
        }
})

//Logica del boton "DEL"
borrar_todo.addEventListener("click",() =>{
    pantalla.innerText= "";
    num1= "";
    num2="";
    operador="";
} )


//Logica del boton "="
igual.addEventListener("click", () =>{
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operador) {
        case "suma":
            pantalla.innerText= num1 + num2;
            operador=""
            num1= num1+num2
            num2= ""
            break;
        case "resta":
            pantalla.innerText= num1 - num2;
            operador=""
            num1= num1-num2
            num2= ""

            break;  
        case "multiplicacion":
            pantalla.innerText= num1 * num2;
            operador=""
            num1= num1*num2
            num2= ""

            break; 
        case "division":
            pantalla.innerText= num1 / num2;
            operador="";
            num1= num1/num2;
            num2= "";

            break;
        default:
            console.log("La operacion no es valida.");
            break;
    }
})
