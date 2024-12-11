import Header from "./Header";
import Hero from "./pages/homepage/Hero";
import GetToKnow from "./pages/homepage/GetToKnow";
import TextSection1 from "./pages/homepage/TextSection1";
import BenefitsSection from "./pages/homepage/BenefitsSection";
import TextSection2 from "./pages/homepage/TextSection2";
import Subscribe from "./pages/homepage/Subscribe";
import TextSection3 from "./pages/homepage/TextSection3";
import TextSection4 from "./pages/homepage/TextSection4";
import Footer from "./Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Header />      

      <Hero />      
      <TextSection1 />        
      <TextSection2 />
      {/* <GetToKnow /> */}
      <BenefitsSection />
      <TextSection3 />
      <TextSection4 />
      <Subscribe />
      
      <Footer />
    </main>
  );
}
