import React, { useEffect, useState } from "react"
import productService from "../../../service/product.service"

function ProductList() {
  const [productList, setProductList] = useState([])

  useEffect(() => {
    let products = []

    productService
      .getProducts()
      .then((result) => setProductList(result.data))
      .catch((err) => {
        console.error(err)
      })

    // try {
    //   products = productService.getProducts().then((result) => {
    //     return result.data
    //   })
    // } catch (err) {
    //   console.error(err)
    // }
  }, [])

  return (
    <div>
      <h4>Product Catalog</h4>
      {productList.map((product) => {
        return <p key={product.id}>{product.name}</p>
      })}
    </div>
  )
}

export default ProductList
