import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import StarBackground from "./components/ui/StarBackground";
import GlowingOrbs from "./components/ui/GlowingOrbs";

export default function Home() {
  return (
    <>
      <StarBackground />
      <GlowingOrbs />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
      </main>
      <Footer />
    </>
  );
}
