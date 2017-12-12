import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bulma/css/bulma.css';

import TheNavBar from './TheNavBar'
import Home from './Home'
import TheSideBar from './TheSideBar'
import ImageShow from './Flick';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route path="/" component={TheNavBar} />
          <div className="container head-fix">
            <div className="columns">
              <Route path="/" component={TheSideBar} />
              <Route exact path="/" component={Home} />
              <Route path="/flick/:farmid/:serverid/:id/:secret" component={ImageShow} message="hehehe"/>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
