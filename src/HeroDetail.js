import React, { Component } from 'react'	
import { Link } from 'react-router-dom'
import axios from 'axios'
const heroApi = `http://api.herostats.io/heroes/all`

class HeroList extends Component {
	constructor(props) {
      super();
      this.state = {
      hero: props.location.state
      }
	}		
	// componentDidMount() {
	//     axios.get(heroApi)
	//     .then(response => {
	//     	console.log(this.props)
	//       let tempHero = []
	//       for (let hero in response.data){
	//       	if(response.data[hero].Name === this.props.match.params.heroName){
	//       		tempHero = response.data[hero]
	//       	}
	//       }
	//       this.setState({
	//         hero: tempHero
	//       })
	//     })
	//     .catch(err => {
	//       console.log(err)
	//     })
	// }

	render() {
		return (
			<div>
				<h4> <span> Name </span> <small> {this.state.hero.hero.Name}</small>
					 <span> MS </span> <small> {this.state.hero.hero.Movespeed} </small>
					 <span> HP </span> <small> {this.state.hero.hero.HP} </small>
					 <span> MANA </span> <small> {this.state.hero.hero.Mana} </small>
				</h4>
				<button> <Link to='/'> Back </Link> </button>	 				
			</div>
		)
	}
}

export default HeroList