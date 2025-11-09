import { describe, expect, it } from "vitest";
import { formatPhoneNumber } from "@/utils/format";

describe("formatPhoneNumber", () => {
  it("formats a 10-digit number into a phone number", () => {
    const phoneNumber = "2065551234";
    const formatted = formatPhoneNumber(phoneNumber);
    expect(formatted).toBe("(206) 555-1234");
  });

  it("returns null for an invalid number", () => {
    const phoneNumber = "123";
    const formatted = formatPhoneNumber(phoneNumber);
    expect(formatted).toBeNull();
  });
});
