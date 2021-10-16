import React from 'react'
import Product from './Product'
import TotalContext from '../context/totalContext'
import { useContext } from 'react'
const ProductList = () => {

    
   //importing data from context api 
    const context = useContext(TotalContext)
    const {productsarray}=context;

    return (
        <div className="row my-3">
            {productsarray.map((product)=>{
                return  <Product key={product.url} name={product.name} price={product.price} url={product.url}/>
            })}
           
        </div>
    )
}

export default ProductList
