import React from 'react'

const style = {
  maxHeight: '80vh'
}

const ImageShow = ({ match }) => (
  <div className="column is-pulled-left">
    {match.params.id === '26280153979' ? alert('gotcha!') : ''}
    <img style={style} src={ `https://farm${match.params.farmid}.staticflickr.com/${match.params.serverid}/${match.params.id}_${match.params.secret}_b.jpg` } alt=''/>
  </div>
)

export default ImageShow;
