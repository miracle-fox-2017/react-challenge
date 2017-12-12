import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import striptags from 'striptags';
import ArticleItem from './ArticleItem'

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
                <ArticleItem key={index} article={article}/>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
