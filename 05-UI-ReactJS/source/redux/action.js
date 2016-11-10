const ADD_MOVIE = "add_movie";
const LIST_MOVIE = "list_movie";
const EDIT_MOVIE = "edit_movie";
const INITIALIZE_STATE = "initialize_state"
const DELETE_MOVIE = "deleteMovie"

export function addMovie(movie) {
  return {
    type: ADD_MOVIE, movie: movie
  }
}

export function listMovie() {
  return {
    type: LIST_MOVIE
  }
}

export function initializeState () {
  return {
    type: INITIALIZE_STATE
  }
}

export function editMovie(movie, idx) {
  return {
    type: EDIT_MOVIE, movies: movie, indexMovieSelected: idx
  }
}

export function deleteMovie(index) {
  return {
    type: DELETE_MOVIE, indexMovieSelected: index
  }
}

export {ADD_MOVIE, LIST_MOVIE, EDIT_MOVIE, INITIALIZE_STATE, DELETE_MOVIE};
