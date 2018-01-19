import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { authReducer, postsReducer, usersReducer } from "./reducers";
import thunk from "redux-thunk";
import App from "./App";

const rootReducer = combineReducers({
  authReducer,
  postsReducer,
  usersReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const Root = () => {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
