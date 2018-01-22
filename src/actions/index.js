import normalize from "../normalizer";

export function getCurrentUser() {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/current_user", {
      headers: { Authorization: localStorage.getItem("jwt") }
    })
      .then(res => res.json())
      .then(currentUser => {
        let data = normalize([currentUser], "users", ["posts", "comments"]);
        currentUser = currentUser.id;

        dispatch({ type: "SET_CURRENT_USER", currentUser, ...data });
      });
  };
}

export function loginUser({ username, password }) {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/auth/`, {
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
        return currentUser.id;
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
      .then(selectedUser => {
        let data = normalize([selectedUser], "users", ["posts", "comments"]);
        selectedUser = selectedUser.id;

        dispatch({ type: "SET_SELECTED_USER", selectedUser, ...data });
      });
  };
}

export function getUsers() {
  return dispatch => {
    fetch(`http://localhost:3000/api/v1/users`)
      .then(res => res.json())
      .then(users => {
        let data = normalize(users, "users", ["posts", "comments"]);

        dispatch({ type: "SET_DATA", ...data });
      });
  };
}

export function getPosts() {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/posts")
      .then(res => res.json())
      .then(posts => {
        let data = normalize(posts, "posts", ["users", "comments"]);

        dispatch({ type: "SET_DATA", ...data });
      });
  };
}
