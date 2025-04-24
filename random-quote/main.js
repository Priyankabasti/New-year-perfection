
const quotes = [
    {
      text: "The best way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
    },
    {
      text: "Don't let yesterday take up too much of today.",
      author: "Will Rogers"
    },
    {
      text: "It's not whether you get knocked down, it's whether you get up.",
      author: "Vince Lombardi"
    },
    {
      text: "If you are working on something exciting, it will keep you motivated.",
      author: "Steve Jobs"
    },
    {
      text: "Success usually comes to those who are too busy to be looking for it.",
      author: "Henry David Thoreau"
    },
    {
      text: "Opportunities don't happen. You create them.",
      author: "Chris Grosser"
    },
    {
      text: "Do what you can with all you have, wherever you are.",
      author: "Theodore Roosevelt"
    },
    {
      text: "You are never too old to set another goal or to dream a new dream.",
      author: "C.S. Lewis"
    },
    {
      text: "Dream big and dare to fail.",
      author: "Norman Vaughan"
    },
    {
      text: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson"
    },
    {
      text: "Hardships often prepare ordinary people for an extraordinary destiny.",
      author: "C.S. Lewis"
    },
    {
      text: "Everything you’ve ever wanted is on the other side of fear.",
      author: "George Addair"
    },
    {
      text: "Start where you are. Use what you have. Do what you can.",
      author: "Arthur Ashe"
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      text: "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt"
    }
  ];

  const usedIndexes = new Set()
  const quoteElement = document.getElementById("quote");
  const quoteAuthor = document.getElementById("author");


  function generateQuote(){

    const randomIdx = Math.floor(Math.random()*quotes.length)
    const quote = quotes[randomIdx]
    quoteElement.innerHTML = `"${quote.text}"`;
    quoteAuthor.innerHTML = ` -  ${quote.author}`;

  }