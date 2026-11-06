const cuadrado = document.getElementById("cuadrado");

cuadrado.addEventListener("mouseover", () => {
    cuadrado.style.backgroundColor = "#0000FF"
    cuadrado.style.cursor = "pointer";
});

cuadrado.addEventListener("mouseout", () => {
    cuadrado.style.backgroundColor = "#808080"
});

cuadrado.addEventListener("click", () => {
    cuadrado.style.backgroundColor = "red";
});

cuadrado.addEventListener("dblclick", () => {
    cuadrado.style.backgroundColor = "green";
});