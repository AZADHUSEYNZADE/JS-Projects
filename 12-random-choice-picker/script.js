const textarea = document.querySelector("textArea");
const div = document.querySelector("div");
textarea.addEventListener("click", (e) => {
  const span = document.createElement("span");
  span.textContent = e.target.value;
  if (span.textContent.length >= 1) {
    div.appendChild(span);
  }
});
