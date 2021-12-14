import dogs from "./data.json"
import {connect} from "./connection"


export const getDogs = async () => {
    try {
      const { conn, Dog } = await connect()
      return await Dog.find({})
    } catch (error) {
      return { error: "Error in getDogs function" }
    }
  }


export const getDog = async (id) =>{
    try{
        const {conn,Dog} = await connect()
        return await Dog.findById(id)
    } catch(error) {
        return {error: "Error in getDog function"}
    }
}

export const createDog = async (newDog) => {
    try {
      const { conn, Dog } = await connect()
      return await Dog.create(newDog)
    } catch (error) {
      return { error: "Error in createDog function" }
    }
  }
  
  export const updateDog = async (updatedDog, id) => {
    try {
      const { conn, Dog } = await connect()
      return await Dog.findByIdAndUpdate(id, updatedDog, {new:true})
    } catch (error) {
      return { error: "Error in updateDog function" }
    }
  }
  
  export const destroyDog = async (id) => {
    try {
      const { conn, Dog } = await connect()
      return await Dog.findByIdAndRemove(id)
    } catch (error) {
      return { error: "Error in destroyDog function" }
    }
  }