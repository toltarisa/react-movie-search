import React from 'react';
import './Movie.css';

class Movie extends React.Component{
    viewMovie() { 
        const url = "https://www.themoviedb.org/movie/" +this.props.movie.id;
       window.location.href=url;
    }


    render(){

        return (

            <div className="container" key={this.props.movie.id}>
                <div >
                    <img  src={this.props.movie.poster_src} className="poster" alt="poster" />
                </div>
                <div className="details">
                    <div>
                        {/* title */}
                        <p><b>Title :</b> {this.props.movie.title}</p>
                    </div>
                        
                    <div>
                        {/* description */}
                        <p><b>Description :</b> {this.props.movie.overview}</p>
                    </div>
                    <div className="btns">
                        <input className="btn" onClick={this.viewMovie.bind(this)} type="button" value="View"/>
                    </div>
                </div> 
            </div>
        );
        
    }
}


export default Movie;