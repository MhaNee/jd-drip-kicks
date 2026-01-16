import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const products = [
  {
    id: 1,
    name: "Premium Loafers",
    price: 25000,
    rating: 4.8,
    reviews: 124,
    image: product1,
  },
  {
    id: 2,
    name: "Casual Sneakers",
    price: 28000,
    rating: 4.9,
    reviews: 89,
    image: product2,
  },
  {
    id: 3,
    name: "Comfort Slides",
    price: 20000,
    rating: 4.7,
    reviews: 156,
    image: product3,
  },
  {
    id: 4,
    name: "Classic Sandals",
    price: 22000,
    rating: 4.8,
    reviews: 203,
    image: product4,
  },
];

const FeaturedProducts = () => {
  return (
    <section id="shop" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked selections from our latest collection. Quality that speaks
            for itself.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-square bg-muted">
                <img
                  src={product.image}
                  alt={`${product.name} - Premium unisex footwear`}
                  className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="text-sm font-medium text-foreground">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews} reviews)
                  </span>
                </div>
                
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;
