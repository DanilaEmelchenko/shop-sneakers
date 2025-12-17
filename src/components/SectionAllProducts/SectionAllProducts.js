import { products } from "../../../data/products";
import styles from "./SectionAllProducts.module.scss";

export function sectionAllProducts() {
  const sectionAllProducts = document.createElement("section");
  sectionAllProducts.className = styles.sectionAllProducts;

  //Заголовок
  const productsDivTitle = document.createElement("div");
  productsDivTitle.className = styles.productsDivTitle;

  const productsTitle = document.createElement("h1");
  productsTitle.className = styles.productsTitle;
  productsTitle.textContent = "Все кроссовки";

  const productsInputSearch = document.createElement("input");
  productsInputSearch.className = styles.productsInputSearch;

  //Карточки продуктов
  const allProductsCarts = document.createElement("div");
  allProductsCarts.className = styles.allProductsCarts;

  products.forEach((item) => {
    const allProductsCart = document.createElement("div");
    allProductsCart.className = styles.allProductsCart;
    allProductsCart.dataset.id = item.id;

    const allProductsCartImage = document.createElement("img");
    allProductsCartImage.className = styles.allProductsCartImage;
    allProductsCartImage.src = item.image;

    const allProductsCartTitle = document.createElement("h3");
    allProductsCartTitle.className = styles.allProductsCartTitle;
    allProductsCartTitle.textContent = item.name;

    const allProductsCartMainPrice = document.createElement("div");
    allProductsCartMainPrice.className = styles.allProductsCartMainPrice;

    const allProductsCartPriceTitle = document.createElement("p");
    allProductsCartPriceTitle.className = styles.allProductsCartPriceTitle;
    allProductsCartPriceTitle.textContent = "Цена:";

    const allProductsCartPrice = document.createElement("p");
    allProductsCartPrice.className = styles.allProductsCartPrice;
    allProductsCartPrice.textContent = item.price;

    const buttonAddToCart = document.createElement("img");
    buttonAddToCart.className = styles.buttonAddToCart;
    buttonAddToCart.src = "/images/addToCart.svg";
    buttonAddToCart.alt = "Добавить";

    const addToBookmarks = document.createElement("img");
    addToBookmarks.src = "/images/addToBookmarks.svg";
    addToBookmarks.alt = "Добавить в избранное";
    addToBookmarks.className = styles.addToBookmarks;

    allProductsCartMainPrice.append(
      allProductsCartPriceTitle,
      allProductsCartPrice,
      buttonAddToCart
    );
    allProductsCart.append(
      addToBookmarks,
      allProductsCartImage,
      allProductsCartTitle,
      allProductsCartMainPrice
    );
    allProductsCarts.append(allProductsCart);
  });

  productsDivTitle.append(productsTitle, productsInputSearch);
  sectionAllProducts.append(productsDivTitle, allProductsCarts);

  return sectionAllProducts;
}
