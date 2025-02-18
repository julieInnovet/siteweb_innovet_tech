import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Building2,
} from "lucide-react";

const contactInfo = [
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Adresse",
    content: "123 Avenue de l'Innovation, 75000 Paris",
    link: "https://maps.google.com",
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Téléphone",
    content: "+33 1 23 45 67 89",
    link: "tel:+33123456789",
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    content: "contact@innovet-tech.com",
    link: "mailto:contact@innovet-tech.com",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Horaires",
    content: "Lun - Ven : 9h00 - 18h00",
  },
];

export default function Contact() {
  const [formData, setFormData] = React.useState({
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
    // Ici, ajoutez la logique d'envoi du formulaire
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
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-800 to-primary-400 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577962917302-cd874c4e31d2')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Contactez-nous
            </h1>
            <p className="text-lg text-primary-50">
              Vous souhaitez en savoir plus sur nos solutions d'IA pour votre
              clinique ? Notre équipe est là pour répondre à toutes vos
              questions.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-neutral-50"></div>
        </div>
        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
          <div className="bg-neutral-50 py-16 px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="mx-auto max-w-lg">
              <h2 className="text-2xl font-bold tracking-tight text-secondary-700">
                Nos informations
              </h2>
              <p className="mt-3 text-lg leading-6 text-gray-500">
                N'hésitez pas à nous contacter par téléphone, email ou en
                remplissant le formulaire.
              </p>
              <dl className="mt-8 space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <dt>
                      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-400 text-white">
                        {item.icon}
                      </span>
                    </dt>
                    <dd>
                      <p className="font-medium text-secondary-700">
                        {item.title}
                      </p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-primary-400 hover:text-primary-500"
                          target={
                            item.link.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.link.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{item.content}</p>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="bg-white py-16 px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="mx-auto max-w-lg lg:max-w-none">
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-y-6"
              >
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Prénom
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring-primary-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring-primary-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring-primary-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring-primary-400"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="clinicName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nom de la clinique
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500">
                      <Building2 className="h-5 w-5" />
                    </span>
                    <input
                      type="text"
                      name="clinicName"
                      id="clinicName"
                      value={formData.clinicName}
                      onChange={handleChange}
                      className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-primary-400 focus:ring-primary-400"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Sujet
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring-primary-400"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="demo">Demande de démonstration</option>
                    <option value="pricing">Informations tarifaires</option>
                    <option value="support">Support technique</option>
                    <option value="partnership">Partenariat</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring-primary-400"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full justify-center items-center gap-2 rounded-full border border-transparent bg-primary-400 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
                  >
                    Envoyer le message
                    <MessageSquare className="h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-neutral-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-700 sm:text-4xl">
              Questions fréquentes
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Retrouvez les réponses aux questions les plus courantes sur nos
              solutions.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl">
            <dl className="space-y-8">
              {[
                {
                  question: "Comment fonctionne la démonstration ?",
                  answer:
                    "Nous organisons une session en visioconférence où nous vous présentons nos solutions adaptées à vos besoins. La démo dure environ 45 minutes et inclut une période de questions.",
                },
                {
                  question: "Combien de temps dure l'installation ?",
                  answer:
                    "L'installation de nos solutions est rapide et peut être effectuée en moins de 48 heures. Notre équipe vous accompagne tout au long du processus.",
                },
                {
                  question: "Proposez-vous une formation ?",
                  answer:
                    "Oui, nous proposons une formation complète à votre équipe incluse dans nos forfaits. Des sessions de formation supplémentaires sont disponibles sur demande.",
                },
              ].map((faq, index) => (
                <div key={index}>
                  <dt className="text-lg font-semibold leading-7 text-secondary-700">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
