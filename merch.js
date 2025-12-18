

/// CARD - IMAGE
/// CARD - IMAGE
/// CARD - IMAGE
/// CARD - IMAGE
/// CARD - IMAGE
/// CARD - IMAGE
/// CARD - IMAGE
/// CARD - IMAGE
/// CARD - IMAGE

const thumbs = document.querySelectorAll(".thumb");
const mainImage = document.getElementById("mainImage");

thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
        mainImage.src = thumb.src;
        thumbs.forEach((t) => t.classList.remove("active-thumb"));
        thumb.classList.add("active-thumb");
    });
});



// Робимо карусель для кожного продукту
// Робимо карусель для кожного продукту
// Робимо карусель для кожного продукту
// Робимо карусель для кожного продукту
// Робимо карусель для кожного продукту
// Робимо карусель для кожного продукту
// Робимо карусель для кожного продукту
// Робимо карусель для кожного продукту
// Робимо карусель для кожного продукту
// Робимо карусель для кожного продукту
document.querySelectorAll(".product-card").forEach((card) => {

    // 🔹 беремо ТІЛЬКИ видимі фото і точки
    const images = Array.from(card.querySelectorAll(".carousel-img"))
      .filter(img => !img.classList.contains("display-none"));
  
    const dots = Array.from(card.querySelectorAll(".dot"))
      .filter(dot => !dot.classList.contains("display-none"));
  
    if (images.length === 0) return;
  
    let index = 0;
  
    function updateImage(i) {
      images.forEach((img, idx) => {
        img.style.display = idx === i ? "block" : "none";
      });
  
      dots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === i);
      });
    }
  
    // 🔹 старт
    updateImage(index);
  
    // 🔹 клік по фото → наступне
    images.forEach((img) => {
      img.addEventListener("click", () => {
        index = (index + 1) % images.length;
        updateImage(index);
      });
    });
  
    // 🔹 клік по точках
    dots.forEach((dot, idx) => {
      dot.addEventListener("click", () => {
        index = idx;
        updateImage(index);
      });
    });
  
  });
  
// кнопка бургер працбж
// кнопка бургер працбж
// кнопка бургер працбж
// кнопка бургер працбж
// кнопка бургер працбж
// кнопка бургер працбж
// кнопка бургер працбж
// кнопка бургер працбж
// кнопка бургер працбж
// кнопка бургер працбж
// кнопка бургер працбж
// кнопка бургер працбж
// кнопка бургер працбж
// кнопка бургер працбж
// кнопка бургер працбж
// кнопка бургер працбж
// кнопка бургер працбж
const burger = document.getElementById("burger-menu");
const closeBtn = document.getElementById("close-menu");
const navLinks = document.getElementById("nav-links");
const rounded = document.getElementById("rounded");

burger.addEventListener("click", () => {
    navLinks.classList.remove("d-none");
    navLinks.classList.add("d-block", "text-center", "w-100");
    burger.classList.add("d-none");
    closeBtn.classList.remove("d-none");
    rounded.classList.remove("rounded-0");
    rounded.classList.add("rounded-0");
});

closeBtn.addEventListener("click", () => {
    navLinks.classList.add("d-none");
    navLinks.classList.remove("d-block");
    burger.classList.remove("d-none");
    closeBtn.classList.add("d-none");
    rounded.classList.remove("rounded-0");
    rounded.classList.add("rounded-0");
});

// Автоматично показує меню на десктопі
window.addEventListener("resize", () => {
    if (window.innerWidth >= 992) {
        navLinks.classList.remove("d-none");
        burger.classList.add("d-none");
        closeBtn.classList.add("d-none");
    } else {
        navLinks.classList.add("d-none");
        burger.classList.remove("d-none");
    }
});

// Закриває бургер при кліку поза меню
document.addEventListener("click", (event) => {
    const header = document.querySelector("header");
    const isClickInside = header.contains(event.target);

    // Якщо клік поза хедером і меню відкрите
    if (
        !isClickInside &&
        window.innerWidth < 768 &&
        !navLinks.classList.contains("d-none")
    ) {
        navLinks.classList.add("d-none");
        burger.classList.remove("d-none");
        closeBtn.classList.add("d-none");
        rounded.classList.remove("rounded-pill");
        rounded.classList.add("rounded-5") ;
    }
});

