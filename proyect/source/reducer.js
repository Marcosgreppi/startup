import { ADD_MOVIE, LIST_MOVIE, EDIT_MOVIE, INITIALIZE_STATE, DELETE_MOVIE } from "./action"

function handler(state = [ { movies: {} } ], action) {
  let movies = JSON.parse(localStorage.getItem("movieStorage")) || [];
  switch (action.type) {

    case INITIALIZE_STATE:
      state = movies;
      return(state);

    case ADD_MOVIE:
      state.push(action.movie);
      localStorage.setItem("movieStorage", JSON.stringify(state));
      return(state)

    case EDIT_MOVIE:
      state.splice(action.indexMovie, 1, action.movie);
      localStorage.setItem("movies", JSON.stringify(state.moviesState));
      return (state)

    case DELETE_MOVIE:
      state.splice(action.indexMovie, 1);
      localStorage.setItem("movies", JSON.stringify(state.moviesState));
      return(state)

    default:
      return(state)
  }
}

export default handler
