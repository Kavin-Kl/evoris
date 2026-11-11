import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Founder from "@/components/Founder";
import Hero from "@/components/Hero";
import Membership from "@/components/Membership";
import Nav from "@/components/Nav";
import Process from "@/components/Process";
import Services from "@/components/Services";
import { Motion } from "@/components/ui";

export default function Home() {
  return (
    <Motion>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Process />
        <Membership />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </Motion>
  );
}
