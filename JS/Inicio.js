(function(){
    const listElements = document.querySelectorAll('.menu__item--show');
    const list = document.querySelector('.menu__links');
    const menu = document.querySelector('.menu__hamburguer');

    const addClick = () => {
        listElements.forEach(element => {
            // Evitar agregar listeners múltiples (por seguridad)
            if (element.dataset.listenerAdded) return;
            element.dataset.listenerAdded = "true";

            element.addEventListener('click', (e) => {
                // Obtengo el enlace principal que está como hijo directo del li
                const mainLink = element.querySelector(':scope > .menu__link');

                // Si el click vino desde el enlace principal => prevenir y toggle
                if (mainLink && mainLink.contains(e.target)) {
                    e.preventDefault();

                    let subMenu = element.children[1];
                    let height = 0;
                    element.classList.toggle('menu__item--active');

                    if (subMenu.clientHeight === 0) {
                        height = subMenu.scrollHeight;
                    }

                    subMenu.style.height = `${height}px`;
                } else {
                    // Si no fue el enlace principal (p. ej. un link dentro del submenú),
                    // dejamos que el click se ejecute normalmente (navegación).
                    // También permite que en desktop el hover siga funcionando.
                    return;
                }
            });
        });
    };

    const deleteStyleHeight = () => {
        listElements.forEach(element => {
            if (element.children[1].getAttribute('style')) {
                element.children[1].removeAttribute('style');
                element.classList.remove('menu__item--active');
            }
            // permitir volver a añadir listener si fuera necesario
            element.removeAttribute('data-listener-added');
        });
    };

    window.addEventListener('resize', () => {
        if (window.innerWidth > 800) {
            deleteStyleHeight();
            if (list.classList.contains('menu__links--show'))
                list.classList.remove('menu__links--show');
        } else {
            // en viewport chico nos aseguramos de tener los listeners
            addClick();
        }
    });

    // siempre intentar agregar los listeners al cargar
    addClick();

    menu.addEventListener('click', () =>
        list.classList.toggle('menu__links--show')
    );
})();

let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");

let carouselDom = document.querySelector(".carousel");
let SliderDom = carouselDom.querySelector(".carousel .list");
let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
let timeDom = document.querySelector(".carousel .time");

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function () {
  showSlider("next");
};

prevDom.onclick = function () {
  showSlider("prev");
};
let runTimeOut;
let runNextAuto = setTimeout(() => {
  next.click();
}, timeAutoNext);
function showSlider(type) {
  let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
  let thumbnailItemsDom = document.querySelectorAll(
    ".carousel .thumbnail .item"
  );

  if (type === "next") {
    SliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carouselDom.classList.add("next");
  } else {
    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
    carouselDom.classList.add("prev");
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timeRunning);

  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    next.click();
  }, timeAutoNext);
}
;