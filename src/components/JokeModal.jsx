import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeModalState, toggleJokeLoading } from '../reducers/categoryReducer'
import { fetchJoke } from '../actions'
import { Grid } from 'react-loader-spinner'

const JokeModal = () => {
    const dispatch = useDispatch()
    const modalState = useSelector(state => state.category.modalState)
    const loadingJoke = useSelector(state => state.category.loadingJoke)
    const currentCategory = useSelector(state => state.category.currentCategory)
    const currentJoke = useSelector(state => state.category.currentJoke)

    const handleCloseModal= () => {
        dispatch(changeModalState())
    }

    const handleUpdateJoke = () =>{
        dispatch(toggleJokeLoading(true))
        dispatch(fetchJoke(currentCategory))
    }

  return (
    <div className={modalState && currentCategory ? "absolute shadow-2xl md:top-56  top-72 lg:rounded-md card p-5 lg:w-1/2 md:w-1/2 ": "hidden"}>
        <svg onClick={handleCloseModal} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 float-right text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M6 18L18 6M6 6l12 12">
            </path>
        </svg>
        <h1 className="text-center text-xl text-white font-bold">
            <span className=" block capitalize text-3xl text-white">{currentCategory}</span>
        </h1>
        <div className="w-full border border-black m-auto mt-6 shadow-xl flex flex-col items-center justify-center">
            <Grid
                height="200"
                width="200"
                color="#4fa94d"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{}}
                wrapperClass=""
                visible={loadingJoke}
            />
            {!loadingJoke && <>
                <p className="text-center font-semibold text-blue-100   font-sans  m-5 text-xl md:text-3xl">"{currentJoke.value}"</p>
            </>}
            <button onClick={handleUpdateJoke} className="px-4 py-2 bg-blue-700  my-2 mx-3 cursor-pointer lg:w-96 md:96  rounded-md hover:bg-blue-600 font-bold ">Next Joke</button>
        </div>
        {}
    </div>
  )
}

export default JokeModal