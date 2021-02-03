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
      `http://api.football-data.org/v2/competitions/`,
      {
        headers: {
          'X-Auth-Token': API_KEY,
        },
      }
    );

    const filteredCompetitions = (arr, index) => {
      return index.map((idx) => arr[idx]);
    };

    dispatch({
      type: SET_COMPETITIONS,
      payload: filteredCompetitions(data.competitions, [
        23,
        45,
        46,
        49,
        50,
        57,
        66,
        80,
        93,
        107,
        128,
        149,
      ]),
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
