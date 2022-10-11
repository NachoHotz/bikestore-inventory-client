import { createSlice } from '@reduxjs/toolkit'
import { ProductState } from '../../config/redux/types/reducer/'
import { fetchAllProducts } from '../actions/products'

const productState: ProductState = {
  allProducts: [],
  isLoading: 'idle',
  isUpdating: 'idle',
  error: {}
}

const productReducer = createSlice({
  name: 'product',
  initialState: productState,
  reducers: {
    setLoadingIdle: (state, _action) => {
      state.isLoading = 'idle'
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state, _action) => {
      state.isLoading = 'pending';
    })

    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.isLoading = 'succeded';
      state.allProducts = action.payload
    })
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      state.isLoading = 'error';

      if (action.payload) {
        state.error = action.payload
      }

      state.error = action.error
    })
  }
})

export default productReducer.reducer
