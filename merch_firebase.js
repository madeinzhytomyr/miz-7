// 🔧 Firebase
// 🔧 Firebase
// 🔧 Firebase
// 🔧 Firebase
// 🔧 Firebase
// 🔧 Firebase
// 🔧 Firebase
// 🔧 Firebase
// 🔧 Firebase
// 🔧 Firebase
// 🔧 Firebase
// 🔧 Firebase
// 🔧 Firebase
// 🔧 Firebase
// 🔧 Firebase
// 🔧 Firebase
// 🔧 Firebase

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
    getDatabase,
    ref,
    set,
    update,
    get,
    onValue,
    remove,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyABl_hkCyPptAAnNwqRl2-ENQG3gHyD7og",
    authDomain: "project-1-dc10e.firebaseapp.com",
    databaseURL:
        "https://project-1-dc10e-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "project-1-dc10e",
    storageBucket: "project-1-dc10e.firebasestorage.app",
    messagingSenderId: "457977027750",
    appId: "1:457977027750:web:235ce9f2b8b981c9cce867",
    measurementId: "G-GYTEDXSWFD",
};

// 🚀 Ініціалізація Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// ========================= Отримання IP =========================
// ========================= Отримання IP =========================
// ========================= Отримання IP =========================
// ========================= Отримання IP =========================
// ========================= Отримання IP =========================
// ========================= Отримання IP =========================
// ========================= Отримання IP =========================
// ========================= Отримання IP =========================
// ========================= Отримання IP =========================
// ========================= Отримання IP =========================
// ========================= Отримання IP =========================
// ========================= Отримання IP =========================
async function getUserIP() {
    try {
        const res = await fetch("https://api.ipify.org?format=json");
        const data = await res.json();
        return data.ip;
    } catch (err) {
        console.error("Не вдалося отримати IP:", err);
        return "unknown";
    }
}
window.getUserIP = getUserIP;

// ========================= Реєстрація користувача =========================
// ========================= Реєстрація користувача =========================
// ========================= Реєстрація користувача =========================
// ========================= Реєстрація користувача =========================
// ========================= Реєстрація користувача =========================
// ========================= Реєстрація користувача =========================
// ========================= Реєстрація користувача =========================
// ========================= Реєстрація користувача =========================
// ========================= Реєстрація користувача =========================
// ========================= Реєстрація користувача =========================
// ========================= Реєстрація користувача =========================
// ========================= Реєстрація користувача =========================
// ========================= Реєстрація користувача =========================
// ========================= Реєстрація користувача =========================
// ========================= Реєстрація користувача =========================
// ========================= Реєстрація користувача =========================

async function addVisitor() {
    const ip = await getUserIP();
    if (ip === "unknown") return;

    const visitorKey = ip.replace(/\./g, "_");
    const visitorRef = ref(db, "visitors/" + visitorKey);

    const snapshot = await get(visitorRef);
    if (!snapshot.exists()) {
        await set(visitorRef, {
            ip,
            timestamp: new Date().toLocaleString("uk-UA"),
            userAgent: navigator.userAgent,
            page: window.location.pathname,

            products: [],
            pay: 0,

            // Дані користувача (порожні рядки, а не 0)
            firstName: "",
            lastName: "",
            city: "",
            postOffice: "",
            phone: "",
            email: "",
            description: "",

            titel: "",
            ist_bezahlt: "no",
        });

        console.log("✅ Відвідувач доданий:", ip);
    }
}

window.addEventListener("load", addVisitor);

// ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================
// ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================
// ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================
// ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================
// ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================
// ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================
// ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================
// ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================
// ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================
// ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================
// ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================
// ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================
// ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================
// ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================
// ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================
// ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================
// ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================
// ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================
// ========================= Відображення totalPay і totalAmount (тільки для цього IP) =========================
const totalPayElement = document.getElementById("totalPay");
const totalPayElement1 = document.getElementById("totalPay1");
const totalAmountElement = document.getElementById("totalAmount");

(async () => {
    const ip = await getUserIP();
    if (ip === "unknown") return;

    const visitorKey = ip.replace(/\./g, "_");
    const userRef = ref(db, "visitors/" + visitorKey);

    onValue(userRef, (snapshot) => {
        let totalPay = 0;
        let totalAmount = 0;

        if (snapshot.exists()) {
            const user = snapshot.val();
            totalPay = Number(user.pay || 0);

            if (Array.isArray(user.products)) {
                user.products.forEach((product) => {
                    totalAmount += Number(product.amount || 0);
                });
            }
        }

        if (totalPayElement)
            totalPayElement.textContent = `₴${totalPay.toFixed(2)}`;

        if (totalPayElement1)
            totalPayElement1.textContent = `₴${totalPay.toFixed(2)}`;

        if (totalAmountElement)
            totalAmountElement.textContent = totalAmount.toString();
    });
})();

// ======JS кошик справа меню   ПЛЮС/МІНУС/ВИДАЛЕННЯ ======
// ======JS кошик справа меню   ПЛЮС/МІНУС/ВИДАЛЕННЯ ======
// ======JS кошик справа меню   ПЛЮС/МІНУС/ВИДАЛЕННЯ ======
// ======JS кошик справа меню   ПЛЮС/МІНУС/ВИДАЛЕННЯ ======
// ======JS кошик справа меню   ПЛЮС/МІНУС/ВИДАЛЕННЯ ======
// ======JS кошик справа меню   ПЛЮС/МІНУС/ВИДАЛЕННЯ ======
// ======JS кошик справа меню   ПЛЮС/МІНУС/ВИДАЛЕННЯ ======
// ======JS кошик справа меню   ПЛЮС/МІНУС/ВИДАЛЕННЯ ======
// ======JS кошик справа меню   ПЛЮС/МІНУС/ВИДАЛЕННЯ ======
// ======JS кошик справа меню   ПЛЮС/МІНУС/ВИДАЛЕННЯ ======
// ======JS кошик справа меню   ПЛЮС/МІНУС/ВИДАЛЕННЯ ======

