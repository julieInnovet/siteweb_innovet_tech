import { Logo } from "../layout/Logo";
import CtaButtons from "../layout/CtaButtons";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-secondary-800 to-primary-400">
      <div className="wrapper grid lg:gap-8 xl:gap-0 lg:grid-cols-3">
        <div className="mr-auto place-self-center lg:col-span-2">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold text-white tracking-tight leading-none md:text-5xl xl:text-6xl lg:mb-6">
            Révolutionnez votre pratique vétérinaire avec l'IA
          </h1>
          <p className="max-w-2xl mb-6 font-light text-secondary-100 lg:mb-8 md:text-lg lg:text-xl">
            InnoVetTech, la plateforme d'intelligence artificielle conçue par et
            pour les vétérinaires français, vous aide à gagner du temps, à
            améliorer vos soins et à booster votre rentabilité.
          </p>

          <CtaButtons />
        </div>

        <div className="hidden lg:mt-0 lg:flex">
          <Logo className="w-full max-w-72" />
        </div>
      </div>
    </section>
  );
}
