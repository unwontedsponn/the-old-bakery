import Header from "./Header";
import Hero from "./pages/homepage/Hero";
import GetToKnow from "./pages/homepage/GetToKnow";
import Welcome from "./pages/homepage/Welcome";
import Subscribe from "./pages/homepage/Subscribe";
import WhyBreathwork from "./pages/homepage/WhyBreathwork";
import GetInvolved from "./pages/homepage/GetInvolved";
import Footer from "./Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />      

      <Hero />      
      <Welcome />     
      <WhyBreathwork />
      <GetToKnow />
      <GetInvolved />
      <Subscribe />
      
      <Footer />
    </main>
  );
}
