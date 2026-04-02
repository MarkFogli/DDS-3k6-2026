
const objetoAdmin = {legajo: 'mark', mail: 'marcofoglino45@gmail.com', password: '35279661'}

function validarUsuario(event) {    

    event.preventDefault(); // Evita que el formulario se envíe automáticamente  

    const $legajo = document.getElementById('legajo')
    const legajo = $legajo.value.trim();
    const $email = document.getElementById('email')
    const email = $email.value.trim();
    const $password = document.getElementById('password')
    const password = $password.value.trim();

    // Validar si el email y la contraseña coinciden con el usuario admin
    if (legajo === objetoAdmin.legajo && email === objetoAdmin.mail && password === objetoAdmin.password) {
        alert("¡Bienvenido, Marki, eres el unico usuario ADMIN!");
        window.location.href = "index.html";
        return;
    }
    else {
        alert("Credenciales INCORRECTAS.");
    }
}