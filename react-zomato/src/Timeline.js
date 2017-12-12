import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

import Listitem from './ListItem'

class Timeline extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    const tempProps = this.props.test
      return (
        <div>
        {tempProps[0] === ''? (
          <p>Masukkan Lokasi Anda</p>
        ) : (
          tempProps.map(element => {
            return <Listitem itemRest={element}/>
          })
        )}
      </div>
      );
  }
}

export default Timeline;