import { Award, Stethoscope, Target } from "lucide-react";

const visions = [
  "Réinventer la pratique avec des solutions numériques sur mesure",
  "Décupler l'efficacité des processus et améliorer la qualité des soins",
  "Renforcer la satisfaction client grâce à des outils accessibles et inclusifs",
];

const objectives = [
  "Simplifier la gestion administrative",
  "Optimiser la prise en charge des patients grâce à l'IA",
  "Réduire la charge mentale des vétérinaires",
];

export default function VisionSection() {
  return (
    <section>
      <div className="wrapper">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start">
          <div className="vision">
            <div className="vision-title">
              <Target />
              <h2>Notre vision</h2>
            </div>
            <p>
              En plaçant l'innovation et l'humain au cœur de chaque projet, nous
              souhaitons créer un futur où chaque praticien dispose de solutions
              performantes pour exercer sereinement et avec un impact maximal.
            </p>
            <ul>
              {visions.map((item, idx) => (
                <li key={idx}>
                  <Stethoscope />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="vision">
            <div className="vision-title">
              <Award />
              <h2>Notre objectif</h2>
            </div>
            <p>
              Notre priorité est que chaque vétérinaire puisse se consacrer
              pleinement aux soins et au bien-être animal.
            </p>
            <ul>
              {objectives.map((item, idx) => (
                <li key={idx}>
                  <Stethoscope />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
