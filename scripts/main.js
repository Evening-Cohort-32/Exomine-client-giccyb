//Invoke mineralShop function and display it's html in <main id="content">

import { mineralShop } from "./mineralShop.js";

const content = document.getElementById("content");

const render = async () => {
  content.innerHTML = await mineralShop();
};

render();
