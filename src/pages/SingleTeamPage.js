import { useEffect, useContext } from 'react';

// Context
import TeamsContext from '../context/teams/teamsContext';

// Components
import Loader from '../components/Loader';

const SingleTeamPage = ({ match }) => {
  const { getSingleTeam, singleTeam, loading } = useContext(TeamsContext);

  useEffect(() => {
    getSingleTeam(match.params.id);

    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='singleteam'>
          <img src={singleTeam.crestUrl} alt={singleTeam.name} />
          <div className='singleteam__info'>
            <h1>{singleTeam.name}</h1>
            <h1>Squad</h1>
            {singleTeam.squad?.map((player, index) => (
              <span key={index} className='singleteam__squad'>
                {player.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SingleTeamPage;
