import MDEditor from "@uiw/react-md-editor";
import { Tag } from "lucide-react";
import rehypeSanitize from "rehype-sanitize";
import { BlogPost } from "../types/BlogPost";
import { timestampToLocaleDate } from "../utils/date";

interface PostProps {
  post: BlogPost;
}

export default function Post({ post }: PostProps) {
  return (
    <section className="blog-post">
      <div className="wrapper">
        <div className="title">
          <span>
            Publié le <time>{timestampToLocaleDate(post.created_at)}</time>
          </span>
          <ul>
            {post.tags.map((tag) => (
              <li key={tag}>
                <Tag /> {tag}
              </li>
            ))}
          </ul>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </div>
        <div className="content">
          <article>
            <MDEditor.Markdown
              source={post.article}
              wrapperElement={{
                "data-color-mode": "light",
              }}
              rehypePlugins={[[rehypeSanitize]]}
              rehypeRewrite={(node, _, parent) => {
                if (
                  node.data === "a" &&
                  parent &&
                  /^h(1|2|3|4|5|6)/.test(parent.type)
                ) {
                  parent.children = parent.children.slice(1);
                }
              }}
            />
          </article>
        </div>
      </div>
    </section>
  );
}
