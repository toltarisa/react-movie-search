import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
import $ from 'jquery';

class App extends Component {
  constructor(props){
    super();
    this.state = {};

  this.performSearch();

}

performSearch(str){
  const urlStr = 'https://api.themoviedb.org/3/search/movie?api_key=b5bea57017a2c99a589994903ab20498&query='+str;
  $.ajax({
    url:urlStr,
    success:(searchResult)=>{
       
      const results = searchResult.results;
      var movieRows = [];

      results.forEach((movie)=>{
        movie.poster_src = 'https://image.tmdb.org/t/p/w500'+ movie.poster_path;
        const movieRow = <Movie key={movie.id} movie={movie}/>
        movieRows.push(movieRow);
      });
      this.setState({rows:movieRows});
    },
    error:() =>{
      console.error("Error when fetched data");
    }
  });
}

searchChangeHandler(e){
  const str = e.target.value;
  this.performSearch(str);
}

  render() {
    return (
      <div className="App">
        <div className="nav">
          <div className="imgBar">
          <img width="60"  src="app_logo.svg" alt="logo" />
          </div>
          <div className="text">
          <p>Search Favourite Movies</p>
          </div>
        </div>

        <input onChange={this.searchChangeHandler.bind(this)} className="searchBar" type="text" placeholder="Type your Favourite Movie" />
        {this.state.rows}
      </div>
    );
  }
}

export default App;
