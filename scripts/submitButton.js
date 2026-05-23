//This module handles the "Purchase" click
//HTML for generating "Purchase Mineral" button

//gets current app state
import { getState } from "./TransientState.js";

export const handleOrderSubmission = async (clickEvent) => {
  if (clickEvent.target.id === "submit-button") {
    const state = getState();

    const governorResp = await fetch(
      `http://localhost:8088/governors/${state.selectedGovernor}`,
    );
    const governor = await governorResp.json();

    const facilityMineralResp = await fetch(
      `http://localhost:8088/facilityMinerals?facilityId=${state.selectedFacility}&mineralId=${state.selectedMineral}`,
    );
    const facilityMinerals = await facilityMineralResp.json();
    const facilityMineral = facilityMinerals[0];
    if (!facilityMineral || facilityMineral.quantity <= 0) {
      return;
    }

    const colonyMineralResp = await fetch(
      `http://localhost:8088/colonyMinerals?colonyId=${governor.colonyId}&mineralId=${state.selectedMineral}`,
    );
    const colonyMinerals = await colonyMineralResp.json();
    const colonyMineral = colonyMinerals[0];

    await fetch(
      `http://localhost:8088/facilityMinerals/${facilityMineral.id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          quantity: facilityMineral.quantity - 1,
        }),
      },
    );
    if (colonyMineral) {
      await fetch(`http://localhost:8088/colonyMinerals/${colonyMineral.id}`, {
        method: "PATCH", //only updates part of the object
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          quantity: colonyMineral.quantity + 1,
        }),
      });
    } else {
      await fetch(`http://localhost:8088/colonyMinerals`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          colonyId: governor.colonyId,
          mineralId: state.selectedMineral,
          quantity: 1,
        }),
      });
    }
    document.dispatchEvent(new CustomEvent("stateChanged"));
  }
};

export const submitButton = () => {
  return `<button id="submit-button">Purchase Mineral</button>`;
};
