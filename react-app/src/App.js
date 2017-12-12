import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: ['https://farm5.staticflickr.com/4508/23903404598_3cf8e58f80_m.jpg',2,3],
      flick: []
    }

    this.getData = this.getData.bind(this);
  }

  getData() {
    axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=33563a9cbf085c6d03580fb759d88835&text=bnk48&per_page=10&format=json&nojsoncallback=1&auth_token=72157690890068875-68614c90ffa16aa7&api_sig=5352cbcaf7aa6ab7531b624994f3a6eb')
    .then(({ data })=>{
      console.log(data)
      this.setState({
        flick: data.photos.photo
      })
    })
    .catch(err=>{
      console.log(err)
    })
  }

  componentWillMount(){
    console.log('here')
    this.getData()
  }

  render() {
    return (
      <ul>
      { this.state.flick.map((item, i) => {
          return (
            <li key={i}><img src={ `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg` } alt=''/></li>
          )
        })}
      </ul>
    );
  }
}

export default App;
