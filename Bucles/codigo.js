const arr = [3, 5, 7];
arr.foo = "hello";

for (const i in arr) {
  console.log(i);
}
// "0" "1" "2" "foo"

for (const i of arr) {
  console.log(i);
}
// Logs: 3 5 7


//EJERCICIO

var datos = [
    {
        dni: "11111111A",
        nombre: "PEPE",
        apellidos: "LOPEZ PEREZ",
        telefono: "666666666",
        asignaturas : [
            {
                nombre: "DWEC",
                codigo: "1111"
            },
            {
                nombre: "DWES",
                codigo: "1122"
            }

        ]
    }
];

var profe = {
        dni: "22222222B",
        nombre: "LUIS",
        apellidos: "MARTINEZ GARCÍA",
        telefono: "666777777",
        asignaturas : [
            {
                nombre: "ENTORNOS",
                codigo: "1133"
            },
            {
                nombre: "LENGUAJE DE MARCAS",
                codigo: "1144"
            }

        ]
};

//Insertar al final de un array
datos.push(profe);

//EJERCICIO 1
//Realiza un listado completo en consola de todos los
//profesores junto con la asignatura que impartan

//EJERCICIO 2
//Dado un código de asignatura, mostrar el nombre y apellidos
//del profesor que la imparte
var codAsignatura = "1111";

for(let i = 0;i < datos.length;i++){

}

for(let i in datos){
    
}

//Interactuando con el usuario

//Capturando elementos de formulario
var texto1 = document.getElementById("valor");
var btn1 = document.getElementById("boton");
//Capturando eventos
btn1.addEventListener("click", function(){
    console.log(texto1.value);
});

/*
Crear un formulario para dar de alta profesores introduciendo el DNI nombre apellidos y teléfono
del mismo

Más abajo añadir otro formulario para añadir asignaturas a un profesor
indicando código de la asignatura nombre de la asignatura y DNI del profesor que la imparte

Añadir un tercer y último formulario donde introduciendo el código de la asignatura
me indique el profesor que imparte esa asignatura

Posdata todos los datos que se muestran se mostrarán por consola
*/