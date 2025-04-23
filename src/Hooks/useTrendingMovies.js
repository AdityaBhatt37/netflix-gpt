import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { addTrendingMovies } from "../Utils/Redux/moviesSlice";
import { ApiOptions } from '../Utils/constants';

const useTrendingMovies = () =>{

    const dispatch = useDispatch();

    useEffect(()=>{

        getNowTrendingMovies();
      },[]);
    
    
      const getNowTrendingMovies = async()=>{
        
        const data = await fetch("https://api.trakt.tv/movies/trending?limit=20", ApiOptions)
    
        const json = await data.json();
        //console.log(json);
        dispatch(addTrendingMovies(json));
      }

}

export default useTrendingMovies;