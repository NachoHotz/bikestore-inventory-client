export type IUser = {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ICategory = {
  id: int;
  name: string;
  products: IProduct[];
  createdAt: Date;
  updatedAt: Date;
}

export type IProvider = {
  id: number;
  name: string;
  email: string;
  products: IProduct[];
  createdAt: Date;
  updatedAt: Date;
}

export type IProduct = {
  id: string;
  name: string;
  description?: string;
  stock: number;
  price: number;
  category: ICategory;
  categoryId: number;
  provider: IProvider;
  providerId: number;
  sale: ISale;
  createdAt: Date;
  updatedAt: Date;
}

export type ISale = {
  id: number;
  date: Date;
  amount: number;
  products: ProductsOnSale[];
  paymentMethod: PaymentMethod
  paymentMethodId: number;
}

export type IProductsOnSale = {
  id: number;
  product: IProduct;
  productId: number;
  sale: ISale;
  saleId: number;
  assignedAt: Date;
}

export type IPaymentMethod = {
  id: number;
  name: string;
  sales: ISale[];
  createdAt: Date;
  updatedAt: Date;
}
