import React, {Component} from "react"
import ReactDOM from "react-dom"
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory} from "react-router"
import {Provider} from "react-redux"
import {handleMovies} from "./redux/reducer";
import {initializeState} from "./redux/action";
import store from "./store"
import Movie from "./main";
import MovieInput from "./movieInput";
import MoviesHandler from "./movieHandler";


class NotFound extends Component {
  render () {
    <h1>Not Found this!</h1>
  }
}

const mapStateToProps = (state) => {
  return {
    todos: App(state.movie)
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Movie} />
        <Route path="/MovieInput/(:movieID)" component={MovieInput} handler={MovieInput}/>
        <Route path="/MoviesHandler" component={MoviesHandler} />
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>
, document.getElementById("app"));
