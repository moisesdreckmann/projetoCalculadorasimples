const btns = document.querySelectorAll('.btn')

btns.forEach(btn => {
    btn.addEventListener('click', mostrar)
});

var primeiraVariavel = '', segundaVariavel = '', operador = '', resultadoFinal = ''

function mostrar(event) {

    var resultado = document.querySelector('#visorInput')
    resultado.value += this.value

    if (this.value == "clear") {
        resultado.value = ''
        primeiraVariavel = ''
        segundaVariavel = ''
        operador = ''
    }

    if(this.value == 'ce') {
        if(resultado.value != '') {
            resultado.value = resultado.value.substring(0,resultado.value.length - 3)
        }
    }
 
    if(this.value == '+' || this.value == '-' || this.value == 'x' || this.value == '/') {
        primeiraVariavel = parseFloat(operador + resultado.value.substring(0, resultado.value.length - 1))
        operador = resultado.value.slice(-1)
        resultado.value = ''
        } 
     
    if (this.value == '=') {
        segundaVariavel = parseFloat(resultado.value.substring(0,resultado.value.length - 1))
        resultado.value = ''
        
        if(operador == '+') {
            if(segundaVariavel == false) {
                resultadoFinal = primeiraVariavel + primeiraVariavel
                resultado.value = String(resultadoFinal)
            } else {
                resultadoFinal = primeiraVariavel + segundaVariavel
                resultado.value = String(resultadoFinal)
            }      
        }

        if(operador == '-') {
            if(segundaVariavel == false) {
                resultadoFinal = primeiraVariavel - primeiraVariavel
                resultado.value = String(resultadoFinal)
            } else {
                resultadoFinal = primeiraVariavel - segundaVariavel
                resultado.value = String(resultadoFinal)
            }
        }

        if(operador == 'x') {
            if(segundaVariavel == false) {
                resultadoFinal = primeiraVariavel * primeiraVariavel
                resultado.value = String(resultadoFinal)
            } else {
                resultadoFinal = primeiraVariavel * segundaVariavel
                resultado.value = String(resultadoFinal)
            }
        }

        if(operador == '/') {
            if(segundaVariavel == false) {
                resultadoFinal = primeiraVariavel / primeiraVariavel
                resultado.value = String(resultadoFinal)
            } else {
                resultadoFinal = primeiraVariavel / segundaVariavel
                resultado.value = String(resultadoFinal)
            }
        }

    }  
}
    

    
