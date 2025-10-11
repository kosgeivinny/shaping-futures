import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Programs from "@/components/sections/Programs";
import Events from "@/components/sections/Events";
import Impact from "@/components/sections/Impact";
import Success from "@/components/sections/Success";
import Partners from "@/components/sections/Partners";
import Founder from "@/components/sections/Founder";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Programs />
      <Events />
      <Impact />
      <Success />
      <Partners />
      <Founder />
    </main>
  );
}
