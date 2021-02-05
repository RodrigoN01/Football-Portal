import { useReducer } from 'react';
import axios from 'axios';
import CompetitionsContext from './competitionsContext';
import CompetitionsReducer from './competitionsReducer';
import { SET_COMPETITIONS, SET_LOADING } from '../types';

const API_KEY = process.env.REACT_APP_API_KEY;

const CompetitionsState = ({ children }) => {
  const initialState = {
    competitions: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(CompetitionsReducer, initialState);

  const getCompetitions = async () => {
    dispatch({ type: SET_LOADING });

    const { data } = await axios.get(
      `https://api.football-data.org/v2/competitions/`,
      {
        headers: {
          'X-Auth-Token': API_KEY,
        },
      }
    );

    const competitionIDs = [
      2002,
      2013,
      2016,
      2021,
      2001,
      2015,
      2019,
      2003,
      2017,
      2000,
      2018,
      2014,
    ];

    const filteredCompetitions = (arr) => {
      return arr.filter(({ id }) => competitionIDs.includes(id));
    };

    dispatch({
      type: SET_COMPETITIONS,
      payload: filteredCompetitions(data.competitions),
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
