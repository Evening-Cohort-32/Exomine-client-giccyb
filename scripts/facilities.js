// Dropdown menu for colony/facility choices

const clone = (v) => JSON.parse(JSON.stringify(v));

export const getAllFacilities = async () => {
  try {
    const resp = await fetch(`/api/facilities`);

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
      <option value="0">Choose a facility...</option>
  `;

  const options = facilities.map((f) => `<option value="${f.id}">${f.name}</option>`);

  html += options.join("");
  html += `</select>`;

  return html;
};

export const facilityInventoryHtml = async (facilityId) => {
  const resp = await fetch(`/api/facilities/${facilityId}`);
  if (!resp.ok) return "<ul></ul>";
  const facility = await resp.json();

  const items = Object.keys(facility.inventory || {}).map(
    (name) => `<li>${name}: ${facility.inventory[name]}</li>`
  );

  return `<ul>${items.join("")}</ul>`;
};

// Provide a backwards-compatible named export that earlier modules expect
export const facilitiesList = facilitySelectHtml;

export default {
  getAllFacilities,
  facilitySelectHtml,
  facilityInventoryHtml,
};
