const basketWithCards = document.querySelector(".basket");

const secFuture = document.querySelector(".future-main");
secFuture.addEventListener("mouseover", (event) => {
  if (event.target.className == "future-main-photo-button") {
    event.target.onclick = () => {
      let elementForBasket = dataObjects[event.target.id - 1];
      basketWithCards.insertAdjacentHTML(
        "beforeend",
        `
            <div class="card">
            <img src="${elementForBasket.img}" alt="${elementForBasket.title}" class="photo" />
            <div class="info">
              <h2 class="info__heading">${elementForBasket.title}</h2>
              <div class="info__content">
                <p class="info__content-text">
                  Price: <span class="color-pink">${elementForBasket.price}</span>
                </p>
                <p class="info__content-text">
                  Color: <span class="color-grey">${elementForBasket.color}</span>
                </p>
                <p class="info__content-text">
                  Size: <span class="color-grey">${elementForBasket.size}</span>
                </p>
                <p class="info__content-text">
                  Quantity: <input class="quantity" type="number" value="${elementForBasket.quantity}" />
                </p>
              </div>
              <button class="button-close">
                <img class="img-close" src="./img/cross.svg" alt="close">
              </button>
            </div>
          </div>
            `
      );
    };
  }
});

const buttonAllProducts = document.querySelector(".future-push");
buttonAllProducts.addEventListener("click", (ev) => {
  dataObjects.forEach((element) => {
    basketWithCards.insertAdjacentHTML(
      "beforeend",
      `
        <div class="card">
        <img src="${element.img}" alt="${element.title}" class="photo" />
        <div class="info">
          <h2 class="info__heading">${element.title}</h2>
          <div class="info__content">
            <p class="info__content-text">
              Price: <span class="color-pink">${element.price}</span>
            </p>
            <p class="info__content-text">
              Color: <span class="color-grey">${element.color}</span>
            </p>
            <p class="info__content-text">
              Size: <span class="color-grey">${element.size}</span>
            </p>
            <p class="info__content-text">
              Quantity: <input class="quantity" type="number" value="${element.quantity}" />
            </p>
          </div>
          <button class="button-close">
            <img class="img-close" src="./img/cross.svg" alt="close">
          </button>
        </div>
      </div>
        `
    );
  });
});

basketWithCards.addEventListener("mouseover", (event) => {
  if (event.target.className === "button-close" || event.target.className === "img-close") {
    event.target.onclick = () => {
      event.target.closest(".card").remove();
    };
  }
});
