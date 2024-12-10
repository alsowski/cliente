let div = document.querySelectorAll("div");

//Apartado 1
div[0].addEventListener("mouseover", function(){
    div[1].style.visibility = "visible";
});

//Apartado 2
div[0].addEventListener("mouseover", function(){
    div[1].style.display = "block";
});