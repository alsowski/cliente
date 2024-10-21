function inicioDOM(){
    console.log("Dom cargado")

    document.body.style.backgroundColor = "red";

    //document.getElementById
    let titulo = document.getElementById("title");
    console.log(titulo);
    console.log(titulo.innerHTML);
    console.log(titulo.textContent);
    console.log(titulo.textContent.length);

}