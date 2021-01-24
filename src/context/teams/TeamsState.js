import { useReducer } from 'react';
import axios from 'axios';
import TeamsContext from './teamsContext';
import TeamsReducer from './teamsReducer';
import {
  SET_LOADING,
  SET_TEAMS,
  SET_SINGLE_TEAM,
  CLEAR_TEAMS,
  CLEAR_SINGLE_TEAM,
} from '../types';

const API_KEY = process.env.REACT_APP_API_KEY;

const TeamsState = ({ children }) => {
  const initialState = {
    teams: [],
    singleTeam: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(TeamsReducer, initialState);

  const getTeams = async (id) => {
    dispatch({ type: SET_LOADING });

    const { data } = await axios.get(
      `http://api.football-data.org/v2/competitions/${id}/teams`,
      {
        headers: {
          'X-Auth-Token': API_KEY,
        },
      }
    );

    console.log(data);

    dispatch({
      type: SET_TEAMS,
      payload: data.teams,
    });
  };

  return (
    <TeamsContext.Provider
      value={{
        teams: state.teams,
        singleTeam: state.singleTeam,
        loading: state.loading,
        getTeams,
      }}
    >
      {children}
    </TeamsContext.Provider>
  );
};

export default TeamsState;
