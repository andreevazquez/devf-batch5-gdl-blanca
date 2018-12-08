var primerNumero
var operacion
var segundoNumero

function muestraValor(valor){
    var pantalla=document.getElementById('pantalla'); // obteber el elemento en la "pantalla"
    var valorActual = pantalla.innerText; // el valor que al seleccionar el boton lo muestra en la pantalla
    if (valorActual.length<14){ //es el total de espacios que tengo
        pantalla.innerText= `${valorActual}${valor}`;//Esto muestra y concatena la variable valor y valor actual
    }
}
function borrar(){
    var valorActual=document.getElementById('pantalla'); //tomar el valor actual de la pantalla
    valorActual.innerText='';//escribir "nada"
}
function guardar(signo){
    primerNumero=document.getElementById('pantalla').textContent;//agarras el texto dentro del h3
    operacion=signo
    borrar()
    console.log(primerNumero, segundoNumero)
}
function igualA(){
    segundoNumero=document.getElementById('pantalla').textContent;
    if (operacion=='+'){
        var resultado=suma(Number(primerNumero),Number(segundoNumero));
    }
     if (operacion=='-'){
        resultado=resta(Number(primerNumero),Number(segundoNumero));
     }
        if (operacion=='*'){
            resultado=multi(Number(primerNumero),Number(segundoNumero));
        }
            if (operacion=='/'){
                resultado=dividir(Number(primerNumero),Number(segundoNumero));
            }
        borrar();
        muestraValor(resultado);

        }

function resta (a,b){
    return a-b;
}

function suma (a,b){
    return a+b;
}
function multi(a,b){
    return a*b;
}
function dividir(a,b){
    return a/b;
}