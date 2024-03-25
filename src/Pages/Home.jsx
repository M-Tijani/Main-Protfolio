// Components
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
export default function Home() {
  return (
    <>
      <div className="w-full max-w-[285px] sm:max-w-[400px] md:max-w-[650px] lg:max-w-[900px] 2xl:max-w-[1200px] duration-200 my-[100px] mx-auto flex flex-col justify-center text-start gap-3">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
