import React, { Component } from "react";
import ReactDOM from "react-dom"
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory} from "react-router";
import {Provider} from "react-redux";
import {initializeState} from "./action";
import {handler} from "./reducer";
import store from "./store";
import movie from "./movies";
import search from "./search";
import list from "./list";

class Application extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={movie} />
            <Route path="/list" component={list} handler={list} />
            <Route path="/search" component={search} />
          <Route path="*" component={NotFound} />
        </Router>
      </Provider>
    );
  };
}

const NotFound = () => (
  <h1>Not Found this!</h1>)


export default Application
