function cuentaCorriente() {
  ((nombreCliente = ""), (numCuenta = ""), (tipoInteres = 0.0), (saldo = 0.0));
}

function Cuenta(nombreCliente, numCuenta, tipoInteres, saldo) {
  this.nombreCliente = nombreCliente;
  this.numCuenta = numCuenta;
  this.tipoInteres = tipoInteres;
  this.saldo = saldo;
}

function Cuenta3(c) {
  this.nombreCliente = c.nombreCliente;
  this.numCuenta = c.nombreCuenta;
  this.tipoInteres = c.tipoInteres;
  this.saldo = c.saldo;
}

function getNombre() {
  return this.nombreCliente;
}

function setNombre(val) {
  this.nombreCliente = val;
}

function getNumCuenta() {
  return this.numCuenta;
}

function setNumCuenta(val) {
  this.numCuenta = val;
}

function getTipoInteres() {
  return this.tipoInteres;
}

function setTipoInteres(val) {
  this.tipoInteres = val;
}

function getSaldo() {
  return this.saldo;
}

function setSaldo(val) {
  this.saldo = val;
}

//ingreso
function ingreso(cantidad) {
  this.saldo += cantidad;
}

//reintegro
function reintegro(cantidad) {
  this.saldo -= cantidad;
}

//transferencia
function transferencia(cuentaDestino, importe) {
  this.saldo -= importe;
  cuentaDestino.saldo += importe;
}

//ejemplo de uso
var c1 = new Cuenta("Juca", "11111", 100.0, 0.01);

c1.getNombre = getNombre;
c1.setNombre = setNombre;

c1.getSaldo = getSaldo;
c1.setSaldo = setSaldo;

console.log("Nombre del cliente: " + c1.getNombre() + ", saldo: " + c1.getSaldo());

//segundo ejemplo de uso
Banquillo = [];

var cuenta2 = new Cuenta("Sora", "111-12", 200.0, 300.00);

cuenta2.getNombre = getNombre;
cuenta2.setNombre = setNombre;

cuenta2.getSaldo = getSaldo;
cuenta2.setSaldo = setSaldo;

var cuenta3 = new Cuenta("Alvaro", "111-13", 50.0, 20.00);

cuenta3.getNombre = getNombre;
cuenta3.setNombre = setNombre;

cuenta3.getSaldo = getSaldo;
cuenta3.setSaldo = setSaldo;

var cuenta4 = new Cuenta("Jesus", "111-14", 20.0, 1000.00);

cuenta4.getNombre = getNombre;
cuenta4.setNombre = setNombre;

cuenta4.getSaldo = getSaldo;
cuenta4.setSaldo = setSaldo;

Banquillo.push(cuenta2,cuenta3,cuenta4);

var cuentaMedia = new Cuenta("Media", "111-15", 0.0, 0.0);

cuentaMedia.getNombre = getNombre;
cuentaMedia.setNombre = setNombre;

cuentaMedia.getSaldo = getSaldo;
cuentaMedia.setSaldo = setSaldo;

Banquillo.forEach((cuenta) => {
    cuentaMedia.setSaldo(cuentaMedia.getSaldo() + cuenta.getSaldo());
});

console.log("Esta es la media de todas las cuentas: " + cuentaMedia.getSaldo() / Banquillo.length);
