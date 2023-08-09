import './style.css';

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
      <input id="input-name" type:"text" placeholder="Your name" required><br>
      <input id="input-score" type:"text" placeholder="Your score"><br>
      <span class="div">
        <button id="btn-submit" class="btn" type="button" required>Submit</button>
      </span>
    </div>
    `;

  return column2;
}

function displayScores() {
  const scores = [
    { name: 'Player 1', score: '560' },
    { name: 'Player 2', score: '510' },
    { name: 'Player 3', score: '485' },
    { name: 'Player 4', score: '420' },
    { name: 'Player 5', score: '372' },
  ];

  const displayedScores = document.getElementById('scores');
  displayedScores.innerHTML = '';
  let i = 0;
  scores.forEach((player) => {
    const div = document.createElement('div');
    div.classList.add('row');
    div.innerHTML = `
      <span>${player.name}&nbsp;:&nbsp;</span>
      <span>${player.score}</span>
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

columns.appendChild(column1());
columns.appendChild(column2());
displayScores();
