import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bulma/css/bulma.css';

import TheNavBar from './TheNavBar'
import TheSideBar from './TheSideBar'
import ImageShow from './Flick';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route path="/" component={TheNavBar} />
          <div className="container">
            <div className="coloumns">
              <Route path="/" component={TheSideBar} />
              <Route path="/flick/:farmid/:serverid/:id/:secret" component={ImageShow} message="hehehe"/>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
