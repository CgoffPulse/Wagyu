import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";
import { upcomingEvents } from "./localConstants";

export function UpcomingEventsSection() {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl serif mb-6">Meet Us in the Community</h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Join us at upcoming events throughout Arkansas. Meet the Smith family, taste our premium beef, and experience our commitment to community.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {upcomingEvents.map((event, index) => (
          <Card key={index} className="bg-luxury-charcoal border-luxury-gold/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-luxury-gold" />
                <Badge variant="secondary" className="bg-luxury-gold/20 text-luxury-gold border-luxury-gold/30">
                  Upcoming
                </Badge>
              </div>
              
              <h3 className="text-xl mb-3 text-white">{event.title}</h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-white/70">
                  <Clock className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
              </div>
              
              <p className="text-white/80 mb-6 leading-relaxed">
                {event.description}
              </p>
              
              <Button 
                className="w-full bg-luxury-gold text-luxury-black hover:bg-luxury-gold-dark"
              >
                Get Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}