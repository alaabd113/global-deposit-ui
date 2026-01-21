// TIME ENGINE
let isSunday = false;
let next = 3600;

const timerEl = document.getElementById("timer");
const btn = document.getElementById("claim");

function tick() {
  if (next <= 0) return;
  next--;

  const h = String(Math.floor(next / 3600)).padStart(2, '0');
  const m = String(Math.floor((next % 3600) / 60)).padStart(2, '0');
  const s = String(next % 60).padStart(2, '0');

  timerEl.innerText = `NEXT CYCLE ${h}:${m}:${s}`;
}

setInterval(tick, 1000);

// CLAIM
btn.onclick = () => {
  btn.innerText = "PROCESSING...";
  btn.disabled = true;
};
