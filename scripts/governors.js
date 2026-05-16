//Dropdown menu for Governor choices

export const governorList = async () => {
  const response = await fetch("http://localhost:8088/governors");
  const governors = await response.json();

  let html = `<label for="governors">Choose a governor </label><select name="governors" id="governors">`;

  const governorArray = await governors.map((gov) => {
    return `<option value="${gov.id}">${gov.name}</option>`;
  });

  html += `${governorArray.join("")}</select>`;

  return html;
};
