import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import {addMovie, editMovie, initializeState} from "./action";
import {handleMovies} from "./reducer";
import Movie from "./main";
import store from "./store";

class searcher extends React.Component {
  constructor(props) {
    super(props);
    let movies = JSON.parse(this.props.params.movieID)
    this.state = {
      title:movies.title,
      imdb: movies.imdb,
      score: movies.score,
      id: movies.id,
    };
    this.handleChangeImdb = this.handleChangeImdb.bind(this);
    this.handleChangeScore = this.handleChangeScore.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeImdb (event) {
    this.setState({imdb: event.target.value});
  }

  handleChangeScore (event) {
    this.setState({score: event.target.value});
  }

  handleSubmit (event) {
    if (this.props.params.movieID==="0"){
      store.dispatch(addMovie(this.state))
    } else {
      store.dispatch(editMovie(this.state, this.props.params.movieID));
    }
    this.setState({imdb: "", score: ""})

    function handleTitle(event) {
      var data = "{}";
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
          console.log(this.responseText);
        }
      });
      xhr.open("GET", `https://api.themoviedb.org/3/find/%22${movie.imdb}%22?external_source=imdb_id&language=en-US&api_key=a4199e2b2e39555ddb7888ecd6494528`);
      xhr.send(data);
      JSON.parse.stringify(data);
      movies.setState({title: event.target.value.movie_results.original_title});
      }
    }

  render () {
    return (
      <div>
        <Movie /><h3>Movie</h3><br/>
        <div>
          <input type="text" placeholder="Imdb" name="imdb" value={this.state.imdb} onChange={this.handleChangeImdb} /><br /><br />
          <input type="text" placeholder="score" name="score" value={this.state.score} onChange={this.handleChangeScore} /><br /><br />
          <Link to={`searcher/0`}><button onClick={this.handleSubmit.bind(this)}>Submit</button></Link>
        </div>
      </div>
    );
  }
};

function mapStateToProps (state) {
  return {
    movies: state
  };
}

export default connect(mapStateToProps)(searcher);
