import handler from "./reducer";
import { createStore } from "redux";
import initializeState from "./action"


let store = createStore(handler);



export default store
