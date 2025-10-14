import smithFamilyHorseback from '../../assets/Smith_Family_Horseback.jpg';
import haySunriseCattle from '../../assets/Hay_Sunrise_Cattle (1).jpg';
import { Heart, Award, Leaf, Users } from "lucide-react";

export const familyValues = [
  {
    icon: Heart,
    text: "Animal well-being comes first"
  },
  {
    icon: Users,
    text: "Family heritage and tradition"
  },
  {
    icon: Leaf,
    text: "Sustainable farming practices"
  },
  {
    icon: Award,
    text: "Uncompromising quality standards"
  }
];

export const ranchPractices = [
  {
    icon: Leaf,
    title: "Naturally Raised & Grain-Finished",
    description: "Our cattle graze on open Ozark pastures and are finished on a balanced, locally-sourced grain program. Free from added hormones, antibiotics, or synthetic additives. The result is beef that's naturally raised, richly marbled, and full of authentic flavor."
  },
  {
    icon: Heart,
    title: "Low-Stress Environment",
    description: "We use gentle handling techniques and provide spacious pastures that allow our cattle to express natural behaviors and live comfortably."
  },
  {
    icon: Award,
    title: "Premium Genetics",
    description: "Our breeding program focuses on American Wagyu genetics known for exceptional marbling, tenderness, and the signature buttery flavor."
  }
];

export const imageUrls = {
  heroBackground: "https://images.unsplash.com/photo-1603710058304-3b3799b9ce2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvemFyayUyMG1vdW50YWlucyUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NTU4NzAyODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  familyWorking: smithFamilyHorseback,
  cattleGrazing: haySunriseCattle
};