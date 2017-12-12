import React, { Component } from 'react'
import ArticleItem from './ArticleItem'
const ArticleList = (props) => {
  return (
    <div className="container">
      <div className="row">
      
    { props.articles.map((article, index) => {
        return (
          <div className="col-sm-6 col-md-5">
            
            <ArticleItem
              key= {index}
              author= {article.author}
              title= {article.title}
              description= {article.description}
              urlToImage= {article.urlToImage}
            />
          </div>
        )
      })
    }
      </div>
    </div>
  )
}


export default ArticleList