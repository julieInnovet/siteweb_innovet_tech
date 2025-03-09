import Login from "../components/admin-page/Login";
import BlogManagement from "../components/admin-page/BlogManagement";
import useSession from "../hooks/useSession";

export default function Admin() {
  const { session } = useSession();

  if (!session) {
    return <Login />;
  } else {
    return <BlogManagement />;
  }
}
