import {createSlice} from "@reduxjs/toolkit";

const moviesSlice = createSlice({

    name : 'movies',
    initialState:{

        trendingMovies : null,

    },

    reducers:{
    
        addTrendingMovies : (state,action)=>{

                state.trendingMovies = action.payload;
        }
    }

});


export const {addTrendingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;
