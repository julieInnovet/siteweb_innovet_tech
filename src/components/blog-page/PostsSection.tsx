import { Filter, Search } from "lucide-react";
import PostCard, { LoadingPostCard } from "./PostCard";
import { useState } from "react";
import useBlogPosts, { Post } from "../../hooks/useBlogPosts";

function matchesQuery(text: string, searchQuery: string) {
  return text.toLowerCase().includes(searchQuery.toLowerCase());
}

export default function PostsSection() {
  const { posts, loading } = useBlogPosts();
  const categories = posts
    .map((post) => post.category)
    .filter((cat, idx, categories) => categories.indexOf(cat) == idx);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      (selectedCategory === "all" || post.category === selectedCategory) &&
      (matchesQuery(post.title, searchQuery) ||
        matchesQuery(post.description, searchQuery) ||
        post.tags.filter((tag) => matchesQuery(tag, searchQuery)).length > 0),
  );

  return (
    <section>
      <div className="wrapper">
        {/* Filtering */}
        <div className="flex flex-wrap w-full mb-6 gap-4 items-center">
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

        {/* Posts */}
        {loading ? (
          <LoadingPosts />
        ) : filteredPosts.length > 0 ? (
          <Posts posts={filteredPosts} />
        ) : (
          <NoPosts />
        )}
      </div>
    </section>
  );
}

function Posts({ posts }: { posts: Post[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
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
