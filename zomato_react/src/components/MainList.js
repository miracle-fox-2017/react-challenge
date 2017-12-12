import React, { Component } from 'react';
import Axios from 'axios'

class MainList extends Component {
  constructor () {
    super ()
    this.state = {
      collections: []
    }
  }
  componentWillMount = () => {
    Axios.get(`https://developers.zomato.com/api/v2.1/collections`, {
      params: {
        'lat': '-6.259926',
        'lon': '106.781565'
      },
      headers: {
        'user-key': '428923ad3bad98317ed12b98036fdc83'
      }
    }).then(({data}) => {
      this.setState({
        collections: data.collections
      })
      console.log(this.state.collections[0].collection)
    }).catch((err) => {
      console.log(err)
    })
  }
  render () {
    return (
      <div className="row">
      {this.state.collections.map((collectionItem) => {
        return (
          <div className="col-md-3" key={collectionItem.collection.collection_id}>
            <div className="card bg-dark text-white">
              <img className="card-img" src={collectionItem.collection.image_url} alt={collectionItem.collection.image_url} />
              <div className="card-img-overlay">
                <h4 className="card-title">{collectionItem.collection.title}</h4>
                <p className="card-text">{collectionItem.collection.description}</p>
                <p className="card-text">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
        )
      })}
      </div>
    )
  }
}

export default MainList
