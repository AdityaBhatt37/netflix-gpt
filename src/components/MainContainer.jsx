import React from 'react';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import {useSelector} from 'react-redux';

function MainContainer() {

  const movies = useSelector((appStore) => appStore.movies?.NowPlayingMovies?.results);

  if (!movies) return; //if there is no data(null) then return (early return)

  const mainMovies = movies[0];

  const {original_title,overview,id} = mainMovies;

  
  return ( 
    <div>

      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground moviesId={id}/>
        
    </div>
  )
}

export default MainContainer