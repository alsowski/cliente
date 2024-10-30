console.log("javascript");

let creaAnuncio = document.getElementById("incluyeAnuncio");

creaAnuncio.addEventListener("click", incluirAnuncio);

function incluirAnuncio(){
    // Pedir al usuario la dirección de la imagen y el enlace
    let pathImg = prompt("Dirección de la imagen", "./img/foto1.jpg");
    let urlEnlace = prompt("URL del enlace", "https://www.marca.es");

    // Crear un div
    let nuevoHijo = document.createElement("div");

    // Creo el enlace
    let enlace = document.createElement("a");
    urlEnlace.href = urlEnlace;
    enlace.textContent = prompt("Dime el texto de enlace: ");

    // Creo el enlace
    let imagen = document.createElement("img");
    enlace.src = pathImg;
    enlace.alt = "Imagen alternativo";
    imagen.style.width = "100px";
    imagen.style.widows = "100px";

    // Agregar a nuestro hijo (div)
    nuevoHijo.appendChild(imagen);
    nuevoHijo.appendChild(enlace);

    let seccion = document.getElementById("seccionArticles");
    seccion.appendChild(nuevoHijo);
}