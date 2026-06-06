import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";
import round from "@/assets/product-round.jpg";
import square from "@/assets/product-square.jpg";
import rect from "@/assets/product-rect.jpg";
import large from "@/assets/product-large.jpg";

type Product = {
  name: string;
  size: string;
  shape: string;
  price: string;
  priceSub?: string;
  img: string;
  tag?: string;
  custom?: boolean;
};

const products: Product[] = [
  { name: "Round Magnet", size: "2x2 inch", shape: "Round", price: "₹59", img: round, tag: "Bestseller" },
  { name: "Round Magnet", size: "2x3 inch", shape: "Round", price: "₹62", img: round },
  { name: "Square Magnet", size: "3x3 inch", shape: "Square", price: "₹79", priceSub: "– ₹99", img: square, tag: "Popular" },
  { name: "Rectangular Magnet", size: "3x4 inch", shape: "", price: "Custom Pricing", img: rect, custom: true },
  { name: "Premium Magnet", size: "4x4 inch", shape: "Square", price: "₹149", priceSub: "– ₹199", img: large },
  { name: "XL Magnet", size: "4x6 inch", shape: "", price: "Custom Pricing", img: rect, custom: true },
];

export const Products = () => {
  return (
    <section id="products" className="py-20 gradient-soft">
      <div className="container">
        <div className="text-center mb-12 space-y-3">
          <p className="font-hindi text-primary text-lg">हमारे प्रोडक्ट्स</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">Our Product Catalog</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Premium photo magnets in every size — choose your shape, send your photo, get it delivered.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <Card key={i} className="group overflow-hidden border-border/60 gradient-card transition-smooth hover:shadow-elegant hover:-translate-y-1">
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={p.img}
                  alt={`${p.name} ${p.size}`}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                />
                {p.tag && (
                  <Badge className="absolute top-3 left-3 gradient-red text-primary-foreground border-0 shadow-soft">
                    {p.tag}
                  </Badge>
                )}
                <Badge variant="outline" className="absolute top-3 right-3 bg-background/95 backdrop-blur border-gold/40 text-foreground">
                  {p.shape}
                </Badge>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-lg font-bold">{p.name}</h3>
                    <p className="text-sm text-muted-foreground">{p.size}</p>
                  </div>
                  <div className="text-right">
                    {p.custom ? (
                      <div className="font-display text-base font-bold text-gradient-gold">Custom</div>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className="font-display text-2xl font-bold text-primary">{p.price}</span>
                        {p.priceSub && <span className="text-sm text-muted-foreground">{p.priceSub}</span>}
                      </div>
                    )}
                  </div>
                </div>
                <Button asChild variant="whatsapp" className="w-full">
                  <a
                    href={waLink(`Hi! I want to order: ${p.name} (${p.size}). Please share details.`)}
                    target="_blank" rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Order on WhatsApp
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
