const quotes = {
  "Sam Levenson": "Don’t watch the clock; do what it does. Keep going.",
  "Winston Churchill":
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Nelson Mandela": "It always seems impossible until it’s done.",
  "Walt Disney": "If you can dream it, you can do it.",
  Unknown: "Great things never come from comfort zones.",
};

const Quote = document.getElementById("Quote");
const authorName = document.getElementById("author");
let checker;

function genrateQuotes() {
  const authors = Object.keys(quotes);
  let author = authors[Math.floor(Math.random() * authors.length)];

  while (checker === author) {
    author = authors[Math.floor(Math.random() * authors.length)];
  }
  checker = author;

  const quote = quotes[author];

  Quote.innerHTML = quote;
  authorName.innerHTML = author;
}
