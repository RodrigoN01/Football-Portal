import { useContext, useEffect } from 'react';

// Context
import CompetitionsContext from '../context/competitions/competitionsContext';

// Components
import Competition from '../components/Competition';
import Loader from '../components/Loader';

const HomePage = () => {
  const competitionsContext = useContext(CompetitionsContext);
  const { loading, competitions, getCompetitions } = competitionsContext;

  useEffect(() => {
    getCompetitions();
  }, []);

  return (
    <div className='homepage'>
      {loading ? (
        <Loader />
      ) : (
        <div className='homepage__list'>
          {competitions.map((item) => (
            <Competition
              key={item.competitions.id}
              id={item.competitions.id}
              name={item.competitions.name}
              area={item.competitions.area.name}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
