class Carta {

    constructor(numero, palo) {
        if (numero === undefined && palo === undefined) {
            this.numero = 1;
            this.palo = 'c';
        } else {
            this.numero = numero;
            this.palo = palo;
        }
    }
    
    getNumero() {
    return this.numero;
    }

    getPalo() {
        return this.palo;
    }

    setNumero(nuevoNumero) {
        if (nuevoNumero < 1 || nuevoNumero > 13 || !Number.isInteger(nuevoNumero)) {
        console.log("El número de la carta debe ser un número entero entre 1 y 13.");
        }
        this.numero = nuevoNumero;
    }

    setPalo(nuevoPalo) {
        const palosValidos = ['c', 'p', 'r', 't'];
        if (!palosValidos.includes(nuevoPalo)) {
        console.log("El palo debe ser una de estas letras: 'c', 'p', 'r', 't'.");
        }
        this.palo = nuevoPalo;
    }
    static clonar(carta) {
        return new Carta(carta.getNumero(), carta.getPalo());
    }

    mostrarCarta() {
        const diccionarioNumeros = {
        1: 'As',
        11: 'Jack',
        12: 'Reina',
        13: 'Rey'
        };

        const diccionarioPalos = {
        'c': 'corazones',
        'p': 'picas',
        'r': 'rombos',
        't': 'tréboles'
        };

        const nombreNumero = diccionarioNumeros[this.numero] || this.numero;
        const nombrePalo = diccionarioPalos[this.palo];

        console.log("Es el " + nombreNumero + " de " + nombrePalo);
    }

    comparar(otraCarta) {
    

        const ordenPalos = ['t', 'r', 'p', 'c']; 
        let resultado = 0;

        if (this.numero > otraCarta.getNumero()) {
        resultado = 1;
        } else if (this.numero < otraCarta.getNumero()) {
        resultado = -1;
        } else {
        const valorMiPalo = ordenPalos.indexOf(this.palo);
        const valorOtroPalo = ordenPalos.indexOf(otraCarta.getPalo());

        if (valorMiPalo > valorOtroPalo) {
            resultado = 1;
        } else if (valorMiPalo < valorOtroPalo) {
            resultado = -1;
        } else {
            resultado = 0; 
        }
        }

        if (resultado === 1) {
        console.log("Resultado: La carta actual es la ganadora.");
        } else if (resultado === -1) {
        console.log("Resultado: La carta recibida es la ganadora.");
        } else {
        console.log("Resultado: Hay un empate, las cartas son idénticas.");
        }

        return resultado;
    }
    }
    
    const carta1 = new Carta(1, 'c');
    const carta2 = new Carta(13, 'p');
    const carta3 = new Carta(7, 'r');
    
    carta1.mostrarCarta(); 
    carta2.mostrarCarta(); 
    carta3.mostrarCarta(); 

    const cartaDefecto = new Carta();
    console.log("Carta por defecto:");
    cartaDefecto.mostrarCarta(); 

    const cartaCopia = Carta.clonar(carta2);
    console.log("Copia de la carta 2 (Rey de picas):");
    cartaCopia.mostrarCarta(); 

    console.log("Comparamos Rey (13) vs As (1):");
    carta2.comparar(carta1); 

    console.log("Comparamos 7 de rombos vs As de corazones:");
    carta3.comparar(carta1); 

    console.log("Empate de números (Rey de picas vs Rey de corazones):");
    const reyCorazones = new Carta(13, 'c');
    carta2.comparar(reyCorazones); 

    console.log("Empate total (Rey de picas vs Copia de Rey de picas):");
    carta2.comparar(cartaCopia); 