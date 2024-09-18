import Header from "../Header";
import Footer from "../Footer";
import BreatheHero from "./sections/Breathe-Hero";
import BreatheBreakdown from "./sections/Breathe-Breakdown";
import BreatheWhatIs from "./sections/Breathe-WhatIs";
import BreatheSuitableForMe from "./sections/Breathe-SuitableForMe";
import BreatheMoonbird from "./sections/Breathe-Moonbird";

export default function Breathe() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />

      <BreatheHero />
      <BreatheBreakdown />
      <BreatheWhatIs />  
      <BreatheSuitableForMe />    
      <BreatheMoonbird />

      <Footer />
    </main>
  );
}
