const taskInput = document.querySelector("#tasksInput");
const btnAddTask = document.querySelector("#btnAddTask");
let notesContainer = document.querySelector(".notes-container");    
let deleteContainer = document.querySelectorAll(".notes-delete");
let i = 0;
let count = 0;
class Notes {
    constructor(id) {
        this.id = id;
        this.text = taskInput.value;
    }
    showNote(){
        let element = document.createElement("div");
        element.id = `${this.id}`;
        element.className = "notes";
        element.innerHTML = `<span class="notes-text">${this.text}</span> <button class="notes-delete" id="${this.id}"> <i class="fa-regular fa-trash-can"></i> </button>`;
        notesContainer.appendChild(element);
    }
    deleteNote(id){
        let el = document.getElementById(id);
        el.remove();
    }
}
btnAddTask.addEventListener("click", ()=> {
    let note = new Notes(++i);
    note.showNote();
    taskInput.value = "";
    reset();
    taskInput.focus();
    document.querySelector('.notes-not-found').style.display = "none";
    ++count;
});
function reset() {
    notesContainer = document.querySelector(".notes-container");    
    deleteContainer = document.querySelectorAll(".notes-delete");
    deleteContainer.forEach((btn)=>{
        btn.addEventListener("click", (event)=>{
            let id = event.target.id;
            let note = new Notes(); 
            note.deleteNote(id);
            --count;
            if(count === 0) {
                document.querySelector('.notes-not-found').style.display = "flex";
            }
        });
    });
}