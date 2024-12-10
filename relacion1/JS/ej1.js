function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

let botonGenerar = document.getElementById("botonGenerar");
let botonComparar = document.getElementById("botonComparar");
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let divResultado = document.getElementById("resultado");

let numero1;
let numero2;

/*PRIMER APARTADO*/

// botonGenerar.addEventListener("click", function(){
//     numero1 = getRandomIntInclusive(0,50);
//     numero2 = getRandomIntInclusive(0,50);
//     div1.textContent = "";
//     div2.textContent = "";
//     divResultado.textContent = "";

//     div1.textContent = numero1;
//     div2.textContent = numero2;
//     botonGenerar.disabled = true;
//     botonComparar.disabled = false;
// });

// botonComparar.addEventListener("click", function(){
//     if (numero1 > numero2) divResultado.textContent = numero1;
//     else divResultado.textContent = numero2;
//     botonGenerar.disabled = false;
//     botonComparar.disabled = true;
// });

/*SEGUNDO APARTADO*/

botonGenerar.addEventListener("click", generarNumeros)

function generarNumeros() {
    generar = setInterval(() => {
        numero1 = getRandomIntInclusive(0,50);
        numero2 = getRandomIntInclusive(0,50);
        div1.textContent = "";
        div2.textContent = "";
        divResultado.textContent = "";

        div1.textContent = numero1;
        div2.textContent = numero2;

        botonGenerar.disabled = true;
        botonComparar.disabled = false;
    }, 20);
}

botonComparar.addEventListener("click", function(){
    clearInterval(generar);
    if (numero1 > numero2) divResultado.textContent = numero1;
    else divResultado.textContent = numero2;
    botonGenerar.disabled = false;
    botonComparar.disabled = true;
});


/*gente de la tarde*/
// let timer;
// window.onload=()=>{
//     let btnGenerar = document.getElementsByTagName("input")[0];
//     let btnCompara=document.getElementsByTagName("input")[1];
//     let caja1=document.getElementById("ladoIzq");
//     let caja2=document.getElementById("ladoDer");
//     let caja3=document.getElementById("salida");
    
//     /** --------------FUSION DE A Y B----------------- */
//     btnGenerar.onclick=()=>{
//         timer=setInterval(function(){
//             caja1.innerText="";
//             caja2.innerText="";
//             let num1 =(parseInt(Math.random()*(1+49)+1));
//             let num2 =(parseInt(Math.random()*(1+49)+1));
            
//             let texto1 = document.createTextNode(num1);
//             let texto2 = document.createTextNode(num2);

//             caja1.appendChild(texto1);
//             caja2.appendChild(texto2);
            
//         },1000);
//         caja3.innerText="";
//         btnGenerar.disabled=true;
//         btnCompara.disabled=false;
//     }

//     btnCompara.onclick=()=>{

//         clearInterval(timer);
        
//         let texto1=parseInt(caja1.innerText);
        
//         let texto2=parseInt(caja2.innerText);
//         let aux=0;
//         if (texto1>texto2) {
//             aux=texto1;
//         }else if (texto2>texto1){
//             aux=texto2;
//         }else{
//             aux=texto1;
//         }

//         let text = document.createTextNode(aux);
//         caja3.appendChild(text);
//         btnGenerar.disabled=false;
//         btnCompara.disabled=true;
//     }
// }