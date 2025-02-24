import HeroSection from "../components/about-page/HeroSection";
import TeamSection from "../components/about-page/TeamSection";
import ValuesSection from "../components/about-page/ValuesSection";
import Separator from "../components/layout/Separator";
import VisionSection from "../components/about-page/VisionSection";
import CtaSection from "../components/layout/CtaSection";

export default function About() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <TeamSection />
      <Separator />
      <ValuesSection />
      <Separator />
      <VisionSection />
      <CtaSection />
    </div>
  );
}
