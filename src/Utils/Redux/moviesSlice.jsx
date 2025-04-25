import {createSlice} from "@reduxjs/toolkit";

const moviesSlice = createSlice({

    name : 'movies',
    initialState:{

        NowPlayingMovies : null,
        TrailerVideo : null

    },

    reducers:{
    
        addNowPlayingMovies : (state,action)=>{

                state.NowPlayingMovies = action.payload;
        },

        addTrailerVideo : (state,action)=>{

                state.TrailerVideo = action.payload;
        }
    }

});


export const {addNowPlayingMovies,addTrailerVideo} = moviesSlice.actions;
export default moviesSlice.reducer;
