//Dropdown menu for Governor choices
import { getState } from "./TransientState.js";

export const governorList = async () => {
  const response = await fetch("http://localhost:8088/governors");
  const governors = await response.json();

  const state = getState();

  let html = `<label for="governors">Choose a governor </label><select name="governors" id="governors"><option value="0">Choose a governor...</option>`;

  const governorArray = governors.map((gov) => {
    if (parseInt(state.selectedGovernor) === parseInt(gov.id)) {
      return `<option value="${gov.id}" data-colony="${gov.colonyId}" selected>${gov.name}</option>`;
    } else {
      return `<option value="${gov.id}" data-colony="${gov.colonyId}">${gov.name}</option>`;
    }
  });

  html += `${governorArray.join("")}</select>`;

  return html;
};
