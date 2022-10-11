import { IProduct } from "../resources"

export type ProductState = {
  allProducts: IProduct[];
  isLoading: boolean;
  isUpdating: boolean;
}
