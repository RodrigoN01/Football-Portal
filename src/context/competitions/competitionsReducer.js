import { SET_COMPETITIONS, SET_LOADING } from '../types';

const competitionsReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_COMPETITIONS:
      return {
        ...state,
        competitions: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default competitionsReducer;
