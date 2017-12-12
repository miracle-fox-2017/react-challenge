import React, { Component } from 'react';
import { Layout, Form, Input, Button, Card } from 'antd';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase';
import Axios from 'axios'
const FormItem = Form.Item;
const { Content } = Layout;


const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};


class Inputs extends Component {
  constructor(){
    super()
    this.state = {
      newData: {
        foto: '',
        avatarURL: ''
      }
    };
  }
  onChanges = (e) => {
    let state = this.state.newData
    state[e.target.name]= e.target.value
    this.setState(state)
  }
  Processing = (e) => {
    e.preventDefault()
    console.log(this.state.avatarURL)
    Axios.post(`http://api.skybiometry.com/fc/faces/detect.json?api_key=6obnuu0u9u04bvimnne28ni345&api_secret=5c9bq4igc78d0islt74i7fi2qa&urls=${this.state.avatarURL}&attributes=all`)
    .then(({data}) => {
      let result = data.photos[0].tags[0].attributes
      let db = firebase.database().ref('muka')
      console.log(db)
      db.push({
        jenis_kelamin : result.gender.value,
        umur : result.age_est.value,
        senang : result.happiness.value,
        perasaan : result.mood.value,
        tersenyum : result.smiling.value,
        mata : result.eyes.value,
        marah : result.anger.value,
        ketakutan : result.fear.value,
        kesedihan : result.sadness.value,
        perasaan_baik : result.neutral_mood.value,
        bibir : result.lips.value,
        kaca_mata : result.glasses.value,
        url: this.state.newData.avatarURL
      })
      this.setState({
        newData: {
          avatarURL: ''
        }
      })
      if(this.state.newData.avatarURL === ''){
        console.log('MASUK SINI')
        return (
          <Redirect to="/" push={true} />
        )
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }
  render() {
    return (
      <div>
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <br/>
            <label>Foto:</label>
            <FormItem {...formItemLayout}>
              <Input name="avatarURL" value={this.state.newData.avatarURL} placeholder="Link url  images" onChange={this.onChanges} />
            </FormItem>
            {this.state.newData.avatarURL &&
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="your  gambar" src={this.state.newData.avatarURL} />}
              >
            </Card>
            }
            <Button type="primary" onClick={this.Processing}>Process</Button>
          </div>
        </Content>
      </div>
    );
  }
}

export default Inputs;