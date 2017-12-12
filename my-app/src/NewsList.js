import React, { Component } from 'react';
import './App.css';

class NewsList extends Component {
  render() {
    return (
      <div className="container">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3>{this.props.news.title} </h3></div>
        <div className="panel-body">
          <img src={this.props.news.urlToImage} alt=""/>
          <p>{this.props.news.description}</p>
          <a target="blank" href={this.props.news.url}>{this.props.news.url}</a>
          <p>  <small> Author: <a target="blank" href={this.props.news.author}>{this.props.news.author}</a></small></p>
          <p> <small>{this.props.news.publishedAt}</small></p>
        </div>
      </div>
    </div>
    )
  }
}

export default NewsList
