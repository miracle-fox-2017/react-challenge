import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
import YTSearch from 'youtube-api-search';

const API_KEY= 'AIzaSyB0hA_Viw7GzD-Rzc9PPPnytatS-geMjOM'


class App extends Component {

  constructor(props){
    super(props);
    this.state = { 
      videos : [],
      selectedVideo: null
    };

    this.videoSearch('dangdut')
  }

  videoSearch(term){
    YTSearch({key: API_KEY , term : term}, (videos)=>{
      this.setState({ 
        videos:videos,
        selectedVideo:videos[0]
      });
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <SearchBar onSearchTermChange ={ term =>this.videoSearch(term)}/>
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList 
          onVideoSelect ={selectedVideo=> this.setState({selectedVideo })}
          videos={this.state.videos} />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
