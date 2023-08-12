async function addScore(gameId) {
  const playerNameInput = document.getElementById("input-name");
  const playerScoreInput = document.getElementById("input-score");
  const playerName = playerNameInput.value;
  const playerScore = parseInt(playerScoreInput.value, 10);

  if (playerName && playerScore) {
    const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;
    try {
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
        body: JSON.stringify({ user: playerName, score: playerScore })
      });

      const data = await response.json();
      console.log("Score added:", data);
      playerNameInput.value = "";
      playerScoreInput.value = "";
    } catch (error) {
      console.error("Error adding score:", error);
    }
  } else {
    console.log("Please enter a player name and score.");
  }
}

export { addScore };
