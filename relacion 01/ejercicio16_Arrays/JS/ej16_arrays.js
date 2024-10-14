// function llenarMesas(arrayMesas, mesas) {
//     for (let i = 0; i < mesas; i++) {
//         arrayMesas.push(Math.floor(Math.random() * (4 - 0 + 1) + 0));
//     }
// }

// function comprobarMesas(personas) {
//     if (personas > 4) {
//         do {
//             alert(`Lo siento, no admitimos grupos de ${personas}, haga grupos de 4 personas como máximo e intente de nuevo`);
//             personas = prompt("Dime un número de comensales: ");
//         } while (personas > 4);
//     }
//     return (personas);
// }

// function solicitarPersonas(arrayMesas) {
//     let personas = prompt("Dime un número de personas: ");
//     personas = comprobarMesas(personas);
//     console.log("Estado de las mesas: " + arrayMesas);
//     console.log("El usuario pide una mesa para " + personas);

//     let sitio = false;
//     while (personas >= 0) {
//         for (let i = 0; i < arrayMesas.length; i++) {
//             if ((arrayMesas[i] + Number(personas)) < 5) {
//                 arrayMesas[i] = arrayMesas[i] + Number(personas);
//                 console.log("Por favor, siéntese en la mesa " + (i + 1));
//                 sitio = true;
//                 i = arrayMesas.length;
//             }
//             else {
//                 sitio = false;
//             }
//         }
//         if (sitio == false) {
//             console.log("Lo siento, no queda sitio en el restaurante.");
//         }
//         console.log("Estado de las mesas: " + arrayMesas);
//         personas = prompt("Dime un número de personas: ");
//         personas = comprobarMesas(personas);
//     }
// }

// let mesas = prompt("Dime un número de mesas: ");
// let arrayMesas = [];
// llenarMesas(arrayMesas, mesas);
// solicitarPersonas(arrayMesas);


function comprobarCom() {
    do {
        numComensales = prompt("¿Cuantos comensales sois? ")
        if (numComensales > 4 || numComensales < 0) {
            alert("Lo siento no admitimos grupos de " + numComensales + " haga grupos de maximo 4")
        }
    } while (numComensales > 4 || numComensales < 0)
    return Number(numComensales)
}

function crearMesas() {
    let mesas = []
    numMesas = prompt("¿Cuantas mesas hay en el restaurante?")

    for (i = 0; i < numMesas; i++) {
        mesas.push(Math.floor(Math.random() * (4 - 0 + 1) + 0))
    }
    console.log("Estado de las mesas: " + mesas)
    return mesas
}


function darMesa() {
    let mesas = crearMesas()
    let comensales = comprobarCom()
    let sentado = false

    for (let i = 0; i < mesas.length; i++) {
        if (mesas[i] == 0) {
            console.log("La mesa " + (i + 1) + " esta vacia sientese ahi")
            mesas[i] = parseInt(comensales);
            sentado = true
            break;
        }
    }

    if (sentado == false) {
        for (let i = 0; i < mesas.length; i++) {
            if ((mesas[i] + comensales) <= 4) {
                mesas[i] += Number(comensales);
                console.log("En la mesa " + (i + 1) + " hay hueco sientese ahi")
                sentado = true
                break;
            }
        }
    }

    return mesas
}

console.log("Estado de las mesas: " + darMesa())