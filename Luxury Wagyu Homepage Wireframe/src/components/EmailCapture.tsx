import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function EmailCapture() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email capture
    console.log("Email signup:", email);
    setEmail("");
  };

  return (
    <section className="py-16 bg-luxury-charcoal">
      <div className="max-w-[1440px] mx-auto px-20 text-center">
        <h2 className="text-4xl text-white mb-4 serif">
          Want first dibs on new cuts?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Join our family updates to hear about new cuts, seasonal availability, and exclusive offers before anyone else.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
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
              Get Updates
            </Button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            We respect your inbox. Updates only when there's something special to share.
          </p>
        </form>
      </div>
    </section>
  );
}