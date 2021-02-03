import { useReducer } from 'react';
import axios from 'axios';
import TeamsContext from './teamsContext';
import TeamsReducer from './teamsReducer';
import { SET_LOADING, SET_TEAMS, SET_SINGLE_TEAM } from '../types';

const API_KEY = process.env.REACT_APP_API_KEY;

const TeamsState = ({ children }) => {
  const initialState = {
    teams: {},
    singleTeam: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(TeamsReducer, initialState);

  const getTeams = async (id) => {
    dispatch({ type: SET_LOADING });

    const { data } = await axios.get(
      `https://api.football-data.org/v2/competitions/${id}/teams`,
      {
        headers: {
          'X-Auth-Token': API_KEY,
        },
      }
    );

    dispatch({
      type: SET_TEAMS,
      payload: data,
    });
  };

  const getSingleTeam = async (id) => {
    dispatch({ type: SET_LOADING });

    const { data } = await axios.get(
      `https://api.football-data.org/v2/teams/${id}`,
      {
        headers: {
          'X-Auth-Token': API_KEY,
        },
      }
    );

    dispatch({
      type: SET_SINGLE_TEAM,
      payload: data,
    });
  };

  return (
    <TeamsContext.Provider
      value={{
        teams: state.teams,
        singleTeam: state.singleTeam,
        loading: state.loading,
        getTeams,
        getSingleTeam,
      }}
    >
      {children}
    </TeamsContext.Provider>
  );
};

export default TeamsState;
