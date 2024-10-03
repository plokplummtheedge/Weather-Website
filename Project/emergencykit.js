document.getElementById('addNote').addEventListener('click', function() {
    const noteInput = document.getElementById('noteInput');
    const notesList = document.getElementById('notesList');
    
    if (noteInput.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = noteInput.value;
        li.addEventListener('click', function() {
            this.remove();
        });
        notesList.appendChild(li);
        noteInput.value = '';
    }
});

