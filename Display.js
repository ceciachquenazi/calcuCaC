class Display {
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calcu = new Calculadora();
        this.valorActual = ''; //el display es el elemento, este es el NUMERO que estoy guardando
        this.valorAnterior = ''; 
        this.tipoOperacion = undefined;
        this.signos = {
            sumar: '+',
            dividir: '/',
            multiplicar: 'x',
            restar: '-',
        }
    }

    /* Borrar numero por numero (no tengo ese boton hecho en el html/css)
    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }
    */

    borrarTodo() {
        this.valorActual = "";
        this.valorAnterior ="";
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    agregarNumero(numero) {
        
        if (numero === "." && this.valorActual.includes('.')) return 
        this.valorActual = this.valorActual.toString() + numero.toString(); 
        this.imprimirValores();      
        
    }
    
    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior); 
        const valorActual = parseFloat(this.valorActual); 

        if( isNaN(valorActual) || isNaN(valorAnterior) ) return 
        this.valorActual = this.calcu[this.tipoOperacion](valorAnterior, valorActual); 

    }

    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular(); 
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior; 
        this.valorActual = "";
        this.imprimirValores();
    }

}

