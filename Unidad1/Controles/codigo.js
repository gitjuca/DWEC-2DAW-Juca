var cosa = 3;
console.log(cosa++); // muestra 3 y después incrementa a 4
cosa = 3;
console.log(++cosa); // incrementa a 4 y muestra 4

//Ejemplo de bucles
  function howMany(selectObject) {
    let numberSelected = 0;
    for (let i = 0; i < selectObject.options.length; i++) {
      if (selectObject.options[i].selected) {
        numberSelected++;
      }
    }
    return numberSelected;
  }

  let btn = document.getElementById("btn");
  btn.addEventListener("click",
    function () {
        alert(
        "Número de opciones seleccionadas: " +
            howMany(document.selectForm.musicTypes),
        );
    }
);

  //Ejemplo mover options de un select a otro
  let btn2 = document.getElementById("btn2");
  btn2.addEventListener("click", 
    function () {
        let s1 = document.getElementById("musicTypes");
        let s2 = document.getElementById("vacío");
        for (let i=0;s1.options.length; i++) {
            if (s1.options[i].selected) {
                s2.appendChild(s1.options[i]);
            }
        }    
    }
);