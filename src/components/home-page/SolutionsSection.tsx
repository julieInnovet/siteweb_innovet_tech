import { ChevronRight, Stethoscope } from "lucide-react";
import { solutions } from "../../constants/solutions";
import { NavLink } from "react-router-dom";

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
          {solutions.map((solution) => (
            <div key={solution.id} className="solution short-solution">
              <div className="solution-content">
                <div className="solution-title">
                  {solution.icon}
                  <h3>{solution.title}</h3>
                </div>
                <p>{solution.description}</p>
                <ul>
                  {solution.features.map((feature, idx) => (
                    <li key={idx}>
                      <Stethoscope />
                      <span>{feature.title}</span>
                    </li>
                  ))}
                </ul>
                <NavLink to={`/solutions#!${solution.id}`} className="cta">
                  En savoir plus
                  <ChevronRight />
                </NavLink>
              </div>

              <img src={solution.image} alt={solution.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
