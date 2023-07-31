// Función Agregar
function agregar(valor) {
    document.getElementById('pantalla').value += valor
};

// Función Borrar
function borrar() {
    document.getElementById('pantalla').value = ''
};

// Función Calcular
function calcular() {
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}