import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-16 bg-gradient-to-b from-luxury-charcoal to-luxury-black relative">
      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='7' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3Ccircle cx='7' cy='53' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      <div className="max-w-[1440px] mx-auto px-20 text-center relative z-10">
        <h2 className="text-4xl text-white mb-4 serif">
          Get 10% Off Your First Order
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Join our newsletter for exclusive offers, cooking tips, and updates from the ranch.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white/10 border-luxury-gold/30 text-white placeholder:text-gray-400 focus:border-luxury-gold"
            />
            <Button 
              type="submit"
              className="bg-luxury-gold text-luxury-black hover:bg-luxury-gold-dark px-8"
            >
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            By subscribing, you agree to our privacy policy and terms of service.
          </p>
        </form>
      </div>
    </section>
  );
}