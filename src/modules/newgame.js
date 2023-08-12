function newGame(gameId) {
  const game = JSON.parse(localStorage.getItem('game')) || '';

  // const createNewGame = async (url = '', data = {}) => {
  //   const response = await fetch(url, {
  //     method: 'POST',
  //     mode: 'cors',
  //     cache: 'no-cache',
  //     credentials: 'same-origin',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     redirect: 'follow',
  //     referrerPolicy: 'no-referrer',
  //     body: JSON.stringify(data),
  //   });
  //   return response.json();
  // };

  if (game === '') {
    const game = { id: '7fUS4KxBVPBVygC5G6pP' };
    localStorage.setItem('game', JSON.stringify(game));
  }

  // createNewGame('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games',
  //   { name: 'EZ-Game' }).then((data) => {
  //   [, , , id] = data.result.split(' ');
  // });
  return gameId;
}

export default { newGame };
