import React, { Component } from 'react';
import Axios from 'axios'

class ListItem extends Component {
  constructor (props) {
    super (props)
    this.state = {
      collectionItem: []
    }
  }
  componentWillMount = () => {
    Axios.get('https://developers.zomato.com/api/v2.1/search', {
      params: {
        'lat': '-6.259926',
        'lon': '106.781565',
        'collection_id': this.props.sendCollectionId
      },
      headers: {
        'user-key': '428923ad3bad98317ed12b98036fdc83'
      }
    }).then(({data: {restaurants}}) => {
      this.setState({
        collectionItem: restaurants
      })
    }).catch((err) => {
      console.log(err)
    })
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
      {this.state.collectionItem.map((collectionItem) => {
        return (
          <div className="col-md-3" key={collectionItem.restaurant.id}>
            <div className="card bg-dark text-white" style={cardStyle}>
              <img className="card-img" style={imgStyle} src={collectionItem.restaurant.thumb} alt={collectionItem.restaurant.thumb} />
              <div className="card-img-overlay">
                <h3 className="card-title"><a href={collectionItem.restaurant.name} style={aStyle}>{collectionItem.restaurant.name}</a></h3>
                <p className="card-text">{collectionItem.restaurant.location.address}</p>
              </div>
            </div>
          </div>
        )
      })}
      </div>
    )
  }
}

export default ListItem
