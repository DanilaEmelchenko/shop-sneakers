import "./scss/index.scss";
import { header } from "./components/layout/Header/Header";

let line = document.createElement("div");
line.className = "line";

document.querySelector("#app").append(header(), line);
