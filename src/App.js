import "./App.css";
import MainSection from "./components/MainSection";
import Header from "./components/Header";
import Whyus from "./components/Whyus";
import Category from "./components/Category";
import Faqs from "./components/Faqs";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <Whyus />
      <Category />
      <Router>
        <Route path="/category" element={<Category/>}></Route>
      </Router>
      <Faqs />
    </div>
  );
}

export default App;
