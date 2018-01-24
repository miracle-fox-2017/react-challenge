import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';

class Sidebar extends Component {
  render() {
    return (
      <p>  <Link to={{
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
      }}>
        {this.props.news.title}
      </Link> </p>
    )
  }
}

export default Sidebar
