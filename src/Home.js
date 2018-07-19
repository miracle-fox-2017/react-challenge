import React, { Component } from 'react';
import firebase from 'firebase';
import { Layout, Card } from 'antd';
const { Content } = Layout;

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};
let  gambarStyle = {
  width: "auto",
  height: "200px"
};

class Home extends Component {
  constructor(){
    super()
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
  render() {
    return (
      <div>
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <h1>All Photos</h1>
            <div>
              <Card key={Math.random()}  title=''>
                {this.state.allPhotos.map(photos => {
                  return(  
                    <Card.Grid style={gridStyle}>
                      <img alt="" style={gambarStyle} src={photos.url} />
                      <p>Jenis Kelamin: {photos.jenis_kelamin}</p>
                      <p>Kaca Mata: {photos.kaca_mata}</p>
                      <p>Kesedihan: {photos.kesedihan}</p>
                      <p>Ketakutan: {photos.ketakutan}</p>
                      <p>Marah: {photos.marah}</p>
                      <p>Mata: {photos.mata}</p>
                      <p>Perasaan: {photos.perasaan}</p>
                      <p>Perasaan Baik: {photos.perasaan_baik}</p>
                      <p>Senang: {photos.senang}</p>
                      <p>Tersenyum: {photos.tersenyum}</p>
                      <p>Umur: {photos.umur}</p>
                      <p>Bibir: {photos.bibir}</p>
                    </Card.Grid>
                  )
                })}
              </Card>
            </div>
          </div>
        </Content>
      </div>
    );
  }
}

export default Home;