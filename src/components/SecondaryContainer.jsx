import React from 'react'
import MovieList from './MovieList'
import {useSelector} from 'react-redux';

function SecondaryContainer() {

  const movies = useSelector((appStore) => appStore.movies);
  return (

    movies.NowPlayingMovies && (
      
    <div>
      
      <MovieList title={"Now Playing Movies"} movies={movies.NowPlayingMovies}/>

      <MovieList title={"Popular Movies"} movies={movies.PopularMovies}/>
      <MovieList title={"Top Rated Movies"} movies={movies.NowPlayingMovies}/>
      <MovieList title={"Horror Movies"} movies={movies.NowPlayingMovies}/>
      <MovieList title={"Action Movies"} movies={movies.NowPlayingMovies}/>

    </div>
  )
);
}

export default SecondaryContainer;


      {/*

        MovieList - Popular
          - Movie Card * N
        MovieList - Top Rated
        MovieList - Now Playing
        MovieList - Horror

        
      */}