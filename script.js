document.getElementById("noteForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const noteInput = document.getElementById("noteInput");
    const notesContainer = document.getElementById("notesContainer");
    const note = document.createElement("div");
    note.className = "note";
    note.textContent = noteInput.value;
    notesContainer.appendChild(note);
    noteInput.value = "";
});

document.getElementById("toggleDarkMode").addEventListener("click", function()
{
    const body = document.querySelector("body");
    body.classList.toggle("dark-mode");
});