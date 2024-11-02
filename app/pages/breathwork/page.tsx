import Header from "../../Header";
import Footer from "../../Footer";
import ScientificProof from "./ScientificProof";
import Benefits from "./Benefits";
import BreatheWhatIs from "./Breathwork-WhatIs";
import SuitableForMe from "./SuitableForMe";
import Accreditations from "./Accreditations";
import BreatheMoonbird from "./Breathwork-Moonbird";

export default function Breathe() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />

      <BreatheWhatIs />  
      <Benefits />
      <ScientificProof />          
      <SuitableForMe />    
      <Accreditations />
      <BreatheMoonbird />

      <Footer />
    </main>
  );
}
