import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductState } from '../config/types/reducer/'
import { IProduct } from '../config/types/resources'

const productState: ProductState = {
  allProducts: [],
  isLoading: false,
  isUpdating: false
}

const productReducer = createSlice({
  name: 'product',
  initialState: productState,
  reducers: {
    getAllProducts(state, action: PayloadAction<IProduct>) {
      state.allProducts.push(action.payload)
    }
  }
})

export const { getAllProducts } = productReducer.actions;

export default productReducer.reducer
