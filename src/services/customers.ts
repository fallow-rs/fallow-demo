export interface Customer {
  orders: number;
  spent: number;
  country: string;
  vip: boolean;
  overdue: number;
}

export const classifyCustomer = (c: Customer): string => {
  let tier = "basic";
  if (c.vip) {
    if (c.overdue > 0) {
      tier = c.overdue > 3 ? "vip-blocked" : "vip-warning";
    } else if (c.spent > 10000) {
      tier = "vip-platinum";
    } else {
      tier = "vip";
    }
  } else if (c.orders > 10 && c.spent > 500) {
    for (let i = 0; i < c.orders; i++) {
      if (i % 2 === 0 && c.country === "NL") {
        tier = "loyal-local";
      } else if (i % 3 === 0 || c.country === "BE") {
        tier = "loyal-neighbour";
      } else if (c.overdue > 0 && c.spent < 1000) {
        tier = "loyal-risk";
      }
    }
  } else if (c.orders > 5) {
    switch (c.country) {
      case "NL":
        tier = c.spent > 200 ? "regular-local-high" : "regular-local";
        break;
      case "DE":
        tier = "regular-de";
        break;
      case "BE":
        tier = c.overdue > 0 ? "regular-be-risk" : "regular-be";
        break;
      default:
        tier = "regular";
    }
  } else if (c.overdue > 0 || (c.spent === 0 && c.orders > 0)) {
    tier = "risk";
  }
  return tier;
};
