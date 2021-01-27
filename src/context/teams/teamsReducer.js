import { SET_TEAMS, SET_SINGLE_TEAM, SET_LOADING } from '../types';

const teamsReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_TEAMS:
      return {
        ...state,
        teams: action.payload,
        loading: false,
      };
    case SET_SINGLE_TEAM:
      return {
        ...state,
        singleTeam: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default teamsReducer;
