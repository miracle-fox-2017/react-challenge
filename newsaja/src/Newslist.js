import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Newslist extends Component {
  render() {
    return (
      <div>
        <Link to={{pathname: this.props.article.url, state: {news: {
          author: this.props.article.author,
          description: this.props.article.description,
          publishedAt: this.props.article.publishedAt,
          title: this.props.article.title,
          urlToImage: this.props.article.urlToImage,
          url: this.props.article.url
        }}}}>{this.props.article.title}</Link>
      </div>
    )
  }
}

export default Newslist;
