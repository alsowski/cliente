let img = document.querySelector("div");
let btnDerecha = document.getElementById("moverDerecha");
let btnIzquierda = document.getElementById("moverIzquierda");
let timer;

btnDerecha.addEventListener("click", function () {
    if (img.style.left != "400px") {
        img.style.left = parseInt(img.style.left) + 10 + "px";
    }
});

btnIzquierda.addEventListener("click", function () {
    if (img.style.left != "0px") {
        img.style.left = parseInt(img.style.left) - 10 + "px";
    }
});


img.addEventListener("mouseover", function () {
    timer = setInterval(function () {
        if (img.style.left == "400px") {
            clearInterval(timer)
        }
        img.style.left = parseInt(img.style.left) + 10 + "px";
    }, 50)

});
img.addEventListener("mouseout", function () {
    clearInterval(timer)
    img.style.left = "0px";

});



/* Manera de Ismael */
// let imagen = document.getElementsByTagName("img");

// let botonIzquierda = document.getElementById("moverIzquierda");
// let botonDerecha = document.getElementById("moverDerecha");

// let posicionActual = 0;
// let desplazamiento = 5;

// botonDerecha.addEventListener("click", function(){
//     posicionActual += desplazamiento;
//     imagen[0].style.marginLeft = `${posicionActual}px`;
// });

// botonIzquierda.addEventListener("click", function(){
//     posicionActual -= desplazamiento;
//     if (posicionActual > 0) {
//         imagen[0].style.marginLeft = `${posicionActual}px`;
//     }
//     else{
//         posicionActual = 0;
//     }
// });

// //Mismo ejercicio pero con el over "apartado c)"
// let movimientoActivo;

// function moverDerecha() {
//     movimientoActivo = setInterval(() => {
//         posicionActual += desplazamiento;
//         imagen[0].style.marginLeft = `${posicionActual}px`;
//     }, 20);
// }

// function resetear(){
//     clearInterval(movimientoActivo)
// }

// imagen[0].addEventListener("mouseover", moverDerecha);
// imagen[0].addEventListener("mouseout", resetear);