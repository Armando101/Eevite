export interface Catrgory {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Catrgory;
  images: string[];
}

export interface Order {
  date: string;
  products: Product[];
  totalPrice: number;
  totalProducts: number;
}
