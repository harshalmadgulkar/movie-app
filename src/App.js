import React from "react";

import {movies} from './moviesData.js';
import MovieList from "./MovieList.js";
import Navbar from "./Navbar.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0,
    };
  }

  handleIncStar = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);

    if (movies[mid].stars >= 5) {
      return;
    }

    movies[mid].stars += 0.5;

    this.setState({
      movies: movies,
    });
  };

  handleDecStar = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);

    if (movies[mid].stars <= 0) {
      return;
    }

    movies[mid].stars -= 0.5;

    this.setState({
      movies: movies,
    });
  };

  handleFav = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    // console.log(movies[mid].fav);
    movies[mid].fav = !movies[mid].fav;
    // console.log(movies[mid].fav);

    this.setState({
      movies: movies,
    });
  };

  handleAddToCart = (movie) => {
    const {movies} = this.state;
    let {cartCount} = this.state;
    const mid = movies.indexOf(movie);

    movies[mid].isInCart = !movies[mid].isInCart;
    
    if(movies[mid].isInCart){
      console.log("TRUE");
      cartCount+=1;
    }
    else{
      cartCount-=1;
    }
    
    this.setState({
      movies,
      cartCount
    });
  };

  render() {
    const {cartCount, novies} = this.state;
    return (
      <>
        <Navbar cartCount={cartCount} />
        <MovieList movies={movies} addStar={this.handleIncStar} reduceStar={this.handleDecStar} handleFav={this.handleFav} handleAddToCart={this.handleAddToCart} />
      </>
    );
  }
}
export default App;