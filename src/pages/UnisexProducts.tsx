import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Star, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const unisexProducts = [
  {
    id: 1,
    name: "Comfort Slides - White",
    description: "Ultra-comfortable slides for everyone",
    price: 20000,
    rating: 4.8,
    reviews: 234,
    image: product3,
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
    inStock: true,
  },
  {
    id: 2,
    name: "Classic Slides - Black",
    description: "Versatile black slides perfect for any occasion",
    price: 20000,
    rating: 4.9,
    reviews: 289,
    image: product4,
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
    inStock: true,
  },
  {
    id: 3,
    name: "Premium Crocs",
    description: "Comfortable crocs with superior cushioning",
    price: 25000,
    rating: 4.7,
    reviews: 198,
    image: product3,
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
    inStock: true,
  },
  {
    id: 4,
    name: "Canvas Sneakers",
    description: "Stylish canvas shoes for all genders",
    price: 28000,
    rating: 4.8,
    reviews: 176,
    image: product4,
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
    inStock: true,
  },
  {
    id: 5,
    name: "Sport Slides",
    description: "Athletic slides with excellent grip",
    price: 22000,
    rating: 4.7,
    reviews: 203,
    image: product3,
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
    inStock: true,
  },
  {
    id: 6,
    name: "Designer Flip-Flops",
    description: "Trendy flip-flops for beach and casual wear",
    price: 18000,
    rating: 4.6,
    reviews: 167,
    image: product4,
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
    inStock: false,
  },
];

const UnisexProducts = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="mb-12 animate-fade-in">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-4">
              Unisex Collection
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Style without boundaries. Browse our versatile collection designed
              for everyone who values comfort and quality.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {unisexProducts.map((product, index) => (
              <Card
                key={product.id}
                className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-square bg-muted">
                  <img
                    src={product.image}
                    alt={`${product.name} - Premium unisex footwear from JD Drip Kicks`}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    {product.name}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4">
                    {product.description}
                  </p>

                  <div className="flex items-center gap-2 mb-4">
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
      </main>
      <Footer />
    </div>
  );
};

export default UnisexProducts;
