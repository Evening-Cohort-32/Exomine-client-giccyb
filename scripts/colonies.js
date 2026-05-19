//Dropdown menu for colony/facility choices



const clone = v => JSON.parse(JSON.stringify(v))

export const getAllColonies = async () => {
  try {
    const resp = await fetch('/api/colonies')
    if (resp.ok) return await resp.json()
  } catch (e) {  }
  return []
}

export const colonySelectHtml = async () => {
  const colonies = await getAllColonies()
  let html = `<label for="colonies">Choose a colony</label><select name="colonies" id="colonies">`
  const options = colonies.map(c => `<option value="${c.id}">${c.name}</option>`)
  html += options.join('') + '</select>'
  return html
}

export const colonyInventoryHtml = async (colonyId) => {
  const resp = await fetch(`/api/colonies/${colonyId}`)
  if (!resp.ok) return '<ul></ul>'
  const colony = await resp.json()
  const items = Object.keys(colony.inventory || {}).map(name => `<li>${name}: ${colony.inventory[name]}</li>`)
  return `<ul>${items.join('')}</ul>`
}

export default { getAllColonies, colonySelectHtml, colonyInventoryHtml }