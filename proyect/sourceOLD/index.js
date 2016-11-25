import React from "react"
import ReactDOM from "react-dom"
import {handleMovies} from "./reducer";
import {initializeState} from "./action";
import store from "./store";
import Application from "./movieApp"

store.dispatch(initializeState());

ReactDOM.render(
  <Application />
  , document.getElementById("app"));
