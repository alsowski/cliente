let monedas = 0;
let interval;

function startLoading() {
    let progress = document.getElementById('progress1');
    let button = document.getElementById('generarMoneda');
    let currentValue = 0;
    button.disabled = true;
    progress.value = 0;

    interval = setInterval(() => {
        currentValue += 1;
        progress.value = currentValue;
        if (currentValue >= progress.max) {
            clearInterval(interval);
            monedas += 1;
            document.getElementById('monedas').textContent = 'MONEDAS: ' + monedas;
            button.disabled = false;
        }
    }, 50);
}