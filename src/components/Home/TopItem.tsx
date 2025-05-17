import Link from "next/link";
import { topItems } from "@/data/items";

const TopItems = () => {
  return (
    <section className="relative py-20 px-4 bg-white">
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-serif font-bold mb-4 text-gray-900">
          Our Top Items
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          Quality Ingredients, Tasty Meals. Enjoy our curated dishes made with love and authenticity.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="absolute -inset-x-6 -inset-y-6 z-0 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <img src="/menu.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
         {topItems.map((item) => (
  <Link href={`/items/${item.slug}`} key={item.slug}>
    <div className="bg-white shadow-md rounded-md overflow-hidden cursor-pointer flex flex-col h-[380px]">
      {/* Fixed image height */}
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover"
      />
      {/* Content box */}
      <div className="flex flex-col justify-between p-4 text-center flex-grow">
        <div>
          <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
          <p className="text-gray-500 text-sm line-clamp-2">{item.desc}</p>

          {/* Orange divider line */}
          <div className="w-12 h-1 bg-orange-500 mx-auto mt-3 mb-1 rounded-full" />
        </div>
        <p className="text-lg font-medium text-gray-800 mt-4">{item.price}</p>
      </div>
    </div>
  </Link>
))}

        </div>
      </div>

      <div className="text-center mt-12 relative z-10">
       <Link href="/menu#menu">
  <button className="bg-primary font-semibold text-black hover:text-white px-6 py-3 rounded-full hover:bg-orange-700 transition duration-300">
    ➜ Discover Entire Menu
  </button>
</Link>

      </div>
    </section>
  );
};

export default TopItems;
