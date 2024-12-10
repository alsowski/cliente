botonmostrar = document.getElementById("mostrar");
botoncambiar = document.getElementById("cambiar");
enlace = document.querySelector("a");

botonmostrar.addEventListener("click", function(){
    console.log(enlace.href);
    console.log(enlace.innerHTML);
});

botoncambiar.addEventListener("click", function(){
    enlace.href = "https://es.wikipedia.org/wiki/Wikipedia:Portada";
    enlace.innerHTML = "He cambiado";

    console.log(enlace.href);
    console.log(enlace.innerHTML);
});