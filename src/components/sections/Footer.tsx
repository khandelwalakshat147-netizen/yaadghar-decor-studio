import { Instagram, Facebook, MessageCircle, Mail } from "lucide-react";
import { waLink, EMAIL } from "@/lib/site";

export const Footer = () => {
  return (
    <footer className="gradient-red text-primary-foreground">
      <div className="container py-14 grid md:grid-cols-4 gap-10">
        <div className="space-y-4 md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/15 backdrop-blur">
              <span className="font-display text-xl font-bold">Y</span>
            </div>
            <div>
              <div className="font-display text-2xl font-bold">Yaad Ghar</div>
              <div className="font-hindi text-sm opacity-90">यादों का घर</div>
            </div>
          </div>
          <p className="text-sm opacity-90 max-w-md">
            Premium personalised photo magnets & wall decoration gifts — handcrafted with love
            for every birthday, couple and special moment. Made in India 🇮🇳
          </p>
          <div className="flex gap-3 pt-1">
            <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/15 hover:bg-primary-foreground/25 transition-smooth">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/15 hover:bg-primary-foreground/25 transition-smooth">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={waLink("Hi Yaad Ghar!")} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/15 hover:bg-primary-foreground/25 transition-smooth">
              <MessageCircle className="h-4 w-4" />
            </a>
            <a href={`mailto:${EMAIL}`} aria-label="Email" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/15 hover:bg-primary-foreground/25 transition-smooth">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4 text-gold">Shop</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><a href="#products" className="hover:opacity-100 hover:underline">All Products</a></li>
            <li><a href="#categories" className="hover:underline">Birthday Gifts</a></li>
            <li><a href="#categories" className="hover:underline">Couple Gifts</a></li>
            <li><a href="#categories" className="hover:underline">Wall Decoration</a></li>
            <li><a href="#pricing" className="hover:underline">Combo Packs</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4 text-gold">Help</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><a href="#faq" className="hover:underline">FAQs</a></li>
            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
            <li><a href="#gallery" className="hover:underline">Gallery</a></li>
            <li><a href={waLink("Hi! I need help.")} target="_blank" rel="noopener noreferrer" className="hover:underline">WhatsApp Support</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container py-5 flex flex-col sm:flex-row gap-2 justify-between items-center text-xs opacity-80">
          <p>© {new Date().getFullYear()} Yaad Ghar. All rights reserved.</p>
          <p className="font-hindi">यादें जो हमेशा साथ रहें ❤️</p>
        </div>
      </div>
    </footer>
  );
};
