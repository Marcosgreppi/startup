import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import {addMovie, editMovie, initializeState} from "./action";
import {handleMovies} from "./reducer";
import Movie from "./movie";
import store from "./store";

class MovieInput extends React.Component {
  constructor(props) {
    super(props);

    let movies = JSON.parse(this.props.params.movieID)

    this.state = {
      title: movies.title,
      score: movies.score,
      status: movies.status,
      id: movies.id
      }

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeScore = this.handleChangeScore.bind(this);
    this.handleChangeStatus = this.handleChangeStatus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTitle (event) {
    this.setState({title: event.target.value});
  }

  handleChangeScore (event) {
    this.setState({score: event.target.value});
  }

  handleChangeStatus (event) {
    this.setState({state: event.target.value});
  }


  handleSubmit (event) {
    alert("a")
    if (this.props.params.movieID==="0"){
      store.dispatch(addMovie(this.state))
    } else {
      store.dispatch(editMovie(this.state, this.props.params.movieID));
    }
    this.setState({title: "", score: "", state: ""})
  }

  render () {
    return (
      <div>
        <Movie /><h3>Movie</h3><br/>
        <div>
          <input type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChangeTitle} /><br /><br />
          <input type="text" placeholder="Score" name="score" value={this.state.score} onChange={this.handleChangeScore} /><br /><br />
          <select name="Status" value={this.state.status} onChange={this.handleChangeStatus}>
            <option value="Finished">Finished</option>
            <option value="Watching">Watching</option>
            <option value="PTW">Plan To Watch</option>
          </select><br /><br />
          <Link to={`MovieInput/0`}><button onClick={this.handleSubmit.bind(this)}>Submit</button></Link>
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

export default connect(mapStateToProps)(MovieInput);
