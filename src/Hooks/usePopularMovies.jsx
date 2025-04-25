import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { addPopularMovies } from "../Utils/Redux/moviesSlice";
import { ApiOptions } from '../Utils/constants';

const usePopularMovies = () =>{

    const dispatch = useDispatch();

    useEffect(()=>{

        getPopularMovies();
      },[]);
    
    
      const getPopularMovies = async()=>{
        
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', ApiOptions)
    
        const json = await data.json();
       
        dispatch(addPopularMovies(json));
      }

}

export default usePopularMovies;