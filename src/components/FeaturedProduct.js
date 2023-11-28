import React from 'react'
import { useGlobalContext } from '../context/context'
import './featuredProduct.css'

export default function FeaturedProduct({id,img, name, category, info, colors, featured, price, amount}) {

   
    
      
    return (
        
        <article>
         
            <img src={img} alt="" />
            <div className="products-info">
                <h2 className="product-title">{name}</h2>
                <h3 className='product-price'>{price}</h3>
            </div>
        </article>
    )
}
