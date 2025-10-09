const cajitas = document.querySelectorAll('.cajitas');

cajitas.forEach(cajita => {
  const brillo = cajita.querySelector('.brillo');

  // Valores actuales y objetivo para rotación y posición de brillo
  let currentX = 0, currentY = 0, targetX = 0, targetY = 0;
  let currentRotateX = 0, currentRotateY = 0, targetRotateX = 0, targetRotateY = 0;
  let currentAngle = 135, targetAngle = 135;

  function animate() {
    // Interpolación para suavizar (factor 0.1)
    currentX += (targetX - currentX) * 0.1;
    currentY += (targetY - currentY) * 0.1;
    currentRotateX += (targetRotateX - currentRotateX) * 0.1;
    currentRotateY += (targetRotateY - currentRotateY) * 0.1;
    currentAngle += (targetAngle - currentAngle) * 0.1;

    cajita.style.setProperty('--x', `${currentX}px`);
    cajita.style.setProperty('--y', `${currentY}px`);
    cajita.style.transform = `rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg)`;
    cajita.style.setProperty('--angle', `${currentAngle}deg`);

    requestAnimationFrame(animate);
  }

  animate(); // Iniciar animación continua

  cajita.addEventListener('mousemove', (e) => {
    const rect = cajita.getBoundingClientRect();
    targetX = e.clientX - rect.left;
    targetY = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    targetRotateY = ((targetY - centerY) / centerY) * 10;
    targetRotateX = ((targetX - centerX) / centerX) * -10;
    targetAngle = 135 + targetRotateX - targetRotateY;
  });

  cajita.addEventListener('mouseleave', () => {
    targetX = 150; // mitad caja aprox.
    targetY = 100;
    targetRotateX = 0;
    targetRotateY = 0;
    targetAngle = 135;
  });
});