window.PlusAmount = async function (userKey, productIndex) {
    const userRef = ref(db, "visitors/" + userKey);
    const snapshot = await get(userRef);
    if (!snapshot.exists()) return;

    const userData = snapshot.val();
    const product = userData.products[productIndex];
    product.amount = (Number(product.amount) || 0) + 1;
    product.summary = product.amount * Number(product.price || 0);
    userData.pay = userData.products.reduce(
        (sum, p) => sum + (p.summary || 0),
        0
    );
    await update(userRef, { products: userData.products, pay: userData.pay });
};

window.MinusAmount = async function (userKey, productIndex) {
    const userRef = ref(db, "visitors/" + userKey);
    const snapshot = await get(userRef);
    if (!snapshot.exists()) return;

    const userData = snapshot.val();
    const product = userData.products[productIndex];
    product.amount = Math.max((Number(product.amount) || 1) - 1, 1);
    product.summary = product.amount * Number(product.price || 0);
    userData.pay = userData.products.reduce(
        (sum, p) => sum + (p.summary || 0),
        0
    );
    await update(userRef, { products: userData.products, pay: userData.pay });
};

window.deleteProduct = async function (userKey, productIndex) {
    const userRef = ref(db, "visitors/" + userKey);
    const snapshot = await get(userRef);
    if (!snapshot.exists()) return;

    const userData = snapshot.val();
    userData.products.splice(productIndex, 1);
    userData.pay = userData.products.reduce(
        (sum, p) => sum + (p.summary || 0),
        0
    );
    await update(userRef, { products: userData.products, pay: userData.pay });
};

// ===== КОШИК У РЕАЛЬНОМУ ЧАСІ =====
// ===== КОШИК У РЕАЛЬНОМУ ЧАСІ =====
// ===== КОШИК У РЕАЛЬНОМУ ЧАСІ =====
// ===== КОШИК У РЕАЛЬНОМУ ЧАСІ =====
// ===== КОШИК У РЕАЛЬНОМУ ЧАСІ =====
// ===== КОШИК У РЕАЛЬНОМУ ЧАСІ =====
// ===== КОШИК У РЕАЛЬНОМУ ЧАСІ =====
// ===== КОШИК У РЕАЛЬНОМУ ЧАСІ =====
// ===== КОШИК У РЕАЛЬНОМУ ЧАСІ =====
// ===== КОШИК У РЕАЛЬНОМУ ЧАСІ =====
// ===== КОШИК У РЕАЛЬНОМУ ЧАСІ =====
// ===== КОШИК У РЕАЛЬНОМУ ЧАСІ =====
// ===== КОШИК У РЕАЛЬНОМУ ЧАСІ =====

document.addEventListener("DOMContentLoaded", async () => {
    const sideCart = document.getElementById("sideCart");
    const cartBackdrop = document.getElementById("cartBackdrop");
    const cartTotalPrice = document.getElementById("cartTotalPrice");
    const cartIcon = document.getElementById("openCart");
    const closeCart = document.getElementById("closeCart");

    // 🧩 Перевірка, щоб не було null
    if (
        !cartIcon ||
        !sideCart ||
        !cartBackdrop ||
        !cartContent ||
        !cartTotalPrice
    ) {
        console.error("❌ Помилка: елементи кошика не знайдені у DOM");
        return;
    }

    // Відкрити кошик
    cartIcon.addEventListener("click", async (e) => {
        e.preventDefault();
        sideCart.classList.add("active");
        cartBackdrop.classList.add("active");
        await loadCartRealtime();
    });

    // Закрити кошик
    closeCart?.addEventListener("click", closeSideCart);
    cartBackdrop.addEventListener("click", closeSideCart);

    async function loadCartRealtime() {
        const ip = await getUserIP();
        if (ip === "unknown") return;

        const visitorKey = ip.replace(/\./g, "_");
        const userRef = ref(db, "visitors/" + visitorKey);

        onValue(userRef, (snapshot) => {
            let html = "";
            let total = 0;

            const emptyCartHTML = `
                <div id="usersContainer" style="color: #ff3399; background-color: #141414" class="m-0 p-0 py-3 col-12 d-flex flex-column gap-3 ">
                            <div class="empty-cart-alert d-flex flex-column align-items-center justify-content-center text-center p-5 rounded-4 shadow-sm">
                                <i class="fas fa-shopping-cart fa-4x mb-3 cart-icon text-primary"></i>
                                <strong class="fs-4 text-primary">Кошик для покупок порожній.</strong>
                                <p class="mt-2 mb-0 text-white fs-5">
                                    Додайте товари, щоб почати робити покупки!
                                </p>
                            </div>
                        </div>
            `;

            if (
                !snapshot.exists() ||
                !Array.isArray(snapshot.val().products) ||
                snapshot.val().products.length === 0
            ) {
                cartContent.innerHTML = emptyCartHTML;
                cartTotalPrice.textContent = "₴0.00";
                return;
            }

            snapshot.val().products.forEach((p, index) => {
                total += p.summary;

                html += `




                 <div class="m-0 p-0 pt-4 mt-2 row cart-item border-0">


 <img class="m-0 p-0 col-auto " src = "${p.image}" alt = "${p.name}" >


                            <div class="m-0 p-0 col">

                                <div class="m-0 p-0 row">

                                    <a href="${
                                        p.link
                                    }" class="my_link_card col text-white fw-normal">${
                    p.name
                }</a>

                                    <button onclick="deleteProduct('${visitorKey}', ${index})" class="my_icon m-0 p-2 col-auto btn btn-sm btn-outline-danger  text-danger border-0 bg-transparent fa-solid fa-xmark fs-5"></button>

                                </div>

                                <div class="m-0 p-0 row align-items-center">

                                    <div class="m-0 p-2 col cart-item-controls">
                                        <button style="width: 32px; height: 32px;" class="my_button rounded-3 fw-bold mt-0" onclick="MinusAmount('${visitorKey}', ${index})">−</button>
                                        <input style="width: 36px; height: 32px;" class="m-0 p-0 rounded-3 text-white" type="number" value="${
                                            p.amount
                                        }" disabled>
                                        <button style="width: 32px; height: 32px;" class="my_button rounded-3 fw-bold mt-0"  onclick="PlusAmount('${visitorKey}', ${index})">+</button>
                                    </div>

                                     <div class="m-0 p-2 col-auto text-end">
                                        <strong class="m-0 p-0 fs-6">₴${p.summary.toFixed(
                                            2
                                        )}</strong>
                                    </div>

                                                        
                                </div>
                            </div></div>
                `;
            });

            cartContent.innerHTML = html;
            cartTotalPrice.textContent = `₴${total.toFixed(2)}`;
        });
    }

    window.loadCartRealtime = loadCartRealtime; // ← ДОДАЙ
});

