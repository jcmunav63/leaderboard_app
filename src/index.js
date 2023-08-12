import './style.css';
// import { newGame } from './modules/newgame.js';
import getScore from './modules/getscores.js';
import addScore from './modules/addscore.js';

function displayScores(scores) {
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
};

document.addEventListener('DOMContentLoaded', () => {
  const refreshButton = document.getElementById('btn-refresh');
  refreshButton.addEventListener('click', async (event) => {
    event.preventDefault();
    // console.log(scores);
    const gameId = '7fUS4KxBVPBVygC5G6pP';
    const scores = await getScore(gameId);
    console.log(scores);
    displayScores(scores);
    // await getScore(gameId).then(scores => {

    // })
    // .catch(error => {
    //   console.error("Error:", error);
    // });
  });

  const submitButton = document.getElementById('btn-submit');
  // console.log(submitButton);
  submitButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const gameId = '7fUS4KxBVPBVygC5G6pP';
    await addScore(gameId);
  });
});
