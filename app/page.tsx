import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Pricing from "./sections/Pricing";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";
// import Testimonials from "./sections/Testimonials";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Services />
      <Pricing />
      <Contact />
      <Navbar />
      {/* <Testimonials /> */}
    </main>
  );
}