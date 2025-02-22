import { Heart, Lightbulb, Zap } from "lucide-react";

export default function ValuesSection() {
  return (
    <section>
      <div className="wrapper">
        <div className="title">
          <h2>Les valeurs d'InnoVetTech</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3 pt-5">
          <div className="card">
            <div className="icon">
              <Lightbulb />
            </div>
            <h3>Innovation</h3>
            <p>
              Nous plaçons la technologie au service des vétérinaires pour
              simplifier leur quotidien.
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <Heart />
            </div>
            <h3>Accompagnements</h3>
            <p>
              Un suivi personnalisé et des formations sur mesure pour intégrer
              chaque solution dans vos pratiques.
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <Zap />
            </div>
            <h3>Productivité</h3>
            <p>
              Nous vous fournissons les outils adaptés pour vous redonner du
              temps et améliorer votre rentabilité.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
