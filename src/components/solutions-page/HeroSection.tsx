import hero from "../../assets/images/hero_section_solutions.png";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-secondary-800 to-primary-400">
      <img
        src={hero}
        alt="Illustration"
        className="absolute inset-0 w-full h-full max-h-full object-cover object-center opacity-20 mix-blend-overlay"
      />
      <div className="wrapper">
        <h1 className="max-w-4xl mb-4 text-4xl font-extrabold text-white tracking-tight leading-none md:text-5xl xl:text-6xl lg:mb-6">
          Nos solutions innovantes pour transformer votre quotidien
        </h1>
        <p className="max-w-4xl font-light text-secondary-100 md:text-lg lg:text-xl">
          Chez InnoVetTech, nous plaçons l'innovation technologique au service
          des vétérinaires. Nous vous aidons ainsi à assurer le bien-être des
          animaux tout en optimisant votre gestion quotidienne.
        </p>
      </div>
    </section>
  );
}
