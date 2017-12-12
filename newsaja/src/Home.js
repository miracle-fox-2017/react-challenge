import React, { Component } from 'react'
import axios from 'axios'
import Newslist from './Newslist'
const newsApi = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=5981474fde55432a9656bea68c9267bd'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    axios.get(newsApi)
         .then(({data}) => {
           this.setState({articles: data.articles})
           console.log(this.state.articles)
         })
         .catch((err) => {
           console.log(err)
         })
  }

  render() {
		return(
			<div>
		     	{ this.state.articles.map(((article,index) => {
			        return (
			          <Newslist article={article} key={index}/>
			        )
		    	  }))
		     	}
		    </div>
		)
	}
}

export default Home;
