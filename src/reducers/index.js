const authInitialState = {
  currentUser: null
};

const dataInitialState = {
  users: {},
  posts: {},
  comments: {}
};

const usersInitialState = {
  selectedUser: null
};

export function authReducer(state = authInitialState, action) {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return { ...state, currentUser: action.currentUser };
    default:
      return state;
  }
}

export function dataReducer(state = dataInitialState, action) {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        users: { ...state.users, ...action.users },
        posts: { ...state.posts, ...action.posts },
        comments: { ...state.comments, ...action.comments }
      };
    case "SET_SELECTED_USER":
      return {
        ...state,
        users: { ...state.users, ...action.users },
        posts: { ...state.posts, ...action.posts },
        comments: { ...state.comments, ...action.comments }
      };
    case "SET_DATA":
      return {
        ...state,
        posts: { ...state.posts, ...action.posts },
        users: { ...state.users, ...action.users },
        comments: { ...state.comments, ...action.comments }
      };
    default:
      return state;
  }
}

export function usersReducer(state = usersInitialState, action) {
  switch (action.type) {
    case "SET_SELECTED_USER":
      return { ...state, selectedUser: action.selectedUser };
    default:
      return state;
  }
}
