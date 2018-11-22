import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
import $ from 'jquery';

class App extends Component {
  constructor(props){
    super();
    this.state = {};

  //   const movies = [
  //     {id:0,title:'Avengers Infinity War',overview:'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born '},
  //     {id:1,title:'Forrest Gump',overview:'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born '},
  //     {id:2,title:'Green Mile',overview:'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born '}
  //   ]

  //   this.state = {
  //     rows:[
  //       <p>This is my row0</p>,
  //       <p>This is my row1</p>,
  //       <p>This is my row2</p>,
  //       <p>This is my row3</p>
  //     ]
  //   };

  //   var movieRows = [];

  //   movies.forEach(movie =>{
  //     console.log(movie.title);
  //     const movieRow = <Movie movie={movie} />
  //     // const movieRow = <table key={movie.id}>
  //     //   <tbody>
  //     //     <tr>
  //     //       <td>
  //     //         <img alt="pic" width="100" src="https://unsplash.it/400/400" />
  //     //       </td>
  //     //       <td>
  //     //         {movie.title}
  //     //         <p>{movie.overview}</p>
  //     //       </td>
  //     //     </tr>
  //     //   </tbody>
  //     // </table>
  //     movieRows.push(movieRow);
  //   });

  //     this.state = {rows : movieRows};

  // 
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
