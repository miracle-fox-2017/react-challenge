import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import header from './components/header'
import youman from './components/Youman'
import contact from './components/contact'


class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component ={header}/>
          <Route path="/youman" component={youman}/>
          <Route path="/contact" component={contact}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
