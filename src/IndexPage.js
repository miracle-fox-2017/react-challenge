import React, { Component } from 'react'
import ArticleItem from './ArticleItem'
import axios from 'axios';

export default class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: []
    }

    this.getSelectedPost = this.getSelectedPost.bind(this)
  }

  getSelectedPost(post, index) {
    this.state.articles.splice(index, 1)

    this.setState({
      articles: this.state.articles
    })
  }

  render () {
    const articleListStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }

    return (
      <div className="articleList" style={articleListStyle}>
        {
          this.state.articles.map((article, index) => {
            return (
              <ArticleItem key={index} index={index} article={article} getSelected={this.getSelectedPost} />
            )
          })
        }
      </div>
    )
  }

  componentWillMount() {
    const apiUrl = 'http://www.sfexaminer.com/wp-json/wp/v2/posts?_embed'

    axios.get(apiUrl)
      .then(({ data }) => {
        this.setState({
          articles: data
        })

      }).catch(err => console.error({ message: 'Something wrong', error: err.message }));
  }
}
