import Card, { CardProps } from "./Card";

interface CardsSectionLayoutProps {
  cards: CardProps[];
  title: string;
  description?: string;
  mdCols?: number;
  lgCols?: number;
}

export default function CardsSectionLayout({
  cards,
  title,
  description,
  mdCols = -1,
  lgCols = -1,
}: CardsSectionLayoutProps) {
  return (
    <section>
      <div className="wrapper">
        <div className="title">
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>

        <div
          className={
            "grid gap-8 pt-5" +
            (mdCols > 0 ? ` md:grid-cols-${mdCols}` : "") +
            (lgCols > 0 ? ` lg:grid-cols-${lgCols}` : "")
          }
        >
          {cards.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
