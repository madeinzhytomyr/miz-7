
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG
// карта RICHTUNG

document.addEventListener("DOMContentLoaded", function () {
    const services = [
        {
            title: "Підтримка Армії",
            icon: "bi bi-shield-check",
            description:
                "Допомагаємо ЗСУ та захисникам: збори, амуніція, технічна підтримка та волонтерські ініціативи.",
            link: "#support"
        },
        {
            title: "Інфраструктура Міста",
            icon: "bi bi-building",
            description:
                "Працюємо над оновленням та покращенням міського простору, роблячи Житомир зручним і сучасним.",
            link: "#support"
        },
        {
            title: "Підтримка Малого Бізнесу",
            icon: "bi bi-shop-window",
            description:
                "Допомагаємо місцевим підприємцям та стартапам розвиватися і зміцнювати економіку Житомира.",
            link: "#support"
        },
        {
            title: "Промоція Житомира",
            icon: "bi bi-megaphone",
            description:
                "Працюємо над тим, щоб місто звучало в Україні та світі: туризм, брендінг, культурні події.",
            link: "#support"
        },
        {
            title: "Волонтерство",
            icon: "bi bi-heart",
            description:
                "Єднаємо людей навколо добрих справ: допомога місту, людям, проєкти взаємопідтримки.",
            link: "#support"
        },
        {
            title: "Співпраця та Партнерства",
            icon: "bi bi-globe",
            description:
                "Розвиваємо місцеву та міжнародну взаємодію, створюючи нові можливості для міста.",
            link: "#support"
        }
    ];

    const container = document.getElementById("servicesContainer");

    if (!container) {
        console.error("❌ Контейнер #servicesContainer не знайдено!");
        return;
    }

    function createServiceItem(item, i) {
        const div = document.createElement("div");
        div.className = "col-lg-3 col-md-6 col-xxl-4 px-4";
        div.setAttribute("data-aos", "zoom-in");
        div.setAttribute("data-aos-delay", 100 + i * 100);

        div.innerHTML = `
            <div class="service-item row align-items-center">
                <div class="col-auto px-0">
                    <div class="icon-wrapper px-0">
                        <i class="${item.icon}"></i>
                    </div>
                </div>

                <div class="ps-4 col text-start pe-0">
                    <h4>${item.title}</h4>
                    <a style="font-size: 12px;" href="${item.link}" class="read-more pb-3">
                        <span>Підтримати</span>
                        <i class="bi bi-arrow-right"></i>
                    </a>
                </div>

                <p class="mb-0 text-start px-0">${item.description}</p>
            </div>
        `;

        return div;
    }

    // 🔹 Рендер
    services.forEach((item, i) => {
        container.appendChild(createServiceItem(item, i));
    });
});



