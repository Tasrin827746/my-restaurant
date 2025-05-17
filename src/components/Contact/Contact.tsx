import { FC } from "react";

const Contact: FC = () => {
  return (
    <section className="bg-gray-100 py-16 px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Form */}
        <div className="w-full md:w-1/2 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Contact No."
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Message"
            rows={6}
            className="w-full p-3 border border-gray-300 rounded"
          />
          <button className="bg-amber-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-600 transition">
            Send
          </button>
        </div>

        {/* Map */}
        <div className="w-full md:w-1/2 h-[450px] rounded overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.0486471143336!2d-77.474912584259!3d37.54715747980253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b1119b25ff6e1f%3A0xc0876bb384f0e4e0!2s2908%20W%20Cary%20St%2C%20Richmond%2C%20VA%2023221%2C%20USA!5e0!3m2!1sen!2sin!4v1674583993886!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
