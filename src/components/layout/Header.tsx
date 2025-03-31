import { Logo } from "./Logo";
import { ChevronRight } from "lucide-react";
import { demoRequestUrl } from "../../constants/contact";
import useSession from "../../hooks/useSession";
import {
  createTheme,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

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

const theme = createTheme({
  navbar: {
    root: {
      base: "fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-soft border-secondary-200 px-4 lg:px-6 py-2.5",
      inner: { base: "flex flex-wrap justify-between items-center wrapper" },
    },
    brand: {
      base: "text-secondary-900 font-semibold text-2xl flex items-center gap-2",
    },
    collapse: {
      base: "justify-between items-center w-full lg:flex lg:w-auto lg:order-1",
      list: "flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0",
      hidden: {
        on: "hidden",
        off: "",
      },
    },
    link: {
      base: "menu-item",
      active: {
        on: "active",
        off: "inactive",
      },
    },
    toggle: {
      base: "inline-flex items-center p-2 ml-1 text-sm text-secondary-500 rounded-lg lg:hidden hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-secondary-200",
      icon: "h-6 w-6 shrink-0",
      title: "sr-only",
    },
  },
}).navbar;

export default function Header() {
  const { session, signOut } = useSession();

  return (
    <header>
      <Navbar theme={theme}>
        <NavbarBrand href="/">
          <Logo />
          Innovet Tech
        </NavbarBrand>

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
          <NavbarToggle />
        </div>

        <NavbarCollapse>
          {navigation.map((item) => (
            <NavbarLink
              key={item.title}
              href={item.href}
              active={item.href === window.location.pathname}
            >
              {item.title}
            </NavbarLink>
          ))}
        </NavbarCollapse>
      </Navbar>
    </header>
  );
}
