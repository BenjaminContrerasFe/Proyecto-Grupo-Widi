function validarFormulario() {
    const correo = document.querySelector('input[type="text"]').value.trim();
    const password = document.querySelector('input[type="password"]').value.trim();

    if (correo === "" || password === "") {
        alert("Por favor completa todos los campos.");
        return;
    }

    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(correo)) {
        alert("Ingresa un correo electrónico válido.");
        return;
    }

    irPrincipal();
}

function irPrincipal() {
    window.location.href = 'Principal.html';
}

function next() {
    document.getElementById("box").classList.add("active");
}