import { setFacility, setGovernor, setMineral } from "./TransientState.js";

export const handleChoices = (event) => {
  if (event.target.name === "governors") {
    setGovernor(parseInt(event.target.value));
  } else if (event.target.name === "facilities") {
    setFacility(parseInt(event.target.value));
  } else if (event.target.name === "minerals") {
    setMineral(parseInt(event.target.value));
  }
};
