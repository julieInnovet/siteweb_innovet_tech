import FAQCard from "../layout/FAQCard";

const faqs = [
  {
    question: "Comment se passe l'installation ?",
    answer:
      "L'installation est simple et guidée. Notre équipe vous accompagne pas à pas dans la mise en place des solutions, avec une formation complète pour vous et votre équipe.",
  },
  {
    question: "Y a-t-il un engagement ?",
    answer:
      "Nos formules sont sans engagement. Vous pouvez ajuster ou arrêter votre abonnement à tout moment, avec un préavis d'un mois.",
  },
  {
    question: "Combien de temps dure la formation ?",
    answer:
      "La formation initiale dure environ 2 heures. Des sessions de perfectionnement sont ensuite proposées selon vos besoins.",
  },
  {
    question: "Les mises à jour sont-elles incluses ?",
    answer:
      "Oui, toutes les mises à jour sont automatiquement incluses dans votre abonnement, sans frais supplémentaires.",
  },
];

export default function FAQSection() {
  return (
    <section>
      <div className="wrapper">
        <div className="title">
          <h2>Questions fréquentes</h2>
        </div>

        <div className="grid pt-8 text-left md:gap-16 md:grid-cols-2">
          <div>
            {faqs.slice(0, faqs.length / 2).map((faq) => (
              <FAQCard key={faq.question} {...faq} />
            ))}
          </div>

          <div>
            {faqs.slice(faqs.length / 2).map((faq) => (
              <FAQCard key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
