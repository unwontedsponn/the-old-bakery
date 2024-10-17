import Header from "../Header";
import Footer from "../Footer";
import BreatheHero from "./01_Breathwork-Hero";
import BreatheBreakdown from "./02_Breathwork-Breakdown";
import BreatheWhatIs from "./03_Breathwork-WhatIs";
import BreatheSuitableForMe from "./04_Breathwork-SuitableForMe";
import BreatheMoonbird from "./05_Breathwork-Moonbird";

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
