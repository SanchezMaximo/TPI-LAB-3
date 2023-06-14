import React, { useContext } from 'react';

import "./ProductsBody.css";

import ProductsCard from './ProductsCard';
import storeProducts from "../data/products.json";
import { Link } from 'react-router-dom';
import { CartContext } from '../context/ShoppingCartProvider';


const ProductsBody = () => {

  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acum, current) => {
    return acum + current.quantity;
  },0);

  return (
    <div> 
      <div className='cartItems'>
        <Link to={"/cart"} className='linkCart'>
          Cart items: <span className="cartCount">{quantity}</span> 
        </Link>
      </div> 
      <div className="productsList">
        {
            storeProducts.map((product) => {
                return <ProductsCard key={product.id} {...product}/>
            })
        }
      </div>
    </div>
  )
}

export default ProductsBody