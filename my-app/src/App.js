import React, { Component } from 'react';
import './App.css';
import NewsList from './NewsList'
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      news: []
    }
  }

  componentWillMount(){
   this.getData()
  }

  getData(){
    axios.get('https://newsapi.org/v2/everything?sources=bbc-news&apiKey=39338eeb41a348e5b1d8ce0fbe0906b7')
    .then((dataNews) => {
      this.setState ({
        news: dataNews.data.articles
      })
    })
    .catch((reason)=> {
      console.log(reason)
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Today's News</h1>
        </header>
        {this.state.news.map((berita, index) => {
        return  <NewsList key={index} news={berita}/>
      }) }
      </div>
    );
  }
}

export default App;