// Відкрити кошик
// Відкрити кошик
// Відкрити кошик
// Відкрити кошик
// Відкрити кошик
// Відкрити кошик
// Відкрити кошик
// Відкрити кошик

function openSideCart() {
    const sideCart = document.getElementById("sideCart");
    const cartBackdrop = document.getElementById("cartBackdrop");

    sideCart.classList.add("active");
    cartBackdrop.classList.add("active");

    document.body.style.overflow = "hidden";
}

// Закрити кошик
// Закрити кошик
// Закрити кошик
// Закрити кошик
// Закрити кошик
// Закрити кошик
// Закрити кошик
// Закрити кошик
// Закрити кошик

function closeSideCart() {
    const sideCart = document.getElementById("sideCart");
    const cartBackdrop = document.getElementById("cartBackdrop");

    sideCart.classList.remove("active");
    cartBackdrop.classList.remove("active");

    document.body.style.overflow = ""; // 🟢 повертаємо скрол
}

// напис добавте товар в кошик
// напис добавте товар в кошик
// напис добавте товар в кошик
// напис добавте товар в кошик
// напис добавте товар в кошик

const sideCart = document.getElementById("sideCart");
const cartBackdrop = document.getElementById("cartBackdrop");
const closeCart = document.getElementById("closeCart");
const orderBtn = document.getElementById("orderBtn");
const sideDelivery = document.getElementById("sideDelivery");

function removeFillAlert() {
    const oldAlert = document.getElementById("fillAlert");
    if (oldAlert) oldAlert.remove();
}

// Відкриття доставки

orderBtn.addEventListener("click", () => {
    const cartItems = document.querySelectorAll(".cart-item");

    if (cartItems.length === 0) {
        removeFillAlert();

        const alertDiv = document.createElement("div");
        alertDiv.id = "fillAlert";
        alertDiv.className = "alert alert-danger mt-3";
        alertDiv.textContent = "❗ Додайте товар у кошик";
        orderBtn.insertAdjacentElement("afterend", alertDiv);
        return;
    }

    // Відкриваємо доставку
    sideCart.classList.remove("active");
    sideDelivery.classList.add("active");
    cartBackdrop.classList.add("active");
});

// Закриття доставки кнопкою хрестик\
// Закриття доставки кнопкою хрестик
// Закриття доставки кнопкою хрестик
// Закриття доставки кнопкою хрестик
// Закриття доставки кнопкою хрестик
// Закриття доставки кнопкою хрестик
// Закриття доставки кнопкою хрестик
// Закриття доставки кнопкою хрестик
// Закриття доставки кнопкою хрестик
// Закриття доставки кнопкою хрестик

closeCart?.addEventListener("click", () => {
    sideDelivery.classList.remove("active");
    sideCart.classList.remove("active");
    cartBackdrop.classList.remove("active");
    removeFillAlert();
});

// Закриття доставки по backdrop
// Закриття доставки по backdrop
// Закриття доставки по backdrop
// Закриття доставки по backdrop
// Закриття доставки по backdrop
// Закриття доставки по backdrop
// Закриття доставки по backdrop
// Закриття доставки по backdrop
// Закриття доставки по backdrop
cartBackdrop.addEventListener("click", () => {
    sideDelivery.classList.remove("active");
    sideCart.classList.remove("active");
    cartBackdrop.classList.remove("active");
    removeFillAlert();
});

// 🎯 Виклик при кліку кошика normal i через openCart
// 🎯 Виклик при кліку кошика normal i через openCart
// 🎯 Виклик при кліку кошика normal i через openCart
// 🎯 Виклик при кліку кошика normal i через openCart
// 🎯 Виклик при кліку кошика normal i через openCart
// 🎯 Виклик при кліку кошика normal i через openCart
// 🎯 Виклик при кліку кошика normal i через openCart
// 🎯 Виклик при кліку кошика normal i через openCart
// 🎯 Виклик при кліку кошика normal i через openCart
document.getElementById("openCart").addEventListener("click", (e) => {
    e.preventDefault();
    openSideCart();
});

