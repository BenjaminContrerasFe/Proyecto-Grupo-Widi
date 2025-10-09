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

document.querySelectorAll('.Flotante input').forEach(input => {
  const contenedor = input.parentElement;

  // Cuando el input tiene foco
  input.addEventListener('focus', () => {
    contenedor.classList.add('active');
  });

  // Cuando pierde el foco
  input.addEventListener('blur', () => {
    if (input.value === '') {
      contenedor.classList.remove('active');
    }
  });
});