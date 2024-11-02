"use client";
import Header from "../../Header";
import Footer from "../../Footer";
import { useState } from "react";
import { facilitators } from "../facilitators/facilitatorsData";

export default function Book() {
  const [selectedFacilitator, setSelectedFacilitator] = useState(facilitators[0].name);
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Booking submitted", { selectedFacilitator, date, name, email });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <Header />

      <div className="max-w-4xl mx-auto py-12 px-4 lg:px-8">
        <h1 className="text-5xl text-center text-pastel-turquoise mb-8">
          Book a Session
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-8 rounded-lg shadow-lg space-y-6"
        >
          <div>
            <label
              htmlFor="facilitator"
              className="block text-md font-semibold text-gray-700"
            >
              Select Facilitator
            </label>
            <select
              id="facilitator"
              value={selectedFacilitator}
              onChange={(e) => setSelectedFacilitator(e.target.value)}
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-pastel-turquoise focus:ring focus:ring-pastel-turquoise"
            >
              {facilitators.map((facilitator, index) => (
                <option key={index} value={facilitator.name}>
                  {facilitator.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="date"
              className="block text-md font-semibold text-gray-700"
            >
              Select Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-pastel-turquoise focus:ring focus:ring-pastel-turquoise"
              required
            />
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-md font-semibold text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-pastel-turquoise focus:ring focus:ring-pastel-turquoise"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-md font-semibold text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-pastel-turquoise focus:ring focus:ring-pastel-turquoise"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-pastel-turquoise text-white font-bold rounded-md hover:bg-coral-blush transition-colors duration-200"
          >
            Book Now
          </button>
        </form>
      </div>

      <Footer />
    </main>
  );
}
