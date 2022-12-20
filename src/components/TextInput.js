// ⚠️ ASSUMPTION: The label will be a single word
export default function TextInput(label) {
  return `
    <label for="${label.toLowerCase()}">${label}</label>
    <input id="${label.toLowerCase()}" type="text">
    `
}