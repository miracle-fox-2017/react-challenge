import React, { Component } from 'react'
import ArticleItem from './ArticleItem'
const ArticleList = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
      
    { props.articles.map((article, index) => {
        return (
          <div className="col-sm-6 col-md-5">
            
            <ArticleItem
              id= {index}
              author= {article.author}
              title= {article.title}
              description= {article.description}
              urlToImage= {article.urlToImage}
              url= {article.url}
              getArticle= {props.getArticle}
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