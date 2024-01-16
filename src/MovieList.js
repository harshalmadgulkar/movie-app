import React from "react";
import MovieCard from "./Moviecard.js";

class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          id: 1,
          title: "The Avengers",
          poster:
          "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
          plot: "Earths mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          price: 199,
          stars: 0,
          rating: 8.9,
          fav: false,
          isInCart: false,
        },
        {
          id: 2,
          title: "Alienoid",
          poster:
          "https://image.tmdb.org/t/p/w400/8QVDXDiOGHRcAD4oM6MXjE0osSj.jpg",
          plot: "The door of time opens between the swordsman who wants to seize the legendary divine sword at the end of the Goryeo Dynasty and those who chase after an alien prisoner imprisoned in a human body in 2022.",
          price: 199,
          stars: 0,
          rating: 6.2,
          fav: false,
          isInCart: false,
        },
        {
          id: 3,
          title: "Hypnotic",
          poster: "https://image.tmdb.org/t/p/w400/3IhGkkalwXguTlceGSl8XUJZOVI.jpg",
          plot: " A detective investigates a mystery involving his missing daughter and a secret government program.",
          price: 199,
          stars: 0,
          rating: 6.4,
          fav: false,
          isInCart: false,
        },
        {
          id: 4,
          title: "Berlin (Season 1)",
          poster: "https://image.tmdb.org/t/p/w500/qggpZOGHps82F80lXPxtvtf9HnL.jpg",
          plot: "Back to his golden age before the events of “Money Heist,” Berlin and a masterful gang gather in Paris to plan one of his most ambitious robberies ever.",
          price: 199,
          stars: 0,
          rating: 9.0,
          fav: false,
          isInCart: false,
        },
      ],
    }
  }

  handleIncStar=(movie) => {
    const {movies} = this.state;
    const mid = movies.indexOf(movie);

    if(movies[mid].stars >= 5){return;}

    movies[mid].stars += 0.5;

    this.setState({
      movies:movies
    })
  }

  handleDecStar=(movie) =>{
    const {movies} = this.state;
    const mid = movies.indexOf(movie);

    if(movies[mid].stars<=0){return;}

    movies[mid].stars -= 0.5;

    this.setState({
      movies:movies
    })
  }

  handleFav=(movie) =>{
    const {movies} = this.state;
    const mid = movies.indexOf(movie);
    // console.log(movies[mid].fav);
    movies[mid].fav = !movies[mid].fav;
    // console.log(movies[mid].fav);

    this.setState({
      movies:movies
    })
  }

  handleAddToCart=(movie)=>{
    const {movies} = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].isInCart = !movies[mid].isInCart;

    this.setState({
      movies: movies
    })
  }
  
  render() {
    return (
      <>
        {this.state.movies.map((movie) => (
          <MovieCard movie={movie} addStar={this.handleIncStar} reduceStar={this.handleDecStar} handleFav={this.handleFav} handleAddToCart={this.handleAddToCart} key={movie.id} />
        ))}
      </>
    );
  }
}

export default MovieList;