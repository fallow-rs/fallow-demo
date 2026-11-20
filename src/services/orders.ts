import { v4 as uuid } from "uuid";
import { lookupPrice } from "./catalog";

export interface Order {
  id: string;
  sku: string;
  quantity: number;
  unitPrice: number;
}

export const createOrder = (sku: string, quantity: number): Order => ({
  id: uuid(),
  sku,
  quantity,
  unitPrice: lookupPrice(sku),
});

export const cancelOrder = (order: Order): Order => ({ ...order, quantity: 0 });
