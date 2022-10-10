import { GetAllProductsResponse } from "../axiosResponses/product";
import { ActionNames } from "../names"

export type GetAllProductsAction = {
  type: ActionNames.GET_ALL_PRODUCTS;
  payload: GetAllProductsResponse
}
