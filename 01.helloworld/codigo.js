//Código javascript
var myVar = "my value";

(function (){
    //var myVar;
    console.log(myVar); //undefined
    myVar = "valor local";
    console.log(myVar); //valor local
}());

const obj1 = {marca: "seat", modelo: "ibiza", color: "rojo"};
console.log(obj1.marca); //seat
obj1.marca = "ford";
console.log(obj1.marca); //ford