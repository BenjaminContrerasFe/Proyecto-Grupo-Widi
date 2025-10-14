const boton = document.getElementById('mostrarBtn');
const overlay = document.getElementById('overlay');
const sonido = document.getElementById('sonido');

boton.addEventListener('click', () => {
    sonido.play();                   // reproduce el sonido
    overlay.style.display = 'flex';  // muestra la imagen/gif
    
});

// Si querés cerrarlo con un clic:
overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    sonido.pause();
    sonido.currentTime = 0;          // reinicia el sonido
});
