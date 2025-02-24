import hero from "../../assets/images/hero_section_pricing.jpeg";
import HeroSectionLayout from "../layout/HeroSectionLayout";

export default function HeroSection() {
  return (
    <HeroSectionLayout
      title="Nos Tarifs – Solutions IA et Digitalisation pour Vétérinaires"
      description="Découvrez nos formules adaptées à la pratique vétérinaire : de l'accès anticipé aux agents IA jusqu'à la digitalisation sur mesure. Chez InnoVet Tech, nous mettons l'innovation au service de la santé animale et de votre rentabilité."
      backgroundImage={hero}
    />
  );
}
