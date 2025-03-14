import { Filter, Plus, Search } from "lucide-react";
import PostCard, { LoadingPostCard } from "./PostCard";
import { useState } from "react";
import useBlogPosts from "../../hooks/useBlogPosts";
import { NavLink } from "react-router-dom";
import { PostCardMode } from "../../types/PostCardMode";
import { BlogPost } from "../../types/BlogPost";

export interface PostsSectionProps {
  adminMode: boolean;
  title?: string;
}

function matchesQuery(text: string, searchQuery: string) {
  return text.toLowerCase().includes(searchQuery.toLowerCase());
}

export default function PostsSection({ adminMode, title }: PostsSectionProps) {
  const { posts, loading, error } = useBlogPosts();

  const NO_CATEGORY = "Sans catégorie";
  const categories = posts
    .map((post) => post.category)
    .filter((cat, idx, categories) => categories.indexOf(cat) == idx)
    .map((cat) => cat || NO_CATEGORY);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      (selectedCategory === "all" ||
        post.category === selectedCategory ||
        (post.category == "" && selectedCategory == NO_CATEGORY)) &&
      (matchesQuery(post.title, searchQuery) ||
        matchesQuery(post.description, searchQuery) ||
        post.tags.filter((tag) => matchesQuery(tag, searchQuery)).length > 0),
  );

  return (
    <section>
      <div className="wrapper">
        {title && (
          <div className="title">
            <h2>{title}</h2>
          </div>
        )}

        {/* Filtering */}
        <div className="flex flex-wrap w-full gap-4 justify-between items-center mb-6">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="w-full sm:w-64 lg:w-96">
              <label htmlFor="search" className="sr-only">
                Rechercher un article
              </label>
              <div className="input-group">
                <div className="prefix">
                  <Search />
                </div>
                <input
                  id="search"
                  name="search"
                  type="text"
                  placeholder="Rechercher un article"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  disabled={loading}
                />
              </div>
            </div>

            <div>
              <label htmlFor="category" className="sr-only">
                Choisir une catégorie
              </label>
              <div className="input-group">
                <div className="prefix">
                  <Filter />
                </div>
                <select
                  id="category"
                  name="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  disabled={loading}
                >
                  <option value="all">Toutes les catégories</option>
                  {categories.map((category, idx) => (
                    <option value={category} key={idx}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="text-sm text-secondary-600">
              {loading
                ? "Chargement..."
                : filteredPosts.length == 0
                ? "Aucun résultats"
                : filteredPosts.length == 1
                ? "1 résultat"
                : `${filteredPosts.length} résultats`}
            </div>
          </div>

          {adminMode && (
            <div className="admin-actions">
              <NavLink to="new-post" className="create">
                <Plus />
                Nouvel article
              </NavLink>
            </div>
          )}
        </div>

        {/* Posts */}
        {loading ? (
          <LoadingPosts />
        ) : error ? (
          <Error error={error} />
        ) : filteredPosts.length > 0 ? (
          <Posts adminMode={adminMode} posts={filteredPosts} />
        ) : (
          <NoPosts />
        )}
      </div>
    </section>
  );
}

function Posts({
  adminMode,
  posts,
}: {
  adminMode: boolean;
  posts: BlogPost[];
}) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          mode={adminMode ? PostCardMode.Admin : PostCardMode.Default}
          post={post}
        />
      ))}
    </div>
  );
}

function LoadingPosts() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3].map((id) => (
        <LoadingPostCard key={id} />
      ))}
    </div>
  );
}

function NoPosts() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Aucun article trouvé</h2>
      <p className="text-lg text-secondary-600">
        Désolé, aucun article ne correspond à votre recherche.
      </p>
    </div>
  );
}

function Error({ error }: { error: string }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Une erreur est survenue</h2>
      <p className="text-lg text-secondary-600">{error}</p>
    </div>
  );
}
