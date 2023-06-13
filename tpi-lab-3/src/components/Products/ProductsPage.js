import React from 'react'
import "./ProductsPage.css"

const ProductsPage = (props) => {
  return (
    <div className={props.ProductsPageMid}>
      <img alt='coffeShop' src={props.productsImg} className={props.imgClass}/>

      <div className="ProductsPage-text">
          <h2>{props.title}</h2>
      </div>  
    </div> 
  )
}

export default ProductsPage