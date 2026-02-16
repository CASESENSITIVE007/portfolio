import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
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
