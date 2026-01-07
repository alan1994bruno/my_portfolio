import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { Resume } from "@/components/sections/Resume";
import { Skills } from "@/components/sections/Skills";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className={cn("flex", "flex-col")}>
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <Skills />

      <section id="resume">
        <Resume />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
