const cartButton = document.querySelector(".cart-button");
const loginButton = document.querySelector(".login-button");
const signUpButton = document.querySelector(".sign-up-button");
const cartForm = document.querySelector(".cart-form");
const loginForm = document.querySelector(".login-form");
const signUpForm = document.querySelector(".sign-up-form");
const menuWrapp = document.querySelector(".menu_wrapp");
const orderButtonWrapp = document.querySelector(".order-Button_Wrapp");
const sendOrderButton = document.querySelector(".send_order");
let quantity = {
  burger: 0,
  piza: 0,
};
let total = {
  burger: 0,
  piza: 0,
};
// let foodInfo = {
//   burger: {
//     id: 1,
//     name: "Бургер",
//     price: 500,
//     brand: "Яндекс",
//     category: "Еда",
//   },
//   piza: {
//     id: 2,
//     name: "Пицца",
//     price: 1000,
//     brand: "Яндекс",
//     category: "Еда",
//   },
// };

cartButton.addEventListener("click", () => {
  if (cartForm.style.transform === "translate(-50%, -50%) scale(0)") {
    ym(97087644, "hit", "https://ver1zion.github.io/form_validator/cart", {
      title: "Корзина",
      referer: "https://ver1zion.github.io/form_validator/",
    });
    cartForm.style.transform = "translate(-50%, -50%) scale(1)";
    cartForm.style.zIndex = "10";
    signUpForm.style.transform = "translate(-50%, -50%) scale(0)";
    signUpForm.style.zIndex = "1";
    loginForm.style.transform = "translate(-50%, -50%) scale(0)";
    loginForm.style.zIndex = "1";
  } else {
    cartForm.style.transform = "translate(-50%, -50%) scale(0)";
  }
});

loginButton.addEventListener("click", () => {
  if (loginForm.style.transform === "translate(-50%, -50%) scale(0)") {
    loginForm.style.transform = "translate(-50%, -50%) scale(1)";
    loginForm.style.zIndex = "10";
    signUpForm.style.transform = "translate(-50%, -50%) scale(0)";
    signUpForm.style.zIndex = "1";
    cartForm.style.transform = "translate(-50%, -50%) scale(0)";
    cartForm.style.zIndex = "1";
  } else {
    loginForm.style.transform = "translate(-50%, -50%) scale(0)";
  }
});

signUpButton.addEventListener("click", () => {
  if (signUpForm.style.transform === "translate(-50%, -50%) scale(0)") {
    signUpForm.style.transform = "translate(-50%, -50%) scale(1)";
    signUpForm.style.zIndex = "10";
    loginForm.style.transform = "translate(-50%, -50%) scale(0)";
    loginForm.style.zIndex = "1";
    cartForm.style.transform = "translate(-50%, -50%) scale(0)";
    cartForm.style.zIndex = "1";
  } else {
    signUpForm.style.transform = "translate(-50%, -50%) scale(0)";
  }
});

window.dataLayer = window.dataLayer || [];

sendOrderButton.addEventListener("click", () => {
  let purchaseInfo = {
    ecommerce: {
      currencyCode: "RUB",
      purchase: {
        actionField: {
          id: "TEST",
          revenue: 0,
        },
        products: [],
      },
    },
  };

  if (quantity.burger > 0 || quantity.piza > 0) {
    purchaseInfo.ecommerce.purchase.actionField.revenue =
      total.burger + total.piza;

    if (quantity.burger > 0) {
      purchaseInfo.ecommerce.purchase.products.push({
        id: "1",
        name: "Бургер",
        price: 500,
        brand: "Яндекс",
        category: "Еда",
        quantity: quantity.burger,
      });
    }

    if (quantity.piza > 0) {
      purchaseInfo.ecommerce.purchase.products.push({
        id: "2",
        name: "Пицца",
        price: 1000,
        brand: "Яндекс",
        category: "Еда",
        quantity: quantity.piza,
      });
    }

    window.dataLayer.push(purchaseInfo);
  }
});