// Закриває бургер при кліку на будь-яке посилання в меню
document.querySelectorAll("#nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        if (window.innerWidth < 768) {
            navLinks.classList.add("d-none");
            burger.classList.remove("d-none");
            closeBtn.classList.add("d-none");
            rounded.classList.remove("rounded-5");
            rounded.classList.add("rounded-pill");
        }
    });
});





// faq
// faq
// faq
// faq
// faq
// faq
// faq
// faq
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const currentItem = btn.closest('.faq-item');
      const isOpen = currentItem.classList.contains('active');
  
      // закриваємо ВСІ
      document.querySelectorAll('.faq-item.active').forEach(item => {
        item.classList.remove('active');
      });
  
      // якщо був закритий — відкриваємо
      if (!isOpen) {
        currentItem.classList.add('active');
      }
    });
  });
  













// рандомн 5 цифр для назви переказц у вікні оплата
// рандомн 5 цифр для назви переказц у вікні оплата
// рандомн 5 цифр для назви переказц у вікні оплата
// рандомн 5 цифр для назви переказц у вікні оплата
// рандомн 5 цифр для назви переказц у вікні оплата

  function generateRandomFiveDigits() {
    // Генеруємо число від 10000 до 99999
    return Math.floor(10000 + Math.random() * 90000);
  }

  // Вставляємо у HTML
  const numberDiv = document.getElementById('randomNumber');
  numberDiv.textContent = generateRandomFiveDigits();





//   scroll-top

//   scroll-top
//   scroll-top
//   scroll-top
//   scroll-top
//   scroll-top
//   scroll-top
//   scroll-top
//   scroll-top
//   scroll-top
//   scroll-top
//   scroll-top
//   scroll-top
//   scroll-top
//   scroll-top


const scrollTopBtn = document.querySelector('.scroll-top');

if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });

    scrollTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}














// карта продукту кожного
// карта продукту кожного
// карта продукту кожного
// карта продукту кожного
// карта продукту кожного
// карта продукту кожного
// карта продукту кожного
// карта продукту кожного
// карта продукту кожного

