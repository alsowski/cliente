let color = document.querySelectorAll("div");

for (let i = 0; i < color.length; i++) {
    color[i].addEventListener("mouseover", function(){
        document.body.style.backgroundColor = window.getComputedStyle(color[i]).backgroundColor;
    });

    color[i].addEventListener("mouseout", function(){
        document.body.style.backgroundColor = "";
    });
}

/*
Uso de window.getComputedStyle:
    getComputedStyle te permite acceder al valor final de una propiedad CSS 
    (incluyendo aquellas definidas por clases o en el archivo de estilo), en 
    lugar de solo los estilos en línea.

window.getComputedStyle(color[i]).backgroundColor devuelve el color de 
fondo real del div (el que está definido por la clase CSS, como .amarillo, .naranja o .rosa).

Se usa esto porque con el .style.backgroundcolor solo afecta a lo que haya en el style de la
etiqueta del html en este caso div, pero como esta en una clase extrena habria que usar lo del window...
*/