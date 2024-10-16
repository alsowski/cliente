function Ejercicio4() {
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

        // inicializamos matriz
        for (let i = 0; i < columna; i++) {
            matriz[i] = new Array(fila);
        }

        // relleno valores
        for (let i = 0; i < columna; i++) {
            for (let j = 0; j < fila; j++) {
                matriz[i][j] = Math.floor(Math.random() * 100);
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

    function CalculaMedia(matriz) {
        for (let i = 0; i < columna; i++) {
            for (let j = 0; j < fila; j++) {
                media += matriz[i][j];
            }
        }
        media= media / (num*num);
        console.log(`La media es ${media}`);
    }

    function ComprobarNumero(num) {
        while (num > 5 || num < 2) {
            alert("Ese número no está en el rango");
            num = prompt("Dime un número del 2 al 5: ");
        }
    }

    media = 0;
    num = prompt("Dime un número del 5 al 10: ");
    ComprobarNumero(num);
    let fila = num;
    let columna = num;
    let matriz = new Array(columna);
    CreaYPintaMatriz(fila, columna);
    CalculaMedia(matriz);
}