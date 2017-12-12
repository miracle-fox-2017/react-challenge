import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
var html = require('react-escape-html');
var striptags = require('striptags');

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      articles: [],
    }
  }

  componentWillMount () {
    const apiUrl = 'http://www.sfexaminer.com/wp-json/wp/v2/posts/?_embed'

    axios.get(apiUrl)
      .then(({data}) => {
        this.setState({
          articles : data
        })

      }).catch(err => console.error({ message: 'Something wrong', error: err.message }));
  }

  render () {
    const articleItemStyle = {
      border: '1px solid #ddd',
      margin: '20px',
      padding: '10px',
      width: '50%',
      background: 'ghostwhite',
    };

    const featuredImageStyle = {
      width: '100%' 
    }

    const articleListStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React News</h1>
        </header>

        <div className="articleList" style={articleListStyle}>
          {
            this.state.articles.map((article, index) => {
              return (
                <div className = "articleItem" key={index} style={articleItemStyle}>
                  <h2 className="articleTitle">{article.title.rendered}</h2>
            
                  <img style={featuredImageStyle} src = {
                      article._embedded !== null && typeof article._embedded['wp:featuredmedia'] !== 'undefined' ? article._embedded['wp:featuredmedia'][0].source_url : 'https://placeimg.com/300/200/animal'}/>
                  
                  <br/>

                  { striptags(article.excerpt.rendered) }
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
