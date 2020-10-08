const title = document.querySelector("#title");

//문자에 상수를 줌
const CLICKED_CLASS = "clicked";

function handleClick() {
  const currentClass = title.className;
  // not equal
  if (currentClass !== CLICKED_CLASS) {
    // class의 이름을 상수(clicked)로 바꿈
    title.className = CLICKED_CLASS;
  } else {
    title.className = "";
  }
}

function init() {
  title.addEventListener("click", handleClick);
}

init();
