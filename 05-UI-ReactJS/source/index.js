import React from "react"
import ReactDOM from "react-dom"
import {handleMovies} from "./redux/reducer";
import {initializeState} from "./redux/action";
import store from "./store";
import Application from "./movieApp"

ReactDOM.render(
  <Application />
  , document.getElementById("app"));
