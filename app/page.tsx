import Header from "./Header";
import Hero from "./1_homepage/1_Hero";
import GetToKnow from "./1_homepage/2_GetToKnow";
import Welcome from "./1_homepage/3_Welcome";
import Subscribe from "./1_homepage/4_Subscribe";
import About from "./1_homepage/About";
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
