document.getElementById("crear").addEventListener("click", crear);
document.getElementById("modificar").addEventListener("click", modificar);
document.getElementById("consultar").addEventListener("click", consultar);
document.getElementById("eliminar").addEventListener("click", eliminar);

// //Session Storage
// function crear() {
//     sessionStorage.setItem("usuario1", "Mario");
//     sessionStorage.setItem("usuario2", "Mario");
// }

// function consultar() {
//     let valor1 = sessionStorage.getItem("usuario1");
//     let valor2 = sessionStorage.getItem("usuario2");

//     document.getElementById("resultado").innerHTML =
//         `La variable usuario1 tiene almacenado ${valor1} y la
//     variable usuario2 tiene almacenado ${valor2}`;
// }

// function modificar() {
//     sessionStorage.setItem("usuario1", "Mario 123");
// }

// function eliminar() {
//     sessionStorage.removeItem("usuario1");
// }

//Cookies
function crear() {
    document.cookie = "usuario2=Mario; expires=Thu, 6 Feb 2025 12:00:00 UTC; path=/"
}

function consultar() {
    alert(`La variable usuario2 tiene almacenado ${document.cookie}`);
}

function modificar() {
    document.cookie = "usuario2=Marta; expires=Mon, 3 Feb 2025 01:00:00 UTC; path=/"
}

function eliminar() {
    document.cookie = "usuario2=Mario; expires=Thu, 6 Feb 2025 12:00:00 UTC; path=/"
}