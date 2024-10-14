// Lista de nombres de ejemplo
const nombres = [
    "Juan",
    "Ana",
    "Sara",
    "David",
    "Pablo",
    "Luz",
    "Mark",
    "Irene",
    "Nina",
    "Alba",
  ];

  // Función para filtrar amigos usando un bucle
  function filtrarAmigos(arrays) {
    let res = "Salida: ";
    const amigos = []; // Array para almacenar los amigos
    console.log(arrays.length);
    for (let i = 0; i < arrays.length; i++) {
      if (arrays[i].length === 4) {
        amigos.push(arrays[i]); // Agregar el nombre si tiene 4 letras
        res += arrays[i] + ",";
      }
    }
    // return amigos; // Devolver la lista de amigos
    return res;
  }

  // Uso de la función
  const amigos = filtrarAmigos(nombres);

  // Mostrar resultados
  console.log("Lista de amigos con nombres de 4 letras:", amigos);
  document.write(amigos);
