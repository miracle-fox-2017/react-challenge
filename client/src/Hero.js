import React from 'react';

class Hero extends React.Component {
  constructor () {
    super ()

  }

  render () {
    return (
      <div className="row">
      <div className="col-xs-6 col-md-3">
        <a href="#" className="thumbnail">
          {this.props.hero.Name}
        </a>
      </div>
    </div>)
  }
}


export default Hero
