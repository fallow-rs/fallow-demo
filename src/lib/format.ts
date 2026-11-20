export const formatPrice = (cents: number): string => `EUR ${(cents / 100).toFixed(2)}`;

export const formatPercent = (ratio: number): string => `${Math.round(ratio * 100)}%`;
