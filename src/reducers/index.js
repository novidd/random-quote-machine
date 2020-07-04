import {combineReducers} from "redux";
import randomQuoteReducer from "./randomQuote";

const allReducers = combineReducers({
  currentQuote: randomQuoteReducer
});

export default allReducers;