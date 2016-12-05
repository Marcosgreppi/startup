import React from "react";
import {Link} from "react-router";

class Movie extends React.Component{
  constructor () {
    super();
    this.state = {
      title:"",
      score:"",
      imdb:"",
      id:"",
    };
  }

  movie.defaultProps = {
    title: "",
    score: "",
    idmb: "",
    id: "",
  };

  render () {
    return (
      <div className="movie">
        <Link to={`searcher/0`}><button className="buttonSelect">Movie Input</button></Link>
        <Link to="/handler"><button className="buttonSelect">Movie List</button></Link>
      </div>
    );
  };
};


export default Movie;
