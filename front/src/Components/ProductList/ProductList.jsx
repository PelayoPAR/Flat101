import React, { useEffect, useState } from "react"
import productService from "../../../service/product.service"
import ProductItem from "./ProductItem/ProductItem"
import "./ProductList.css"
import { useSelector, useDispatch } from "react-redux"
import { loadProducts } from "../../slices/productSlice"

function ProductList() {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const productObject = useSelector((state) => {
    return state.products
  })
  const storeProducts = Object.values(productObject)
  const dispatch = useDispatch()

  useEffect(() => {
    // ToDo: Load product list on App.jsx
    productService
      .getProducts()
      .then((result) => {
        dispatch(loadProducts(result.data))
      })
      .catch((err) => {
        console.error(err)
        setIsError(true)
      })
      .finally(() => setIsLoading(false))
  }, [])

  if (isLoading) {
    return <h3>Loading...</h3>
  }
  if (isError) {
    return (
      <h3>Oopsies! There was an error. Please try refreshing the page...</h3>
    )
  }
  if (storeProducts.length > 0) {
    return (
      <div className="product-list-div">
        <h4>Product Catalog</h4>
        {storeProducts.map((product, index) => {
          return <ProductItem key={index} product={product} />
        })}
      </div>
    )
  }
}

export default ProductList
