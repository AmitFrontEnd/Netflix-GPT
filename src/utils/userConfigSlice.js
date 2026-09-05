import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  preferedLanguage: 'english',
  gptMoviesTitles: null,
  finalMoviesArray: null,
  isFecthingGPTResult:false,
  gptError:null
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
    },
    addGptError:(state,action)=>{
      state.gptError=action.payload
    }
  }
})

export const { changePreferedLanguage, addGptMoviesTitle, addGptMoviesArray, clearGptMoviesArray,togglefetchGPTResult,addGptError } = userConfigSlice.actions

export default userConfigSlice.reducer