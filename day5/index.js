// import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const dayTimer = document.querySelector(".dayTimer");

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const now = new Date();
  const dDay = xmasDay - now;

  const d = Math.floor(dDay / (1000 * 60 * 60 * 24));
  const h = Math.floor((dDay / (1000 * 60 * 60)) % 24);
  const m = Math.floor((dDay / (1000 * 60)) % 60);
  const s = Math.floor((dDay / 1000) % 60);

  const days = `${d < 10 ? `0${d}d` : `${d}d`}`;
  const hours = `${h < 10 ? `0${h}h` : `${h}h`}`;
  const minutes = `${m < 10 ? `0${m}m` : `${m}m`}`;
  const seconds = `${s < 10 ? `0${s}s` : `${s}s`}`;

  dayTimer.innerText = `${days} ${hours} ${minutes} ${seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
