import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
 } from 'react-router-dom'
import axios from 'axios';
import Hero from './Hero';
import HeroDetail from './HeroDetail'

class App extends Component {
  
  constructor() {
    super()
    this.state =  {
      heroes: []
    }
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <Route path={`/details`} component={HeroDetail}/>
          {this.state.heroes.map((hero, index) => {
            return (
              <div key={index}>
                <Hero heroData={hero} detail={false}></Hero>
                <Link to = {{
                    pathname: `/details/${index}`,
                    state: { heroData: hero }
                  }}>
                  <button>view Detail</button>
                </Link>
              </div>
            )
          })}
        </div>
        
        
      </Router>
    );
  }
  
  componentDidMount() {
    axios.get('http://api.herostats.io/heroes/all')
      .then(({data}) => {
        let temp = []
        for (let hero in data) {
          temp.push(data[hero])
        }
        this.setState({
          heroes: temp
        })
      })
      .catch(error => console.log(error))
  }
}

export default App;
