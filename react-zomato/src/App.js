import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import './App.css';
import Navbar from './Navbar'
import Timeline from './Timeline'
import DetailItem from './DetailItem'

class App extends Component {

  constructor() {
    super();
    this.state = {
      zomato: ['']
    };
  }
  getZomatoList (location) {
    axios.get(`http://developers.zomato.com/api/v2.1/locations?query=${location}`,{
      headers : {
        'user-key' : '6f7e7987e70dc105330926821cabef62'
      }
    })
    .then(response => {
      if(response.data.location_suggestions[0] === undefined) {
        alert('Kagak ada tempat makan tong')
      } else {
        let enId = response.data.location_suggestions[0].entity_id
        let enTy = response.data.location_suggestions[0].entity_type
        axios.get(`https://developers.zomato.com/api/v2.1/location_details?entity_id=${enId}&entity_type=${enTy}`,{
          headers : {
            'user-key' : '6f7e7987e70dc105330926821cabef62'
          }
        })
        .then((responseDetail) => {
          let location = response.data
          let detailLocation = responseDetail.data
          this.setState({
            zomato: detailLocation.best_rated_restaurant
          })
          console.log(this.state.zomato)
        })
        .catch(error => {
          console.error(error)
        })
      }})
      .catch(error => {
        console.error(error)
      })
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div> 
            <Navbar getLocation={this.getZomatoList.bind(this)}/>
            <div className="container">
              <Route exact path="/" render={(props) => (<Timeline test={this.state.zomato} {...props}/>)}/>
              <Route path="/detail/:id" component={DetailItem}/>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
