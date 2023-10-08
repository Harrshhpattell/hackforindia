import { useState } from "react";
import "./css/Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  return (
    <nav>
      <div className="logo">
        <img width="70%" src="./images/Nexus Logo.jpg" alt="logo" />
      </div>
      <div className={`nav-links ${isMenuOpen ? "open-menu" : ""}`}>
        <div class="MENU-1">
          <label class="burger1" for="burger1">
            <input
              type="checkbox"
              id="burger1"
              checked={isMenuOpen}
              onChange={handleMenuToggle}
            />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contant Us</li>
          <li>FAQs</li>
          <li>
            <i className="fa-solid fa-heart"></i>
          </li>
        </ul>
      </div>
    </nav>
  );
}
