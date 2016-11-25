import React from "react"
import ReactDOM from "react-dom"
import {handler} from "./reducer";
import {initializeState} from "./action";
import store from "./store";
import Application from "./main"

store.dispatch(initializeState());

ReactDOM.render(
  <Application />
  , document.getElementById("app"));
