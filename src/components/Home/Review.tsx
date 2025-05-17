
const testimonials = [
  {
    text: "Most amazing I ever had!!",
    name: "Bryan G",
    image: "/pp1.jpg",
  },
  {
    text: "Amazing taste, and juicy steaks!! Best ever!!",
    name: "Laura Petracio",
    image: "/pp2.jpg",
  },
  {
    text: "I always visit here, and they always surprise me.",
    name: "Harold Z",
    image: "/pp3.jpg",
  },
  {
    text: "A must visit for every steak lover",
    name: "Laura Petracio",
    image: "/pp4.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[url('/images/bg-pattern.png')] bg-cover bg-center py-20 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        They All Love Our Food
      </h2>
      <div className="w-24 mx-auto mb-6 border-t-4 border-primary"></div>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Consectetur adipiscing elit elit tellus, luctus nec ullamcorper mattis,
        pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto px-4">
        {testimonials.map((t, index) => (
          <div key={index} className="flex flex-col items-center text-gray-800">
            <p className="text-lg font-medium mb-4">{t.text}</p>
           <img
  src={t.image}
  alt={t.name}
  className="rounded-full object-cover w-16 h-16"
/>
     <p className="mt-2 font-semibold text-sm">– {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
