import {Link} from 'react-router-dom';
import React,{Component} from 'react';

import Cover from './media/spacex.jpg';

const style={
  title:{
    fontSize:'25px',
    textDecoration:'none'
  },
  image:{
    width:'60%',
    margin:'auto',
    display:'block'
  }
}

export default class Rocket extends Component {
  constructor(props){
    super(props);
    this.state={
      rocket:this.props.rocket
    }
  }
  render(){
    return(
      <div className="panel panel-default">
        <div className="panel-heading" style={{textAlign:'center'}}>
          <Link to={this.state.rocket.id} style={style.title}>{this.state.rocket.name}</Link>
        </div>
        <div className="panel-body">
          <img src={Cover} style={style.image} alt="SpaceX"/>
        </div>
      </div>
    )
  }
}
