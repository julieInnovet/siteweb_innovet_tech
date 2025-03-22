import {
  Calendar,
  ChevronRight,
  Clock,
  Edit,
  FileImage,
  Tag,
  Trash,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { PostCardMode } from "../../types/PostCardMode";
import { readingTime } from "../../utils/reading";
import { BlogPost } from "../../types/BlogPost";
import { timestampToLocaleDate } from "../../utils/date";
import { DeleteModal } from "../layout/Modal";
import { Modal } from "flowbite";
import useBlogPosts from "../../hooks/useBlogPosts";
import { useState } from "react";

interface PostCardProps {
  mode?: PostCardMode;
  post: BlogPost;
}

export default function PostCard({
  mode = PostCardMode.Default,
  post,
}: PostCardProps) {
  const { remove } = useBlogPosts();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getModal = () => {
    const modalEl = document.getElementById(`deleteModal-${post.id}`);
    const options = {};
    const instanceOptions = {
      id: `deleteModal-${post.id}`,
      override: true,
    };
    return new Modal(modalEl, options, instanceOptions);
  };

  const openDeleteModal = () => {
    getModal().show();
  };

  const closeDeleteModal = () => {
    getModal().hide();
  };

  const deletePost = async () => {
    closeDeleteModal();
    setLoading(true);
    const { error } = await remove(post);
    setLoading(false);
    setError(error?.message || null);
    if (!error) {
      window.location.reload();
    }
  };

  return (
    <>
      <article className="post-card">
        <NavLink
          to={mode == PostCardMode.Preview ? "#" : "#"}
          className="illustration"
        >
          <object data={post.image_url} type="image/png"></object>
        </NavLink>

        <div className="information">
          {post.category ? (
            <span className="category">{post.category}</span>
          ) : (
            <span></span>
          )}
          <span className="date">
            <Calendar />
            <time>{timestampToLocaleDate(post.created_at)}</time>
          </span>
        </div>

        <h2>
          <NavLink to="#">{post.title}</NavLink>
        </h2>
        <p>{post.description}</p>

        <ul>
          {post.tags.map((tag) => (
            <li key={tag}>
              <Tag /> {tag}
            </li>
          ))}
        </ul>

        <div className="more">
          <NavLink to={mode == PostCardMode.Preview ? "#" : "#"}>
            Lire la suite <ChevronRight />
          </NavLink>
          <span className="read">
            <Clock />
            {readingTime(post.article)}
          </span>
        </div>

        {mode == PostCardMode.Admin && (
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="admin-actions">
              <NavLink to="#" className="edit">
                <Edit />
                Modifier
              </NavLink>
              <button className="delete" onClick={openDeleteModal}>
                <Trash />
                Supprimer
              </button>
            </div>
            {loading && <span className="text-blue-500">Suppression...</span>}
            {error && <span className="text-red-500">{error}</span>}
          </div>
        )}
      </article>
      <DeleteModal
        id={`deleteModal-${post.id}`}
        message={`Supprimer cet l'article "${post.title}" ?`}
        onCancelled={closeDeleteModal}
        onConfirmed={deletePost}
      />
    </>
  );
}

export function LoadingPostCard() {
  return (
    <article role="status" className="post-card animate-pulse">
      <div className="flex items-center justify-center bg-secondary-300 rounded-2xl h-48 w-full mb-5">
        <FileImage className="size-10 text-secondary-200" />
      </div>

      <div className="information">
        <span className="category">
          <div className="h-3 w-32 my-0.5"></div>
        </span>
        <span className="date">
          <Calendar />
          <div className="h-2 bg-secondary-200 rounded-full w-20"></div>
        </span>
      </div>

      <h2>
        <div className="h-6 bg-secondary-200 rounded-full max-w-96 w-full my-4"></div>
      </h2>
      <p>
        <div className="h-2 bg-secondary-200 rounded-full my-4"></div>
        <div className="h-2 bg-secondary-200 rounded-full max-w-[340px] my-4"></div>
        <div className="h-2 bg-secondary-200 rounded-full max-w-[380px] my-4"></div>
      </p>

      <ul className="my-6">
        {[1, 2].map((tag) => (
          <li key={tag}>
            <Tag />{" "}
            <div className="h-2 bg-secondary-200 rounded-full w-20"></div>
          </li>
        ))}
      </ul>

      <div className="more my-6">
        <NavLink to="#">
          <div className="h-4 bg-primary-200 rounded-full w-28"></div>
        </NavLink>
        <span className="read">
          <Clock />
          <div className="h-2 bg-secondary-200 rounded-full w-10"></div>
        </span>
      </div>

      <span className="sr-only">Chargement...</span>
    </article>
  );
}
