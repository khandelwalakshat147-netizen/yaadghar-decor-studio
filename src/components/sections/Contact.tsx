import { useState } from "react";
import { z } from "zod";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MessageCircle, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { waLink, WHATSAPP_NUMBER } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(60),
  phone: z.string().trim().regex(/^[+\d\s-]{7,20}$/, "Enter a valid phone number"),
  product: z.string().trim().max(80).optional(),
  message: z.string().trim().min(5, "Tell us a bit more").max(600),
});

export const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", product: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fe: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { fe[i.path[0] as string] = i.message; });
      setErrors(fe);
      return;
    }
    setErrors({});
    const text =
      `New Order Inquiry — Yaad Ghar%0A` +
      `Name: ${form.name}%0APhone: ${form.phone}%0AProduct: ${form.product || "—"}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    toast({ title: "Sending you to WhatsApp", description: "Complete your inquiry on WhatsApp chat." });
    setForm({ name: "", phone: "", product: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-3">
            <p className="font-hindi text-primary text-lg">संपर्क करें</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">Order Inquiry & Contact</h2>
            <p className="text-muted-foreground">
              Have a custom request? Send us your idea and we'll create a free preview for you on WhatsApp.
            </p>
          </div>

          <div className="space-y-4">
            <a href={waLink("Hi Yaad Ghar!")} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-border/60 gradient-card p-4 transition-smooth hover:shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-whatsapp text-white">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">WhatsApp (fastest)</div>
                <div className="font-display font-semibold">+91 86194 41458</div>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-border/60 gradient-card p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-red text-primary-foreground">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Call us</div>
                <div className="font-display font-semibold">+91 99999 99999</div>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-border/60 gradient-card p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-gold">
                <Mail className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="font-display font-semibold">hello@yaadghar.in</div>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-border/60 gradient-card p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Ships from</div>
                <div className="font-display font-semibold">India · PAN India delivery</div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <a href="#" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full gradient-red text-primary-foreground shadow-soft transition-smooth hover:scale-110">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full gradient-gold shadow-soft transition-smooth hover:scale-110">
              <Facebook className="h-5 w-5 text-foreground" />
            </a>
            <a href={waLink("Hi!")} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-whatsapp text-white shadow-soft transition-smooth hover:scale-110">
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>

        <Card className="lg:col-span-3 p-6 md:p-8 gradient-card border-border/60 shadow-card">
          <form onSubmit={submit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" value={form.name} maxLength={60}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Riya Kapoor" />
                {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" value={form.phone} maxLength={20}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 98xxxxxx99" />
                {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="product">Product / Occasion (optional)</Label>
              <Input id="product" value={form.product} maxLength={80}
                onChange={(e) => setForm({ ...form, product: e.target.value })}
                placeholder="e.g. 10 round magnets for birthday" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Tell us about your order</Label>
              <Textarea id="message" rows={5} value={form.message} maxLength={600}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Sizes, quantity, theme, any custom text…" />
              {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full">
              <MessageCircle className="h-5 w-5" />
              Send Inquiry on WhatsApp
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              We typically respond within 15 minutes during business hours.
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
};
