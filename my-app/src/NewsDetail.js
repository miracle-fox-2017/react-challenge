import React, { Component } from 'react';
import './App.css';
import Header from './Header'

class NewsDetail extends Component {
  render() {
    return (
      <div className="text-center">
        <Header />
        <div className="container">
          <div className="panel panel-default text-center">
            <div className="panel-heading">
              <h3> <p>{this.props.location.state.title}</p></h3>
            </div>
            <div className="panel-body">
              <img src={this.props.location.state.urlToImage} alt="" />
              <p>{this.props.location.state.description}</p>
              <p>{this.props.location.state.source.name}</p>
              <p> <a href={this.props.location.state.url}>{this.props.location.state.url} </a></p>
            </div>
            <div className="panel-footer">
              <p>Reported By: {this.props.location.state.author}</p>
              <p><small>{this.props.location.state.publishedAt}</small></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsDetail
