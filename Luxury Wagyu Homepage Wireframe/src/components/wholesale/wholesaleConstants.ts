import { Truck, Award, DollarSign, Clock, Users, MapPin, ChefHat, Handshake } from "lucide-react";

export const wholesaleBenefits = [
  {
    icon: Award,
    title: "Premium Quality Guarantee",
    description: "Consistent, restaurant-grade American Wagyu that elevates your menu and delights your customers."
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description: "Scheduled deliveries to fit your operation's needs, with flexible ordering and consistent supply."
  },
  {
    icon: DollarSign,
    title: "Competitive Wholesale Pricing",
    description: "Volume discounts and special rates for restaurants and bulk purchasers with transparent pricing."
  },
  {
    icon: Clock,
    title: "Custom Cut Specifications",
    description: "Tailored cuts and portions to match your menu requirements and reduce kitchen prep time."
  }
];

export const productOfferings = [
  {
    category: "Prime Steaks",
    items: ["Ribeye (12oz, 16oz, 20oz)", "NY Strip (10oz, 14oz)", "Filet Mignon (6oz, 8oz)", "Tomahawk (32oz+)"],
    minimumOrder: "25 lbs",
    image: "restaurant steak plating"
  },
  {
    category: "Ground & Burgers",
    items: ["80/20 Ground Beef", "85/15 Ground Beef", "Pre-formed Patties", "Bulk Ground (50lb cases)"],
    minimumOrder: "50 lbs",
    image: "gourmet burger restaurant"
  },
  {
    category: "Roasts & Large Cuts",
    items: ["Prime Rib Roasts", "Brisket (Whole/Half)", "Chuck Roasts", "Custom Fabrication"],
    minimumOrder: "40 lbs",
    image: "beef roast professional kitchen"
  },
  {
    category: "Specialty Items",
    items: ["Beef Bones", "Trim & Fat", "Organ Meats", "Custom Requests"],
    minimumOrder: "20 lbs",
    image: "specialty beef cuts"
  }
];

export const partnershipPrograms = [
  {
    title: "Restaurant Partnership",
    description: "Exclusive menu partnerships with co-marketing opportunities and staff training.",
    benefits: ["Marketing Support", "Staff Training", "Menu Development", "Exclusive Cuts"],
    commitment: "6-month minimum"
  },
  {
    title: "Local Business Alliance",
    description: "Supporting Ozark-area businesses with special local pricing and community initiatives.",
    benefits: ["Local Pricing", "Community Events", "Cross-Promotion", "Priority Service"],
    commitment: "3-month minimum"
  },
  {
    title: "Volume Buyer Program",
    description: "For customers purchasing 100+ lbs monthly with the best pricing and service.",
    benefits: ["Lowest Pricing", "Custom Processing", "Direct Farm Access", "Flexible Terms"],
    commitment: "Monthly commitment"
  }
];

export const testimonials = [
  {
    quote: "Our customers rave about the quality difference. Ozark Natural Steaks has become our signature offering.",
    author: "Chef Sarah Martinez",
    business: "The Mountain View Steakhouse",
    location: "Eureka Springs, AR"
  },
  {
    quote: "The consistency and service are unmatched. They understand what restaurants need.",
    author: "Mike Thompson",
    business: "Thompson's Farm-to-Table",
    location: "Fayetteville, AR"
  },
  {
    quote: "Best wholesale partner we've worked with. The quality speaks for itself on our plates.",
    author: "Chef David Kim",
    business: "Ozark Highlands Restaurant",
    location: "Bentonville, AR"
  }
];

export const imageQueries = {
  hero: "restaurant kitchen professional chef",
  partnership: "business handshake restaurant",
  local: "arkansas restaurant local business",
  contact: "chef meat inspection quality"
};