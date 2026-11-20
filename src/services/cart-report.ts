export interface Item {
  name: string;
  price: number;
  count: number;
}

export const reportCart = (items: Item[]): string => {
  const rows = items.map((item) => {
    const label = item.name.trim().toUpperCase();
    const amount = item.price * item.count;
    const discount = amount > 5000 ? Math.round(amount * 0.05) : 0;
    const net = amount - discount;
    return { label, amount, discount, net };
  });
  const totalNet = rows.reduce((sum, row) => sum + row.net, 0);
  const totalDiscount = rows.reduce((sum, row) => sum + row.discount, 0);
  const header = `Lines: ${rows.length}`;
  const footer = `Net: ${totalNet} Discount: ${totalDiscount}`;
  const body = rows.map((row) => `${row.label}: ${row.net}`);
  const text = [header, ...body, footer].join("\n");
  console.log(text);
  return text;
};
