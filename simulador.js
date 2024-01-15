// Función para obtener datos de entrada
function obtenerDatosEntrada() {
    alert("BIENVENIDO AL SIMULADOR")
    let cantidadCamisas = prompt("Ingrese la cantidad de camisas que desea comprar:");
    let cantidadPantalones = prompt("Ingrese la cantidad de pantalones que desea comprar:");
    let precioCamisa = prompt("Ingrese el precio de una camisa:");
    let precioPantalon = prompt("Ingrese el precio de un pantalón:");

    return {
        cantidadCamisas: parseInt(cantidadCamisas),
        cantidadPantalones: parseInt(cantidadPantalones),
        precioCamisa: parseFloat(precioCamisa),
        precioPantalon: parseFloat(precioPantalon)
    };
}

// Función para procesar los datos
function procesarDatos(entrada) {
    if (isNaN(entrada.cantidadCamisas) || isNaN(entrada.cantidadPantalones) || isNaN(entrada.precioCamisa) || isNaN(entrada.precioPantalon)) {
        console.error("Error: Ingrese valores numéricos válidos.");
        return null;
    }

    let costoCamisas = entrada.cantidadCamisas * entrada.precioCamisa;
    let costoPantalones = entrada.cantidadPantalones * entrada.precioPantalon;
    let costoTotal = costoCamisas + costoPantalones;

    return { costoCamisas, costoPantalones, costoTotal };
}

// Función para mostrar resultados en la consola
function mostrarResultados(resultados) {
    if (!resultados) {
        console.error("Error en los datos de entrada. No se pueden mostrar resultados.");
        return;
    }

    console.log("Resultados:");
    console.log(`Costo de camisas: $${resultados.costoCamisas.toFixed(2)}`);
    console.log(`Costo de pantalones: $${resultados.costoPantalones.toFixed(2)}`);
    console.log(`Costo total de la compra: $${resultados.costoTotal.toFixed(2)}`);
    alert("la suma de total es:"+resultados.costoTotal)
    alert("Si desea añade un comentario")
}

// Llamadas a las funciones
const datosEntrada = obtenerDatosEntrada();
const resultados = procesarDatos(datosEntrada);
mostrarResultados(resultados);

