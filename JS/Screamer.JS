document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('mostrarBtn');
    const overlay = document.getElementById('overlay');
    const sonido = document.getElementById('sonido');

    boton.addEventListener('click', () => {
        sonido.play();
        overlay.style.display = 'flex';
    });

    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
        sonido.pause();
        sonido.currentTime = 0;
    });
});
