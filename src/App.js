import React, { Component } from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./components/Login";
import Home from "./components/Home";
import Navigation from "./components/Navigation";

import UserPage from "./components/UserPage";
import UsersList from "./components/UsersList";
import PostsList from "./components/PostsList";
import PostPage from "./components/PostPage";
import InfoOnNormalizedData from "./components/InfoOnNormalizedData";
import {
  getCurrentUser,
  loginUser,
  logoutUser,
  getUsers,
  getUserData,
  getPosts
} from "./actions";

class App extends Component {
  componentDidMount() {
    if (localStorage.getItem("jwt")) {
      this.props.getCurrentUser();
    }
    this.props.getPosts();
    this.props.getUsers();
  }

  render() {
    return (
      <div className="App">
        <Navigation id={this.props.currentUser} users={this.props.users} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                posts={this.props.posts}
                logoutUser={this.props.logoutUser}
                getPosts={this.props.getPosts}
              />
            )}
          />
          <Route
            path="/login"
            render={() => <Login loginUser={this.props.loginUser} />}
          />
          <Route path="/profile" render={props => <UserPage {...props} />} />
          <Route
            exact
            path="/users"
            render={() => (
              <UsersList
                users={this.props.users}
                getUsers={this.props.getUsers}
              />
            )}
          />
          <Route path="/users/:id" render={props => <UserPage {...props} />} />
          <Route exact path="/posts" component={PostsList} />
          <Route path="/posts/:id" render={props => <PostPage {...props} />} />
          <Route
            path="/lecture_page"
            render={props => (
              <InfoOnNormalizedData {...props} {...this.props} />
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(
  connect(
    ({ authReducer, usersReducer, dataReducer }) => ({
      ...authReducer,
      ...usersReducer,
      ...dataReducer
    }),
    {
      getCurrentUser,
      loginUser,
      getUsers,
      getUserData,
      getPosts,
      logoutUser
    }
  )(App)
);
