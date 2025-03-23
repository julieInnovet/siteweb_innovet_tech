import { Spinner } from "flowbite-react";
import { useParams } from "react-router-dom";
import PostEdit from "../components/blog-page/PostEdit";
import { useBlogPost } from "../hooks/useBlogPosts";
import NotFound from "./NotFound";
import AdminRestricted from "../utils/middleware";

export default function PostUpdate() {
  return <AdminRestricted children={<RestrictedPostUpdate />} />;
}

function RestrictedPostUpdate() {
  const { postId } = useParams();
  const { post, loading, error } = useBlogPost(postId);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner className="size-24" />
      </div>
    );

  console.error(error);
  if (error || post == null) return <NotFound />;

  return <PostEdit title="Mis à Jour de l'Article" initialPost={post} />;
}