// карта proect
// карта proect
// карта proect
// карта proect
// карта proect
// карта proect
// карта proect
// карта proect
// карта proect
// карта proect
// карта proect
// карта proect
// карта proect
// карта proect
// карта proect
// карта proect
// карта proect
// карта proect
// карта proect
// карта proect
// карта proect
// карта proect
document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.getElementById("products_2");
    const loadMoreBtn = document.getElementById("loadMoreProjects");
    if (!productsContainer || !loadMoreBtn) return;

    let visibleCount = 3;
    let iso;
    let currentFilter = "*";
    const products = [
        {
            name: "Розвиваюче заннятя для дошкільнят",
            img: "/img/projects/project_3.1.jpg",
            category: "Завершено",
            tags: ["Житомир", "Україна"],
            date: "18 жовтня 2025",
            linkDetails: "/projects/project_3.html",
            filter: "2025",
        },
        {
            name: "Майстер-клас з танців для дівчат",
            img: "/img/projects/project_2.1.jpg",
            category: "Завершено",
            tags: ["Житомир", "Україна"],
            date: "20 вересня 2025",
            linkDetails: "/projects/project_2.html",
            filter: "2025",
        },
        {
            name: "Майстер-клас з малювання для діток",
            img: "/img/projects/project_1.1.jpg",
            category: "Завершено",
            tags: ["Житомир", "Україна"],
            date: "30 серпня 2025",
            linkDetails: "/projects/project_1.html",
            filter: "2025",
        },
    ];

    function createCard(product) {
        const card = document.createElement("div");
        card.className = `col-lg-4 col-md-6 portfolio-item isotope-item filter-${product.filter}`;
        card.innerHTML = `
            <div class="portfolio-card">
                <div class="portfolio-image-container ">
                    <img src="${product.img}" alt="${
            product.name
        }" class="img-fluid" loading="lazy">
                    <div class="portfolio-overlay">
                        <div class="portfolio-info">

                            <span class="project-category ${
                                product.category === "Завершено"
                                    ? "bg-primary"
                                    : product.category === "Актуально"
                                    ? "bg-danger"
                                    : ""
                            }">
                                ${product.category}
                            </span>


                            <h4 class="mt-4" style="text-shadow: 2px 2px 5px black">${
                                product.name
                            }</h4>
                        </div>
                        <div class="portfolio-actions ">
                            <a href="${
                                product.linkDetails
                            }" class="portfolio-details bg-primary text-white fw-bold rounded-3" ><i class="bi bi-arrow-right
                            "></i></a>
                        </div>
                    </div>
                </div>
                <div class="portfolio-meta">
                    <div class="project-tags">${product.tags
                        .map((t) => `<span class="tag">${t}</span>`)
                        .join("")}</div>
                    <div class="project-year">${product.date}</div>
                </div>
            </div>
        `;
        return card;
    }

    function updateLoadMoreButton() {
        const filteredProducts = products.filter(
            (p) =>
                currentFilter === "*" || `.filter-${p.filter}` === currentFilter
        );
        loadMoreBtn.style.display =
            filteredProducts.length > visibleCount &&
            filteredProducts.length > 3
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
                    visibleCount = 3;

                    // --- Очищаємо контейнер ---
                    const allItems =
                        productsContainer.querySelectorAll(".portfolio-item");
                    allItems.forEach((item) => item.remove());

                    // --- Додаємо перші 3 елементи фільтру ---
                    const filteredProducts = products.filter(
                        (p) =>
                            currentFilter === "*" ||
                            `.filter-${p.filter}` === currentFilter
                    );
                    const initialProducts = filteredProducts.slice(
                        0,
                        visibleCount
                    );
                    initialProducts.forEach((p) =>
                        productsContainer.appendChild(createCard(p))
                    );

                    // --- Оновлюємо Isotope ---
                    iso.reloadItems();
                    iso.arrange({ filter: currentFilter });

                    updateLoadMoreButton();
                });
            });

            updateLoadMoreButton();
        });
    }

    function renderInitial() {
        const initialProducts = products.slice(0, visibleCount);
        initialProducts.forEach((p) =>
            productsContainer.appendChild(createCard(p))
        );
        visibleCount = initialProducts.length;
        initIsotope();
    }

    function loadMore() {
        const filteredProducts = products.filter(
            (p) =>
                currentFilter === "*" || `.filter-${p.filter}` === currentFilter
        );
        const nextVisible = visibleCount + 3;
        const newCards = [];
        for (
            let i = visibleCount;
            i < nextVisible && i < filteredProducts.length;
            i++
        ) {
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





// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
document.addEventListener("DOMContentLoaded", function () {
    const products = [
        {
            name: "Андріан Іванюк",
            img: "/img/team/andrian_ivaniuk.jpg",
            position: "Ідейний рушій",
            social: [],
        },
        {
            name: "Роман Пушкар",
            img: "/img/team/roman_pushkar.jpg",
            position: "Організатор подій",
            social: [],
        },
        {
            name: "Ілона Бондар",
            img: "/img/team/ilona_bondar.jpg",
            position: "Голос спільноти",
            social: [],
        },
        {
            name: "Богдан Коваленко",
            img: "/img/team/bogdan_kovalenko.jpg",
            position: "Архітектор",
            social: [],
        },
        {
            name: "Анастасія Дяченко",
            img: "/img/team/anastasia_diachenko.jpg",
            position: "Кураторка",
            social: [],
        },
        {
            name: "Діана Романюк",
            img: "/img/team/diana_romaniuk.jpg",
            position: "Мисливиця за новими форматами",
            social: [],
        },
        {
            name: "Назар Поліщук",
            img: "/img/team/nazar_polishchuk.jpg",
            position: "Деталі міста",
            social: [],
        },
        {
            name: "Ілля Шевчук",
            img: "/img/team/illa_shewchuk.jpg",
            position: "Інженер змін",
            social: [],
        },
        {
            name: "Вікторія Петренко",
            img: "/img/team/viktoria_petrenko.jpg",
            position: "Координаторка гармонії",
            social: [],
        },
        {
            name: "Євген Ткаченко",
            img: "/img/team/evgen_tkachenko.jpg",
            position: "Технічний маг",
            social: [],
        },
        {
            name: "Софія Савчук",
            img: "/img/team/sofia_savchuk.jpg",
            position: "Хранителька балансу",
            social: [],
        },

        // {
        //     name: "Роман Пушкар",
        //     img: "/img/team/roman_pushkar.jpg",
        //     position: "Організатор подій, які об’єднують людей",
        //     social: [
        //         { icon: "bi bi-instagram", link: "https://www.instagram.com/pushkar_roma/" },
        //         { icon: "bi bi-youtube", link: "https://www.youtube.com/" },
        //         { icon: "bi bi-tiktok", link: "https://www.tiktok.com/" }
        //     ],
        // },
    ];

    const container = document.getElementById("products_1");
    let currentIndex = 0;

    function createCard(product) {
        const card = document.createElement("div");
        card.className =
            "team-card col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3 team-member0";

        card.innerHTML = `
            <div class="team-member card bg-dark border-0 shadow-sm rounded-4 p-3">
                <div class="member-img rounded-3 overflow-hidden mb-2 mx-auto">
                    <img src="${product.img}" class="img-fluid rounded-3 img_team" alt="${product.name}">
                </div>
                <div class="member-info text-center mt-2">
                    <h6 class="fw-semibold text-white mb-1">${product.name}</h6>
                    <span class="small text-secondary d-block">${product.position}</span>
                </div>
            </div>
        `;
        return card;
    }

    // Рендеримо всі картки одразу
    products.forEach((p) => container.appendChild(createCard(p)));

    function perView() {
        const w = window.innerWidth;
        if (w < 576) return 1;
        if (w < 992) return 2;
        if (w < 1400) return 3;
        return 4;
    }

    function updateSlider() {
        const visible = perView();
        const cardWidth = container.children[0].offsetWidth + 16; // картка + gap
        container.style.transform = `translateX(${
            -currentIndex * cardWidth
        }px)`;
    }

    document.getElementById("nextCard").addEventListener("click", () => {
        const visible = perView();
        currentIndex = Math.min(currentIndex + 1, products.length - visible);
        updateSlider();
    });

    document.getElementById("prevCard").addEventListener("click", () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateSlider();
    });

    window.addEventListener("resize", updateSlider);

    updateSlider();
});





// карта zbiorka
// карта zbiorka
// карта zbiorka
// карта zbiorka
// карта zbiorka
// карта zbiorka
// карта zbiorka
// карта zbiorka
// карта zbiorka
// карта zbiorka
// карта zbiorka
// карта zbiorka
// карта zbiorka
// карта zbiorka
// карта zbiorka
// карта zbiorka
// карта zbiorka
// карта zbiorka
// карта zbiorka

document.addEventListener("DOMContentLoaded", function () {
    const products = [

        {
            name: "Підтримка Армії",
            img: "https://golos.te.ua/wp-content/uploads/2024/09/ernopil-pidtrymka-zahysnyky-vijna-vijskovi.jpg",
            description:
                "Кошти спрямовуються на спорядження, екіпіровку та необхідні речі для військових.",
            goal: "100.000",
            category: "Актуально",
            link: "/zbory/zbir_1.html",
        },
    ];

    const productsContainer = document.getElementById("products_100");
    const loadMoreBtn = document.getElementById("loadMoreBtn");

    if (!productsContainer || !loadMoreBtn) {
        console.error("❌ Не знайдено контейнер або кнопку!");
        return;
    }

    let visibleCount = 3; // скільки показуємо спочатку

    function createCard(product, i) {
        const card = document.createElement("div");
        card.className = "py-2 col-12 col-md-6 col-lg-6 col-xxl-4 mb-auto";
        card.setAttribute("data-aos", "zoom-in");
        card.setAttribute("data-aos-delay", 200 + i * 100);

        card.innerHTML = `
            <div class="fundraiser-card neo-card h-100 shadow-lg">
    
                <!-- Image Block -->
                <div class="fundraiser-img position-relative">
                    <img src="${product.img}" alt="${product.name}">
    
                    <!-- Category Circle -->
                    <span class="project-category bg-primary ">
                        ${product.category}
                    </span>
    
            
                </div>
    
                <!-- Content -->
                <div class="fundraiser-content">
                    <h5 class="fundraiser-title fw-semibold mt-2">
                        ${product.name}
                    </h5>
    
                    <p class="fundraiser-desc text-secondary mb-4 small">
                        ${product.description}
                    </p>



    
                    <!-- Buttons -->
                    <div class="fundraiser-actions d-flex justify-content-between">

                        <!-- Goal Block -->
                        <div class="goal-badge d-inline-flex align-items-center justify-content-center col me-0 rounded-end-0">

                        <span class="m-0 p-0 pe-2 fw-bold fs-4 ps-2">${product.goal}</span>
                            <span class="m-0 p-0 pe-2 fw-normal"> грн</span>

                        </div>

                        <a href="${product.link}" class="btn btn-outline-light btn-custom  d-flex align-items-center justify-content-center col ms-0 rounded-start-0 border-secondary">
                            Дізнатись більше
                        </a>
    
                      
                    </div>
                </div>
            </div>
        `;

        return card;
    }

    // 🔹 Початкове відображення
    function renderInitial() {
        for (let i = 0; i < visibleCount && i < products.length; i++) {
            productsContainer.appendChild(createCard(products[i], i));
        }

        loadMoreBtn.style.display =
            products.length > visibleCount ? "inline-block" : "none";
    }

    // 🔹 Завантажити ще
    function loadMore() {
        const nextVisible = visibleCount + 4;
        for (
            let i = visibleCount;
            i < nextVisible && i < products.length;
            i++
        ) {
            productsContainer.appendChild(createCard(products[i], i));
        }
        visibleCount = Math.min(nextVisible, products.length);

        if (visibleCount >= products.length) loadMoreBtn.style.display = "none";

        if (typeof AOS !== "undefined") AOS.refresh();
    }

    loadMoreBtn.addEventListener("click", loadMore);
    renderInitial();
});

// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО

// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО

document.addEventListener("DOMContentLoaded", function () {
    const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
    const header = document.querySelector("#header");
    const body = document.querySelector("body");
    const navMenu = document.querySelector("#navmenu ul");

    if (mobileNavToggle) {
        mobileNavToggle.addEventListener("click", function (e) {
            e.preventDefault();
            body.classList.toggle("mobile-nav-active");

            // Змінюємо іконку (бургер <-> хрестик)
            this.classList.toggle("bi-list");
            this.classList.toggle("bi-x");
        });
    }

    // Закривання меню після кліку по пункту
    document.querySelectorAll("#navmenu a").forEach((link) => {
        link.addEventListener("click", function () {
            if (body.classList.contains("mobile-nav-active")) {
                body.classList.remove("mobile-nav-active");
                mobileNavToggle.classList.add("bi-list");
                mobileNavToggle.classList.remove("bi-x");
            }
        });
    });
});

// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення

document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
        event.preventDefault(); // зупиняємо стандартну відправку (щоб не було переходу)

        const form = event.target;
        const status = document.getElementById("form-status");
        const data = new FormData(form);

        // Показуємо індикатор завантаження
        status.style.display = "block";
        status.style.color = "#00ccff";
        status.textContent = "⏳ Відправляється...";

        fetch(form.action, {
            method: form.method,
            body: data,
            headers: { Accept: "application/json" },
        })
            .then((response) => {
                if (response.ok) {
                    form.reset();
                    status.style.display = "block";
                    status.style.color = "#00ff99";
                    status.textContent = "✅ Повідомлення надіслано!";
                } else {
                    status.style.display = "block";
                    status.style.color = "red";
                    status.textContent =
                        "❌ Помилка при надсиланні. Спробуйте ще раз.";
                }
            })
            .catch(() => {
                status.style.display = "block";
                status.style.color = "red";
                status.textContent = "❌ Виникла помилка при відправленні.";
            });
    });

