import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Star, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import product1 from "@/assets/product-1.jpg";

const menProducts = [
  {
    id: 1,
    name: "Classic Brown Loafers",
    description: "Premium leather loafers with exceptional comfort",
    price: 25000,
    rating: 4.8,
    reviews: 124,
    image: product1,
    sizes: ["40", "41", "42", "43", "44", "45"],
    inStock: true,
  },
  {
    id: 2,
    name: "Executive Formal Shoes",
    description: "Elegant formal shoes for business and special occasions",
    price: 32000,
    rating: 4.9,
    reviews: 98,
    image: product1,
    sizes: ["40", "41", "42", "43", "44"],
    inStock: true,
  },
  {
    id: 3,
    name: "Casual Canvas Sneakers",
    description: "Comfortable canvas shoes perfect for everyday wear",
    price: 20000,
    rating: 4.7,
    reviews: 156,
    image: product1,
    sizes: ["39", "40", "41", "42", "43", "44"],
    inStock: true,
  },
  {
    id: 4,
    name: "Premium Leather Boots",
    description: "Durable leather boots with superior craftsmanship",
    price: 45000,
    rating: 4.9,
    reviews: 87,
    image: product1,
    sizes: ["41", "42", "43", "44", "45"],
    inStock: true,
  },
  {
    id: 5,
    name: "Sport Running Shoes",
    description: "Lightweight running shoes with excellent support",
    price: 28000,
    rating: 4.8,
    reviews: 203,
    image: product1,
    sizes: ["40", "41", "42", "43", "44"],
    inStock: true,
  },
  {
    id: 6,
    name: "Designer Slip-Ons",
    description: "Stylish slip-on shoes for modern gentlemen",
    price: 35000,
    rating: 4.7,
    reviews: 145,
    image: product1,
    sizes: ["40", "41", "42", "43", "44", "45"],
    inStock: true,
  },
];

const MenProducts = () => {
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
              Men's Collection
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Bold designs for the modern man. Explore our premium selection of
              footwear crafted for style and comfort.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {menProducts.map((product, index) => (
              <Card
                key={product.id}
                className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-square bg-muted">
                  <img
                    src={product.image}
                    alt={`${product.name} - Premium men's footwear from JD Drip Kicks`}
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

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Price</p>
                      <span className="text-2xl font-bold text-primary">
                        ₦{product.price.toLocaleString()}
                      </span>
                    </div>
                    <Button
                      size="default"
                      className="gap-2 group-hover:gap-3 transition-all"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </Button>
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

export default MenProducts;
