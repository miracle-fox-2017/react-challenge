import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bulma/css/bulma.css';

import TheNavBar from './TheNavBar'
import Home from './Home'
import TheSideBar from './TheSideBar'
import ImageShow from './Flick';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super()

    this.state = {
      flick: []
    }

    this.getData = this.getData.bind(this);
  }

  getData() {
    axios.get('https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=0b9d416136a2840098f1a8fc9ceff6f3&user_id=spacex&per_page=20&format=json&nojsoncallback=1')
    .then(({ data })=>{
      this.setState({
        flick: data.photos.photo
      })
    })
    .catch(err=>{
      console.log(err)
    })
  }

  componentWillMount(){
    this.getData()
  }

  render() {
    return (
      <Router>
        <div>
        <Route path="/" component={TheNavBar} />
          <div className="container head-fix">
            <div className="columns">
              <Route path="/" render={(props) => (<TheSideBar flickr={this.state} {...props}/> )} />
              <Route exact path="/" component={Home} />
              <Route path="/flick/:farmid/:serverid/:id/:secret" component={ImageShow} message="hehehe"/>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
