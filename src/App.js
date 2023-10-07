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
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <MainSection />
                <Whyus />
                <Category setCateName={setCateName} />
                <Faqs />
              </div>
            }
          />
          <Route
            path={`/category/${cateName}`}
            element={<CategoryProducts cateName={cateName} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
