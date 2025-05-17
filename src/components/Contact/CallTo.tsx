import { FC } from "react";

const CallTo: FC = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 text-center text-gray-800">
      {/* Header */}
      <h2 className="text-4xl font-bold font-serif mb-2">Are You Hungry?</h2>
      <p className="text-lg mb-4">Come, Dine With Us!</p>
      <p className="max-w-2xl mx-auto text-sm text-gray-600 mb-10">
        Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.
      </p>

      {/* Contact Details */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
        <div className="md:border-r border-amber-500 pr-8">
          <h3 className="text-xl font-bold font-serif mb-2">For Restaurant</h3>
          <p className="text-xl tracking-wider">123 456 7890</p>
        </div>
        <div className="md:pl-8">
          <h3 className="text-xl font-bold font-serif mb-2">Private Dinning</h3>
          <p className="text-xl tracking-wider">098 765 4321</p>
        </div>
      </div>

      {/* Decorative Divider */}
      <div className="flex justify-center mb-10">
        <img src="/divider.png" alt="divider" className="h-20" />
      </div>

      {/* Feedback */}
      <h3 className="text-2xl font-bold font-serif mb-2">Have Feedback?</h3>
      <p className="max-w-xl mx-auto text-sm text-gray-600">
        Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.
      </p>
    </section>
  );
};

export default CallTo;
