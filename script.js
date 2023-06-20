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

const firebaseConfig = {
    apiKey: "AIzaSyDhYaLPuhkEpjDAS8oAC1OoR9blnNL8ydo",
    authDomain: "note-taking-website-5f173.firebaseapp.com",
    databaseURL: "https://note-taking-website-5f173-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "note-taking-website-5f173",
    storageBucket: "note-taking-website-5f173.appspot.com",
    messagingSenderId: "79500910698",
    appId: "1:79500910698:web:c3b4806a9eed1464b66a13",
    measurementId: "G-01DX3JT797"
  };