const toDOForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDOForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos'

//toDos가 만들어지면 이 array로 보내자
let toDos = [];

//3.6
function deleteToDo(event) {
    const btn = event.target
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        //선택한 아이디가 
        return toDo.id !== parseInt(li.id);
    })
    toDos = cleanToDos;
    // toDo를 바꾸고 새로 저장하는겨
    saveToDos();

}


//local에 toDos를 가져와서 로컬에 저장할거야
//JSON.stringify는 JS obj를 string으로 바꿔줘. json은 js가 다룰 수 있도록 obj로 바꿔주는 기능을 말해.
function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}


//얘를 array로 보내야함
function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span")
    //toDos array에 id를 심어줌 
    //array 길이가 0에서 시작하니까 +1을 더해주는거야. id가 1부터 시작하게.
    const newId = toDos.length + 1;

    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo)
    span.innerText = text
    // span을 li에 넣고 btn도 li에 넣음 
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        //이 obj는 text(=작성한 todos)가 value로 올 거고
        text: text,
        id: newId

    }
    //push로 array 안에 element하나를 넣어줌 =toDos의 array안에 toDoObj를 넣는거지.
    toDos.push(toDoObj);

    //로컬에 저장하는 함수 호출, 꼭 push이후에 호출할 것.(안그러면 비어있으니까 불러도 소용없어)
    saveToDos();

}

function handleSubmit(event){
    event.preventDefault()
    const currentValue = toDoInput.value
    paintToDo(currentValue);
    toDoInput.value = "";
}

//local에서 오는 거 . 새로고침시 불러오는거.
function loadToDos(){
    const loadToDos = localStorage.getItem(TODOS_LS)

    //toDos가 null이면 아무것도 안함. 항상 showing일거야 
    //그럼 비어잇지 않으면 난 뭘 할거야
    if(loadToDos !== null){
        const parsedToDos = JSON.parse(loadToDos); 
        //forEach는 함수를 실행시키는데 array에 담긴거를 각각 한번씩 함수 실행해줘
        //parsed에 담겨있는거 한번씩 실행시켜줄거야. 각각 paintToDO를 실행시켜주는거지. toDO에 적은 text를
        parsedToDos.forEach(function(toDo) {
          paintToDo(toDo.text);
        });
    } 
}

function init(){
    loadToDos();
    toDOForm.addEventListener("submit", handleSubmit)
}

init();