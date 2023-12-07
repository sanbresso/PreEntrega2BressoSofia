// Obtener el costo de cada producto
const costoServicio = {
    servicio1: 400,
    servicio2: 500,
    servicio3: 650
  };
  
  let costoTotal = 0;
  
  // Función para calcular el costo total de un producto y cantidad
  function calcularCostoServicio(servicio, cantidad) {
    const costo = costoServicio[servicio] * cantidad;
    costoTotal += costo;
    alert(`Costo total de ${cantidad} ${servicio}: $${costo}`);
  }
  
  // Función para solicitar al usuario si desea agregar otro producto
  function agregarOtroServicio() {
    const pregunta = prompt("¿Desea agregar otro servicio? (si/no)");
  
    if (pregunta && pregunta.toLowerCase() === "si") {
      elegirServicio();
    } else {
      alert(`Costo total del servicio: $${costoTotal}`);
    }
  }
  
  // Función para solicitar al usuario que elija un producto y la cantidad
  function elegirServicio() {
    const eleccionDeServicio = prompt("Elija un servicio (1, 2 o 3):");
  
    if (eleccionDeServicio && costoServicio.hasOwnProperty(`servicio${eleccionDeServicio}`)) {
      const cantidad = parseInt(prompt(`Ingrese la cantidad de ${eleccionDeServicio}:`), 10);
  
      if (!isNaN(cantidad) && cantidad > 0) {
        calcularCostoServicio(`servicio${eleccionDeServicio}`, cantidad);
        agregarOtroServicio();
      } else {
        alert("Cantidad no válida. Recargue la página e intente nuevamente.");
      }
    } else {
      alert("Selección no válida. Recargue la página e intente nuevamente.");
    }
  }
  
  // Iniciar el proceso preguntando por el primer servicio
  elegirServicio();
  
