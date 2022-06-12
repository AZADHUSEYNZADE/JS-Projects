const addButton = document.querySelector(".addButton");
const box = document.querySelector(".box");

addButton.addEventListener("click", () => addNewNote());

function addNewNote(text = "") {
  const note = document.createElement("div");

  note.classList.add("mainNoteDiv");
  note.innerHTML = `
  <div class="mainNoteDiv">
  <div class="box">
      <header>
          <i class="fa-solid fa-trash-can"></i>
      </header>
      <div>
          <textarea>${text}</textarea>
      </div>
  </div>

</div>
    
    `;
  note.querySelector("textarea").addEventListener("input", (e) => {
    localStorage.setItem("name", e.target.value);
    localStorage.getItem("name");
  });

  document.body.appendChild(note);
}
