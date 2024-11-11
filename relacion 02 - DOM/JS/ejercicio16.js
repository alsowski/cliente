function startLoading(id) {
    let element = document.getElementById(id);
    let currentValue = 0;
    let interval = setInterval(() => {
        currentValue += 1;
        element.value = currentValue;
        if (currentValue >= element.max) {
            clearInterval(interval);
            alert(id + ' ha alcanzado el máximo!');
        }
    }, 100); // Incrementa cada 100 milisegundos
}