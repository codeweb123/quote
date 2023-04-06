let apiQuotes = [];

function newQuote() {
  //pick a random quote
  const quote = apiQuotes[Math.floor()];
}

// get quotes from API
async function getQuotes() {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    //catch error here
  }
}

getQuotes();
