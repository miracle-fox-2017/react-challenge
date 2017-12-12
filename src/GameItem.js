import React, { Component } from 'react';
import { platform } from 'os';

export default class GameItem extends Component {
  constructor(props) {
    super(props)
  }

  handeDate(str) {
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

  handlePlat(platforms) {
  }

  render() {
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
              <p className="subtitle is-6">@johnsmith</p>
            </div>
          </div>
      
          <div className="content text">
            {this.props.gameItem.deck}
            <br/>
            {this.handlePlat(this.props.gameItem.platforms)}
            <time>Release Date: {this.handeDate(this.props.gameItem.original_release_date)}</time>
            <br/>
            <a class="button is-info">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}