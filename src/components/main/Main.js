import { homePage } from "../../pages/HomePage/HomePage";

export function main() {
  let main = document.createElement("main");
  main.append(homePage());

  return main;
}
