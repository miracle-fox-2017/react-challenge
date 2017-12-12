import {Link} from 'react-router-dom'
import React, { Component } from 'react'	

class Hero extends Component {
	render() {
		return (
			<div>
				<h4> <span> Name </span> <small> {this.props.heroList.Name}</small>
				</h4>
				<button> <Link to={this.props.heroList.Name}> Show Detail </Link> </button>	 
			</div>
		)
	}
}

export default Hero