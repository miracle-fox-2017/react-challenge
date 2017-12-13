import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Loading from './media/loading.svg';
import Cover from './media/spacex.jpg';

const style={
  loading:{
    textAlign:'center',
    backgroundColor:'#F1F1F1',
  },
  image:{
    width:'60%',
    margin:'auto',
    display:'block'
  },
  label:{
    fontSize:'18px',
    display:'block',
    marginTop:'15px',
    fontWeight:'bold',
    textAlign:'center'
  },
  content:{
    fontSize:'18px',
    display:'block',
    textAlign:'center'
  }
}

export default class Detail extends Component {
  constructor(){
    super();
    this.state={
      rocket:null
    }
  }
  componentWillReceiveProps(nextProps){
    const filtering=nextProps.rockets.filter(rocket => {
      return rocket.id === this.props.match.params.id
    })[0];
    this.setState({
      rocket:filtering
    });
  }
  componentWillMount(){
    const filtering=this.props.rockets.filter(rocket => {
      return rocket.id === this.props.match.params.id
    })[0];
    this.setState({
      rocket:filtering
    });
  }
  render(){
    return(
      <div className="container" style={{paddingTop:'50px'}}>
        <Link to="/">Back</Link>
        {this.state.rocket != null ? (
          <div className="panel panel-default">
            <div className="panel-heading" style={{textAlign:'center'}}>
              <span style={{fontSize:'20px'}}>{this.state.rocket.name}</span>
            </div>
            <div className="panel-body">
              <img src={Cover} style={style.image} alt="SpaceX"/>
              <span style={style.label}>Description</span>
              <span style={style.content}>{this.state.rocket.description}</span>
              <span style={style.label}>Cost Per Launch</span>
              <span style={style.content}>$ {this.state.rocket.cost_per_launch}</span>
            </div>
          </div>
        ) : (
          <div style={style.loading}>
            <img src={Loading} width="200px" alt="Loading"/>
          </div>
        )}
      </div>
    )
  }
}
