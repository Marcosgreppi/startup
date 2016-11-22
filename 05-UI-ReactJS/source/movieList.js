import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import {removeMovie} from "./redux/action";
import {handleMovies} from "./redux/reducer";
import store from "./store";
import Movie from "./main";

class MovieList extends React.Component {
  constructor (props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
  }

  render () {
    return (
      <ul>
        {this.renderItems()}
      </ul>
    );
  }

  removeMovie (index) {
    this.props.onDelete(index)
  }

  renderItems () {
    if(this.props.movies !== undefined){
      return this.props.movies.map(this.renderItem);
    }
  }

  renderItem (item, index) {
    let boundItemClick = this.initializeState;
    return (
      <li key={index}>
        {`Title: ${item.title} Year: ${item.year} Duration: ${item.duration} Fav: ${item.favourite}`}
        <Link to={`MovieInput/${JSON.stringify(item, item.new=false, item.id=index)}`}><button className="buttonSelect">Edit</button></Link>
        <button className="buttonSelect" onClick={this.removeMovie.bind(this, index)}>Remove</button>
      </li>
    );
  }
};

export default MovieList;
