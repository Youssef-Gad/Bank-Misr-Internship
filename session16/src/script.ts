import {
  allCategories,
  fetchAllProducts,
  fetchProduct,
  getProductsByCategory,
  searchProduct,
} from "./api";

interface product {
  id: number;
  description: string;
  images: string;
  title: string;
  category: string;
  price: string;
  rating: string;
}

function renderCards(products: any[]) {
  products.map((product: product) => {
    let { description, images, title } = product;

    let cards = document.querySelector(".cards") as HTMLDivElement;
    let card = document.createElement("div") as HTMLDivElement;
    let cardImage = document.createElement("img");
    let cardBody = document.createElement("div");
    let cardTitle = document.createElement("h5");
    let cardTitleText = document.createTextNode(title);
    let cardPara = document.createElement("p");
    let cardParaText = document.createTextNode(description);
    let cardBtn = document.createElement("a");
    let cardBtnText = document.createTextNode("Add To Cart");

    card.style.width = "18rem";
    card.classList.add(
      "card",
      "d-flex",
      "flex-column",
      "justify-content-between"
    );
    card.classList.add("border", "col-4", "p-4");
    cardImage.classList.add("card-img-top");
    cardBody.classList.add("card-body");
    cardTitle.classList.add("card-title", "mb-3", "mt-3");
    cardPara.classList.add("card-text");
    cardBtn.classList.add("btn", "btn-primary", "mt-3");

    cardImage.src = images;

    cardPara.appendChild(cardParaText);
    cardTitle.appendChild(cardTitleText);
    cardBtn.appendChild(cardBtnText);
    cardBody.appendChild(cardImage);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardPara);
    card.appendChild(cardBody);
    card.appendChild(cardBtn);
    cards.appendChild(card);

    card.addEventListener("click", () => {
      let clickedProductId;
      clickedProductId = product.id;
      handleOnClickProduct(clickedProductId);
    });
  });
}

function handleOnClickProduct(clickedProductId: number) {
  fetchProduct(clickedProductId).then((product: product) => {
    const { images, category, description, title, price, rating } = product;

    let cards = document.querySelector(".cards") as HTMLDivElement;
    let prodcutDiv = document.querySelector(".product") as HTMLDivElement;
    let backBtn = document.querySelector(".back-btn") as HTMLButtonElement;

    backBtn.classList.remove("d-none");
    backBtn.classList.add("d-block");

    cards.classList.add("d-none");
    prodcutDiv.classList.remove("d-none");
    prodcutDiv.classList.add("d-flex");

    let productImage = document.querySelector(
      ".product-img"
    ) as HTMLImageElement;
    let productTitle = document.querySelector(
      ".product-title"
    ) as HTMLParagraphElement;
    let productDescription = document.querySelector(
      ".product-description"
    ) as HTMLParagraphElement;
    let productCategory = document.querySelector(
      ".product-category"
    ) as HTMLParagraphElement;
    let productPrice = document.querySelector(
      ".product-price"
    ) as HTMLParagraphElement;
    let productRating = document.querySelector(
      ".product-rating"
    ) as HTMLParagraphElement;

    productImage.src = images;
    productTitle.innerHTML = title;
    productDescription.innerHTML = description;
    productCategory.innerHTML = category;
    productPrice.innerHTML = `${price}$`;
    productRating.innerHTML = `Rating: ${rating}`;

    backBtn.addEventListener("click", () => {
      backBtn.classList.remove("d-block");
      backBtn.classList.add("d-none");

      prodcutDiv.classList.remove("d-flex");
      prodcutDiv.classList.add("d-none");

      cards.classList.add("d-block");
      cards.classList.remove("d-none");
    });
  });
}

// Handle Cart items
let cart: any[] = [];
let cartBtn = document.querySelector(".cart-btn") as HTMLButtonElement;
fetchAllProducts().then((products) => {
  renderCards(products);
  let cards = document.querySelectorAll(".card");
  Array.from(cards).map((card) => {
    let cardBtn = card.lastChild;
    if (cardBtn)
      cardBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        cart.push(card);
        cardBtn.nodeValue = "Added To Cart";
      });
  });
});

cartBtn.addEventListener("click", () => {
  let cards = document.querySelector(".cards") as HTMLDivElement;
  Array.from(cards.children).map((chid) => chid.remove());
  cart.map((product) => {
    cards.appendChild(product);
  });
});

// Handle Search input
let searchForm = document.querySelector(".search-form") as HTMLFormElement;
let searchBtn = document.querySelector(".search-btn") as HTMLButtonElement;
let searchInput = document.querySelector(".search-input") as HTMLInputElement;
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

searchBtn.addEventListener("click", () => {
  let serachArea = document.querySelector(".serach-area") as HTMLDivElement;
  let productName: string = "";
  if (searchInput.value !== "") {
    productName = searchInput.value;
    searchInput.value = "";
    searchBtn.innerHTML = "Clear";
  } else {
    Array.from(serachArea.children).map((chid) => chid.remove());
    searchBtn.innerHTML = "Search";
  }
  searchProduct(productName).then((productsObj) => {
    productsObj.products.map((product: product) => {
      let productDiv = document.createElement("div");
      let title = document.createElement("p");
      let titleText = document.createTextNode(product.title);
      let image = document.createElement("img");

      image.src = product.images;

      title.appendChild(titleText);
      productDiv.appendChild(image);
      productDiv.appendChild(title);
      serachArea.appendChild(productDiv);

      productDiv.addEventListener("click", () => {
        let clickedProductId = product.id;
        handleOnClickProduct(clickedProductId);
        Array.from(serachArea.children).map((chid) => chid.remove());
      });
    });
  });
});

// Handle Sidenav filtering
let allProductsBtn = document.querySelector(".all-products") as HTMLDivElement;
allProductsBtn.addEventListener("click", () => {
  fetchAllProducts().then((products) => renderCards(products));
});

let sideNav = document.querySelector(".side-nav") as HTMLElement;
allCategories().then((data) => {
  data.map((category: any) => {
    let categoryBtn = document.createElement("button");
    categoryBtn.classList.add("btn", "btn-secondary");

    categoryBtn.innerHTML = category.name;
    sideNav.appendChild(categoryBtn);

    categoryBtn.addEventListener("click", () => {
      let cards = document.querySelector(".cards") as HTMLDivElement;
      let category = categoryBtn.innerHTML;

      getProductsByCategory(category).then((data) => {
        Array.from(cards.children).map((chid) => chid.remove());
        renderCards(data.products);
      });
    });
  });
});
