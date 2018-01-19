import React, { Component } from "react";
import { Link, Switch, Route, withRouter, Redirect } from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";
import UserPage from "./components/UserPage";
import UsersList from "./components/UsersList";
import PostsList from "./components/PostsList";
import PostPage from "./components/PostPage";

class App extends Component {
  state = {
    currentUser: {
      id: null,
      username: null
    },
    posts: [],
    users: [],
    selectedPost: null,
    selectedUser: {
      id: null,
      username: null,
      large_image: null,
      small_image: null,
      isbn: null,
      posts: [],
      comments: []
    }
  };

  componentDidMount() {
    if (localStorage.getItem("jwt")) {
      this.getCurrentUser();
    }
    this.getPosts();
  }

  render() {
    console.log(this.state);

    return (
      <div className="App">
        <Navigation
          id={this.state.currentUser.id}
          username={this.state.currentUser.username}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                posts={this.state.posts}
                logoutUser={this.logoutUser}
                getPosts={this.getPosts}
              />
            )}
          />
          <Route
            path="/login"
            render={() => <Login loginUser={this.loginUser} />}
          />
          <Route path="/profile" component={Profile} />
          <Route
            exact
            path="/users"
            render={() => (
              <UsersList users={this.state.users} getUsers={this.getUsers} />
            )}
          />
          <Route
            path="/users/:id"
            render={props => (
              <UserPage
                {...props}
                getUserData={this.getUserData}
                user={this.state.selectedUser}
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

  logoutUser = () => {
    localStorage.removeItem("jwt");
    this.setState({ currentUser: null });
  };

  loginUser = ({ username, password }) => {
    fetch(`http://localhost:3000/api/v1/auth/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({ username, password })
    })
      .then(res => res.json())
      .then(currentUser => {
        localStorage.setItem("jwt", currentUser.jwt);
        this.setState({ currentUser });
        this.props.history.push(`/users/${currentUser.id}`);
      });
  };

  getCurrentUser = () => {
    fetch("http://localhost:3000/api/v1/current_user", {
      headers: { Authorization: localStorage.getItem("jwt") }
    })
      .then(res => res.json())
      .then(currentUser => this.setState({ currentUser }));
  };

  getPosts = () => {
    fetch("http://localhost:3000/api/v1/posts")
      .then(res => res.json())
      .then(posts =>
        this.setState(prevState => ({ posts: prevState.posts.concat(posts) }))
      );
  };

  getUserData = userId => {
    fetch(`http://localhost:3000/api/v1/users/${userId}`)
      .then(res => {
        if (res.ok) return res.json();
        this.props.history.push("/");
      })
      .then(selectedUser => this.setState({ selectedUser }));
  };

  getUsers = () => {
    fetch(`http://localhost:3000/api/v1/users/`)
      .then(res => {
        if (res.ok) return res.json();
        this.props.history.push("/");
      })
      .then(users =>
        this.setState(prevState => ({ users: prevState.users.concat(users) }))
      );
  };
}

export default withRouter(App);
