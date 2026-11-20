import { z } from "zod";
import { formatPrice, parseAmount } from "./lib";
import { createOrder } from "./services/orders";
import { buildInvoiceLines } from "./reports/invoice";
import { buildReceiptLines } from "./reports/receipt";
import { classifyCustomer } from "./services/customers";

const OrderInput = z.object({ sku: z.string(), quantity: z.number() });

const input = OrderInput.parse({ sku: "A-1", quantity: 2 });
const order = createOrder(input.sku, input.quantity);

console.log(formatPrice(parseAmount("12.50")));
console.log(buildInvoiceLines(order).join("\n"));
console.log(buildReceiptLines(order).join("\n"));
console.log(classifyCustomer({ orders: 12, spent: 900, country: "NL", vip: false, overdue: 0 }));
import { summarizeCart } from "./utils/summary";
import { exportCartSummary } from "./reports/export";
summarizeCart([{ name: "pen", price: 100, count: 3 }]);
exportCartSummary([{ name: "pen", price: 100, count: 3 }]);
import { reportCart } from "./services/cart-report";
reportCart([]);
