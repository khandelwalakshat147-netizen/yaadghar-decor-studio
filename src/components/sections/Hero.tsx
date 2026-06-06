import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import heroImg from "@/assets/hero-magnets.jpg";
import { waLink } from "@/lib/site";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden gradient-soft">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />

      <div className="container relative grid lg:grid-cols-2 gap-12 lg:gap-8 py-16 lg:py-24 items-center">
        <div className="space-y-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold-soft/60 px-4 py-1.5 text-sm font-medium text-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>India's loved custom magnet brand</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground">
            Turn your <span className="text-gradient-red">memories</span> into
            <br />
            beautiful <span className="text-gradient-gold">fridge magnets</span>
          </h1>

          <p className="font-hindi text-xl text-primary/90">
            हर पल को बनाएँ खास — अपनी यादों का घर
          </p>

          <p className="text-lg text-muted-foreground max-w-xl">
            Customised photo magnets & wall décor gifts for birthdays, couples, anniversaries
            and every special moment. Premium quality, delivered all across India.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild variant="hero" size="xl">
              <a href={waLink("Hi Yaad Ghar! I want to order custom magnets.")} target="_blank" rel="noopener noreferrer">
                Order on WhatsApp
                <ArrowRight className="ml-1 h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="gold-outline" size="xl">
              <a href="#products">Browse Products</a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-4">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="h-9 w-9 rounded-full border-2 border-background gradient-gold" />
                ))}
              </div>
              <span className="text-sm font-medium">1000+ happy customers</span>
            </div>
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
              <span className="ml-1 text-sm font-medium">4.9/5</span>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-up">
          <div className="absolute inset-0 -m-6 rounded-[3rem] gradient-gold opacity-20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-elegant border-4 border-background animate-float">
            <img
              src={heroImg}
              alt="Custom fridge magnets with family memories"
              width={1536}
              height={1024}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-2xl gradient-red px-5 py-4 text-primary-foreground shadow-elegant">
            <div className="text-xs opacity-90">Starting at</div>
            <div className="font-display text-2xl font-bold">₹59 only</div>
          </div>
          <div className="absolute -top-4 -right-4 rounded-2xl bg-card px-5 py-4 shadow-gold border border-gold/30">
            <div className="text-xs text-muted-foreground">Fast Delivery</div>
            <div className="font-display text-lg font-bold text-primary">PAN India 🇮🇳</div>
          </div>
        </div>
      </div>
    </section>
  );
};
