import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import Hero from './Hero'
import HeroList from './HeroList.js'



class App extends Component {
  render() {
      return (
        <Router>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <Route exact path="/" component={Home} />
            <Route path="/:heroName" render={(props) => <HeroList {...props} /> } />
          </div>
        </Router>
    );
  }
}

export default App;
