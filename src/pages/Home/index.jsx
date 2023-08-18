import { Hero } from "~/components/Hero";
import { BodySection } from "~/components/BodySection";
import "./styles.css";

export const Home = () => {
  return (
    <div className="Home--container">
      <Hero />
      <BodySection />
    </div>
  );
};
