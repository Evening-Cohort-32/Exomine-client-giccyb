//Minerals in current chosen governor/facility's inventory

export const inventoryMinerals = async (governorId) => {
  const governorResp = await fetch(
    `http://localhost:8088/governors/${governorId}`,
  );
  const governor = await governorResp.json();

  const colonyResp = await fetch(
    `http://localhost:8088/colonies/${governor.colonyId}`,
  );

  const colony = await colonyResp.json();

  const inventoryResp = await fetch(
    `http://localhost:8088/colonyMinerals?colonyId=${governor.colonyId}&_expand=mineral`,
  );

  const inventory = await inventoryResp.json();

  let html = `<h2>${colony.name} Minerals</h2><ul>`;
  for (const item of inventory) {
    html += `<li> ${item.quantity} tons of ${item.mineral.name}</li>`;
  }

  html += `</ul>`;

  return html;
};
