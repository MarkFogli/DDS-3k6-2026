function alertaLogin(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    alert("¡funcionando!"); // Muestra una alerta de éxito
}

function validarLogin(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Aquí puedes agregar la lógica de validación, por ejemplo:
    const legajo = document.getElementById('inputLegajo').value;
    const password = document.getElementById('inputPassword2').value;
}

const lstUsuarios = [
    { legajo: '12345', password: 'password123' },
    { legajo: '67890', password: 'password456' }
];
   