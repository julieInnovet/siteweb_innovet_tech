import { useEffect, useState } from "react";
import supabase from "../utils/supabase";
import { Session } from "@supabase/supabase-js";
import Login from "../components/admin-page/Login";

export default function Admin() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return <Login />;
  } else {
    return <div>Logged in!</div>;
  }
}
