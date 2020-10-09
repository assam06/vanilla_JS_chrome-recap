const body = document.body;

const BIG = "big";
const MEDIUM = "medium";
const SMALL = "small";

function screenResize() {
  const width = window.innerWidth;
  if (width > 1000) {
    body.classList.add(BIG);
    body.classList.remove(MEDIUM);
  } else if (width >= 600 && width <= 1000) {
    body.classList.add(MEDIUM);
    body.classList.remove(SMALL);
  } else {
    body.classList.add(SMALL);
  }
}

window.addEventListener("resize", screenResize);
