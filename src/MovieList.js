import React from "react";
import MovieCard from "./Moviecard.js";

class MovieList extends React.Component {
  render() {
    const {movies,addStar,reduceStar,handleFav,handleAddToCart} = this.props;
    return (
      <>
        {movies.map((movie) => (
          <MovieCard movie={movie} addStar={addStar} reduceStar={reduceStar} handleFav={handleFav} handleAddToCart={handleAddToCart} key={movie.id} />
        ))}
      </>
    );
  }
}

export default MovieList;