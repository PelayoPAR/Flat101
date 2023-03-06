import { createSlice } from "@reduxjs/toolkit"

const initialState = {}

const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    loadProducts(state, action) {
      const products = action.payload
      products.forEach((product) => {
        state[product.id] = product
      })
    },
  },
})

export const { loadProducts } = productSlice.actions
export default productSlice.reducer
