import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

const testimonials = [
  {
    id: 1,
    name: "Chioma Adeleke",
    role: "Verified Buyer",
    content:
      "Best footwear dealer in town! The quality and comfort are exceptional. I got my slides and loafers from JD Drip Kicks and I'm impressed!",
    rating: 5,
    avatar: avatar1,
  },
  {
    id: 2,
    name: "Ibrahim Musa",
    role: "Regular Customer",
    content:
      "As someone who values both style and comfort, JD Drip Kicks delivers perfectly. Their collection is diverse and the prices are very reasonable.",
    rating: 5,
    avatar: avatar2,
  },
  {
    id: 3,
    name: "Blessing Okafor",
    role: "Fashion Enthusiast",
    content:
      "I love that they have options for everyone. From casual to formal, slides to sneakers - JD Drip Kicks has it all. Great quality too!",
    rating: 5,
    avatar: avatar3,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what people are saying about
            JD Drip Kicks.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="p-8 bg-card hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.name} - JD Drip Kicks customer`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
