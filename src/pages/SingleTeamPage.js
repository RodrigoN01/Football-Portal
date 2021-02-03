import { useEffect, useContext } from 'react';
import flag from '../assets/img/Placeholder.png';

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
          <div className='singleteam__logo'>
            <img
              src={singleTeam.crestUrl ? singleTeam.crestUrl : flag}
              alt={singleTeam.name}
            />
            <h1>{singleTeam.name}</h1>
          </div>

          <div className='singleteam__info'>
            <h1>Squad</h1>
            {singleTeam.squad?.map((player, index) => (
              <p key={index} className='singleteam__squad'>
                <span>
                  <strong>{player.name}: </strong>
                </span>{' '}
                <span>{player.position}</span>
              </p>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SingleTeamPage;
