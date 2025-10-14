import { Card, CardContent } from "../ui/card";
import { Quote } from "lucide-react";
import { testimonials } from "./localConstants";

export function LocalTestimonialsSection() {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl serif mb-6">Community Voices</h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Hear from our restaurant partners, community leaders, and local organizations about our shared commitment to Arkansas excellence.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-luxury-charcoal border-luxury-gold/20">
            <CardContent className="p-8">
              <Quote className="w-8 h-8 text-luxury-gold mb-6" />
              <blockquote className="text-lg text-white/90 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t border-luxury-gold/20 pt-6">
                <div className="text-luxury-gold">{testimonial.author}</div>
                <div className="text-white/80">{testimonial.business}</div>
                <div className="text-white/60 text-sm">{testimonial.location}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}