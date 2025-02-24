interface HeroSectionLayoutProps {
  title: string;
  description: string;
  backgroundImage: string;
}

export default function HeroSectionLayout({
  title,
  description,
  backgroundImage,
}: HeroSectionLayoutProps) {
  return (
    <section className="relative bg-gradient-to-br from-secondary-800 to-primary-400">
      <img
        src={backgroundImage}
        alt="Illustration"
        className="absolute inset-0 w-full h-full max-h-full object-cover object-center opacity-20 mix-blend-overlay"
      />
      <div className="relative wrapper">
        <h1 className="max-w-4xl mb-4 text-4xl font-extrabold text-white tracking-tight leading-none md:text-5xl xl:text-6xl lg:mb-6">
          {title}
        </h1>
        <p className="max-w-4xl font-light text-secondary-100 md:text-lg lg:text-xl">
          {description}
        </p>
      </div>
    </section>
  );
}