document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.getElementById("products_2");
    const loadMoreBtn = document.getElementById("loadMoreProjects");
    if (!productsContainer || !loadMoreBtn) return;

    let visibleCount = 8;
    let iso;
    let currentFilter = "*";
    const products = [
        {
            id: 1,
            name: "Star Wars",
            descripton: "Середній термін доставки та обробки 7 робочих днів ",
            type: "Donut Geschenkbox",

            img: "/img/merch/1a.webp",
            img2: "/img/merch/1b.webp",
            img3: "/img/merch/1c.webp",
            img4: "/img/merch/1d.webp",
            img5: "/img/merch/1e.webp",

            price: 45.75,
            original: 51.75,
            rating: 96,
            reviews: 235,
            link: "#exampleModal_1",
            filter: "2024",
            category: "Новинка",
    
    
        },
        {
            id: 2,
            name: "Racing",
            descripton: "Середній термін доставки та обробки 7 робочих днів ",
            type: "Donut Geschenkbox",

            img: "/img/merch/3a.webp",
            img2: "/img/merch/3b.webp",
            img3: "/img/merch/3c.webp",
            img4: "/img/merch/3d.webp",
            img5: "/img/merch/3e.webp",

            price: 45.75,
            original: 51.75,
            rating: 94,
            reviews: 185,
            link: "#exampleModal_2",
            filter: "2024",
            category: "Новинка",
    
    
        },
        {
            id: 3,
            name: "Minecraft",
            descripton: "Середній термін доставки та обробки 7 робочих днів ",
            type: "Donut Geschenkbox",

            img: "/img/merch/4a.webp",
            img2: "/img/merch/4b.webp",
            img3: "/img/merch/4c.webp",
            img4: "/img/merch/4d.webp",
            img5: "/img/merch/4e.webp",

            price: 45.75,
            original: 51.75,
            rating: 94,
            reviews: 153,
            link: "#exampleModal_3",
            filter: "2024",
            category: "Новинка",
    
    
        },
        {
            id: 4,
            name: "Fußball",
            descripton: "Середній термін доставки та обробки 7 робочих днів ",
            type: "Donut Geschenkbox",

            img: "/img/merch/8a.webp",
            img2: "/img/merch/8b.webp",
            img3: "/img/merch/8c.webp",
            img4: "/img/merch/8d.webp",
            img5: "/img/merch/8e.webp",

            price: 45.75,
            original: 51.75,
            rating: 94,
            reviews: 127,
            link: "#exampleModal_1",
            filter: "2024",
            category: "Новинка",
    
    
        },
        {
            id: 5,
            name: "Kinder Time",
            descripton: "Середній термін доставки та обробки 7 робочих днів ",
            type: "Mini-Donut Geschenkbox",

            img: "/img/merch/01a.webp",
            img2: "/img/merch/8b.webp",
            img3: "/img/merch/8c.webp",
            img4: "/img/merch/8d.webp",
            img5: "/img/merch/8e.webp",

            price: 49.75,
            original: 55.75,
            rating: 96,
            reviews: 235,
            link: "#exampleModal_1",
            filter: "2024",
            category: "Новинка",
    
    
        },
        {
            id: 6,
            name: "Filled with Love",
            descripton: "Середній термін доставки та обробки 7 робочих днів ",
            type: "Mini-Donut Geschenkbox",

            img: "/img/merch/03a.webp",
            img2: "/img/merch/8b.webp",
            img3: "/img/merch/8c.webp",
            img4: "/img/merch/8d.webp",
            img5: "/img/merch/8e.webp",

            price: 49.75,
            original: 55.75,
            rating: 94,
            reviews: 185,
            link: "#exampleModal_1",
            filter: "2024",
            category: "Новинка",
    
    
        },
    
        {
            id: 7,
            name: "Filled with Love",
            descripton: "Середній термін доставки та обробки 7 робочих днів ",
            type: "Mini-Donut Geschenkbox",

            img: "/img/merch/03a.webp",
            img2: "/img/merch/8b.webp",
            img3: "/img/merch/8c.webp",
            img4: "/img/merch/8d.webp",
            img5: "/img/merch/8e.webp",

            price: 49.75,
            original: 55.75,
            rating: 94,
            reviews: 185,
            link: "#exampleModal_1",
            filter: "2024",
            category: "Новинка",
    
    
        },
    
        {
            id: 8,
            name: "DT Classic",
            descripton: "Середній термін доставки та обробки 7 робочих днів ",
            type: "Mini-Donut Geschenkbox",

            img: "/img/merch/06a.webp",
            img2: "/img/merch/8b.webp",
            img3: "/img/merch/8c.webp",
            img4: "/img/merch/8d.webp",
            img5: "/img/merch/8e.webp",

            price: 49.75,
            original: 55.75,
            rating: 92,
            reviews: 125,
            link: "#exampleModal_1",
            filter: "2024",
            category: "Новинка",
    
    
        },
    
        {
            id: 9,
            name: "DT Classic",
            descripton: "Середній термін доставки та обробки 7 робочих днів ",
            type: "Mini-Donut Geschenkbox",

            img: "/img/merch/06a.webp",
            img2: "/img/merch/8b.webp",
            img3: "/img/merch/8c.webp",
            img4: "/img/merch/8d.webp",
            img5: "/img/merch/8e.webp",
            
            price: 49.75,
            original: 55.75,
            rating: 92,
            reviews: 125,
            link: "#exampleModal_1",
            filter: "2024",
            category: "Передзамовлення",
    
    
        },    ];

    function createCard(product) {
        const card = document.createElement("div");
        card.className = `m-0 p-2 col-10 col-sm-6 col-md-6 col-lg-4 col-xl-3 text-center portfolio-item filter-${product.filter}`;
        card.innerHTML = `
            <a href="${product.link}" class="p-2 m-0 rounded-5 text-center"
               style="background:transparent; box-shadow: 0 15px 30px rgba(0,0,0,0.1); color:var(--bs-primary); bordeґr:3px solid var(--bs-primary);">
                <div class="icon-cir1cle p-2 mb-3 rounded-4 col-auto overflow-hidden">
                    <img class="my_img_card m-0 p-0 w-100 rounded-4" src="${product.img}">
                    <span class="project-category m-2 small fw-normal ${product.category === "Новинка" ? "bg-primary" : "bg-secondary"}">
                        ${product.category}
                    </span>
                </div>
                <h6 class="fw-bold m-0 pb-2">${product.name}</h6>
                <p class="m-0 small text-secondary pb-2">${product.descripton}</p>
                <div style="color: var(--bs-primary);" class="m-0 p-0 px-4 col-12 text-center fw-bold rounded-4 pb-1">
                    <span class="fs-4 text-white">₴</span>
                    <span class="fs-5 text-white">${product.price}</span>
                    <span class="small fw-bold ps-1 text-secondary fst-italic"> (в наявності)</span>
                </div>
                <a href="${product.link}" class="my_button d-inline-block fs-6">Купити</a>
            </a>
        `;

        // ====== При кліку на продукт відкриваємо card.html з даними ======
        const linkButton = card.querySelector("a");
        linkButton.addEventListener("click", function(e) {
            e.preventDefault();
            const query = new URLSearchParams({
                id: product.id,
                name: product.name,
                price: product.price,

                image: product.img,
                image2: product.img2,
                image3: product.img3,
                image4: product.img4,
                image5: product.img5,

                description: product.descripton
            }).toString();
            window.location.href = `merch-card.html?${query}`;
        });

        return card;
    }

    function updateLoadMoreButton() {
        const filteredProducts = products.filter(
            (p) => currentFilter === "*" || `.filter-${p.filter}` === currentFilter
        );
        loadMoreBtn.style.display =
            filteredProducts.length > visibleCount && filteredProducts.length > 8
                ? "inline-block"
                : "none";
    }

    function initIsotope() {
        imagesLoaded(productsContainer, function () {
            iso = new Isotope(productsContainer, {
                itemSelector: ".portfolio-item",
                layoutMode: "masonry",
                transitionDuration: "0.0s",
            });

            const filters = document.querySelectorAll(".portfolio-filters li");
            filters.forEach((filter) => {
                filter.addEventListener("click", function () {
                    filters.forEach((f) => f.classList.remove("filter-active"));
                    this.classList.add("filter-active");

                    currentFilter = this.getAttribute("data-filter");
                    visibleCount = 8;

                    const allItems = productsContainer.querySelectorAll(".portfolio-item");
                    allItems.forEach((item) => item.remove());

                    const filteredProducts = products.filter(
                        (p) => currentFilter === "*" || `.filter-${p.filter}` === currentFilter
                    );
                    filteredProducts.slice(0, visibleCount).forEach((p) =>
                        productsContainer.appendChild(createCard(p))
                    );

                    iso.reloadItems();
                    iso.arrange({ filter: currentFilter });
                    updateLoadMoreButton();
                });
            });

            updateLoadMoreButton();
        });
    }

    function renderInitial() {
        products.slice(0, visibleCount).forEach((p) =>
            productsContainer.appendChild(createCard(p))
        );
        initIsotope();
    }

    function loadMore() {
        const filteredProducts = products.filter(
            (p) => currentFilter === "*" || `.filter-${p.filter}` === currentFilter
        );
        const nextVisible = visibleCount + 4;
        const newCards = [];
        for (let i = visibleCount; i < nextVisible && i < filteredProducts.length; i++) {
            const card = createCard(filteredProducts[i]);
            productsContainer.appendChild(card);
            newCards.push(card);
        }
        visibleCount = Math.min(nextVisible, filteredProducts.length);

        if (iso) {
            iso.appended(newCards);
            iso.layout();
        }

        updateLoadMoreButton();
    }

    loadMoreBtn.addEventListener("click", loadMore);
    renderInitial();
});












