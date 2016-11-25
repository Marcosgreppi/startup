import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import {removeMovie} from "./action";
import {handler} from "./reducer";
import store from "./store";
import movie from "./movies";

class list extends React.Component {
  constructor (props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
  };
  render () {
    return (
      <div>
        <ol>
          {this.renderItems()}
        </ol>
      </div>
    );
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
        {`Title: ${item.title} Score: ${item.score} ID: ${item.id}`}
      </li>
    );
  }
};

export default list;
