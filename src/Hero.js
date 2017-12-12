import React, { Component } from 'react'

class Hero extends Component {
	render() {
		return (
			<div>
				<h4> <span> Name </span> <small> {this.props.heroList.Name} </small>
					 <span> MS </span> <small> {this.props.heroList.Movespeed} </small>
					 <span> HP </span> <small> {this.props.heroList.HP} </small>
					 <span> MANA </span> <small> {this.props.heroList.Mana} </small>
				</h4>	 
			</div>
		)
	}
}

export default Hero