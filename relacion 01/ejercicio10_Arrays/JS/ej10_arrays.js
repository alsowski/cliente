// Lista de nombre
// const nombres = [
//     "Juan",
//     "Ana",
//     "Sara",
//     "David",
//     "Pablo",
//     "Luz",
//     "Mark",
//     "Irene",
//     "Nina",
//     "Alba"
// ];

//EJERCICIO CON SPLIT
function recogerNombre(){
    let nombre = prompt("Dime nombres separados por comas: ");
    return nombre;
}

function filtrarAmigos(){
    let nombres = [recogerNombre()];
    nombres = nombres[0].split(',');
    console.log(nombres);
    let amigos = [];

    for(let i=0; i<nombres.length; i++){
        if (nombres[i].length==4){
            amigos.push(nombres[i]);
        }
    }
    return amigos;
}

//console.log(filtrarAmigos());