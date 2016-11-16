import React from "react";
import {Link} from "react-router";

class Movie extends React.Component{
  constructor () {
    super();
    this.state = {
      title:"",
      year:"",
      duration:"",
      favourite: false,
    };
  }

  render () {
    return (
      <div className="movie">
        <Link to={`MovieInput/`}><button className="buttonSelect">Movie Input</button></Link>
        <Link to="/MoviesHandler"><button className="buttonSelect">Movie List</button></Link>
      </div>
    );
  };
};

export default Movie;
