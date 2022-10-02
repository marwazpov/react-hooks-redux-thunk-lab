import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {createStore, applyMiddleware, compose} from "redux";
import { Provider } from "react";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import "bootstrap/dist/css/bootstrap.min.css";
import catReducer from "./features/cats/catsSlice.js";
import { Provider } from "react-redux";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
const store = createStore(catReducer,composedEnhancer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById("root"));
