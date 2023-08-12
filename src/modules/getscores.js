async function getScore(gameId) {
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;
  try {
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    });
    const scores = await response.json();
    return scores;
  } catch (error) {
    console.error("Error fetching scores:", error);
    return [];
  }
}

export { getScore };
