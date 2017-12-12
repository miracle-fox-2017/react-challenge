import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import NewsList from './NewsList'
import Header from './Header'


class Home extends Component {
  constructor() {
    super()
    this.state = {
      news: []
    }
  }

  componentWillMount() {
    this.getData()
  }
  getData() {
    axios.get('https://newsapi.org/v2/everything?sources=al-jazeera-english&apiKey=39338eeb41a348e5b1d8ce0fbe0906b7')
      .then((dataNews) => {
        console.log(dataNews)
        this.setState({
          news: dataNews.data.articles
        })
      })
      .catch((reason) => {
        console.log(reason)
      })
  }
  render() {
    return (

      <div className="App">
        <Header />
        <div className="container">
          <div className="col-md-12">
            <div className="col-md-2">
            </div>
            <div className="col-md-8">
              {this.state.news.map((berita, index) => {
                return <NewsList key={index} news={berita} />
              })}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Home
