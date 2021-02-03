import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MenuDrop from './components/MenuDrop';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SingleTeamPage from './pages/SingleTeamPage';
import TeamsPage from './pages/TeamsPage';

function App() {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <Router>
      <div className='pagewrap'>
        <Navbar click={() => setMenuToggle(true)} />
        <MenuDrop show={menuToggle} click={() => setMenuToggle(false)} />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/about' component={AboutPage} />
            <Route path='/teams/:id' component={SingleTeamPage} />
            <Route path='/competitions/:id/teams' component={TeamsPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
