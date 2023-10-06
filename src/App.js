import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <Whyus />
    </div>
  );
}

function Header() {
  return (
    <nav>
      <div className="logo">Nexus Host</div>
      <div>
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

function MainSection() {
  return (
    <div className="main-section">
      <div className="left">
        <i class="fa-regular fa-face-smile"></i>
        <span></span>
        <span></span>
        <i class="fa-solid fa-laptop"></i>
        <i class="fa-regular fa-face-smile"></i>
        <span></span>
        <span></span>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-regular fa-face-smile"></i>
        <span></span>
        <span></span>
        <i class="fa-solid fa-laptop"></i>
      </div>
      <div className="center">
        <div>
          <h1>
            The <span>Fusion</span> of Cards and Words Flip, Spell, Triumph!
          </h1>
          <p>
            <b>Flippy Brain:</b> Spell & Brain - Flip the cards, craft the
            words, conquer the game. Are You up for the ultimate challenge?
          </p>
        </div>
        <div>
          <a href="https://github.com/Harrshhpattell">
            <button className="btn-start">Start</button>
          </a>
        </div>
        <div>
          <img
            style={{ borderRadius: "10px" }}
            width="100%"
            src="./images/kid playing.png"
            alt=""
          />
        </div>
      </div>
      <div className="left">
        <i class="fa-regular fa-face-smile"></i>
        <span></span>
        <span></span>
        <i class="fa-solid fa-laptop"></i>
        <i class="fa-regular fa-face-smile"></i>
        <span></span>
        <span></span>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-regular fa-face-smile"></i>
        <span></span>
        <span></span>
        <i class="fa-regular fa-face-smile"></i>
      </div>
    </div>
  );
}

function Whyus() {
  return (
    <div className="whyus">
      <div className="message-box">
        <h3>New updates</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consequatur, nisi!
        </p>
        <a href="www.google.com">Learn More</a>
      </div>
    </div>
  );
}

export default App;
