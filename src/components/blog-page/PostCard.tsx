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

interface PostCardProps {
  mode?: PostCardMode;
  post: BlogPost;
}

export default function PostCard({
  mode = PostCardMode.Default,
  post,
}: PostCardProps) {
  return (
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
        <div className="admin-actions">
          <NavLink to="#" className="edit">
            <Edit />
            Modifier
          </NavLink>
          <NavLink to="#" className="delete">
            <Trash />
            Supprimer
          </NavLink>
        </div>
      )}
    </article>
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
        <div className="h-6 bg-secondary-200 rounded-full w-96 max-w-full my-4"></div>
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
