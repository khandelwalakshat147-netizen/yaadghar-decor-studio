import { describe, expect, it } from "vitest";
import { waLink, WHATSAPP_NUMBER } from "@/lib/site";

describe("WhatsApp ordering integration", () => {
  it("uses the business WhatsApp number 9352957678 for all order CTAs", () => {
    expect(WHATSAPP_NUMBER).toBe("919352957678");
  });

  it("builds a wa.me link with a URI-encoded message", () => {
    const link = waLink("Hi! I want to order a magnet.");
    expect(link.startsWith(`https://wa.me/919352957678?text=`)).toBe(true);
    expect(link).toContain(encodeURIComponent("Hi! I want to order a magnet."));
  });
});
