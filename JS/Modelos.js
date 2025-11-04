//  DATOS DE MARCAS 
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
  { id: 'honda', nombre: 'Honda', logo: 'https://magodoscarros.com/images/brands/honda.webp' },
  { id: 'ford', nombre: 'Ford', logo: 'https://automacar.com/wp-content/uploads/2018/02/marcas_0000_Ford.png' },
  { id: 'Bugatti', nombre: 'Bugatti', logo: 'https://static.wikia.nocookie.net/nfs/images/4/49/BugattiSmallMain.png/revision/latest?cb=20200524162256&path-prefix=en' }
];
//RUTAS DE HTML
const rutas = {
  1: 'Audi-R8.html',
  2: 'Tesla-Model3.html',
  3: 'Ferrari-Roma.html',
  4: 'Toyota-CorollaCross.html',
  5: 'BMW-i4.html',
  6: 'Mercedes-190SL.html',
  7: 'Nissan-Ariya.html',
  8: 'Porsche-Taycan.html',
  9: 'Bugatti-Chiron.html',
  10: 'Chevrolet-Onix.html',
  11: 'Chevrolet-Onix2.html',
  12: 'Chevrolet-Onix3.html'
};

// DATOS DE AUTOS 
const autos = [
  { id: 1, marca: 'Audi', nombre: 'Audi R8', combustible: 'electrico', favorito: false, imagen: 'img/Audi-R8/Vista-Principal.webp' },
  { id: 2, marca: 'tesla', nombre: 'Tesla Model 3', combustible: 'electrico', favorito: false, imagen: 'https://wobcars.com/wp-content/uploads/2023/12/436A9121-1.jpg' },
  { id: 3, marca: 'ferrari', nombre: 'Ferrari Roma', combustible: 'nafta', favorito: false, imagen: 'https://wobcars.com/wp-content/uploads/2025/10/436A6748.jpg' },
  { id: 4, marca: 'toyota', nombre: 'Toyota Corolla Cross', combustible: 'hibrido', favorito: false, imagen: 'https://wobcars.com/wp-content/uploads/2025/05/2018-Bugatti-Chiron-1.webp' },
  { id: 5, marca: 'bmw', nombre: 'BMW i4', combustible: 'electrico', favorito: false, imagen: 'https://wobcars.com/wp-content/uploads/2025/05/2018-Bugatti-Chiron-1.webp' },
  { id: 6, marca: 'mercedes', nombre: 'Mercedes EQB', combustible: 'electrico', favorito: false, imagen: 'https://wobcars.com/wp-content/uploads/2025/05/2018-Bugatti-Chiron-1.webp' },
  { id: 7, marca: 'nissan', nombre: 'Nissan Ariya', combustible: 'electrico', favorito: false, imagen: 'https://wobcars.com/wp-content/uploads/2025/05/2018-Bugatti-Chiron-1.webp' },
  { id: 8, marca: 'porsche', nombre: 'Porsche Taycan', combustible: 'electrico', favorito: false, imagen: 'https://wobcars.com/wp-content/uploads/2025/05/2018-Bugatti-Chiron-1.webp' },
  { id: 9, marca: 'Bugatti', nombre: 'Bugatti Chiron', combustible: 'nafta', favorito: false, imagen: 'https://wobcars.com/wp-content/uploads/2025/05/2018-Bugatti-Chiron-1.webp' },
  { id: 10, marca: 'chevrolet', nombre: 'Chevrolet Onix', combustible: 'nafta', favorito: false, imagen: 'https://wobcars.com/wp-content/uploads/2025/05/2018-Bugatti-Chiron-1.webp' },
  { id: 11, marca: 'chevrolet', nombre: 'Chevrolet Onix', combustible: 'nafta', favorito: false, imagen: 'https://wobcars.com/wp-content/uploads/2025/05/2018-Bugatti-Chiron-1.webp' },
  { id: 12, marca: 'chevrolet', nombre: 'Chevrolet Onix', combustible: 'nafta', favorito: false, imagen: 'https://wobcars.com/wp-content/uploads/2025/05/2018-Bugatti-Chiron-1.webp' }
];

// REFERENCIAS HTML
// elementos de html que vamos a modificar
const listaMarcas = document.getElementById('listaMarcas'); // muestra marcas
const rejillaAutos = document.getElementById('rejillaAutos'); // muestra autos
const seleccionCombustible = document.getElementById('seleccionCombustible'); // selecciona el combustible
const contadorResultados = document.getElementById('contadorResultados'); // contador de modelos visibles

