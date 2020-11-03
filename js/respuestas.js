(function(){

    

    var textareas = {
        primerTextArea: document.getElementById('code-one').value,
        segundoTextArea: document.getElementById('code-two').value,
        terceroTextArea: document.getElementById('code-three').value,
        cuartoTextArea: document.getElementById('code-four').value,
        quintoTextArea: document.getElementById('code-five').value
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
            if (textareas.primerTextArea !== "") {
                document.getElementById('btnSiguienteTwo').removeAttribute('disabled');
            }
            if (textareas.segundoTextArea !== "") {
                document.getElementById('btnSiguienteThree').removeAttribute('disabled');
            }
            if (textareas.terceroTextArea !== "") {
                document.getElementById('btnSiguienteFour').removeAttribute('disabled');
            }
            if (textareas.cuartoTextArea !== "") {
                document.getElementById('btnSiguienteFive').removeAttribute('disabled');
            }
        },


    }

    validaciones.validacion();

}())