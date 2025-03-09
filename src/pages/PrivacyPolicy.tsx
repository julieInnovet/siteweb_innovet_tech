import { mail, mailLink } from "../constants/contact";

export default function PrivacyPolicy() {
  return (
    <section>
      <div className="wrapper">
        <div className="title">
          <h2>Politique de Confidentialité</h2>
        </div>

        <div className="conditions">
          <div>
            <h3>Introduction</h3>
            <p>
              Chez INNOVET TECH, nous accordons une importance primordiale à la
              confidentialité et à la sécurité des données de nos utilisateurs.
              Cette Politique de Confidentialité décrit la manière dont nous
              collectons, stockons, utilisons et protégeons les informations
              personnelles des utilisateurs accédant à notre site internet. Nos
              pratiques sont conformes au Règlement Général sur la Protection
              des Données (RGPD) et aux autres lois applicables en matière de
              confidentialité dans l’Union Européenne.
            </p>
          </div>

          <div>
            <h3>Collecte et Utilisation des Données</h3>
            <p>Nous collectons les types d'informations suivants :</p>
            <ul>
              <li>
                <strong>Données de Contact</strong> : Nous demandons vos
                informations de contact (nom, email, téléphone) lors d'une prise
                de contact afin de pouvoir poursuivre la communication avec
                l'utilisateur.
              </li>
              <li>
                <strong>Newsletter</strong> : Nous collectons votre adresse
                email si vous vous inscrivez à notre newsletter.
              </li>
              <li>
                <strong>Cookies</strong> : Aucun cookie n'est utilisé lors de
                votre navigation sur notre site.
              </li>
            </ul>
          </div>

          <div>
            <h3>Durée de Conservation</h3>
            <p>
              Les données personnelles des utilisateurs sont conservées aussi
              longtemps que nécessaire pour atteindre les finalités pour
              lesquelles elles ont été collectées, sauf si une période de
              conservation plus longue est requise ou autorisée par la loi.
            </p>
          </div>

          <div>
            <h3>Partage des Données</h3>
            <p>
              Nous ne partageons pas vos données personnelles avec des tiers.
            </p>
          </div>

          <div>
            <h3>Droits des Utilisateurs</h3>
            <p>En vertu du RGPD, vous avez le droit de :</p>
            <ul>
              <li>Accéder à vos données personnelles</li>
              <li>Rectifier les données incorrectes ou incomplètes</li>
              <li>Demander la suppression de vos données</li>
              <li>Limiter le traitement de vos données</li>
              <li>Demander la portabilité de vos données</li>
            </ul>
            Si vous souhaitez exercer l'un de ces droits, veuillez nous
            contacter à <a href={mailLink}>{mail}</a>.
          </div>

          <div>
            <h3>Modifications de cette Politique</h3>
            <p>
              Nous pouvons mettre à jour cette politique en fonction des
              changements de nos pratiques ou des exigences légales. Toute mise
              à jour sera publiée sur cette page, et nous vous encourageons à
              consulter régulièrement cette politique.
            </p>
          </div>

          <div>
            <h3>Contactez-Nous</h3>
            <p>
              Si vous avez des questions ou des préoccupations concernant cette
              Politique de Confidentialité ou vos données, veuillez nous
              contacter à <a href={mailLink}>{mail}</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
