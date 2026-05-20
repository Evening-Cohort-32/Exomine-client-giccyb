export const state = {
  selectedFacility: 0,
  selectedGovernor: 0,
  selectedMineral: 0,
};

export const setFacility = (facilityId) => {
  state.selectedFacility = facilityId;
  document.dispatchEvent(new CustomEvent("stateChanged"));
  console.log(state);
};
export const setGovernor = (governorId) => {
  state.selectedGovernor = governorId;
  document.dispatchEvent(new CustomEvent("stateChanged"));
  console.log(state);
};
export const setMineral = (mineralId) => {
  state.selectedMineral = mineralId;
  document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const getState = () => structuredClone(state);

// export const purchaseMineral = async () => {
//   const response = await fetch("http://localhost:8088/governors");
//   const governors = await response.json();

//   let colony = 0;

//   for (const governor of governors) {
//     if (state.selectedGovernor === governors.colonyId) {
//       colony = governor.ColonyId;
//     }
//   }

//   const response2 = await fetch("http://localhost:8088/colonyMinerals");
//   const colonyMinerals = await response2.json();

//   for (const entry of colonyMinerals) {
//     if (
//       colony === entry.colonyId &&
//       state.selectedMineral === entry.mineralId &&
//       entry.quantity > 0
//     ) {
//       //PUT quantity of mineral + 1
//       fetch(`https://localhost:8088/colonyMinerals/${entry.id}`,
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json'},
//           body: JSON.stringify(IDONTKNOW)
//         }
//       )
//     } else {
//       //POST new entry
//     }
//   }

//   /*
//         Does the chosen governor's colony already own some of this mineral?
//             - If yes, what should happen?
//             - If no, what should happen?

//         Defining the algorithm for this method is traditionally the hardest
//         task for teams during this group project. It will determine when you
//         should use the method of POST, and when you should use PUT.

//         Only the foolhardy try to solve this problem with code.
//     */

//   document.dispatchEvent(new CustomEvent("stateChanged"));
// };
