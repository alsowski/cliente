document.getElementById("incrementar").addEventListener("click", incrementar);
document.getElementById("decrementar").addEventListener("click", decrementar);
document.getElementById("consultar").addEventListener("click", consultar);
let valor = document.getElementById("resultado");

sessionStorage.setItem("contador", "1");

function incrementar() {
    sessionStorage.setItem("contador", Number(sessionStorage.getItem("contador"))+1);
}

function decrementar() {
    sessionStorage.setItem("contador", Number(sessionStorage.getItem("contador"))-1);
}

function consultar() {
    valor.innerHTML = sessionStorage.getItem("contador");
}