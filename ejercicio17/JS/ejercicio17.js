let btnCorrer = document.getElementById('correr');
btnCorrer.addEventListener('click', iniciarCarrera);

function calcularVelocidades() {
    let velocidades = [];
    for (let i = 1; i <= 4; i++) {
        velocidades.push(Math.random() * 5 + 1);
    }
    return velocidades;

}

function iniciarCarrera() {
    console.log("Estoy aquí");
    let corredores = document.querySelectorAll('div');
    let timer;

    let div1 = corredores[0];
    let div2 = corredores[1];
    let div3 = corredores[2];
    let div4 = corredores[3];

    let velocidades = [];
    let final = false;

}
timer = setInterval(function () {
    let velocidad1 = parseInt
    if (!final) {
        div1.style.setProperty("left", div1.style.getPropertyValue("left") + velocidades[0] + "px");
        if (div1.style.getPropertyValue("left") >= 1080) {
            final = true;
            alert("ha ganando div 1");
        }
    }
    else {
        clearInterval(timer);
    }
}, 50);