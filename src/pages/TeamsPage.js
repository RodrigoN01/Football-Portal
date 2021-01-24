import { useContext, useEffect } from 'react';

// Context
import TeamsContext from '../context/teams/teamsContext';

// Components
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';
import Teams from '../components/Teams';

const TeamsPage = ({ match }) => {
  const teamsContext = useContext(TeamsContext);
  const { loading, teams, getTeams } = teamsContext;

  useEffect(() => {
    getTeams(match.params.id);
  }, []);

  return (
    <div className='teamspage'>
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <div className='teamspage__list'>
          {teams.map((item) => (
            <Teams key={item.id} id={item.id} name={item.name} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamsPage;
