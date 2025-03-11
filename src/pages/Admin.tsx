import BlogManagement from "../components/admin-page/BlogManagement";
import AdminRestricted from "../utils/middleware";

export default function Admin() {
  return AdminRestricted({ children: <BlogManagement /> });
}
