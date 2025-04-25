import {createSlice} from "@reduxjs/toolkit";

const moviesSlice = createSlice({

    name : 'movies',
    initialState:{

        NowPlayingMovies : null,
        PopularMovies : null,
        TrailerVideo : null

    },

    reducers:{
    
        addNowPlayingMovies : (state,action)=>{

                state.NowPlayingMovies = action.payload;
        },


        addPopularMovies: (state,action)=>{

            state.PopularMovies = action.payload;
    },

        addTrailerVideo : (state,action)=>{

                state.TrailerVideo = action.payload;
        }
    }

});


export const {addNowPlayingMovies,addPopularMovies,addTrailerVideo} = moviesSlice.actions;
export default moviesSlice.reducer;