document.getElementById("closeCart").addEventListener("click", closeSideCart);
document
    .getElementById("cartBackdrop")
    .addEventListener("click", closeSideCart);

// 🔽 закриваємо бічний кошик
// 🔽 закриваємо бічний кошик
// 🔽 закриваємо бічний кошик
// 🔽 закриваємо бічний кошик
// 🔽 закриваємо бічний кошик
// 🔽 закриваємо бічний кошик
// 🔽 закриваємо бічний кошик
// 🔽 закриваємо бічний кошик
// 🔽 закриваємо бічний кошик
// 🔽 закриваємо бічний кошик
// 🔽 закриваємо бічний кошик
// 🔽 закриваємо бічний кошик
// 🔽 закриваємо бічний кошик

document.addEventListener("DOMContentLoaded", () => {
    // ========= Елементи =========
    const sideDelivery = document.getElementById("sideDelivery");
    const cartBackdrop = document.getElementById("cartBackdrop");
    const goToPaymentBtn = document.getElementById("goToPayment");

    const sidePayment = document.getElementById("sidePayment");
    const paymentBackdrop = document.getElementById("paymentBackdrop");
    const closePayment = document.getElementById("closePayment");
    const closePaymentFooter = document.getElementById("closePaymentFooter");
    const confirmBtn = document.getElementById("confirmBtn");
    const confirmCheckbox = document.getElementById("confirmPayment");
    const titleSpan = document.getElementById("paymentTitle");

    // ========= Перевірка форми sideDelivery =========
    // ========= Перевірка форми sideDelivery =========
    // ========= Перевірка форми sideDelivery =========
    // ========= Перевірка форми sideDelivery =========
    // ========= Перевірка форми sideDelivery =========
    goToPaymentBtn.addEventListener("click", () => {
        // input та textarea у sideDelivery
        const inputs = sideDelivery.querySelectorAll("input[placeholder]");
        // видаляємо старе повідомлення
        const oldAlert = sideDelivery.querySelector("#fillAlert");
        if (oldAlert) oldAlert.remove();

        // перевіряємо, чи всі поля заповнені
        let allFilled = true;
        inputs.forEach((input) => {
            if (!input.value.trim()) allFilled = false;
        });

        if (!allFilled) {
            // показуємо повідомлення і не відкриваємо sidePayment
            const alertDiv = document.createElement("div");
            alertDiv.id = "fillAlert";
            alertDiv.className = "alert alert-danger mt-3";
            alertDiv.textContent = "Будь ласка заповніть усі поля форми!";
            goToPaymentBtn.insertAdjacentElement("afterend", alertDiv);
            return;
        }

        // відкриваємо sidePayment, якщо всі поля заповнені
        sideDelivery.classList.remove("active");
        cartBackdrop.classList.remove("active");

        sidePayment.classList.add("active");
        paymentBackdrop.classList.add("active");
    });

    // ========= Закриття sideDelivery =========
    // ========= Закриття sideDelivery =========
    // ========= Закриття sideDelivery =========
    // ========= Закриття sideDelivery =========
    // ========= Закриття sideDelivery =========
    // ========= Закриття sideDelivery =========
    const closeDelivery = document.getElementById("closeDelivery");
    closeDelivery.addEventListener("click", () => {
        sideDelivery.classList.remove("active");
        cartBackdrop.classList.remove("active");
    });
    cartBackdrop.addEventListener("click", () => {
        sideDelivery.classList.remove("active");
        cartBackdrop.classList.remove("active");
    });

    // ========= Функції для sidePayment =========
    // ========= Функції для sidePayment =========
    // ========= Функції для sidePayment =========
    // ========= Функції для sidePayment =========
    // ========= Функції для sidePayment =========
    // ========= Функції для sidePayment =========
    // ========= Функції для sidePayment =========
    function closePaymentPanel() {
        sidePayment.classList.remove("active");
        paymentBackdrop.classList.remove("active");
        document.body.style.overflow = ""; // відновлюємо скрол
    }

    closePayment.addEventListener("click", closePaymentPanel);
    closePaymentFooter.addEventListener("click", closePaymentPanel);
    paymentBackdrop.addEventListener("click", closePaymentPanel);

    // ========= Кнопка підтвердження оплати =========
    // ========= Кнопка підтвердження оплати =========
    // ========= Кнопка підтвердження оплати =========
    // ========= Кнопка підтвердження оплати =========
    // ========= Кнопка підтвердження оплати =========
    // ========= Кнопка підтвердження оплати =========
    // ========= Кнопка підтвердження оплати =========
    // ========= Кнопка підтвердження оплати =========
    confirmBtn.addEventListener("click", async () => {
        // Перевірка чекбокса
        if (!confirmCheckbox.checked) {
            // Якщо алерт ще не існує, створюємо його під чекбоксом
            let alertDiv = document.getElementById("paymentAlert");
            if (!alertDiv) {
                alertDiv = document.createElement("div");
                alertDiv.id = "paymentAlert";
                alertDiv.className = "alert alert-danger mt-2"; // невеликий відступ зверху
                alertDiv.textContent =
                    "⚠ Будь ласка, підтвердьте, що ви зробили переказ!";
                confirmCheckbox.parentNode.appendChild(alertDiv);
            }
            return; // не продовжуємо, якщо чекбокс не встановлено
        }

        const existingAlert = document.getElementById("paymentAlert");
        if (existingAlert) existingAlert.remove();

        // --- Логіка Firebase ---
        // --- Логіка Firebase ---
        // --- Логіка Firebase ---
        // --- Логіка Firebase ---
        // --- Логіка Firebase ---
        // --- Логіка Firebase ---
        // --- Логіка Firebase ---
        // --- Логіка Firebase ---
        try {
            const ip = await getUserIP();
            if (ip === "unknown") return;

            const visitorKey = ip.replace(/\./g, "_");
            const visitorRef = ref(db, "visitors/" + visitorKey);
            let kundenRef = ref(db, "kunden/" + visitorKey);

            const snapshot = await get(visitorRef);
            if (snapshot.exists()) {
                const userData = snapshot.val();
                userData.ist_bezahlt = "yes";
                userData.titel = currentTitle;
                userData.timestamp = new Date().toISOString();

                const kundenSnap = await get(kundenRef);
                if (kundenSnap.exists()) {
                    const randomSuffix = Math.random()
                        .toString(36)
                        .substring(2, 5)
                        .toUpperCase();
                    kundenRef = ref(
                        db,
                        "kunden/" + visitorKey + "_" + randomSuffix
                    );
                }

                await update(kundenRef, userData);
                await remove(visitorRef);
            }
        } catch (error) {
            console.error(error);
        }

        closePaymentPanel();
        console.log("Оплата підтверджена!");
    });
});

