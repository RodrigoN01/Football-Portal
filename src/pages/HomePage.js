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
              key={item.id}
              id={item.id}
              name={item.name}
              area={item.area.name}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
