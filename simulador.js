// Función para obtener datos de entrada
function obtenerDatosEntrada() {
    alert("BIENVENIDO AL SIMULADOR")
    
    const etiquetas = ["camisas", "pantalones"];
    const precios = [];

    for (let etiqueta of etiquetas) {
        let cantidad = prompt(`Ingrese la cantidad de ${etiqueta} que desea comprar:`);
        let precio = prompt(`Ingrese el precio de un ${etiqueta}:`);
        
        precios.push({
            cantidad: parseInt(cantidad),
            precio: parseFloat(precio)
        });
    }

    return precios;
}

// Función para procesar los datos
function procesarDatos(entradas) {
    for (let entrada of entradas) {
        if (isNaN(entrada.cantidad) || isNaN(entrada.precio)) {
            console.error("Error: Ingrese valores numéricos válidos.");
            return null;
        }
    }

    let costos = entradas.map(entrada => entrada.cantidad * entrada.precio);
    let costoTotal = costos.reduce((total, costo) => total + costo, 0);

    return { costos, costoTotal };
}

// Función para mostrar resultados en la consola
function mostrarResultados(resultados) {
    if (!resultados) {
        console.error("Error en los datos de entrada. No se pueden mostrar resultados.");
        return;
    }

    console.log("Resultados:");
    resultados.costos.forEach((costo, index) => {
        console.log(`Costo de ${etiquetas[index]}: $${costo.toFixed(2)}`);
    });
    console.log(`Costo total de la compra: $${resultados.costoTotal.toFixed(2)}`);
    alert("la suma de total es:" + resultados.costoTotal);
    alert("Si desea añade un comentario");
}

// Llamadas a las funciones
const datosEntrada = obtenerDatosEntrada();
const resultados = procesarDatos(datosEntrada);
mostrarResultados(resultados);
