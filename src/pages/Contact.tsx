import HeroSection from "../components/contact-page/HeroSection";
import FAQSection from "../components/contact-page/FAQSection";
import Separator from "../components/layout/Separator";
import ContactSection from "../components/contact-page/ContactSection";

export default function Contact() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ContactSection />
      <Separator />
      <FAQSection />
    </div>
  );
}
