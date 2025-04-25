import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="p-2 bg-black">
        <h1 className="text-3xl font-bold text-white mb-4">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex ">
          {movies?.results?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;


