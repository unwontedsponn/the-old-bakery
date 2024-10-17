import Header from "../Header";
import Footer from "../Footer";
import BreatheHero from "./1_Breathwork-Hero";
import BreatheBreakdown from "./2_Breathwork-Breakdown";
import BreatheWhatIs from "./3_Breathwork-WhatIs";
import BreatheSuitableForMe from "./4_Breathwork-SuitableForMe";
import BreatheMoonbird from "./5_Breathwork-Moonbird";

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
