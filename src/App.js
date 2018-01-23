import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import MainPage from './MainPage'
import GameDetail from './GameDetail'
import Navbar from './Navbar'
import SearchPage from './SearchPage';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <div className="columns is-centered">
          <div className="column is-8">
            <div className="tile is-vertical">
              <Navbar/>
              <div className="tile is-parent">
                <article className="tile is-child notification is-danger">
                  <Route exact path="/" component={MainPage}/>
                  <Route exact path="/game/:id" component={GameDetail}/>
                  <Route path="/game/search/:keyword" component={SearchPage}/>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
