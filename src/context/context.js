import React, { useState, useContext, useReducer, useEffect } from 'react'
import axios from 'axios'
import { productReducer, reducer } from '../reducer/reducer'
import products from '../info'


const AppContext = React.createContext()


// const[products,setProducts]=useState([])





const AppProvider = ({ children }) => {
  
    const [state, dispatch] = useReducer(reducer, {
        products: products,
        cart: [],
        selectedAmount:0,
        selectedColor:'',
        allPrice:0
    })
  
    

    const [productState, productDispatch] = useReducer(productReducer, {
      
        searchBytext: '',
        searchByFreeDelivery: false,
        searchByCategory: '',
        sortByPrice:0

    })

    // useEffect(() => {
    //     const fetchData = async () => {

    //         // const response = await fetch(url)
    //         // const products = await response.json()

    //         //  const products = await axios.get(url)



    //         try {
    //             const response = await axios.get(url)
    //             const products = response.data



    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     fetchData()
    // }, [])

    return (
        <AppContext.Provider
            value={{
               state,
               dispatch,
               productDispatch,
               productState,
               
               
               
               

            }}
        >
            {children}
        </AppContext.Provider>
    )

}
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
