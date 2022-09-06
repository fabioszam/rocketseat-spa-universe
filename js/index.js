import { Router } from "./router.js";

const router = new Router();
router.add("/", "/pages/home.html");
router.add("/universo", "/pages/universo.html");
router.add("/exploracao", "/pages/exploracao.html");
router.add(404, "/pages/404.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();
window.universe = () => universe();

const buttonHome = document.querySelector(".home");
const buttonUniverse = document.querySelector(".universo");
const buttonExploration = document.querySelector(".exploracao");

buttonHome.classList.remove("show");

buttonHome.addEventListener("click", function () {
  if (buttonHome.classList.contains("show")) {
    buttonHome.classList.remove("show");
    buttonUniverse.classList.add("show");
    buttonExploration.classList.add("show");
  }
});

buttonUniverse.addEventListener("click", function () {
  if (buttonUniverse.classList.contains("show")) {
    buttonUniverse.classList.remove("show");
    buttonHome.classList.add("show");
    buttonExploration.classList.add("show");
  }
});

buttonExploration.addEventListener("click", function () {
  if (buttonExploration.classList.contains("show")) {
    buttonExploration.classList.remove("show");
    buttonHome.classList.add("show");
    buttonUniverse.classList.add("show");
  }
});

function universe() {
  if (buttonUniverse.classList.contains("show")) {
    buttonUniverse.classList.remove("show");
    buttonHome.classList.add("show");
    buttonExploration.classList.add("show");
  }
}

