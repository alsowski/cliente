//alert("Hola Mundo. Fichero JS")

//'use strict';

console.log("Hola Mundo");

//nombre = "Jose Miguel";
console.log(nombre);
// alert(nombre);

var nombre = null;
//Ascii 51=3 50=2
let a = 141;
let b = '24';
let c = a + b;
console.log(c);
console.log(typeof a);
console.log(typeof b);
let ok = true;
console.log(typeof ok);
console.log(a + nombre);
nombre = "Jose Miguel"
console.log(a + nombre);
console.log(typeof nombre);

if (b > a) {
    console.log("mayor B");
} else {
    console.log("mayor A");
}

// Quokka ctrl + shift + p

let objeto1 = Symbol("1");
console.log(typeof objeto1);
console.log(objeto1)

let objeto2 = Symbol("2");
console.log(typeof objeto2);
console.log(objeto2)

let horaDia = 23;
let mensaje = "";

if (horaDia >= 6 && horaDia < 13) {
    mensaje = "Son las " + horaDia + ", Buenos Dias";
} else if (horaDia >= 13 && horaDia < 19) {
    mensaje = "Son las " + horaDia + ", Buenas Tardes";
} else if (horaDia >= 19 && horaDia < 24 || horaDia >= 0 && horaDia < 7) {
    mensaje = `Son las ${horaDia}, Buenas Noches`;
}

console.log(mensaje);

let z = 2;
let y = '2';

if (z == y) {
    console.log("Son iguales");
} if (z === y) {
    console.log("Son iguales");
} else {
    console.log("No son iguales");
}

//Operador Ternario
// El operador ternario de JavaScript es un operador condicional que tiene tres operandos.
// Se usa para tomar una decisión basada en una // expresión que se evalúa como true o false
// Es una forma abreviada de la sentencia if else que crea código más limpio, fácil de entender 
// y rápido de escribir.

let resultado = (z === y) ? 1 : 2;
console.log(resultado);

let miNumero = "18";
console.log(miNumero);

if (isNaN(miNumero)) {
    console.log("No es un numero");
}
miNumero = Number(miNumero);
console.log(miNumero);

let miString = String(miNumero);
console.log(miString);

let contador = 0;
while (contador < 3) {
    console.log(contador++); 0, 1, 2
}
let cont = 0;
do {
    console.log(cont++); 0, 1, 2, 3
} while (cont < 4);

for (let conta = 0; conta < 5; conta++) {
    console.log(conta);
}

let mes = 11;
let estacion = "desconocida";

switch (mes) {
    case 12: case 1: case 2:
        estacion = "Invierno";
        break;
    case 3: case 4: case 5:
        estacion = "Primavera";
        break;
    case 6: case 7: case 8:
        estacion = "Verano";
        break;
    case 9: case 10: case 11:
        estacion = "Otoño"
        break;
    default:
        estacion = "Desconocida"
        break;

}
console.log(estacion);

for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 3; j++) {
        console.log("c1" + i + " c2:" + j);
        continue;
        if (j == 2) {
            //break;
            j = 4;
            i = 3;
        }
    }
}

// const objeto3={nombre: "Alejandro", apellido: "Vila"}
// console.log(typeof objeto3);

const objeto3 = {
    nombre: "La siempre",
    apellido: "Inteligente",
    edad: 58
}

let marcaCoches = ['BMW', 'Audi', 'Renault', 'Ford'];
console.log(typeof marcaCoches);

console.log(marcaCoches);['BMW', 'Audi', 'Renault', 'Ford']

for (i = 0; i < marcaCoches.length; i++) {
    console.log(marcaCoches[i]);
}

// Definir Clase
class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    pasoaTexto() {
        return `${this.nombre} ${this.apellido}, edad:  ${this.edad}`;
    }
}
console.log(Persona);
console.log(typeof Persona);

//Probar la clase Persona
let persona1 = new Persona('Juan', "Perez", 23);
console.log(persona1);
let nombre2 = persona1.pasoaTexto();
console.log(nombre2);

let persona2 = new Persona(objeto3.nombre, objeto3.apellido, objeto3.edad);
console.log(persona2.pasoaTexto());

//Funciones

var aa = 4;
var bb = 5;

function miFuncion(xx, yy) {
    let aa = 7;
    let bb = 10;
    console.log("Suma: " + (xx + yy));
    console.log("Suma: " + (aa + bb));
    console.log(`Suma: " +  ${aa + bb}.`);
    return (xx + yy);
}

let result = miFuncion(7, 8);
console.log(result);

console.log(typeof miFuncion)

// function Sumar() {
//     let valido = false;
//     let a
//     let b

//     do {
//         a = prompt("Dime número A: ");
//         if (isNaN(a)) {
//             alert("No válido");
//         }else{
//             valido = true
//         }
//     } while (valido==false)

//     do {
//         b = window.prompt("Dime número B: ");
//         if(isNaN(b)){
//             alert("No válido");
//         } 
//     } while (isNaN(b))

//     let  = Number(a) + Number(b);

//     alert(`La suma es: ${c}`);
// }

// Solicitamos número A, número B y operación (+, -. * y /)
// Vamos a realizar una Calculadora.

/*
function Calculadora() {
    let a = prompt("Introduce un número (a): ");
    while (isNaN(a)) {
        a = prompt("Error: introduce un número (a): ");
    }

    let b = window.prompt("Introduce un número (b): ");
    while (isNaN(b)) {
        b = prompt("Error: introduce un número (b): ");
    }

    let opcion = window.prompt("Que quieres hacer en la calculadora");

    let resultado = 0;

    do {
        if (opcion = "Sumar") {
            resultado = Number(a) + Number(b);
        } else if (opcion = "Restar") {
            resultado = Number(a) - Number(b);
        } else if (opcion = "Multiplicar") {
            resultado = Number(a) * Number(b);
        } else if (opcion = "Dividir") {
            resultado = Number(a) / Number(b);
        }
    } while (resultado = 0)

    alert(`El resultado total es: ${resultado}`);
}
Calculadora();
*/

function recogerNum() {
    let a = prompt("Introduce un número (a): ");
    while (isNaN(a)) {
        a = prompt("Error: introduce un número (a): ");
    }
    return a;
}

let resultadoop = 0;

function Sumar() {
    alert(`La suma es: ${Number(a) + Number(b)}`);
}

function Restar() {
    alert(`La suma es: ${Number(a) - Number(b)}`);
}

function Multiplicar() {
    alert(`La suma es: ${Number(a) * Number(b)}`);
}

function Dividir() {
    alert(`La suma es: ${Number(a) / Number(b)}`);
}

function Calculadora() {
    let a = recogerNum("Dime numero A: ");
    let b = recogerNum("Dime numero B: ");
    let opvalida = false;

    do {
        let opcion = prompt("¿Que opción quieres realizar? (+ - * /): ");
        switch (opcion) {
            case "+":
                Sumar(a, b);
                opvalida = true;
                break;
            case ".":
                Restar(a, b);
                opvalida = true;
                break;
            case "*":
                Multiplicar(a, b);
                opvalida = true;
                break;
            case "/":
                Dividir(a, b);
                opvalida = true;
                break;
            default:
                alert("No válido");
                break;
        }
    } while (opvalida == false);
}
Calculadora();