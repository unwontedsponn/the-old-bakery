import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Welcome from "./sections/Welcome";
import About from "./sections/About";
import Quote from "./sections/Quote";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />      
      <Hero />
      <Welcome />
      <About />
      <Quote />
    </main>
  );
}
