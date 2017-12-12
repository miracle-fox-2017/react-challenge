import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './App.css'

class CardPerson extends Component{
  constructor(props) {
    super()
  }
  render() {
    return (
      <div className="card col-md-3">
        <Link to={{pathname:this.props.index, state: {person: {
          birth_year: this.props.person.birth_year,
          eye_color: this.props.person.eye_color,
          gender: this.props.person.gender,
          hair_color: this.props.person.hair_color,
          height: this.props.person.height,
          homeworld: this.props.person.homeworld,
          mass: this.props.person.mass,
          name: this.props.person.name,
          skin_color: this.props.person.skin_color,
          planets: this.props.planets
        }}}}><h3 className="card-header">{this.props.person.name}</h3></Link>
        <div className="card-body">
          <h5 className="card-title">Birth Year</h5>
          <h6 className="card-subtitle text-muted">{this.props.person.birth_year}</h6>
        </div>
        <div className="card-footer text-muted">
          {this.props.planets.map((planet, index) => {
              return planet.url === this.props.person.homeworld && planet.name 
          })}
        </div>
      </div>
    )
  }
}

export default CardPerson
