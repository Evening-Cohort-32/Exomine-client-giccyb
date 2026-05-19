//Dropdown menu for colony/facility choices

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

  let html = `
    <label for="facilities">Choose a facility </label>
    <select name="facilities" id="facilities">
  `;

  const options = facilities.map(
    (facility) => `<option value="${facility.id}">${facility.name}</option>`,
  );

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
