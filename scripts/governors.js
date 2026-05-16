//Dropdown menu for Governor choices

export const governorList = async () => {
  // fetch gov list
  //make it readable/ not json
  // map it onto new array
  // join .map array
  // add it to html to be returned

  const response = await fetch("http://localhost:8088/governors");
  const governors = await response.json();

  let html = `<label for="governors">Choose a governor</label><select name="governors" id="governors">`;

  const governorArray = await governors.map((gov) => {
    return `<option value="${gov.id}">${gov.name}</option>`;
  });

  html += `${governorArray.join("")}</select>`;

  return html;
};
