(function(){

    

    var textareas = {
        primerTextArea: document.getElementById('code-one'),
        segundoTextArea: document.getElementById('code-two'),
        terceroTextArea: document.getElementById('code-three'),
        cuartoTextArea: document.getElementById('code-four'),
        quintoTextArea: document.getElementById('code-five')
    }

    var rptasUno = {
        casouno: 'margin: auto',
        casodos: 'margin: 0 auto;',
        casotres: 'margin:auto',
        casocuatro: 'margin:0 auto',
        casocinco: 'margin:auto;',
        casoseis: 'margin: auto;'
    }

    var rptasDos = {
        casouno: 'justify-content: center;',
        casodos: 'justify-content:center',
        casotres: 'justify-content: center',
        casocuatro: 'justify-content:center;'
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



            
            
            
        },


    }

    validaciones.validacion();

}())