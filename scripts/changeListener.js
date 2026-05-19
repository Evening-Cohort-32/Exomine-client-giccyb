import { setFacility, setGovernor, setMineral } from "./TransientState.js";
import { render } from "./main.js";

export const handleChoices = (event) => {
  if (event.target.name === "governors") {
    setGovernor(parseInt(event.target.value));
    render();
  } else if (event.target.name === "facilities") {
    setFacility(parseInt(event.target.value));
    render();
  }
};
