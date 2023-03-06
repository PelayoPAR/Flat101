const express = require("express")
const crypto = require("crypto")
const indexRouter = express.Router()

let productList = require("../data/products.json")

indexRouter.get("/", (req, res) => {
  res.json("succesfully reached")
})

indexRouter.get("/products", (req, res) => {
  res.json(productList)
})

indexRouter.post("/products", (req, res) => {
  const newProducts = req.body
  const newProductsWithID = newProducts.map((product) => {
    console.log(product)
    const newProductID = crypto.randomUUID()
    product.id = newProductID
    return product
  })
  productList = [...productList, ...newProductsWithID]
  res.status(204).send("OK")
})

module.exports = indexRouter
