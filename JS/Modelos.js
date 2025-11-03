//  datos
 const marcas = [
      { id: 'todo', nombre: 'Todas', logo: '🌐' },
      { id: 'volkswagen', nombre: 'Volkswagen', logo: 'VW' },
      { id: 'audi', nombre: 'Audi', logo: 'A' },
      { id: 'ferrari', nombre: 'Ferrari', logo: 'F' },
      { id: 'nissan', nombre: 'Nissan', logo: 'N' },
      { id: 'bmw', nombre: 'BMW', logo: 'B' },
      { id: 'mercedes', nombre: 'Mercedes-Benz', logo: 'M' },
      { id: 'toyota', nombre: 'Toyota', logo: 'T' },
      { id: 'porsche', nombre: 'Porsche', logo: 'P' },
      { id: 'tesla', nombre: 'Tesla', logo: '⚡' },
      { id: 'chevrolet', nombre: 'Chevrolet', logo: 'C' },
      { id: 'honda', nombre: 'Honda', logo: 'H' }
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
        div.innerHTML = `
          <div class="logo-marca">${m.logo}</div>
          <div class="nombre-marca">${m.nombre}</div>
        `;

        if (m.id === marcaActiva) div.style.background = '#eef6ff';

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

        // Click para abrir detalle (menos el botón favorito)
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