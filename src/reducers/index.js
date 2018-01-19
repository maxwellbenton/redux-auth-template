export function authReducer(
  state = { currentUser: { id: null, username: null } },
  action
) {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return { ...state, currentUser: action.currentUser };
    default:
      return state;
  }
}

export function postsReducer(state = { posts: [] }, action) {
  switch (action.type) {
    case "SET_POSTS":
      return { ...state, posts: state.posts.concat(action.posts) };
    default:
      return state;
  }
}

export function usersReducer(
  state = {
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
  },
  action
) {
  switch (action.type) {
    case "SET_USERS":
      return { ...state, users: state.users.concat(action.users) };
    case "SET_SELECTED_USER":
      return { ...state, selectedUser: action.selectedUser };
    default:
      return state;
  }
}
