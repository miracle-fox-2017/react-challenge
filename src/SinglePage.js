import React, { Component } from 'react'
import axios from 'axios'
import striptags from 'striptags';

export default class SinglePage extends Component {
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

  render() {
    const articleListStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }

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

    return (
      <div className="articleList" style={articleListStyle}>
        <div className="articleItem" style={articleItemStyle}>
          <h2 className="articleTitle">{this.state.article.title.rendered}</h2>

          <br />
          <div dangerouslySetInnerHTML={{ __html: this.state.article.content.rendered }}></div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    let postId = this.props.match.params.postId;
    const apiUrl = `http://www.sfexaminer.com/wp-json/wp/v2/posts/${+postId}?_embed`;
    
    axios.get(apiUrl)
      .then(({ data }) => {
        this.setState({
          article: data
        })

      }).catch(err => console.error({ message: 'Something wrong', error: err.message }));
  }
}
