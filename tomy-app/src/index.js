import {BrowserRouter as Router,Route} from 'react-router-dom';
import React,{Component} from 'react';
import {render} from 'react-dom';
import Rocket from './Rocket';
import Detail from './Detail';

const style={
  container:{
    marginTop:'50px',
    marginBottom:'50px'
  }
}

class Index extends Component {
  constructor(){
    super();
    this.state={
      rockets:[]
    }
  }
  componentWillMount(){
    fetch('https://api.spacexdata.com/v2/rockets')
      .then(response => response.json())
      .then(jsonData => this.setState({
        rockets:jsonData
      }));
  }
  render(){
    return(
      <Router>
        <div>
          <Route exact path="/" render={props => <Home rockets={this.state.rockets}/>}/>
          <Route path="/:id" render={props => <Detail {...props} rockets={this.state.rockets}/>}/>
        </div>
      </Router>
    )
  }
}

class Home extends Component {
  render(){
    return(
      <div className="container" style={style.container}>
        {this.props.rockets.map((rocket,i) => {
          return <Rocket rocket={rocket} key={i}/>
        })}
      </div>
    )
  }
}

render(<Index/>,document.getElementById('root'));
