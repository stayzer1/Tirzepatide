// Custom Scripts
// Smooth Scroll
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
// Функция для управления аккордеоном на мобильных устройствах
function handleMobileAccordion() {
  const firstAccordionItem = document.querySelector(".accordion__item-first");
  const mediaQuery = window.matchMedia("(max-width: 768px)");

  function handleScreenChange(e) {
    if (e.matches) {
      // Если экран меньше 768px
      firstAccordionItem.classList.add("accordion__item-active");
    } else {
      // Если экран больше 768px
      firstAccordionItem.classList.remove("accordion__item-active");
    }
  }

  // Проверяем начальное состояние
  handleScreenChange(mediaQuery);

  // Слушаем изменения размера экрана
  mediaQuery.addEventListener("change", handleScreenChange);
}

// Вызываем функцию при загрузке страницы
document.addEventListener("DOMContentLoaded", handleMobileAccordion);

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    perPage: 4,
    perMove: 1,
    gap: 16,
    breakpoints: {
      1200: { perPage: 3 },
      768: { perPage: 2 },
      600: { perPage: 1 },
    },
    pagination: false,
  });
  splide.mount();

  new Splide("#splide2", {
    type: "loop",
    perMove: 1,
    gap: 16,
    pagination: false,
  }).mount();
});

// Аккордеон
function accordion() {
  const items = document.querySelectorAll(".accordion__item-trigger");
  items.forEach((item) => {
    item.addEventListener("click", () => {
      const parent = item.parentNode;
      if (parent.classList.contains("accordion__item-active")) {
        parent.classList.remove("accordion__item-active");
      } else {
        document
          .querySelectorAll(".accordion__item")
          .forEach((child) => child.classList.remove("accordion__item-active"));
        parent.classList.add("accordion__item-active");
      }
    });
  });
}
accordion();

