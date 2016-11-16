import handleMovies from './redux/reducer.js';
import {createStore} from 'redux';
import {initializeState} from "./redux/action.js"

let store = createStore(handleMovies);

store.dispatch(initializeState());
export default store
