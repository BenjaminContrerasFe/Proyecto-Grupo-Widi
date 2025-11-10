document.addEventListener("DOMContentLoaded", () => {
  const listElements = document.querySelectorAll(".menu__item--show");
  const list = document.querySelector(".menu__links");
  const menu = document.querySelector(".menu__hamburguer");

  const addClick = () => {
    listElements.forEach(element => {
      element.addEventListener("click", e => {
        if (e.target.classList.contains("menu__link")) {
          e.preventDefault();
        }

        let subMenu = element.children[1];
        let height = 0;
        element.classList.toggle("menu__item--active");

        if (subMenu.clientHeight === 0) {
          height = subMenu.scrollHeight;
        }

        subMenu.style.height = `${height}px`;
      });
    });
  };

  const deleteStyleHeight = () => {
    listElements.forEach(element => {
      if (element.children[1].getAttribute("style")) {
        element.children[1].removeAttribute("style");
        element.classList.remove("menu__item--active");
      }
    });
  };

  window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
      deleteStyleHeight();
      if (list.classList.contains("menu__links--show"))
        list.classList.remove("menu__links--show");
    }
  });

  addClick();

  menu.addEventListener("click", () => {
    list.classList.toggle("menu__links--show");
  });


  const links = document.querySelectorAll(".menu__link, .menu__link--inside");
  const currentUrl = window.location.pathname.split("/").pop();

  links.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentUrl || (href === "index.html" && currentUrl === "")) {
      link.classList.add("active");
    }
  });


  let current = 0;
  const slides = document.querySelectorAll(".slide");
  const next = document.querySelector(".arrow.right");
  const prev = document.querySelector(".arrow.left");

  function showSlide(index) {
    slides[current].classList.remove("active");
    current = (index + slides.length) % slides.length;
    slides[current].classList.add("active");
  }

  next.addEventListener("click", () => {
    showSlide(current + 1);
  });

  prev.addEventListener("click", () => {
    showSlide(current - 1);
  });

  setInterval(() => showSlide(current + 1), 6000);
});