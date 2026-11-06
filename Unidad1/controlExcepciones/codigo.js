class excepcionEquipo extends Error {
    constructor(mensaje){
        super(mensaje);
        this.name = "Excepcion Equipos";
    }
}

class Jugador {
    constructor(dorsal, nombreCompleto){
        if (dorsal < 0 || !Number.isInteger(dorsal)) {
            throw new excepcionEquipo("No puedes colocar otra cosa que no sea un numero o un dorsal menor que 0");
        }
        this.dorsal = dorsal;
        this.nombreCompleto = nombreCompleto;
        this.golesMarcados = new Map();
    }

    get dorsal(){
        return this.dorsal;
    }
    set dorsal(setDorsal){
        this.dorsal = setDorsal;
    }
    get nombreCompleto(){
        return this.nombreCompleto;
    }
    set nombreCompleto(setNombre){
        this.nombreCompleto = setNombre;
    }

    añadirGoles(partido, goles){
        if (partido < 0 || !Number.isInteger(partido)) {
            throw new excepcionEquipo("Debes colocar un numero valido de partido");
        }
        if (goles < 0 || !Number.isInteger(goles)) {
            throw new excepcionEquipo("Debes colocar un numero valido de goles");
        }
        this.golesMarcados.set(partido,goles);
    }
}

class Equipos {
    constructor(nombreEquipo){
        this.nombreEquipo = nombreEquipo;
        this.jugadores = [];
    }
    get nombreEquipo(){
        return this.nombreEquipo;
    }
    set nombreEquipo(setNombre){
        this.nombreEquipo = setNombre;
    }

    añadirJugador(jugador){
        if (jugador instanceof jugador){
            throw new excepcionEquipo("Necesitas añadir un jugador");
        }
        for (const j of this.jugadores){
            if (j.dorsal === jugador.dorsal){
                throw new excepcionEquipo("El jugador que has añadido tiene que tener otra dorsal");
            }
        }
        this.jugadores.push(jugador);
    }
}



