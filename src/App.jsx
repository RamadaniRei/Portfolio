import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import PortfolioSection from "./components/PortfolioSection";
import SkillSection from "./components/SkillSection";

export const App = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <SkillSection />
      <PortfolioSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
