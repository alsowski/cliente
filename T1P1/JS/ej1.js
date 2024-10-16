function Ejercicio1() {
    function ComprobarOpcion(opcion) {
        while (opcion < 1 || opcion > 2) {
            alert("Esa no es una opción, elige otra vez");
            opcion = prompt("¿Que opción quieres? (1-Pesetas 2-Dólares): ");
        }
    }

    function ComprobarImporte(importe) {
        while (importe < 0) {
            alert("Pon una cantidad positiva");
            importe = prompt("¿Cual es el importe?: ");
        }
    }

    function CalcularImporte(opcion, importe) {
        if (opcion == 1) {
            pesetas = importe * 166;
            alert(`Son ${pesetas} pesetas`);
        } else if (opcion == 2) {
            dolares = importe * 1.09;
            alert(`Son ${dolares} dólares`);
        }
    }

    let pesetas = 0;
    let dolares = 0;
    opcion = prompt("¿Que opción quieres? (1-Pesetas 2-Dólares): ");
    ComprobarOpcion(opcion);
    importe = prompt("¿Cual es el importe?: ");
    ComprobarImporte(importe);
    CalcularImporte(opcion, importe)
}