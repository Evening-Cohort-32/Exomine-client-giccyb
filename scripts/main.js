//Invoke mineralShop function and display it's html in <main id="content">

import { mineralShopHTML } from "./mineralShop.js";

const content = document.getElementById("content");

const render = async () => {
  content.innerHTML = await mineralShopHTML();
};

render();
