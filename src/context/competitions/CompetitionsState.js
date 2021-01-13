import { useReducer } from 'react';
import axios from 'axios';
import CompetitionsContext from './competitionsContext';
import CompetitionsReducer from './competitionsReducer';
import { SET_COMPETITIONS, SET_LOADING } from '../types';

const CompetitionsState = ({ children }) => {
  const initialState = {
    competitions: [],
    singleCompetition: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(CompetitionsReducer, initialState);

  const getCompetitions = async () => {
    dispatch({ type: SET_LOADING });

    const { data } = await axios.get(
      `http://api.football-data.org/v2/competitions/`
    );

    console.log(data);

    dispatch({
      type: SET_COMPETITIONS,
      payload: data,
    });
  };

  return (
    <CompetitionsContext.Provider
      value={{
        competitions: state.competitions,
        loading: state.loading,
        getCompetitions,
      }}
    >
      {children}
    </CompetitionsContext.Provider>
  );
};

export default CompetitionsState;
