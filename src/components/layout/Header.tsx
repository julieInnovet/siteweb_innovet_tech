import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../../types';

const navigation: NavItem[] = [
  { title: 'Accueil', href: '/' },
  { title: 'Nos Solutions', href: '/solutions' },
  { title: 'Tarifs', href: '/tarifs' },
  { title: 'Blog', href: '/blog' },
  { title: 'À Propos', href: '/a-propos' },
  { title: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-neutral-100 shadow-soft">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <NavLink to="/" className="-m-1.5 p-1.5">
            <img 
              src="https://raw.githubusercontent.com/bolt-bot/innovet-tech-assets/main/logo.png" 
              alt="Innovet Tech" 
              className="h-12 w-auto"
            />
          </NavLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-secondary-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Ouvrir le menu principal</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <NavLink
              key={item.title}
              to={item.href}
              className={({ isActive }) =>
                `text-sm font-semibold leading-6 transition-colors ${
                  isActive ? 'text-primary-400' : 'text-secondary-700 hover:text-primary-400'
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NavLink
            to="/contact"
            className="rounded-full bg-primary-400 px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
          >
            Demander une démo
          </NavLink>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'}`}>
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="-m-1.5 p-1.5">
              <img 
                src="https://raw.githubusercontent.com/bolt-bot/innovet-tech-assets/main/logo.png" 
                alt="Innovet Tech" 
                className="h-8 w-auto"
              />
            </NavLink>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-secondary-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Fermer le menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-neutral-200">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <NavLink
                    key={item.title}
                    to={item.href}
                    className={({ isActive }) =>
                      `-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors ${
                        isActive ? 'bg-neutral-50 text-primary-400' : 'text-secondary-700 hover:bg-neutral-50 hover:text-primary-400'
                      }`
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </NavLink>
                ))}
              </div>
              <div className="py-6">
                <NavLink
                  to="/contact"
                  className="block rounded-full bg-primary-400 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-soft transition-all hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Demander une démo
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}