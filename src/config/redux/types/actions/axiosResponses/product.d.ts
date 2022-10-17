import { IProduct } from '../../resources';

export type GetAllProductsResponse = {
  status: number;
  allProducts: IProduct[]
}

export type GetProductByIdResponse = {
  status: number;
  uniqueProduct: IProduct
}

export type GetProductsByQueryResponse = {
  status: number;
  productsQuery: IProduct[]
}

export type CreateProductResponse = {
  status: number;
  createdProduct: IProduct;
}
