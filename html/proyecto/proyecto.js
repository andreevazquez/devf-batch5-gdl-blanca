// var audio;

// audio = document.getElementById("audio1");

// function stopAudio(){
//     audio.pause();
//  }

// function reproducirAudio(num){
//     play('sonido'+num+'.mp3');
// }
// new audio (src).play();

var grabando = false;
var secuencia = [];

function reproducir(audioId){
        elementoDeAudio = document.getElementById(audioId);
        if (elementoDeAudio.paused){
            elementoDeAudio.currentTime= 0;
            elementoDeAudio.play();
        } else {
            elementoDeAudio.pause();
        }
    }


var tiempoInicial;
// Recursividad
function reproducirAudioSecuencia(indice){
    // Si no estamos grabando podemos reproducir
    if (!grabando){
        // Checamos que tengamos el numero de elementos de la secuencia
        if (indice < secuencia.length){
            // Sacamos el valor del array
            var valorSecuencia = secuencia[indice];
            if (indice == 0){
                // En el primer elemento reproducimos el sonido, sacamos el tiempo en el que se reprodujo
                // y mandamos a ejecutar nuevamente este metodo, el cual entrara ahora en else porque aumento +1
                tiempoInicial = valorSecuencia.fecha;
                reproducirAudio(valorSecuencia.audio);
                reproducirAudioSecuencia(indice + 1);
            } else {
                // Sacamos la diferencia de tiempo de cuando se inicio la reproduccion 
                tiempoDiferencia = valorSecuencia.fecha - tiempoInicial;
                // El nuevo tiempo inicial es el ultimo valor que se reprodujo
                tiempoInicial = valorSecuencia.fecha;
                // Mandamos a reproducir el sonido en el furuto de ese tiempo y mandamos a ejecutar este mismo metodo
                // por si existen mas valores tambien sean ejecutados igual que este
                setTimeout( function (){ 
                    reproducirAudio(valorSecuencia.audio) 
                    reproducirAudioSecuencia(indice + 1)
                }, tiempoDiferencia)
            }
        }
    }
    
}

function reproducirAudio(numero){ 
    if(grabando){
        var registro ={} //registro para saber el audio y cuando se va a reproducir
        registro.audio = numero; //numero, que es lo que va a reproducir
        registro.fecha = new Date(); //cuando se va a reproducir
        secuencia.push(registro); 
        console.log (secuencia);
    }
    ruta = 'audio/sound' + numero + '.mp3';
    audio = new Audio(ruta);
    audio.play();
}

function reproducirSecuencia(){
    // Cuando no estamos grabando se puede reproucir la secuenia
    if (!grabando){
        var tiempoDeInicio;
        // Recorrer la secuencia que grabamos
        for(i=0; i < secuencia.length; i++){
            var valorSecuencia = secuencia[i];
            // Cuando estamos en el primer valor de la secuencia reproducirmos el audio
            // y tomamos nota de cuando se reprodujo
            if (i==0){
                tiempoDeInicio = valorSecuencia.fecha;
                reproducirAudio(valorSecuencia.audio)
            } else {
                // Cuando no es el primer valor vemos cuanto tiempo hubo de diferencia entre el primer y el otro valor
                tiempoDiferencia = valorSecuencia.fecha - tiempoDeInicio;
                // Mandamos a reproducir el sonido con esa diferencia de tiempo
                var audioParaReproducir = valorSecuencia.audio
                setTimeout(function (){ reproducirAudio(audioParaReproducir) }, tiempoDiferencia)
            }
        }
    }
}

function detenerGrabacion(){
    grabando=false;
}

function grabar(){
    secuencia = [];
    grabando = true;
}