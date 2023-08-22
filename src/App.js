import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react'
import { getCategories } from './actions'

import { useDispatch, useSelector } from 'react-redux'
import Category from './components/Category';
import JokeModal from './components/JokeModal';
import { Dna } from 'react-loader-spinner';

function App() {
  const categoryList = useSelector(state => state.category.categoryList)
  const currentJoke = useSelector(state => state.category.currentJoke)
  const currentCategory = useSelector(state => state.category.currentCategory)
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(getCategories())
  },[])

  return (
    <div className="h-screen w-screen bg-gradient-to-r from-blue-500 to-gray-800 relative">
      <div className="h-fit flex flex-col items-center justify-center">
        {currentCategory && currentJoke && <JokeModal />}
        <Dna
            visible={!categoryList || categoryList.length==0}
            height="400"
            width="400"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
        />
        
        {categoryList && <Category/>}
      </div>
    </div>
  );
}

export default App;