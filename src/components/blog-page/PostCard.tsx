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
        <div className="category">{category}</div>
        <div className="date-read">
          <div>
            <Calendar />
            {date}
          </div>
          <div>
            <Clock />
            {readTime}
          </div>
        </div>
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

      <NavLink to="#" className="more">
        Lire la suite <ChevronRight />
      </NavLink>
    </article>
  );
}
