import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Phone, Mail, MapPin } from "lucide-react";

export function ContactInquirySection() {
  return (
    <section id="contact-form" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl serif mb-6">Start Your Partnership Today</h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Ready to bring premium American Wagyu to your menu? Contact us for pricing, samples, or to schedule a ranch visit.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card className="bg-luxury-charcoal border-luxury-gold/20">
            <CardContent className="p-8">
              <h3 className="text-2xl mb-6 text-white">Request Information</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-white">First Name</Label>
                    <Input 
                      id="firstName" 
                      className="bg-luxury-black border-luxury-gold/30 text-white"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-white">Last Name</Label>
                    <Input 
                      id="lastName" 
                      className="bg-luxury-black border-luxury-gold/30 text-white"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="business" className="text-white">Business Name</Label>
                  <Input 
                    id="business" 
                    className="bg-luxury-black border-luxury-gold/30 text-white"
                    placeholder="Enter your business name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input 
                      id="email" 
                      type="email"
                      className="bg-luxury-black border-luxury-gold/30 text-white"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-white">Phone</Label>
                    <Input 
                      id="phone" 
                      className="bg-luxury-black border-luxury-gold/30 text-white"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="businessType" className="text-white">Business Type</Label>
                  <Select>
                    <SelectTrigger className="bg-luxury-black border-luxury-gold/30 text-white">
                      <SelectValue placeholder="Select your business type" />
                    </SelectTrigger>
                    <SelectContent className="bg-luxury-charcoal border-luxury-gold/30">
                      <SelectItem value="restaurant">Restaurant</SelectItem>
                      <SelectItem value="steakhouse">Steakhouse</SelectItem>
                      <SelectItem value="hotel">Hotel/Resort</SelectItem>
                      <SelectItem value="catering">Catering Company</SelectItem>
                      <SelectItem value="retail">Retail/Butcher Shop</SelectItem>
                      <SelectItem value="individual">Individual Buyer</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea 
                    id="message" 
                    className="bg-luxury-black border-luxury-gold/30 text-white min-h-[120px]"
                    placeholder="Tell us about your needs, volume requirements, or any specific questions..."
                  />
                </div>

                <Button className="w-full bg-luxury-gold text-luxury-black hover:bg-luxury-gold-dark">
                  Send Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <Card className="bg-luxury-charcoal border-luxury-gold/20">
            <CardContent className="p-6">
              <h3 className="text-xl mb-4 text-white">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-luxury-gold" />
                  <div>
                    <div className="text-white">Wholesale Sales</div>
                    <div className="text-white/70">(870) 555-BEEF</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-luxury-gold" />
                  <div>
                    <div className="text-white">Email</div>
                    <div className="text-white/70">wholesale@ozarksteaks.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-luxury-gold" />
                  <div>
                    <div className="text-white">Location</div>
                    <div className="text-white/70">Ozark Mountains, Arkansas</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-luxury-charcoal border-luxury-gold/20">
            <CardContent className="p-6">
              <h3 className="text-xl mb-4 text-white">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-white/70">Minimum Order:</span>
                  <span className="text-white">None</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Delivery Area:</span>
                  <span className="text-white">Arkansas & Region</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Lead Time:</span>
                  <span className="text-white">3-5 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Payment Terms:</span>
                  <span className="text-white">Details upon request</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}