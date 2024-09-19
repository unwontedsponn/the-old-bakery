import Header from "./Header";
import Hero from "./homepage-sections/Hero";
import GetToKnow from "./homepage-sections/GetToKnow";
import Welcome from "./homepage-sections/Welcome";
import About from "./homepage-sections/About";
import Subscribe from "./homepage-sections/Subscribe";
import Footer from "./Footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />      

      <Hero />
      <GetToKnow />
      <Welcome />
      {/* <About />     */}
      <Subscribe />
      
      <Footer />
    </main>
  );
}
