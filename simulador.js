document.addEventListener('DOMContentLoaded', function () {
    cargarDatosAlmacenados();
    const botonCalcular = document.querySelector('button[type="button"]');
    botonCalcular.addEventListener('click', calcularCosto);
});

function cargarDatosAlmacenados() {
    const datosGuardados = localStorage.getItem('datosSimulador');
    
    if (datosGuardados) {
        const datosParseados = JSON.parse(datosGuardados);
        document.getElementById('camisas').value = datosParseados.cantidadCamisas;
        document.getElementById('pantalones').value = datosParseados.cantidadPantalones;
        document.getElementById('precioCamisas').value = datosParseados.precioCamisas;
        document.getElementById('precioPantalones').value = datosParseados.precioPantalones;
    }
}

function calcularCosto() {
    const cantidadCamisas = parseInt(document.getElementById('camisas').value);
    const cantidadPantalones = parseInt(document.getElementById('pantalones').value);
    const precioCamisas = parseFloat(document.getElementById('precioCamisas').value);
    const precioPantalones = parseFloat(document.getElementById('precioPantalones').value);

    if (isNaN(cantidadCamisas) || isNaN(cantidadPantalones) || isNaN(precioCamisas) || isNaN(precioPantalones)) {
        alert("Error: Ingrese valores numéricos válidos.");
        return;
    }

    const costoCamisas = cantidadCamisas * precioCamisas;
    const costoPantalones = cantidadPantalones * precioPantalones;
    const costoTotal = costoCamisas + costoPantalones;

    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = `
        <p>Camisas x${cantidadCamisas}: $${costoCamisas.toFixed(2)}</p>
        <p>Pantalones x${cantidadPantalones}: $${costoPantalones.toFixed(2)}</p>
    `;

    const totalCarrito = document.getElementById('totalCarrito');
    totalCarrito.textContent = (parseFloat(totalCarrito.textContent) + costoTotal).toFixed(2);

    limpiarFormulario();

    // Guardar datos en localStorage si es necesario
    const datos = { cantidadCamisas, cantidadPantalones, precioCamisas, precioPantalones };
    localStorage.setItem('datosSimulador', JSON.stringify(datos));
}

function limpiarFormulario() {
    document.getElementById('camisas').value = '';
    document.getElementById('pantalones').value = '';
    document.getElementById('precioCamisas').value = '';
    document.getElementById('precioPantalones').value = '';
}

function vaciarCarrito() {
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '';

    const totalCarrito = document.getElementById('totalCarrito');
    totalCarrito.textContent = '0.00';

    // Limpiar localStorage
    localStorage.removeItem('datosSimulador');
}

