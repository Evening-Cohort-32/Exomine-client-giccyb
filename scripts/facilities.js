//Dropdown menu for colony/facility choices

const clone = (v) => JSON.parse(JSON.stringify(v));

export const getAllFacilities = async () => {
  try {
    const resp = await fetch("http://localhost:8088/facilities");
    if (resp.ok) return await resp.json();
  } catch (e) {}
  return [];
};

export const facilitySelectHtml = async () => {
  const colonies = await getAllFacilities();
  let html = `<label for="colonies">Choose a colony </label><select name="colonies" id="colonies">`;
  const options = colonies.map(
    (c) => `<option value="${c.id}">${c.name}</option>`,
  );
  html += options.join("") + "</select>";
  return html;
};

export const facilityInventoryHtml = async (colonyId) => {
  const resp = await fetch(`/api/colonies/${colonyId}`);
  if (!resp.ok) return "<ul></ul>";
  const colony = await resp.json();
  const items = Object.keys(colony.inventory || {}).map(
    (name) => `<li>${name}: ${colony.inventory[name]}</li>`,
  );
  return `<ul>${items.join("")}</ul>`;
};

// Provide a backwards-compatible named export that earlier modules expect
export const coloniesList = facilitySelectHtml;

export default { getAllFacilities, facilitySelectHtml, facilityInventoryHtml };
