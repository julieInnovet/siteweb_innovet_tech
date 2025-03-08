import { Calendar, ChevronRight, Clock, Tag } from "lucide-react";
import { NavLink } from "react-router-dom";

interface PostCardProps {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  tags: string[];
}

export default function PostCard({
  title,
  description,
  category,
  date,
  readTime,
  imageUrl,
  tags,
}: PostCardProps) {
  return (
    <article className="post-card">
      <NavLink to="#" className="illustration">
        <img src={imageUrl} alt="Illustration du post" />
      </NavLink>

      <div className="information">
        <span className="category">{category}</span>
        <span className="date">
          <Calendar />
          {date}
        </span>
      </div>

      <h2>
        <NavLink to="#">{title}</NavLink>
      </h2>
      <p>{description}</p>

      <ul>
        {tags.map((tag) => (
          <li key={tag}>
            <Tag /> {tag}
          </li>
        ))}
      </ul>

      <div className="more">
        <NavLink to="#">
          Lire la suite <ChevronRight />
        </NavLink>
        <span className="read">
          <Clock />
          {readTime}
        </span>
      </div>
    </article>
  );
}
