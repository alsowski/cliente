function Ejercicio3() {
    function ComprobarNumero(num) {
        while (num > 10 || num < 5) {
            alert("Ese número no está en el rango");
            num = prompt("Dime un número del 5 al 10: ");
        }
    }

    function LlenarArray(num, arraynum) {
        for (i = 0; i < num; i++) {
            arraynum.push(num * Math.floor(Math.random() * 100));
        }
    }

    function MostrarArray(arraynum) {
        for (i = 0; i < arraynum.length; i++) {
            console.log(arraynum[i]);
        }
    }

    function CalcularMedia(arraynum, media, num) {
        for (i = 0; i < arraynum.length; i++) {
            media += arraynum[i];
        }
        media = media / num;
        console.log(media);
    }

    function MayorQueMedia(arraynum, media, resultado) {
        for (i = 0; i < arraynum.length; i++) {
            if (Number(arraynum[i]) > media) {
                resultado += (arraynum[i]) + ", "
            }
        }
        console.log(`Los números ${resultado}son mayores que la media`)
    }

    resultado = ""
    media = 0;
    let arraynum = []
    num = prompt("Dime un número del 5 al 10: ");
    ComprobarNumero(num);
    LlenarArray(num, arraynum);
    MostrarArray(arraynum);
    CalcularMedia(arraynum, media, num);
    MayorQueMedia(arraynum, media, resultado)
}