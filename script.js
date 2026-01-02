let timer = 60;
let score = 0;
let hitrn = 0;

function makeBubble() {
  let clutter = "";

  for (let i = 1; i <= 126; i++) {
    let num = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${num}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  let timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = hitrn;
}

function increaseScore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  let clickedNum = Number(dets.target.textContent);
  if (clickedNum === hitrn) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

makeBubble();
runTimer();
getNewHit();
