import { Link } from 'react-router-dom';
import flag from '../assets/img/Placeholder.png';

const Teams = ({ id, name, logo }) => {
  return (
    <Link to={`/teams/${id}`} className='listitem'>
      <div className='listitem__info'>
        <img src={logo ? logo : flag} alt={name} />
        <h4 className='listitem__name'>{name}</h4>
      </div>
    </Link>
  );
};

export default Teams;
