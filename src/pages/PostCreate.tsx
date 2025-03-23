import PostEdit from "../components/blog-page/PostEdit";
import AdminRestricted from "../utils/middleware";

export default function PostCreate() {
  return <AdminRestricted children={<PostEdit title={"Nouvel Article"} />} />;
}
