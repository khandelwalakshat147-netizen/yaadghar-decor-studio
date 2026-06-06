import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { waLink } from "@/lib/site";

const tiers = [
  {
    name: "Starter Pack",
    hi: "स्टार्टर पैक",
    price: "₹299",
    qty: "Pack of 5 magnets",
    features: ["2x2 round magnets", "High-gloss finish", "Free design preview", "Cash on Delivery"],
  },
  {
    name: "Memory Pack",
    hi: "मेमोरी पैक",
    price: "₹599",
    qty: "Pack of 10 magnets",
    features: ["Mix any sizes", "Premium photo print", "Custom captions", "Fast 3-day dispatch"],
    featured: true,
  },
  {
    name: "Family Combo",
    hi: "फैमिली कॉम्बो",
    price: "₹999",
    qty: "Pack of 20 magnets",
    features: ["All shapes included", "Free gift box", "Free shipping PAN India", "Priority support"],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12 space-y-3">
          <p className="font-hindi text-primary text-lg">पैकेज और कीमतें</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">Best Value Packages</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Save more when you order in combos. Perfect for gifting & decorating.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((t) => (
            <Card key={t.name}
              className={`relative p-7 transition-smooth ${
                t.featured
                  ? "gradient-red text-primary-foreground border-0 shadow-elegant scale-105 lg:scale-110"
                  : "gradient-card border-border/60 hover:shadow-card"
              }`}>
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-gold px-4 py-1 text-xs font-bold text-foreground shadow-gold">
                  MOST POPULAR
                </div>
              )}
              <div className="space-y-2 mb-5">
                <h3 className="font-display text-2xl font-bold">{t.name}</h3>
                <p className={`font-hindi text-sm ${t.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{t.hi}</p>
              </div>
              <div className="mb-5">
                <div className="font-display text-5xl font-bold">{t.price}</div>
                <div className={`text-sm mt-1 ${t.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{t.qty}</div>
              </div>
              <ul className="space-y-3 mb-7">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${t.featured ? "bg-primary-foreground/20" : "bg-gold-soft"}`}>
                      <Check className={`h-3 w-3 ${t.featured ? "text-primary-foreground" : "text-primary"}`} strokeWidth={3} />
                    </span>
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant={t.featured ? "gold" : "hero"} className="w-full" size="lg">
                <a href={waLink(`Hi! I want to order the ${t.name} (${t.price}).`)} target="_blank" rel="noopener noreferrer">
                  Order Now
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
