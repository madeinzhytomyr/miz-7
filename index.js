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
            link: "#support",
        },
        {
            title: "Покращення Міста",
            icon: "bi bi-building",
            description:
                "Працюємо над оновленням та покращенням міського простору, роблячи Житомир зручним і сучасним.",
            link: "#support",
        },
        {
            title: "Підтримка Малого Бізнесу",
            icon: "bi bi-shop-window",
            description:
                "Допомагаємо місцевим підприємцям та стартапам розвиватися і зміцнювати економіку Житомира.",
            link: "#support",
        },
        {
            title: "Промоція Житомира",
            icon: "bi bi-megaphone",
            description:
                "Працюємо над тим, щоб місто звучало в Україні та світі: туризм, брендінг, культурні події.",
            link: "#support",
        },
        {
            title: "Волонтерство",
            icon: "bi bi-heart",
            description:
                "Єднаємо людей навколо добрих справ: допомога місту, людям, проєкти взаємопідтримки.",
            link: "#support",
        },
        {
            title: "Співпраця та Партнерства",
            icon: "bi bi-globe",
            description:
                "Розвиваємо місцеву та міжнародну взаємодію, створюючи нові можливості для міста.",
            link: "#support",
        },
    ];

    const container = document.getElementById("servicesContainer");

    if (!container) {
        console.error("❌ Контейнер #servicesContainer не знайдено!");
        return;
    }

    function createServiceItem(item, i) {
        const div = document.createElement("div");
        div.className = "col-lg-3 col-md-6 col-lg-4 px-4";
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
            tags: ["Житомир", "Україна"],
            date: "18 жовтня 2025",
            category: "Завершено",
            filter: "2025",

            description:
                " Це тепле та пізнавальне заняття було успішно реалізоване командою MADE in Житомир. Ми організували розвиваючий захід для малюків дошкільного віку, де діти змогли потренувати увагу, пам’ять, моторику та комунікацію в ігровій і дружній атмосфері.",

            img2: "/img/projects/project_3.2.jpg",
            img3: "/img/projects/project_3.3.jpg",
            img4: "/img/projects/project_3.4.jpg",
            img5: "/img/projects/project_3.5.jpg",
            img6: "/img/projects/project_3.6.jpg",
            img7: "/img/projects/project_3.7.jpg",
            img8: "/img/projects/project_3.8.jpg",
            img9: "/img/projects/project_3.9.jpg",
            img10: "/img/projects/project_3.10.jpg",
            img11: "/img/projects/project_3.11.jpg",
            img12: "/img/projects/project_3.12.jpg",

            text01: "Ми прагнемо створювати умови, де діти можуть навчатися, розвивати свої навички та отримувати важливий досвід через гру й взаємодію. Наше заняття стало чудовою можливістю для малюків розширити кругозір у комфортному середовищі.",
            title1: "Як пройшло заняття",
            text1: "Малюки виконували пізнавальні вправи, брали участь у командних іграх, тренували моторику,логіку та уяву. Інтерактивна форма зробила навчання цікавим та захоплюючим.",
            moment_title: "Основні Моменти",
            moment_1: "Ігрові розвиваючі активності",
            moment_2: "Робота в групах та командні вправи",
            moment_3: "Тренування уваги, логіки та моторики",
            moment_4: "Дружня атмосфера та підтримка наставників",
            title2: "Чому Це Важливо?",
            text2: "Розвиваючі заняття допомагають дітям формувати ключові навички, необхідні для подальшого навчання. Такі заходи сприяють впевненості, творчому мисленню та соціалізації.",

            coordinator_desc:
                "“Найкраще навчання — це навчання через гру. Ми щасливі бачити, як діти відкривають нове та проявляють свої здібності.”",
            coordinator_img: "/img/team/anastasia_diachenko.jpg",
            coordinator_name: "Анастасія Дяченко",
            coordinator_position: "Координаторка проєкту",
            text02: "Проєкт став ще одним кроком до створення корисних, змістовних і теплих подій для дітей нашої громади.",

            location: "Житомир • Україна",
            categoryy: "Майстер-клас",
            members: "Дошкільнята • Батьки • Волонтери",

            num1: "5+ Учасників",
            num2: "2 Години Активностей",
            num3: "4 Навичк",
            num4: "Командна Робота",
            num5: "Інтерактив",
            num6: "Ігрове Навчання",
            num7: "Тепла Атмосфера",
            num8: "Творчість",
            num9: "Спільність",
            num10: "Розвиток",
        },
        {
            name: "Майстер-клас з танців для дівчат",
            img: "/img/projects/project_2.1.jpg",
            tags: ["Житомир", "Україна"],
            date: "20 вересня 2025",
            category: "Завершено",
            filter: "2025",

            description:
                "   Цей проєкт став яскравою подією для дівчат Житомира.  Ми організували танцювальний майстер-клас, де кожна учасниця змогла спробувати себе у хореографії, відчути свободу руху та зарядитися позитивними емоціями. Захід успішно реалізовано та подарував дівчатам мотивацію, енергію й нові враження.",

            img2: "/img/projects/project_2.2.jpg",
            img3: "/img/projects/project_2.3.jpg",
            img4: "/img/projects/project_2.4.jpg",
            img5: "/img/projects/project_2.5.jpg",
            img6: "/img/projects/project_2.6.jpg",
            img7: "/img/projects/project_2.7.jpg",
            img8: "/img/projects/project_2.8.jpg",
            img9: "/img/projects/project_2.9.jpg",
            img10: "/img/projects/project_2.10.jpg",
            img11: "/img/projects/project_2.11.jpg",
            img12: "/img/projects/project_2.12.jpg",

            text01: "Ми віримо, що танці — це спосіб самовираження, впевненості та внутрішньої гармонії. Наш майстер-клас дав можливість дівчатам відчути себе вільно, красиво та натхненно. Проєкт продемонстрував, наскільки важливими є подібні заходи для розвитку молоді та створення підтримуючого середовища.",
            title1: "Як пройшов майстер-клас",
            text1: " Професійні хореографи допомагали учасницям освоїти базові та сучасні танцювальні рухи. Дівчата працювали в команді, вчилися ритму, пластичності та взаємодії. Майстер-клас проходив у теплій атмосфері, де кожна могла відчути себе частиною творчої спільноти.",
            moment_title: "Основні Моменти",
            moment_1: "Проведено танцювальний майстер-клас",
            moment_2: "Професійні наставники та підтримка",
            moment_3: "Атмосфера мотивації та драйву",
            moment_4: "Нові навички та впевненість у собі",
            title2: "Чому це було важливо?",
            text2: "Танці допомагають розвивати не лише фізичну форму, а й емоційний стан. Для багатьох дівчат цей майстер-клас став можливістю розкритися, побороти сором’язливість, знайти нових друзів і відкрити нову сторону себе.",

            coordinator_desc:
                " “Цей майстер-клас дав дівчатам можливість відчути свою силу, красу та індивідуальність. Танці — це про свободу руху, енергію та емоції. Ми щасливі, що змогли створити таку атмосферу.”",
            coordinator_img: "/img/team/anastasia_diachenko.jpg",
            coordinator_name: "Анастасія Дяченко",
            coordinator_position: "Координаторка проєкту",
            text02: " Реалізований майстер-клас з танців — це важливий внесок у розвиток жіночої молоді, підтримку їхнього самовираження та формування здорової, впевненої спільноти.",

            location: "Житомир • Україна",
            categoryy: "Майстер-клас",
            members: "Дівчата • Молодь • Волонтери",

            num1: "7+ Учасників",
            num2: "2 Години Танців",
            num3: "4 Танцювальні Активності",
            num4: "Розминка та Ритміка",
            num5: "Сценічні Рухи",
            num6: "Командна Хореографія",
            num7: "Енергійна Атмосфера",
            num8: "Музичність",
            num9: "Спільність",
            num10: "Рух І Творчість",
        },
        {
            name: "Майстер-клас з малювання для діток",
            img: "/img/projects/project_1.1.jpg",
            tags: ["Житомир", "Україна"],
            date: "30 серпня 2025",
            category: "Завершено",
            filter: "2025",

            description:
                "  Цей творчий проєкт успішно реалізовано командою MADE in Житомир. Ми організували майстер-клас з малювання для діток, де кожен маленький учасник зміг проявити свою творчість, навчитися новим технікам та відчути справжню атмосферу мистецтва. Захід подарував дітям море емоцій, посмішок і натхнення.",

            img2: "/img/projects/project_1.2.jpg",
            img3: "/img/projects/project_1.3.jpg",
            img4: "/img/projects/project_1.4.jpg",
            img5: "/img/projects/project_1.5.jpg",
            img6: "/img/projects/project_1.6.jpg",
            img7: "/img/projects/project_1.7.jpg",
            img8: "/img/projects/project_1.8.jpg",
            img9: "/img/projects/project_1.9.jpg",
            img10: "/img/projects/project_1.10.jpg",
            img11: "/img/projects/project_1.11.jpg",
            img12: "/img/projects/project_1.12.jpg",

            text01: "  Наша мета — створювати простір, де діти можуть розкривати свої таланти та отримувати щирі емоції. Реалізований майстер-клас став важливою подією, яка показала, наскільки дітям потрібні творчі зустрічі та підтримка їхнього розвитку.",
            title1: "Як пройшов майстер-клас",
            text1: " Дітки працювали з різними художніми матеріалами, вчилися новим технікам та створювали власні картини під керівництвом наставників. Кожен учасник отримав персональну увагу, підтримку та можливість висловити себе через мистецтво.",
            moment_title: "Основні Моменти",
            moment_1: "Проведено творчий майстер-клас для діте",
            moment_2: "Забезпечено всі художні матеріали",
            moment_3: "Дружня та підтримуюча атмосфера",
            moment_4: "Позитивні емоції та нові навички",
            title2: "Чому Це Важливо?",
            text2: " Подібні заходи допомагають дітям розвиватися емоційно та творчо. Наш майстер-клас став майданчиком для натхнення, спілкування та відчуття підтримки. Ми переконані, що мистецтво може дарувати тепло та впевненість дітям навіть у непростий час.",

            coordinator_desc:
                "““Для нас важливо дарувати дітям моменти радості. Кожна картина — це маленька історія, яку дитина створила сама. Ми вдячні всім, хто був з нами та підтримав цей задум.”",
            coordinator_img: "/img/team/anastasia_diachenko.jpg",
            coordinator_name: "Анастасія Дяченко",
            coordinator_position: "Координаторка проєкту",
            text02: "Реалізований проєкт — ще один крок у розвитку дитячої творчості та зміцненні нашої спільноти.",

            location: "Житомир • Україна",
            categoryy: "Майстер-клас",
            members: "Діти • Родини • Волонтери",

            num1: "5+ Учасників",
            num2: "2 Години Творчості",
            num3: "10+ Готових Робіт",
            num4: "Основи Композиції",
            num5: "Фарбові Техніки",
            num6: "Розвиток Уяви",
            num7: "Тепла Атмосфера",
            num8: "Індивідуальний Підхід",
            num9: "Групова Творчість",
            num10: "Мистецтво Для Дітей",
        },
    ];

    function createCard(product) {
        const card = document.createElement("div");
        card.className = `col-lg-4 col-md-6 portfolio-item isotope-item filter-${product.filter}`;
        card.innerHTML = `
            <a class="portfolio-card " style="cursor: pointer;" >
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

                         <button type="button" class="btn btn-primary portfolio-details bg-primary text-white fw-bold rounded-3" data-bs-toggle="modal" 
                         data-bs-target="${
                             product.linkDetails
                         }"> <i class="bi bi-arrow-right "></i>   </button>

                        </div>
                    </div>

                    
                </div>
                <div class="portfolio-meta">
                    <div class="project-tags">${product.tags
                        .map((t) => `<span class="tag">${t}</span>`)
                        .join("")}</div>
                    <div class="project-year">${product.date}</div>
                </div>
            </a>
        `;

        // ====== При кліку на продукт відкриваємо card.html з даними ======
        const linkButton = card.querySelector("a");
        linkButton.addEventListener("click", function (e) {
            e.preventDefault();
            const query = new URLSearchParams({
                name: product.name,
                img: product.img,
                tags: product.tags,
                date: product.date,
                category: product.category,
                filter: product.filter,

                description: product.description,

                img2: product.img2,
                img3: product.img3,
                img4: product.img4,
                img5: product.img5,
                img6: product.img6,
                img7: product.img7,
                img8: product.img8,
                img9: product.img9,
                img10: product.img10,
                img11: product.img11,
                img12: product.img12,

                text01: product.text01,
                title1: product.title1,
                text1: product.text1,
                moment_title: product.moment_title,
                moment_1: product.moment_1,
                moment_2: product.moment_2,
                moment_3: product.moment_3,
                moment_4: product.moment_4,
                title2: product.title2,
                text2: product.text2,

                coordinator_desc: product.coordinator_desc,
                coordinator_img: product.coordinator_img,
                coordinator_name: product.coordinator_name,
                coordinator_position: product.coordinator_position,
                text02: product.text02,

                location: product.location,
                categoryy: product.categoryy,
                members: product.members,

                num1: product.num1,
                num2: product.num2,
                num3: product.num3,
                num4: product.num4,
                num5: product.num5,
                num6: product.num6,
                num7: product.num7,
                num8: product.num8,
                num9: product.num9,
                num10: product.num10,
            }).toString();
            console.log("Redirect URL:", `index_project.html?${query}`);
            window.location.href = `index-project.html?${query}`;
        });

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

    const container = document.getElementById("products_199");
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

    document.getElementById("nextCard99").addEventListener("click", () => {
        const visible = perView();
        currentIndex = Math.min(currentIndex + 1, products.length - visible);
        updateSlider();
    });

    document.getElementById("prevCard99").addEventListener("click", () => {
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
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    if (!form || !status) return; // якщо форми або статусу немає — вихід

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // зупиняємо стандартну відправку

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
                    status.style.color = "#00ff99";
                    status.textContent = "✅ Повідомлення надіслано!";
                } else {
                    status.style.color = "red";
                    status.textContent =
                        "❌ Помилка при надсиланні. Спробуйте ще раз.";
                }
            })
            .catch(() => {
                status.style.color = "red";
                status.textContent = "❌ Виникла помилка при відправленні.";
            });
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

