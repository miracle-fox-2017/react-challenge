import React from 'react'

class ArticleModal extends React.Component  {
    constructor () {
      super()
      this.state = {
        article: JSON.parse(localStorage.getItem('article'))
      }
    }

  render () {
    return (
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">{this.state.article.title}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <img src={this.state.article.urlToImage} alt="Smiley face" height="70%" width="70%"/><br/>
              {this.state.article.description}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    )  
  }
}

export default ArticleModal