import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import ArticleList from './ArticleList'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor(){
    super()
    this.state = {
      articles: []
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
          <ArticleList articles = {this.state.articles}/>
        </div>
      </div>
    );
  }

  componentWillMount() {
    axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7c22194db6574183a086c357016e6e6f')
    .then(({data}) => {
      this.setState({
        articles: data.articles
      })
      console.log( this.state.articles)
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export default App;
