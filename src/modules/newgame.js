const gameId = JSON.parse(localStorage.getItem('game-id')) || '';

const name = '{ name: "My EZ game" }';

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

const createGame = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });

  return response.json();
};

const postGame = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
};

createGame('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games',
 { name: 'EZ-Game' }).then((data) => {
  console.log(data);
 });

 postGame('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', { name: 'EZ-Game' }).then((data) => {
  console.log(data);
});


return gameId;

export { createGame };
