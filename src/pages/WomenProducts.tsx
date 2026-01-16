import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Star, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import product2 from "@/assets/product-2.jpg";

const womenProducts = [
  {
    id: 1,
    name: "Elegant Sandals",
    description: "Sophisticated sandals perfect for any occasion",
    price: 22000,
    rating: 4.9,
    reviews: 156,
    image: product2,
    sizes: ["36", "37", "38", "39", "40", "41"],
    inStock: true,
  },
  {
    id: 2,
    name: "Classic Heels",
    description: "Timeless heels that elevate your style",
    price: 38000,
    rating: 4.8,
    reviews: 134,
    image: product2,
    sizes: ["36", "37", "38", "39", "40"],
    inStock: true,
  },
  {
    id: 3,
    name: "Casual Sneakers",
    description: "Comfortable sneakers for everyday elegance",
    price: 24000,
    rating: 4.7,
    reviews: 189,
    image: product2,
    sizes: ["36", "37", "38", "39", "40", "41"],
    inStock: true,
  },
  {
    id: 4,
    name: "Designer Flats",
    description: "Chic flats combining comfort and style",
    price: 26000,
    rating: 4.8,
    reviews: 178,
    image: product2,
    sizes: ["36", "37", "38", "39", "40"],
    inStock: true,
  },
  {
    id: 5,
    name: "Premium Wedges",
    description: "Elegant wedges for sophisticated looks",
    price: 42000,
    rating: 4.9,
    reviews: 123,
    image: product2,
    sizes: ["36", "37", "38", "39", "40", "41"],
    inStock: true,
  },
  {
    id: 6,
    name: "Stylish Mules",
    description: "Trendy mules perfect for modern women",
    price: 29000,
    rating: 4.7,
    reviews: 167,
    image: product2,
    sizes: ["36", "37", "38", "39", "40"],
    inStock: true,
  },
];

const WomenProducts = () => {
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
              Women's Collection
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Elegant styles that empower. Discover our curated selection of
              footwear designed for confidence and comfort.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {womenProducts.map((product, index) => (
              <Card
                key={product.id}
                className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-square bg-muted">
                  <img
                    src={product.image}
                    alt={`${product.name} - Premium women's footwear from JD Drip Kicks`}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                  />
                  {product.inStock && (
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      In Stock
                    </div>
                  )}
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

                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-2">
                      Available Sizes:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size) => (
                        <span
                          key={size}
                          className="px-2 py-1 bg-muted text-foreground text-xs rounded border border-border"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
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

export default WomenProducts;
