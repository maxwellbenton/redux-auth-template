const API_ROOT = `http://localhost:3000/api/v1`;

const headers = {
  "Content-Type": "application/json",
  Accepts: "application/json"
};

const getWithToken = url => {
  const token = localStorage.getItem("token");
  return fetch(url, {
    headers: { Authorization: token }
  }).then(res => res.json());
};

const getCurrentUser = () => {
  return getWithToken(`${API_ROOT}/current_user`);
};

const getUserData = userId => {
  return fetch(`${API_ROOT}/users/${userId}`).then(res => res.json());
};

const getUsers = () => {
  return fetch(`${API_ROOT}/users/`).then(res => res.json());
};

const getPostData = postId => {
  return fetch(`${API_ROOT}/posts/${postId}`).then(res => res.json());
};

const getPosts = () => {
  return fetch(`${API_ROOT}/posts/`).then(res => res.json());
};

const getCommentData = postId => {
  return fetch(`${API_ROOT}/posts/${postId}`).then(res => res.json());
};

const getComments = () => {
  return fetch(`${API_ROOT}/posts/`).then(res => res.json());
};

const login = data => {
  return fetch(`${API_ROOT}/login/`, {
    method: "POST",
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json());
};

export const adapter = {
  auth: {
    login,
    getCurrentUser
  },
  data: {
    getUsers,
    getUserData,
    getPosts,
    getPostData,
    getComments,
    getCommentData
  }
};
