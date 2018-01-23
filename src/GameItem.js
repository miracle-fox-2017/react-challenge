import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class GameItem extends Component {
  handeDate(str) {
    if(!str) return ''
    let date = new Date(str)

    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

  render() {
    const url = '/game/'+this.props.gameItem.id

    return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={this.props.gameItem.image.small_url} alt="Placeholder"/>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={this.props.gameItem.image.icon_url} alt="Placeholder"/>
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{this.props.gameItem.name}</p>
              <p className="subtitle is-6">@GiantBomb</p>
            </div>
          </div>
      
          <div className="content text">
            {this.props.gameItem.deck}
            <br/>
            <time>Release Date: {this.handeDate(this.props.gameItem.original_release_date)}</time>
            <br/>
            <Link to={url} className="button is-info">Read More</Link>
          </div>
        </div>
      </div>
    )
  }
}