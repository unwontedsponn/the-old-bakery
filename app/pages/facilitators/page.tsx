import Header from "../../Header";
import Footer from "../../Footer";
import Link from "next/link";
import { facilitators } from "./facilitatorsData";

export default function Facilitators() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <Header />

      <div className="max-w-6xl mx-auto py-12 px-4 lg:px-8">
        <h1 className="text-5xl text-center text-pastel-turquoise mb-8">
          Our Facilitators
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilitators.map((facilitator, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <img
                src={facilitator.image}
                alt={`${facilitator.name}`}
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h2 className="text-2xl font-semibold text-montserrat text-pastel-turquoise">
                {facilitator.name}
              </h2>
              <p className="text-gray-700 text-md mt-2">{facilitator.bio}</p>
            </div>
          ))}
        </div>

        {/* Link to Contact Page */}
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-700 mb-4">Want to become a Herts Breathwork Facilitator?</p>
          <Link 
            href="/pages/contact" 
            className="inline-block py-3 px-6 bg-pastel-turquoise text-white font-bold rounded-md hover:bg-coral-blush transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
