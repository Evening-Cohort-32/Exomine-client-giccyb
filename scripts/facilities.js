//Dropdown menu for colony/facility choices
import { getState } from "./TransientState.js";

const clone = (v) => JSON.parse(JSON.stringify(v));

export const getAllFacilities = async () => {
  try {
    const resp = await fetch("http://localhost:8088/facilities");

    if (resp.ok) {
      return await resp.json();
    }
  } catch (e) {
    console.error(e);
  }

  return [];
};

export const facilitySelectHtml = async () => {
  const facilities = await getAllFacilities();
  const state = getState();

  let html = `
    <label for="facilities">Choose a facility </label>
    <select name="facilities" id="facilities"><option value="0">Choose a facility...</option>
  `;

  const options = facilities
    .filter((facility) => facility.active)
    .map((facility) => {
      if (parseInt(state.selectedFacility) === parseInt(facility.id)) {
        return `<option value="${facility.id}" selected>${facility.name}</option>`;
      } else {
        return `<option value="${facility.id}">${facility.name}</option>`;
      }
    });

  html += options.join("");
  html += "</select>";

  return html;
};

export const facilityInventoryHtml = async (facilityId) => {
  const resp = await fetch(`http://localhost:8088/facilities/${facilityId}`);

  if (!resp.ok) return "<ul></ul>";

  const facility = await resp.json();

  const items = Object.keys(facility.inventory || {}).map(
    (name) => `<li>${name}: ${facility.inventory[name]}</li>`,
  );

  return `<ul>${items.join("")}</ul>`;
};

// Backwards-compatible export
export const facilitiesList = facilitySelectHtml;

export default {
  getAllFacilities,
  facilitySelectHtml,
  facilityInventoryHtml,
};
