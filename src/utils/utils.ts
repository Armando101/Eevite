import { Product } from "../interfaces";

/**
 * Sum all the prices
 * @param productList list to sum prices
 * @returns total value
 */
export const totalPrice = (productList: Product[]) =>
  productList.reduce((prev, curr) => prev + curr.price, 0);
