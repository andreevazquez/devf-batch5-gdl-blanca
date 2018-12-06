        function muestraMensaje(){
        var tablas=document.getElementById('tablas').value
        if(tablas.length>0)
        var elBody=document.getElementsByTagName('body') [0];
        for(i=1; i<=tablas; i++){
            console.log(`Tabla del ${i}`);
                for(x=1; x<=10; x++){
                    var tarjetaTabla=document.createElement('div');
                    tarjetaTabla.textContent=`${x} x ${i} = ${x*i}`;
                    //alert(`Tabla del ${i}`);
                    elBody.appendChild(tarjetaTabla);
                    console.log(`${x} x ${i} = ${x*i}`);
                    tarjetaTabla.classList.add("")
                }
            }
        }
        muestraMensaje();
