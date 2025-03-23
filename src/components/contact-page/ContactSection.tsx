import {
  Building2,
  Clock,
  List,
  Mail,
  MapPin,
  MessagesSquare,
  Phone,
  User,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  address,
  addressLink,
  mail,
  mailLink,
  openingHours,
  phone,
  phoneLink,
} from "../../constants/contact";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    content: address,
    link: addressLink,
  },
  {
    icon: Phone,
    title: "Téléphone",
    content: phone,
    link: phoneLink,
  },
  {
    icon: Mail,
    title: "Email",
    content: mail,
    link: mailLink,
  },
  {
    icon: Clock,
    title: "Horaires",
    content: openingHours,
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    clinicName: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: submit form data to backend
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section>
      <div className="wrapper">
        <div className="title">
          <h2>Nos informations</h2>
          <p>
            N'hésitez pas à nous contacter par téléphone, email ou en
            remplissant le formulaire.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <form className="grid gap-8 mx-auto max-w-screen-md sm:grid-cols-2">
              <div>
                <label htmlFor="firstName">Prénom</label>
                <div className="input-group">
                  <div className="prefix">
                    <User />
                  </div>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="lastName">Nom</label>
                <div className="input-group">
                  <div className="prefix">
                    <User />
                  </div>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <div className="input-group">
                  <div className="prefix">
                    <Mail />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone">Téléphone</label>
                <div className="input-group">
                  <div className="prefix">
                    <Phone />
                  </div>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="clinicName">Nom de la clinique</label>
                <div className="input-group">
                  <div className="prefix">
                    <Building2 />
                  </div>
                  <input
                    id="clinicName"
                    name="clinicName"
                    type="text"
                    value={formData.clinicName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="subject">Sujet</label>
                <div className="input-group">
                  <div className="prefix">
                    <List />
                  </div>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="demo">Demande de démonstration</option>
                    <option value="pricing">Informations tarifaires</option>
                    <option value="support">Support technique</option>
                    <option value="partnership">Partenariat</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message">Message</label>
                <div className="input-group">
                  <div className="prefix">
                    <MessagesSquare />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <p className="text-sm text-secondary-500 mt-4">
                  En soumettant ce formulaire, vous acceptez notre{" "}
                  <NavLink to="/privacy-policy" className="text-primary-400">
                    Politique de Confidentialité
                  </NavLink>
                  .
                </p>
              </div>

              <button
                type="submit"
                onSubmit={handleSubmit}
                className="cta text-sm font-medium sm:w-fit"
              >
                Envoyer le message
              </button>
            </form>
          </div>

          <div className="grid text-center gap-8 sm:grid-cols-2 lg:grid-cols-1">
            {contactInfo.map((info, index) => (
              <div key={index}>
                <div className="flex justify-center items-center mb-4 mx-auto bg-primary-100 rounded-lg size-10 lg:size-16">
                  {
                    <info.icon className="block text-primary-600 size-5 lg:size-8" />
                  }
                </div>
                <p className="text-secondary-900 font-bold text-xl mb-2">
                  {info.title}
                </p>
                {info.link ? (
                  <a className="text-secondary-500" href={info.link}>
                    {info.content}
                  </a>
                ) : (
                  <p className="text-secondary-500">{info.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
