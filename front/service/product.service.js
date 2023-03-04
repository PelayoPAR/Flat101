import axios from "axios"

class ProductService {
  constructor() {
    this.api = axios.create({ baseURL: "http://localhost:5000" })
  }

  createProduct = async (requestBody) => {
    return this.api.post("/products", requestBody)
  }
}

const productService = new ProductService()

export default productService
