let autos = ['BMW', 'Audi', 'Volvo'];

console.log(autos);
console.log(typeof autos);

let item = new Array(1, 6);
console.log(item);
let items = new Array(6);
console.log(items);

// let pets = new Array('perro', 'gato', 'periquito');
let pets = ['perro', 'gato', 'periquito'];
console.log(pets);
console.log(pets.length);
console.log(pets[0]);

// Iterar en el Array
let len = pets.length;
for (i = 0; i < len; i++) {
    console.log(pets[i]);
}

pets.push('rana', 'toro');
pets.push('loro');
console.log(pets);
pets[2] = 'leon';
pets[8] = 'cebra';
pets.push('loro');
console.log(pets);

items[2] = 'toro';
console.log(items);

console.log(pets.pop());
console.log(pets.pop());
console.log(pets);
console.log(pets.shift());
console.log(pets);
pets.unshift('Perro');
console.log(pets);


function log(msj) {
    console.log(msj);
}

const months = ['Jan', 'March', 'April', 'June'];
// param1 : posición, param2: num de elementos a borrar (deleteCount), param3-n: elementos
months.splice(1, 0, 'May'); // Param 1 posición. Param 2: 0 reemplaza en la posición 1
console.log(months);
months.splice(1, 1, 'Feb'); // Param 1 posición. Param 2: 1 reemplaza en la posición 1
console.log(months);

months.splice(5, 0, 'July', 'Agost', 'Sept'); // Param 1 posición. Param 2: 2 reemplaza en la posición 1
console.log(months);

let eliminados = months.splice(3);

console.log(eliminados);
console.log(months);

// Ordenación de arrays
console.log(months.reverse());
console.log(months.sort());

// Partes de una palabra, frase, vectores,... delimitados por un separador
let cadena = 'Javascript es un lenguaje de programación. Javascript';
let vector = '12,34,45,6,7,9';

cadena=cadena.replace('Java','ECMA');
console.log(cadena.replace('Java,','ECMA'));

let palabras = cadena.split(' ');
let numeros = vector.split(',');

console.log(palabras);
console.log(numeros);

// busqueda de una posición
let posicion = months.indexOf('Jan');
console.log(posicion);

months.push('Apr');
months.push('Jun');

// Slice
console.log(months.slice(2));
console.log(months);