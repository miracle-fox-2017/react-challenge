import React, { Component } from 'react';
import axios from 'axios';
import { Panel } from 'react-bootstrap';

class DetailItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      zomatoItem: {}
    }
  }
  
  render () {

    return (
      <Panel header={this.state.zomatoItem.name} bsStyle="primary">
        <img src={this.state.zomatoItem.thumb}/><br/>
        Rating Tempat Makan: <label>{JSON.stringify(this.state.zomatoItem.user_rating)}</label><br/>
        Harga rata-rata makanan berdua: <label>Rp. {this.state.zomatoItem.average_cost_for_two}</label><br/>

      </Panel>
    )
  }
  componentWillMount() {
    axios.get(`http://developers.zomato.com/api/v2.1/restaurant?res_id=${this.props.match.params.id}`,{
      headers : {
        'user-key' : '6f7e7987e70dc105330926821cabef62'
      }
    })
    .then(({data}) => {
      console.log(data.user_rating.rating_text)
      this.setState({
        zomatoItem: data
      })
    })
    .catch(err => console.error(err))
  }
}

export default DetailItem;