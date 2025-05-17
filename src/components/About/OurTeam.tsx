import Image from 'next/image';

const chefs = [
  { name: 'Charles Davis', role: 'Head Chef', image: '/team1.jpg' },
  { name: 'Vincent Green', role: 'Sous Chef', image: '/team2.webp' },
  { name: 'Samuel Sims', role: 'Restaurant Manager', image: '/team1.jpg' },
  { name: 'David Butler', role: 'Pasta Expert', image: '/team2.webp' },
  {
    name: 'Looking For Management Interns',
    role: '',
    image: '/intern.jpg',
    isIntern: true,
  },
];

const amenities = [
  { icon: '📶', label: 'Free WiFi' },
  { icon: '🚬', label: 'Smoking Zone' },
  { icon: '🎵', label: 'Live Music' },
  { icon: '🅿️', label: 'Parking' },
];

const OurChefs = () => {
  return (
    <section className="bg-[#23211e]">

        <div className="bg-[#fdf6f1] py-16 text-center">
        <h3 className="text-3xl font-serif font-semibold text-gray-900 mb-6">
          Restaurant Amenities
        </h3>
        <div className="w-16 h-1 mx-auto mb-6 bg-orange-500" />
        <div className="flex flex-wrap justify-center gap-10 text-sm font-medium text-gray-700">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-center gap-2 text-orange-600">
              <span className="text-xl">{amenity.icon}</span>
              <span>{amenity.label}</span>
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-4xl text-white font-serif font-bold text-center mb-4 mt-10">Our Chefs</h2>
      <div className="w-24 h-1 bg-orange-500 mx-auto mb-10" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 px-4 max-w-7xl mx-auto">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className="relative overflow-hidden border-2 border-orange-500 rounded-md shadow-md group h-[320px] mb-10"
          >
            <Image
              src={chef.image}
              alt={chef.name}
              width={400}
              height={400}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-end p-4">
              <h3 className="text-white text-lg font-semibold text-center">
                {chef.name}
              </h3>
              {chef.role && (
                <p className="text-sm text-orange-300">{chef.role}</p>
              )}
              {chef.isIntern && (
                <button className="mt-2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm hover:bg-orange-600">
                  ➜ Apply Today!
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurChefs;
