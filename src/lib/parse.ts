export const parseAmount = (raw: string): number => Math.round(Number.parseFloat(raw) * 100);
