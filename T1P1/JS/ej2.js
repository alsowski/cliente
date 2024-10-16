function Ejercicio2() {
    function PideNumeros(media) {
        do {
            num = prompt("Dime un número: ");
            if (num != '.') {
                media += num;
                numeros += num + ',';
            }
            cont++;
        } while (num != "." && cont != 10);
        console.log(numeros);
        media = media / cont;
        console.log(`Media: ${media}`);
    }

    function MayorMedia(){
        alert(`Supera la media: ${numeros}. Supera el doble de la media: ${numeros}`);
    }

    cont = 0;
    let media = 0;
    let numeros = "";
    PideNumeros(media);
    MayorMedia()
}