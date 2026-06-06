import { Card } from "@/components/ui/card";
import { Cake, Heart, Home, Camera, Sparkles } from "lucide-react";

const categories = [
  { icon: Cake, name: "Birthday Gifts", hi: "जन्मदिन तोहफे", color: "from-primary to-primary-glow" },
  { icon: Heart, name: "Couple Gifts", hi: "कपल गिफ्ट्स", color: "from-rose-500 to-primary" },
  { icon: Home, name: "Wall Decoration", hi: "दीवार सजावट", color: "from-gold to-amber-500" },
  { icon: Camera, name: "Custom Photo Magnets", hi: "फोटो मैग्नेट्स", color: "from-primary to-rose-500" },
  { icon: Sparkles, name: "Memory Gifts", hi: "यादगार तोहफे", color: "from-amber-500 to-gold" },
];

export const Categories = () => {
  return (
    <section id="categories" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12 space-y-3">
          <p className="font-hindi text-primary text-lg">श्रेणियाँ</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">Shop by Category</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Find the perfect personalised gift for every occasion and every loved one.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {categories.map((c) => (
            <Card key={c.name} className="group cursor-pointer border-border/60 gradient-card p-6 text-center transition-smooth hover:shadow-elegant hover:-translate-y-1">
              <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${c.color} shadow-soft group-hover:scale-110 transition-smooth`}>
                <c.icon className="h-8 w-8 text-white" strokeWidth={2} />
              </div>
              <h3 className="font-display font-semibold text-base">{c.name}</h3>
              <p className="font-hindi text-sm text-muted-foreground mt-1">{c.hi}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
