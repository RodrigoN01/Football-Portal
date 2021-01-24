import {
  SET_TEAMS,
  SET_SINGLE_TEAM,
  CLEAR_TEAMS,
  CLEAR_SINGLE_TEAM,
  SET_LOADING,
} from '../types';

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
    case CLEAR_TEAMS:
      return {
        ...state,
        teams: {},
      };
    case SET_SINGLE_TEAM:
      return {
        ...state,
        singleTeam: action.payload,
        loading: false,
      };
    case CLEAR_SINGLE_TEAM:
      return {
        ...state,
        singleTeam: {},
      };
    default:
      return state;
  }
};

export default teamsReducer;