// marca default
let marcaActiva = 'todo';


   //FUNCION: MOSTRAR MARCAS
   //crea los logos de marcas en el panel filtros

function mostrarMarcas() {
  listaMarcas.innerHTML = ''; // limpia el contenedor

  // reecorremos cada marca y creamos su HTML
  marcas.forEach(m => {
    const div = document.createElement('div'); // div contenedor de marca
    div.className = 'marca'; // le damos clase CSS
    div.dataset.id = m.id; // guardamos el id de la marca en un atributo

    const imgLogo = document.createElement('img'); // creamos imagen del logo
    imgLogo.src = m.logo; // link del logo
    imgLogo.alt = m.nombre; // texto alternativo
    imgLogo.className = 'logo-marca'; // clase CSS

    const nombreDiv = document.createElement('div'); // nombre visible de la marca
    nombreDiv.className = 'nombre-marca';
    nombreDiv.textContent = m.nombre;

    // agregamos imagen + nombre dentro del div principal
    div.appendChild(imgLogo);
    div.appendChild(nombreDiv);

    // si agarra esta marca q se pinte de otro color
    if (m.id === marcaActiva) div.style.background = '#333';

    // al hacer clic en una marca se cambia el filtro activo
    div.addEventListener('click', () => {
      marcaActiva = m.id;
      renderizar(); // actualiza la vista de autos
    });

    // insertamos la marca al contenedor lateral
    listaMarcas.appendChild(div);
  });
}


   //FUNCION: MOSTRAR AUTOS
   //filtra por marca y combustible, y crea las tarjetas

function mostrarAutos() {
  const tipoCombustible = seleccionCombustible.value; // obtenemos el filtro seleccionado

  // filtramos autos segun marca y combustible
  const filtrados = autos.filter(a => {
    const porMarca = marcaActiva === 'todo' || a.marca === marcaActiva;
    const porCombustible = tipoCombustible === 'todo' || a.combustible === tipoCombustible;
    return porMarca && porCombustible;
  });

  rejillaAutos.innerHTML = ''; // limpiamos la rejilla

  // recorremos los autos filtrados
  filtrados.forEach(a => {
    const tarjeta = document.createElement('article'); // creamos tarjeta
    tarjeta.className = 'auto'; // clase CSS

    //  ruta HTML donde se abrira al hacer clic
   const ruta = rutas[a.id];

    // estructura HTML de la tarjeta con enlace incluido
    tarjeta.innerHTML = `
      <a href="${ruta}" class="enlace-auto" style="text-decoration:none; color:inherit;">
        <div class="info">
          <div class="tipo">SUV</div>
          <div class="combustible">
            ${a.combustible === 'electrico' ? '100 % eléctrico' : a.combustible}
          </div>
        </div>

        <div class="imagen-auto">
          <img src="${a.imagen}" alt="${a.nombre}">
        </div>

        <div class="modelo">${a.nombre}</div>

        <div class="pie">
          <div style="font-size:13px;color:#888">${a.marca}</div>
          <button class="favorito" data-id="${a.id}" title="Favorito">❤</button>
        </div>
      </a>
    `;

    // agregamos la tarjeta a la rejilla
    rejillaAutos.appendChild(tarjeta);
  });

  // mostramos num de resultados encontrados
  contadorResultados.textContent = `(${filtrados.length}) modelos`;

  // BOTONES DE FAVORITO
  // recorremos cada boton con clase .favorito
  document.querySelectorAll('.favorito').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation(); // evita que el click se propague al enlace
      e.preventDefault(); // evita que se abra el link al tocar el corazon

      const id = Number(btn.dataset.id); // obtenemos el id del auto
      const auto = autos.find(x => x.id === id); // buscamos ese auto
      auto.favorito = !auto.favorito; // invertimos su estado (true/false)

      // visualmente marcamos el boton como activo si es favorito
      btn.classList.toggle('activo', auto.favorito);
    });
  });
}


   //FUNCION PRINCIPAL: renderizar()
   //llama a las funciones para actualizar la vista

function renderizar() {
  mostrarMarcas(); // muestra los logos de marcas
  mostrarAutos();  // muestra las tarjetas de autos filtradas
}

// si cambia el tipo de combustible q se actualiza todo
seleccionCombustible.addEventListener('change', renderizar);

// llamamos una vez al cargar la pagina
renderizar();
