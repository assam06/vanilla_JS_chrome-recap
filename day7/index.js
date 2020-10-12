const taskForm = document.querySelector("form")
,addTask = document.querySelector("input"),
pendingList = document.querySelector(".pending-list"),
finishedList = document.querySelector(".finished-list");

const PENDING = 'PENDING', FINISHED = 'FINISHED'
let pending = [], finished = [];


function filterFn(pending) {
    return pending.id === 1;
}

function deletePending(event){
    const btn = event.target
    const li = btn.parentNode;
    pendingList.removeChild(li);
    const cleanTask = pending.filter(function(pending){
        return pending.id !== parseInt(li.id);        
    })
    pending = cleanTask;
    savePending();
}

function saveFinishied(text) {
    localStorage.setItem(FINISHED, JSON.stringify(finished));
}

function paintFinished(event){
    const btn = event.target
    const li = btn.parentNode;
    // deletePending(event);
    finishedList.appendChild(li);
    const checkBtn = event.target;
    checkBtn.innerText = "⏪";
    checkBtn.addEventListener("click", savePending);

    
    const finishedObj = {
        text: text,
        id: li.id 
    }

    finished.push(finishedObj)
    saveFinishied();

}

function savePending(){
    localStorage.setItem(PENDING, JSON.stringify(pending));
}

function paintPending(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button")
    delBtn.classList.add("del")
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deletePending)
    const checkBtn = document.createElement("button")


    checkBtn.classList.add("check")
    checkBtn.innerText = "✔";
    checkBtn.addEventListener("click", paintFinished)
    const span = document.createElement("span");

    const newId = pending.length + 1;
    span.innerText = text;
    // span을 li에 넣고 btn도 li에 넣음 
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(checkBtn);
    li.id = newId;
    pendingList.appendChild(li);
    
    const pendingObj = {
        text: text,
        id: newId
    }

    pending.push(pendingObj)
    savePending();

}

function handleSubmit(event){
    // event.preventDefault()
    const currentValue = addTask.value
    paintPending(currentValue);
    paintPending.value = "";
}

function loadPending(){
    const loadPending = localStorage.getItem(PENDING)

    if (loadPending !== null){
        const parsedPending = JSON.parse(loadPending); 
        parsedPending.forEach(function(pending){
            paintPending(pending.text);
        });

    }
}

function init(){
    loadPending();
    taskForm.addEventListener("submit", handleSubmit)

}

init();