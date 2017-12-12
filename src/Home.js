import React, { Component } from 'react'
import Hero from './Hero'	
import axios from 'axios'
const heroApi = `http://api.herostats.io/heroes/all`

class Home extends Component {
	constructor() {
      super();
      this.state = {
      heroes: []
      }
	}	

	componentDidMount() {
	    axios.get(heroApi)
	    .then(response => {
	      let tempHero = []
	      for (let hero in response.data){
	        tempHero.push(response.data[hero])
	      }
	      this.setState({
	        heroes: tempHero
	      })
	    })
	    .catch(err => {
	      console.log(err)
	    })
	}

	render() {
		return(
			<div>
		     	{ this.state.heroes.map(((hero,i) => {
			        return (
			          <Hero heroList={hero} key={i}/>
			        )
		    	  }))
		     	}		
		    </div> 			
		)	
	}
}

export default Home