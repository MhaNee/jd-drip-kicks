import { Heart, Award, Sparkles } from "lucide-react";
import brandCraftsmanship from "@/assets/brand-craftsmanship.jpg";

const values = [
  {
    icon: Heart,
    title: "Comfort First",
    description:
      "Feel comfortable in every step you take with our premium footwear collection.",
  },
  {
    icon: Award,
    title: "Quality Selection",
    description:
      "Dealers in all kinds of footwear - from cover shoes to canvas, slides, sandals, and crocs.",
  },
  {
    icon: Sparkles,
    title: "Style & Personality",
    description:
      "Step boldly and show your personality with our diverse collection for both male and female.",
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
                src={brandCraftsmanship}
                alt="JD Drip Kicks quality footwear selection and craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              About
              <br />
              <span className="text-primary">JD Drip Kicks</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Your trusted dealer in all kinds of footwear for both male and female.
              We bring you comfort, style, and quality in every step. From cover shoes 
              to canvas, slides, sandals, and crocs - we've got you covered.
            </p>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Step boldly, feel comfortable, and show your personality with our 
              diverse collection. Whether you're looking for casual everyday wear 
              or something special, JD Drip Kicks delivers quality footwear that 
              matches your lifestyle.
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
