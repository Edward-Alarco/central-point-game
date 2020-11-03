(function(){
    var primerNivel = {
        primer_parrafo: document.getElementById('primer-parrafo-primer-nivel'),
        segundo_parrafo: document.getElementById('segundo-parrafo-primer-nivel'),
    }
    
    var segundoNivel = {
        primer_parrafo: document.getElementById('primer-parrafo-segundo-nivel'),
        segundo_parrafo: document.getElementById('segundo-parrafo-segundo-nivel'),
    }
    
    var tercerNivel = {
        primer_parrafo: document.getElementById('primer-parrafo-tercer-nivel'),
        segundo_parrafo: document.getElementById('segundo-parrafo-tercer-nivel'),
    }
    
    var cuartoNivel = {
        primer_parrafo: document.getElementById('primer-parrafo-cuarto-nivel'),
        segundo_parrafo: document.getElementById('segundo-parrafo-cuarto-nivel'),
    }
    
    var quintoNivel = {
        primer_parrafo: document.getElementById('primer-parrafo-quinto-nivel'),
        segundo_parrafo: document.getElementById('segundo-parrafo-quinto-nivel'),
    }
    
    primerNivel.primer_parrafo.innerText = `Añadir la propiedad del display de bloque, nos facilita entender las medidas y limitaciones de un objeto.`
    primerNivel.segundo_parrafo.innerHTML = `Al añadirle un <span class="auto">margin: auto</span> para todos sus lados, hace que se ubique en el centro de forma horizontal en el documento.`
    segundoNivel.primer_parrafo.innerText = `Un cambio drastico al display de bloque es el Flex, nos ayuda a distribuir los espacios en una interfaz, además de mejorar las alineaciones.`
    segundoNivel.segundo_parrafo.innerHTML = `Con un <span class="auto">justify-content: center</span><span class="red"> al contenedor padre</span> nos reparte un espacio equitativo en ambos lados para el .hijo, pero sin moverlo de su posicion en Y.`
    tercerNivel.primer_parrafo.innerHTML = `Al tener el objeto centrado en el eje de la X, <span class="red">con respecto a su contenedor padre</span>, podemos añadirle otra propiedad que viene con el <span class="auto">display: flex</span>`
    tercerNivel.segundo_parrafo.innerHTML = `<span class="auto">align-items: center</span> nos permite medir los lados en el eje Y y con respecto a la altura de su padre, se mueve al centro considerando todos los lados.`
    cuartoNivel.primer_parrafo.innerText = `Centrar un texto es lo más fácil que podemos realizar, este mismo tienes bastantes propiedades a su disposición.`
    cuartoNivel.segundo_parrafo.innerHTML = `Y entre ellas, no es para nada una novedad el uso de <span class="auto">text-align: center</span>, que te permite mover el texto en el eje X, con las medidas iguales a los lados.`
    quintoNivel.primer_parrafo.innerText = `Las imagenes son de esos objetos dificiles de centrar en el lugar que se desea. Algunos desconocen que al añadir el display de bloque, la tarea es sencilla.`
    quintoNivel.segundo_parrafo.innerHTML = `Tratamos a este como un section o un div cualquiera. Facil de situar en el centro, con el margen automatizado en los lados.`
    
    // Botones de la Lista Pagination
    const buttonone = document.getElementById('list-1-list')
    const buttontwo = document.getElementById('list-2-list')
    const buttonthree = document.getElementById('list-3-list')
    const buttonfour = document.getElementById('list-4-list')
    const buttonfive = document.getElementById('list-5-list')
    
    buttonone.addEventListener('click',btnuno);
    buttontwo.addEventListener('click',btndos);
    buttonthree.addEventListener('click',btntres);
    buttonfour.addEventListener('click',btncuatro);
    buttonfive.addEventListener('click',btncinco);
    
    // Botones Siguientes
    const btnSiguienteToTwo = document.getElementById('btnSiguienteTwo')
    const btnSiguienteToThree = document.getElementById('btnSiguienteThree')
    const btnSiguienteToFour = document.getElementById('btnSiguienteFour')
    const btnSiguienteToFive = document.getElementById('btnSiguienteFive')
    
    btnSiguienteToTwo.addEventListener('click',toTwo);
    btnSiguienteToThree.addEventListener('click',toThree);
    btnSiguienteToFour.addEventListener('click',toFour);
    btnSiguienteToFive.addEventListener('click',toFive);

    //Imagenes
    const imgIdContenedor = document.querySelector('.idContenedor')
    const imgIdPadre = document.querySelector('.idPadre')
    const imgIdHijo = document.querySelector('.idHijo')
    const imgIdPadre2 = document.querySelector('.idPadre2')
    const imgIdHijo2 = document.querySelector('.idHijo2')
    const imgTexto = document.querySelector('.idTexto')
    const imgImage = document.querySelector('.idImage')
    
    
    // Funciones
    
    function btnuno (){
        document.getElementsByClassName('texto-cod-one')[0].style.display = "block"
        document.getElementsByClassName('texto-cod-two')[0].style.display = "none"
        document.getElementsByClassName('texto-cod-three')[0].style.display = "none"
        document.getElementsByClassName('texto-cod-four')[0].style.display = "none"
        document.getElementsByClassName('texto-cod-five')[0].style.display = "none"

        document.getElementById('code-one').value = ""
        document.getElementById('code-two').value = ""
        document.getElementById('code-three').value = ""
        document.getElementById('code-four').value = ""
    }
    
    function btndos (){
        document.getElementsByClassName('texto-cod-one')[0].style.display = "none"
        document.getElementsByClassName('texto-cod-two')[0].style.display = "block"
        document.getElementsByClassName('texto-cod-three')[0].style.display = "none"
        document.getElementsByClassName('texto-cod-four')[0].style.display = "none"
        document.getElementsByClassName('texto-cod-five')[0].style.display = "none"

        document.getElementById('code-one').value = ""
        document.getElementById('code-two').value = ""
        document.getElementById('code-three').value = ""
        document.getElementById('code-four').value = ""

        imgIdContenedor.style.display = "none"
        imgIdPadre.style.display = "block"
        imgIdHijo.style.display = "block"
    }
    
    function btntres (){
        document.getElementsByClassName('texto-cod-one')[0].style.display = "none"
        document.getElementsByClassName('texto-cod-two')[0].style.display = "none"
        document.getElementsByClassName('texto-cod-three')[0].style.display = "block"
        document.getElementsByClassName('texto-cod-four')[0].style.display = "none"
        document.getElementsByClassName('texto-cod-five')[0].style.display = "none"

        document.getElementById('code-one').value = ""
        document.getElementById('code-two').value = ""
        document.getElementById('code-three').value = ""
        document.getElementById('code-four').value = ""

        imgIdPadre.style.display = "none"
        imgIdHijo.style.display = "none"
        imgIdPadre2.style.display = "block"
        imgIdHijo2.style.display = "block"
    }
    
    function btncuatro (){
        document.getElementsByClassName('texto-cod-one')[0].style.display = "none"
        document.getElementsByClassName('texto-cod-two')[0].style.display = "none"
        document.getElementsByClassName('texto-cod-three')[0].style.display = "none"
        document.getElementsByClassName('texto-cod-four')[0].style.display = "block"
        document.getElementsByClassName('texto-cod-five')[0].style.display = "none"

        document.getElementById('code-one').value = ""
        document.getElementById('code-two').value = ""
        document.getElementById('code-three').value = ""
        document.getElementById('code-four').value = ""

        imgIdPadre2.style.display = "none"
        imgIdHijo2.style.display = "none"
        imgTexto.style.display = "block"
    }
    
    function btncinco (){
        document.getElementsByClassName('texto-cod-one')[0].style.display = "none"
        document.getElementsByClassName('texto-cod-two')[0].style.display = "none"
        document.getElementsByClassName('texto-cod-three')[0].style.display = "none"
        document.getElementsByClassName('texto-cod-four')[0].style.display = "none"
        document.getElementsByClassName('texto-cod-five')[0].style.display = "block"

        document.getElementById('code-one').value = ""
        document.getElementById('code-two').value = ""
        document.getElementById('code-three').value = ""
        document.getElementById('code-four').value = ""

        imgTexto.style.display = "none"
        imgImage.style.display = "block"
    }
    
    // Funciones para los Botones Siguiente
    
    function toTwo(){
        document.getElementsByClassName('texto-cod-one')[0].style.display = "none"
        document.getElementsByClassName('texto-cod-two')[0].style.display = "block"
        document.getElementsByClassName('texto-cod-three')[0].style.display = "none"
        document.getElementsByClassName('texto-cod-four')[0].style.display = "none"
        document.getElementsByClassName('texto-cod-five')[0].style.display = "none"
        
        document.getElementById('list-1').className = "tab-pane fade"
        document.getElementById('list-2').className = "tab-pane fade show active"
        document.getElementById('list-1-list').className = "border-0 rounded-0 p-1 text-center list-group-item list-group-item-action"
        document.getElementById('list-2-list').className = "border-0 rounded-0 p-1 text-center list-group-item list-group-item-action active"
    }
    
    function toThree(){
        document.getElementsByClassName('texto-cod-one')[0].style.display = "none"
        document.getElementsByClassName('texto-cod-two')[0].style.display = "none"
        document.getElementsByClassName('texto-cod-three')[0].style.display = "block"
        document.getElementsByClassName('texto-cod-four')[0].style.display = "none"
        document.getElementsByClassName('texto-cod-five')[0].style.display = "none"
        
        document.getElementById('list-2').className = "tab-pane fade"
        document.getElementById('list-3').className = "tab-pane fade show active"
        document.getElementById('list-2-list').className = "border-0 rounded-0 p-1 text-center list-group-item list-group-item-action"
        document.getElementById('list-3-list').className = "border-0 rounded-0 p-1 text-center list-group-item list-group-item-action active"
    }
    
    function toFour(){
        document.getElementsByClassName('texto-cod-one')[0].style.display = "none"
        document.getElementsByClassName('texto-cod-two')[0].style.display = "none"
        document.getElementsByClassName('texto-cod-three')[0].style.display = "none"
        document.getElementsByClassName('texto-cod-four')[0].style.display = "block"
        document.getElementsByClassName('texto-cod-five')[0].style.display = "none"
        
        document.getElementById('list-3').className = "tab-pane fade"
        document.getElementById('list-4').className = "tab-pane fade show active"
        document.getElementById('list-3-list').className = "border-0 rounded-0 p-1 text-center list-group-item list-group-item-action"
        document.getElementById('list-4-list').className = "border-0 rounded-0 p-1 text-center list-group-item list-group-item-action active"
    }
    
    function toFive(){
        document.getElementsByClassName('texto-cod-one')[0].style.display = "none"
        document.getElementsByClassName('texto-cod-two')[0].style.display = "none"
        document.getElementsByClassName('texto-cod-three')[0].style.display = "none"
        document.getElementsByClassName('texto-cod-four')[0].style.display = "none"
        document.getElementsByClassName('texto-cod-five')[0].style.display = "block"
        
        document.getElementById('list-4').className = "tab-pane fade"
        document.getElementById('list-5').className = "tab-pane fade show active"
        document.getElementById('list-4-list').className = "border-0 rounded-0 p-1 text-center list-group-item list-group-item-action"
        document.getElementById('list-5-list').className = "border-0 rounded-0 p-1 text-center list-group-item list-group-item-action active"
    }
    
    
}())