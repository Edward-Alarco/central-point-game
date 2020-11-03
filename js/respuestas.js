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
                    document.getElementById('btnSiguienteTwo').removeAttribute('disabled');
                }
            })
            textareas.segundoTextArea.addEventListener('keyup',function(){
                if (textareas.segundoTextArea !== "") {
                    document.getElementById('btnSiguienteThree').removeAttribute('disabled');
                }
            })
            textareas.terceroTextArea.addEventListener('keyup',function(){
                if (textareas.terceroTextArea !== "") {
                    document.getElementById('btnSiguienteFour').removeAttribute('disabled');
                }
            })
            textareas.cuartoTextArea.addEventListener('keyup',function(){
                if (textareas.cuartoTextArea !== "") {
                    document.getElementById('btnSiguienteFive').removeAttribute('disabled');
                }
            })
            textareas.quintoTextArea.addEventListener('keyup',function(){
                if (textareas.quintoTextArea !== "") {
                    document.getElementById('btnSiguienteSix').removeAttribute('disabled');
                }
            })



            
            
            
        },


    }

    validaciones.validacion();

}())