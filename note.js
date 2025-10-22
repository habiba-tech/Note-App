const addNoteBtn = document.getElementById("addNoteBtn");
const notesContainer = document.getElementById("notes-container");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

// ✅ Save notes to localStorage
function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

// ✅ Display notes on screen
function displayNotes() {
  notesContainer.innerHTML = "";
  notes.forEach((noteText, index) => {
    const note = document.createElement("div");
    note.classList.add("note");

    note.innerHTML = `
      <textarea>${noteText}</textarea>
      <button class="delete-btn" onclick="deleteNote(${index})">✕</button>
    `;

    const textarea = note.querySelector("textarea");
    textarea.addEventListener("input", () => {
      notes[index] = textarea.value;
      saveNotes();
    });

    notesContainer.appendChild(note);
  });
}

// ✅ Add new note
addNoteBtn.addEventListener("click", () => {
  notes.push("");
  saveNotes();
  displayNotes();
});

// ✅ Delete note
function deleteNote(index) {
  notes.splice(index, 1);
  saveNotes();
  displayNotes();
}

// ✅ Initialize
displayNotes();
