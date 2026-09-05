import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  preferedLanguage: 'english',
  gptMoviesTitles: null,
  finalMoviesArray: null,
  isFecthingGPTResult:false
}

export const userConfigSlice = createSlice({
  name: 'userConfig',
  initialState,
  reducers: {
    changePreferedLanguage: (state, action) => {
      state.preferedLanguage = action.payload
    },
    addGptMoviesTitle: (state, action) => {
      state.gptMoviesTitles = action.payload
    },
    addGptMoviesArray: (state, action) => {
      state.finalMoviesArray = action.payload
    },
    clearGptMoviesArray: state => { state.finalMoviesArray = null },
    togglefetchGPTResult:state=>{
      state.isFecthingGPTResult=!state.isFecthingGPTResult
    }
  }
})

export const { changePreferedLanguage, addGptMoviesTitle, addGptMoviesArray, clearGptMoviesArray,togglefetchGPTResult } = userConfigSlice.actions

export default userConfigSlice.reducer