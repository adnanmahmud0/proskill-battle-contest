import Contest from "../compunent/home/TopContest";
import Count from "../compunent/home/Count";
import HeroSection from "../compunent/home/HeroSection";
import Newsletter from "../compunent/home/Newsletter";

// src/pages/Home.tsx
const Home: React.FC = () => {
  return <h1>
    <HeroSection />
    <Count />
    <Contest />
    <Newsletter />
  </h1>;
};

export default Home;
