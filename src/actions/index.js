import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
    "category/getCategory",
    async ()=>{
        console.log("getCategory")
        try {
            const response = await fetch('https://api.chucknorris.io/jokes/categories',{
                method: 'GET',
                headers:{
                    "content-type": "application/json"
                }
            })

            if(response.ok)return response.json()
            else throw new Error("failed to load categories")
        } catch (error) {
            console.log("Failed to load Categories", error)
            return null
        }
    }
)

export const fetchJoke = createAsyncThunk(
    "category/getJoke",
    async (category)=>{
        try {
            const response = await fetch(`https://api.chucknorris.io/jokes/random?categories=${category}`,{
                method: 'GET',
                headers:{
                    "content-type": "application/json"
                }
            })

            if(response.ok)return response.json()
            else throw new Error("failed to load categories")
        } catch (error) {
            console.log("Failed to load Categories", error)
            return null
        }
    }
)