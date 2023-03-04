import React from "react"

function ProductItem({ product }) {
  const { imgURL, name, price } = product
  if (product) {
    return (
      <div>
        <img src={imgURL} alt="productImage"></img>
        <p>wt {name}</p>
        <p>
          EUR: {price}/m<sup>2</sup>
        </p>
      </div>
    )
  }
}

export default ProductItem
