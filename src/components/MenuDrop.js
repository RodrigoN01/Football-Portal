import { Link } from 'react-router-dom';

const MenuDrop = ({ show, click }) => {
  const menuDropClass = ['menudrop'];

  if (show) {
    menuDropClass.push('show');
  }

  return (
    <div className={menuDropClass.join(' ')}>
      <ul className='menudrop__links' onClick={click}>
        <li>
          <Link to='/'>Home</Link>
        </li>

        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuDrop;
