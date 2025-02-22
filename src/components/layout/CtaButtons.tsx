import { ChevronRight, MessageSquare } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function CtaButtons() {
  return (
    <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
      <NavLink to="/contact" className="cta light">
        Contactez-nous <MessageSquare className="h-5 w-5" />
      </NavLink>
      <NavLink to="/contact" className="cta">
        Demander une démo <ChevronRight className="size-5" />
      </NavLink>
    </div>
  );
}