// ========================= Підтвердження платежу // Генерація 6-значного коду ддя перекащу титут переказу=========================
// ========================= Підтвердження платежу // Генерація 6-значного коду ддя перекащу титут переказу=========================
// ========================= Підтвердження платежу // Генерація 6-значного коду ддя перекащу титут переказу=========================
// ========================= Підтвердження платежу // Генерація 6-значного коду ддя перекащу титут переказу=========================
// ========================= Підтвердження платежу // Генерація 6-значного коду ддя перекащу титут переказу=========================
// ========================= Підтвердження платежу // Генерація 6-значного коду ддя перекащу титут переказу=========================
// ========================= Підтвердження платежу // Генерація 6-значного коду ддя перекащу титут переказу=========================
// ========================= Підтвердження платежу // Генерація 6-значного коду ддя перекащу титут переказу=========================

const titleSpan = document.getElementById("paymentTitle");

// Генерація 6-значного коду
function generateRandomTitle() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// Поточний код оплати
let currentTitle = generateRandomTitle();
if (titleSpan) titleSpan.textContent = currentTitle;

// 🔹 Коли відкривається sidePayment — оновлюємо код
function refreshPaymentTitle() {
    currentTitle = generateRandomTitle();
    if (titleSpan) titleSpan.textContent = currentTitle;
}

// sideSuccess sideSuccess
// sideSuccess sideSuccess
// sideSuccess sideSuccess
// sideSuccess sideSuccess
// sideSuccess sideSuccess
// sideSuccess sideSuccess
// sideSuccess sideSuccess
// sideSuccess sideSuccess
// sideSuccess sideSuccess
// sideSuccess sideSuccess

const confirmBtn = document.getElementById("confirmBtn");
const confirmCheckbox = document.getElementById("confirmPayment");
const sidePayment = document.getElementById("sidePayment");
const paymentBackdrop = document.getElementById("paymentBackdrop");

const sideSuccess = document.getElementById("sideSuccess");
const successBackdrop = document.getElementById("successBackdrop");
const countdownEl = document.getElementById("successCountdown");
const closeSuccess = document.getElementById("closeSuccess");

confirmBtn.addEventListener("click", () => {
    if (!confirmCheckbox.checked) {
        return;
    }

    // Закриваємо sidePayment
    sidePayment.classList.remove("active");
    paymentBackdrop.classList.remove("active");

    // Відкриваємо sideSuccess
    sideSuccess.classList.add("active");
    successBackdrop.classList.add("active");

    let countdown = 5;
    const interval = setInterval(() => {
        countdown -= 1;
        countdownEl.textContent = countdown;
        if (countdown <= 0) {
            clearInterval(interval);
            sideSuccess.classList.remove("active");
            successBackdrop.classList.remove("active");
            window.location.href = "/merch.html";
        }
    }, 1000);
});

// Закриття вручну
closeSuccess.addEventListener("click", () => {
    sideSuccess.classList.remove("active");
    successBackdrop.classList.remove("active");
});
successBackdrop.addEventListener("click", () => {
    sideSuccess.classList.remove("active");
    successBackdrop.classList.remove("active");
});

// ========================= Збереження контактних даних =========================
// ========================= Збереження контактних даних =========================
// ========================= Збереження контактних даних =========================
// ========================= Збереження контактних даних =========================
// ========================= Збереження контактних даних =========================
// ========================= Збереження контактних даних =========================
// ========================= Збереження контактних даних =========================
// ========================= Збереження контактних даних =========================
// ========================= Збереження контактних даних =========================
// ========================= Збереження контактних даних =========================
window.saveUserData = async function () {
    const ip = await getUserIP();
    if (ip === "unknown") return;

    const visitorKey = ip.replace(/\./g, "_");
    const visitorRef = ref(db, "visitors/" + visitorKey);

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const city = document.getElementById("city").value.trim();
    const postOffice = document.getElementById("postOffice").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const description = document.getElementById("description").value.trim();

    await update(visitorRef, {
        firstName,
        lastName,
        city,
        postOffice,
        phone,
        email,
        description,
    });

    console.log("✅ Дані клієнта збережено у Firebase:", {
        firstName,
        lastName,
        city,
        postOffice,
        phone,
        email,
        description,
    });
};

