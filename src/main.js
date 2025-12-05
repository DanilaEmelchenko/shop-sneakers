import "./scss/index.scss";
import { header } from "./components/layout/Header/Header";
import { main } from "./components/main/Main";

let line = document.createElement("div");
line.className = "line";

document.querySelector("#app").append(header(), line, main());
