import { describe, expect, it } from "vitest";
import { parseAmount } from "./lib/parse";
import { makeAmountCases } from "./utils/test-helpers";

describe("parseAmount", () => {
  it.each(makeAmountCases())("parses %s", (raw, cents) => {
    expect(parseAmount(raw)).toBe(cents);
  });
});
