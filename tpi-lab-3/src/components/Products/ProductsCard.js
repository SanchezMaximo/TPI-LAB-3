import React from 'react';
import "./ProductsCard.css";

const ProductsCard = () => {
  return (
    <div className='container'>
        <div className='menu'> 
            <img alt='croissant' src='https://images.unsplash.com/photo-1599940778173-e276d4acb2bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1755&q=80' className='foodClass'></img>
            <div className='infoProduct'>
                <h4>nombre del producto</h4>
                <p>descripcion del producto</p>
                <p>precio del producto</p>
                <button>add to cart</button>
            </div>
        </div>      
    </div>
)
}

export default ProductsCard