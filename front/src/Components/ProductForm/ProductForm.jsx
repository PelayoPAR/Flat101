import React, { useState } from "react"
import productService from "../../../service/product.service"

function ProductForm() {
  const [productName, setProductName] = useState("")
  const [productURL, setProductURL] = useState("")
  const [productPrice, setProductPrice] = useState("")

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      await productService.createProduct([
        { name: productName, imgURL: productURL, price: productPrice },
      ])
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Introduce your product</legend>
          <label htmlFor="product-name">Product Name:</label>
          <input
            type="text"
            id="product-name"
            value={productName}
            onChange={(event) => {
              setProductName(event.target.value)
            }}
          />
          <label htmlFor="product-img">Product Image URL:</label>
          <input
            type="text"
            id="product-img"
            value={productURL}
            onChange={(event) => {
              setProductURL(event.target.value)
            }}
          />
          <label htmlFor="product-price">Price in Euro</label>
          <input
            type="number"
            id="product-price"
            value={productPrice}
            onChange={(event) => {
              setProductPrice(event.target.value)
            }}
          />
          <button>Submit Product</button>
        </fieldset>
      </form>
    </div>
  )
}

export default ProductForm
