//  datos
const marcas = [
  { id: 'todo', nombre: 'Todas', logo: 'https://images.emojiterra.com/microsoft/fluent-emoji/15.1/3d/1f310_3d.png' },
  { id: 'volkswagen', nombre: 'Volkswagen', logo: 'https://www.codinter.com/en/wp-content/uploads/sites/2/2018/01/logo-volkswagen-256x256.png' },
  { id: 'audi', nombre: 'Audi', logo: 'https://cdn.iconscout.com/icon/free/png-256/free-audi-icon-svg-download-png-2874686.png' },
  { id: 'ferrari', nombre: 'Ferrari', logo: 'https://static.wikia.nocookie.net/nfs/images/1/1c/FerrariSmallMain.webp/revision/latest?cb=20250102175436&path-prefix=es' },
  { id: 'nissan', nombre: 'Nissan', logo: 'https://cdn.iconscout.com/icon/free/png-256/free-nissan-icon-svg-download-png-202859.png' },
  { id: 'bmw', nombre: 'BMW', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGAxR4zvwleGvWWq0oMkBBzUdA5_y67vuurg&s' },
  { id: 'mercedes', nombre: 'Mercedes-Benz', logo: 'https://cdn.iconscout.com/icon/free/png-256/free-mercedes-icon-svg-download-png-202855.png' },
  { id: 'toyota', nombre: 'Toyota', logo: 'https://cdn.iconscout.com/icon/free/png-256/free-toyota-icon-svg-download-png-2874755.png' },
  { id: 'porsche', nombre: 'Porsche', logo: 'https://api-core.multimotors.by/storage/brands/5a1b42af-639b-47f5-ac36-0f1bb9da4331.webp' },
  { id: 'tesla', nombre: 'Tesla', logo: 'https://static.wikia.nocookie.net/nfs/images/4/48/TeslaSmallmain.webp/revision/latest?cb=20250102170647&path-prefix=es' },
  { id: 'chevrolet', nombre: 'Chevrolet', logo: 'https://lh5.googleusercontent.com/proxy/8WEZB7vkIMggpu28eObd8Lvk9WUIbOTBxMiUSjecgWOu518eWHfd05vcXAXGbHwZCyyEtgTfsvedtRiw3oS3svZY3j0YqtH16S3v-hX7svzdiw' },
  { id: 'honda', nombre: 'Honda', logo: 'https://magodoscarros.com/images/brands/honda.webp' }
];

// Lista de autos con imágenes de ejemplo
const autos = [
  { id: 1, marca: 'audi', nombre: 'Audi Q8 e-tron', combustible: 'electrico', favorito: false, imagen: 'https://wobcars.com/wp-content/uploads/2025/10/Porsche-906-Based-Vasek-Polak-Spyder-1.webp' },
  { id: 2, marca: 'tesla', nombre: 'Tesla Model 3', combustible: 'electrico', favorito: false, imagen: 'https://wobcars.com/wp-content/uploads/2023/12/436A9121-1.jpg' },
  { id: 3, marca: 'ferrari', nombre: 'Ferrari Roma', combustible: 'nafta', favorito: false, imagen: 'https://wobcars.com/wp-content/uploads/2025/10/436A6748.jpg' },
  { id: 4, marca: 'toyota', nombre: 'Toyota Corolla Cross', combustible: 'hibrido', favorito: false, imagen: 'https://wobcars.com/wp-content/uploads/2025/05/2018-Bugatti-Chiron-1.webp' },
  { id: 5, marca: 'bmw', nombre: 'BMW i4', combustible: 'electrico', favorito: false, imagen: 'https://wobcars.com/wp-content/uploads/2025/05/2018-Bugatti-Chiron-1.webp' },
  { id: 6, marca: 'mercedes', nombre: 'Mercedes EQB', combustible: 'electrico', favorito: false, imagen: 'https://wobcars.com/wp-content/uploads/2025/05/2018-Bugatti-Chiron-1.webp' },
  { id: 7, marca: 'nissan', nombre: 'Nissan Ariya', combustible: 'electrico', favorito: false, imagen: 'https://wobcars.com/wp-content/uploads/2025/05/2018-Bugatti-Chiron-1.webp' },
  { id: 8, marca: 'porsche', nombre: 'Porsche Taycan', combustible: 'electrico', favorito: false, imagen: 'https://wobcars.com/wp-content/uploads/2025/05/2018-Bugatti-Chiron-1.webp' },
  { id: 9, marca: 'chevrolet', nombre: 'Chevrolet Onix', combustible: 'nafta', favorito: false, imagen: 'https://wobcars.com/wp-content/uploads/2025/05/2018-Bugatti-Chiron-1.webp' },
  { id: 10, marca: 'chevrolet', nombre: 'Chevrolet Onix', combustible: 'nafta', favorito: false, imagen: 'https://wobcars.com/wp-content/uploads/2025/05/2018-Bugatti-Chiron-1.webp' },
  { id: 11, marca: 'chevrolet', nombre: 'Chevrolet Onix', combustible: 'nafta', favorito: false, imagen: 'https://wobcars.com/wp-content/uploads/2025/05/2018-Bugatti-Chiron-1.webp' },
  { id: 12, marca: 'chevrolet', nombre: 'Chevrolet Onix', combustible: 'nafta', favorito: false, imagen: 'https://wobcars.com/wp-content/uploads/2025/05/2018-Bugatti-Chiron-1.webp' }
];

// Referencias HTML
const listaMarcas = document.getElementById('listaMarcas');
const rejillaAutos = document.getElementById('rejillaAutos');
const seleccionCombustible = document.getElementById('seleccionCombustible');
const contadorResultados = document.getElementById('contadorResultados');

let marcaActiva = 'todo';

/* ------------------- MOSTRAR MARCAS ------------------- */
function mostrarMarcas() {
  listaMarcas.innerHTML = '';

  marcas.forEach(m => {
    const div = document.createElement('div');
    div.className = 'marca';
    div.dataset.id = m.id;

    // Crear imagen en lugar de texto
    const imgLogo = document.createElement('img');
    imgLogo.src = m.logo;
    imgLogo.alt = m.nombre;
    imgLogo.className = 'logo-marca';

    const nombreDiv = document.createElement('div');
    nombreDiv.className = 'nombre-marca';
    nombreDiv.textContent = m.nombre;

    div.appendChild(imgLogo);
    div.appendChild(nombreDiv);

    if (m.id === marcaActiva) div.style.background = '#333';

    div.addEventListener('click', () => {
      marcaActiva = m.id;
      renderizar();
    });

    listaMarcas.appendChild(div);
  });
}

/* ------------------- MOSTRAR AUTOS ------------------- */
function mostrarAutos() {
  const tipoCombustible = seleccionCombustible.value;

  const filtrados = autos.filter(a => {
    const porMarca = marcaActiva === 'todo' || a.marca === marcaActiva;
    const porCombustible = tipoCombustible === 'todo' || a.combustible === tipoCombustible;
    return porMarca && porCombustible;
  });

  rejillaAutos.innerHTML = '';

  filtrados.forEach(a => {
    const tarjeta = document.createElement('article');
    tarjeta.className = 'auto';
    tarjeta.innerHTML = `
      <div class="info">
        <div class="tipo">SUV</div>
        <div class="combustible">${a.combustible === 'electrico' ? '100 % eléctrico' : a.combustible}</div>
      </div>
      <div class="imagen-auto">
        <img src="${a.imagen}" alt="${a.nombre}">
      </div>
      <div class="modelo">${a.nombre}</div>
      <div class="pie">
        <div style="font-size:13px;color:#888">${a.marca}</div>
        <button class="favorito" data-id="${a.id}" title="Favorito">❤</button>
      </div>
    `;

    tarjeta.addEventListener('click', e => {
      if (!e.target.classList.contains('favorito')) {
        window.location.href = `detalle.html?id=${a.id}`;
      }
    });

    rejillaAutos.appendChild(tarjeta);
  });

  contadorResultados.textContent = `(${filtrados.length}) modelos`;

  document.querySelectorAll('.favorito').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = Number(btn.dataset.id);
      const auto = autos.find(x => x.id === id);
      auto.favorito = !auto.favorito;
      btn.classList.toggle('activo', auto.favorito);
    });
  });
}

/* ------------------- FUNCIÓN PRINCIPAL ------------------- */
function renderizar() {
  mostrarMarcas();
  mostrarAutos();
}

seleccionCombustible.addEventListener('change', renderizar);

renderizar();
