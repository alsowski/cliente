// a) contar número de enlaces de la página
// b) Indicar a qué enlace apunta el penúltimo enlace de la página.
// c) Indicar cuantos enlaces apuntan a la url: http://prueba
// d) Número de enlaces del 3er párrafo.

// opción 1
document.addEventListener("DOMContentLoaded", () => {
    alert("DOM cargado.");

    let texto = "";

    // if (window.navigator.cookieEnabled) {
    if (navigator.cookieEnabled) {
        texto = "Cookies habilitadas";
    } else {
        texto = "Cookies están inhabilitadas"
    }
    alert(texto);
    // alert(window.location);
    alert(`Tamaño de la venta: Altura ${window.innerHeight}, Anchura: ${window.innerWidth}`);

});

// function domCargado(){
//     alert("DOM cargado");

//     //contarParrafos
// }

// opción 2 -onload
window.addEventListener("load", contarEnlaces);
function contarEnlaces() {
    let info = document.getElementById("informacion");

    let numEnlaces = document.getElementsByTagName("a");
    console.log(numEnlaces);
    info.innerHTML = "El número de enlaces es: " + numEnlaces.length;

    // b) Dirección del penúltimo enlace
    info.innerHTML += "<br>" + "La dirección del penúltimo enlace es: " + numEnlaces[numEnlaces.length - 2].href;

    // c) número de enlaces que apuntan a http://prueba
    let contador = 0;
    for (let i = 0; i < numEnlaces.length; i++) {
        if (numEnlaces[i].href == 'http://prueba' ||
            numEnlaces[i].href == 'http://prueba/'
        ) {
            contador++;
        }
    }
    info.innerHTML += "<br>" + "El num de enlaces que apunta a http://prueba/ es: " + contador;

    // d) Número de enlaces del 3er párrafo
    let parrafos = document.getElementsByTagName("p");
    let enlaces = parrafos[2].getElementsByTagName("a");
  
    // Más abreviado
    let resultado = document.getElementsByTagName("p")[2].getElementsByTagName("a");
  
    info.innerHTML += "<br>El núm enlaces del tercer párrafo es: " + enlaces.length;
  }