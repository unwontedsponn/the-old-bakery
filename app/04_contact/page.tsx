import Header from "../Header";
import Footer from "../Footer";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <Header />

      <section className="w-[85vw] flex flex-col lg:flex-row items-center justify-center lg:justify-between py-16 lg:py-24 space-y-8 lg:space-y-0">
        {/* Contact Information */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
          <h1 className="text-3xl lg:text-5xl text-pastel-turquoise">Get in Touch</h1>
          <p className="text-lg lg:text-xl text-gray-700">
            We'd love to hear from you! Fill out the form to get in touch.
          </p>
          <div className="text-md lg:text-lg space-y-2 text-gray-600">            
            <p>Location: Hitchin, Letchworth, and surrounding areas</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-1/2 bg-pastel-turquoise p-8 rounded-2xl shadow-lg">
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name*"
              className="p-4 rounded border border-white text-black"
              required
            />
            <input
              type="email"
              placeholder="Your Email*"
              className="p-4 rounded border border-white text-black"
              required
            />
            <textarea
              placeholder="Your Message*"
              rows={6}
              className="p-4 rounded border border-white text-black"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-white text-pastel-turquoise py-3 px-6 rounded hover:bg-coral-blush hover:text-white transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="w-full h-[400px] lg:h-[500px] overflow-hidden">
        <iframe
          className="w-full h-full rounded-2xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6258.374012003031!2d-0.2833!3d51.9476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48763398b4e0b013%3A0x31c5a2f4c28a4!2sHitchin%2C%20UK!5e0!3m2!1sen!2suk!4v1602628196735"
          frameBorder="0"
          allowFullScreen={true}
          aria-hidden={false}
          tabIndex={0}
        ></iframe>
      </section>

      <Footer />
    </main>
  );
}
