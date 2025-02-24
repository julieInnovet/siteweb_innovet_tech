import hero from "../../assets/images/heros_section_contact.jpg";
import HeroSectionLayout from "../layout/HeroSectionLayout";

export default function HeroSection() {
  return (
    <HeroSectionLayout
      title="Contactez-nous"
      description="Vous souhaitez en savoir plus sur nos solutions d'IA pour votre clinique ? Notre équipe est là pour répondre à toutes vos questions."
      backgroundImage={hero}
    />
  );
}
