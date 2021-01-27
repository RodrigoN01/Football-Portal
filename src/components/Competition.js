import { Link } from 'react-router-dom';
import { images } from '../data';

const Competition = ({ id, name, area }) => {
  const imagePath = images.find((item) => item.id === id)?.path;

  return (
    <Link to={`/competitions/${id}/teams`} className='listitem'>
      <img src={imagePath} alt={name} />
      <div className='listitem__info'>
        <h4 className='info__name'>{name}</h4>
        <h4 className='info__area'>{area}</h4>
      </div>
    </Link>
  );
};

export default Competition;
