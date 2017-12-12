import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import './App.css';
import MainList from './components/MainList'
import Home from './components/Home'
import ListItem from './components/ListItem'

class App extends Component {
  constructor () {
    super ()
    this.state = {
      collectionId: ''
    }
  }
  getCollectionList = (dataFromChild) => {
    this.setState({
      collectionId: dataFromChild
    })
  }
  componentDidMount = () => {
    this.getCollectionList
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li><Link to="/" onClick={() => {
                this.setState({
                  collectionId: ''
                })
              }}>Home</Link></li>
              <li><Link to={{pathname: '/collections'}} onClick={() => {
                this.setState({
                  collectionId: ''
                })
              }}>Zomato Collections</Link></li>
            </ul>
            <hr/>
            <div className="container-fluid">
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/collections" render={() => {
                if (this.state.collectionId === '') {
                  return (
                    <MainList sendCollectionsData={this.getCollectionList}/>
                  )
                } else {
                  return (
                    <ListItem sendCollectionId={this.state.collectionId}></ListItem>
                  )
                }
              }}></Route>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
