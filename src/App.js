import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import Axios from 'axios'
import { Layout, Form, Input, Button, Card } from 'antd';
const FormItem = Form.Item;
const { Header, Content, Footer } = Layout;

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

class App extends Component {
  constructor(){
    super()
    let config = {
      apiKey: "AIzaSyAqYZm-2FtcQCv4SMKiEKZhTD5_ueZX0io",
      authDomain: "ecommerce-186802.firebaseapp.com",
      databaseURL: "https://ecommerce-186802.firebaseio.com",
      projectId: "ecommerce-186802"
    };

    firebase.initializeApp(config);

    this.state = {
      allPhotos: [],
      newData: {
        foto: '',
        avatarURL: ''
      }
    };
  }

  componentWillMount  = () => {
    let getData = firebase.database().ref('muka')
    let that  = this
    getData.on('value', function(snapshot) {
      let tampung = []
      snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        tampung.push(childData)
      });
      that.setState({
        allPhotos: tampung
      })       
    })
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
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
      <Layout>
        <Header><img src={logo} className="App-logo" alt="logo" />       </Header>
        <Layout>
          <Content>
          <Form>
            <br/>
              <label>Foto:</label>
              <br/>
              <FormItem {...formItemLayout}>
                <Input name="avatarURL" value={this.state.newData.avatarURL} placeholder="Link url  gambars" onChange={this.onChanges} />
              </FormItem>
              <br/>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="your  gambar" src={this.state.newData.avatarURL} />}
                >
              </Card>
              {this.state.newData.avatarURL &&
                <img style={ gambarStyle} alt="upload  gambar" src={this.state.newData.avatarURL} />
              }
              <Button type="primary" onClick={this.Processing}>Process</Button>
          </Form> 
          <h1>All Photos</h1>
          {this.state.allPhotos.map(data => {
            console.log(data.url)
            {data.url}
          })}
          <div>
            {this.state.allPhotos.map(photos => {
              <Card title="Card Title">
                <Card.Grid style={gridStyle}>
                  <img alt="" style={ gambarStyle} src={photos.url} />
                </Card.Grid>
            </Card>
            })}
          </div>
          </Content>
        </Layout>
        <Footer>
         
        </Footer>
      </Layout>
        
        
      </div>
    );
  }
}

let  gambarStyle = {
  width: "auto",
  height: "200px"
};

export default App;
