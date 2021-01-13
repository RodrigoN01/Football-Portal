import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SingleTeamPage from './pages/SingleTeamPage';
import TeamsPage from './pages/TeamsPage';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={AboutPage} />
          <Route path='/singleteam/:id' component={SingleTeamPage} />
          <Route path='/teams/:id' component={TeamsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
