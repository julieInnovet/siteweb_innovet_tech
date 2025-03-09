import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Clock, Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { LogoWithName } from "./Logo";
import {
  address,
  addressLink,
  facebook,
  linkedin,
  mail,
  mailLink,
  openingHours,
  phone,
  phoneLink,
} from "../../constants/contact";

export default function Footer() {
  const [email, setEmail] = useState("");

  const submitNewsletterForm = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: submit email to newsletter service
    console.log("Newsletter subscription:", email);
  };

  return (
    <footer className="bg-white text-secondary-500 text-sm  px-4 py-8 md:p-8">
      <div className="wrapper">
        <div className="flex flex-wrap justify-between gap-4 space-y-4">
          {/* Logo with Text & Links */}
          <div className="footer-section">
            <LogoWithName />

            <ul className="flex flex-col gap-4">
              <li>
                <NavLink to="/cgv">Conditions Générales de Vente</NavLink>
              </li>
              <li>
                <NavLink to="/privacy-policy">
                  Politique de Confidentialité
                </NavLink>
              </li>
              <li>
                <NavLink to="/legal-mentions">Mentions Légales</NavLink>
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
          <div className="footer-section">
            <h3>Contact</h3>
            <div className="contact-item">
              <MapPin />
              <a href={addressLink}>{address}</a>
            </div>

            <div className="contact-item">
              <Phone />
              <a href={phoneLink}>{phone}</a>
            </div>

            <div className="contact-item">
              <Mail />
              <a href={mailLink}>{mail}</a>
            </div>

            <div className="contact-item">
              <Clock />
              <p>{openingHours}</p>
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="footer-section">
            <h3>Restez informé(e) !</h3>
            <p>Suivez notre actualité avec notre newsletter.</p>
            <form
              className="flex w-full max-w-96"
              onSubmit={submitNewsletterForm}
            >
              <div className="input-group">
                <label htmlFor="email" className="sr-only">
                  Adresse e-mail
                </label>
                <div className="prefix">
                  <Mail />
                </div>
                <input
                  id="email"
                  type="email"
                  placeholder="Votre e-mail"
                  required
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

        <hr />

        <div className="flex justify-between items-center">
          <span>
            © 2025 <NavLink to="/">Innovet Tech</NavLink>.
            <br className="sm:hidden" />
            Tous droits réservés.
          </span>

          {/* Social Medias */}
          <div className="socials">
            <a href={facebook}>
              <Facebook />
            </a>
            <a href={linkedin}>
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
