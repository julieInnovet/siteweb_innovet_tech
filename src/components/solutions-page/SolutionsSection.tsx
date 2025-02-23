import { Stethoscope } from "lucide-react";
import { solutions } from "../../constants/solutions";

export default function SolutionsSection() {
  return (
    <section>
      <div className="wrapper">
        <div className="flex flex-col gap-8 lg:gap-20">
          {solutions.map((solution) => (
            <article
              key={solution.id}
              id={solution.id}
              className="solution long-solution"
            >
              <div className="solution-content">
                <div className="space-y-4">
                  <div className="solution-title">
                    {solution.icon}
                    <h2>{solution.title}</h2>
                  </div>
                  <p>{solution.description}</p>
                </div>

                <div className="space-y-4">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="flex size-10 items-center justify-center rounded-xl bg-primary-100 text-primary-600 lg:size-12">
                          {feature.icon}
                        </div>
                      </div>
                      <div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <h3>Les avantages</h3>
                  <ul>
                    {solution.benefits.map((benefit) => (
                      <li key={benefit}>
                        <Stethoscope />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <img src={solution.image} alt={solution.title} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
