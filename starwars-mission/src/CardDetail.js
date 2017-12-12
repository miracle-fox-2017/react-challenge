import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './App.css'

class CardDetail extends Component {
  constructor(props) {
    super()
  }

  componentWillMount () {
    console.log('Dapat data propsnya gak? ',this.props.location.state)
  }

  render () {
    return (
      <div className="card col-md-12">
        <h3 className="card-header">{this.props.location.state.person.name}</h3>
        <div className="card-body">
          <h5 className="card-title">Birth Year</h5>
          <h6 className="card-subtitle">{this.props.location.state.person.birth_year}</h6>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Gender: {this.props.location.state.person.gender}</li>
          <li className="list-group-item">Height: {this.props.location.state.person.height} cms</li>
          <li className="list-group-item">Weight: {this.props.location.state.person.mass} lbs</li>
          <li className="list-group-item">Eye Color: {this.props.location.state.person.eye_color}</li>
          <li className="list-group-item">Skin Color: {this.props.location.state.person.skin_color}</li>
        </ul>
        <div className="card-footer text-muted">
          <Link to="/">Back Home</Link>
        </div>
      </div>
    )
  }
}

export default CardDetail