export default function newGame(gameId) {
  const game = JSON.parse(localStorage.getItem('game')) || '';

  if (game === '') {
    const game = { id: '7fUS4KxBVPBVygC5G6pP' };
    localStorage.setItem('game', JSON.stringify(game));
  }

  return gameId;
}
