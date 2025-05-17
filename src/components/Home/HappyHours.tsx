import Image from "next/image";
import Link from "next/link";

export default function HappyHours() {
  return (
    <section className="relative h-[600px] bg-black text-white flex items-center justify-center text-center">
      {/* Background Image */}
      <Image
        src="/happy.jpeg" 
        alt="Happy Hour Background"
        fill
        className="object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 px-4">
        <div className="flex items-center justify-center mb-4">
          <hr className="w-16 border-gray-300 mr-4" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8h16M4 16h16"
            />
          </svg>
          <hr className="w-16 border-gray-300 ml-4" />
        </div>
        <p className="text-lg mb-2">Enjoy 50% Off on All Drinks</p>
        <h2 className="text-4xl font-bold text-primary mb-4">Happy Hours</h2>
        <p className="text-sm mb-8">Every Thursday, 4PM – 7PM</p>
        <div>
            <img src="/divider.png" alt="" className="h-20 mb-4"/>
        </div>
       <Link href="/reservation">
  <button className="bg-primary text-white px-6 py-3 font-semibold rounded-full hover:bg-orange-700 transition">
    Reserve a Table
  </button>
</Link>

      </div>
    </section>
  );
}
