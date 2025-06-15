
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import ApiShowcase from "../components/ApiShowcase";
import Projects from "../components/Projects";
import CaseStudies from "../components/CaseStudies";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <div className="pt-20">
        <Hero />
        <Skills />
        <ApiShowcase />
        <Projects />
        <CaseStudies />
        <Experience />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
