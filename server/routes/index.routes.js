const express = require("express")
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
  productList = [...productList, ...newProducts]
  res.status(204).send("OK")
})

module.exports = indexRouter
