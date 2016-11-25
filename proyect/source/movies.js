import React from "react";
import list from "./list";
import search from "./search";
import {Link} from "react-router"

class movie extends React.Component {
  constructor() {
    super();
    this.state= {
      title: "",
      id: "",
      score: "",
    };
  };
  render () {
    let item = {title: "", id: "", score: ""};
    return (
      <div className="movie">
        <Link to="/list"><button className="buttonSelect">List</button></Link>
        <Link to="/search"><button className="buttonSelect">Movie Search</button></Link>
        <h3 id="favouriteListTitle" />
        <ul id="list" />
      </div>
    )
  }
}
export default movie
