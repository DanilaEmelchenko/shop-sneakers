import styles from "./HomePage.module.scss";

export function homePage() {
  let sectionHero = document.createElement("section");
  sectionHero.className = `${styles.sectionHero}`;

  let heroTitle = document.createElement("h1");
  heroTitle.textContent = "Stan Smith,";
  heroTitle.className = `${styles.heroTitle}`;

  let spanTitle = document.createElement("span");
  spanTitle.textContent = "Forever!";
  spanTitle.className = `${styles.spanTitle}`;

  let heroButton = document.createElement("button");
  heroButton.textContent = "Купить";
  heroButton.className = `${styles.heroButton}`;

  let heroImage = document.createElement("img");
  heroImage.src = "/images/banner.png";
  heroImage.alt = "Баннер";
  heroImage.className = `${styles.heroImage}`;

  let heroLogo = document.createElement("img");
  heroLogo.src = "/images/logo-herro.svg";
  heroLogo.alt = "Лого";
  heroLogo.className = `${styles.heroLogo}`;

  heroTitle.append(spanTitle);

  sectionHero.append(heroTitle, heroButton, heroImage, heroLogo);

  return sectionHero;
}
