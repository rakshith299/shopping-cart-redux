import {createStore} from "redux";
import counterReducer from "./reducer/counterReducer";

let store = createStore(counterReducer);

export default store;

