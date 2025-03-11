import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import { useEffect } from "react";
import NotFound from "./pages/NotFound";
import CGV from "./pages/CGV";
import LegalMentions from "./pages/LegalMentions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Blog from "./pages/Blog";
import Admin from "./pages/Admin";
import NewPost from "./pages/NewPost";

export const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
    if (location.hash != "") {
      const element = document.getElementById(location.hash.slice(2));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-grow flex-col mt-16">
          <Routes>
            <Route index element={<Home />} />
            <Route path="solutions" element={<Solutions />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="blog" element={<Blog />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cgv" element={<CGV />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="legal-mentions" element={<LegalMentions />} />
            <Route path="admin">
              <Route index element={<Admin />} />
              <Route path="new-post" element={<NewPost />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
