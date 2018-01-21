const authInitialState = {
  currentUser: { id: null, username: null, posts: [], comments: [] }
};
const comments = { comments: [] };
const postsInitialState = { posts: [] };
const usersInitialState = {
  users: [],
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

export function authReducer(state = authInitialState, action) {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return { ...state, currentUser: action.currentUser };
    default:
      return state;
  }
}

export function postsReducer(state = postsInitialState, action) {
  switch (action.type) {
    case "SET_POSTS":
      return { ...state, posts: state.posts.concat(action.posts) };
    default:
      return state;
  }
}

export function usersReducer(state = usersInitialState, action) {
  switch (action.type) {
    case "SET_USERS":
      return { ...state, users: state.users.concat(action.users) };
    case "SET_SELECTED_USER":
      return { ...state, selectedUser: action.selectedUser };
    default:
      return state;
  }
}
