import React from 'react';
import { NavLink } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, Tag, Search } from 'lucide-react';

const categories = [
  "Toutes les actualités",
  "Intelligence Artificielle",
  "Innovations Vétérinaires",
  "Gestion de Cabinet",
  "Santé Animale",
  "Témoignages"
];

const posts = [
  {
    id: 1,
    title: "L'IA révolutionne le diagnostic vétérinaire",
    excerpt: "Découvrez comment l'intelligence artificielle améliore la précision des diagnostics en clinique vétérinaire.",
    category: "Intelligence Artificielle",
    date: "15 Mars 2024",
    readTime: "5 min",
    imageUrl: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7",
    tags: ["IA", "Diagnostic", "Innovation"]
  },
  {
    id: 2,
    title: "Optimiser la gestion administrative de votre clinique",
    excerpt: "Guide pratique pour automatiser les tâches administratives et gagner du temps au quotidien.",
    category: "Gestion de Cabinet",
    date: "12 Mars 2024",
    readTime: "8 min",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    tags: ["Gestion", "Automatisation", "Productivité"]
  },
  {
    id: 3,
    title: "Les dernières innovations en imagerie vétérinaire",
    excerpt: "Tour d'horizon des nouvelles technologies d'imagerie pour un diagnostic plus précis.",
    category: "Innovations Vétérinaires",
    date: "10 Mars 2024",
    readTime: "6 min",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    tags: ["Imagerie", "Technologie", "Diagnostic"]
  },
  {
    id: 4,
    title: "Témoignage : Dr Martin et l'IA au quotidien",
    excerpt: "Découvrez comment le Dr Martin a transformé sa pratique grâce à nos solutions d'IA.",
    category: "Témoignages",
    date: "8 Mars 2024",
    readTime: "4 min",
    imageUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7",
    tags: ["Témoignage", "Expérience", "IA"]
  },
  {
    id: 5,
    title: "Prévention et suivi : l'importance des données",
    excerpt: "Comment l'analyse des données améliore la prévention et le suivi des patients.",
    category: "Santé Animale",
    date: "5 Mars 2024",
    readTime: "7 min",
    imageUrl: "https://images.unsplash.com/photo-1612531385446-f7e6d131e1d0",
    tags: ["Données", "Prévention", "Suivi"]
  }
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = React.useState("Toutes les actualités");
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === "Toutes les actualités" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-800 to-primary-400 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Blog & Actualités
            </h1>
            <p className="text-lg text-primary-50">
              Découvrez nos derniers articles sur l'innovation vétérinaire, 
              l'intelligence artificielle et les meilleures pratiques pour votre clinique.
            </p>
          </div>
        </div>
      </section>

      {/* Filtres et Recherche */}
      <section className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium ${
                    selectedCategory === category
                      ? 'bg-primary-400 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-neutral-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="bg-primary-100 text-primary-400 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-secondary-700 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <div key={tag} className="flex items-center gap-1 text-sm text-gray-500">
                        <Tag className="h-4 w-4" />
                        {tag}
                      </div>
                    ))}
                  </div>
                  <NavLink
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-primary-400 font-medium hover:text-primary-500"
                  >
                    Lire la suite <ChevronRight className="h-4 w-4" />
                  </NavLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-primary-400 rounded-2xl p-8 md:p-12 lg:p-16">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Restez informé des dernières innovations
              </h2>
              <p className="text-primary-50 mb-8">
                Inscrivez-vous à notre newsletter pour recevoir nos derniers articles 
                et actualités sur l'innovation vétérinaire.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-grow px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  className="bg-white text-primary-400 px-6 py-3 rounded-full font-semibold hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  S'inscrire
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}