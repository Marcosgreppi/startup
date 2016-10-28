import React from "react";

class ListFavMovies extends React.Component {
  constructor (props) {
    super(props);
    this.handleMovieFavouriteList = this.handleMovieFavouriteList.bind(this);
  }

  handleMovieFavouriteList (event) {
    if (this.props.onList) {
      this.props.onList(this.state);
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleMovieFavouriteList.bind(this)}>Favourite Movies List</button>
      </div>
    );
  }
};

export default ListFavMovies;
