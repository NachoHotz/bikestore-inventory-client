import { GetAllProductsResponse } from '../axiosResponses/product';
import { ProductActionNames } from '../names/product';

export type GetAllProductsAction = {
  type: ProductActionNames.GET_ALL_PRODUCTS,
  payload: GetAllProductsResponse
}
