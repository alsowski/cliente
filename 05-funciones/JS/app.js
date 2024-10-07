// Definición de funciones

let func = new Function("a", "b", "return a * b");
let resultado = func(10, 10);
console.log(resultado);

// función autoinvocadas
(function () {
    let msg = "hola!";
    console.log(msg)
})();

// funcion anónima
// let a=10;
// let b=10;
resultado = function (a, b) { return a * b }
console.log(resultado(10, 10));

// notación flecha -- arrow functions
const arrowF = (a, b) => a * b;
console.log(arrowF(10,10));


