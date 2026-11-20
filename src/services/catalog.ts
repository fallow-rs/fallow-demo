const PRICES: Record<string, number> = { "A-1": 1250, "B-2": 999 };

export const lookupPrice = (sku: string): number => PRICES[sku] ?? 0;
