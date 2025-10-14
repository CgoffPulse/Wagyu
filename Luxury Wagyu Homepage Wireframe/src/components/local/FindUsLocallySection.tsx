import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import smithFamilyImage from "../../assets/Smith_Family_Horseback.jpg";

export function FindUsLocallySection() {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl serif mb-6">Connect With Us Locally</h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Ready to partner with us or want to know where to find our beef locally? Get in touch and become part of the Ozark Natural Steaks community.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Contact Form */}
        <Card className="bg-luxury-charcoal border-luxury-gold/20">
          <CardContent className="p-8">
            <h3 className="text-2xl mb-6 text-white">Get in Touch</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-white">Name</Label>
                  <Input 
                    id="name" 
                    className="bg-luxury-black border-luxury-gold/30 text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input 
                    id="email" 
                    type="email"
                    className="bg-luxury-black border-luxury-gold/30 text-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="subject" className="text-white">Subject</Label>
                <Input 
                  id="subject" 
                  className="bg-luxury-black border-luxury-gold/30 text-white"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-white">Message</Label>
                <Textarea 
                  id="message" 
                  className="bg-luxury-black border-luxury-gold/30 text-white min-h-[120px]"
                  placeholder="Tell us about your restaurant, event, or partnership idea..."
                />
              </div>

              <Button className="w-full bg-luxury-gold text-luxury-black hover:bg-luxury-gold-dark">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information & Image */}
        <div className="space-y-8">
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <ImageWithFallback
              src={smithFamilyImage}
              alt="Smith family horseback"
              className="w-full h-full object-cover"
            />
          </div>

          <Card className="bg-luxury-charcoal border-luxury-gold/20">
            <CardContent className="p-6">
              <h3 className="text-xl mb-4 text-white">Visit Us</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-luxury-gold" />
                  <div>
                    <div className="text-white">Smith Family Ranch</div>
                    <div className="text-white/70">Gentry, Arkansas</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-luxury-gold" />
                  <div>
                    <div className="text-white">Local Sales</div>
                    <div className="text-white/70">(870) 555-BEEF</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-luxury-gold" />
                  <div>
                    <div className="text-white">Email</div>
                    <div className="text-white/70">local@ozarksteaks.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-luxury-gold" />
                  <div>
                    <div className="text-white">Farm Tours</div>
                    <div className="text-white/70">By appointment</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-luxury-charcoal border-luxury-gold/20">
            <CardContent className="p-6">
              <h3 className="text-xl mb-4 text-white">Find Our Beef</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-white/70">Farmers Markets:</span>
                  <span className="text-white">2+ regional locations across Northwest Arkansas</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Retail Partners:</span>
                  <span className="text-white">Honeywheat, Fairmount Farm Market, and more</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Coverage Area:</span>
                  <span className="text-white">NWA, Eastern OK, SW Missouri, Central Arkansas</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Direct Sales:</span>
                  <span className="text-white">Regional pickup • Delivery for large orders • Regional shipping (coming soon)</span>
                </div>
              </div>
              <Button 
                className="w-full bg-luxury-gold text-luxury-black hover:bg-luxury-gold-dark"
                onClick={() => window.open('/contact', '_blank')}
              >
                Request pickup or delivery 
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}