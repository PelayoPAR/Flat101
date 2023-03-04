import React from "react"
import "./ProductItem.css"

function ProductItem({ product }) {
  const { category, imgURL, name, price } = product
  if (product) {
    return (
      <div className="product-item-div">
        <img src={imgURL} alt="productImage"></img>
        <p className="item-category">{category}</p>
        <p className="item-name">{name}</p>
        <p>
          EUR: {price} &#x20AC;/m<sup>2</sup>
        </p>
      </div>
    )
  }
}

export default ProductItem
