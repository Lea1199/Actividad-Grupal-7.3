// Funciones para mostrar alertas (ya las tenías)
function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

// Validación al hacer clic en "Registrarme"
document.getElementById("regBtn").addEventListener("click", function () {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    const terminos = document.getElementById("terminos").checked;

    // Ocultar alertas previas
    document.getElementById("alert-success").classList.remove("show");
    document.getElementById("alert-danger").classList.remove("show");

    let valid = true;

    // Validar campos vacíos
    if (!nombre || !apellido || !email || !password1 || !password2) {
        valid = false;
    }

    // Validar contraseña mínima
    if (password1.length < 6) {
        valid = false;
    }

    // Validar que las contraseñas coincidan
    if (password1 !== password2) {
        valid = false;
    }

    // Validar checkbox
    if (!terminos) {
        valid = false;
    }

    // Mostrar alerta correspondiente
    if (valid) {
        showAlertSuccess();
    } else {
        showAlertError();
    }
});