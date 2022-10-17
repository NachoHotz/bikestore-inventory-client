import { createAsyncThunk } from '@reduxjs/toolkit';
import { Client } from '../../config/axios';
import { GET_ALL } from '../../config/axios/endpoints';
import { GetAllProductsResponse } from '../../config/redux/types/actions/axiosResponses';

export const fetchAllProducts = createAsyncThunk('products/fetchAllProducts', async (_, thunkApi) => {
  try {
    const { data } = await Client.get<GetAllProductsResponse>(GET_ALL);

    if (data.status === 404) {
      return thunkApi.rejectWithValue(data);
    }

    return data.allProducts;

  } catch (error: any) {
    if (error.response) {
      return error.response.data;
    }

    return error;
  }
});
