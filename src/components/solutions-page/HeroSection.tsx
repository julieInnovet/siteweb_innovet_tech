import hero from "../../assets/images/hero_section_solutions.png";
import HeroSectionLayout from "../layout/HeroSectionLayout";

export default function HeroSection() {
  return (
    <HeroSectionLayout
      title="Nos solutions innovantes pour transformer votre quotidien"
      description="Chez InnoVetTech, nous plaçons l'innovation technologique au service des vétérinaires. Nous vous aidons ainsi à assurer le bien-être des animaux tout en optimisant votre gestion quotidienne."
      backgroundImage={hero}
    />
  );
}
