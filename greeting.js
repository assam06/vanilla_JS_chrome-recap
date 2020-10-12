const form = document.querySelector(".js-form"),
  input = form.querySelector("input"), 
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text){
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
  //enter로 했을때 일어나는 이벤트를 방해함.(기본동작방해) 
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);

}

function askForName(){
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit)
}

//얘가 current value를 받아서 보여주지.
function paintGreeting(text){
  form.classList.remove(SHOWING_CN)
  greeting.classList.add(SHOWING_CN)
  greeting.innerText = `Hello ${text}`
}

function loadName(){
  const currentUser = localStorage.getItem(USER_LS)
  if(currentUser === null) {
    askForName()
    
  } else {
    paintGreeting(currentUser)
  }
}

function init() {
  loadName()
}

init();
