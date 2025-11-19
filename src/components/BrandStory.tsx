import { Heart, Award, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Comfort First",
    description:
      "Every shoe is engineered with premium materials and ergonomic design for all-day comfort.",
  },
  {
    icon: Sparkles,
    title: "Timeless Style",
    description:
      "Classic designs that transcend trends, perfect for any occasion and personal style.",
  },
  {
    icon: Award,
    title: "Affordable Luxury",
    description:
      "Premium quality shouldn't break the bank. Exceptional value in every pair.",
  },
];

const BrandStory = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative animate-scale-in">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/placeholder.svg"
                alt="Stride Vault craftsmanship and quality footwear production"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Where Comfort
              <br />
              Meets Style
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Stride Vault, we believe that great shoes shouldn't require a
              compromise between comfort and style. Founded on the principle that
              everyone deserves premium footwear, we've created a collection of
              unisex shoes that combine exceptional craftsmanship, timeless
              design, and accessible pricing.
            </p>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Each pair is thoughtfully designed to support your lifestyle,
              whether you're exploring the city, heading to work, or enjoying a
              casual weekend. Because your shoes should work as hard as you do,
              without ever slowing you down.
            </p>

            <div className="space-y-8">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
