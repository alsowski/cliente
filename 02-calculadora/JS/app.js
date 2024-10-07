function Recoger(msj) {
    let valido = false;
    let a;
    do {
        a = prompt(msj);
        if (isNaN(a) || a == "") {
            alert("No valido");
        } else {
            valido = true;
        }
    } while (valido == false)
    return a;
}

function Sumar(a,b) {
    let c = Number(a) + Number(b);
    alert(`La suma es: ${c}`);
}

function Restar(a,b) {
    let c = Number(a) - Number(b);
    alert(`La suma es: ${c}`);
}

function Multiplicar(a,b) {
    let c = Number(a) * Number(b);
    alert(`La suma es: ${c}`);
}

function Dividir(a,b) {
    let c = Number(a) / Number(b);
    alert(`La suma es: ${c}`);
}

function Calculadora() {
    let a = Recoger("Dime numero A: ");
    let b = Recoger("Dime numero B: ");
    let opvalida = false;

    do {
        let opcion = prompt("¿Que opción quieres realizar? (+ - * /): ");
        switch (opcion) {
            case "+":
                Sumar(a, b);
                opvalida = true;
                break;
            case "-":
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
//Calculadora();

function SumarVentana() {
    let a = Recoger("Dime numero A: ");
    let b = Recoger("Dime numero B: ");

    Sumar(a, b);
}