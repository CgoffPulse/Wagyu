import smithFamilyGateImage from "../../assets/Smith_Family_Gate.jpg";

export function RanchVideoSection() {
  return (
    <section className="py-20">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative h-[500px]">
          <img 
            src={smithFamilyGateImage} 
            alt="Smith Family at the Ranch"
            className="rounded-2xl w-full h-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-4xl serif mb-6">Built from the Ground Up</h2>
          <p className="text-lg text-white/80 mb-6 leading-relaxed">
            More than 20 years ago, we set out to build a cattle operation from scratch—with no family land, no inherited herd, and no safety net. We learned every lesson the hard way, through grit, long hours, and a relentless drive to do things the right way.
          </p>
          <p className="text-lg text-white/80 mb-6 leading-relaxed">
            As our ranch grew, so did our vision. We wanted to create something that connected our work directly to the families and communities we love—something that reflected the heart of the Ozarks. That's how Ozark Natural Steak Co. was born.
          </p>
          <p className="text-lg text-white/80 leading-relaxed">
            Today, the well-being of our livestock remains at the center of everything we do. We raise our cattle with superior genetics, clean feed, and no added hormones. Our animals are handled humanely and raised in open pastures—because great beef starts with respect for the land and livestock. What began as a dream built on hard work has grown into a promise: premium American Wagyu beef that's as honest as the people who raise it.
          </p>
        </div>
      </div>
    </section>
  );
}