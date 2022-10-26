/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Client } from '../../config/axios';
import { PRODUCTS } from '../../config/axios/endpoints';
import { GetAllProductsResponse, GetProductByIdResponse } from '../../config/redux/types/actions/axiosResponses';

export const fetchAllProducts = createAsyncThunk('products/fetchAllProducts', async (_, thunkApi) => {
  try {
    const { data } = await Client.get<GetAllProductsResponse>(PRODUCTS);

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

export const fetchProductDetails = createAsyncThunk('products/fetchProductDetails', async (id: string, thunkApi) => {
  try {
    const { data } =  await Client.get<GetProductByIdResponse>(`${PRODUCTS}/${id}`);

    if (data.status === 404) {
      return thunkApi.rejectWithValue(data);
    }

    return data.uniqueProduct;
  } catch (error: any) {
    if (error.response) {
      return error.response.data;
    }

    return error;
  }
});