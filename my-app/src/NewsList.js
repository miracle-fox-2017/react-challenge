import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';

class NewsList extends Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3>{this.props.news.title} </h3></div>
        <div className="panel-body">
          <img src={this.props.news.urlToImage} alt="" />
          <p>{this.props.news.description}</p>
          <Link to={{
            pathname: this.props.news.url,
            state: {
              title: this.props.news.title,
              description: this.props.news.description,
              urlToImage: this.props.news.urlToImage,
              url: this.props.news.url,
              publishedAt: this.props.news.publishedAt,
              author: this.props.news.author,
              source: this.props.news.source
            }
          }}>See More</Link>
        </div>
      </div>
    )
  }
}

export default NewsList
