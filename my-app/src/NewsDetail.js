import React, { Component } from 'react';
import './App.css';
import Header from './Header'

class NewsDetail extends Component {
  constructor(props) {
    super()
    this.state = {
      news: props.location.state
    }
  }
  render() {
    return (
      <div className="text-center">
        <Header />
        <div className="container">
          <div className="panel panel-default text-center">
            <div className="panel-heading">
              <h3> <p>{this.state.news.berita.title}</p></h3>
            </div>
            <div className="panel-body">
              <img src={this.state.news.berita.urlToImage} alt="" />
              <p>{this.state.news.berita.description}</p>
              <p>{this.state.news.berita.source.name}</p>
              <p> <a href={this.state.news.berita.url}>{this.state.news.berita.url} </a></p>
            </div>
            <div className="panel-footer">
              <p>Reported By: {this.state.news.berita.author}</p>
              <p><small>{this.state.news.berita.publishedAt}</small></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsDetail
