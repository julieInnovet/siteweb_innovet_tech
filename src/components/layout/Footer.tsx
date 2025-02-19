import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Clock, Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const [email, setEmail] = useState("");

  const submitNewsletterForm = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: submit email to newsletter service
    console.log("Newsletter subscription:", email);
  };

  return (
    <footer className="bg-white px-4 py-8 md:p-8">
      <div className="wrapper">
        <div className="flex flex-wrap justify-between gap-4 space-y-4">
          {/* Logo with Text & Links */}
          <div className="flex flex-col gap-4">
            <NavLink
              to="/"
              className="text-secondary-900 font-semibold text-2xl flex items-center gap-2"
            >
              <Logo />
              Innovet Tech
            </NavLink>

            <ul className="flex flex-col text-secondary-500 text-sm gap-4">
              <li>
                <NavLink to="/cgv">Conditions Générales de Vente</NavLink>
              </li>
              <li>
                <NavLink to="/policy">Confidentialité</NavLink>
              </li>
              <li>
                <NavLink to="/about">À Propos</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-secondary-900 font-semibold text-lg">
              Contact
            </h3>
            <div className="flex gap-2">
              <MapPin className="size-5 text-primary-500" />
              <a
                href="https://g.co/kgs/wUyfYD1"
                className="text-secondary-500 text-sm"
              >
                241 Route du Bois de la Pierre 31370 Bérat
              </a>
            </div>

            <div className="flex gap-2">
              <Phone className="size-5 text-primary-500" />
              <a href="tel:+33670494614" className="text-secondary-500 text-sm">
                06 70 49 46 14
              </a>
            </div>

            <div className="flex gap-2">
              <Mail className="size-5 text-primary-500" />
              <a
                href="mailto:contact@innovet-tech.com"
                className="text-secondary-500 text-sm"
              >
                contact@innovet-tech.com
              </a>
            </div>

            <div className="flex gap-2">
              <Clock className="size-5 text-primary-500" />
              <p className="text-secondary-500 text-sm">
                Lun – Ven: 9h00 – 18h00
              </p>
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="flex flex-col gap-4">
            <h3 className="text-secondary-900 font-semibold text-lg">
              Restez informé(e) !
            </h3>
            <p className="text-secondary-500 text-sm">
              Suivez notre actualité avec notre newsletter.
            </p>
            <form
              className="flex w-full max-w-96"
              onSubmit={submitNewsletterForm}
            >
              <div className="relative w-full">
                <label htmlFor="email" className="sr-only">
                  Adresse e-mail
                </label>
                <div className="absolute flex pl-3 items-center left-0 bottom-0 top-0">
                  <Mail className="size-5 text-secondary-500" />
                </div>
                <input
                  id="email"
                  type="email"
                  placeholder="Votre e-mail"
                  required
                  className="input rounded-l-lg"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="bg-primary-400 rounded-r-lg border border-primary-400 font-semibold text-white text-sm text-center px-5 py-3 hover:bg-primary-500"
              >
                Inscription
              </button>
            </form>
          </div>
        </div>

        <hr className="mx-auto my-6 h-0 border-t border-secondary-200" />

        <div className="flex justify-between items-center">
          <span className="text-secondary-500 text-sm">
            © 2025 <NavLink to="/">Innovet Tech</NavLink>.
            <br className="sm:hidden" />
            Tous droits réservés.
          </span>

          {/* Social Medias */}
          <div className="flex justify-center items-center text-secondary-500 gap-6">
            <a href="https://www.facebook.com/people/InnoVet-Tech/61559877454640/">
              <Facebook className="size-5" />
            </a>
            <a href="https://www.linkedin.com/company/innovet-tech/">
              <Linkedin className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
