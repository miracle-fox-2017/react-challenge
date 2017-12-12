import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const style = {
  overflowY: 'auto',
  height: '90vh',
  direction: 'rtl',
  textAlign: 'left'
}

class TheSideBar extends Component {
  constructor(props){
    super()
    this.state = {
      flick: []
    }

    this.getData = this.getData.bind(this);
  }

  getData() {
    axios.get('https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=3be0cbebe2255a6a18b64a40ff016501&user_id=spacex&per_page=20&format=json&nojsoncallback=1&auth_token=72157661520655197-5a823f992a0e57a6&api_sig=cf2aac466b69cb82da583e242efcdd9a')
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
    this.getData()
  }

  render() {
    return (
      <div style={style} className="column is-2">
        <ul>
          {this.state.flick.map((item, i) => {
            return (
              <li key={i}><Link to={`/flick/${item.farm}/${item.server}/${item.id}/${item.secret}`}><img src={ `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_s.jpg` } alt=''/></Link></li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default TheSideBar