// ========================= Обробка кнопки Save збередення даних у  formy y firebase сама кнопка =========================
// ========================= Обробка кнопки Save збередення даних у  formy y firebase сама кнопка =========================
// ========================= Обробка кнопки Save збередення даних у  formy y firebase сама кнопка =========================
// ========================= Обробка кнопки Save збередення даних у  formy y firebase сама кнопка =========================
const saveButton = document.getElementById("goToPayment");
if (saveButton) {
    saveButton.addEventListener("click", async () => {
        await window.saveUserData();
    });
}

// ========================= Автозаповнення форми =========================
// ========================= Автозаповнення форми =========================
// ========================= Автозаповнення форми =========================
// ========================= Автозаповнення форми =========================
// ========================= Автозаповнення форми =========================
// ========================= Автозаповнення форми =========================
// ========================= Автозаповнення форми =========================
// ========================= Автозаповнення форми =========================
// ========================= Автозаповнення форми =========================
// ========================= Автозаповнення форми =========================
// ========================= Автозаповнення форми =========================
// ========================= Автозаповнення форми =========================
window.loadUserData = async function () {
    const ip = await getUserIP();
    if (ip === "unknown") return;

    const visitorKey = ip.replace(/\./g, "_");
    const visitorRef = ref(db, "visitors/" + visitorKey);

    onValue(visitorRef, (snapshot) => {
        if (!snapshot.exists()) return;

        const data = snapshot.val();

        const setValue = (id, value) => {
            const el = document.getElementById(id);
            if (el) el.value = value || "";
        };

        setValue("firstName", data.firstName);
        setValue("lastName", data.lastName);
        setValue("city", data.city);
        setValue("postOffice", data.postOffice);
        setValue("phone", data.phone);
        setValue("email", data.email);
        setValue("description", data.description);

        console.log("✅ Дані підставлено у форму:", data);
    });
};

// ========================= Завантаження даних при завантаженні сторінки =========================
// ========================= Завантаження даних при завантаженні сторінки =========================
// ========================= Завантаження даних при завантаженні сторінки =========================
// ========================= Завантаження даних при завантаженні сторінки =========================
// ========================= Завантаження даних при завантаженні сторінки =========================
// ========================= Завантаження даних при завантаженні сторінки =========================
// ========================= Завантаження даних при завантаженні сторінки =========================
// ========================= Завантаження даних при завантаженні сторінки =========================
// ========================= Завантаження даних при завантаженні сторінки =========================
window.addEventListener("load", window.loadUserData);

// 🔹 Ініціалізація при завантаженні merch_card
// 🔹 Ініціалізація при завантаженні merch_card
// 🔹 Ініціалізація при завантаженні merch_card
// 🔹 Ініціалізація при завантаженні merch_card
// 🔹 Ініціалізація при завантаженні merch_card
// 🔹 Ініціалізація при завантаженні merch_card
// 🔹 Ініціалізація при завантаженні merch_card
// 🔹 Ініціалізація при завантаженні merch_card
// 🔹 Ініціалізація при завантаженні merch_card
// 🔹 Ініціалізація при завантаженні merch_card
// 🔹 Ініціалізація при завантаженні merch_card
document.addEventListener("DOMContentLoaded", initProductPage);

