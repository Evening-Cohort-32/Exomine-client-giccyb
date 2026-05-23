//Invokes functions that create HTML elements
//Creates HTML for the entire mineral shop webpage

import { governorList } from "./governors.js";
import { facilitySelectHtml } from "./facilities.js";
import { inventoryMinerals } from "./inventoryMinerals.js";
import { getState } from "./TransientState.js";
import { availableMinerals } from "./availableMinerals.js";
import { submitButton } from "./submitButton.js";

export const mineralShop = async () => {
  const state = getState();
  return `

  <header class="hero-header">
		<img 
			src="./images/planets-in-the-solar-system-displayed-in-order-png.webp"
      alt="Solar System Planets"
      class="hero-image"
		/>

    <h1>Solar System Mining Market</h1>

    <section class="top-row">
      <div class="selectors">
        ${await governorList()}
        ${await facilitySelectHtml()}
      </div>
      <div class="colony-display" id="colony-display">
       ${
         state.selectedGovernor
           ? await inventoryMinerals(state.selectedGovernor)
           : "<h2>Colony Minerals</h2>"
       }
      </div>
    </section>

<section class="bottom-row">
      <div class="minerals-display">
        ${await availableMinerals()}
      </div>
      <div class="cart-display">

        ${
          state.selectedMineral
            ? `
          <h2>Space Cart</h2>
          <p> 1 ton of selected mineral</p>
          ${submitButton()}`
            : "<h2>Space Cart</h2>"
        }
      </div>
    </section>

    `;
};
