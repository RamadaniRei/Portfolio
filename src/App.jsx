import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import PortfolioSection from "./components/PortfolioSection";
import SkillSection from "./components/SkillSection";

export const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SkillSection />
      <PortfolioSection />
      <Footer />
      <Contact />
    </>
  );
};

export default App;
