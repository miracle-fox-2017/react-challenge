import React from 'react'

const ArticleItem = (props) => {
  return (
      <div>
        <div className="thumbnail">
        <img src={props.urlToImage} alt="..." />
          <div className="caption">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
          </div>
        </div>
      </div>
  )
}

export default ArticleItem