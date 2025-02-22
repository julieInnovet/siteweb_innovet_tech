import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo_short.png";

export interface LogoProps {
  className?: string;
}

export function Logo(props: LogoProps) {
  return (
    <img
      src={logo}
      alt="Innovet Tech"
      className={props.className || "w-auto h-8"}
    />
  );
}

export function LogoWithName() {
  return (
    <NavLink
      to="/"
      className="text-secondary-900 font-semibold text-2xl flex items-center gap-2"
    >
      <Logo />
      Innovet Tech
    </NavLink>
  );
}
