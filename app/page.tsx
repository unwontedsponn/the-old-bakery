import Header from "./Header";
import Hero from "./01_homepage/01_Hero";
import GetToKnow from "./01_homepage/02_GetToKnow";
import Welcome from "./01_homepage/03_Welcome";
import Subscribe from "./01_homepage/04_Subscribe";
import Footer from "./Footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />      

      <Hero />
      <GetToKnow />
      <Welcome />      
      <Subscribe />
      
      <Footer />
    </main>
  );
}
