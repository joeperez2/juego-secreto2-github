let numeroSecreto = 0;
let numeroIntentos = 0;
let listaNumerosSorteados = [];//Lista de numeros sorteados 
let numeroMaximo = 10; //Variable limitadora de numeros 

console.log(numeroSecreto);


function asignarTextoElemento(elemento, texto) {//parametros que se modificaran 
    let elementoHTML = document.querySelector(elemento); //Metodo que permite acceder a los elementos de html para trabajar con ellos 
    elementoHTML.innerHTML = texto;//Metodo para asignarle un texto al h1 de HTML
    return;
}

function verificarIntento() {//Funcion para el boton de html 
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value); //Guardamos el numero que se dijito en la etiqueta input la caja y obtenemos el valor con value 
    //Imprimimos en consola el numero secreto 
    //Imprimimos en consola el numero secreto 
    /* console.log(typeof(numeroSecreto));
     console.log(typeof(numeroDeUsuario));
     console.log(numeroSecreto);
     console.log(numeroDeUsuario);
     console.log(numeroDeUsuario === numeroSecreto);//Comparar si los numero son iguales y ademas si son del mismo tipo de dato
     */
    console.log(numeroSecreto);
    console.log(numeroIntentos);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el numero en ${numeroIntentos} ${(numeroIntentos == 1 ? "vez" : "veces")}`);//Reutulizamos funciones ara asignar textos 
        document.getElementById("reiniciar").removeAttribute("disabled");//Funcion para remover el disabled del button html al momento de adivinr el numero secreto
    } else {
        //Condicon usuario no acerto 
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El numero secreto es menor");
        } else {
            asignarTextoElemento("p", "El numero secreto es mayor");
        }
        numeroIntentos++;
        limpiarCaja();

    }

    return;
}
//funcion para limpiar la caja o el input
function limpiarCaja() {
    document.querySelector("#valorUsuario").value = ""; //Se puede usar con el id del input
}

//Funcion para retornar un numero aleatorio 
function generarNUmeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    //Si numero generado esta incluido en l lista hacesmos una operacion si no otra
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los numeros condicion de salida  
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los numeros disponibles");
    } else {

        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNUmeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);//Agregar el numero aleatorio
            return numeroGenerado;
        }
    }
}

function condicionesInicuales() {
    asignarTextoElemento("h1", "Juego del numero secreto!");//LLamamos a la funcion para darle el nombree al h1 y al p
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);//LLamamos a la funcion y cuando el bototn de html le den click cambaira el h1 a p 
    //Generear numero aleatorio 
    numeroSecreto = generarNUmeroSecreto();
    //Inicializar el numero de intentos
    numeroIntentos = 1;
}

function reiniciarJuego() {
    //Limpiar la caja 
    limpiarCaja();
    //Indicar mensaje de inicio intervalo de numeros
    condicionesInicuales();
    document.querySelector("#reiniciar").setAttribute("disabled", "true");

}




condicionesInicuales();







