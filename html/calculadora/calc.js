var primerNumero
var operacion
var segundoNumero
var pantalla= document.getElementById('pantalla');
function muestraValor(valor){
    //pantalla.getElementById('pantalla'); // obteber el elemento en la "pantalla"
    var valorActual = pantalla.innerText; // el valor que al seleccionar el boton lo muestra en la pantalla
    
    if(valorActual.indexOf('.')>=0)
      return 
    if (valorActual.length<14){ //es el total de espacios que tengo
        pantalla.innerText= `${valorActual}${valor}`;//Esto muestra y concatena la variable valor y valor actual
    }
}
function borrar(){
    var valorActual=document.getElementById('pantalla'); //tomar el valor actual de la pantalla
    valorActual.innerText='';//escribir "nada"
}
function guardar(signo){

    primerNumero=Number(pantalla.textContent);//agarras el texto dentro del h3
    operacion=signo
    borrar()
    console.log(primerNumero,segundoNumero)
}
function igualA(){
    
    segundoNumero=Number(pantalla.textContent);
    
    if (operacion=='+'){
        var resultado=suma (primerNumero,segundoNumero);
    }
     if (operacion=='-'){
        resultado=resta (primerNumero,segundoNumero);
     }
    if (operacion=='*'){
        resultado=multi (primerNumero,segundoNumero);
    }
    if (operacion=='/'){
        resultado=dividir (primerNumero,segundoNumero);
    }
    if (operacion =='raiz'){
        resultado=raiz (primerNumero);
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
    return a/b.toFixed(5);
}
function raiz (a){
    return Math.sqrt(a).toFixed(5);
}