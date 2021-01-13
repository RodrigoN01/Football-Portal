import { Link } from 'react-router-dom';

const Competition = ({ id, name, area }) => {
  return (
    <Link to={`/competitions/${id}/teams`} className='listitem'>
      <div className='listitem__info'>
        <h4 className='info__name'>{name}</h4>
        <h4 className='info__area'>{area}</h4>
      </div>
    </Link>
  );
};

export default Competition;
