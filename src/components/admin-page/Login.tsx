import { Lock, Mail } from "lucide-react";
import { useState } from "react";
import { Spinner } from "flowbite-react";
import useSession from "../../hooks/useSession";

export default function Login() {
  const { signIn } = useSession();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const error = await signIn(formData.email, formData.password);
    setLoading(false);
    setError(error || "");
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
    <section className="grow flex items-center">
      <div className="wrapper">
        <div className="w-full bg-white rounded-2xl shadow-soft">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Connexion à votre compte
            </h1>

            <form
              className="flex flex-col gap-4 md:gap-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="email">Email</label>
                <div className="input-group">
                  <div className="prefix">
                    <Mail />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password">Mot de Passe</label>
                <div className="input-group">
                  <div className="prefix">
                    <Lock />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {error && (
                <p className="text-red-500 text-sm font-medium">{error}</p>
              )}

              <button
                type="submit"
                className="cta text-sm font-medium w-full"
                disabled={loading}
              >
                <span className="relative">
                  {loading && (
                    <Spinner className="absolute -left-10" color="gray" />
                  )}
                  Se connecter
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
