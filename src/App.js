import "./App.css";
import MainSection from "./components/MainSection";
import Header from "./components/Header";
import Whyus from "./components/Whyus";
import Category from "./components/Category";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <Whyus />
      <Category />
    </div>
  );
}

export default App;