const nextBtn = document.getElementById("nextCard");
const prevBtn = document.getElementById("prevCard");

if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % products.length;
        renderSingleCard(currentIndex);
    });
}

if (prevBtn) {
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + products.length) % products.length;
        renderSingleCard(currentIndex);
    });
}

// показати першу картку
if (productsContainer && products.length > 0) {
    renderSingleCard(currentIndex);
}

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

const scrollTopBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        // коли прокрутка більше 200px
        scrollTopBtn.classList.add("active");
    } else {
        scrollTopBtn.classList.remove("active");
    }
});

scrollTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.initPortfolioSwipers = function () {
    if (typeof Swiper === "undefined") {
        console.error("❌ Swiper не завантажений");
        return;
    }

    document.querySelectorAll(".portfolio-details-slider").forEach((slider) => {
        if (slider.swiper) return; // ⬅️ КЛЮЧОВЕ

        let config = {};
        const configEl = slider.querySelector(".swiper-config");

        if (configEl) {
            try {
                config = JSON.parse(configEl.textContent.trim());
            } catch (e) {
                console.error("❌ Invalid swiper JSON config", e);
            }
        }

        new Swiper(slider, {
            ...config,
            speed: 100,
            allowTouchMove: true,
            watchOverflow: true,
            navigation: {
                nextEl: slider.querySelector(".swiper-button-next"),
                prevEl: slider.querySelector(".swiper-button-prev"),
            },
        });
    });
};

document.addEventListener("DOMContentLoaded", () => {
    window.initPortfolioSwipers();
});
