const cajitas = document.querySelectorAll('.cajitas');

cajitas.forEach(cajita => {
  const brillo = cajita.querySelector('.brillo');

  cajita.addEventListener('mousemove', (e) => {
    const rect = cajita.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cajita.style.setProperty('--x', `${x}px`);
    cajita.style.setProperty('--y', `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((y - centerY) / centerY) * 10;
    const rotateX = ((x - centerX) / centerX) * -10;

    cajita.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    const angle = 135 + rotateX - rotateY;
    cajita.style.setProperty('--angle', `${angle}deg`);
  });

  cajita.addEventListener('mouseleave', () => {
    cajita.style.transform = 'rotateX(0deg) rotateY(0deg)';
    cajita.style.setProperty('--angle', `135deg`);
  });
});
