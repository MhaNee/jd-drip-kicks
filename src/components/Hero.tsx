import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroShoes from "@/assets/hero-shoes.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "var(--gradient-hero)",
        }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgNC40MTgtMy41ODIgOC04IDhzLTgtMy41ODItOC04IDMuNTgyLTggOC04IDggMy41ODIgOCA4eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Feel The Comfort
              <br />
              <span className="text-primary">Rock The Style</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Dealers in all kinds of footwear - cover shoes, canvas, slides, sandals, crocs for both male and female. Step boldly, feel comfortable and show your personality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="gap-2 text-lg font-semibold shadow-lg hover:shadow-xl transition-all bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                View Collection
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroShoes}
                alt="Premium unisex sneakers showcasing Stride Vault's signature style and comfort"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground px-6 py-4 rounded-2xl shadow-xl">
              <p className="text-sm font-semibold">Based on</p>
              <p className="text-2xl font-heading font-bold">Order</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
