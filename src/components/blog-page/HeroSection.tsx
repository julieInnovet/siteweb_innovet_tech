import hero from "../../assets/images/hero_section_blog.png";
import HeroSectionLayout from "../layout/HeroSectionLayout";

export default function HeroSection() {
  return (
    <HeroSectionLayout
      title="Blog & Actualités"
      description="Découvrez nos derniers articles sur l'innovation vétérinaire, l'intelligence artificielle et les meilleures pratiques pour votre clinique."
      backgroundImage={hero}
    />
  );
}
