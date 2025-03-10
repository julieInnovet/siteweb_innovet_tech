import Login from "../components/admin-page/Login";
import useSession from "../hooks/useSession";

import { ReactNode } from "react";

export interface AdminRestrictedProps {
  children: ReactNode;
}

export default function AdminRestricted({ children }: AdminRestrictedProps) {
  const { session } = useSession();

  if (!session) {
    return <Login />;
  } else {
    return children;
  }
}
