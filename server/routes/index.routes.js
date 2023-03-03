const express = require("express")
const indexRouter = express.Router()

const productList = require("../data/products.json")

indexRouter.get("/", (req, res) => {
  res.json("succesfully reached")
})

indexRouter.get("/products", (req, res) => {
  res.json(productList)
})

indexRouter.post("/products", (req, res) => {
  const newProducts = req.body
  res.status(204)
})

module.exports = indexRouter
