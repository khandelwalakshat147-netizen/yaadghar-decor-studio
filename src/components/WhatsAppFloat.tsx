import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export const WhatsAppFloat = () => {
  return (
    <a
      href={waLink("Hello Yaad Ghar! I'd like to order a custom magnet.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-5 py-4 text-white shadow-elegant animate-pulse-ring transition-smooth hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2.5} />
      <span className="hidden sm:inline font-semibold">Order on WhatsApp</span>
    </a>
  );
};
