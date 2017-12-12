import React, { Component } from 'react'

const ImageShow = ({ match }) => (
  <div>
    <img src={ `https://farm${match.params.farmid}.staticflickr.com/${match.params.serverid}/${match.params.id}_${match.params.secret}_b.jpg` } alt=''/>
  </div>
)

export default ImageShow;
