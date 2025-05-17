import { Utensils, HeartHandshake } from "lucide-react";

const Policy = () => {
  return (
    <section className="bg-gray-50 text-black py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 text-center md:text-left">
        {/* Food Policy */}
        <div>
          <h2 className="text-4xl font-extrabold mb-4 font-serif flex items-center justify-center md:justify-start gap-3">
            <Utensils className="w-8 h-8 text-orange-600" />
            Our Food Policy
          </h2>
          <p className="text-lg text-black/90 leading-relaxed">
            Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
            aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
            laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu
            nibh. Nullam mollis. Ut justo. Suspendisse potenti.
          </p>
        </div>

        {/* Core Values */}
        <div>
          <h2 className="text-4xl font-extrabold mb-4 font-serif flex items-center justify-center md:justify-start gap-3">
            <HeartHandshake className="w-8 h-8 text-orange-600" />
            Our Core Values
          </h2>
          <p className="text-lg text-black/90 leading-relaxed">
            Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
            aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
            laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu
            nibh. Nullam mollis. Ut justo. Suspendisse potenti.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Policy;
