import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Star, ArrowLeft } from "lucide-react";
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
    name: "Sport Sneakers",
    description: "Lightweight athletic sneakers for active men",
    price: 28000,
    rating: 4.9,
    reviews: 98,
    image: product1,
    sizes: ["40", "41", "42", "43", "44"],
    inStock: true,
  },
  {
    id: 3,
    name: "Palm Slippers",
    description: "Handcrafted palm slippers for casual comfort",
    price: 15000,
    rating: 4.7,
    reviews: 156,
    image: product1,
    sizes: ["39", "40", "41", "42", "43", "44"],
    inStock: true,
  },
  {
    id: 4,
    name: "Leather Sandals",
    description: "Durable leather sandals for everyday wear",
    price: 18000,
    rating: 4.9,
    reviews: 87,
    image: product1,
    sizes: ["41", "42", "43", "44", "45"],
    inStock: true,
  },
  {
    id: 5,
    name: "Cover Shoes",
    description: "Stylish cover shoes for formal occasions",
    price: 35000,
    rating: 4.8,
    reviews: 203,
    image: product1,
    sizes: ["40", "41", "42", "43", "44"],
    inStock: true,
  },
  {
    id: 6,
    name: "Canvas Shoes",
    description: "Classic canvas shoes for modern gentlemen",
    price: 22000,
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

export default MenProducts;
