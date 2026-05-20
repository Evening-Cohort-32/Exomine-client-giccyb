//Invoke mineralShop function and display it's html in <main id="content">

import { handleChoices } from "./changeListener.js";
import { mineralShop } from "./mineralShop.js";

const content = document.getElementById("content");

export const render = async () => {
  content.innerHTML = await mineralShop();
};

document.addEventListener("change", handleChoices);
document.addEventListener("stateChanged", render);

render();
