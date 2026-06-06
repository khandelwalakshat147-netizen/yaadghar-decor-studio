import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import hero from "@/assets/hero-magnets.jpg";
import large from "@/assets/product-large.jpg";

export const Gallery = () => {
  const items = [
    { src: g1, alt: "Heart-shaped wall arrangement of photo magnets", span: "md:col-span-2 md:row-span-2" },
    { src: g2, alt: "Birthday gift box with photo magnets" },
    { src: g3, alt: "Family memories on fridge door" },
    { src: g4, alt: "Couple anniversary magnets" },
    { src: hero, alt: "Custom magnet collection", span: "md:col-span-2" },
    { src: large, alt: "Wall decoration photo magnet" },
  ];

  return (
    <section id="gallery" className="py-20 gradient-soft">
      <div className="container">
        <div className="text-center mb-12 space-y-3">
          <p className="font-hindi text-primary text-lg">फोटो गैलरी</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">Customer Memory Wall</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real magnets made for real customers. Be inspired by their stories.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {items.map((it, i) => (
            <div key={i} className={`group relative overflow-hidden rounded-2xl shadow-soft transition-smooth hover:shadow-elegant ${it.span ?? ""}`}>
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-smooth group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 transition-smooth group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
