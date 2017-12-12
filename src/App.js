import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      cards: [{title: 'exodia'}]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Duelist</h1>
        </header>

        <div className="cardList">
          {
            this.state.cards.map((card) => {
              return (
                <div className = "cardItem" >
                  <img src="" alt="Exodia"/>
                  <h3 className="cardTitle">Exodia</h3>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
