function recogerNum(mensaje){
    let a = prompt(mensaje); //es lo mismo con el window que sin el, sin el mas corto
   
    while(isNaN(a) || a < 0 || a > 10){
        alert(`Has introducido valores no aceptados`);
        a = prompt(mensaje);
    }
    return (a);
}

let boton = document.getElementById("lanzar");

boton.addEventListener("click", function(){
    let filas = recogerNum("Dime el numero de filas que va a tener la tabla:");
    let columnas = recogerNum("Dime el numero de columnas que va a tener la tabla:");

    let tabla = document.getElementById("tabla");
    tabla.classList.add("tabla");

    let nuevaTabla = document.createElement('table');
    let tablaBody = document.createElement('tbody');

    for (let i = 0; i < filas; i++) {
        let fila = document.createElement("tr");

        for (let j = 0; j < columnas; j++) {
            let columna = document.createElement("td");
            columna.textContent = (i + 1);
            fila.appendChild(columna);
        }
        tablaBody.appendChild(fila);
    }
    nuevaTabla.appendChild(tablaBody);
    tabla.appendChild(nuevaTabla);
});

/*gente de la tarde*/
// window.onload=()=>{

//     let boton=document.querySelector("input");
//     let padre=document.getElementsByClassName("solucion")[0];
    
//     boton.onclick=()=>{
//         let pedidoFila;
//         let pedidoCeldas;
//         do {
//             pedidoFila=parseInt(prompt("ingrese la cantidad de Filas: "));    
//         } while (isNaN(pedidoFila)||pedidoFila>10||pedidoFila<1);
//         do{
//             pedidoCeldas=parseInt(prompt("ingrese la cantidad de Celdas: "));
//         } while (isNaN(pedidoCeldas)||pedidoCeldas>10||pedidoCeldas<1);
        
//         let tabla=document.createElement("table");
//         for (let i = 0; i < pedidoFila; i++) {
//             let fila=document.createElement("tr");
//             tabla.appendChild(fila);
//             for (let j = 0; j < pedidoCeldas; j++) {
//                 let texto=document.createTextNode(i+1);
//                 let celda=document.createElement("td");
//                 celda.appendChild(texto);
//                 fila.appendChild(celda);
//             }    
            
//         }
 
//         tabla.className="tabla";
       
        
//         padre.appendChild(tabla);
//     }

// }