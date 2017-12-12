import React, {Component} from 'react'
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail'
import YTSearch from 'youtube-api-search';
import footer from './footer'
import foto from '../icon.png'

const API_KEY= 'AIzaSyB0hA_Viw7GzD-Rzc9PPPnytatS-geMjOM'

class Youman extends Component{
  constructor(props){
    super(props);
    this.state = { 
      videos : [],
      selectedVideo: null
    };

    this.videoSearch('youtube')
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
          <h1 className="app-title">Welcome to Youman</h1>
            <SearchBar onSearchTermChange ={ term =>this.videoSearch(term)}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList 
            onVideoSelect ={selectedVideo=> this.setState({selectedVideo })}
            videos={this.state.videos} />
            <footer/>
        </header>
      </div>
    );
  }
}

export default Youman;