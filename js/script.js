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
primerNivel.segundo_parrafo.innerHTML = `Al añadirle un <span>margin: auto</span> para todos sus lados, hace que se ubique en el centro de forma horizontal en el documento.`
segundoNivel.primer_parrafo.innerText = `Un cambio drastico al display de bloque es el Flex, nos ayuda a distribuir los espacios en una interfaz y mejora las alineaciones.`
segundoNivel.segundo_parrafo.innerHTML = `Con un <span>justify-content: center</span> nos reparte un espacio equitativo en ambos lados, pero sin moverlo de su posicion en y.`