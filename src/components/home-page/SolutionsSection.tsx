import { Bot, Share2, Sparkles, Stethoscope } from "lucide-react";
import agents_ia from "../../assets/images/agents_ia.png";
import collaborative from "../../assets/images/collaborative.jpeg";
import digital from "../../assets/images/digital.jpeg";

export default function SolutionsSection() {
  return (
    <section>
      <div className="wrapper">
        <div className="title">
          <h2>
            Nos solutions s'adaptent à vos besoins pour améliorer votre
            productivité
          </h2>
        </div>

        <div className="flex flex-col gap-8 lg:gap-20">
          <div className="solution">
            <div className="solution-content">
              <div className="solution-title">
                <Bot />
                <h3>Agents IA – Assistants intelligents</h3>
              </div>
              <p>
                Offrez-vous des assistants IA dédiés à l'optimisation des tâches
                vétérinaires.
              </p>
              <ul>
                <li>
                  <Stethoscope />
                  <span>Rédaction de rapports, de mails et de factures</span>
                </li>
                <li>
                  <Stethoscope />
                  <span>Gestion des publications sur les réseaux sociaux</span>
                </li>
                <li>
                  <Stethoscope />
                  <span>Aide au diagnostic</span>
                </li>
              </ul>
            </div>

            <img src={agents_ia} alt="Agents IA" />
          </div>

          <div className="solution">
            <div className="solution-content">
              <div className="solution-title">
                <Share2 />
                <h3>Plateforme Collaborative</h3>
              </div>
              <p>
                Profitez d'une interface commune pour mutualiser les coûts et
                partager vos assistants IA personnalisés ainsi que des outils
                pensés pour répondre aux besoins communs des vétérinaires.
              </p>
              <ul>
                <li>
                  <Stethoscope />
                  <span>Partage d'assistants IA</span>
                </li>
                <li>
                  <Stethoscope />
                  <span>Mutualisation des coûts</span>
                </li>
                <li>
                  <Stethoscope />
                  <span>Outils collaboratifs</span>
                </li>
              </ul>
            </div>

            <img src={collaborative} alt="Plateforme collaborative" />
          </div>

          <div className="solution">
            <div className="solution-content">
              <div className="solution-title">
                <Sparkles />
                <h3>
                  Digitalisation sur Mesure & Automatisation Personnalisée
                </h3>
              </div>
              <p>
                Optimisez vos processus avec des applications dédiées et des
                automatisations adaptées à votre pratique. Vous gagnez en
                efficacité et en sérénité.
              </p>
              <ul>
                <li>
                  <Stethoscope />
                  <span>Applications sur mesure</span>
                </li>
                <li>
                  <Stethoscope />
                  <span>Automatisation des tâches</span>
                </li>
                <li>
                  <Stethoscope />
                  <span>Intégration fluide</span>
                </li>
              </ul>
            </div>

            <img src={digital} alt="Digitalisation sur mesure" />
          </div>
        </div>
      </div>
    </section>
  );
}