function initProductPage() {
    const card = document.querySelector(".product-card");
    if (!card) return;

    const productName = card.querySelector(".product-name");
    const productPrice = card.querySelector(".product-price");
    const productOpis = card.querySelector(".product-opis");
    const productDescription = card.querySelector(".product-description");

    const mainImage = document.querySelector(".main-image");
    const thumbsContainer = document.querySelector(".thumbs");

    const quantityInput = card.querySelector(".quantity-input");
    const plusBtn = card.querySelector(".btn-plus");
    const minusBtn = card.querySelector(".btn-minus");
    const addToCartBtn = document.getElementById("addToCartDynamic");

    // URL params
    // URL params
    // URL params
    // URL params
    // URL params

    const params = new URLSearchParams(window.location.search);

    const product = {
        name: params.get("name") ?? "Produkt",
        price: params.get("price") ?? "0.00",
        opis: params.get("opis") ?? "",
        description: params.get("description") ?? "",
        images: JSON.parse(params.get("images") || "[]"),
        link: window.location.href,
    };

    // текст
    productName.textContent = product.name;
    productPrice.textContent = `₴ ${product.price}`;
    productOpis.textContent = product.opis;
    productDescription.textContent = product.description;
    document.title = product.name;

    // фото
    // фото
    // фото
    // фото
    // фото
    // фото
    // фото

    if (product.images.length) {
        mainImage.src = product.images[0];
        thumbsContainer.innerHTML = "";

        product.images.forEach((src) => {
            const img = document.createElement("img");
            img.className = "thumb";
            img.src = src;

            img.addEventListener("click", () => {
                mainImage.src = src;

                thumbsContainer
                    .querySelectorAll(".thumb")
                    .forEach((t) => t.classList.remove("active"));

                img.classList.add("active");
            });

            thumbsContainer.appendChild(img);
        });
    }

    // кількість
    // кількість
    // кількість
    // кількість
    // кількість
    // кількість
    // кількість

    plusBtn?.addEventListener("click", () => {
        quantityInput.value = Number(quantityInput.value) + 1;
    });

    minusBtn?.addEventListener("click", () => {
        quantityInput.value = Math.max(1, Number(quantityInput.value) - 1);
    });

    // додати в кошик
    // додати в кошик
    // додати в кошик
    // додати в кошик
    // додати в кошик
    // додати в кошик
    // додати в кошик

    addToCartBtn?.addEventListener("click", () => {
        addUserFromInput(
            product.images[0] ?? "",
            product.name,
            product.price,
            product.link,
            Number(quantityInput.value) || 1
        );
    });

    // кнопки наступне і попереднє фото
    // кнопки наступне і попереднє фото
    // кнопки наступне і попереднє фото
    // кнопки наступне і попереднє фото
    // кнопки наступне і попереднє фото
    // кнопки наступне і попереднє фото
    // кнопки наступне і попереднє фото
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    // Приклад масиву фото
    const images = product.images; // або будь-який масив URL

    let currentIndex = 0;

    // Встановлюємо перше фото
    mainImage.src = images[0];
    thumbsContainer.innerHTML = "";

    // Створюємо мініатюри
    images.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        if (index === 0) img.classList.add("active");

        img.addEventListener("click", () => {
            currentIndex = index;
            updateMainImage();
        });

        thumbsContainer.appendChild(img);
    });

    // Функція оновлення головного фото і активної мініатюри
    function updateMainImage() {
        mainImage.src = images[currentIndex];

        thumbsContainer.querySelectorAll("img").forEach((t, i) => {
            t.classList.toggle("active", i === currentIndex);
        });
    }

    function updateMainImage() {
        mainImage.src = images[currentIndex];

        thumbsContainer.querySelectorAll("img").forEach((t, i) => {
            t.classList.toggle("active", i === currentIndex);
        });

        // Прокручуємо активну мініатюру по центру контейнера
        const activeThumb = thumbsContainer.querySelector("img.active");
        if (activeThumb) {
            activeThumb.scrollIntoView({
                behavior: "smooth",
                block: "nearest", // по вертикалі, якщо потрібно
                inline: "center", // по горизонталі
            });
        }
    }

    // Стрілки
    prevBtn.addEventListener("click", () => {
        currentIndex--;
        if (currentIndex < 0) currentIndex = images.length - 1;
        updateMainImage();
    });

    nextBtn.addEventListener("click", () => {
        currentIndex++;
        if (currentIndex >= images.length) currentIndex = 0;
        updateMainImage();
    });

    // на весь екран і збільшення
    // на весь екран і збільшення
    // на весь екран і збільшення
    // на весь екран і збільшення
    // на весь екран і збільшення
    // на весь екран і збільшення
    // на весь екран і збільшення
    // на весь екран і збільшення
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxClose = document.getElementById("lightbox-close");

    let zoomed = false; // стан збільшення

    // Відкриття lightbox
    mainImage.addEventListener("click", () => {
        lightboxImg.src = mainImage.src;
        lightbox.style.display = "flex";
        lightboxImg.classList.remove("zoom-out");
        lightboxImg.classList.add("zoom-in");
        zoomed = false;
    });

    // Відкриття lightbox по натиску на головне фото
    mainImage.addEventListener("click", () => {
        // знаходимо індекс головного фото в масиві images
        const index = images.indexOf(mainImage.src);
        // якщо не знайдено, беремо 0
        openLightbox(index >= 0 ? index : 0);
    });

    // Toggle збільшення/зменшення по кліку на фото
    // Toggle збільшення/зменшення по кліку на фото
    // Toggle збільшення/зменшення по кліку на фото
    // Toggle збільшення/зменшення по кліку на фото
    // Toggle збільшення/зменшення по кліку на фото
    // Toggle збільшення/зменшення по кліку на фото
    // Toggle збільшення/зменшення по кліку на фото
    // Toggle збільшення/зменшення по кліку на фото

    lightboxImg.addEventListener("click", (e) => {
        const rect = lightboxImg.getBoundingClientRect();

        // координати кліку відносно зображення
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

        // transform-origin у відсотках
        const originX = (offsetX / rect.width) * 100;
        const originY = (offsetY / rect.height) * 100;

        // Збільшення від точки кліку
        if (!zoomed) {
            lightboxImg.style.transformOrigin = `${originX}% ${originY}%`;
            lightboxImg.style.transform = "scale(3.0)";
            zoomed = true;
            lightboxImg.classList.add("zoomed"); // додаємо клас для zoom-out курсора
        } else {
            // Зменшення назад, від тієї ж точки
            lightboxImg.style.transform = "scale(1)";
            zoomed = false;
            // залишаємо transformOrigin від точки кліку
            lightboxImg.classList.remove("zoomed"); // повертаємо zoom-in курсор
        }
    });

    // Закриття по хрестику
    lightboxClose.addEventListener("click", () => {
        lightbox.style.display = "none";
        lightboxImg.style.transform = "scale(1)";
        lightboxImg.classList.remove("zoom-out");
        lightboxImg.classList.add("zoom-in");
        zoomed = false;

        // скролбар відновлення
        closeLightbox();
    });

    // Закриття по ESC
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            lightbox.style.display = "none";
            lightboxImg.style.transform = "scale(1)";
            lightboxImg.classList.remove("zoom-out");
            lightboxImg.classList.add("zoom-in");
            zoomed = false;

            // скролбар відновлення
            closeLightbox();
        }
    });

    // Закриття по кліку на фон
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
            lightboxImg.style.transform = "scale(1)";
            lightboxImg.classList.remove("zoom-out");
            lightboxImg.classList.add("zoom-in");
            zoomed = false;

            // скролбар відновлення
            closeLightbox();
        }
    });

    // мініатюри і кнопки на вест екран
    // мініатюри і кнопки на вест екран
    // мініатюри і кнопки на вест екран
    // мініатюри і кнопки на вест екран
    // мініатюри і кнопки на вест екран
    // мініатюри і кнопки на вест екран
    // мініатюри і кнопки на вест екран
    // мініатюри і кнопки на вест екран
    // мініатюри і кнопки на вест екран

    const lightboxPrev = document.getElementById("lightbox-prev");
    const lightboxNext = document.getElementById("lightbox-next");
    const lightboxThumbs = document.getElementById("lightbox-thumbs");

    function openLightbox(index) {
        currentIndex = index;
        lightboxImg.src = images[currentIndex];
        lightbox.style.display = "flex";
        updateThumbs();
    }

    function updateThumbs() {
        lightboxThumbs.innerHTML = "";

        images.forEach((src, i) => {
            const img = document.createElement("img");
            img.src = src;
            if (i === currentIndex) img.classList.add("active");
            img.addEventListener("click", () => openLightbox(i));
            lightboxThumbs.appendChild(img);
        });

        // Центруємо активну мініатюру після рендеру
        requestAnimationFrame(() => {
            const activeThumb = lightboxThumbs.querySelector("img.active");
            if (activeThumb) {
                const containerRect = lightboxThumbs.getBoundingClientRect();
                const thumbRect = activeThumb.getBoundingClientRect();

                const scrollLeft =
                    lightboxThumbs.scrollLeft +
                    thumbRect.left -
                    containerRect.left -
                    containerRect.width / 2 +
                    thumbRect.width / 2;

                lightboxThumbs.scrollTo({
                    left: scrollLeft,
                    behavior: "smooth",
                });
            }
        });
    }

    lightboxPrev.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        openLightbox(currentIndex);

        // прибираєм zoom
        // прибираєм zoom
        // прибираєм zoom
        lightboxImg.style.transform = "scale(1)";
        zoomed = false;
        // залишаємо transformOrigin від точки кліку
        lightboxImg.classList.remove("zoomed"); // повертаємо zoom-in курсор
    });

    lightboxNext.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        openLightbox(currentIndex);

        // прибираєм zoom
        // прибираєм zoom
        // прибираєм zoom
        lightboxImg.style.transform = "scale(1)";
        zoomed = false;
        // залишаємо transformOrigin від точки кліку
        lightboxImg.classList.remove("zoomed"); // повертаємо zoom-in курсор
    });

    lightboxClose.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") lightbox.style.display = "none";
    });

    // Приклад відкриття lightbox з головного зображення

    // додавання блокування скролу
    // додавання блокування скролу
    // додавання блокування скролу
    // додавання блокування скролу
    // додавання блокування скролу
    // додавання блокування скролу
    // додавання блокування скролу
    // додавання блокування скролу
    // додавання блокування скролу
    // додавання блокування скролу
    function openLightbox(index) {
        currentIndex = index;
        lightboxImg.src = images[currentIndex];
        lightbox.style.display = "flex";
        updateThumbs();

        // Забороняємо скрол сторінки
        document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
        lightbox.style.display = "none";

        // Відновлюємо скрол
        document.body.style.overflow = "";
    }

    window.currentProduct = product;
}

