import logo from "../../assets/images/logo_short.png";

export interface LogoProps {
  className?: string;
}

export default function Logo(props: LogoProps) {
  return (
    <img
      src={logo}
      alt="Innovet Tech"
      className={props.className || "w-auto h-8"}
    />
  );
}
