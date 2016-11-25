import handleMovies from './reducer.js';
import {createStore} from 'redux';

let store = createStore(handleMovies);
export default store
