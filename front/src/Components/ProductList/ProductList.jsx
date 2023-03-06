import React, { useEffect, useState } from "react"
import productService from "../../../service/product.service"
import ProductItem from "./ProductItem/ProductItem"
import "./ProductList.css"
import { useSelector, useDispatch } from "react-redux"
import { loadProducts } from "../../slices/productSlice"

function ProductList() {
  const [productList, setProductList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const storeProducts = useSelector((state) => {
    return state
  })
  const dispatch = useDispatch()

  console.log("storeee", storeProducts)

  useEffect(() => {
    // let products = []

    productService
      .getProducts()
      .then((result) => {
        setProductList(result.data)
        dispatch(loadProducts(result.data))
      })
      .catch((err) => {
        console.error(err)
        setIsError(true)
      })
      .finally(() => setIsLoading(false))

    // try {
    //   products = productService.getProducts().then((result) => {
    //     return result.data
    //   })
    // } catch (err) {
    //   console.error(err)
    // }
  }, [])

  if (isLoading) {
    return <h3>Loading...</h3>
  }
  if (isError) {
    return (
      <h3>Oopsies! There was an error. Please try refreshing the page...</h3>
    )
  }
  if (productList.length > 0) {
    return (
      <div className="product-list-div">
        <h4>Product Catalog</h4>
        {productList.map((product, index) => {
          return <ProductItem key={index} product={product} />
        })}
      </div>
    )
  }
}

export default ProductList
