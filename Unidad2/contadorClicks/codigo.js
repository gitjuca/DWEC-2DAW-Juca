const botonIncremento = document.getElementById("botonIncremento");
const botonDecremento = document.getElementById("botonDecremento");
const botonReinicio = document.getElementById("botonReinicio");
const numero = document.getElementById("numero");

let contador = 0;

botonIncremento.addEventListener("click", () => {
    contador++;

    numero.textContent = contador;
});

botonDecremento.addEventListener("click", () => {
    contador--;

    numero.textContent = contador;
})

botonReinicio.addEventListener("click", () => {
    contador = 0;

    numero.textContent = contador;
})

