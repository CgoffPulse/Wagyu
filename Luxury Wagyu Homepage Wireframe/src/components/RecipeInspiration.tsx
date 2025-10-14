import { ImageWithFallback } from "./figma/ImageWithFallback";

const recipes = [
  {
    id: 1,
    name: "Perfect Wagyu Ribeye",
    description: "Classic preparation highlighting the natural flavors",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: 2,
    name: "Filet Mignon with Truffle Butter",
    description: "Elevated dining experience at home",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=400&fit=crop&crop=center"
  },
  {
    id: 3,
    name: "Wagyu Beef Wellington",
    description: "Show-stopping centerpiece for special occasions",
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=400&fit=crop&crop=center"
  }
];

export function RecipeInspiration() {
  return (
    <section className="py-16 bg-luxury-black">
      <div className="max-w-[1440px] mx-auto px-20">
        <h2 className="text-4xl text-white text-center mb-16 serif">
          Recipe Inspiration
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="group cursor-pointer">
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <ImageWithFallback
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/60" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-2xl text-white mb-2">{recipe.name}</h3>
                  <p className="text-gray-200 mb-4">{recipe.description}</p>
                  <button className="self-start text-luxury-gold hover:text-luxury-gold-light transition-colors underline decoration-luxury-gold underline-offset-4">
                    View Recipe →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}