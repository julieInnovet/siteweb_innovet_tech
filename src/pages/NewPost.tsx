import { useState } from "react";
import AdminRestricted from "../utils/middleware";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import PostCard from "../components/blog-page/PostCard";
import { PostCardMode } from "../components/blog-page/PostCardMode";
import { NavLink } from "react-router-dom";
import { Ban, Check } from "lucide-react";

export default function NewPost() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    article: "",
    category: "",
    imageUrl: "",
    tags: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: submit form data to backend
    console.log("Form submitted:", formData);
  };

  const updateFormData = (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    updateFormData(e.target.name, e.target.value);
  };

  return AdminRestricted({
    children: (
      <section>
        <div className="wrapper">
          <div className="title">
            <h2>Nouvel Article</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 items-start">
            <div className="lg:col-span-2">
              <form className="grid gap-8 mx-auto max-w-screen-md">
                <div>
                  <label htmlFor="title">Titre</label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    required
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  {/* TODO */}
                  <label htmlFor="category">Catégorie</label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="">Sélectionnez une catégorie</option>
                    <option value="Intelligence Artificielle">
                      Intelligence Artificielle
                    </option>
                    <option value="Gestion de Cabinet">
                      Gestion de Cabinet
                    </option>
                    <option value="Innovations Vétérinaires">
                      Innovations Vétérinaires
                    </option>
                    <option value="Témoignages">Témoignages</option>
                    <option value="Santé Animale">Santé Animale</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleChange}
                    rows={3}
                  />
                </div>

                <div data-color-mode="light">
                  <label htmlFor="article">Article</label>
                  <MDEditor
                    id="article"
                    value={formData.article}
                    height={400}
                    onChange={(value) => updateFormData("article", value || "")}
                    previewOptions={{
                      rehypePlugins: [[rehypeSanitize]],
                    }}
                    textareaProps={{
                      name: "article",
                      required: true,
                      rows: 40,
                      spellCheck: true,
                    }}
                  />
                </div>

                <div className="flex items-center gap-4">
                  <button
                    type="submit"
                    onSubmit={handleSubmit}
                    className="cta text-sm font-medium sm:w-fit"
                  >
                    <Check />
                    Valider
                  </button>

                  <NavLink
                    to="/admin"
                    className="cta light text-sm font-medium sm:w-fit"
                  >
                    <Ban />
                    Annuler
                  </NavLink>
                </div>
              </form>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-xl sm:text-2xl">Aperçu</h3>
              <PostCard
                mode={PostCardMode.Preview}
                id={-1}
                title={formData.title}
                description={formData.description}
                category={formData.category}
                date={new Date().toLocaleDateString("fr-FR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                readTime={`${Math.ceil(formData.article.length / 500)} min`}
                imageUrl={""}
                tags={[]}
              />
            </div>
          </div>
        </div>
      </section>
    ),
  });
}
