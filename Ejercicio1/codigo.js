//Vamos a crear el objeto tiempo personalizado haciendo uso del Object Date() de Javascript. Con las siguientes especificaciones:

//Se va a almacenar en un Object de javascript (no usar class todavía)
//Propiedades: año, mes, dia, hora, minuto y segundo
//Constructor: Un solo constructor que reciba los 6 parámetros y cree un objeto de tipo tiempo. Si todos los parámetros valen 0, entonces inicializa el objeto con la fecha y hora actual.
//Métodos: getters y setters (tambien getFechaCompleta y getHoraCompleta: devuelven dd/mm/aaaa y hh:mm:ss respectivamente)
//esBisiesto() true si es bisiesto, false en otro caso
//esMayor(otroTiempo) true si es mayor que otroTiempo, false en otro caso
//esMenor(otroTiempo) true si es menor que otroTiempo, false en otro caso
//esIgual(otroTiempo) true si es igual que otroTiempo, false en otro caso
//sumaHora(otroTiempo) suma la hora de otroTiempo
//Realiza ejemplos de uso de los métodos y muéstralos por consola.

function Clock(año, mes, dia, hora, minuto, segundo) {
    if (año === 0 && mes === 0 && dia === 0 && hora === 0 && minuto === 0 && segundo === 0) {
        var momentoActual = new Date();
        this.año = momentoActual.getFullYear();
        this.mes = momentoActual.getMonth() + 1; // Los meses en Date van de 0 a 11
        this.dia = momentoActual.getDate();      // getDate() para el día del mes
        this.hora = momentoActual.getHours();
        this.minuto = momentoActual.getMinutes();
        this.segundo = momentoActual.getSeconds();
    } else {
        this.año = año;
        this.mes = mes;
        this.dia = dia;
        this.hora = hora;
        this.minuto = minuto;
        this.segundo = segundo;
    }
}

// getters y setters añadidos al prototipo
Clock.prototype.getAño = function() { 
    return this.año; 
};
Clock.prototype.setAño = function(valor) { 
    this.año = valor; 
};

Clock.prototype.getMes = function() { 
    return this.mes; 
};
Clock.prototype.setMes = function(valor) { 
    this.mes = valor; 
};

Clock.prototype.getDia = function() { 
    return this.dia; 
};
Clock.prototype.setDia = function(valor) { 
    this.dia = valor; 
};

Clock.prototype.getHora = function() { 
    return this.hora; 
};
Clock.prototype.setHora = function(valor) { 
    this.hora = valor; 
};

Clock.prototype.getMinuto = function() { 
    return this.minuto; 
};
Clock.prototype.setMinuto = function(valor) { 
    this.minuto = valor; 
};

Clock.prototype.getSegundo = function() { 
    return this.segundo; 
};
Clock.prototype.setSegundo = function(valor) { 
    this.segundo = valor; 
};


// getFechaCompleta y getHoraCompleta
Clock.prototype.getFechaCompleta = function() {
    const dd = String(this.dia).padStart(2, '0');
    const mm = String(this.mes).padStart(2, '0');
    const aa = String(this.año);
    return dd + "/" + mm + "/" + aa;
};

Clock.prototype.getHoraCompleta = function() {
    const hh = String(this.hora).padStart(2, '0');
    const min = String(this.minuto).padStart(2, '0');
    const ss = String(this.segundo).padStart(2, '0');
    return hh + ":" + min + ":" + ss;
};

// esBisiesto
Clock.prototype.esBisiesto = function() {
    // Usamos this.año en lugar de 'year'
    return (this.año % 4 === 0 && this.año % 100 !== 0) || (this.año % 400 === 0);
};

Clock.prototype.toDate = function() {
    // Recuerda restar 1 al mes porque Date usa meses indexados en 0
    return new Date(this.año, this.mes - 1, this.dia, this.hora, this.minuto, this.segundo);
};

// Comparaciones
Clock.prototype.esMayor = function(otroTiempo) {
    return this.toDate().getTime() > otroTiempo.toDate().getTime();
};

Clock.prototype.esMenor = function(otroTiempo) {
    return this.toDate().getTime() < otroTiempo.toDate().getTime();
};

Clock.prototype.esIgual = function(otroTiempo) {
    return this.toDate().getTime() === otroTiempo.toDate().getTime();
};

// Suma Hora
Clock.prototype.sumaHora = function(otroTiempo) {
    // Usamos el constructor Date para que maneje el desbordamiento de horas/días automáticamente
    var d = new Date(
        this.año, 
        this.mes - 1, 
        this.dia, 
        this.hora + otroTiempo.getHora(), 
        this.minuto + otroTiempo.getMinuto(), 
        this.segundo + otroTiempo.getSegundo()
    );
    
    this.año = d.getFullYear();
    this.mes = d.getMonth() + 1;
    this.dia = d.getDate();
    this.hora = d.getHours();
    this.minuto = d.getMinutes();
    this.segundo = d.getSeconds();
};

// ==========================================
// Ejemplos de uso 
// ==========================================

const dia1 = new Clock(2022, 4, 12, 21, 21, 21);
const dia2 = new Clock(2024, 6, 11, 2, 2, 7); // Año bisiesto
const dia3 = new Clock(2022, 4, 12, 21, 21, 21);
const diaActual = new Clock(0,0,0,0,0,0);

console.log("--- Fechas y Horas ---");
console.log("Día 1 completo:", dia1.getFechaCompleta(), dia1.getHoraCompleta());
console.log("Día actual:", diaActual.getFechaCompleta(), diaActual.getHoraCompleta());

console.log("\n--- Comprobando Bisiestos ---");
console.log("¿El año " + dia1.getAño() + " es bisiesto?", dia1.esBisiesto()); // false
console.log("¿El año " + dia2.getAño() + " es bisiesto?", dia2.esBisiesto()); // true

console.log("\n--- Comparaciones ---");
console.log("¿Día 1 es mayor que Día 2?", dia1.esMayor(dia2)); // false
console.log("¿Día 1 es menor que Día 2?", dia1.esMenor(dia2)); // true
console.log("¿Día 1 es igual que Día 3?", dia1.esIgual(dia3)); // true

console.log("\n--- Sumando Horas ---");
console.log("Día 1 original:", dia1.getFechaCompleta(), dia1.getHoraCompleta());
const tiempoSumar = new Clock(0, 0, 0, 5, 40, 0); // Sumar 5h 40m
dia1.sumaHora(tiempoSumar);
console.log("Día 1 tras sumar 5h 40m:", dia1.getFechaCompleta(), dia1.getHoraCompleta());