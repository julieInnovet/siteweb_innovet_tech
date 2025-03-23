import { Session } from "@supabase/supabase-js";
import { useState, useEffect } from "react";
import supabase from "../utils/supabase";

interface UseSession {
  session: Session | null;
  signIn: (email: string, password: string) => Promise<string | void>;
  signOut: () => Promise<string | void>;
}

export default function useSession(): UseSession {
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

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return error?.message;
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    return error?.message;
  };

  return {
    session,
    signIn,
    signOut,
  };
}
