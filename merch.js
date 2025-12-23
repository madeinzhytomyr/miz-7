
  
  
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
    let currentFilter = "*";


    const products = [
        {
          id: 1,
          name: "Авторамка для номерного знака ФК “Полісся”",
          description: "Середній термін доставки та обробки 7 робочих днів",
          images: [
            "https://i.postimg.cc/x8qRMF01/img-9665-(1).jpg",
            "https://i.postimg.cc/ZKSPTRNr/img-9660-(2).jpg",
            "https://i.postimg.cc/T1XbY7pC/img-9664-(3).jpg",
            "https://i.postimg.cc/x8qRMF01/img-9665-(1).jpg",
            "https://i.postimg.cc/ZKSPTRNr/img-9660-(2).jpg",
            "https://i.postimg.cc/T1XbY7pC/img-9664-(3).jpg",
            "https://i.postimg.cc/x8qRMF01/img-9665-(1).jpg",
            "https://i.postimg.cc/ZKSPTRNr/img-9660-(2).jpg",
            "https://i.postimg.cc/T1XbY7pC/img-9664-(3).jpg",
            "https://i.postimg.cc/x8qRMF01/img-9665-(1).jpg",
            "https://i.postimg.cc/ZKSPTRNr/img-9660-(2).jpg",
          ],
          price: 100,
          category: "Новинка",
          filter: "souvenirs",
          filter_text: "Сувеніри",
          opis: "Офіційний сувенір ФК “Полісся”."
        },
      
        {
          id: 2,
          name: "Блокнот ФК “Полісся”",
          description: "Середній термін доставки та обробки 7 робочих днів",
          images: [
            "https://polissya.shop/wp-content/uploads/2024/10/sas08501-1.jpg",
            "https://polissya.shop/wp-content/uploads/2023/02/sas08477.jpg",
            "https://polissya.shop/wp-content/uploads/2023/02/sas08507.jpg",
            "https://polissya.shop/wp-content/uploads/2023/02/sas08483.jpg"
          ],
          price: 90,
          category: "Новинка",
          filter: "souvenirs",
          filter_text: "Сувеніри",
          opis: "Офіційний сувенір ФК “Полісся”."
        },
      
        {
          id: 3,
          name: "Бокал з логотипом ФК “Полісся”",
          description: "Середній термін доставки та обробки 7 робочих днів",
          images: [
            "https://i.postimg.cc/1XHKxhJk/kia0306-copy-(1).jpg",
            "https://i.postimg.cc/pV87GmxP/kia0311-copy-(2).jpg",
            "https://i.postimg.cc/wT4hDkPw/kia0330-copy-(2).jpg"
          ],
          price: 180,
          category: "Новинка",
          filter: "souvenirs",
          filter_text: "Сувеніри",
          opis: "Офіційний сувенір ФК “Полісся”."
        },
      
        {
          id: 4,
          name: "Брелок з логотипом ФК “Полісся”",
          description: "Середній термін доставки та обробки 7 робочих днів",
          images: [
            "https://polissya.shop/wp-content/uploads/2025/01/kia0376-copy.jpg",
            "https://polissya.shop/wp-content/uploads/2025/01/kia0378-copy.jpg"
          ],
          price: 130,
          category: "Новинка",
          filter: "souvenirs",
          filter_text: "Сувеніри",
          opis: "Офіційний сувенір ФК “Полісся”."
        },
      
        {
          id: 5,
          name: "Вимпел ФК “Полісся”",
          description: "Середній термін доставки та обробки 7 робочих днів",
          images: [
            "https://polissya.shop/wp-content/uploads/2023/04/sas07055-800x1200.jpg",
            "https://polissya.shop/wp-content/uploads/2023/04/sas07083-800x1200.jpg",
            "https://polissya.shop/wp-content/uploads/2023/04/sas07071-800x1200.jpg"
          ],
          price: 200,
          category: "Новинка",
          filter: "souvenirs",
          filter_text: "Сувеніри",
          opis: "Офіційний сувенір ФК “Полісся”."
        },
      
        {
          id: 6,
          name: "Значок закатний лого ФК “Полісся”",
          description: "Середній термін доставки та обробки 7 робочих днів",
          images: [
            "https://polissya.shop/wp-content/uploads/2020/11/sas08100.jpg",
            "https://polissya.shop/wp-content/uploads/2020/11/sas08102.jpg",
            "https://polissya.shop/wp-content/uploads/2023/02/sas08094.jpg"
          ],
          price: 35,
          category: "Новинка",
          filter: "souvenirs",
          filter_text: "Сувеніри",
          opis: "Офіційний сувенір ФК “Полісся”."
        },
      
        {
          id: 7,
          name: "Ручка з логотипом ФК “Полісся”",
          description: "Середній термін доставки та обробки 7 робочих днів",
          images: [
            "https://polissya.shop/wp-content/uploads/2020/11/sas07097.jpg",
            "https://polissya.shop/wp-content/uploads/2020/11/sas07104.jpg",
            "https://polissya.shop/wp-content/uploads/2020/11/sas07137.jpg",
            "https://polissya.shop/wp-content/uploads/2020/11/sas07123.jpg"
          ],
          price: 100,
          category: "Новинка",
          filter: "souvenirs",
          filter_text: "Сувеніри",
          opis: "Офіційний сувенір ФК “Полісся”."
        },
      
        {
          id: 8,
          name: "Значок закатний лого ФК “Полісся”",
          description: "Середній термін доставки та обробки 7 робочих днів",
          images: [
            "https://polissya.shop/wp-content/uploads/2023/02/sas08086.jpg",
            "https://polissya.shop/wp-content/uploads/2023/02/sas08091.jpg"
          ],
          price: 35,
          category: "Новинка",
          filter: "souvenirs",
          filter_text: "Сувеніри",
          opis: "Офіційний сувенір ФК “Полісся”."
        },
      
        {
          id: 9,
          name: "Стікерпак ФК “Полісся”",
          description: "Середній термін доставки та обробки 7 робочих днів",
          images: [
            "https://polissya.shop/wp-content/uploads/2023/04/sas08519.jpg",
            "https://polissya.shop/wp-content/uploads/2023/04/sas08525.jpg",
            "https://polissya.shop/wp-content/uploads/2023/04/sas08533.jpg",
            "https://polissya.shop/wp-content/uploads/2023/04/sas08521.jpg"
          ],
          price: 50,
          category: "Новинка",
          filter: "souvenirs",
          filter_text: "Сувеніри",
          opis: "Офіційний сувенір ФК “Полісся”."
        },
      
        {
          id: 10,
          name: "Чашка з логотипом ФК “Полісся”",
          description: "Середній термін доставки та обробки 7 робочих днів",
          images: [
            "https://polissya.shop/wp-content/uploads/2024/10/sas04186-2.jpg",
            "https://polissya.shop/wp-content/uploads/2024/10/sas04196-1.jpg"
          ],
          price: 230,
          category: "Новинка",
          filter: "accessories",
          filter_text: "Аксесуари",
          opis: "Офіційний сувенір ФК “Полісся”."
        },
      
        {
          id: 11,
          name: "Настільний календар-пірамідка 2026 ФК “Полісся”",
          description: "Середній термін доставки та обробки 7 робочих днів",
          images: [
            "https://polissya.shop/wp-content/uploads/2025/12/kia3114-copy.jpg",
            "https://polissya.shop/wp-content/uploads/2025/12/kia3127-copy.jpg",
            "https://polissya.shop/wp-content/uploads/2025/12/kia3117-copy.jpg"
          ],
          price: 150,
          category: "Новинка",
          filter: "souvenirs",
          filter_text: "Сувеніри",
          opis: "Офіційний сувенір ФК “Полісся”."
        },
      
        {
          id: 12,
          name: "Ароматизатор для автомобіля",
          description: "Середній термін доставки та обробки 7 робочих днів",
          images: [
            "https://polissya.shop/wp-content/uploads/2025/09/kia0403-copy.jpg",
            "https://polissya.shop/wp-content/uploads/2025/09/kia0417-copy.jpg"
          ],
          price: 50,
          category: "Новинка",
          filter: "accessories",
          filter_text: "Аксесуари",
          opis: "Офіційний сувенір ФК “Полісся”."
        },
      
        {
          id: 13,
          name: "Вимпел малий ФК “Полісся”",
          description: "Середній термін доставки та обробки 7 робочих днів",
          images: [
            "https://polissya.shop/wp-content/uploads/2025/02/kia0533-copy.jpg",
            "https://polissya.shop/wp-content/uploads/2025/02/kia0544-copy.jpg",
            "https://polissya.shop/wp-content/uploads/2025/02/kia0518-copy.jpg"
          ],
          price: 70,
          category: "Новинка",
          filter: "accessories",
          filter_text: "Аксесуари",
          opis: "Офіційний сувенір ФК “Полісся”."
        },
      
        {
          id: 14,
          name: "Кепка з вовком FC PZ",
          description: "Середній термін доставки та обробки 7 робочих днів",
          images: [
            "https://polissya.shop/wp-content/uploads/2025/09/kepka-dorosla-4.jpg",
            "https://polissya.shop/wp-content/uploads/2025/09/kepka-dorosla-2.jpg",
            "https://polissya.shop/wp-content/uploads/2025/09/kia0724-copy.jpg"
          ],
          price: 500,
          category: "Новинка",
          filter: "accessories",
          filter_text: "Аксесуари",
          opis: "Офіційний сувенір ФК “Полісся”."
        },
      
        {
          id: 15,
          name: "Кепка з вовком ФК “Полісся” дитяча",
          description: "Середній термін доставки та обробки 7 робочих днів",
          images: [
            "https://polissya.shop/wp-content/uploads/2025/04/kepka-dytiacha-3.jpg",
            "https://polissya.shop/wp-content/uploads/2025/04/kepka-dytiacha-1.jpg"
          ],
          price: 350,
          category: "Новинка",
          filter: "accessories",
          filter_text: "Аксесуари",
          opis: "Офіційний сувенір ФК “Полісся”."
        },
      
        {
          id: 16,
          name: "Пляшка для води з лого ФК “Полісся”",
          description: "Середній термін доставки та обробки 7 робочих днів",
          images: [
            "https://polissya.shop/wp-content/uploads/2020/11/kia0422-copy.jpg",
            "https://polissya.shop/wp-content/uploads/2020/11/sas06859.jpg",
            "https://polissya.shop/wp-content/uploads/2020/11/kia0434-copy.jpg"
          ],
          price: 230,
          category: "Новинка",
          filter: "accessories",
          filter_text: "Аксесуари",
          opis: "Офіційний сувенір ФК “Полісся”."
        },
      
        {
          id: 17,
          name: "Футболка вболівальника чорна ФК “Полісся”",
          description: "Середній термін доставки та обробки 7 робочих днів",
          images: [
            "https://polissya.shop/wp-content/uploads/2023/07/sas03884-800x1200.jpg",
            "https://polissya.shop/wp-content/uploads/2023/07/sas03911-800x1200.jpg"
          ],
          price: 400,
          category: "Новинка",
          filter: "clothes",
          filter_text: "Одяг",
          opis: "Офіційний сувенір ФК “Полісся”."
        },
      
        {
          id: 18,
          name: "Шарф Поліські вовки ФК “Полісся”",
          description: "Середній термін доставки та обробки 7 робочих днів",
          images: [
            "https://polissya.shop/wp-content/uploads/2025/03/kia4734-copy.jpg",
            "https://polissya.shop/wp-content/uploads/2025/03/kia4724-copy.jpg"
          ],
          price: 350,
          category: "Новинка",
          filter: "accessories",
          filter_text: "Аксесуари",
          opis: "Офіційний сувенір ФК “Полісся”."
        },
      
        {
          id: 19,
          name: "Пляшка для води з лого ФК “Полісся”",
          description: "Середній термін доставки та обробки 7 робочих днів",
          images: [
            "https://polissya.shop/wp-content/uploads/2020/11/kia0422-copy.jpg",
            "https://polissya.shop/wp-content/uploads/2020/11/sas06859.jpg",
            "https://polissya.shop/wp-content/uploads/2020/11/kia0434-copy.jpg"
          ],
          price: 230,
          category: "Новинка",
          filter: "accessories",
          filter_text: "Аксесуари",
          opis: "Офіційний сувенір ФК “Полісся”."
        },
      
        {
          id: 20,
          name: "Дитяча футболка з логотипом ФК “Полісся”",
          description: "Середній термін доставки та обробки 7 робочих днів",
          images: [
            "https://polissya.shop/wp-content/uploads/2023/05/sas07970-800x1200.jpg",
            "https://polissya.shop/wp-content/uploads/2023/05/sas07959-800x1200.jpg",
            "https://polissya.shop/wp-content/uploads/2023/05/sas07974-800x1200.jpg",
            "https://polissya.shop/wp-content/uploads/2023/05/sas07981-800x1200.jpg"
          ],
          price: 350,
          category: "Новинка",
          filter: "clothes",
          filter_text: "Одяг",
          opis: "Офіційний сувенір ФК “Полісся”."
        },
      
        {
          id: 21,
          name: "Лонгслів базовий з логотипом ФК “Полісся”",
          description: "Середній термін доставки та обробки 7 робочих днів",
          images: [
            "https://polissya.shop/wp-content/uploads/2025/09/kofta-chorna-6-800x1067.jpg",
            "https://polissya.shop/wp-content/uploads/2025/09/kofta-chorna-4-800x1067.jpg"
          ],
          price: 650,
          category: "Новинка",
          filter: "clothes",
          filter_text: "Одяг",
          opis: "Офіційний сувенір ФК “Полісся”."
        },
      
        {
          id: 22,
          name: "Світшот базовий з лого ФК “Полісся”",
          description: "Середній термін доставки та обробки 7 робочих днів",
          images: [
            "https://polissya.shop/wp-content/uploads/2025/12/kofta-bila-7-800x1067.jpg",
            "https://polissya.shop/wp-content/uploads/2025/12/kofta-bila-4-800x1067.jpg"
          ],
          price: 1000,
          category: "Новинка",
          filter: "clothes",
          filter_text: "Одяг",
          opis: "Офіційний сувенір ФК “Полісся”."
        }
      ];
      
    function createCard(product) {
        const card = document.createElement("div");
        card.className = `m-0 p-2 mx-auto col-10 col-sm-6 col-md-6 col-lg-4 col-xl-3 text-center item1 portfolio-item filter-${product.filter}`;
        card.innerHTML = `
            <a href="${product.link}" class="p-2 m-0 rounded-5 text-center "
               style="background:transparent; box-shadow: 0 15px 30px rgba(0,0,0,0.1);  ">

              

                        <div class=" p-2 mb-3 rounded-4 col-auto overflow-hidden img-box">
                            <img class="img-1 m-0 p-0 w-100 rounded-4" src="${product.images[0]}">
                            <img class="img-2 m-0 p-0 w-100 rounded-4" src="${product.images[1]}">

                            <span class="project-category m-2 small fw-normal ${product.category === "Новинка" ? "bg-primary" : "bg-secondary"}">
                                ${product.category}
                            </span>
                        </div>

                
                <h6 class=" m-0 pb-2 my-1">${product.name}</h6>
                <p class="m-0 small text-secondary pb-2">${product.description}</p>
                <div style="color: var(--bs-primary);" class="m-0 p-0 px-4 col-12 text-center fw-bold rounded-4 pb-1">
                    <span class="fs-4 text-white">₴</span>
                    <span class="fs-5 text-white">${product.price}</span>
                    <span class="small fw-bold ps-1 text-secondary fst-italic"> (в наявності)</span>
                </div>
                <a href="${product.link}" class="my_button d-inline-block fs-6">Купити</a>
            </a>
        `;


        
        card.querySelector("a").addEventListener("click", function(e){
            e.preventDefault();
            const query = new URLSearchParams({
                id: product.id,
                name: product.name,
                price: product.price,
                opis: product.opis,
                description: product.description,
                images: JSON.stringify(product.images)
              }).toString();
              
              window.location.href = `merch-card.html?${query}`;
              
        });


        

        return card;
    }

    // Load More
    function loadMore() {
        let filteredProducts;
    
        if (currentFilter === "filtr-popular") {
            const selectedIDs = [1, 3, 5, 7, 8, 6, 10, 13, 17]; // ті ж самі ID, що і в renderProducts
            filteredProducts = products.filter(p => selectedIDs.includes(p.id));
        } else {
            filteredProducts = products.filter(p => currentFilter === "*" || p.filter === currentFilter.replace("filter-", ""));
        }
    
        visibleCount += 4;
    
        const visibleProducts = filteredProducts.slice(0, visibleCount);
        productsContainer.innerHTML = "";
        visibleProducts.forEach(p => productsContainer.appendChild(createCard(p)));
    
        loadMoreBtn.style.display = filteredProducts.length > visibleCount ? "inline-block" : "none";
    }
    

    // Фільтри
    function renderProducts() {
        productsContainer.innerHTML = "";
    
        let filteredProducts;
    
        if (currentFilter === "filtr-popular") {
            // Фільтруємо за вибраними ID
            const selectedIDs = [1, 3, 5, 7, 8, 6, 10, 13 , 17]; // <- сюди встав свої потрібні id
            filteredProducts = products.filter(p => selectedIDs.includes(p.id));
        } else {
            filteredProducts = products.filter(p => currentFilter === "*" || p.filter === currentFilter.replace("filter-", ""));
        }
    
        const visibleProducts = filteredProducts.slice(0, visibleCount);
    
        visibleProducts.forEach(p => productsContainer.appendChild(createCard(p)));
    
        loadMoreBtn.style.display = filteredProducts.length > visibleCount ? "inline-block" : "none";
    }
    
    function initFilters() {
        const filters = document.querySelectorAll(".portfolio-filters li");
    
        filters.forEach(filter => {
            filter.addEventListener("click", function () {
                // Видаляємо клас "filter-active" з усіх кнопок
                filters.forEach(f => f.classList.remove("filter-active"));
    
                // Додаємо "filter-active" на ту кнопку, яку клікнули
                this.classList.add("filter-active");
    
                // Встановлюємо обраний фільтр
                currentFilter = this.getAttribute("data-filter");
                visibleCount = 8;
    
                // Перерендерюємо продукти
                renderProducts();
            });
        });
    
        // --- Додаємо популярне активним при завантаженні ---
        const popularBtn = document.querySelector('.portfolio-filters li[data-filter="filtr-popular"]');
        if (popularBtn) {
            popularBtn.classList.add("filter-active");
            currentFilter = "filtr-popular"; // встановлюємо фільтр популярного
            renderProducts(); // рендеримо популярні продукти
        }
    }
    
    
    
    

    loadMoreBtn.addEventListener("click", loadMore);
    renderProducts();
    initFilters();
});








