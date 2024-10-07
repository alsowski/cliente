// // Math.random() devolverá un número de coma flotante mayor o igual que 0 y menor que (pero nunca igual a) 1.
// // En otras palabras, 0 <= x < 1
// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }
  
// console.log(getRandomInt(3));
// // Salida: 0, 1 or 2
  
// console.log(getRandomInt(1));
// // Salids: 0
  
// console.log(Math.random());
// // Salida: un número de 0 a <1
// // Generar número aleatorio entre mínimo y máximo sin incluir extremos
// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
// }
// // Generar número aleatorio entre mínimo y máximo incluyendo extremos (números enteros)
// function getRandomEnteros(min, max) {
//     return Math.random() * (max - min + 1) + min;
// }
// // Generar número aleatorio entre mínimo y máximo incluyendo extremos
// function getRandomIntInclusive(min, max) {
//     const minCeiled = Math.ceil(min);
//     const maxFloored = Math.floor(max);
//     return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
//      // The maximum is inclusive and the minimum is inclusive
// }

// Math.random() devolverá un número de coma flotante mayor o igual que 0 y menor que (pero nunca igual a) 1.
// En otras palabras, 0 <= x < 1
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
getRandomInt(10);
  
console.log(Math.random() * 100)

console.log(getRandomInt(3));
// Salida: 0, 1 or 2
  
console.log(getRandomInt(2));
// Salids: 0 o 1
  
console.log(Math.random());
// Salida: un número de 0 a <1

// Generar número aleatorio entre mínimo y máximo sin incluir extremos
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
getRandomArbitrary(5,10);
// Generar número aleatorio entre mínimo y máximo incluyendo extremos (números enteros)
function getRandomEnteros(min, max) {
    return Math.random() * (max - min + 1) + min;
}
// Generar número aleatorio entre mínimo y máximo incluyendo extremos
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
     // The maximum is inclusive and the minimum is inclusive
}