import { useState } from "react";
import AdminRestricted from "../utils/middleware";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import PostCard from "../components/blog-page/PostCard";
import { PostCardMode } from "../types/PostCardMode";
import { NavLink } from "react-router-dom";
import { Ban, Save } from "lucide-react";
import { TagsInput } from "react-tag-input-component";
import Separator from "../components/layout/Separator";
import { imageFile2Url } from "../utils/image";
import Post from "./Post";

interface NewPostState {
  title: string;
  description: string;
  article: string;
  category: string;
  imageUrl: string;
  tags: string[];
}

export default function NewPost() {
  const [formData, setFormData] = useState<NewPostState>({
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

  const updateFormData = (key: string, value: string | string[]) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const updateImageUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      imageFile2Url(file).then((url) => {
        updateFormData("imageUrl", url);
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    updateFormData(e.target.name, e.target.value);
  };

  const post = {
    id: -1,
    title: formData.title,
    description: formData.description,
    article: formData.article,
    category: formData.category,
    imageUrl: formData.imageUrl,
    tags: formData.tags,
    date: new Date().toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };

  return AdminRestricted({
    children: (
      <>
        <section>
          <div className="wrapper">
            <div className="title">
              <h2>Nouvel Article</h2>
            </div>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 lg:grid-cols-3 items-center">
                <div className="flex flex-col gap-4 lg:col-span-2">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="title">Titre</label>
                      <input
                        id="title"
                        name="title"
                        type="text"
                        required
                        value={post.title}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      {/* TODO: Categories for new article */}
                      <label htmlFor="category">Catégorie</label>
                      <select
                        id="category"
                        name="category"
                        value={post.category}
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
                  </div>

                  <div>
                    <label htmlFor="imageUrl">Illustration</label>
                    <input
                      id="imageUrl"
                      name="imageUrl"
                      type="file"
                      onChange={updateImageUrl}
                      accept="image/*"
                    />
                  </div>

                  <div>
                    <label htmlFor="tags">Tags</label>
                    <TagsInput
                      name="tags"
                      value={post.tags}
                      onChange={(tags) => updateFormData("tags", tags)}
                      placeHolder="Ajouter un tag"
                    />
                  </div>

                  <div>
                    <label htmlFor="description">Description</label>
                    <textarea
                      id="description"
                      name="description"
                      value={post.description}
                      onChange={handleChange}
                      rows={2}
                    />
                  </div>
                </div>

                <div>
                  <PostCard mode={PostCardMode.Preview} post={post} />
                </div>
              </div>

              <div data-color-mode="light">
                <label htmlFor="article">Article</label>
                <MDEditor
                  id="article"
                  value={post.article}
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
                  <Save />
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
        </section>

        <Separator />
        <section>
          <div className="wrapper -mb-12">
            <div className="title">
              <h2>Prévisualisation</h2>
            </div>
          </div>
        </section>
        <Separator />
        <Post post={post} />
      </>
    ),
  });
}
