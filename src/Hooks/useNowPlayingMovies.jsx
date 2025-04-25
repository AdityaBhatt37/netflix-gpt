import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { addNowPlayingMovies } from "../Utils/Redux/moviesSlice";
import { ApiOptions } from '../Utils/constants';

const useNowPlayingMovies = () =>{

    const dispatch = useDispatch();

    useEffect(()=>{

        getNowPlayingMovies();
      },[]);
    
    
      const getNowPlayingMovies = async()=>{
        
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', ApiOptions)
    
        const json = await data.json();
       
        dispatch(addNowPlayingMovies(json));
      }

}

export default useNowPlayingMovies;