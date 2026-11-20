import type { Order } from "../services/orders";
import { formatPrice } from "../lib/format";

export const buildReceiptLines = (purchase: Order): string[] => {
  const out: string[] = [];
  const net = purchase.unitPrice * purchase.quantity;
  const tax = Math.round(net * 0.21);
  const total = net + tax;
  out.push(`Invoice for order ${purchase.id}`);
  out.push(`Item: ${purchase.sku} x ${purchase.quantity}`);
  out.push(`Unit price: ${formatPrice(purchase.unitPrice)}`);
  out.push(`Subtotal: ${formatPrice(net)}`);
  out.push(`VAT 21%: ${formatPrice(tax)}`);
  out.push(`Total: ${formatPrice(total)}`);
  if (total > 10000) {
    out.push("Large order: manual check required");
  }
  out.push("Thank you for your order");
  return out;
};
