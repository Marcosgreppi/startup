import React from "react";
import {Link} from "react-router";

class Movie extends React.Component{
  constructor () {
    super();
    this.state = {
      title:"",
      score:"",
      status:"",
    }
  }

  render () {
    let item = {title: "", score: "", status: ""};
    return (
      <div className="movie">
        <Link to={`MovieInput/0`}><button className="buttonSelect">Movie Input</button></Link>
        <Link to="/MoviesHandler"><button className="buttonSelect">Movie List</button></Link>
        <h3 id="favouriteListTitle" />
        <ul id="list" />
      </div>
    )
  }
};

export default Movie;
