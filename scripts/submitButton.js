//HTML for generating "Purchase Mineral" button

const handleOrderSubmission = (clickEvent) => {
  if (clickEvent.target.id === "submit-button") {
    console.log("Button clicked!");
  }
};

export const submitButton = () => {
  document.addEventListener("click", handleOrderSubmission);

  return `<button id="submit-button">Purchase Mineral</button>`;
};
