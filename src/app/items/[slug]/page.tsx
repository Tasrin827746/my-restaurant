import { topItems } from "@/data/items";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export default function ItemPage({ params }: Props) {
  const item = topItems.find((item) => item.slug === params.slug);

  if (!item) return notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mt-24">
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold font-serif mb-4">{item.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{item.desc}</p>

          <div className="w-12 h-1 bg-orange-500 my-4 mx-auto md:mx-0 rounded-full" />

          <span className="text-2xl font-semibold text-black block mb-6">
            {item.price}
          </span>

         <Link href="/reservation">
  <button className="bg-primary text-white px-6 py-3 font-semibold rounded-full hover:bg-orange-700 transition">
    Reserve a Table
  </button>
</Link>

        </div>
      </div>
    </div>
  );
}
