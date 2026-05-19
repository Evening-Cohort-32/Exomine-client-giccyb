//Invokes functions that create HTML elements
//Creates HTML for the entire mineral shop webpage

import { governorList } from "./governors.js";
import { coloniesList } from "./colonies.js";
// import { inventoryMinerals } from "./inventoryMinerals.js";
// import { availableMinerals } from "./availableMinerals.js";
// import { submitButton } from "./submitButton.js";

export const mineralShop = async () => {
  return `
    <h1>Solar System Mining Market</h1>

    <section class="top-row">
      <div class="selectors">
        ${await governorList()}
        
      </div>
      <div class="colony-display">
        
      </div>
    </section>

<section class="bottom-row">
      <div class="minerals-display">
        
      </div>
      <div class="cart-display">
        
      </div>
    </section>

    `;
};