menuWrapp.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("card-button") &&
    event.target.closest(".burger")
  ) {
    quantity.burger += 1;
    total.burger += 500;
    window.dataLayer.push({
      ecommerce: {
        currencyCode: "RUB",
        add: {
          products: [
            {
              id: "1",
              name: "Бургер",
              price: 500,
              brand: "Яндекс",
              category: "Еда",
              quantity: 1,
            },
          ],
        },
      },
    });
    window.dataLayer.push({
      // бредик этот удалить потом
      ecommerce: {
        currencyCode: "RUB",
        detail: {
          products: [
            {
              id: "12",
              name: "Бургеррр",
              price: 520,
              brand: "Яндекс",
              category: "Еда",
            },
          ],
        },
      },
    });
    console.log(quantity.burger);
    let quantityBurgers = cartForm.querySelector(".quantity_burgers");
    let totalSum = cartForm.querySelector(".total");

    if (!quantityBurgers) {
      quantityBurgers = document.createElement("div");
      quantityBurgers.classList.add("quantity_burgers");
      cartForm.prepend(quantityBurgers);
    }

    if (!totalSum) {
      totalSum = document.createElement("div");
      totalSum.classList.add("total");
      orderButtonWrapp.prepend(totalSum);
    }

    totalSum.innerText = `Rub: ${total.piza + total.burger}`;
    quantityBurgers.innerText = `Burger: ${quantity.burger}`;
  }

  if (
    event.target.classList.contains("card-button") &&
    event.target.closest(".piza")
  ) {
    quantity.piza += 1;
    total.piza += 1000;
    window.dataLayer.push({
      ecommerce: {
        currencyCode: "RUB",
        add: {
          products: [
            {
              id: "2",
              name: "Пицца",
              price: 1000,
              brand: "Яндекс",
              category: "Еда",
              quantity: 1,
            },
          ],
        },
      },
    });
    console.log(quantity.piza);
    let quantityPizas = cartForm.querySelector(".quantity_pizas");
    let totalSum = cartForm.querySelector(".total");

    if (!quantityPizas) {
      quantityPizas = document.createElement("div");
      quantityPizas.classList.add("quantity_pizas");
      cartForm.prepend(quantityPizas);
    }

    if (!totalSum) {
      totalSum = document.createElement("div");
      totalSum.classList.add("total");
      orderButtonWrapp.prepend(totalSum);
    }

    totalSum.innerText = `Rub: ${total.piza + total.burger}`;
    quantityPizas.innerText = `Piza: ${quantity.piza}`;
  }
});

ym(97087644, "userParams", {
  status: "unauthorized",
});

ym(97087644, "params", {
  Platform: navigator.userAgentData.platform,
  Mobile: navigator.userAgentData.mobile,
});

const element = document.querySelector(".test2");
const colors = ["blue", "green", "red"];
let currentColorIndex = 0;

// const datas = [
//   {
//     ecommerce: [
//       {
//         purchase: {
//           actionField: { id: "2415", revenue: "4900" },
//           products: [
//             {
//               id: "070-1",
//               name: 'Кожаная сумка "Becker"',
//               price: "4900",
//               category: "Сумки мужские",
//               position: 1,
//               quantity: 1,
//             },
//           ],
//         },
//         currencyCode: "RUB",
//       },
//     ],
//   },
// ];

// function convertEcommerceArrayToObject(dataLayer) {
//   const newDataLayer = dataLayer.map((item) => {
//     if (item.ecommerce && Array.isArray(item.ecommerce)) {
//       const ecommerceObject = item.ecommerce.reduce((acc, curr) => {
//         return {
//           ...acc,
//           ...curr,
//         };
//       }, {});
//       return {
//         ...item,
//         ecommerce: ecommerceObject,
//       };
//     }
//     return item;
//   });
//   return newDataLayer;
// }

// const newDataLayer = convertEcommerceArrayToObject(datas);

// (window.dataLayer = window.dataLayer || []).push(...newDataLayer);