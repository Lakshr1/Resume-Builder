import { combineReducers } from "redux";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";








import { composeWithDevTools } from "redux-devtools-extension";

import { getResumeEditReducer } from "./reducers/resumeEditReducer";

//this is a way of merging all the reducers into one place , so we can easily export it 
const finalReducer = combineReducers({
    getResumeEditReducer:getResumeEditReducer
});


const composeEnhacers = composeWithDevTools({});

//creating the store , first: 'REDUCERS' , second :'INITAL STATE' , third:'MIDDLEWARE'
const store = createStore(
  finalReducer,
//   initialState,
  composeEnhacers(applyMiddleware(thunk))
);

export default store;