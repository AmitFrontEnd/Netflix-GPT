import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  nowPlayingMovies: null,
  trailerInfo:null
}
export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload
    },
    addTrailerInfo:(state,action)=>{
      state.trailerInfo=action.payload
    }
  },
})

export const { addNowPlayingMovies,addTrailerInfo } = movieSlice.actions

export default movieSlice.reducer