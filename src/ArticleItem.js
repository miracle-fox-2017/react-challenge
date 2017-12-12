import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class ArticleItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      article : {
        title: {
          rendered: ''
        },
        content: {
          rendered: ''
        }
      }
    }
  }

  doGetSelectedPost(post, index) {
    this.props.getSelected(post, index)
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
      width: '100%',
      marginBottom: '20px'
    }

    const archiveButtonStyle = {
      border: '0',
      background: '#5f5858',
      color: '#fff',
      padding: '10px 20px',
      marginTop: '20px',
      width: '50%'
    }

    const linkStyle = {
      textDecoration: 'none',
      color: 'crimson'
    }


    return (
      <div className="articleItem" style={articleItemStyle}>
        <h2 className="articleTitle"><Link style={linkStyle} to={{ pathname: `/post/${this.props.article.id}` }}>{this.props.article.title.rendered}</Link></h2>

        <img alt={this.props.article.title.rendered} style={featuredImageStyle} src={
          this.props.article._embedded !== null && typeof this.props.article._embedded['wp:featuredmedia'] !== 'undefined' ? this.props.article._embedded['wp:featuredmedia'][0].source_url : 'https://placeimg.com/300/200/animal'} />

        <br />

        <div dangerouslySetInnerHTML={{ __html: this.props.article.excerpt.rendered }}></div>
        <br/>
        <button style={archiveButtonStyle} onClick={this.doGetSelectedPost.bind(this, this.props.article, this.props.index)}>Archive It</button>
      </div>
    )
  }
}

