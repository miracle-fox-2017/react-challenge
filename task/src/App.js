import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link }  from 'react-router-dom'
import Navbar from './Navbar'
import TheArticle from './TheArticle' 
import ArticleId from './ArticleId' 


class App extends Component {
  
  render() {
    return (
      <Router>
      
      <div className="container-fluid">
        <div>
          <Navbar/>
        </div>
        <div>
          <Route exact path="/" component={TheArticle} />
          <Route path="/:url" render={(props) => <ArticleId {...props}/> } />
        </div>
      </div>
      </Router>

    )
  }
}

export default App;