// 🔹 Додавання товару у кошик в merch_card
// 🔹 Додавання товару у кошик в merch_card
// 🔹 Додавання товару у кошик в merch_card
// 🔹 Додавання товару у кошик в merch_card
// 🔹 Додавання товару у кошик в merch_card
// 🔹 Додавання товару у кошик в merch_card
// 🔹 Додавання товару у кошик в merch_card
// 🔹 Додавання товару у кошик в merch_card
// 🔹 Додавання товару у кошик в merch_card
// 🔹 Додавання товару у кошик в merch_card
// 🔹 Додавання товару у кошик в merch_card
// 🔹 Додавання товару у кошик в merch_card
// 🔹 Додавання товару у кошик в merch_card
// 🔹 Додавання товару у кошик в merch_card
// 🔹 Додавання товару у кошик в merch_card
// 🔹 Додавання товару у кошик в merch_card

async function addUserFromInput(image, name, price, link, amount = 1) {
    const numericPrice = parseFloat(price) || 0;
    const ip = await getUserIP();
    if (ip === "unknown") return console.error("IP unknown");

    const userKey = ip.replace(/\./g, "_");
    const userRef = ref(db, "visitors/" + userKey);
    const snapshot = await get(userRef);
    let products = snapshot.exists() ? snapshot.val().products || [] : [];

    const existingIndex = products.findIndex((p) => p.image === image);
    if (existingIndex > -1) {
        products[existingIndex].amount = amount;
        products[existingIndex].summary = numericPrice * amount;
    } else {
        products.push({
            image,
            name,
            link,
            amount,
            price: numericPrice,
            summary: numericPrice * amount,
        });
    }

    const totalPay = products.reduce((sum, p) => sum + (p.summary || 0), 0);
    await update(userRef, {
        products,
        pay: totalPay,
        timestamp: new Date().toLocaleString("uk-UA"),
    });

    //<!-- ініціаліщація товарів вкршику щоб появились -->
    //<!-- ініціаліщація товарів вкршику щоб появились -->

    await update(userRef, {
        products,
        pay: totalPay,
        timestamp: new Date().toLocaleString("uk-UA"),
    });

    // ⬇️ ДОДАЙ ЦЕ
    loadCartRealtime(products);

    //<!-- відкритя кошика після натискання кнопки -->
    //<!-- відкритя кошика після натискання кнопки -->
    //<!-- відкритя кошика після натискання кнопки -->

    sideCart.classList.add("active");
    cartBackdrop.classList.add("active");
}









