import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import RandomQuote from "./components/RandomQuote";

const App = () => {
  // const NAME = useSelector(state => state.PROPERTY); Grab a state property, nullifies import/export of the store's states
  // const dispatch = useDispatch(); Dispatch hook, nullifies import/export of the store

  // To dynamically randomize an element in an array use let randomIndex = Math.floor(Math.random() * array.length); to get a random index for the array in question, then use bracket notation to grab the array element;
  const quoteImage = useSelector(state => state.currentQuote.image);
  const imageStyle = {
    background: "url('" +  quoteImage + "') no-repeat center",
    backgroundSize: "cover"
  }
  return (
    <div id="content-wrapper">
      <div style={imageStyle} src={quoteImage} id="author-image"></div>
      <RandomQuote />
    </div>
  );
}

export default App;
