import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Brain, Facebook, Twitter, Linkedin, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, ajoutez la logique d'envoi du formulaire newsletter
    console.log("Newsletter subscription:", email);
  };

  return (
    <footer className="bg-secondary-800 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <NavLink to="/" className="flex items-center gap-2">
              <Brain className="h-8 w-8 text-primary-400" />
              <span className="font-bold text-xl">Innovet Tech</span>
            </NavLink>
            <p className="text-sm leading-6 text-neutral-300">
              Solutions d'intelligence artificielle innovantes pour les
              vétérinaires.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-neutral-400 hover:text-primary-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Navigation
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <NavLink
                      to="/"
                      className="text-sm leading-6 text-neutral-300 hover:text-primary-400"
                    >
                      Accueil
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/solutions"
                      className="text-sm leading-6 text-neutral-300 hover:text-primary-400"
                    >
                      Nos Solutions
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/tarifs"
                      className="text-sm leading-6 text-neutral-300 hover:text-primary-400"
                    >
                      Tarifs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/blog"
                      className="text-sm leading-6 text-neutral-300 hover:text-primary-400"
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/a-propos"
                      className="text-sm leading-6 text-neutral-300 hover:text-primary-400"
                    >
                      À Propos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className="text-sm leading-6 text-neutral-300 hover:text-primary-400"
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  En savoir plus
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <NavLink
                      to="/cgv"
                      className="text-sm leading-6 text-neutral-300 hover:text-primary-400"
                    >
                      Conditions générales de vente
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/confidentialite"
                      className="text-sm leading-6 text-neutral-300 hover:text-primary-400"
                    >
                      Confidentialité
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/mentions-legales"
                      className="text-sm leading-6 text-neutral-300 hover:text-primary-400"
                    >
                      Mentions légales
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="mb-8">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Contact
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex gap-2">
                    <MapPin className="h-5 w-5 text-primary-400" />
                    <span className="text-sm leading-6 text-neutral-300">
                      241 route du bois de la pierre 31370 Bérat
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Mail className="h-5 w-5 text-primary-400" />
                    <span className="text-sm leading-6 text-neutral-300">
                      contact@innovet-tech.com
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Restez informé(e) !
                </h3>
                <p className="mt-2 text-sm text-neutral-300">
                  Inscrivez-vous à notre Newsletter pour suivre nos actualités.
                </p>
                <form onSubmit={handleSubmit} className="mt-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      required
                      placeholder="Adresse e-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="min-w-0 flex-auto rounded-full bg-white/5 px-4 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-primary-400 sm:text-sm sm:leading-6"
                    />
                    <button
                      type="submit"
                      className="flex-none rounded-full bg-primary-400 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
                    >
                      Je m'inscris
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-xs leading-5 text-neutral-400">
            &copy; {new Date().getFullYear()} Innovet Tech. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
