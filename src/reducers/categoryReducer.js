import { createSlice } from '@reduxjs/toolkit'

import { getCategories, fetchJoke } from '../actions'
const initialState = {
    modalState:true,
    loadingCategory:true,
    loadingJoke:false,
    categoryList:null,
    currentCategory:null,
    currentJoke:null,
}


export const categorySlice = createSlice({
    name: 'norries',
    initialState,
    reducers: {

        toggleJokeLoading : (state, action) => {
            state.loadingJoke = action.payload
        },

        changeModalState : (state, action) =>{
            state.modalState = !state.modalState
        },
        updateCurrentCategory : (state, action) =>{
            state.currentCategory = action.payload
        },

    },

    extraReducers : (builder)=>{
        builder.addCase(getCategories.fulfilled, (state, action)=>{
            state.categoryList = action.payload 
        })

        builder.addCase(fetchJoke.fulfilled, (state, action)=>{
            console.log(action.payload)
            state.currentJoke = action.payload
            state.loadingJoke = false 
        })

    }
})

export const { changeModalState, updateCurrentCategory, toggleJokeLoading} = categorySlice.actions

export default categorySlice.reducer