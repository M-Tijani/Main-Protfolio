import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
export default function Home() {
  return (
    <>
      <div className="w-full max-w-[285px] sm:max-w-[400px] md:max-w-[650px] duration-200 my-[100px] mx-auto flex flex-col justify-center text-start gap-3">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
