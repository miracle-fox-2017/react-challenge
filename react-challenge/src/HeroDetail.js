import React, { Component } from 'react';
import { Route } from 'react-router-dom'
export default class HeroDetail extends Component {
  constructor (props) {
    super()
    // debugger
    this.state = {
      heroData: props.location.state.heroData
      // heroDetails : props
    }
  }
  
  componentWillReceiveProps (nextProp) {
    this.setState({
      heroData: nextProp.location.state.heroData
    })
  }
  
  render() {
    // {console.log(this.state.heroData)}
    return (
      <div>
        <h3>Movespeed: {this.state.heroData.Movespeed}</h3>
        <h3>HP: {this.state.heroData.HP}</h3>
        <h3>Mana: {this.state.heroData.Mana}</h3>
        <h3>BaseStr: {this.state.heroData.BaseStr}</h3>
        <h3>BaseAgi: {this.state.heroData.BaseAgi}</h3>
        <h3>BaseInt: {this.state.heroData.BaseInt}</h3>
      </div>
    )
  }
}
