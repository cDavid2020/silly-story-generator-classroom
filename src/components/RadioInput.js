export default function RadioInput({label, name, checked}) {
  return `<label for="${label.toLowerCase()}">${label}</label><input id="${label.toLowerCase()}" type="radio" name="${name}" value="us" ${checked ? "checked" : ""}>`
}
