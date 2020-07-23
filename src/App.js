import React from 'react';
import './mysass.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import about from './components/about';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about-me' component={about} />
      </Switch>
    </Router>
  );
}

export default App;
