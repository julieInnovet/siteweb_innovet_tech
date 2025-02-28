import { Home, MessageSquare, Newspaper, UsersRound } from "lucide-react";
import { NavLink } from "react-router-dom";

const cards = [
  {
    title: "Accueil",
    icon: Home,
    link: "/",
  },
  {
    title: "À Propos",
    icon: UsersRound,
    link: "/about",
  },
  {
    title: "Contact",
    icon: MessageSquare,
    link: "/contact",
  },
  {
    title: "Blog",
    icon: Newspaper,
    link: "/blog",
  },
];

export default function NotFound() {
  return (
    <section className="grow flex items-center">
      <div className="wrapper space-y-8 lg:space-y-12">
        <div className="text-center max-w-screen-sm mx-auto space-y-4">
          <h1 className="text-primary-400 font-extrabold text-4xl">
            Erreur 404
          </h1>
          <p className="text-secondary-500 font-medium sm:text-2xl">
            Oups ! Cette page n'existe pas.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <NavLink
              key={card.title}
              to={card.link}
              className="bg-white p-6 text-center w-full space-y-4 border border-secondary-200 rounded-xl shadow-soft hover:scale-105"
            >
              <div className="flex items-center justify-center mx-auto size-10 bg-primary-100 rounded-xl shadow-soft lg:size-12">
                <card.icon className="block size-5 text-primary-600 lg:size-6" />
              </div>
              <h3 className="text-secondary-500 font-semibold text-xl mb-2">
                {card.title}
              </h3>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}
