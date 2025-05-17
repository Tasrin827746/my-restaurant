
'use client';

import { useState } from 'react';

export default function Reservation() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    people: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Reservation submitted!');
  };

  return (
    <div id='reserve' className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold font-serif mb-8 text-center">Reserve a Table</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-amber-50 shadow-md rounded-lg p-8 space-y-6"
      >
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          required
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
        />
        <input
          name="date"
          type="date"
          required
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
        />
        <input
          name="time"
          type="time"
          required
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
        />
        <select
          name="people"
          required
          onChange={handleChange}
          className="w-full border rounded px-4 py-2"
        >
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <option key={num} value={num}>
              {num} {num === 1 ? 'Person' : 'People'}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition"
        >
          Confirm Reservation
        </button>
      </form>
    </div>
  );
}
