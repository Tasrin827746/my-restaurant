"use client";
import { useState } from "react";

type Rating = {
  name: string;
  stars: number;
  comment: string;
};

const Ratings = () => {
  const [ratings, setRatings] = useState<Rating[]>([]);
  const [name, setName] = useState("");
  const [stars, setStars] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || stars === 0 || !comment) return;

    setRatings([{ name, stars, comment }, ...ratings]);
    setName("");
    setStars(0);
    setComment("");
  };

  const average =
    ratings.length > 0
      ? (ratings.reduce((sum, r) => sum + r.stars, 0) / ratings.length).toFixed(1)
      : "0";

  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left: Submit Rating */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-900 font-serif">Submit Your Rating</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              required
            />
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  type="button"
                  key={num}
                  onClick={() => setStars(num)}
                  className={`text-2xl ${
                    stars >= num ? "text-yellow-400" : "text-gray-400"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
            <textarea
              rows={4}
              placeholder="Your comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition"
            >
              Submit Rating
            </button>
          </form>
        </div>

        {/* Right: Display Ratings */}
        <div>
          <h2 className="text-3xl font-bold mb-2 text-gray-900 font-serif">Customer Reviews</h2>
          <p className="mb-4 text-gray-600 text-lg">Average Rating: {average} ★</p>

          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
            {ratings.length === 0 ? (
              <p className="text-gray-500">No ratings yet.</p>
            ) : (
              ratings.map((r, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-4 shadow-sm border border-gray-200"
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-gray-800">{r.name}</p>
                    <div className="text-yellow-400 text-lg">
                      {"★".repeat(r.stars)}
                      {"☆".repeat(5 - r.stars)}
                    </div>
                  </div>
                  <p className="text-gray-700">{r.comment}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ratings;
