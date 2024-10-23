function inicioDOM() {
    console.log("Dom cargado");

    document.body.style.backgroundColor = "yellow";

    // document.getElementById
    let titulo = document.getElementById("title");
    console.log(titulo);
    console.log(titulo.innerHTML);
    console.log(titulo.textContent);
    console.log(titulo.textContent.length);

    // getElementbyName
    let up_name = document.getElementsByName("up");
    console.log(up_name[0]);
    console.log(up_name[1]);
    console.log(up_name[0].tagName);
    console.log(up_name[1].tagName);

    // getElementbyTagName
    let parrafos = document.getElementsByTagName("p");
    console.log(parrafos);

    // Document.getElementsByClassName()
    parrafos = document.getElementsByClassName("parrafos1");
    console.log(parrafos);
    console.log(`Números de parráfos que tengo: ${parrafos.length}`);
    for (let i = 0; i < parrafos.length; i++) {
        if (i == 3) {
            parrafos[i].innerHTML = "Parrafo cambiado";
        }
        console.log(`Párrafo ${i+1}: ${parrafos[i].innerHTML}`);
    }

    // querySelector()
    parrafos = document.querySelector("p.parrafos1");
    console.log(parrafo1);

    parrafo1 = document.querySelector('section.parrafos1');
    console.log(parrafo1);

    parrafo1 = document.querySelector(".projects p");
    console.log(parrafo1);


    //querySelectorAll()
    let elementos = document.querySelectorAll('p.parrafos1');
    console.log(`Número de elementos que tengo: ${elementos.length}`);
    for (let i=0; i<elementos.length; i++){
        console.log(`Elemento ${i+1}: ${elementos[i].innerHTML}`);
    }

    // Selecciono el DOM parcialmente
    let sectionProjects = document.getElementById('proyectos');
    console.log(sectionProjects);
    elementos = sectionProjects.querySelectorAll(`p.parrafos1`);
    console.log(`Número de elementos que tengo: ${elementos.length}`);
    for (let i=0; i<elementos.length; i++){
        console.log(`Elemento ${i+1}: ${elementos[i].innerHTML}`);
    }
}
let estado = true;

function cambioTitulo(cabecera){
    // cabecera.style.color = cabecera.style.color === 'red' ? 'black' : 'red';
    // if(estado) {
    //     cabecera.style.color='red';
    //     estado = false;
    // } else{
    //     cabecera.style.color='black';    
    //     estado = true;
    // }

    // let z = 2;
    // let y = '2';
    // let resultado = (z===y) ? 1 : 2;
    // opción 2

    cabecera.style.color = (cabecera.style.color === 'red') ? 'black' : 'red';
}

// Vamos a modificar el Título 2
function cambioSubtitulo(elemento){
    elemento.style.color = (elemento.style.color === 'orange') ? 'pink' : 'orange';
}

// let elemento = document.getElementById('subtitle');
// elemento.style.color = 'orange';
document.getElementById('subtitle').onclick = cambioSubtitulo2;

function cambioSubtitulo2(){
    // console.log("llego")
    let elemento = document.getElementById('subtitle');
    elemento.style.color = (elemento.style.color === 'orange') ? 'pink' : 'orange';
}

// opción 1 llamada a eventos desde JS
// elemento.onclick = cambioSubtítulo(elemento);

let subtitulo2 = document.getElementById('subtitle2');
subtitle2.addEventListener('click', cambioSubtitulo3);

elemento = document.getElementById('subtitle2');
elemento.style.color = 'blue';

function cambioSubtitulo3(){
    // console.log("llego")
    let elemento = document.getElementById('subtitle2');
    elemento.style.color = (elemento.style.color === 'orange') ? 'pink' : 'orange';
}