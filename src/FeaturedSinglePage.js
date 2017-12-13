import React, { Component } from 'react'

export default class FeaturedSinglePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    return (
      <div className="featuredSingle">
        <div className="leftSidebar">
          <h2>News Ticker</h2>
          <marquee>Using Combined Component to make diffrent layout</marquee>
        </div> 

        <div className="featuredContent">
          {this.props.children}
        </div>
      </div>
    )
  }
}
