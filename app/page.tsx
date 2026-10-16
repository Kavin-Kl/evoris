import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Founder from "@/components/Founder";
import Hero from "@/components/Hero";
import Membership from "@/components/Membership";
import Nav from "@/components/Nav";
import Preloader from "@/components/Preloader";
import Process from "@/components/Process";
import SmoothScroll from "@/components/SmoothScroll";
import Spheres from "@/components/Spheres";

export default function Home() {
  return (
    <SmoothScroll>
      <Preloader />
      <Nav />
      <main>
        <Hero />
        <Founder />
        <About />
        <Process />
        <Spheres />
        <Membership />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
