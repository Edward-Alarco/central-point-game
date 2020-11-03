(function(){

    

    var textareas = {
        primerTextArea: document.getElementById('code-one'),
        segundoTextArea: document.getElementById('code-two'),
        terceroTextArea: document.getElementById('code-three'),
        cuartoTextArea: document.getElementById('code-four'),
        quintoTextArea: document.getElementById('code-five'),
        sextoTextArea: document.getElementById('code-six'),
    }


    var validaciones = {

        validacion: function(){

            textareas.primerTextArea.addEventListener('keyup',function(){
                if (textareas.primerTextArea !== "") {
                    if (textareas.primerTextArea.value.toLowerCase() == 'margin:auto' || textareas.primerTextArea.value.toLowerCase() == 'margin:0 auto'
                    || textareas.primerTextArea.value.toLowerCase() == 'margin: auto' || textareas.primerTextArea.value.toLowerCase() == 'margin: 0 auto') {
                        document.querySelector('.idContenedor').className = 'figure idContenedor active'
                        document.getElementById('btnSiguienteTwo').removeAttribute('disabled');
                        document.getElementById('btnSiguienteTwo').style.opacity = 1;
                    }else{
                        document.querySelector('.idContenedor').className = 'figure idContenedor'
                        document.getElementById('btnSiguienteTwo').style.opacity = 0.65;
                    }
                }else{
                    document.getElementById('btnSiguienteTwo').setAttribute('disabled');
                }
            })
            textareas.segundoTextArea.addEventListener('keyup',function(){
                if (textareas.segundoTextArea !== "") {
                    if (textareas.segundoTextArea.value.toLowerCase() == 'justify-content:center' || textareas.segundoTextArea.value.toLowerCase() == 'justify-content: center' ) {
                        document.querySelector('.idHijo').className = 'figure idHijo active'
                        document.getElementById('btnSiguienteThree').removeAttribute('disabled');
                        document.getElementById('btnSiguienteThree').style.opacity = 1;
                    }else{
                        document.querySelector('.idHijo').className = 'figure idHijo'
                        document.getElementById('btnSiguienteThree').style.opacity = 0.65;
                    }
                }else{
                    document.getElementById('btnSiguienteTwo').setAttribute('disabled');
                }
            })
            textareas.terceroTextArea.addEventListener('keyup',function(){
                if (textareas.terceroTextArea !== "") {
                    if (textareas.terceroTextArea.value.toLowerCase() == 'align-items:center' || textareas.terceroTextArea.value.toLowerCase() == 'align-items: center') {
                        document.querySelector('.idHijo2').className = 'figure idHijo2 active'
                        document.getElementById('btnSiguienteFour').removeAttribute('disabled');
                        document.getElementById('btnSiguienteFour').style.opacity = 1;
                    }else{
                        document.querySelector('.idHijo2').className = 'figure idHijo2'
                        document.getElementById('btnSiguienteFour').style.opacity = 0.65;
                    }
                }else{
                    document.getElementById('btnSiguienteTwo').setAttribute('disabled');
                }
            })
            textareas.cuartoTextArea.addEventListener('keyup',function(){
                if (textareas.cuartoTextArea !== "") {
                    if (textareas.cuartoTextArea.value.toLowerCase() == 'text-align:center' || textareas.cuartoTextArea.value.toLowerCase() == 'text-align: center') {
                        document.querySelector('.idTexto').className = 'figure idTexto active'
                        document.getElementById('btnSiguienteFive').removeAttribute('disabled');
                        document.getElementById('btnSiguienteFive').style.opacity = 1;
                    }else{
                        document.querySelector('.idTexto').className = 'figure idTexto'
                        document.getElementById('btnSiguienteFive').style.opacity = 0.65;
                    }
                }else{
                    document.getElementById('btnSiguienteTwo').setAttribute('disabled');
                }
            })
            textareas.quintoTextArea.addEventListener('keyup',function(){
                if (textareas.quintoTextArea !== "") {
                    if (textareas.primerTextArea.value.toLowerCase() == 'margin:auto' || textareas.primerTextArea.value.toLowerCase() == 'margin:0 auto'
                    || textareas.primerTextArea.value.toLowerCase() == 'margin: auto' || textareas.primerTextArea.value.toLowerCase() == 'margin: 0 auto') {
                        document.querySelector('.claseContenedor').className = 'figure claseContenedor active'
                        document.getElementById('btnSiguienteSix').removeAttribute('disabled');
                        document.getElementById('btnSiguienteSix').style.opacity = 1;
                    }else{
                        document.querySelector('.claseContenedor').className = 'figure claseContenedor'
                        document.getElementById('btnSiguienteSix').style.opacity = 0.65;
                    }
                }else{
                    document.getElementById('btnSiguienteTwo').setAttribute('disabled');
                }
            })



            
            
            
        },


    }

    validaciones.validacion();

}())