// script.js
function calcularCosto() {
    const cantidadCamisas = parseInt(document.getElementById('camisas').value);
    const cantidadPantalones = parseInt(document.getElementById('pantalones').value);
    const precioCamisas = parseFloat(document.getElementById('precioCamisas').value);
    const precioPantalones = parseFloat(document.getElementById('precioPantalones').value);

    // Validar que los valores sean numéricos
    if (isNaN(cantidadCamisas) || isNaN(cantidadPantalones) || isNaN(precioCamisas) || isNaN(precioPantalones)) {
        alert("Error: Ingrese valores numéricos válidos.");
        return;
    }

    // Realizar cálculos
    const costoCamisas = cantidadCamisas * precioCamisas;
    const costoPantalones = cantidadPantalones * precioPantalones;
    const costoTotal = costoCamisas + costoPantalones;

    // Mostrar resultados en el área designada
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = `
        <p>Costo de camisas: $${costoCamisas.toFixed(2)}</p>
        <p>Costo de pantalones: $${costoPantalones.toFixed(2)}</p>
        <p>Costo total de la compra: $${costoTotal.toFixed(2)}</p>
    `;

    // Guardar datos en localStorage si es necesario
    const datos = { cantidadCamisas, cantidadPantalones, precioCamisas, precioPantalones };
    localStorage.setItem('datosSimulador', JSON.stringify(datos));
}

