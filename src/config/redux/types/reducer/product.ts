import { IProduct } from "../resources"

export type ProductState = {
  allProducts: IProduct[];
  isLoading: 'idle' | 'pending' | 'succeded' | 'error';
  isUpdating: boolean;
  error: any;
}
