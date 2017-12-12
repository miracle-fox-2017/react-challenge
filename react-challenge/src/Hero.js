import React, { Component } from 'react'

class Hero extends Component {
  
  constructor(props) {
    super()
    this.state = {
      heroData: props.heroData
    }
  }
  
  render () {
    return (
      <div>
        <h1>{this.state.heroData.Name}</h1>
        <h3>Movespeed : {this.state.heroData.Movespeed}</h3>
        <h3>HP : {this.state.heroData.HP}</h3>
        <h3>Mana : {this.state.heroData.Mana}</h3>
        <h3>BaseStr : {this.state.heroData.BaseStr}</h3>
        <h3>BaseAgi : {this.state.heroData.BaseAgi}</h3>
        <h3>BaseInt : {this.state.heroData.BaseInt}</h3>
      </div>
    )
    //render something here
  }
  
  
}

export default Hero
