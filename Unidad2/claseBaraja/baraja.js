class ExcepcionesCarta extends Error {
    constructor(message) {
        super(message);
    }
}

class Carta {

    constructor(numero, palo) {
        if (numero === undefined && palo === undefined) {
            this.numero = 1;
            this.palo = 'c';
        }else if (numero < 1 || numero > 13 || !Number.isInteger(numero)) {
            throw new ExcepcionesCarta("El número de la carta debe ser un número entero entre 1 y 13.");
        }else {
            this.numero = numero;
            this.palo = palo;
        }
        this.robada = false;
    }
    
    getNumero() {
    return this.numero;
    }

    getPalo() {
        return this.palo;
    }

    setNumero(nuevoNumero) {
        if (nuevoNumero < 1 || nuevoNumero > 13 || !Number.isInteger(nuevoNumero)) {
            throw new ExcepcionesCarta("El número de la carta debe ser un número entero entre 1 y 13.");
        }
        this.numero = nuevoNumero;
    }

    setPalo(nuevoPalo) {
        const palosValidos = ['c', 'p', 'r', 't'];
        if (!palosValidos.includes(nuevoPalo)) {
            throw new ExcepcionesCarta("El palo debe ser una de estas letras: 'c', 'p', 'r', 't'.");
        }
        this.palo = nuevoPalo;
    }
    static clonar(carta) {
        if (!(carta instanceof Carta)) {
            throw new ExcepcionesCarta("El objeto proporcionado no es una instancia de la clase Carta.");
        }
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
        if (!(otraCarta instanceof Carta)) {
            throw new ExcepcionesCarta("El objeto proporcionado no es una instancia de la clase Carta.");
        }

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

class Baraja {
            constructor(tipo) {
                this.cartas = [];
                this.tipo = tipo;
                
                if (this.tipo === "francesa") {
                    const palos = ['c', 'r', 'p', 't']; 
                    for (let palo of palos) {
                        for (let num = 1; num <= 13; num++) {
                            this.cartas.push(new Carta(num, palo));
                        }
                    }
                } else if (this.tipo === "española") {
                    const palos = ['o', 'c', 'e', 'b'];
                    for (let palo of palos) {
                        for (let num = 1; num <= 12; num++) {
                            this.cartas.push(new Carta(num, palo));
                        }
                    }
                }
            }

            robar() {
                for (let i = 0; i < this.cartas.length; i++) {
                    if (!this.cartas[i].robada) {
                        this.cartas[i].robada = true;
                        return Carta.clonar(this.cartas[i]);
                    }
                }
                return null;
            }

            numCartas() {
                return this.cartas.filter(carta => !carta.robada).length;
            }

            barajar() {
                for (let i = this.cartas.length - 1; i > 0; i--) {
                    let j = Math.floor(Math.random() * (i + 1));
                    let temp = this.cartas[i];
                    this.cartas[i] = this.cartas[j];
                    this.cartas[j] = temp;
                }
            }

            cortar() {
                let posicionCorte = Math.floor(Math.random() * this.cartas.length);
                let bloqueSuperior = this.cartas.slice(0, posicionCorte);
                let bloqueInferior = this.cartas.slice(posicionCorte);
                this.cartas = bloqueInferior.concat(bloqueSuperior);
            }
        }

let miBaraja;
const numCartas = document.getElementById('numCartas');
const cartasRobadas = document.getElementById('cartasRobadas');

function actualizarContador() {
    if (miBaraja) {
        numCartas.textContent = miBaraja.numCartas();
    }
}

document.getElementById('btnCrear').addEventListener('click', () => {
    miBaraja = new Baraja("francesa"); 
    actualizarContador();
});

document.getElementById('btnBarajar').addEventListener('click', () => {
    if (!miBaraja) return alert('Crea una baraja primero');
    miBaraja.barajar();
});

document.getElementById('btnCortar').addEventListener('click', () => {
    if (!miBaraja) return alert('Crea una baraja primero');
    miBaraja.cortar();
});

document.getElementById('btnRobar').addEventListener('click', () => {
    if (!miBaraja) return alert('Crea una baraja primero');
    if (miBaraja.numCartas() === 0) return alert('No quedan cartas');

    let cartaRobada = miBaraja.robar();
    actualizarContador();

    let img = document.createElement("img");
    let rutaImagen = "img/" + cartaRobada.getPalo() + cartaRobada.getNumero() + ".jpg";
    
    img.src = rutaImagen;
    img.className = "cartaImg";
    cartasRobadas.appendChild(img);
});

document.getElementById('btnCrear').click();