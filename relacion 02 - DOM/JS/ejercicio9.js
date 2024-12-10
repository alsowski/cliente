let color = document.getElementById("parrafo");

color.style.backgroundColor = "lightpink";
color.style.border = "1px solid black";
color.style.width = "200px";
color.style.fontSize = "20px";

color.addEventListener("click", cambiarColor);

function cambiarColor(){
    if (color.style.backgroundColor == "lightpink"){
        color.style.backgroundColor = "lightcyan";
        color.style.border = "3px solid turquoise";
        color.style.width = "300px";
        color.style.fontSize = "27px";
    }
    else {
        color.style.backgroundColor = "lightpink";
        color.style.border = "1px solid black";
        color.style.width = "200px";
        color.style.fontSize = "20px";
    }
}