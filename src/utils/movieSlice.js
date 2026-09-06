import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  nowPlayingMovies: null,
  trailerInfo: null,
  topRatedMovies: null,
  popularMovies: null,
  nowPlayingMoviesError: null,
  popularMoviesError: null,
  topRatedMoviesError: null,
  selectedMovie: null

}
export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload
    },
    addTrailerInfo: (state, action) => {
      state.trailerInfo = action.payload
    },
    addpopularMoviesError: (state, action) => {
      state.popularMoviesError = action.payload
    },
    addtopRatedMoviesError: (state, action) => {
      state.topRatedMoviesError = action.payload
    },
    addnowPlayingMoviesError: (state, action) => {
      state.nowPlayingMoviesError = action.payload
    },
    addSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload
    },
    clearSelectedMovie: (state, action) => {
      state.selectedMovie = null
    },
  },
})

export const { addNowPlayingMovies, addTrailerInfo, addTopRatedMovies, addPopularMovies, addnowPlayingMoviesError, addtopRatedMoviesError, addpopularMoviesError ,addSelectedMovie,clearSelectedMovie} = movieSlice.actions

export default movieSlice.reducer