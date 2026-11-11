import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Founder from "@/components/Founder";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Membership from "@/components/Membership";
import Nav from "@/components/Nav";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Statement from "@/components/Statement";
import { SareeBand } from "@/components/Texture";
import { Motion } from "@/components/ui";

export default function Home() {
  return (
    <Motion>
      <Nav />
      <main>
        <Hero />
        <SareeBand />
        <Statement />
        <Journey />
        <Services />
        <Process />
        <Membership />
        <SareeBand reverse />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </Motion>
  );
}
