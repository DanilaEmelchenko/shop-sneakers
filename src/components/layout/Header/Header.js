import styles from "./Header.module.scss";

const dataNav = [
  {
    id: 1,
    name: "1205 руб.",
    image: "/images/cart.svg",
    alt: "Корзина",
  },
  { id: 2, name: "Закладки", image: "/images/bookmarks.svg", alt: "Закладки" },
  {
    id: 3,
    name: "Профиль",
    image: "/images/profile.svg",
    alt: "Профиль",
  },
];

export function header() {
  let header = document.createElement("header");
  header.className = `${styles.header}`;

  //Блочный элемент с лого, тайтл
  let logo = document.createElement("div");
  logo.className = `${styles.logo}`;

  let logoLink = document.createElement("a");
  logoLink.href = "#";
  logoLink.className = `${styles.logoLink}`;

  let logoImage = document.createElement("img");
  logoImage.src = "/images/logo.svg";
  logoImage.alt = "Логотип компании";
  logoImage.className = `${styles.logoImage}`;

  let logoTitle = document.createElement("h1");
  logoTitle.className = `${styles.logoTitle}`;
  logoTitle.textContent = "REACT SNEAKERS";

  let logoSubTitle = document.createElement("span");
  logoSubTitle.className = `${styles.logoSubTitle}`;
  logoSubTitle.textContent = "Магазин лучших кроссовок";

  //Блочный элемент с навигацией
  let nav = document.createElement("nav");
  nav.className = `${styles.nav}`;

  let navUl = document.createElement("ul");
  navUl.className = `${styles.navUl}`;

  dataNav.map((item) => {
    let navLi = document.createElement("li");
    navLi.className = `${styles.navLi}`;

    let navLiLink = document.createElement("a");
    navLiLink.className = `${styles.navLiLink}`;
    navLiLink.href = "#";
    navLiLink.textContent = `${item.name}`;

    let navLiImage = document.createElement("img");
    navLiImage.src = `${item.image}`;
    navLiImage.alt = `${item.alt}`;

    navLi.append(navLiImage, navLiLink);
    navUl.append(navLi);
  });

  logoLink.append(logoImage);
  nav.append(navUl);
  logo.append(logoLink, logoTitle, logoSubTitle);

  header.append(logo, nav);

  return header;
}
