import React from 'react'
import ArticleModal from './ArticleModal'
import { Link } from 'react-router-dom'

const ArticleItem = (props) => {
  return (
      <div>
        <div className="card">
        <img src={props.urlToImage} alt="..." className="img-thumbnail"/>
          <div className="card-body">
            <h3 className="card-title">{props.title}</h3>
            <p>{props.description}</p>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => {props.getArticle(props.id)}}>
              Modal
            </button>  <Link class="btn btn-success" to= {{
              pathname: props.url,
              state: {
                berita: {
                  urlToImage : props.urlToImage,
                  title: props.title,
                  description: props.description,
                  author: props.author,
                }
              }
            }}>Router</Link>
            
          </div>
          <ArticleModal/>
        </div>
      </div>
  )
}

export default ArticleItem