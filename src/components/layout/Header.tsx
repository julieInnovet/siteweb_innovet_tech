import { NavLink } from "react-router-dom";
import { LogoWithName } from "./Logo";
import { ChevronRight } from "lucide-react";
import { demoRequestUrl } from "../../constants/contact";
import useSession from "../../hooks/useSession";

interface NavItem {
  title: string;
  href: string;
}

const navigation: NavItem[] = [
  { title: "Accueil", href: "/" },
  { title: "Nos Solutions", href: "/solutions" },
  { title: "Tarifs", href: "/pricing" },
  { title: "Blog", href: "/blog" },
  { title: "À Propos", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export default function Header() {
  const { session, signOut } = useSession();

  return (
    <header>
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-soft border-secondary-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center wrapper">
          <LogoWithName />

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-2 lg:order-2">
            {session ? (
              <button className="cta" onClick={signOut}>
                Se déconnecter
              </button>
            ) : (
              <a href={demoRequestUrl} className="cta">
                Demander une Démo <ChevronRight className="size-5" />
              </a>
            )}

            <button
              data-collapse-toggle="mobile-menu"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-secondary-500 rounded-lg lg:hidden hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-secondary-200"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Ouvrir le menu</span>
              <svg
                className="size-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden size-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {navigation.map((item) => (
                <li key={item.title}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      isActive ? "menu-item active" : "menu-item inactive"
                    }
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
