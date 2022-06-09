import { ACTIONS } from "./GitHubContext/GithubActions";

export const githubReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_USERS:
      return { ...state, users: action.payload, loading: false };
    case ACTIONS.GET_USERS_AND_REPOS:
      return { ...state, user: action.payload.user, repos: action.payload.repos, loading: false };
    case ACTIONS.SET_LOADING:
      return { ...state, loading: true };
    case ACTIONS.CLEAR_USERS:
      return { users: [] };
    default:
      return { ...state };
  }
};
