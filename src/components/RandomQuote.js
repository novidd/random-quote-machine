import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import randomQuote from "../actions";

const RandomQuote = () => {
  const dispatch = useDispatch();

  const quoteText = useSelector(state => state.currentQuote.quote);
  const quoteAuthor = useSelector(state => state.currentQuote.author);
  const tweetText = "https://twitter.com/intent/tweet?text=" + quoteText + " -" + quoteAuthor;
  return (
    <div id="quote-wrapper">
      <div id="quote-box">
        <h2 id="text">{quoteText}</h2>
        <h3 id="author">- {quoteAuthor}</h3>
        <div id="link-button-wrapper">
          <button onClick={() => dispatch(randomQuote())} id="new-quote">New Quote</button>
          <a href={tweetText} id="tweet-quote"><i class="fab fa-twitter-square fa-2x"><div></div></i></a>
        </div>
      </div>
    </div>
  );
}

export default RandomQuote;