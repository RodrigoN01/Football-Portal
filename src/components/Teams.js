import { Link } from 'react-router-dom';

const Teams = ({ id, name, color }) => {
  return (
    <Link to={`/teams/${id}`} className='listitem'>
      <div className='listitem__info'>
        <h4 className='listitem__name'>{name}</h4>
        <h4 className='listitem__color'>{color}</h4>
      </div>
    </Link>
  );
};

export default Teams;
