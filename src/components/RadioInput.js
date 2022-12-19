export default function RadioInput({label, name, checked}) {
  return `<label for="${label}">${label}</label><input id="${label}" type="radio" name="${name}" value="us" ${checked ? "checked" : ""}>`
}