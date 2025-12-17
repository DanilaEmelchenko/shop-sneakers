import { sectionAllProducts } from "../../components/SectionAllProducts/SectionAllProducts";
import { sectionHero } from "../../components/SectionHero/SectionHero";
import styles from "./HomePage.module.scss";

export function homePage() {
  let fragment = document.createDocumentFragment();
  fragment.append(sectionHero(), sectionAllProducts());

  return fragment;
}
