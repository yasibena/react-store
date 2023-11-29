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



    // async function fetchData() {
    //     const { data } = await axios.get(url);
    //     let products = data
    //     //   setFetchProductState(data);

    //     setFetchProductState(products)

    //     // console.log('rendered');
    //     // productDispatch({ type: 'DISPLAY_ITEMS', payload: products })


    // }

    // useEffect(() => {
    //     // productState.products = fetchProductState
    //     fetchData()
    //     // productDispatch({ type: 'DISPLAY_ITEMS', payload: fetchProductState })
    // }, [])


    // axios.get(url)
    //     .then((response) => {

    //         const products = response.data
    //         setFetchProductState(products)

    //     })




    // const p2=products.map(item => {
    //     return {
    //         id: item.id,
    //         img: item.img,
    //         name:item.name,
    //         category:item.category,
    //         info:item.info,
    //         colors:item.colors,
    //         featured:item.featured,
    //         price:item.price,
    //         amount:item.amount
    //     }
    // }
    // )



    // setFetchProductState(products.map(item => {
    //     return {
    //         id: item.id,
    //         img: item.img,
    //         name:item.name,
    //         category:item.category,
    //         info:item.info,
    //         colors:item.colors,
    //         featured:item.featured,
    //         price:item.price,
    //         amount:item.amount
    //     }

    // }))
    // console.log(fetchProductState, 'fetchProductState');
    //  productState.products=products

    //     productDispatch({ type: 'DISPLAY_ITEMS', payload: products })

    // const products = await axios.get(url)
    // productState.products = products.data

    // 


    // }

    // useEffect(() => {

    //     fetchData()
    // }, [])

// const addToCart=(id)=>{
//     dispatch({type:'ADD_TO_CART',payload:id})
// }

// const changeAmount=(id,amount)=>{
//     dispatch({type:'CHANGE_AMOUNT',payload:{id,amount}})
// }

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
