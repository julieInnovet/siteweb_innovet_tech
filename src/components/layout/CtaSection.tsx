import CtaButtons from "./CtaButtons";

export default function CtaSection() {
  return (
    <section className="bg-gradient-to-br from-secondary-800 to-primary-400">
      <div className="wrapper">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
          Prêt à transformer votre pratique ?
        </h2>
        <p className="mb-8 font-light text-secondary-100 sm:text-xl">
          Découvrez comment nos solutions peuvent révolutionner votre quotidien.
        </p>
        <CtaButtons />
      </div>
    </section>
  );
}
