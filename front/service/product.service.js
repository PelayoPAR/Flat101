import axios from "axios"

class ProductService {
  constructor() {
    this.api = axios.create({ baseURL: "http://localhost:5000" })
  }

  createProduct = async (requestBody) => {
    return await this.api.post("/products", requestBody)
  }

  getProducts = async () => {
    return await this.api.get("/products")
  }
}

const productService = new ProductService()

export default productService
