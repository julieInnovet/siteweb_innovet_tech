import { NavLink } from "react-router-dom";

export default function LegalMentions() {
  return (
    <section>
      <div className="wrapper">
        <div className="title">
          <h2>Mentions Légales</h2>
        </div>

        <div className="conditions">
          <div>
            <p>
              Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004
              pour la Confiance en l’économie numérique, il est porté à la
              connaissance des utilisateurs et visiteurs, ci-après l' "
              <strong>Utilisateur</strong>", du site
              https://www.innovet-tech.com/ , ci-après le "<strong>Site</strong>
              ", les présentes mentions légales.
            </p>
            <p>
              La connexion et la navigation sur le Site par l’Utilisateur
              implique acceptation intégrale et sans réserve des présentes
              mentions légales.
            </p>
            <p>
              Ces dernières sont accessibles sur le Site à la rubrique "
              <strong>Mentions Légales</strong>".
            </p>
          </div>

          <div>
            <h3>EDITION DU SITE</h3>
            <p>
              L'édition du Site est assurée par la société InnoVet Tech, SAS au
              capital de 20000 euros, immatriculée au Registre du Commerce et
              des Sociétés de muret sous le numéro 928395466 dont le siège
              social est situé au 241 ROUTE DU BOIS DE LA PIERRE 31370 BERAT
            </p>
            <ul>
              <li>Numéro de téléphone : 0670494614</li>
              <li>
                Adresse e-mail :{" "}
                <a href="mailto:julie@innovet-tech.com">
                  julie@innovet-tech.com
                </a>
              </li>
              <li>N° de TVA intracommunautaire : FR93928395466</li>
              <li>Directeur de la publication : Julie SAMAMA</li>
            </ul>
            <p>
              ci-après l'"<strong>Editeur</strong>".
            </p>
          </div>

          <div>
            <h3>HEBERGEUR</h3>
            <p>
              L'hébergeur du Site est la société o2switch, dont le siège social
              est situé au Chem. des Pardiaux, 63000 Clermont-Ferrand. Le numéro
              de téléphone de l'hébergeur est le 0444446040.
            </p>
          </div>

          <div>
            <h3>ACCES AU SITE</h3>
            <p>
              Le Site est normalement accessible, à tout moment, à
              l'Utilisateur. Toutefois, l'Editeur pourra, à tout moment,
              suspendre, limiter ou interrompre le Site afin de procéder,
              notamment, à des mises à jour ou des modifications de son contenu.
              L'Editeur ne pourra en aucun cas être tenu responsable des
              conséquences éventuelles de cette indisponibilité sur les
              activités de l'Utilisateur.
            </p>
          </div>

          <div>
            <h3>COLLECTE DES DONNEES</h3>
            <p>
              Le Site assure à l'Utilisateur une collecte et un traitement des
              données personnelles dans le respect de la vie privée conformément
              à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux
              fichiers aux libertés et dans le respect de la règlementation
              applicable en matière de traitement des données à caractère
              personnel conformément au règlement (UE) 2016/679 du Parlement
              européen et du Conseil du 27 avril 2016 (ci-après, ensemble, la "
              <strong>
                Règlementation applicable en matière de protection des Données à
                caractère personnel
              </strong>
              ").
            </p>
            <p>
              En vertu de la Règlementation applicable en matière de protection
              des Données à caractère personnel, l'Utilisateur dispose d'un
              droit d'accès, de rectification, de suppression et d'opposition de
              ses données personnelles. L'Utilisateur peut exercer ce droit :
            </p>
            <ul>
              <li>
                par mail à l'adresse email{" "}
                <a href="mailto:contact@innovet-tech.com">
                  contact@innovet-tech.com
                </a>
              </li>
            </ul>
            <p>
              Toute utilisation, reproduction, diffusion, commercialisation,
              modification de toute ou partie du Site, sans autorisation
              expresse de l’Editeur est prohibée et pourra entraîner des actions
              et poursuites judiciaires telles que prévues par la règlementation
              en vigueur.
            </p>
            <p>
              Pour plus d’informations, se reporter aux CGV du site{" "}
              <NavLink to="/cgv">https://www.innovet-tech.com/cgv</NavLink>.
            </p>
            <p>
              Pour plus d'informations en matière de protection des données à
              caractère personnel, se reporter à la Charte en matière de
              protection des données à caractère personnel du site{" "}
              <NavLink to="/personal-data">
                https://www.innovet-tech.com/personal-data
              </NavLink>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
