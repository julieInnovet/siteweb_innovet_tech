import { useState } from "react";
import AdminRestricted from "../../utils/middleware";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import PostCard from "./PostCard";
import { PostCardMode } from "../../types/PostCardMode";
import { NavLink, useNavigate } from "react-router-dom";
import { Ban, Save } from "lucide-react";
import { TagsInput } from "react-tag-input-component";
import Separator from "../layout/Separator";
import { imageFile2Url } from "../../utils/image";
import useBlogPosts from "../../hooks/useBlogPosts";
import { Spinner } from "flowbite-react";
import { SuccessModal } from "../layout/Modal";
import { Modal } from "flowbite";
import PostView from "./PostView";
import { BlogPost } from "../../types/BlogPost";

interface NewPostState {
  title: string;
  description: string;
  article: string;
  category: string;
  image_url: string;
  tags: string[];
}

interface PostEditProps {
  initialPost?: BlogPost;
  title: string;
}

export default function PostEdit({ initialPost, title }: PostEditProps) {
  const { create, update } = useBlogPosts();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<NewPostState>({
    title: initialPost?.title || "",
    description: initialPost?.description || "",
    article: initialPost?.article || "",
    category: initialPost?.category || "",
    image_url: initialPost?.image_url || "",
    tags: initialPost?.tags || [],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (initialPost == null) {
      const { error } = await create({
        title: formData.title,
        description: formData.description,
        article: formData.article,
        category: formData.category,
        image_url: formData.image_url,
        tags: formData.tags,
      });
      setError(error?.message || null);
    } else {
      const { error } = await update({
        id: initialPost.id,
        title: formData.title,
        description: formData.description,
        article: formData.article,
        category: formData.category,
        image_url: formData.image_url,
        tags: formData.tags,
        created_at: initialPost.created_at,
        updated_at: new Date().toISOString(),
      });
      setError(error?.message || null);
    }
    setLoading(false);
    if (!error) {
      openSuccessModal();
    }
  };

  const updateFormData = (key: string, value: string | string[]) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const updateimage_url = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      imageFile2Url(file).then((url) => {
        updateFormData("image_url", url);
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

  const navigate = useNavigate();

  const getModal = () => {
    const modalEl = document.getElementById("successModal");
    const options = {
      onHide: () => {
        setTimeout(() => {
          navigate("/admin");
        }, 500);
      },
    };
    const instanceOptions = {
      id: "successModal",
      override: true,
    };
    return new Modal(modalEl, options, instanceOptions);
  };

  const openSuccessModal = () => {
    getModal().show();
  };

  const closeSuccessModal = () => {
    getModal().hide();
  };

  const post: BlogPost = {
    id: initialPost?.id || -1,
    title: formData.title,
    description: formData.description,
    article: formData.article,
    category: formData.category,
    image_url: formData.image_url,
    tags: formData.tags,
    created_at: initialPost?.created_at || new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  return AdminRestricted({
    children: (
      <>
        <section>
          <div className="wrapper">
            <div className="title">
              <h2>{title}</h2>
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
                    <label htmlFor="image_url">Illustration</label>
                    <input
                      id="image_url"
                      name="image_url"
                      type="file"
                      onChange={updateimage_url}
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
                  disabled={loading}
                >
                  {loading ? <Spinner color="gray" /> : <Save />}
                  Valider
                </button>

                <NavLink
                  to="/admin"
                  className="cta light text-sm font-medium sm:w-fit"
                >
                  <Ban />
                  Annuler
                </NavLink>

                {error && <span className="text-red-500">{error}</span>}
              </div>
            </form>
          </div>
        </section>
        <SuccessModal
          id="successModal"
          title="Article enregistré avec succès"
          onClose={closeSuccessModal}
        />

        <Separator />
        <section>
          <div className="wrapper -mb-12">
            <div className="title">
              <h2>Prévisualisation</h2>
            </div>
          </div>
        </section>
        <Separator />
        <PostView post={post} />
      </>
    ),
  });
}
