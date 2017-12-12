import React from 'react'

const ImageShow = ({ match }) => (
  <div className="box">
    <img src={ `https://farm${match.params.farmid}.staticflickr.com/${match.params.serverid}/${match.params.id}_${match.params.secret}_m.jpg` } alt=''/>
  </div>
)

export default ImageShow;
