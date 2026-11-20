import type { Order } from "../services/orders";
import { formatPrice } from "../lib/format";

export const buildInvoiceLines = (order: Order): string[] => {
  const lines: string[] = [];
  const subtotal = order.unitPrice * order.quantity;
  const vatAmount = Math.round(subtotal * 0.21);
  const grandTotal = subtotal + vatAmount;
  lines.push(`Invoice for order ${order.id}`);
  lines.push(`Item: ${order.sku} x ${order.quantity}`);
  lines.push(`Unit price: ${formatPrice(order.unitPrice)}`);
  lines.push(`Subtotal: ${formatPrice(subtotal)}`);
  lines.push(`VAT 21%: ${formatPrice(vatAmount)}`);
  lines.push(`Total: ${formatPrice(grandTotal)}`);
  if (grandTotal > 10000) {
    lines.push("Large order: manual check required");
  }
  lines.push("Thank you for your order");
  return lines;
};
