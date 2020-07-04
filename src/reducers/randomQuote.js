const quotes = [{
    quote: "I'm pickle Rick!",
    author: "Rick, Rick and Mortimer",
    image: './images/rick.jpg'
  },
  {
    quote: "So uncivilized",
    author: "Obi-wan Kenobi",
    image: './images/obi-wan.jpg'
  },
  {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
    image: './images/albert-einstein.jpg'
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
    image: './images/oscar-wilde.jpeg'
  },
  {
    quote: "Without music, life would be a mistake.",
    author: "Friedrich Nietzsche, Twilight of the Idols",
    image: './images/nietzsche.jpeg'
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison",
    image: './images/edison.jpg'
  },
  {
    quote: "If you can't explain it to a six year old, you don't understand it yourself.",
    author: "Albert Einstein",
    image: './images/albert-einstein.jpg'
  },
  {
    quote: "I'm not upset that you lied to me, I'm upset that from now on I can't believe you.",
    author: "Friedrich Nietzsche",
    image: './images/nietzsche.jpeg'
  },
];

// To dynamically randomize an element in an array use Math.floor(Math.random() * array.length); to get a random index for the array in question, then use bracket notation to grab the array element;
const randomQuoteReducer = (state = quotes, action) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  switch (action.type) {
    case "RANDOMQUOTE":
      return {
        quote: quotes[randomIndex].quote,
          author: quotes[randomIndex].author,
          image: quotes[randomIndex].image
      };

    default:
      return {
        quote: quotes[randomIndex].quote,
          author: quotes[randomIndex].author,
          image: quotes[randomIndex].image
      };
  }
}

export default randomQuoteReducer;