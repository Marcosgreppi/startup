import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import {handler} from "./reducer";
import store from "./store";
import movie from "./movies";

class search extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return(
      <div>
        <input type="text" placeholder="Name" name="title" value={movie.state.title}/><br /><br />
      </div>
    );
  }
}

export default search
