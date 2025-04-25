import { useEffect } from "react";
import { ApiOptions } from "../Utils/constants";
import {useDispatch} from 'react-redux';
import {addTrailerVideo} from '../Utils/Redux/moviesSlice.jsx';
import {useSelector} from 'react-redux';
const useMovieTrailer = (MoviesId) =>{

    const dispatch = useDispatch();

   
    useEffect(() => {
      getNowPlayingMovies();
    }, []);
  
    const getNowPlayingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+MoviesId+"/videos?language=en-US",
        ApiOptions
      );
  
      const json = await data.json();
  
      //filterData = will contain the data of results property of json which has type "Trailer"
      const filterData = json?.results.filter( (video) => video.type === "Trailer"
      );
  
      //trailer will contain the first element of filterData if filterData is not empty else it will contain the first element of json result[0](any clip) for background video.
      const trailer = filterData.length ? filterData[0] : json?.results[0];
  
      dispatch(addTrailerVideo(trailer));
  
    };
}

export default useMovieTrailer;