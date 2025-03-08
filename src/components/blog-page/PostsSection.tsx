import { posts } from "../../constants/mock-posts";
import PostCard from "./PostCard";

export default function PostsSection() {
  return (
    <section>
      <div className="wrapper">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