//   <!-- Small JS: copy account number and toast -->
/* підтримати секція */ //   <!-- Small JS: copy account number and toast -->
/* підтримати секція */ //   <!-- Small JS: copy account number and toast -->
/* підтримати секція */ //   <!-- Small JS: copy account number and toast -->
/* підтримати секція */ //   <!-- Small JS: copy account number and toast -->
/* підтримати секція */ //   <!-- Small JS: copy account number and toast -->
/* підтримати секція */ //   <!-- Small JS: copy account number and toast -->
/* підтримати секція */ //   <!-- Small JS: copy account number and toast -->
/* підтримати секція */ //   <!-- Small JS: copy account number and toast -->
/* підтримати секція */ //   <!-- Small JS: copy account number and toast -->
/* підтримати секція */ //   <!-- Small JS: copy account number and toast -->
/* підтримати секція */

(function () {
    const copyBtn = document.getElementById("copyAccountBtn");
    const accNumEl = document.getElementById("accountNumber");
    const monobankLink = document.getElementById("monobankLink");

    copyBtn &&
        copyBtn.addEventListener("click", function () {
            const text = accNumEl.textContent.trim();
            navigator.clipboard
                ?.writeText(text)
                .then(() => {
                    copyBtn.textContent = "Скопійовано ✅";
                    setTimeout(
                        () =>
                            (copyBtn.innerHTML =
                                '<i class="bi bi-clipboard"></i> Скопіювати'),
                        1800
                    );
                })
                .catch(() => {
                    alert("Не вдалось скопіювати. Скопіюйте вручну.");
                });
        });

    // Example monobank deeplink (replace with real one if available)
    if (monobankLink) {
        monobankLink.href = "#"; // <-- замініть на ваш monobank deeplink або на link для платежу
    }
})();

// ====== СЛАЙДЕР КАРТОК ======
let currentIndex = 0;

// показуємо 1 картку
function renderSingleCard(index) {
    productsContainer.innerHTML = "";
    productsContainer.appendChild(createCard(products[index], index));

    if (typeof AOS !== "undefined") AOS.refresh();
}

// кнопка вправо
document.getElementById("nextCard").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % products.length;
    renderSingleCard(currentIndex);
});

// кнопка вліво
document.getElementById("prevCard").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + products.length) % products.length;
    renderSingleCard(currentIndex);
});

// показати першу картку
renderSingleCard(currentIndex);






























