import React, { Component } from 'react';
import Axios from 'axios'

class MainList extends Component {
  constructor (props) {
    super (props)
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
    }).catch((err) => {
      console.log(err)
    })
  }
  sendCollectionId = (collectionId) => {
    this.props.sendCollectionsData(collectionId)
  }
  render () {
    let imgStyle = {
      'height': '300px',
      'backgroundAttachment': 'cover',
      'opacity': '0.5'
    }
    let cardStyle = {
      'marginBottom': '2em'
    }
    let aStyle = {
      'color': 'white'
    }
    return (
      <div className="row">
      {this.state.collections.map((collectionItem) => {
        return (
          <div className="col-md-3" key={collectionItem.collection.collection_id}>
            <div className="card bg-dark text-white" style={cardStyle}>
              <img className="card-img" style={imgStyle} src={collectionItem.collection.image_url} alt={collectionItem.collection.image_url} />
              <div className="card-img-overlay">
                <h3 className="card-title"><a href={collectionItem.collection.url} style={aStyle}>{collectionItem.collection.title}</a></h3>
                <p className="card-text">{collectionItem.collection.description}</p>
                <p className="card-text">Last updated 3 mins ago</p>
                <button type="button" className="btn btn-primary" onClick={() => this.sendCollectionId(collectionItem.collection.collection_id)}>See Restaurants</button>
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
