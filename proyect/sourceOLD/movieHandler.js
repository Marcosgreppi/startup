import React from "react";
import {connect} from "react-redux";
import {handleMovies} from "./reducer";
import {deleteMovie} from "./action";
import store from "./store";
import Movie from "./movie";
import MovieList from "./movieList";

class MoviesHandler extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Movie />
        <MovieList movies={this.props.movies} onDelete={this.deleteMovie}/>
      </div>
    );
  }

  deleteMovie (index) {
    store.dispatch(deleteMovie(index))
  }
};

function mapStateToProps (state) {
  return {
    movies: state
  };
}

export default connect(mapStateToProps)(MoviesHandler);
