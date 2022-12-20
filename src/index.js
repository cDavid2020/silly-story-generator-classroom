import TextInput from "./components/TextInput";
import RadioInput from "./components/RadioInput";

const root = document.getElementById('root');

root.innerHTML = `
<main class="container mx-auto flex flex-col gap-y-4 items-center mt-8">
  ${TextInput()}
  <div class="flex gap-x-4">
    ${RadioInput({label: "US", name: "country", checked: true})}
    ${RadioInput({label: "UK", name: "country", checked: false})}
  </div>
</main>
  `