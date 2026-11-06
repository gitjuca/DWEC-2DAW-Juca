const posX = document.getElementById("posX");
const posY = document.getElementById("posY");
const circulo = document.getElementById("circulo");

document.addEventListener("mousemove", (evento) => {
    posX.textContent = evento.clientX;
    posY.textContent = evento.clientY;

    circulo.style.left = evento.clientX + 'px';
    circulo.style.top = evento.clientY + 'px';
});

document.addEventListener("mouseenter", () => {
    circulo.style.opacity = 1;
});

document.addEventListener("mouseleave", () => {
    circulo.style.opacity = 0;
});