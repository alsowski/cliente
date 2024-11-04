// <!-- Ejercicio: Administrador de Lista de Tareas Objetivo 1. Crear una lista de
// tareas con opciones para añadir elementos en diferentes posiciones, reemplazar,
// y eliminar. 2. Cada botón realizará una acción específica usando uno de los
// métodos de manipulación del DOM. -->

// <!-- Api de elementos
// elemento.before(); Añade el nuevo elemento justo antes.
// elemento.after(); Añade el nuevo elemento justo después.
// elemento.prepend(); Añade el nuevo elemento justo antes del primer hijo.
// elemento.append(); Añade el nuevo elemento justo después del último hijo
// elemento.replaceChildren(); eliminar todos los hijos y los cambia por el nuevo elemento.
// elemento.replaceWith(); se sustituye el elemento por el nuevo.
// elemento.remove(); elimina el propio elemento. -->

console.log("Estoy");

let btnAgregarAntes = document.getElementById('btnAgregarAntes');
btnAgregarAntes.addEventListener('click', agregarAntes);

function agregarAntes(){
    let primerElem = document.getElementById('primerElemento');

    let nuevoElem = document.createElement('li');
    nuevoElem.classList.add('tarea');
    nuevoElem.textContent = "Nueva tarea delante del 1er elemento";
    primerElem.before(nuevoElem);
}

let btnAgregarDespues = document.getElementById('btnAgregarDespues');
btnAgregarDespues.addEventListener('click', agregarDespues);

function agregarDespues(){
    let primerElem = document.getElementById('primerElemento');

    let nuevoElem = document.createElement('li');
    nuevoElem.classList.add('tarea');
    nuevoElem.textContent = "Nueva tarea detrás del 1er elemento";
    primerElem.after(nuevoElem);
}

let btnAgregarAlInicio = document.getElementById('btnAgregarAlInicio');
btnAgregarAlInicio .addEventListener('click', agregarAlInicio);

function agregarAlInicio(){
    let elementos = document.getElementById('listaTareas');

    let nuevoElem = document.createElement('li');
    nuevoElem.classList.add('tarea');
    nuevoElem.textContent = "Nueva tarea al inicio de la lista";
    elementos.prepend(nuevoElem);
}


let btnAgregarAlFinal = document.getElementById('btnAgregarAlFinal');
btnAgregarAlFinal.addEventListener('click', agregarAlFinal);

function agregarAlFinal(){
    let elementos = document.getElementById('listaTareas');

    let nuevoElem = document.createElement('li');
    nuevoElem.classList.add('tarea');
    nuevoElem.textContent = "Nueva tarea al final de la lista";
    elementos.append(nuevoElem);
}

let btnReemplazarTodo = document.getElementById('btnReemplazarTodo');
btnReemplazarTodo.addEventListener('click', ReemplazarTodo);

function ReemplazarTodo(){
    let elementos = document.getElementById('listaTareas');
    let nuevoElem = document.getElementById('primerElemento');

    elementos.replaceChildren(nuevoElem);
}

let btnReemplazarPrimer = document.getElementById('btnReemplazarPrimer');
btnReemplazarPrimer.addEventListener('click', ReemplazarPrimer);

function ReemplazarPrimer(){
    let primerElem = document.querySelector('.tarea');
    let nuevoElem = document.createElement('li');

    nuevoElem.classList.add('tarea');
    nuevoElem.textContent = "REEMPLAZADO";
    if(primerElem.id == "primerElemento"){
        nuevoElem.id = "primerElemento";
    }
    primerElem.replaceWith(nuevoElem);
}

let btnEliminarPrimer = document.getElementById('btnEliminraPrimer');
btnEliminarPrimer.addEventListener('click', EliminarPrimer);

function EliminarPrimer(){
    let elementos = document.getElementById('listaTareas');
    let nuevoElem = document.createElement('li');

    nuevoElem.classList.add('tarea');
    nuevoElem.textContent = "Nueva tarea al principio";
    elementos.remove(nuevoElem);
}