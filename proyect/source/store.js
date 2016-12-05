import {createStore} from "redux";
import handleMovies from "./reducer.js";
import initializeState from "./reducer.js"

let store = createStore(handleMovies);

store.dispatch(initializeState());

export default store
