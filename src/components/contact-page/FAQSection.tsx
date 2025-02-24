import FAQCard from "../layout/FAQCard";

const faqs = [
  {
    question: "Comment fonctionne la démonstration ?",
    answer:
      "Nous organisons une session en visioconférence où nous vous présentons nos solutions adaptées à vos besoins. La démo dure environ 45 minutes et inclut une période de questions.",
  },
  {
    question: "Combien de temps dure l'installation ?",
    answer:
      "L'installation de nos solutions est rapide et peut être effectuée en moins de 48 heures. Notre équipe vous accompagne tout au long du processus.",
  },
  {
    question: "Proposez-vous une formation ?",
    answer:
      "Oui, nous proposons une formation complète à votre équipe incluse dans nos forfaits. Des sessions de formation supplémentaires sont disponibles sur demande.",
  },
];

export default function FAQSection() {
  return (
    <section>
      <div className="wrapper">
        <div className="title">
          <h2>Questions fréquentes</h2>
          <p>
            Retrouvez les réponses aux questions les plus courantes sur nos
            solutions.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {faqs.map((faq) => (
            <FAQCard key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
