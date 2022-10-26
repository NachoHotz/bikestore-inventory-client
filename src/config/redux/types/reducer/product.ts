/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProduct } from '../resources';

export type ProductState = {
  allProducts: IProduct[];
  isLoading: 'idle' | 'pending' | 'succeded' | 'error';
  isUpdating: 'idle' | 'pending' | 'succeded' | 'error';
  error: any;
}
