import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import HeaderSection from "./pages/HeaderSection";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Sell from "./pages/Sell";
import Products from "./pages/Products";
import UserProfile from "./pages/UserProfile";
import ProductsDetail from "./pages/ProductsDetail";
import Footer from "./pages/Footer";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";
import UserList from "./pages/UserList";
import AdsList from "./pages/AdsList";
import Category from "./pages/Category";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/header-section":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/sell":
        title = "";
        metaDescription = "";
        break;
      case "/products":
        title = "";
        metaDescription = "";
        break;
      case "/user-profile":
        title = "";
        metaDescription = "";
        break;
      case "/products-detail":
        title = "";
        metaDescription = "";
        break;
      case "/footer":
        title = "";
        metaDescription = "";
        break;
      case "/logindashboard":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/user-list":
        title = "";
        metaDescription = "";
        break;
      case "/ads-list":
        title = "";
        metaDescription = "";
        break;
      case "/category":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <>
    <HeaderSection />
    <Routes>
      <Route path="/" element={<Home />} />

      {/* <Route path="/header-section" element={<HeaderSection />} /> */}

      <Route path="/login" element={<Login />} />

      <Route path="/sign-up" element={<SignUp />} />

      <Route path="/sell" element={<Sell />} />

      <Route path="/products" element={<Products />} />

      <Route path="/user-profile" element={<UserProfile />} />

      <Route path="/products-detail" element={<ProductsDetail />} />

      <Route path="/footer" element={<Footer />} />

      <Route path="/logindashboard" element={<Admin />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/user-list" element={<UserList />} />

      <Route path="/ads-list" element={<AdsList />} />

      <Route path="/category" element={<Category />} />
    </Routes>
    <Footer />
    </>
  );
}
export default App;
