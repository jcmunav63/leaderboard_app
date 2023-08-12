import './style.css';
import { newGame } from './modules/newgame.js';
import { getScore } from './modules/getscores.js';
import { addScore } from './modules/addscore.js';

const columns = document.getElementById('columns');

function column1() {
  const column1 = document.createElement('div');
  column1.classList.add('column1');
  column1.innerHTML = `
    <div id="left">
      <span class="subtitle">Recent scores</span>
      <button id="btn-refresh" class="btn" type="button">Refresh</button>
    </div>
    <div id="scores"></div>
    `;
  return column1;
}

function column2() {
  const column2 = document.createElement('div');
  column2.classList.add('column2');
  column2.innerHTML = `
    <div id="right">
      <span class="subtitle2">Add your score</span><br>
      <input id="input-name" type:"text" placeholder="Your name" pattern="[A-Za-z0-9]+" required><br>
      <input id="input-score" type:"text" placeholder="Your score" required oninput="this.value=this.
      value.replace(/[^0-9]/g, '')"><br>
      <span class="div">
        <button id="btn-submit" class="btn" type="button">Submit</button>
      </span>
    </div>
    `;

  return column2;
}

// const scores = [];
function displayScores(scores) {
  columns.appendChild(column1());
  columns.appendChild(column2());
  const displayedScores = document.getElementById('scores');
  displayedScores.innerHTML = '';
  let i = 0;
  scores.result.forEach((sco) => {
    const div = document.createElement('div');
    div.classList.add('row');
    div.innerHTML = `
      <span>${sco.user}:&nbsp;</span>
      <span>${sco.score}</span>
    `;
    if (i % 2 === 0) {
      div.style.backgroundColor = '#e4e2e2';
    } else {
      div.style.backgroundColor = 'white';
    }
    i += 1;
    displayedScores.appendChild(div);
  });
}

window.onload = async () => {
  const gameId = '7fUS4KxBVPBVygC5G6pP';
  const scores = await getScore(gameId);
  displayScores(scores);
}

const refreshButton = document.getElementById("btn-refresh");
refreshButton.addEventListener("click", (event) => {
  event.preventDefault();
  getScore(gameId).then(scores => {
    displayScores(scores);
    columns.appendChild(column1());
    columns.appendChild(column2());
  })
  .catch(error => {
    console.error("Error:", error);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("btn-submit");
  submitButton.addEventListener("click", async (event) => {
    event.preventDefault();
    const gameId = '7fUS4KxBVPBVygC5G6pP';
    await addScore(gameId);
  });
});
