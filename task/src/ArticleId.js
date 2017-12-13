import React from 'react'

class ArticleId extends  React.Component {
  constructor (props) {
    super()
    this.state = {
      berita: props.location.state.berita
    }
  }
  render () {
    return (
      <div>
        <h1>{this.state.berita.title}</h1>
        <br/>
        <img src={this.state.berita.urlToImage} alt="..." height="50%" width="50%"/>
        <p>Author: {this.state.berita.author}</p>
        <p>{this.state.berita.description}</p>
    </div>
    )
  }

  
}

export default ArticleId