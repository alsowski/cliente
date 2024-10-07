// let fila = RecogerNum("Dime tamaño de fila: ");
// let columna = RecogerNum("Dime tamaño de columna: ");

// CreaYPintaMatriz(fila, columna);

// function CreaYPintaMatriz(fila, columna) {
//     let matriz = [fila][columna];

//     // inicializamos matriz
//     for (let i = 0; i < fila; i++) {
//         matriz[i] = new Array(columna);
//     }

//     // relleno valores
//     for (let i = 0; i < fila; i++) {
//         for (let j = 0; j < matriz[i].length; j++) {
//             matriz[i][j] = i+j;
//         }
//         console.log(matriz[i]);
//     }
// }
// CreaYPintaMatriz(fila, columna);


// autos = [['BMW1', 'BMW2', 'BMW3'], ['Audi1', 'Audi2'], ['Volvo']];
// console.log(autos);
// console.log(autos[0].length);
// console.log(autos[1].length);
// console.log(autos[2].length);

// function PintaMatriz(autos) {
//     let resultado = "";

//     // recorro matriz
//     for (let i = 0; i < autos.length; i++) {
//         for (let j = 0; j < autos[i].length; j++) {
//             resultado += autos[i][j] + ",";
//         }
//         console.log(resultado);
//         resultado = "";
//     }
// }

// PintaMatriz(autos);

// Matrices
// let matriz = [];
// i=prompt("Dime el tamaño de columna: ");

// for(let j=0; j<i; j++){
//     matriz[i] = new Array(i);
// }

// function crearMatriz(filas,columnas){
//     let matriz = new Array(filas);

//     for(let i=0;i<filas;i++){
//         matriz[i] = Array(columnas);
//         for(let j=0;j<columnas;j++){
//             matriz[i][j] = j;
//         }
//         console.log(matriz[i]);
//     }
// }

function RecogerNum(msj) {
    let valido = false;
    let a;
    do {
        a = prompt(msj);
        if (isNaN(a) || a == "") {
            alert("No Válido");
        } else {
            valido = true;
        }
    } while (valido == false);
    return a;
}

function CreaYPintaMatriz(fila, columna) {
    let resultado = "";
    let matriz = new Array(columna);

    // inicializamos matriz
    for (let i = 0; i < columna; i++) {
        matriz[i] = new Array(fila);
    }

    // relleno valores
    for (let i = 0; i < columna; i++) {
        let valor = RecogerNum("Dime un valor numérico: ");
        for (let j = 0; j < fila; j++) {
            matriz[i][j] = valor * (j + 1);
            if (matriz[i][j] < 10) {
                resultado += `0${matriz[i][j]} `;
            } else {
                resultado += `${matriz[i][j]} `;
            }
        }
        console.log(resultado);
        resultado = "";
        
    }
}

fila = RecogerNum("Dime tamaño de fila: ");
columna = RecogerNum("Dime tamaño de columna: ");

CreaYPintaMatriz(fila, columna);

function getRandomIntNotInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
     // The maximum is inclusive and the minimum is inclusive
}

function CreaYPintaMatrizRandom(fila, columna) {
    
    let matriz = new Array(fila);

    // inicializamos matriz
    for (let i = 0; i < fila; i++) {
        matriz[i] = new Array(columna);
    }

    let resultado = "";
    // relleno valores
    for (let i = 0; i < fila; i++) {
        for (let j = 0; j < columna; j++) {
            matriz[i][j] = getRandomIntNotInclusive(0, 100);
            if (matriz[i][j] < 10) {
                resultado += `0${matriz[i][j]} `;
            } else {
                resultado += `${matriz[i][j]} `;
            }
        }
        resultado += "\n";
    }
    console.log(resultado);
}

fila = RecogerNum("Dime tamaño de fila: ");
columna = RecogerNum("Dime tamaño de columna: ");

CreaYPintaMatrizRandom(fila, columna);