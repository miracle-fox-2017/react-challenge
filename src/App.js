import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import IndexPage from './IndexPage'
import SinglePage from './SinglePage'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      articles: [],
    }

    
  }

  render () {    
    const linkStyle = {
      textDecoration: 'none',
      color: '#fff'
    }

    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title"><Link style={linkStyle} to="/">React News</Link></h1>
          </header>

          <Route exact path="/" component={IndexPage} />
          <Route exact path="/post" render={() => (<IndexPage/>)} />
          <Route path="/post/:postId" render={(props) => (<SinglePage {...props} />)} />
        </div>
      </Router>
    );
  }
}

export default App;
