import React, { Component } from 'react';
import './App.css'

class CardPerson extends Component{
  constructor(props) {
    super()
  }
  render() {
    return (
      <div className="card col-md-3">
        <h3 className="card-header">{this.props.person.name}</h3>
        <div className="card-body">
          <h5 className="card-title">Birth Year</h5>
          <h6 className="card-subtitle text-muted">{this.props.person.birth_year}</h6>
        </div>
        <div className="card-footer text-muted">
          {this.props.planets.map((planet) => {
              return planet.url === this.props.person.homeworld && planet.name
          })}
        </div>
      </div>
    )
  }
}

export default CardPerson
