import MovieCard from "./Moviecard.js";

function MovieList(props) {
  const { movies, addStar, reduceStar, handleFav, handleAddToCart} = props;
  return (
    <>
      {movies.map((movie) => (
        <MovieCard
          movie={movie}
          addStar={addStar}
          reduceStar={reduceStar}
          handleFav={handleFav}
          handleAddToCart={handleAddToCart}
          key={movie.id}
        />
      ))}
    </>
  );
}
export default MovieList;