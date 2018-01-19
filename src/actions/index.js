export function getCurrentUser() {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/current_user", {
      headers: { Authorization: localStorage.getItem("jwt") }
    })
      .then(res => res.json())
      .then(currentUser => dispatch({ type: "SET_CURRENT_USER", currentUser }));
  };
}

export function loginUser({ username, password }) {
  return dispatch => {
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
        dispatch({ type: "SET_CURRENT_USER", currentUser });
      });
  };
}

export function logoutUser() {
  localStorage.removeItem("jwt");
  return { type: "LOGOUT_USER" };
}

export function getUserData(userId) {
  return dispatch => {
    fetch(`http://localhost:3000/api/v1/users/${userId}`)
      .then(res => res.json())
      .then(selectedUser =>
        dispatch({ type: "SET_SELECTED_USER", selectedUser })
      );
  };
}

export function getUsers() {
  return dispatch => {
    fetch(`http://localhost:3000/api/v1/users`)
      .then(res => res.json())
      .then(users => dispatch({ type: "SET_USERS", users }));
  };
}

export function getPosts() {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/posts")
      .then(res => res.json())
      .then(posts => dispatch({ type: "SET_POSTS", posts }));
  };
}

