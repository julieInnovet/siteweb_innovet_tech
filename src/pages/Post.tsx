import { useParams } from "react-router-dom";
import CtaSection from "../components/layout/CtaSection";
import PostView from "../components/blog-page/PostView";
import { useBlogPost } from "../hooks/useBlogPosts";
import NotFound from "./NotFound";
import { Spinner } from "flowbite-react";

export default function Post() {
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

  return (
    <>
      <PostView post={post} />
      <CtaSection />
    </>
  );
}
