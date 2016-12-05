import React, {Component} from "react"
import ReactDOM from "react-dom"
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory} from "react-router"
import {Provider} from "react-redux"
import {handleMovies} from "./reducer";
import {initializeState} from "./action";
import store from "./store"
import Movie from "./main";
import searcher from "./searcher";
import handler from "./handler";


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
        <Route path="/searcher/(:movieID)" component={searcher} handler={searcher}/>
        <Route path="/handler" component={handler} />
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>
, document.getElementById("app"));
