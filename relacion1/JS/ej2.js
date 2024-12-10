contenedor = document.getElementById("contenedor");
botonAniadir = document.getElementById("botonAniadir");
botonLimpiar = document.getElementById("botonLimpiar");

let rutaImagen;
let imagen;

botonAniadir.addEventListener("click", function(){
    rutaImagen = prompt("Dime la ruta de tu imagen:");
    imagen = document.createElement("img");

    if (!rutaImagen) imagen.src = "./img/bloodborne.jpg";
    else imagen.src = "./img/" + rutaImagen;
    imagen.classList.add("foto");

    contenedor.appendChild(imagen);
    botonLimpiar.disabled = false;
});


botonLimpiar.addEventListener("click", function(){
    let imagenes = contenedor.querySelectorAll("img");
    for (let i = 0; i < imagenes.length; i++) {
        contenedor.removeChild(imagenes[i]);
    }
    botonLimpiar.disabled = true;
});

/*gente de la tarde*/
// window.onload=()=>{
//     let btnAnadir=document.getElementsByTagName("input")[0];
//     let btnLimpiar=document.getElementsByTagName("input")[1];
//     let contenedor=document.getElementById("contenedor");

//     btnAnadir.onclick=()=>{
//         btnLimpiar.disabled=false;
//         let imagen=prompt("Ingrese el nombre de la imagen con su extencion;: ");

//         let imagenDestino="";
//         if (imagen=="") {
//             imagenDestino="./img/terra.jpg";
//         }
//         else{
//             imagenDestino="./img/"+imagen;
//         }
        
//         let image = document.createElement("img");
//         image.className="foto";
//         image.src=imagenDestino;
        
//         contenedor.appendChild(image);

//     }

//     btnLimpiar.onclick=()=>{
//         let imagenes=contenedor.children;
        
//         while(contenedor.firstChild){
//             contenedor.removeChild(contenedor.firstChild);
//         }
        
//     }

// }