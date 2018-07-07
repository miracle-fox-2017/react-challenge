import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props)
      this.state={ term: ''};
    
  }

  render (){
    return (
      <div className="search-bar">
        <input value={this.state.term}  
        onChange={event => this.onInputChange(event.target.value)}/>
      </div>
    );
  }
  onInputChange(term){
    this.setState({term});//ngambil dari app.js di tombol search kirim kesni 
    this.props.onSearchTermChange(term);//dapat dari bapaknya d app
  }

}


export default SearchBar;