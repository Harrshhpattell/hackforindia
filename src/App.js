import "./App.css";

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
            Elevate Your Events with Nexus Hosts - Your Partner in Unforgettable
            Experiences!
          </h1>
          <p>
            At <b>Nexus Hosts</b>, we are your dedicated partners in crafting
            exceptional events that leave lasting impressions. Our team of
            seasoned event management experts is here to turn your vision into
            reality, creating seamless and unforgettable experiences for any
            occasion.
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
            src="./images/NEXU Image.png"
            alt="logo"
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

function Category() {
  return (
    <div className="category">
      <h1>Category</h1>
      <div className="card1">
        Event Planning & Coordination
        <div>
          <img src="./images/NEXU Image.png" alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default App;
