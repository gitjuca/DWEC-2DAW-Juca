class Terminal {
    constructor(numero){
        this.numero = numero;
        this.tiempo = 0;
    }
    llama(telefono, duracion){
            this.tiempo += duracion;
            telefono.tiempo += duracion;
    }
}
class Movil extends Terminal {
    constructor(numero, tarifa){
        super(numero);
        if (tarifa !== "rata" && tarifa !== "mono" && tarifa !== "bisonte"){
            this.tarifa = "rata";
        }else{
            this.tarifa = tarifa;
        }
        this.coste = 0;
    }

    llama(movil, duracion){
        this.tiempo += duracion;
        movil.tiempo += duracion;
    if(this.tarifa === "rata"){
        this.coste = (duracion / 60) * 6;
    }else if(this.tarifa === "mono"){
        this.coste = (duracion / 60) * 12;
    }else if(this.tarifa === "bisonte"){
        this.coste = (duracion / 60) * 30;
    }
}
}




//Código:
let m1 = new Movil("678 11 22 33", "rata");
let m2 = new Movil("644 74 44 69", "mono");
let m3 = new Movil("622 32 89 09", "bisonte");
console.log(m1);
console.log(m2);
m1.llama(m2, 320);
m1.llama(m3, 200);
m2.llama(m3, 550);
console.log(m1);
console.log(m2);
console.log(m3);