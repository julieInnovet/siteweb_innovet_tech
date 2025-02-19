import { NavLink } from "react-router-dom";
import Logo from "./Logo";

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
  return (
    <header>
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-soft border-secondary-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo with Text */}
          <NavLink
            to="/"
            className="text-secondary-900 font-semibold text-2xl flex items-center gap-2"
          >
            <Logo />
            Innovet Tech
          </NavLink>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center lg:order-2">
            <NavLink to="/contact" className="cta">
              Demander une Démo
            </NavLink>

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-secondary-500 rounded-lg lg:hidden hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-secondary-200"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Ouvrir le menu</span>
              <svg
                className="w-6 h-6"
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
                className="hidden w-6 h-6"
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
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {navigation.map((item) => (
                <li key={item.title}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      isActive
                        ? "block py-2 pr-4 pl-3 text-sm font-semibold text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-400 lg:p-0"
                        : "block py-2 pr-4 pl-3 text-sm font-semibold text-secondary-700 border-b border-secondary-100 hover:bg-secondary-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-400 lg:p-0"
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
