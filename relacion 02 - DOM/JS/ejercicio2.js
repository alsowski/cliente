boton1 = getElementById("cambiarDimensiones");
boton2 = getElementById("cambiarBorde");
boton3 = getElementById("cambiarAlineacion");

boton1.addEventListener("click", cambiarDimensiones());
boton2.addEventListener("click", cambiarBorde());
boton3.addEventListener("click", cambiarAlineacion());

// función para crear la tabla
function creoTabla() {
    let tam = 4;

    let seccionTabla = document.getElementById("seccionTabla");

    let nuevaTabla = document.createElement("table");
    nuevaTabla.classList.add("miTabla");
    nuevaTabla.id = "miTabla";
    let tablaBody = document.createElement("tbody");

    // nuevaTabla.style.width = "100%";
    nuevaTabla.setAttribute("border", 1);
    nuevaTabla.style.width = "300px";
    nuevaTabla.style.height = "300px";

    for (let i = 0; i < tam; i++) {
      let fila = document.createElement("tr");

      for (let j = 0; j < tam; j++) {
        let celda = document.createElement("td");

        // opción 1
        // let textoCelda = document.createTextNode(`Fila : ${i+1}, Columna: ${j+1}`);
        // celda.appendChild(textoCelda);

        // opción 2
        celda.innerHTML = `F:${i + 1}, C:${j + 1}`;

        // opción 3
        // celda.textContent = `F:${i+1}, C:${j+1}`;

        // Añadir un manejador de eventos para cambiar el color al hacer click
        // en la celda oportuna.
        celda.onclick = function () {
          cambiarColorCelda(this);
        };
        fila.appendChild(celda);
        // añado la celda que acabo de crear a la fila que estoy construyendo
      }
      tablaBody.appendChild(fila);
    }
    nuevaTabla.appendChild(tablaBody);
    seccionTabla.appendChild(nuevaTabla);
  }
  // Función para mostrar y cambiar dimensiones de la tabla
  function cambiarDimensiones() {
    let tabla = document.getElementById('miTabla');
    console.log("Mi tabla:");
    console.log(tabla);
    alert(
      "Anchura actual: " +
        tabla.style.width +
        "\nAltura actual: " +
        tabla.style.height);
    let nuevaAnchura = prompt("Introduce la nueva anchura (px):");
    let nuevaAltura = prompt("Introduce la nueva altura (px):");
    tabla.style.width = nuevaAnchura + "px";
    tabla.style.height = nuevaAltura + "px";
  }

  // Función para mostrar y cambiar el borde de la tabla
  function cambiarBorde() {
    let tabla = document.getElementById("miTabla");
    let actualBorde = tabla.style.borderWidth;
    alert("Borde actual: " + actualBorde);
    let nuevoBorde = prompt("Introduce el nuevo valor del borde (px):");
    tabla.style.border = nuevoBorde + "px solid black";
  }

  // Función para cambiar la alineación de la tabla
  function cambiarAlineacion() {
    let tabla = document.getElementById("miTabla");
    let alineacionActual = tabla.style.margin;
    if (alineacionActual === "auto") {
      tabla.style.marginLeft = "auto";
      tabla.style.marginRight = "0";
    } else if (alineacionActual === "0px auto 0px 0px") {
      tabla.style.marginLeft = "0";
      tabla.style.marginRight = "auto";
    } else {
      tabla.style.margin = "auto";
    }
  }
  creoTabla();