import { Link } from 'react-router-dom';

const Navbar = ({ click }) => {
  return (
    <div className='navbar'>
      <div className='container'>
        <nav className='navbar__nav'>
          <h3 className='nav__brand'>
            <Link to='/'>
              <i className='fas fa-futbol'></i> FOOTBALL PORTAL
            </Link>
          </h3>
          <ul className='nav__links'>
            <li className='links__link'>
              <Link to='/'>HOME</Link>
            </li>
            <li className='links__link'>
              <Link to='/about'>ABOUT</Link>
            </li>
          </ul>
          <div className='hamburger__menu' onClick={click}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
