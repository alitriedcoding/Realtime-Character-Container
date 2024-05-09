const textareaEl = document.getElementById("input-text");
const totalcharacterEl = document.getElementById("total-character");
const remaningEl = document.getElementById("remaning-character");

textareaEl.addEventListener("keyup", () => {
  Updatecharacter();
});
Updatecharacter();
function Updatecharacter() {
  totalcharacterEl.innerHTML = textareaEl.value.length;
  remaningEl.innerHTML =
    textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}
