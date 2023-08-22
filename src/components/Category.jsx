import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories, fetchJoke } from '../actions'
import { changeModalState, toggleJokeLoading, updateCurrentCategory } from '../reducers/categoryReducer'
const Category = () => {
    const dispatch = useDispatch()
    const categoryList = useSelector(state => state.category.categoryList)
    const currentCategory = useSelector(state => state.category.currentCategory)
    const modalState = useSelector(state => state.category.modalState)

    const handleJoke = (category) =>{
        console.log(category, modalState, currentCategory)
        dispatch(updateCurrentCategory(category))
        if(!modalState){
            dispatch(changeModalState())
        }
    }

    useEffect(()=>{
        dispatch(toggleJokeLoading(true))
        dispatch(fetchJoke(currentCategory))
    },[currentCategory])

    return (
        <div className="  h-fit flex flex-col items-center justify-center">
            <h2 className="m-3 text-4xl text-green-500 animate-bounce font-bold">Chuck Norries</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-2  grid-cols-4   bg-transparent text-white text-lg   md:gap-y-3  md:w-fit">
                {categoryList.map(category => {
                    return (
                        <div className={` ${currentCategory==category ? "bg-slate-400": false} shadow-xl w-16 h-6 md:w-60 md:h-40 bg-[#FFFFFF] text-center  m-3 rounded-md hover:border border-black capitalize text-white text-lg  
                                    cursor-pointer false md:p-3`}
                            onClick={()=>handleJoke(category)}
                        >
                            <h1 className=" text-blue-900 font-bold capitalize text-sm md:text-2xl md:pt-6" >{category}</h1>
                            <p className="capitalize text-purple-800 text-sm lg:block md:block hidden">unlimited jokes on carrer</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Category

