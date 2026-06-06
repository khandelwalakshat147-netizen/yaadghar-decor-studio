import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Priya Sharma",
    city: "Delhi",
    text: "Magnets came out beautifully! Gifted them to my husband on our anniversary and he loved them. Quality bahut achhi hai!",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    city: "Mumbai",
    text: "Ordered the family combo pack for mom's birthday. Print clarity is amazing and delivery was super fast. Highly recommend!",
    rating: 5,
  },
  {
    name: "Anjali Mehta",
    city: "Bengaluru",
    text: "Made a memory wall with 20 custom magnets — looks like art! Yaad Ghar ki service top class hai. Thank you team!",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    city: "Jaipur",
    text: "Best gift I've ever given. The couple magnets turned out perfect. Will surely order again for Diwali gifting.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12 space-y-3">
          <p className="font-hindi text-primary text-lg">हमारे ग्राहकों की राय</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">Happy Customers</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Don't take our word for it — hear from people who already made memories with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r) => (
            <Card key={r.name} className="p-6 gradient-card border-border/60 hover:shadow-elegant transition-smooth space-y-4">
              <Quote className="h-8 w-8 text-gold" />
              <div className="flex gap-0.5">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">"{r.text}"</p>
              <div className="pt-3 border-t border-border/60">
                <div className="font-display font-bold">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.city}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
