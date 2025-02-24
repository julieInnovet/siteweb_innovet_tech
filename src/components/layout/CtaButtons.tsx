import { ChevronRight, MessageSquare } from "lucide-react";
import { NavLink } from "react-router-dom";
import { demoRequestUrl } from "../../constants/contact";

export default function CtaButtons() {
  return (
    <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
      <NavLink to="/contact" className="cta light">
        Contactez-nous <MessageSquare className="h-5 w-5" />
      </NavLink>
      <a href={demoRequestUrl} className="cta">
        Demander une Démo <ChevronRight className="size-5" />
      </a>
    </div>
  );
}
