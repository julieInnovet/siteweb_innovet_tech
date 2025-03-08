import { Filter, Search } from "lucide-react";
import { posts } from "../../constants/mock-posts";
import PostCard from "./PostCard";
import { useState } from "react";

function matchesQuery(text: string, searchQuery: string) {
  return text.toLowerCase().includes(searchQuery.toLowerCase());
}

export default function PostsSection() {
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
            {filteredPosts.length == 0
              ? "Aucun résultats"
              : filteredPosts.length == 1
              ? "1 résultat"
              : `${filteredPosts.length} résultats`}
          </div>
        </div>

        {/* Posts */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
