import "./App.css";
import MainSection from "./components/MainSection";
import Header from "./components/Header";
import Whyus from "./components/Whyus";
import Category from "./components/Category";
import Faqs from "./components/Faqs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryProducts from "./pages/CategoryProducts";
import { useState } from "react";

function App() {
  const [cateName, setCateName] = useState("");
  const [cattopage, setCattopage] = useState("");
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <MainSection />
                <Whyus />
                <Category setCateName={setCateName} />
                <Faqs />
                <Footer />
              </div>
            }
          />
          <Route
            path={`/category/${cateName}`}
            element={
              <CategoryProducts
                setcattopage={setCattopage}
                cateName={cateName}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

function Footer() {
  return (
    <div className="footer-logo">
      <img
        src="./images/Creative Color Brushstroke Lettering Logo.png"
        alt="logo"
      />
    </div>
  );
}
