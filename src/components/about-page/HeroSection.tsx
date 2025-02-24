import hero from "../../assets/images/heros_section_about.jpg";
import HeroSectionLayout from "../layout/HeroSectionLayout";

export default function HeroSection() {
  return (
    <HeroSectionLayout
      title="Découvrez qui sont les héros de notre équipe !"
      description="Une équipe passionnée qui révolutionne la pratique vétérinaire grâce à l'intelligence artificielle et l'innovation numérique."
      backgroundImage={hero}
    />
  );
}
