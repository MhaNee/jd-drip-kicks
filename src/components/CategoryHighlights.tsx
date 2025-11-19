import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: 1,
    name: "Men's Collection",
    description: "Bold designs for the modern man",
    image: "/placeholder.svg",
    href: "#men",
  },
  {
    id: 2,
    name: "Women's Collection",
    description: "Elegant styles that empower",
    image: "/placeholder.svg",
    href: "#women",
  },
  {
    id: 3,
    name: "Unisex Collection",
    description: "Style without boundaries",
    image: "/placeholder.svg",
    href: "#unisex",
  },
];

const CategoryHighlights = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collections designed for everyone
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-[4/5] relative">
                <img
                  src={category.image}
                  alt={`${category.name} - ${category.description}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 text-background">
                <h3 className="font-heading text-3xl font-bold mb-2">
                  {category.name}
                </h3>
                <p className="text-background/90 mb-6 text-lg">
                  {category.description}
                </p>
                <Button
                  variant="secondary"
                  className="gap-2 group-hover:gap-3 transition-all shadow-lg"
                  asChild
                >
                  <a href={category.href}>
                    Explore
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryHighlights;
