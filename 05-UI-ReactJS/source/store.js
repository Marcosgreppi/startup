import {createStore} from "redux";
import handleMovies from "./redux/reducer.js";
import initializeState from "./redux/reducer.js"

let store = createStore(handleMovies);

store.dispatch(initializeState());

export default store
