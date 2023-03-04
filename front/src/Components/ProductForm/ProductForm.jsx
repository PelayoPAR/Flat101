import React, { useState } from "react"
import productService from "../../../service/product.service"
import "./ProductForm.css"

function ProductForm() {
  const categoriesArr = ["Premium", "Business", "Economy"]
  const [productCategory, setProductCategory] = useState("Business")
  const [productName, setProductName] = useState("")
  const [productURL, setProductURL] = useState("")
  const [productPrice, setProductPrice] = useState("")

  async function handleSubmit(event) {
    event.preventDefault()
    if (productName.length > 3) {
      try {
        await productService.createProduct([
          {
            category: productCategory,
            name: productName,
            imgURL: productURL,
            price: productPrice,
          },
        ])
      } catch (err) {
        console.error(err)
      }
    }
  }

  return (
    <div className="main-form-div">
      <form className="form" onSubmit={handleSubmit}>
        <fieldset className="fieldset">
          <legend>Introduce your product</legend>
          <div className="prod-category-div">
            <label htmlFor="product-category">Product Category:</label>
            <select
              id="product-category"
              name="product-category"
              value={productCategory}
              onChange={(event) => {
                setProductCategory(event.target.value)
              }}
            >
              <option></option>
              <optgroup label="- Categories -"></optgroup>
              {categoriesArr.map((category, index) => {
                return (
                  <option value={category} key={index}>
                    {category}
                  </option>
                )
              })}
            </select>
          </div>
          <div className="product-form-div">
            <div>
              <label htmlFor="product-name">Product Name:</label>
              <input
                type="text"
                id="product-name"
                value={productName}
                onChange={(event) => {
                  setProductName(event.target.value)
                }}
              />
            </div>
            <div>
              <label htmlFor="product-img">Product Image URL:</label>
              <input
                type="text"
                id="product-img"
                value={productURL}
                onChange={(event) => {
                  setProductURL(event.target.value)
                }}
              />
            </div>
            <div>
              <label htmlFor="product-price">Price in Euro:</label>
              <input
                type="number"
                id="product-price"
                value={productPrice}
                onChange={(event) => {
                  setProductPrice(event.target.value)
                }}
              />
            </div>
          </div>
          <div>
            <button className="form-button">Submit Product</button>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default ProductForm
