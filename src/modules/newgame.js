const gameId = JSON.parse(localStorage.getItem('game-id')) || '';

// const name = {
// 	"name": "My EZ game"
// };

const uri = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

if(gameId === '') {
  try {
    const response = await fetch(uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: 'My EZ game' })
    });
    const data = await response.json();
  } catch (error) {
    console.error("Error fetching ID or connecting to API:", error);
  }
}

if(data) {

}

return gameId;
