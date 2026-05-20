//List of minerals available for purchase from colony/facility
import { state } from "./TransientState.js";

export const availableMinerals = async () => {
  const facilityId = state.selectedFacility;

  const response = await fetch(
    "http://localhost:8088/facilityMinerals?_expand=mineral&_expand=facility",
  );
  const facilityMinerals = await response.json();

  let HTML = "<h3>Facility Minerals</h3>";
  for (const facilityMineral of facilityMinerals) {
    if (parseInt(facilityId) === parseInt(facilityMineral.facilityId)) {
      HTML = `<h3>Facility Minerals for ${facilityMineral.facility.name}</h3>`;
    }
  }

  for (const facilityMineral of facilityMinerals) {
    if (
      parseInt(facilityId) === parseInt(facilityMineral.facilityId) &&
      facilityMineral.facility.active === true
    ) {
      HTML += `<input type="radio" name="facilityMineral" value="${facilityMineral.mineralId}">${facilityMineral.quantity} tons of ${facilityMineral.mineral.name}</input>`;
    }
  }
  HTML += "</form>";
  return HTML;
};
