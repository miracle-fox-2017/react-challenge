import React, { Component } from 'react'
import ArticleList from './ArticleList'
import axios from 'axios'
import ArticleItem from './ArticleItem';

class TheArticle extends Component {
  constructor () {
    super ()
    this.state = {
      articles: []
    }

    this.getArticleById = this.getArticleById.bind(this)
  }

  getArticleById (id) {
    let article = [] 
    this.state.articles.forEach((item, index) => {
      if(index === id){
        article.push(item)
      } 
    })

    localStorage.setItem('article', JSON.stringify(article[0])) 
  }

  render () {
    return (
      <div>
      <ArticleList articles = {this.state.articles} getArticle={this.getArticleById} />
      adasd
      </div>
    )
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

export default TheArticle