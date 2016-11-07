import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link, browserHistory } from "react-router";
import MovieApp from "./movieApp.js";
import MovieList from "./movieList.js";
import MovieForm from "./movieForm.js";

class App extends React.Component {
  render () {
    return (
      <div className="app">
        <h1>Movies</h1>
        <ul role="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movies">List</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="movies" component={MovieApp} />
      <Route path="movie/:movieId" component={MovieForm} />
    </Route>
  </Router>
), document.getElementById("app"));
