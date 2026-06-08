import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How do I send my photos for printing?", a: "After placing the order on WhatsApp, simply share your photos in HD quality on the same chat. Our team will create a free preview before printing." },
  { q: "क्या delivery पूरे India में होती है?", a: "जी हाँ! हम पूरे भारत में delivery करते हैं। आमतौर पर 4–7 working days में आपका order आप तक पहुँच जाता है।" },
  { q: "What is the minimum order quantity?", a: "There is no minimum quantity. You can order even a single magnet starting at just ₹79." },
  { q: "Do you offer Cash on Delivery (COD)?", a: "Yes! COD is available on most pin codes across India. Prepaid orders also get small discounts and free shipping above ₹499." },
  { q: "Can I customize size, shape, and text?", a: "Absolutely! Choose any size from our catalog, add captions, names, dates — we tailor each magnet to your story." },
  { q: "How long do the magnets last?", a: "Our premium magnets are scratch-resistant, waterproof and last for 5+ years without fading when kept away from direct sunlight." },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 gradient-soft">
      <div className="container max-w-3xl">
        <div className="text-center mb-10 space-y-3">
          <p className="font-hindi text-primary text-lg">अक्सर पूछे जाने वाले प्रश्न</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">Frequently Asked Questions</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}
              className="rounded-2xl border border-border/60 bg-card px-5 shadow-soft">
              <AccordionTrigger className="text-left font-display text-base font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
