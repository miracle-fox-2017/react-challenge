import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'
import { Panel } from 'react-bootstrap';

class ListItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
      return (
      <Panel header={<Link to={`/detail/${this.props.itemRest.restaurant.id}`}>{this.props.itemRest.restaurant.name}</Link>} bsStyle="primary">
          <img src={this.props.itemRest.restaurant.thumb}/>
        </Panel>
      );
  }
}

export default ListItem;