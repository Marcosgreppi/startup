import React, { Component } from "react"
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory} from "react-router"
import {Provider} from "react-redux";
import Movie from "./movie"
import MoviesHandler from "./movieHandler";
import MovieInput from "./movieInput";
import store from "./store";

class Application extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={Movie} />
            <Route path="/MovieInput/(:movieID)" component={MovieInput} handler={MovieInput}/>
            <Route path="/MoviesHandler" component={MoviesHandler} />
          <Route path="*" component={NotFound} />
        </Router>
      </Provider>
    )
  }
}
// const NotFound = () => (
class NotFound extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h1>Not Found this!</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: App(state.movie)
  }
}

export default Application;
