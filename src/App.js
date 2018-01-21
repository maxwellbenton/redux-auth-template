import React, { Component } from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./components/Login";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";
import UserPage from "./components/UserPage";
import UsersList from "./components/UsersList";
import PostsList from "./components/PostsList";
import PostPage from "./components/PostPage";
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
        <Navigation
          id={this.props.currentUser.id}
          username={this.props.currentUser.username}
        />
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
          <Route
            path="/profile"
            render={props => <Profile user={this.props.currentUser} />}
          />
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
          <Route
            path="/users/:id"
            render={props => (
              <UserPage
                {...props}
                getUserData={this.props.getUserData}
                user={this.props.selectedUser}
              />
            )}
          />
          <Route exact path="/posts" component={PostsList} />
          <Route path="/posts/:id" render={props => <PostPage {...props} />} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(
  connect(
    ({ authReducer, usersReducer, postsReducer }) => ({
      ...authReducer,
      ...usersReducer,
      ...postsReducer
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
